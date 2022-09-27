'use strict';

Object.defineProperty(exports, '__esModule', {
    value : true,
});
exports.default = void 0;

const warn = (msg) => {
    console.warn(`\x1b[1m\x1b[33m[postcss-custom-properties-checker]\x1b[0m\x1b[33m ${msg}\x1b[0m\n`);
}

const pluginCreator = (opts = {}) => {
    const action = (opts.unresolved == 'ignore' || opts.unresolved == 'warn' || opts.unresolved == 'throw') ? opts.unresolved : 'throw';

    return {
        postcssPlugin : 'postcss-custom-properties-checker',
        OnceExit(root) {
            root.walk((node) => {
                if (node.constructor.name != 'Declaration')
                    return;

                if (node.value.substring(0, 4) != 'var(')
                    return;

                node.value.replace(/var\( *(\-\-[^\) ]+) *\)/, function(whole, variable) {
                    var message = 'Used undefined variable ' + variable + ' in ' + node.source.input.file + ' at line ' + node.source.start.line;

                    if (action == 'warn')
                        warn(message);
                    else if (action == 'throw')
                        throw new Error(message);
                });
            });
        },
   }
};

pluginCreator.postcss = true;
var _default = pluginCreator;
exports.default = _default;
module.exports = exports.default;
