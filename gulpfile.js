const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

gulp.task('default', function () {
    return gulp.src('client/**/*.js')
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});



// gulp.task('watch', function(){
//     watch('src/client/**/*.js', ['js']);
// });
