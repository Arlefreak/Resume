module.exports = function(grunt) {
    grunt.initConfig({
        markdownpdf: {
            options: {},
            files: {
                src: "*.md",
                dest: "pdf/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-markdown-pdf');

    grunt.registerTask(
        'default',
        'Build PDF', ['markdownpdf']
    );
};