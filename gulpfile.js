var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
var sass = require('gulp-sass');

// Task for coffeescript
gulp.task('coffee', function() {
  gulp.src('./js/src/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./js/'))
});

//Task for coffeescript folder
gulp.watch('./js/src/*.coffee', ['coffee']);

//task for SASS
gulp.task('sass', function () {
  gulp.src('./css/src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

//Task for initializing gulp
gulp.watch('./css/src/*.scss', ['sass']);
gulp.task('default', ['coffee', 'sass']);
