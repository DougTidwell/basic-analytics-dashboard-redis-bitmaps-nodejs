(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d237b51"],{fbed:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-btn",{staticClass:"mt-3 mt-xl-0",attrs:{color:"warning",large:"",tile:"",loading:e.redisLoading,disabled:e.redisLoading},on:{click:e.handleReset}},[e._v(" Reset Data "),r("v-icon",{attrs:{right:"",dark:""}},[e._v("mdi-restart")])],1)},a=[],s=r("1da1"),i=r("5530"),c=(r("96cf"),r("2f62")),o={computed:Object(i["a"])({},Object(c["c"])({redisLoading:"getRedisLoading"})),methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(c["b"])({reset:"reset"})),Object(c["d"])({negateRefreshSignal:"NEGATE_REFRESH_SIGNAL",setRedisLoading:"SET_REDIS_LOADING"})),{},{handleReset:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.setRedisLoading(!0),t.prev=1,t.next=4,e.reset();case 4:e.negateRefreshSignal(),e.$notify({group:"main",title:"Data",text:"Data reseted!",type:"success",duration:400,speed:400}),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](1),console.error(t.t0),e.$notify({group:"main",title:"Error",text:"Unexpected error occured.",type:"error",duration:400,speed:400});case 12:e.setRedisLoading(!1);case 13:case"end":return t.stop()}}),t,null,[[1,8]])})))()}})},d=o,l=r("2877"),u=r("6544"),g=r.n(u),p=r("8336"),b=r("132d"),f=Object(l["a"])(d,n,a,!1,null,null,null);t["default"]=f.exports;g()(f,{VBtn:p["a"],VIcon:b["a"]})}}]);
//# sourceMappingURL=chunk-2d237b51.dbdaaf30.js.map