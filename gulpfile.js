var gulp       = require('gulp');
var toMarkdown = require('gulp-to-markdown');
var toPDF      = require('gulp-html-pdf');

gulp.task('to-markdown', function () {
    return gulp
        .src('src/**/*.html')
        .pipe(toMarkdown())
        .pipe(gulp.dest('build/md/'));
});

gulp.task('to-pdf', function() {
    return gulp
        .src('src/**/*.html')
        .pipe(toPDF())
        .pipe(gulp.dest('build/pdf/'));
});

gulp.task('copy', function () {
  return gulp
    .src('build/md/README.md')
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['to-markdown', 'to-pdf','copy']);
