// /////////////////////////////////////////////////
// Required
// /////////////////////////////////////////////////

var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename"),
    sass = require("gulp-sass"),
    plumber = require("gulp-plumber"),
    browserSync = require("browser-sync"),
    del = require("del"),
    reload = browserSync.reload;

// /////////////////////////////////////////////////
// Scripts Task
// /////////////////////////////////////////////////

gulp.task("scripts",function(){
    gulp.src(["app/assets/js/**/*.js", '!app/assets/js/**/*.min.js'])
    .pipe(rename({suffix:'.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('app/assets/js'))
    .pipe(reload({stream:true}));
});

// /////////////////////////////////////////////////
// Styles Task
// /////////////////////////////////////////////////

gulp.task("styles",function(){
    gulp.src("app/assets/sass/**/*.scss")
    .pipe(plumber())
    .pipe(sass({
      style:"compressed"
    }))
    .pipe(gulp.dest("app/static/css/"))
    .pipe(reload({stream:true}));
});

// /////////////////////////////////////////////////
// HTML Task
// /////////////////////////////////////////////////

gulp.task("html", function(){
    gulp.src("app/**/*.html")
    .pipe(reload({stream:true}));
});

// /////////////////////////////////////////////////
// Build Tasks
// /////////////////////////////////////////////////

//clear all files from build folder
gulp.task('build:cleanfolder', function(){
    return del([
      'build/**'
    ]);
});

//task to create build directory for all files
gulp.task("build:copy", ['build:cleanfolder'], function(){
  return gulp.src("app/**/*")
  .pipe(gulp.dest('build/'));
});

//task to remove unwanted build files
gulp.task('build:remove', ['build:copy'], function(){
    return del([
      'build/assets/sass',
      'build/assets/js/!(*.min.js)'
    ]);
});

gulp.task('build',['build:remove']);

// /////////////////////////////////////////////////
// Browser-Sync Task
// /////////////////////////////////////////////////
gulp.task('browser-sync', function(){
  browserSync({
    server:{
      baseDir:"./app/"
    }
  })
});

gulp.task('build:serve', function(){
  browserSync({
    server:{
      baseDir:"./build/"
    }
  })
});

// /////////////////////////////////////////////////
// Watch Task
// /////////////////////////////////////////////////

gulp.task("watch",function(){
  gulp.watch("app/assets/js/**/*.js",['scripts']);
  gulp.watch('app/assets/sass/**/*.scss',['styles']);
  gulp.watch("app/**/*.html",['html']);
});


// /////////////////////////////////////////////////
// Default Task
// /////////////////////////////////////////////////
gulp.task("default",['scripts' , 'styles', 'html', 'browser-sync', 'watch']);
