System.register("chunks:///_virtual/restart.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./lodash.js","./lodash.mjs_cjs=&original=.js"],(function(t){"use strict";var e,n,r,o,s,a,i;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,r=t._decorator,o=t.Vec3,s=t.RigidBody,a=t.Component},function(t){i=t.default},null],execute:function(){var c;n._RF.push({},"393afA8h69IjKpBmOPkPthE","restart",void 0);var u=r.ccclass;r.property,t("Restart",u("Restart")(c=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var r=n.prototype;return r.start=function(){},r.restart=function(){var t=this.node.parent.parent.getChildByName("coin");t.setPosition(new o(16.711,7.948,15.745));var e=t.getComponent(s);e.applyForce(new o(0,1e3,0)),e.applyTorque(new o(0,0,i.random(200,300,!0))),this.node.parent.active=!1},n}(a))||c);n._RF.pop()}}}));

System.register("chunks:///_virtual/start.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var r,e,n,c,o;return{setters:[function(t){r=t.inheritsLoose},function(t){e=t.cclegacy,n=t._decorator,c=t.director,o=t.Component}],execute:function(){var i;e._RF.push({},"b18e6b/zWhCibwf2N1LRZJL","start",void 0);var s=n.ccclass;n.property,t("Start",s("Start")(i=function(t){function e(){return t.apply(this,arguments)||this}r(e,t);var n=e.prototype;return n.start=function(){},n.click=function(){c.loadScene("run")},e}(o))||i);e._RF.pop()}}}));

System.register("chunks:///_virtual/coin.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var n,o,e,i,r,c;return{setters:[function(t){n=t.inheritsLoose},function(t){o=t.cclegacy,e=t._decorator,i=t.RigidBody,r=t.Vec3,c=t.Component}],execute:function(){var s;o._RF.push({},"b2cfb0ZNHZDzLiaGsO3Q38S","coin",void 0);var u=e.ccclass;e.property,t("Coin",u("Coin")(s=function(t){function o(){return t.apply(this,arguments)||this}return n(o,t),o.prototype.start=function(){this.node.getComponent(i).applyTorque(new r(100,0,100))},o}(c))||s);o._RF.pop()}}}));

System.register("chunks:///_virtual/runCoin.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./lodash.js","./lodash.mjs_cjs=&original=.js"],(function(e){"use strict";var n,t,o,i,s,r,a,c,u,l;return{setters:[function(e){n=e.inheritsLoose},function(e){t=e.cclegacy,o=e._decorator,i=e.RigidBody,s=e.Vec3,r=e.geometry,a=e.PhysicsSystem,c=e.Label,u=e.Component},function(e){l=e.default},null],execute:function(){var p;t._RF.push({},"c8613iHPB9BuY1+q226FIuI","runCoin",void 0);var d=o.ccclass;o.property,e("RunCoin",d("RunCoin")(p=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var o=t.prototype;return o.start=function(){var e=this.node.getComponent(i);e.applyForce(new s(0,1e3,0)),e.applyTorque(new s(0,0,l.random(1e3,2e3,!0)))},o.update=function(e){var n=new r.Ray,t=this.node.worldPosition;if(r.Ray.fromPoints(n,new s(t.x,t.y+100,t.z),t),this.node.getComponent(i).isSleepy){a.instance.raycastClosest(n);var o=a.instance.raycastClosestResult.collider.node.name,u=this.node.parent.getChildByName("canvas"),l=u.getChildByName("label").getComponent(c);"is"===o?(u.active=!0,l.string="你抛到了正面"):"the"===o?(u.active=!0,l.string="你抛到了反面"):(u.active=!0,l.string="遇到了特殊的答案了呢")}},t}(u))||p);t._RF.pop()}}}));

System.register("chunks:///_virtual/run.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var n,e,o,r;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,o=t._decorator,r=t.Component}],execute:function(){var u;e._RF.push({},"ceb27kY9pZOUJHuOcOpQdFF","run",void 0);var c=o.ccclass;o.property,t("Run",c("Run")(u=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var o=e.prototype;return o.start=function(){},o.update=function(t){var n=this.node.parent.getChildByName("coin");this.node.lookAt(n.position)},e}(r))||u);e._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./restart.ts","./start.ts","./coin.ts","./runCoin.ts","./run.ts"],(function(){"use strict";return{setters:[null,null,null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});