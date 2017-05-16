'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var image = require('gulp-image');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('process-css', () => {
	return gulp.src(['css/normalize.css', 'css/foundation.min.css', './css/basics.css', './css/footer.css', './css/hero.css', './css/menu.css', './css/modals.css', './css/photo-grid.css'])
		.pipe(cleanCSS())
		.pipe(concat('prod.min.css'))
		.pipe(gulp.dest('./dist'));
});

gulp.task('concatScripts', () => {
	gulp.src([
		'js/jquery.js',
		'js/fastclick.js',
		'js/foundation.js',
		'js/foundation.equalizer.js',
		'js/foundation.reveal.js',
		'js/scrips.js'
		])
	.pipe(concat('app.js'))
	.pipe(gulp.dest('dist/scripts'));
});

gulp.task('minifyScripts', () => {
	gulp.src('dist/scripts/app.js')
	.pipe(uglify())
	.pipe(rename('app.min.js'))
	.pipe(gulp.dest('dist/scripts'));
});

gulp.task('compressAvatarImages', () => {
		gulp.src('./img/avatars/*')
		.pipe(image({
			mozjpeg: false,
			jpegoptim: false,
			pngquant: true,
			optipng: false,
			zopflipng: true,
			jpegRecompress: true,
			gifsicle: true,
			svgo: true
		}))
		.pipe(gulp.dest('./dist/images/'));
});

gulp.task('compressPhotoImages', () => {
		gulp.src('./img/photos/*')
		.pipe(image({
			mozjpeg: false,
			jpegoptim: false,
			pngquant: true,
			optipng: false,
			zopflipng: true,
			jpegRecompress: true,
			gifsicle: true,
			svgo: true
		}))
		.pipe(gulp.dest('./dist/images/'));
});

gulp.task('compressSocialMediaImages', () => {
		gulp.src('./img/social/*.svg')
		.pipe(image({
			mozjpeg: false,
			jpegoptim: false,
			pngquant: true,
			optipng: false,
			zopflipng: true,
			jpegRecompress: true,
			gifsicle: true,
			svgo: true
		}))
		.pipe(gulp.dest('./dist/images/'));
});

gulp.task('default', ['process-css']);