import gulp from "gulp";
import sass from "gulp-sass";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import mqpacker from "css-mqpacker";
import csso from "gulp-csso";
import path from "../paths";
import browserSync from "browser-sync";
import rename from "gulp-rename";
const reload = browserSync.reload;

gulp.task("style:min", () => {
  return gulp
    .src(path.src.style)
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer(), mqpacker()]))
    .pipe(csso())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(path.build.css))
    .pipe(reload({ stream: true }));
});

gulp.task("style", () => {
  return gulp
    .src(path.src.style)
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest(path.build.css))
    .pipe(reload({ stream: true }));
});
