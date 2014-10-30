/*
 * grunt-slice-markdown
 * https://github.com/uhop/grunt-slice-markdown
 *
 * Copyright (c) 2014 Eugene Lazutkin
 * Licensed under the New BSD license.
 */

"use strict";

module.exports = function(grunt) {
	grunt.initConfig({
		slice_markdown: {
			plain: {
				options: {
					markedOptions: {
						gfm: true,
						smartLists: true
					},
					templateParams: {
						title: "Demo"
					}
				},
				src:  "tests/demo.md",
				dest: "tests/demo-plain.html"
			},
			trivial: {
				options: {
					templateFile: "tests/trivial/trivial.html.jst",
					markedOptions: {
						gfm: true,
						smartLists: true,
						smartypants: true
					},
					templateParams: {
						title: "Demo"
					}
				},
				//expand: true,
				//cwd:  "tests/",
				//src:  "*.md",
				//dest: "tests/",
				//ext:  ".html"
				src:  "tests/demo.md",
				dest: "tests/demo-trivial.html"
			},
			bespoke: {
				options: {
					templateFile: "tests/bespoke.js/bespoke.html.jst",
					markedOptions: {
						gfm: true,
						smartLists: true,
						smartypants: true
					},
					templateParams: {
						title: "Demo"
					}
				},
				src:  "tests/demo.md",
				dest: "tests/demo-bespoke.html"
			},
			impress: {
				options: {
					templateFile: "tests/impress.js/impress.html.jst",
					markedOptions: {
						gfm: true,
						smartLists: true,
						smartypants: true
					},
					templateParams: {
						title: "Demo"
					}
				},
				src:  "tests/demo.md",
				dest: "tests/demo-impress.html"
			}
		}
	});

	grunt.loadTasks("tasks");

	grunt.registerTask("default", "slice_markdown");
	grunt.registerTask("test",    "slice_markdown");
};
