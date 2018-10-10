'use strict';

var gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  sass = require('gulp-sass');

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: './html'
  });

  gulp.watch('html/sass/*.sass', ['sass']);
  gulp.watch('html/*.html').on('change', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp
    .src('./html/sass/**/*.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./html/css'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function() {
  gulp.watch('./html/sass/**/*.sass', ['sass']);
});

gulp.task('default', ['serve']);
