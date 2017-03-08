/**
 *  index.js, the starter.
 *
 *  @author  keyangyang
 *  @date    Feb 4, 2017
 *
 */
'use strict';
//异步加载,splash.min.css单独加载
require.ensure(['splash-screen/dist/splash.min.css', 'splash-screen'], function(require) {

    require('splash-screen/dist/splash.min.css').use();
    require('splash-screen').Splash.enable('circular');
});

require.ensure([
    '../less/main.less',
    'splash-screen',
    './fw/Entrance'
], function(require) {

    require('../less/main.less');

    var Entrance = require('./fw/Entrance').default;
    (new Entrance()).run();
});
