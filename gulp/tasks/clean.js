import gulp from "gulp";
import rimraf from "rimraf";
import path from "../paths";

gulp.task("clean", function(cb) {
  rimraf(path.clean, cb);
});
