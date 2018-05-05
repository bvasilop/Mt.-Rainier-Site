/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

    grunt.initConfig({
      responsive_images: {
        dev: {
          options: {
            engine: 'im',
            sizes: [{
              width: 1600,
              suffix: '_large_2x',
              quality: 30
            }]
          },

          /*
          You don't need to change this part if you don't change
          the directory structure.
          */
          files: [{
            expand: true,
            src: ['*.{gif,jpg,jpeg,png}'],
            cwd: 'img/carousel',
            dest: 'img_comp/carousel'
          }]
        }
      },

      /* Clear out the images directory if it exists */
      clean: {
        dev: {
          src: ['img_comp'],
        },
      },

      /* Generate the images directory if it is missing */
      mkdir: {
        dev: {
          options: {
            create: ['img_comp']
          },
        },
      },

      /* Copy the "fixed" images that don't go through processing into the images/directory */
      copy: {
        dev: {
          files: [{
            expand: true,
            src: 'images/fixed/*.{gif,jpg,jpeg,png}',
            dest: 'img_comp/'
          }]
        },
      },
    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

  };
