const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const concat = require('gulp-concat');
const watch = require('gulp-watch');
const replace = require('gulp-replace')

// Caminhos dos arquivos
const paths = {
    styles: {
        src: 'src/styles/*.scss',
        dest: 'dist/styles/'
    },
    scripts: {
        src: 'src/js/*.js',
        dest: 'dist/scripts/'
    },
    html: {
        src: 'src/*.html',
        dest: 'dist/'
    }
};

// Task para compilar Sass
function styles() {
    return gulp.src(paths.styles.src)
        .pipe(concat('main.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.styles.dest));
}

// Task para minificar JavaScript
function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts.dest));
}

// Task para minificar HTML
function html() {
    return gulp.src(paths.html.src)
        .pipe(replace('main.scss', 'main.css'))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(paths.html.dest));
}

// Task de watch para monitorar mudanças
function watchFiles() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.html.src, html);
}

// Task default que executa tudo
const build = gulp.series(gulp.parallel(styles, scripts, html), watchFiles);

exports.styles = styles;
exports.scripts = scripts;
exports.html = html;
exports.watch = watchFiles;
exports.default = build;
