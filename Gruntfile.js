module.exports = function (grunt) {
    grunt.initConfig({
      htmlmin: {
        options: {
          collapseWhitespace: true,
          removeComments: true
        },
        files: {
          src: './index.html',
          dest: 'dist/index.html'
        }
     },
     cssmin: {  
         'dist/register.min.css': 'register.css'
     },
     uglify: {
             'dist/register.min.js': 'register.js'     
            
     },
     copy: {
         html: {
             src:'./index.html',
             dest:'./dist/index.html'
         }
     },
     useminPrepare: {
         html:'index.html',
         options:{
             dest:'dist'
         }
     },
     usemin: {
         html:['dist/index.html']
     }
    });
  
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-usemin');
  
    grunt.registerTask('default', ['copy','useminPrepare','uglify','usemin','cssmin','htmlmin']); 
  };