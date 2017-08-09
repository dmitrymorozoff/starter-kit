import gulp from "gulp";
import path from "../paths";
import browserSync from "browser-sync";
const reload = browserSync.reload;

gulp.task("html", () => {
  gulp
    .src(path.src.html)
    .pipe(gulp.dest(path.build.html))
    .pipe(reload({ stream: true }));
});
