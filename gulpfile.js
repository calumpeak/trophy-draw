'use strict';
const gulp = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const ngAnnotate = require('gulp-ng-annotate');

gulp.task('js', () => {
    gulp.src(['ng/module.js', 'ng/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('trophyDraw.js'))
        .pipe(ngAnnotate())
        //.pipe(uglify())
        .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task('css', () => {
    gulp.src(['styles/*.css'])
        .pipe(concat('trophyDraw.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch:js', ['js', 'css'], () => {
    gulp.watch(['ng/**/*.js', 'styles/*.css'], ['js', 'css']);
});

gulp.task('dev', ['watch:js']);
