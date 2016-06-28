'use strict'

var gulp = require('gulp'),
		connect = require('gulp-connect'),
		postcss = require('gulp-postcss');

var postcssPlugins = [
	require('postcss-nested'),
	require('postcss-import'),
	require('lost')
];

gulp.task('styles', function(){
	return gulp.src('src/styles/style.css')
	.pipe(postcss(postcssPlugins))
	.pipe(gulp.dest('dest/styles'))
});

gulp.task('watch', function(){
	gulp.watch('src/styles/**/*.css', ['styles']);

});

gulp.task('connect', function(){
	connect.server({
		root: './'
	});
});

gulp.task('default', ['connect', 'watch', 'styles'])
