const gulp = require('gulp');
const  $ = require('gulp-load-plugins')();
const del = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();
// Transpiling all the JS code de ES5

var paths = {
  toCopy: [
    'app/bower_components/**/*',
    '!app/components/**/*'

  ],
  toTranspile: [
    'app/components/**/*',
    '!app/bower_components/**/*.{js,html}',
    'app/index.html'
  ]
};
gulp.task('js',function() {
  return gulp.src(paths.toTranspile,{'base': 'app'})
        .pipe($.size())
        .pipe($.sourcemaps.init())
        .pipe($.if('*.html',$.crisper({scriptInHead: false})))
        .pipe($.if('*.js',$.babel({
          presets: ['es2015']
        })))
         .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('.tmp/'))
        .pipe(gulp.dest('build'));

});

gulp.task('clear', function() {
  return del('build').then(paths => {
    console.log('removed!');
  });
});

gulp.task('copy',function() {
  return gulp.src(paths.toCopy,{'base': 'app'})
  .pipe(gulp.dest('build'));
});

gulp.task('start',function() {
  $.nodemon({
    script: 'demo-server/app.js'
  });
});

gulp.task('build', function(cb) {
  runSequence('clear',
      ['copy','js','start'],cb);
});
gulp.task('serve', function(cb) {
  runSequence('clear',
      ['copy','js','start'],'browserSync',cb);
});
// Static server
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './build'
    }
  });
});
