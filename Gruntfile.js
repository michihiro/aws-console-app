// Generated on 2014-08-24 using generator-chromeapp 0.2.13
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  var pkg = grunt.file.readJSON('package.json');

  // Configurable paths
  var config = {
    app: 'app',
    dist: 'dist',
    tasks: grunt.cli.tasks
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    config: config,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['bowerInstall']
      },
      js: {
        files: ['<%= config.app %>/js/{,*/}*.js'],
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      styles: {
        files: ['<%= config.app %>/css/{,*/}*.css'],
        tasks: [],
        options: {
          livereload: true
        }
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '.tmp/css/{,*/}*.css',
          '<%= config.app %>/*.html',
          '<%= config.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= config.app %>/manifest.json',
          '<%= config.app %>/_locales/{,*/}*.json'
        ]
      }
    },

    // Grunt server and debug server settings
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost',
        open: true,
      },
      server: {
        options: {
          middleware: function(connect) {
            return [
              connect.static('.tmp'),
              connect().use('/bower_components', connect.static('./bower_components')),
              connect.static(config.app)
            ];
          }
        }
      },
      chrome: {
        options: {
          open: false,
          base: ['<%= config.app %>']
        }
      },
      test: {
        options: {
          open: false,
          base: [
            'test',
            '<%= config.app %>'
          ]
        }
      }
    },

    // Empties folders to start fresh
    clean: {
      server: '.tmp',
      chrome: '.tmp',
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= config.dist %>/*',
            '!<%= config.dist %>/.git*'
          ]
        }]
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= config.app %>/js/{,*/}*.js',
        '!<%= config.app %>/js/vendor/*',
        'test/spec/{,*/}*.js'
      ]
    },

    // Mocha testing framework configuration options
    mocha: {
      all: {
        options: {
          run: true,
          urls: ['http://localhost:<%= connect.options.port %>/index.html']
        }
      }
    },

    // Automatically inject Bower components into the HTML file
    bowerInstall: {
      app: {
        src: ['<%= config.app %>/index.html'],
        ignorePath: '<%= config.app %>/'
      }
    },

    jsbeautifier: {
      files: [
        'Gruntfile.js',
        'app/js/**/*.js',
        '!app/js/vendor/*.js',
        'app/css/**/*.css',
        '!app/css/vendor/*.css'
      ],
      options: {
        css: {
          indentSize: 2,
          endWithNewline: true,
        },
        js: {
          indentSize: 2,
          keepArrayIndentation: true
        }
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      options: {
        dest: '<%= config.dist %>'
      },
      html: [
        '<%= config.app %>/index.html'
      ]
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      options: {
        assetsDirs: ['<%= config.dist %>', '<%= config.dist %>/images']
      },
      html: ['<%= config.dist %>/{,*/}*.html'],
      css: ['<%= config.dist %>/css/{,*/}*.css']
    },

    // The following *-min tasks produce minified files in the dist folder
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= config.dist %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          customAttrAssign: [/\?=/],
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeCommentsFromCDATA: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true,
          removeRedundantAttributes: true,
          useShortDoctype: true
        },
        files: [{
          expand: true,
          cwd: '<%= config.dist %>',
          src: '{,*/}*.html',
          dest: '<%= config.dist %>'
        }]
      }
    },

    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //     dist: {
    //         files: {
    //             '<%= config.dist %>/styles/main.css': [
    //                 '.tmp/styles/{,*/}*.css',
    //                 '<%= config.app %>/styles/{,*/}*.css'
    //             ]
    //         }
    //     }
    // },
    // uglify: {
    //     dist: {
    //         files: {
    //             '<%= config.dist %>/scripts/scripts.js': [
    //                 '<%= config.dist %>/scripts/scripts.js'
    //             ]
    //         }
    //     }
    // },
    // concat: {
    //     dist: {}
    // },

    'json-minify': {
      build: {
        files: '<%= config.dist %>/_locales/**/*.json'
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= config.app %>',
          dest: '<%= config.dist %>',
          src: [
            '*.{ico,png,txt}',
            'images/{,*/}*.{webp,gif,png}',
            '{,*/}*.html',
            'css/fonts/{,*/}*.*',
            '_locales/{,*/}*.json',
            'views/{,*/}*.html',
            'js/etc.js'
          ]
        }, {
          expand: true,
          dot: true,
          cwd: '<%= config.app %>/bower_components/components-font-awesome',
          dest: '<%= config.dist %>',
          src: [
            'fonts/{,*/}*.*',
          ]
        }]
      },
      styles: {
        expand: true,
        dot: true,
        cwd: '<%= config.app %>/css',
        dest: '.tmp/css/',
        src: '{,*/}*.css'
      }
    },

    // Run some tasks in parallel to speed up build process
    concurrent: {
      server: [
        'copy:styles'
      ],
      chrome: [
        'copy:styles'
      ],
      dist: [
        'copy:styles',
        'svgmin'
      ],
      test: [
        'copy:styles'
      ],
    },

    // Merge event page, update build number, exclude the debug script
    chromeManifest: {
      dist: {
        options: {
          //buildnumber: true,
          background: {
            target: 'js/background.js',
            exclude: [
              'js/chromereload.js'
            ]
          }
        },
        src: '<%= config.app %>',
        dest: '<%= config.dist %>'
      }
    },

    replace: {
      manifest: {
        src: '<%= config.app %>/manifest.json',
        overwrite: true,
        replacements: [{
          from: /"version":.*/,
          to: '"version": "' + pkg.version + '",'
        }]
      },
      html: {
        src: '<%= config.dist %>/index.html',
        overwrite: true,
        replacements: [{
          from: '<!-- dist-script -->',
          to: '<script src="scripts/etc.js"></script>'
        }]
      }
    },

    // Compress files in dist to make Chromea Apps package
    compress: {
      dist: {
        options: {
          archive: function() {
            var manifest = grunt.file.readJSON('app/manifest.json');
            return 'package/aws console app-' + manifest.version + '.zip';
          }
        },
        files: [{
          expand: true,
          cwd: 'dist/',
          src: ['**'],
          dest: ''
        }]
      }
    }
  });

  grunt.registerTask('debug', function(platform) {
    var watch = grunt.config('watch');
    platform = platform || 'chrome';


    // Configure style task for debug:server task
    if (platform === 'server') {
      watch.styles.tasks = ['newer:copy:styles'];
      watch.styles.options.livereload = false;

    }

    // Configure updated watch task
    grunt.config('watch', watch);

    grunt.task.run([
      'clean:' + platform,
      'concurrent:' + platform,
      'connect:' + platform,
      'watch'
    ]);
  });

  grunt.registerTask('test', [
    'connect:test',
    'mocha'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'chromeManifest:dist',
    'useminPrepare',
    'concurrent:dist',
    'concat',
    'cssmin',
    'uglify',
    'copy',
    'replace:html',
    'usemin',
    'htmlmin',
    'json-minify',
    'compress'
  ]);

  grunt.registerTask('default', [
    'replace:manifest',
    'newer:jshint',
    'test',
    'build'
  ]);
};
