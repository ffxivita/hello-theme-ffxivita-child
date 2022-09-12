const gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssnano'),
    sass = require('gulp-sass')(require('sass')),
    sourcemaps = require('gulp-sourcemaps'),
    prefixerOptions = {
        overrideBrowserslist: ['last 2 versions']
    };

sass.compiler = require('node-sass');

gulp.task('authors', function () {
    return gulp.src('src/authors.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(prefixerOptions))
        .pipe(cssmin({zindex: false}))
        .pipe(sourcemaps.write('.', undefined))
        .pipe(gulp.dest('assets/css/'));
});

gulp.task('base', function () {
    return gulp.src('src/base.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(prefixerOptions))
        .pipe(cssmin({zindex: false}))
        .pipe(sourcemaps.write('.', undefined))
        .pipe(gulp.dest('assets/css/'));
});

gulp.task('components', function () {
    return gulp.src('src/components.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(prefixerOptions))
        .pipe(cssmin({zindex: false}))
        .pipe(sourcemaps.write('.', undefined))
        .pipe(gulp.dest('assets/css/'));
});

gulp.task('specials', function () {
    return gulp.src('src/specials.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(prefixerOptions))
        .pipe(cssmin({zindex: false}))
        .pipe(sourcemaps.write('.', undefined))
        .pipe(gulp.dest('assets/css/'));
});

gulp.task('xivita', gulp.series('authors', 'base', 'components', 'specials'));
