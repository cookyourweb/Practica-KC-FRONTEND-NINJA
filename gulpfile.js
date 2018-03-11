/* gulpfile.js */
var 
    gulp = require('gulp'),
    sass = require('gulp-sass');
    notify = require("gulp-notify");
    browserSync = require("browser-sync").create();
    gulpImport = require("gulp-html-import");
    tap = require("gulp-tap");
    browserify = require("browserify"); 
    htmlmin = require("gulp-htmlmin");
     tap = require("gulp-tap");
 
// source and distribution folder
var
    source = 'src/',
    dest = 'dist/';

// Bootstrap scss source
var bootstrapSass = {
        in: './node_modules/bootstrap-sass/'
    };

// fonts
var fonts = {
        in: [source + 'fonts/*.*', bootstrapSass.in + 'assets/fonts/**/*'],
        out: dest + 'fonts/'
    };

 // css source file: .scss files
var css = {
    in: source + 'scss/main.scss',
    out: dest + 'css/',
    watch: source + 'scss/**/*',
    sassOpts: {
        outputStyle: 'nested',
        precision: 8,
        errLogToConsole: true,
        includePaths: [bootstrapSass.in + 'assets/stylesheets']
    }
};




// tarea por defecto
gulp.task('default', ['html','sass'], function () {
   
     gulp.watch(css.watch, ['sass']);

     // iniciamos el servidor de desarrollo
         browserSync.init({ server: "src/" });
     
        gulp.watch(["src/*.html", "src/**/*.html"], ["html"]);

        // observa cambios en los archivos HTML y entonces recarga el navegador
        gulp.watch("src/*.html", function(){
            browserSync.reload();
            notify().write("Navegador recargado");
        });





});


// copiar e importar html
gulp.task("html", function(){
    gulp.src("src/*.html")
        .pipe(gulpImport("src/components/")) // reemplaza los @import de los HTML
        .pipe(htmlmin({collapseWhitespace: true})) // minifica el HTML
        .pipe(gulp.dest("dist/"))
        .pipe(browserSync.stream())
        .pipe(notify("HTML importado"));
});

gulp.task('fonts', function () {
    return gulp
        .src(fonts.in)
        .pipe(gulp.dest(fonts.out));
});


// compile scss
gulp.task('sass', ['fonts'], function () {
    return gulp.src(css.in)
        .pipe(sass(css.sassOpts))
        .pipe(gulp.dest(css.out));
});

