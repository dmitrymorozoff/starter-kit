import gulp from "gulp";
import uglify from "gulp-uglify";
import path from "../paths";
import browserSync from "browser-sync";
const reload = browserSync.reload;

gulp.task("js", () => {
  gulp
    .src(path.src.js)
    .pipe(uglify())
    .pipe(gulp.dest(path.build.js))
    .pipe(reload({ stream: true }));
});
