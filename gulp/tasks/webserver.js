import gulp from "gulp";
import path from "../paths";
import browserSync from "browser-sync";

const config = {
  server: {
    baseDir: "./build"
  },
  tunnel: true,
  host: "localhost",
  port: 3000
};

gulp.task("webserver", () => {
  browserSync(config);
});
