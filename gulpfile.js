var { src, dest, watch } = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function css() {
    return src('src/**/*.scss')
        .pipe(sass())
        .pipe(dest('dist/css'));
}

function watchTask() {
    watch('src/**/*.scss', css);
}

exports.sass = css;
exports.watch = watchTask;
exports.default = css;