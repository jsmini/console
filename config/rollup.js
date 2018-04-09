var pkg = require('../package.json');

// 兼容 console 和 @jsmini/console 
var name = pkg.name.replace('@', '').replace(/\//g, '_');
var version = pkg.version;

var banner = 
`/*!
 * console ${version} (https://github.com/jsmini/console)
 * API https://github.com/jsmini/console/blob/master/doc/api.md
 * Copyright 2013-${(new Date).getFullYear()} yanhaijing. All Rights Reserved
 * Licensed under MIT (https://github.com/jsmini/console/blob/master/LICENSE)
 */
`;

exports.name = name;
exports.banner = banner;
