var gulp = require('gulp');

var jshint = require('gulp-jshint');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var neat = require('node-neat');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var protractor = require("gulp-protractor").protractor;


// run localhost:8080 server
gulp.task('connect', function() {
  connect.server({
    root: './app'
  });
});

// JavaScript linting task
gulp.task('jshint', function() {
  return gulp.src(['./app/*.js', './app/utilities/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Watch task
gulp.task('watch', ['build'], function() {
  gulp.watch('./app/*.html', ['build'] );
  gulp.watch('./app/**/*.js', ['build']);
  gulp.watch('./app/scss/*.scss', ['build']);
  gulp.watch('./app/e2e-tests/*.js', ['test']);
});

// Default task
gulp.task('default', ['jshint', 'styles', 'watch', 'connect']);

// Styles build task, concatenates all the files
gulp.task('styles', function() {
  return gulp.src('./app/scss/*.scss')
    .pipe(sass({
      includePaths: require('node-neat').includePaths
    }))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./app'));
});

gulp.task('e2e', ['connect'], function(){
  gulp.src(["./app/e2e-tests/*.js"])
    .pipe(protractor({
        configFile: "protractor.js"
    }))
    .on('error', function(e) { throw e });
});

// Build task
gulp.task('build', ['jshint', 'styles']);