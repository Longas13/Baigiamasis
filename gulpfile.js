var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
})

gulp.task('sass', function() {
	return gulp.src('sass/style.scss')
		.pipe(sass({
			outputStyle: 'normal'
		}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
		.pipe(gulp.dest(''))
		.pipe(browserSync.stream());
});

gulp.task('watch',['browser-sync'], function(){
  gulp.watch('*.html', browserSync.reload); 
})

gulp.task('default', ['sass', 'browser-sync', 'watch'], function() {
	gulp.watch('sass/*.scss', ['sass']);
})