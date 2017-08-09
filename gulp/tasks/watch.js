import gulp from "gulp";
import watch from "gulp-watch";
import path from "../paths";

gulp.task("watch", () => {
  watch([path.watch.pug], function(event, cb) {
    gulp.start("pug");
  });
  watch([path.watch.html], function(event, cb) {
    gulp.start("html");
  });
  watch([path.watch.style], function(event, cb) {
    gulp.start("style:min");
  });
  watch([path.watch.js], function(event, cb) {
    gulp.start("js");
  });
  watch([path.watch.img], function(event, cb) {
    gulp.start("image");
  });
  watch([path.watch.fonts], function(event, cb) {
    gulp.start("fonts");
  });
});
