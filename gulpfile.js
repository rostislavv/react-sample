"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //runs local dev server
var open = require('gulp-open');  //open url in browser

var config = {
  port: 9015,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    dist: './dist'
  }
};

//start local dev server
gulp.task('connect', function () {
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  })
});

gulp.task('open', ['connect'], function () {
  gulp.src('dist/index.html')
    .pipe(open('', {
      url: config.devBaseUrl + ":" + config.port + '/'
    }))
});

gulp.task('html',function(){
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
});

gulp.task('watch',function(){
  gulp.watch(config.paths.html,['html']);
});

gulp.task('default',[
  'html','open','watch'
]);