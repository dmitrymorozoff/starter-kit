export default {
  build: {
    html: "./build/",
    pug: "./src/",
    js: "./build/js/",
    css: "./build/css/",
    img: "./build/img/",
    fonts: "./build/fonts/",
    htaccess: "./build/"
  },
  src: {
    html: "./src/*.html",
    pug: "./src/pug/pages/*.pug",
    js: "./src/js/main.js",
    style: "./src/style/main.scss",
    img: "./src/img/**/*.*",
    fonts: "./src/fonts/**/*.*",
    htaccess: "./src/**/*.htaccess"
  },
  watch: {
    html: "./src/**/*.html",
    pug: "./src/pug/pages/*.pug",
    js: "./src/js/**/*.js",
    style: "./src/style/**/*.scss",
    img: "./src/img/**/*.*",
    fonts: "./src/fonts/**/*.*",
    htaccess: "./src/**/*.htaccess"
  },
  clean: "./build"
};
