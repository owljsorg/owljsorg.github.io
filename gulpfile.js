var gulp = require('gulp');

gulp.task('default', ['docs', 'tsdocs']);
gulp.task('docs', function() {
    return gulp.src('bower_components/owl.js/docs/**/*')
        .pipe(gulp.dest('docs'));
});
gulp.task('tsdocs', function() {
    return gulp.src('bower_components/owl.js/tsdocs/**/*')
        .pipe(gulp.dest('tsdocs'));
});