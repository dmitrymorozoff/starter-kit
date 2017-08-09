import gulp from "gulp";

gulp.task("build", [
  "html",
  "js",
  "style",
  "style:min",
  "fonts",
  "htaccess",
  "image"
]);
