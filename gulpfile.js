'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var newer = require('gulp-newer');
var using = require('gulp-using');

if (!global.Promise) {
  global.Promise = require('es6-promise').Promise;
}

// remove app,dist directory.
gulp.task('clean', function(callback) {
  var del = require('del');
  del(['app','dist'], callback);
});

// copy static files
gulp.task('copy', function() {
  return gulp.src(['src/images/*','src/mimetype.txt'], { base:'src' })
    .pipe(newer('app'))
    .pipe(using())
    .pipe(gulp.dest('app'));
});

gulp.task('manifest', function() {
  var yaml = require('gulp-yaml');
  var pkg = require('./package');
  var es = require('event-stream');
  return gulp.src('src/manifest.yaml')
    .pipe(plumber())
    //.pipe(newer({dest:'app', ext:'.json'}))
    .pipe(using())
    .pipe(yaml())
    .pipe(es.map(function(file, cb){
      var data = JSON.parse(file.contents);
      data.version = pkg.version;
      file.contents = new Buffer(JSON.stringify(data));
      return cb(null, file);
    }))
    .pipe(gulp.dest('app'));
});

gulp.task('html', function() {
  var htmlhint = require('gulp-htmlhint');
  return gulp.src(['src/*html'])
    .pipe(newer('app'))
    .pipe(using())
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
    .pipe(gulp.dest('app'));
});

gulp.task('views', function() {
  var htmlhint = require('gulp-htmlhint');
  return gulp.src(['src/views/**/*html'])
    .pipe(newer('app/views'))
    .pipe(using())
    .pipe(htmlhint({ 'doctype-first': false }))
    .pipe(htmlhint.reporter())
    .pipe(gulp.dest('app/views'));
});

gulp.task('views-js', ['views'], function() {
  var ngTemplates = require('gulp-ng-templates');
  var minifyHtml = require('gulp-minify-html');
  return gulp.src(['app/views/**/*html'])
    .pipe(minifyHtml({empty: true}))
    .pipe(ngTemplates({
      filename: 'template-cache.js',
      module: 'app.templateCache',
      path: function (path, base) {
        return path.replace(base, 'views/');
      }
    }))
    .pipe(gulp.dest('app/js/'));
});

gulp.task('_locale', function() {
  var yaml = require('gulp-yaml');
  return gulp.src('src/_locales/**/*.yaml')
    .pipe(plumber())
    .pipe(newer({dest:'app/_locales', ext:'.json'}))
    .pipe(using())
    .pipe(yaml())
    .pipe(gulp.dest('app/_locales'));
});

// lint and copy js files to build directory.
gulp.task('js', function() {
  var jshint = require('gulp-jshint');
  var stylish = require('jshint-stylish');
  return gulp.src(['src/js/**/*js', '!src/js/vendor/**js'])
    .pipe(newer('app/js'))
    .pipe(using())
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(gulp.dest('app/js'));
});

gulp.task('js-vendor', function() {
  return gulp.src(['src/js/vendor/**/*js'])
    .pipe(newer('app/js/vendor'))
    .pipe(using())
    .pipe(gulp.dest('app/js/vendor'));
});

// compile sass to css
gulp.task('sass', function() {
  var sass = require('gulp-sass');
  return gulp.src(['src/sass/style.scss'])
    .pipe(plumber())
    //.pipe(newer({dest:'app/css', ext:'.css'}))
    .pipe(using())
    .pipe(sass({
      style: 'expanded',
      errLogToConsole: true
    }))
    //.pipe(autoprefixer('last 2 version', 'ie 10', 'ff'))
    .pipe(gulp.dest('app/css'));
});

// install bower components
gulp.task('bower', function() {
  var bower = require('gulp-bower');
  return bower()
    .pipe(gulp.dest('app/bower_components'));
});

// gulpfile
gulp.task('self', function() {
  var jshint = require('gulp-jshint');
  var stylish = require('jshint-stylish');
  return gulp.src(['gulpfile.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('copy-dist', ['default'], function() {
  var rename = require('gulp-rename');
  var uglify = require('gulp-uglify');
  var es = require('event-stream');
  var tasks = [];
  var manifest = require('./app/manifest');
  var files = ['app/_locales/**', 'app/images/**', 'app/manifest.json', 'app/mimetype.txt'];
  manifest.app.background.scripts.forEach(function(f) {
    if (!f.match(/js\/main\.js$/)) {
      files.push('app/' + f);
    }
  });

  tasks.push(
    gulp.src(files, { base: 'app' })
      .pipe(gulp.dest('dist'))
  );
  tasks.push(
    gulp.src(['app/bower_components/**/*.+(eot|svg|ttf|woff)'])
      .pipe(rename(function(path) {
        path.dirname = '';
      }))
      .pipe(gulp.dest('dist/fonts'))
  );
  tasks.push(
    gulp.src(['app/js/main.js'], { base: 'app' })
      .pipe(uglify({compress: false,mangle: false}))
      .pipe(gulp.dest('dist'))
  );
  return es.concat.apply(null, tasks);
});

gulp.task('usemin', ['default'], function() {
  var fs = require('fs');
  var usemin = require('gulp-usemin');
  var minifyCss = require('gulp-minify-css');
  var uglify = require('gulp-uglify');
  var footer = require('gulp-footer');
  var minifyHtml = require('gulp-minify-html');
  return gulp.src('app/index.html')
    .pipe(plumber())
    .pipe(usemin({
      css: [minifyCss({
        aggressiveMerging: false,
      }), 'concat'],
      css2: [minifyCss({
        aggressiveMerging: false,
      }), 'concat'],
      html: [minifyHtml({empty: true})],
      js: [
	footer(';/*EOF*/;'), 'concat',
        uglify({compress:{}, mangle: false})
      ],
      js2: [
        footer(fs.readFileSync('app/js/etc.js')),
        uglify({compress:{}, mangle: false})
      ]
    }))
    .pipe(gulp.dest('dist'));
});

// create zip package
gulp.task('build', ['copy-dist', 'usemin'], function() {
  var zip = require('gulp-zip');
  var pkg = require('./package');
  var zipFile = pkg.name + '-v' + pkg.version + '.zip';
  return gulp.src(['dist/**/*'])
    .pipe(zip(zipFile))
    .pipe(gulp.dest('package'));
});

// default task
gulp.task('default', [
  'manifest',
  'copy',
  'html',
  'views',
  'views-js',
//  'bower',
  '_locale',
  'js',
  'js-vendor',
  'sass',
]);

gulp.task('watch', ['default'], function() {
  gulp.watch('src/*html', ['html']);
  gulp.watch('src/views/**/*html', ['views']);
  gulp.watch('app/views/**/*html', ['views-js']);
  gulp.watch('src/_locales/**/*.yaml', ['_locale']);
  gulp.watch(['src/js/**/*js', '!src/js/vendor/**js'], ['js']);
  gulp.watch('src/js/vendor/**/*js', ['js-vendor']);
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch(['src/images/*','src/mimetype.txt'], ['copy']);
});


