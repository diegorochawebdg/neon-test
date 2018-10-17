'use strict';

const gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  sass = require('gulp-sass'),
  plumber = require('gulp-plumber'),
  htmlmin = require('gulp-htmlmin'),
  autoprefixer = require('gulp-autoprefixer'),
  cleanCSS = require('gulp-clean-css'),
  imagemin = require('gulp-imagemin'),
  nunjucksRender = require('gulp-nunjucks-render'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream');

gulp.task('serve', ['scripts', 'sass', 'html', 'fonts', 'images', 'watch'], () => {
  browserSync.init({
    server: './dist'
  });
});

gulp.task('sass', () => {
  return gulp
    .src('./src/sass/**/*.sass')
    .pipe(plumber())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('html', () => {
  return gulp
    .src('./src/html/*.html')
    .pipe(plumber())
    .pipe(nunjucksRender({ path: ['src/html'] }))
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('fonts', () => {
  return gulp
    .src('./src/fonts/**/*')
    .pipe(plumber())
    .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('images', () => {
  return gulp
    .src('./src/images/**/*')
    .pipe(plumber())
    .pipe(
      imagemin({
        optimizationLevel: 3,
        progressive: true,
        interlaced: true
      })
    )
    .pipe(gulp.dest('./dist/images'));
});

gulp.task('scripts', () => {
  return browserify(['./src/js/main.js'])
    .transform('babelify', { presets: ['@babel/preset-env'] })
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch', () => {
  gulp.watch('./src/sass/**/*.sass', ['sass']);
  gulp.watch('./src/html/*.html', ['html']).on('change', browserSync.reload);
  gulp.watch('./src/js/**/*.js', ['scripts']).on('change', browserSync.reload);
});

gulp.task('build', ['scripts', 'sass', 'html', 'fonts', 'images']);

gulp.task('default', ['serve']);
