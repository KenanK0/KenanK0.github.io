(this.webpackJsonphopedealer=this.webpackJsonphopedealer||[]).push([[0],{133:function(e,t,r){"use strict";r.r(t),r.d(t,"createSwipeBackGesture",(function(){return i}));var n=r(12),a=r(36),i=(r(27),function(e,t,r,i,o){var c=e.ownerDocument.defaultView;return Object(a.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(e){return e.startX<=50&&t()},onStart:r,onMove:function(e){var t=e.deltaX/c.innerWidth;i(t)},onEnd:function(e){var t=e.deltaX,r=c.innerWidth,a=t/r,i=e.velocityX,u=r/2,s=i>=0&&(i>.2||e.deltaX>u),d=(s?1-a:a)*r,h=0;if(d>5){var l=d/Math.abs(i);h=Math.min(l,540)}o(s,a<=0?.01:Object(n.j)(0,a,.9999),h)}})})}}]);
//# sourceMappingURL=0.8397afa8.chunk.js.map