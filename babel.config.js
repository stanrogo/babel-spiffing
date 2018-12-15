const path = require('path');

const presets = [
    [
        "@babel/env",
        {
            targets: {
                edge: "17",
                firefox: "60",
                chrome: "67",
                safari: "11.1",
                esmodules: true,
            },
            useBuiltIns: "usage",
        },
    ],
];

const plugins = [
  path.join(__dirname, 'index.js'),
];
console.log(plugins);

module.exports = { presets, plugins };
