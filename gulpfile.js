var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
 
gulp.task('compile-ts', function() {
    return tsProject.src()
    .pipe(tsProject())
    .pipe(gulp.dest('assets/js/release/'));
});


gulp.task('default', gulp.series('compile-ts', function() {
        return gulp.watch('app/**/*.ts', gulp.series('compile-ts'));
}));