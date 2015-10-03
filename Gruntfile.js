module.exports = function(grunt) {
    grunt.initConfig({
        markdownpdf: {
            options: {
                cssPath: "./style.css",
                remarkable: {
                    html: true,
                    xhtmlOut: true
                }
            },
            files: {
                src: "*.md",
                dest: "pdf/"
            },
        }
    });

    grunt.loadNpmTasks('grunt-markdown-pdf');

    grunt.registerTask(
        'default',
        'Build PDF', ['markdownpdf']
    );
};
