const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const server = require('gulp-server-livereload');
const clean = require('gulp-clean');
const fs = require('fs');

gulp.task('html', function() {
  return gulp.src('./src/html/**/*.html')
    .pipe(fileInclude({
      prefix: "@@",
      basepath: "@file",
    }))
    .pipe(gulp.dest('./dist'))
});

gulp.task('sass', function() {
  return gulp.src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css/'))
});

gulp.task('img', function() {
  return gulp.src('./src/img/**/*')
    .pipe(gulp.dest('./dist/img'))
});

gulp.task('js', function() {
  return gulp.src('./src/js/**/*')
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('server', function() {
  return gulp.src('./dist/').pipe(server({
    livereload: true,
    open: true,
  }))
});

gulp.task('clean', function(done) {
  if(fs.existsSync('./dist')) {
    return gulp.src('./dist', {read: false}).pipe(clean());
  }
  done();
});

gulp.task('watch', function() {
  gulp.watch('./src/scss/**/*.scss', gulp.parallel('sass'));
  gulp.watch('./src/html/**/*.html', gulp.parallel('html'));
  gulp.watch('./src/img/**/*', gulp.parallel('img'))
  gulp.watch('./src/js/**/*', gulp.parallel('js'))
});

gulp.task('default', gulp.series('clean', gulp.parallel('html', 'sass', 'img', 'js'), gulp.parallel('server', 'watch')))