import gulp from "gulp";
import browserSync from "browser-sync";
import imagemin from "gulp-imagemin";
import pngquant from "imagemin-pngquant";
import path from "../paths";
const reload = browserSync.reload;

gulp.task("image", () => {
  gulp
    .src(path.src.img)
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        use: [pngquant()],
        interlaced: true
      })
    )
    .pipe(gulp.dest(path.build.img))
    .pipe(reload({ stream: true }));
});
