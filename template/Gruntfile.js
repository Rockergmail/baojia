module.exports = function (grunt) {
 
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

	//JS code minify
     //    uglify: {
     //        build: {
     //            options: {
     //                preserveComments: 'some',
     //                mangle: true
     //                //mangle: change the var or function name
     //            },
     //            files: [{
     //                    expand: true,
     //                    cwd: 'src/',
     //                    src: '**/*.js',
					// //equal to src/**/*.js
     //                    dest: 'build/scripts',
     //                    ext: '.min.js'
     //                    }]
     //        }
     //    },

	//js code error detect
        // jshint: {
        //     all: ['src/**/*.js']
        // },
	
	//css code minify
     //    cssmin: {
     //        target: {
     //            files: {
     //                'build/styles/common.css': ['src/styles/test1.css', 'src/styles/test2.css']
					// //merge 2 css files into 1 css file
     //            }
     //        }
     //    },
 
    //minify HTML code
        htmlmin: {
            dist: {
                options: {
                    removeRedundantAttributes: true,
                    collapseWhitespace: false,
                    minifyJS: false,
                    minifyCSS: true
                },
                files: {
                    'hongbao/free/check.html':'src/hongbao/free/check.html',
                    'hongbao/free/index.html':'src/hongbao/free/index.html',
                    'hongbao/daily/pickup.html':'src/hongbao/free/pickup.html',
                    'hongbao/daily/index.html':'src/hongbao/free/index.html',
                    'master/index.html':'src/master/index.html',
                    'master/list.html':'src/master/list.html',
                    'mode/index.html':'src/mode/index.html',
                    'users/info/index.html':'src/users/info/index.html',
                    'users/info/toolKit.html':'src/users/info/toolKit.html',
                    'income/index.html':'src/income/index.html', 
                    'users/share/index.html':'src/users/share/index.html'
                }
                // dest : src  2015.11.11 sucks
            }
        },
 
	//copy one/some file(s) without any compress or beautify
        // copy: {
        //     main: {
        //         files: [{
        //                 expand: true,
        //                 src: ['src/README'],
        //                 dest: 'build/',
        //                 filter: 'isFile'
        //                 }]
        //     }
        // },
 
	//image compress
     //    imagemin: {
     //        dynamic: {
     //            options: {
					// //compress level
     //                optimizationLevel: 7
     //            },
     //            files: [{
     //                    expand: true,
     //                    cwd: 'src/srcimages',
     //                    src: ['**/*.{png,jpg,gif}'],
     //                    dest: '/home/rocker/vhost/ad/suoping/static/lock/images/<%= pkg.name %>/'
     //                    //这里要改
     //                    }]
     //        }
     //    },
 
	//monitor files' change and active some missions
		//this watch mission is to compress the pictures if some added
        watch: {
            test: {
                files: 'src/**/*.html',
                tasks: ['default']
            }
        },
 
	//delete some temp files
        // clean: {
        //     test: {
        //         src: ['src/tempfile', '!src/keepthis']
        //     }
        // },
 
	//replace some text
		//this mission is to change the urls of images to the CDN's
        replace: {
            test: {
                src: ['src/**/*.html'],
                overwrite: true,
                replacements: [{
                        from: 'srcimages',
                        //to: 'http://w.qiandeer.com/qd/static/lock/images/<%= pkg.name %>'
                        to: '/static/images/jingling'
						//这里要改
                        }]
            }
        }
    });
 
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-clean');
    // Default task(s).
    //grunt.registerTask('default', ['replace', 'jshint', 'uglify:build', 'cssmin', 'htmlmin', 'copy', 'clean', 'watch']);
    grunt.registerTask('default', ['replace','htmlmin']);
    grunt.registerTask('images', ['imagemin']);
    grunt.registerTask('dog', ['watch']);
 
};

//the file tree :
// src
// ├── index.html
// ├── scripts
// │   ├── test1.js
// │   └── test2.js
// ├── srcimages
// │   ├── a.jpg
// │   ├── b.jpg
// │   └── c.png
// └── styles
//     ├── test1.css
//     └── test2.css