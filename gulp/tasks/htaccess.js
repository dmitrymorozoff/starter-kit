import gulp from "gulp";
import path from "../paths";

gulp.task("htaccess", () => {
  gulp.src(path.src.htaccess).pipe(gulp.dest(path.build.htaccess));
});
