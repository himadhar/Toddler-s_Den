var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var fs = require('fs')
var tap = require('gulp-tap');
const { dest } = require('gulp');
const { json } = require('stream/consumers');
const { createBrotliCompress } = require('zlib');
var filter = require("gulp-filter");

gulp.task('compile-ts', function () {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('assets/js/release/'));
});


gulp.task('copy-activities', function () {
    fs.writeFileSync('app/activities/activityList.json', "[]");
    gulp.src("app/activities/**/activity.json")
        .pipe(tap(function (file, t) {
            var jsonO = JSON.parse(fs.readFileSync(file.path));

            let dir = file.dirname.split('/');
            lastFolderName = dir.pop();
            jsonO.parentFolderName = lastFolderName;
            jsonO.logo = 'assets/images/activities/' + lastFolderName + "/images/" + jsonO.logo;

            var allActivities = (fs.readFileSync('app/activities/activityList.json'));
            if (allActivities.length == 0)
                allActivities = [];
            else
                allActivities = JSON.parse(allActivities);

            allActivities.push(jsonO);

            fs.writeFileSync('app/activities/activityList.json', JSON.stringify(allActivities));

            allActivities.push(json);
        }));

    gulp.src(['app/activities/**/images/*'])
        .pipe(filter(['**/images/*']))
        .pipe(gulp.dest("assets/images/activities"))

    gulp.src(['app/activities/**/*.html'])
        .pipe(gulp.dest("partials/activities"))

    gulp.src(['app/activities/**/*.css'])
        .pipe(gulp.dest("assets/css/activities"))
});



gulp.task('default', gulp.parallel('compile-ts', 'copy-activities', function () {
    return gulp.watch('app/**/*', gulp.series('default'))
}));