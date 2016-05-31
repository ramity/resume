/*! keydrown - v1.1.2 - 2014-09-21 - http://jeremyckahn.github.com/keydrown */
(function(n){var e=function(){var e={};e.forEach=function(n,e){var t;for(t in n)n.hasOwnProperty(t)&&e(n[t],t)};var t=e.forEach;e.getTranspose=function(n){var e={};return t(n,function(n,t){e[n]=t}),e},e.indexOf=function(n,e){if(n.indexOf)return n.indexOf(e);var t,o=n.length;for(t=0;o>t;t++)if(n[t]===e)return t;return-1};var o=e.indexOf;return e.pushUnique=function(n,e){return-1===o(n,e)?(n.push(e),!0):!1},e.removeValue=function(n,e){var t=o(n,e);return-1!==t?n.splice(t,1)[0]:void 0},e.documentOn=function(e,t){n.addEventListener?n.addEventListener(e,t,!1):document.attachEvent&&document.attachEvent("on"+e,t)},e.requestAnimationFrame=function(){return n.requestAnimationFrame||n.webkitRequestAnimationFrame||n.mozRequestAnimationFrame||function(e){n.setTimeout(e,1e3/60)}}(),e.noop=function(){},e}(),t={A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,ENTER:13,SHIFT:16,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40},o=e.getTranspose(t),r=[],u=function(){"use strict";function n(n){this.keyCode=n}function t(n,e,t){t?n[e]=t:n[e]()}return n.prototype._downHandler=e.noop,n.prototype._upHandler=e.noop,n.prototype._pressHandler=e.noop,n.prototype.isDown=function(){return-1!==e.indexOf(r,this.keyCode)},n.prototype.down=function(n){t(this,"_downHandler",n)},n.prototype.up=function(n){t(this,"_upHandler",n)},n.prototype.press=function(n){t(this,"_pressHandler",n)},n.prototype.unbindDown=function(){this._downHandler=e.noop},n.prototype.unbindUp=function(){this._upHandler=e.noop},n.prototype.unbindPress=function(){this._pressHandler=e.noop},n}(),i=function(r){"use strict";var i={};i.Key=u;var f=!1;return i.tick=function(){var n,e=r.length;for(n=0;e>n;n++){var t=r[n],u=o[t];u&&i[u].down()}},i.run=function(t){f=!0,e.requestAnimationFrame.call(n,function(){f&&(i.run(t),t())})},i.stop=function(){f=!1},e.forEach(t,function(n,e){i[e]=new u(n)}),e.documentOn("keydown",function(n){var t=n.keyCode,u=o[t],f=e.pushUnique(r,t);f&&i[u]&&i[u].press()}),e.documentOn("keyup",function(n){var t=e.removeValue(r,n.keyCode),u=o[t];u&&i[u].up()}),e.documentOn("blur",function(){e.forEach(r,function(n){var e=o[n];e&&i[e].up()}),r.length=0}),i}(r);"object"==typeof module&&"object"==typeof module.exports?module.exports=i:"function"==typeof define&&define.amd?define(function(){return i}):n.kd=i})(window);