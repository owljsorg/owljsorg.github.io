var gulp = require('gulp');

gulp.task('default', ['docs', 'tsdocs']);
gulp.task('docs', function() {
    return gulp.src('bower_components/owljs/docs/**/*')
        .pipe(gulp.dest('docs'));
});
gulp.task('tsdocs', function() {
    return gulp.src('bower_components/owljs/tsdocs/**/*')
        .pipe(gulp.dest('tsdocs'));
});