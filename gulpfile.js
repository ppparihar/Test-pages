//var gulp = require('gulp');
//var vulcanize = require('gulp-vulcanize');
var gulp = require('gulp');
var gulpCopy = require('gulp-copy');
var sourceFiles = [ 'bower_components/**', 'images/**','node_modules/**','src/**' ,'deploy_key.enc','index.html','polymer.json' ];
var destination = 'out/';


var exclude_core_component = [
];

function copy(srcName, destName, excludePaths) {
    return gulp
    .src(sourceFiles)
    .pipe(gulpCopy(destination));   
}

gulp.task('build', function () {
    return copy();
});

gulp.task('default', [
    'build'
]);