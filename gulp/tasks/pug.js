import gulp from "gulp";
import pug from "gulp-pug";
import path from "../paths";

gulp.task("pug", () => {
  gulp
    .src(path.src.pug)
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(gulp.dest(path.build.pug));
});
