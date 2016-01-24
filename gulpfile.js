// Stash requires in variables
var $ = require('gulp-load-plugins')(),
	gulp = require( 'gulp' ),
	sass = require('gulp-sass');
	handleErrors = require('./gulp/handleErrors.js')(gulp, $);

// helper to get partials
function getGulpPartial(task) {
	return require('./gulp/' + task)(gulp, $, handleErrors);
}

// get tasks from partials
gulp.task( 'styles', function () {
	return gulp.src('./components/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./'));
});
gulp.task( 'scripts', getGulpPartial('scripts') );
gulp.task( 'watch', getGulpPartial('watch') );

// Builder
gulp.task( 'build', ['styles', 'scripts']);

// Alias build to default
gulp.task( 'default', ['build'] );
