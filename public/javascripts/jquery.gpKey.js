/**
 * jQuery.gpKey 0.1
 * http://ginpen.com/jquery/gpkey/
 * https://github.com/ginpei/jQuery.gpKey
 *
 * Copyright (c) 2011 Takanashi Ginpei
 * http://ginpen.com
 *
 * Released under the MIT License for personal use.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * For other use, please contact me.
 */
(function(b){try{if(window.com.ginpen.GpKey){return}}catch(c){}if(!window.com){window.com={}}if(!com.ginpen){com.ginpen={}}var a=com.ginpen.GpKey=function(){return this.__constructor.apply(this,arguments)};b.extend(a,{VERSION:"0.1",settings:{},initialized:false,ctrlPressed:false,altPressed:false,shiftPressed:false,_curTarget:null,getCurTarget:function(){return this._curTarget},_setCurTarget:function(d){return this._curTarget=d},initialize:function(){if(this.initialized){return}this.initialized=true;var d=this;b(document).mousedown(function(e){var f=d._findTarget(b(e.target));d.updateCurTarget(f)}).keypress(function(e){d._updateModifierKeysStatus(e);d._fire(e)}).keydown(function(e){d._updateModifierKeysStatus(e);d._fire(e)}).keyup(function(e){d._updateModifierKeysStatus(e);d._fire(e)});b(window).blur(function(e){d._updateModifierKeysStatus({})})},_findTarget:function(e){var d=e.closest(".gpkey");return d.data("gpkey")},updateCurTarget:function(e){var d=this.getCurTarget();if(d){d.$el.removeClass("gpkey-current").trigger("blur.gpkey")}this._setCurTarget(e);if(e){e.$el.addClass("gpkey-current").trigger("focus.gpkey")}},_updateModifierKeysStatus:function(d){this.ctrlPressed=!!d.ctrlKey||!!d.metaKey;this.altPressed=!!d.altKey;this.shiftPressed=!!d.shiftKey},_fire:function(f){var g=this.getCurTarget();if(!g){return}var e=this._fixTypeName(f.type);var h=this.getCommand(f);var d=g.trigger(e,h);if(d){f.preventDefault()}},getCommand:function(e){var f="";if(e.ctrlKey||e.metaKey){f+="^"}if(e.altKey){f+="&"}var d=this._getKeyName(e.keyCode);if(e.shiftKey){f+=d.toUpperCase()}else{f+=d}return f},_getKeyName:function(d){if(d==8){return"backspace"}else{if(d==9){return"tab"}else{if(d==13){return"enter"}else{if(d==27){return"escape"}else{if(d==32){return"space"}else{if(d==46){return"delete"}else{if(d==37){return"left"}else{if(d==38){return"up"}else{if(d==39){return"right"}else{if(d==40){return"down"}else{if(48<=d&&d<=57){return(d-48).toString()}else{if(65<=d&&d<=90){return String.fromCharCode(d).toLowerCase()}else{if(112<=d&&d<=123){return"f"+(d-111)}else{return""}}}}}}}}}}}}}},addTarget:function(e,g,d,f){this.initialize();var h=new a(e,f);e.data("gpkey",h).addClass("gpkey");var g=this._fixTypeName(g);if(g){h.addCommands(g,d)}},_fixTypeName:function(d){if(d=="press"||d=="keypress"){return"press"}else{if(d=="down"||d=="keydown"){return"down"}else{if(d=="up"||d=="keyup"){return"up"}else{return""}}}},"":0});b.extend(a.prototype,{__constructor:function(d,e){this.$el=d;this.commands={};this.settings=e},addCommands:function(f,d){if(!(f in this.commands)){this.commands[f]={}}var g=this.commands[f];for(var h in d){var e=d[h];if(e==null){delete g[h]}else{g[h]=e}}},press:function(d){return this.addCommands("press",d)},down:function(d){return this.addCommands("down",d)},up:function(d){return this.addCommands("up",d)},trigger:function(e,f){var d=this._getHandler(e,f);if(d){this._exec(d);return true}else{return false}},_getHandler:function(e,f){if(e in this.commands){var d=this.commands[e][f];if(b.isFunction(d)){return d}}else{null}},_exec:function(d,e){d.apply(this.$el[0],[e])},focus:function(d){a.updateCurTarget(this);if(b.isFunction(d)){d.apply(this.$el,[this])}},blur:function(d){a.updateCurTarget(null);if(b.isFunction(d)){d.apply(this.$el,[this])}},"":0});b.gpKey={alt:function(){return a.altPressed},ctrl:function(){return a.ctrlPressed},initialize:function(){a.initialize()},shift:function(){return a.shiftPressed}};b.fn.gpKey=function(f,d,e){var g=b(this).data("gpkey");if(g&&f&&f.charAt(0)!="_"&&b.isFunction(g[f])){return g[f](d,e)}else{return this.each(function(h,j){a.addTarget(b(j),f,d,e)})}}}(jQuery));