'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var del = require('del');
var newer = require('gulp-newer');
var using = require('gulp-using');
var yaml = require('gulp-yaml');
var jshint = require('gulp-jshint');
var htmlhint = require('gulp-htmlhint');
var stylish = require('jshint-stylish');
var ngTemplates = require('gulp-ng-templates');
var sass = require('gulp-sass');
var bower = require('gulp-bower');
var usemin = require('gulp-usemin');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var zip = require('gulp-zip');
var es = require('event-stream');

// remove app,dist directory.
gulp.task('clean', function(callback) {
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
  return gulp.src('src/manifest.yaml')
    .pipe(plumber())
    .pipe(newer({dest:'app', ext:'.json'}))
    .pipe(using())
    .pipe(yaml({pretty:true}))
    .pipe(gulp.dest('app'));
});

gulp.task('html', function() {
  return gulp.src(['src/*html'])
    .pipe(newer('app'))
    .pipe(using())
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
    .pipe(gulp.dest('app'));
});

gulp.task('views', function() {
  return gulp.src(['src/views/**/*html'])
    .pipe(newer('app/views'))
    .pipe(using())
    .pipe(htmlhint({ 'doctype-first': false }))
    .pipe(htmlhint.reporter())
    .pipe(gulp.dest('app/views'));
});

gulp.task('views-js', ['views'], function() {
  return gulp.src(['app/views/**/*html'])
    .pipe(ngTemplates({
      filename: 'template-cache.js',
      module: 'app.templateCache',
      path: function (path) {
        return path.replace(/^.*app\//, '');
      }
    }))
    .pipe(gulp.dest('app/js/'));
});

gulp.task('_locale', function() {
  return gulp.src('src/_locales/**/*.yaml')
    .pipe(plumber())
    .pipe(newer({dest:'app/_locales', ext:'.json'}))
    .pipe(using())
    .pipe(yaml({pretty:true}))
    .pipe(gulp.dest('app/_locales'));
});

// lint and copy js files to build directory.
gulp.task('js', function() {
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
  return gulp.src(['src/sass/**/*.scss'])
    .pipe(plumber())
    .pipe(newer({dest:'app/css', ext:'.css'}))
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
  return bower()
    .pipe(gulp.dest('app/bower_components'))
});

// gulpfile
gulp.task('self', function() {
  return gulp.src(['gulpfile.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('copy-dist', ['default'], function() {
  var tasks = [];
  tasks.push(
    gulp.src(['app/_locales/**', 'app/images/**', 'app/manifest.json', 'app/mimetype.txt'], { base: 'app' })
      .pipe(gulp.dest('dist'))
  )
  tasks.push(
    gulp.src(['app/bower_components/**/*.+(eot|svg|ttf|woff)'])
      .pipe(rename(function(path) {
        path.dirname = '';
      }))
      .pipe(gulp.dest('dist/fonts'))
  )
  tasks.push(
    gulp.src(['app/js/main.js'], { base: 'app' })
      .pipe(uglify({compress: false,mangle: false}))
      .pipe(gulp.dest('dist'))
  )
  return es.concat.apply(null, tasks);
});

gulp.task('usemin', ['default'], function() {
  return gulp.src('app/index.html')
    .pipe(usemin({
      css: [minifyCss({
        aggressiveMerging: false,
      }), 'concat'],
      html: [minifyHtml()],
      js: [uglify({compress:false,mangle: false})]
    }))
    .pipe(gulp.dest('dist'));
});

// create zip package
gulp.task('build', ['copy-dist', 'usemin'], function() {
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
  'bower',
  //'usemin',
  '_locale',
  'js',
  'js-vendor',
  'sass',
]);

