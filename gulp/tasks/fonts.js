import gulp from "gulp";
import path from "../paths";

gulp.task("fonts", () => {
  gulp.src(path.src.fonts).pipe(gulp.dest(path.build.fonts));
});
