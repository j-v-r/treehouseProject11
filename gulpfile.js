'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');

gulp.task('process-css', () => {
	return gulp.src(['./css/basics.css', './css/footer.css', './css/hero.css', './css/menu.css', './css/modals.css', './css/photo-grid.css'])
		.pipe(cleanCSS())
		.pipe(concat('prod.min.css'))
		.pipe(gulp.dest('./dist'));
});


gulp.task('default', ['process-css']);