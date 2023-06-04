import path from "path";
import gulp from "gulp";
import concat from "gulp-concat";
import { deleteAsync } from "del";

const BUNDLED_CSS_FILENAME = "index.css";

gulp.task("clean", () => {
  return deleteAsync(path.resolve("./dist/css/", BUNDLED_CSS_FILENAME));
});

gulp.task("css", function () {
  return gulp
    .src("./dist/css/*.css")
    .pipe(concat(BUNDLED_CSS_FILENAME))
    .pipe(gulp.dest("./dist/css/"));
});

gulp.task("default", gulp.series(["clean", "css"]));

gulp.task("watch", function () {
  return gulp.watch(
    "./dist/css/*.css",
    { ignoreInitial: false, ignored: /index\.css/ },
    gulp.series(["clean", "css"])
  );
});
