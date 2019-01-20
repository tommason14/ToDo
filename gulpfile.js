var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var jade        = require('gulp-jade');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');

gulp.task('sass', function () {
  return gulp.src('assets/css/main.sass')
      .pipe(sass({
          includePaths: ['css'],
          onError: browserSync.notify
      }))
      .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
      .pipe(gulp.dest('assets/css'))
      .pipe(browserSync.reload({stream:true}))
});


gulp.task('jade', function(){
  return gulp.src('*.jade')
  .pipe(jade())
  .pipe(gulp.dest(function(file) {
    return file.base}));
});

gulp.task('browser-sync', ['sass'], function() {
  browserSync({
      server: {
          baseDir: '.'
      },
      notify: false
  });
});



gulp.task('reload', function () {
  browserSync.reload();
});

gulp.task('js', function () {
  return gulp.src('assets/js/main.js')
    .pipe(browserSync.reload({stream:true}))
})


gulp.task('watch', function () {
    gulp.watch('assets/css/main.sass', ['sass']);
    gulp.watch('*.jade', ['jade']);
    gulp.watch('*.html', ['reload']);
    gulp.watch('assets/js/main.js', ['js']);
});

gulp.task('default', ['browser-sync', 'watch']);
