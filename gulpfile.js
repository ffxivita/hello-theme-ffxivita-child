const gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  cssmin = require('gulp-cssnano'),
  sass = require('gulp-sass')(require('sass')),
  sourcemaps = require('gulp-sourcemaps'),
  prefixerOptions = {
    overrideBrowserslist: ['last 2 versions'],
  };

sass.compiler = require('node-sass');

gulp.task('authors', function () {
  return gulp
    .src('src/authors.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(prefixerOptions))
    .pipe(cssmin({ zindex: false }))
    .pipe(sourcemaps.write('.', undefined))
    .pipe(gulp.dest('assets/css/'));
});