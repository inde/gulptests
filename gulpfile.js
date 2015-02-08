var buildDir = './build/';
var publicDir = './public/';

var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	cssmin = require('gulp-cssmin'),
	plumber = require('gulp-plumber');

// Scripts Task
// Uglifies
gulp.task('scripts', function(){ // scripts command
	gulp.src( buildDir + 'js/*.js')
		.pipe( plumber() )/// plumber before
		.pipe( uglify() )
		.pipe( gulp.dest( publicDir + '/js') );
});

gulp.task('styles', function(){ // scripts command
	gulp.src( buildDir + 'css/*.css')
		.pipe( plumber() )/// plumber before
		.pipe(cssmin())
		.pipe(gulp.dest( publicDir + '/css'));
});

// Watch Task
// Watches JS
gulp.task('watch',function(){
	gulp.watch( buildDir + 'js/*.js' , ['scripts']); // watches and updates the js
	gulp.watch( buildDir + 'css/*.css' , ['styles']); // watches and updates the js

});

gulp.task('default',['scripts', 'styles', 'watch']);