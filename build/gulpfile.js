'use strict';

var gulp = require('gulp');
var frontMatter = require('gulp-front-matter');
var markdown = require('gulp-markdown');
var marked = require('gulp-markdown/node_modules/marked');
var layout = require('gulp-layout');
var connect = require('gulp-connect');
var replace = require('gulp-replace');
var Entities = require('html-entities').XmlEntities;
var entities = new Entities();

gulp.task('convert', function() {
  return gulp.src(['./md/**/*.md', '!./md/**/_*.md'])
    .pipe(frontMatter())
    .pipe(markdown())
    .pipe(layout(function(file) {
      return file.frontMatter;
    }))
    .pipe(replace(/(?:<p>)?\{\{(\/?[a-z]+.*)\}\}(?:<\/p>)?/g, function(m, arg1) {
     return '<' + entities.decode(arg1) + '>';
    }))
    .pipe(gulp.dest('..'));
});

gulp.task('js-copy', function() {
  return gulp.src('js/**/*.js')
    .pipe(gulp.dest('../js'));
});

gulp.task('css-copy', function() {
  return gulp.src('css/**/*.css')
    .pipe(gulp.dest('../css'));
});

gulp.task('img-copy', function() {
  return gulp.src('img/**/*')
    .pipe(gulp.dest('../img'));
});

gulp.task('connect', function() {
  connect.server({
    root: '..',
    //livereload: true
  });
});

gulp.task('watch',['default','connect'], function() {
  var opt = {interval: 500};
  gulp.watch('md/**/*.md', opt, ['convert']);
  gulp.watch('js/**/*.js', opt, ['js-copy']);
  gulp.watch('css/**/*.css', opt, ['css-copy']);
  gulp.watch('img/**/*', opt, ['img-copy']);
});

gulp.task('default', [
  'js-copy',
  'css-copy',
  'img-copy',
  'convert'
]);

