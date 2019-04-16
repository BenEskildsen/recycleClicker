'use strict';

var _require = require('./level1v2'),
    level1 = _require.level1;

var _require2 = require('./level2'),
    level2 = _require2.level2;

var _require3 = require('./level3'),
    level3 = _require3.level3;

var _require4 = require('./level4'),
    level4 = _require4.level4;

var _require5 = require('./level5'),
    level5 = _require5.level5;

var _require6 = require('./level6'),
    level6 = _require6.level6;

var _require7 = require('./level7'),
    level7 = _require7.level7;

var _require8 = require('./level8'),
    level8 = _require8.level8;

var _require9 = require('./level9'),
    level9 = _require9.level9;

var _require10 = require('./level10'),
    level10 = _require10.level10;

var _require11 = require('./testLevel'),
    testLevel = _require11.testLevel;

var _require12 = require('./vanceLevel'),
    vanceLevel = _require12.vanceLevel;

var _require13 = require('./emptyLevel'),
    initEmptyLevel = _require13.initEmptyLevel;

var levels = [level1, level2, level3, level4, level5, level6, level7, level8, level9, level10];

module.exports = { levels: levels };