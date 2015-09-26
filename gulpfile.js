/*jslint white: true */

// npm install --save-dev gulp gulp-plumber gulp-watch gulp-livereload gulp-minify-css gulp-jshint jshint-stylish gulp-uglify gulp-concat gulp-rename gulp-notify gulp-sourcemaps gulp-include gulp-sass gulp-imagemin imagemin-pngquant

var gulp = require('gulp'),
    plumber = require( 'gulp-plumber' ),
    watch = require( 'gulp-watch' ),
    livereload = require( 'gulp-livereload' ),
    notify = require( 'gulp-notify' ),
    include = require( 'gulp-include' ),
    sass = require( 'gulp-sass' ),
    minifycss = require( 'gulp-minify-css' ),
    jshint = require( 'gulp-jshint' ),
    stylish = require( 'jshint-stylish' ),
    uglify = require( 'gulp-uglify' ),
    rename = require( 'gulp-rename' ),
    gp_concat = require( 'gulp-concat' ),
    sourcemaps = require( 'gulp-sourcemaps' ),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');

var onError = function( err ) {
    console.log( 'An error occurred:', err.message );
    this.emit( 'end' );
}

gulp.task( 'sass', function() {
    return gulp.src( './src/sass/style.scss', {
        style: 'expanded'
    } )
    .pipe( plumber( { errorHandler: onError } ) )
    .pipe( sass() )
    .pipe( gulp.dest( './assets/css' ) )
    .pipe( minifycss() )
    .pipe( rename( { suffix: '.min' } ) )
    .pipe( gulp.dest( './assets/css' ) )
    .pipe( notify( { message: 'Styles task complete' } ) )
    .pipe( livereload() );
} );

gulp.task('scripts', function() {
  return gulp.src( './src/js/**/*.js' )
    .pipe( sourcemaps.init() )
    .pipe( gp_concat( 'app.js' ) )
    .pipe( gulp.dest( './assets/js' ) )
    .pipe( rename( 'app.min.js' ) )
    .pipe( uglify() )
    .pipe( sourcemaps.write( './assets/js' ) )
    .pipe( gulp.dest( './' ) )
    .pipe( notify( { message: 'Scripts task complete' } ) )
    .pipe( livereload() );
});

// gulp.task('js-fef', function(){
//     return gulp.src(['file1.js', 'file2.js', 'file3.js'])
//         .pipe(gp_sourcemaps.init())
//         .pipe(gp_concat('concat.js'))
//         .pipe(gulp.dest('dist'))
//         .pipe(gp_rename('uglify.js'))
//         .pipe(gp_uglify())
//         .pipe(gp_sourcemaps.write('./'))
//         .pipe(gulp.dest('dist'));
// });

gulp.task('images', function () {
    return gulp.src('src/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('assets/images'));
});

gulp.task( 'watch', function() {
    livereload.listen();
    gulp.watch( './src/sass/**/*.scss', [ 'sass' ] );
    gulp.watch( './src/js/**/*.js', [ 'scripts' ] );
    gulp.watch( './src/images/**/*', [ 'images' ] );
    gulp.watch( './**/*.php' ).on( 'change', function( file ) {
        livereload.changed( file );
    } );
} );

gulp.task( 'default', [ 'sass', 'scripts', 'images', 'watch' ], function() {

} )