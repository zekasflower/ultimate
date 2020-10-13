const { src, dest, watch } = require("gulp"),
  concat = require("gulp-concat"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  pug = require("gulp-pug"),
  livereload = require("gulp-livereload"),
  minify = require("gulp-minify"),
  notify = require("gulp-notify"),
  sourcemaps = require("gulp-sourcemaps");

// Html Task
function html() {
  return src("stage/html/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(dest("dist"))
    .pipe(livereload());
}

// Css task
function css() {
  return src(["stage/css/**/*.css", "stage/css/**/*.scss"])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStule: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(concat("ultimate.css"))
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist/css"))
    .pipe(livereload());
}

// Js task
function js() {
  return src("stage/js/*.js")
    .pipe(concat("ultimate.js"))
    .pipe(minify())
    .pipe(dest("dist/js"))
    .pipe(livereload());
}

// Watch task
exports.default = function () {
  require("./server");
  livereload.listen();
  watch("stage/html/**/*.pug", html);
  watch(["stage/css/**/*.css", "stage/css/**/*.scss"], css);
  watch("stage/js/*.js", js);
};
