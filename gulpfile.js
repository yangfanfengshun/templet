let gulp = require("gulp");
let connect = require("gulp-connect");
let sass = require("gulp-sass-china");
let concat = require("gulp-concat")


//	gulp.task()		定义指令
//	gulp.src()		找到源文件
//	gulp.pipe()		用来连缀
//	gulp.dest()		转存到
//	gulp.watch()	监控

gulp.task("index",()=>{
	return gulp.src(["src/www/*.html"])
				.pipe(gulp.dest("dist/www"))
				.pipe(connect.reload());
});
gulp.task("sass",()=>{
    return gulp.src("src/style/*.scss")
               .pipe(sass().on("error",sass.logError))
               .pipe(gulp.dest("dist/style"))
               .pipe(connect.reload());
});

gulp.task('scripts',function(){
	return gulp.src('src/js/*.js')
//				.pipe(concat('all.js'))         
				.pipe(gulp.dest('dist/js'))
				.pipe(connect.reload());
//		.pipe(uglify())
//		.pipe(browserSync.reload({
//			stream:true
//		}));
});

gulp.task("copy-img",()=>{
	return gulp.src(["src/images/*"])
				.pipe(gulp.dest("dist/images"))
				.pipe(connect.reload());
});

gulp.task("libs",()=>{
	return gulp.src(["src/libs/*"])
				.pipe(gulp.dest("dist/libs"))
				.pipe(connect.reload());
});

gulp.task("mywatch",()=>{
	gulp.watch("src/www/*.html",["index"])
	gulp.watch("src/style/*.scss",["sass"])
	gulp.watch("src/js/*.js",["scripts"])
	gulp.watch("src/images/*",["copy-img"])
	gulp.watch("src/libs/*",["libs"])
})

gulp.task("server",()=>{
	connect.server({
		root:"dist",
		port:8888,
		livereload:true
	})
})

gulp.task("default",["mywatch","server","copy-img","libs"])

