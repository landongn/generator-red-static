'use strict';

var path = require('path'),
	gulp = require('gulp'),
	clean = require('gulp-clean');

function srcPath(file) {
	return path.join(__dirname, '../static/', file);
}

function destPath(file) {
	return path.join(__dirname, '../deploy/static/', file);
}

function makeCleanTask(file) {
	return function () {
		return gulp.src(destPath(file), {read: false})
			.pipe(clean());
	};
}

function makeCopyTask(src, dest) {
	return function () {
		return gulp.src(srcPath(src))
			.pipe(gulp.dest(destPath(dest)));
	};
}

module.exports = {
	src : srcPath,
	dest : destPath,
	clean : makeCleanTask,
	copy : makeCopyTask
};