/* gulpfile.js */
var 
    gulp = require('gulp'),// importamos la librería gulp
    sass = require('gulp-sass');
    browserSync = require("browser-sync").create();

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

//definimos la tarea por defecto

gulp.task('default', ['sass'], function () {
    gulp.watch(css.watch, ['sass']);
});

    // iniciamos el servidor de desarrollo
    browserSync.init({ server: "src/" });
    
        // observa cambios en los archivos SASS, y entonces ejecuta la tarea 'sass'
        gulp.watch(["src/scss/*.scss", "src/scss/**/*.scss"], ["sass"]);
    
        // observa cambios en los archivos HTML y entonces recarga el navegador
        gulp.watch("src/*.html", function(){
            browserSync.reload();
            notify().write("Navegador recargado");
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
        .pipe(gulp.dest(css.out))
        .pipe(browserSync.stream()); // recargue el CSS del navegador
});



