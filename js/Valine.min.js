/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /gh/drew233/css@master/lvaline.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
! function (t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Valine = e() : t.Valine = e()
}(this, function () {
  return function (t) {
    function e(r) {
      if (n[r]) return n[r].exports;
      var i = n[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.i = function (t) {
      return t
    }, e.d = function (t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, {
        configurable: !1,
        enumerable: !0,
        get: r
      })
    }, e.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t.default
      } : function () {
        return t
      };
      return e.d(n, "a", n), n
    }, e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 63)
  }([function (t, e, n) {
    "use strict";

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
    e.__esModule = !0;
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    n(30);
    var o = r(n(43)),
      a = r(n(27)),
      s = r(n(26)),
      l = r(n(47)),
      d = document,
      c = navigator,
      u = /[&<>"'`\\]/g,
      p = RegExp(u.source),
      g = /&(?:amp|lt|gt|quot|#39|#x60|#x5c);/g,
      h = RegExp(g.source),
      f = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "`": "&#x60;",
        "\\": "&#x5c;"
      },
      v = {};
    for (var m in f) v[f[m]] = m;
    Array.prototype.forEach || (Array.prototype.forEach = function (t, e) {
      var n, r;
      if (null == this) throw new TypeError(" this is null or not defined");
      var i = Object(this),
        o = i.length >>> 0;
      if ("function" != typeof t) throw new TypeError(t + " is not a function");
      for (arguments.length > 1 && (n = e), r = 0; r < o;) {
        var a;
        r in i && (a = i[r], t.call(n, a, r, i)), r++
      }
    }), window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach), (0, o.default)(a.default.fn, {
      prepend: function (t) {
        return t instanceof HTMLElement || (t = t[0]), this.forEach(function (e) {
          e.insertAdjacentElement("afterBegin", t)
        }), this
      },
      append: function (t) {
        return t instanceof HTMLElement || (t = t[0]), this.forEach(function (e) {
          e.insertAdjacentElement("beforeEnd", t)
        }), this
      },
      remove: function () {
        return this.forEach(function (t) {
          t.parentNode.removeChild(t)
        }), this
      },
      find: function (t) {
        return (0, a.default)(t, this)
      },
      eq: function (t) {
        return (0, a.default)(this[t])
      },
      show: function () {
        return this.forEach(function (t) {
          t.style.display = "block"
        }), this
      },
      hide: function () {
        return this.forEach(function (t) {
          t.style.display = "none"
        }), this
      },
      css: function (t) {
        var e = this;
        return Object.keys(t).forEach(function (n) {
          e.forEach(function (e) {
            e.style[n] = t[n]
          })
        }), this
      },
      index: function () {
        var t = this[0],
          e = t.parentNode;
        return Array.prototype.indexOf.call(e.children, t)
      },
      on: function (t, e, n) {
        if (e) {
          a.default.fn.off(t, e, n);
          var r = "string" == typeof e && "function" == typeof n;
          return r || (n = e), this.forEach(function (i) {
            t.split(" ").forEach(function (t) {
              i.addEventListener(t, function (t) {
                r ? this.contains(t.target.closest(e)) && n.call(t.target, t) : n.call(this, t)
              }, !1)
            })
          }), this
        }
      },
      off: function (t, e, n) {
        return "function" == typeof e && (n = e, e = null), this.forEach(function (r) {
          t.split(" ").forEach(function (t) {
            "string" == typeof e ? r.querySelectorAll(e).forEach(function (e) {
              e.removeEventListener(t, n)
            }) : r.removeEventListener(t, n)
          })
        }), this
      },
      offAll: function () {
        var t = this;
        return this.forEach(function (e, n) {
          var r = e.cloneNode(!0);
          e.parentNode.replaceChild(r, e), t[n] = r
        }), this
      },
      html: function (t) {
        return void 0 !== t ? (this.forEach(function (e) {
          e.innerHTML = t
        }), this) : this[0].innerHTML
      },
      text: function (t) {
        return void 0 !== t ? (this.forEach(function (e) {
          e.innerText = t
        }), this) : this[0].innerText
      },
      empty: function (t) {
        return t = t || 0, this.forEach(function (e) {
          setTimeout(function (t) {
            e.innerText = ""
          }, t)
        }), this
      },
      val: function (t) {
        return void 0 !== t ? (this.forEach(function (e) {
          e.value = t
        }), this) : this[0].value || ""
      },
      attr: function () {
        var t = arguments;
        if ("object" == i(arguments[0])) {
          var e = arguments[0],
            n = this;
          return Object.keys(e).forEach(function (t) {
            n.forEach(function (n) {
              n.setAttribute(t, e[t])
            })
          }), this
        }
        return "string" == typeof arguments[0] && arguments.length < 2 ? this[0].getAttribute(arguments[0]) : (this.forEach(function (e) {
          e.setAttribute(t[0], t[1])
        }), this)
      },
      removeAttr: function (t) {
        return this.forEach(function (e) {
          var n = void 0,
            r = 0,
            i = t && t.match(/[^\x20\t\r\n\f\*\/\\]+/g);
          if (i && 1 === e.nodeType)
            for (; n = i[r++];) e.removeAttribute(n)
        }), this
      },
      hasClass: function (t) {
        return !!this[0] && new RegExp("(\\s|^)" + t + "(\\s|$)").test(this[0].getAttribute("class"))
      },
      addClass: function (t) {
        return this.forEach(function (e) {
          var n = (0, a.default)(e),
            r = n.attr("class");
          n.hasClass(t) || n.attr("class", r += " " + t)
        }), this
      },
      removeClass: function (t) {
        return this.forEach(function (e) {
          var n = (0, a.default)(e),
            r = n.attr("class");
          if (n.hasClass(t)) {
            var i = new RegExp("(\\s|^)" + t + "(\\s|$)");
            n.attr("class", r.replace(i, ""))
          }
        }), this
      }
    });
    var b = null;
    (0, o.default)(a.default, {
      extend: o.default,
      noop: function () {},
      navi: c,
      ua: c.userAgent,
      lang: c.language || c.languages[0],
      detect: s.default,
      store: l.default,
      escape: function (t) {
        return t && p.test(t) ? t.replace(u, function (t) {
          return f[t]
        }) : t
      },
      unescape: function (t) {
        return t && h.test(t) ? t.replace(g, function (t) {
          return v[t]
        }) : t
      },
      dynamicLoadSource: function (t, e) {
        if ((0, a.default)('script[src="' + t + '"]').length) "function" == typeof e && e();
        else {
          var n = d.createElement("script");
          n.src = t, n.async = !0, n.setAttribute("referrerPolicy", "no-referrer"), (0, a.default)("head")[0].appendChild(n), n.onload = n.onreadystatechange = function () {
            this.onload = this.onreadystatechange = null, (0, a.default)(n).remove(), "function" == typeof e && e()
          }
        }
      },
      sdkLoader: function (t, e, n) {
        e in window ? (b && clearTimeout(b), n && n()) : a.default.dynamicLoadSource(t, function () {
          b = setTimeout(function () {
            a.default.sdkLoader(t, e, n)
          }, 200)
        })
      }
    }), e.default = a.default
  }, function (t, e, n) {
    "use strict";
    var r = TypeError,
      i = Object.getOwnPropertyDescriptor;
    if (i) try {
      i({}, "")
    } catch (t) {
      i = null
    }
    var o = function () {
        throw new r
      },
      a = i ? function () {
        try {
          return arguments.callee, o
        } catch (t) {
          try {
            return i(arguments, "callee").get
          } catch (t) {
            return o
          }
        }
      }() : o,
      s = n(37)(),
      l = Object.getPrototypeOf || function (t) {
        return t.__proto__
      },
      d = void 0,
      c = void 0,
      u = void 0,
      p = "undefined" == typeof Uint8Array ? void 0 : l(Uint8Array),
      g = {
        "%Array%": Array,
        "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer,
        "%ArrayBufferPrototype%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer.prototype,
        "%ArrayIteratorPrototype%": s ? l([][Symbol.iterator]()) : void 0,
        "%ArrayPrototype%": Array.prototype,
        "%ArrayProto_entries%": Array.prototype.entries,
        "%ArrayProto_forEach%": Array.prototype.forEach,
        "%ArrayProto_keys%": Array.prototype.keys,
        "%ArrayProto_values%": Array.prototype.values,
        "%AsyncFromSyncIteratorPrototype%": void 0,
        "%AsyncFunction%": void 0,
        "%AsyncFunctionPrototype%": void 0,
        "%AsyncGenerator%": void 0,
        "%AsyncGeneratorFunction%": c,
        "%AsyncGeneratorPrototype%": void 0,
        "%AsyncIteratorPrototype%": u && s && Symbol.asyncIterator ? u[Symbol.asyncIterator]() : void 0,
        "%Atomics%": "undefined" == typeof Atomics ? void 0 : Atomics,
        "%Boolean%": Boolean,
        "%BooleanPrototype%": Boolean.prototype,
        "%DataView%": "undefined" == typeof DataView ? void 0 : DataView,
        "%DataViewPrototype%": "undefined" == typeof DataView ? void 0 : DataView.prototype,
        "%Date%": Date,
        "%DatePrototype%": Date.prototype,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Error,
        "%ErrorPrototype%": Error.prototype,
        "%eval%": eval,
        "%EvalError%": EvalError,
        "%EvalErrorPrototype%": EvalError.prototype,
        "%Float32Array%": "undefined" == typeof Float32Array ? void 0 : Float32Array,
        "%Float32ArrayPrototype%": "undefined" == typeof Float32Array ? void 0 : Float32Array.prototype,
        "%Float64Array%": "undefined" == typeof Float64Array ? void 0 : Float64Array,
        "%Float64ArrayPrototype%": "undefined" == typeof Float64Array ? void 0 : Float64Array.prototype,
        "%Function%": Function,
        "%FunctionPrototype%": Function.prototype,
        "%Generator%": void 0,
        "%GeneratorFunction%": d,
        "%GeneratorPrototype%": void 0,
        "%Int8Array%": "undefined" == typeof Int8Array ? void 0 : Int8Array,
        "%Int8ArrayPrototype%": "undefined" == typeof Int8Array ? void 0 : Int8Array.prototype,
        "%Int16Array%": "undefined" == typeof Int16Array ? void 0 : Int16Array,
        "%Int16ArrayPrototype%": "undefined" == typeof Int16Array ? void 0 : Int8Array.prototype,
        "%Int32Array%": "undefined" == typeof Int32Array ? void 0 : Int32Array,
        "%Int32ArrayPrototype%": "undefined" == typeof Int32Array ? void 0 : Int32Array.prototype,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": s ? l(l([][Symbol.iterator]())) : void 0,
        "%JSON%": "object" == typeof JSON ? JSON : void 0,
        "%JSONParse%": "object" == typeof JSON ? JSON.parse : void 0,
        "%Map%": "undefined" == typeof Map ? void 0 : Map,
        "%MapIteratorPrototype%": "undefined" != typeof Map && s ? l((new Map)[Symbol.iterator]()) : void 0,
        "%MapPrototype%": "undefined" == typeof Map ? void 0 : Map.prototype,
        "%Math%": Math,
        "%Number%": Number,
        "%NumberPrototype%": Number.prototype,
        "%Object%": Object,
        "%ObjectPrototype%": Object.prototype,
        "%ObjProto_toString%": Object.prototype.toString,
        "%ObjProto_valueOf%": Object.prototype.valueOf,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": "undefined" == typeof Promise ? void 0 : Promise,
        "%PromisePrototype%": "undefined" == typeof Promise ? void 0 : Promise.prototype,
        "%PromiseProto_then%": "undefined" == typeof Promise ? void 0 : Promise.prototype.then,
        "%Promise_all%": "undefined" == typeof Promise ? void 0 : Promise.all,
        "%Promise_reject%": "undefined" == typeof Promise ? void 0 : Promise.reject,
        "%Promise_resolve%": "undefined" == typeof Promise ? void 0 : Promise.resolve,
        "%Proxy%": "undefined" == typeof Proxy ? void 0 : Proxy,
        "%RangeError%": RangeError,
        "%RangeErrorPrototype%": RangeError.prototype,
        "%ReferenceError%": ReferenceError,
        "%ReferenceErrorPrototype%": ReferenceError.prototype,
        "%Reflect%": "undefined" == typeof Reflect ? void 0 : Reflect,
        "%RegExp%": RegExp,
        "%RegExpPrototype%": RegExp.prototype,
        "%Set%": "undefined" == typeof Set ? void 0 : Set,
        "%SetIteratorPrototype%": "undefined" != typeof Set && s ? l((new Set)[Symbol.iterator]()) : void 0,
        "%SetPrototype%": "undefined" == typeof Set ? void 0 : Set.prototype,
        "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer,
        "%SharedArrayBufferPrototype%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer.prototype,
        "%String%": String,
        "%StringIteratorPrototype%": s ? l("" [Symbol.iterator]()) : void 0,
        "%StringPrototype%": String.prototype,
        "%Symbol%": s ? Symbol : void 0,
        "%SymbolPrototype%": s ? Symbol.prototype : void 0,
        "%SyntaxError%": SyntaxError,
        "%SyntaxErrorPrototype%": SyntaxError.prototype,
        "%ThrowTypeError%": a,
        "%TypedArray%": p,
        "%TypedArrayPrototype%": p ? p.prototype : void 0,
        "%TypeError%": r,
        "%TypeErrorPrototype%": r.prototype,
        "%Uint8Array%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array,
        "%Uint8ArrayPrototype%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array.prototype,
        "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray,
        "%Uint8ClampedArrayPrototype%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray.prototype,
        "%Uint16Array%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array,
        "%Uint16ArrayPrototype%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array.prototype,
        "%Uint32Array%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array,
        "%Uint32ArrayPrototype%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array.prototype,
        "%URIError%": URIError,
        "%URIErrorPrototype%": URIError.prototype,
        "%WeakMap%": "undefined" == typeof WeakMap ? void 0 : WeakMap,
        "%WeakMapPrototype%": "undefined" == typeof WeakMap ? void 0 : WeakMap.prototype,
        "%WeakSet%": "undefined" == typeof WeakSet ? void 0 : WeakSet,
        "%WeakSetPrototype%": "undefined" == typeof WeakSet ? void 0 : WeakSet.prototype
      },
      h = n(3).call(Function.call, String.prototype.replace),
      f = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
      v = /\\(\\)?/g;
    t.exports = function (t, e) {
      if ("string" != typeof t || 0 === t.length) throw new TypeError("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && "boolean" != typeof e) throw new TypeError('"allowMissing" argument must be a boolean');
      for (var n = function (t) {
          var e = [];
          return h(t, f, function (t, n, r, i) {
            e[e.length] = r ? h(i, v, "$1") : n || t
          }), e
        }(t), o = function (t, e) {
          if (!(t in g)) throw new SyntaxError("intrinsic " + t + " does not exist!");
          if (void 0 === g[t] && !e) throw new r("intrinsic " + t + " exists, but is not available. Please file an issue!");
          return g[t]
        }("%" + (n.length > 0 ? n[0] : "") + "%", e), a = 1; a < n.length; a += 1)
        if (null != o)
          if (i && a + 1 >= n.length) {
            var s = i(o, n[a]);
            if (!(e || n[a] in o)) throw new r("base intrinsic for " + t + " exists, but the property is not available.");
            o = s ? s.get || s.value : o[n[a]]
          } else o = o[n[a]];
      return o
    }
  }, function (t, e, n) {
    var r = n(7),
      i = n(28);
    for (var o in (e = t.exports = function (t, e) {
        return new i(e).process(t)
      }).FilterCSS = i, r) e[o] = r[o];
    "undefined" != typeof window && (window.filterCSS = t.exports)
  }, function (t, e, n) {
    "use strict";
    var r = n(35);
    t.exports = Function.prototype.bind || r
  }, function (t, e) {
    t.exports = {
      indexOf: function (t, e) {
        var n, r;
        if (Array.prototype.indexOf) return t.indexOf(e);
        for (n = 0, r = t.length; n < r; n++)
          if (t[n] === e) return n;
        return -1
      },
      forEach: function (t, e, n) {
        var r, i;
        if (Array.prototype.forEach) return t.forEach(e, n);
        for (r = 0, i = t.length; r < i; r++) e.call(n, t[r], r, t)
      },
      trim: function (t) {
        return String.prototype.trim ? t.trim() : t.replace(/(^\s*)|(\s*$)/g, "")
      },
      spaceIndex: function (t) {
        var e = /\s|\n|\t/.exec(t);
        return e ? e.index : -1
      }
    }
  }, function (t, e, n) {
    "use strict";
    e.__esModule = !0, e.DEFAULT_EMOJI_CDN = "", e.DB_NAME = "Comment", e.DEFAULT_CONFIG = {
      lang: "zh-CN",
      langMode: null,
      appId: "",
      appKey: "",
      clazzName: "Comment",
      meta: ["nick", "mail", "link"],
      path: location.pathname,
      placeholder: "Just Go Go",
      pageSize: 10,
      recordIP: !0,
      serverURLs: "",
      visitor: !1,
      emojiCDN: "",
      emojiMaps: void 0,
      enableQQ: !1,
      requiredFields: []
    }, e.DEFAULT_META = ["nick", "mail", "link"], e.VERSION = "1.4.7"
  }, function (t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = function (t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }(n(51));
    e.default = function (t) {
      var e = new RegExp(/type\=[\'|\"]checkbox[\'|\"]/);
      return (0, r.default)(t, {
        onTag: function (t, n, r) {
          if ("input" === t && e.test(n)) return n
        },
        onTagAttr: function (t, e, n, r) {
          return i(t, e, n, r)
        },
        onIgnoreTag: function (t, n, r) {
          if ("input" === t && e.test(n)) return n
        },
        onIgnoreTagAttr: function (t, e, n, r) {
          return i(t, e, n, r)
        }
      })
    };
    var i = function (t, e, n, i) {
      return "class" === e ? "img" === t && "vemoji" === n ? e + '="' + r.default.escapeAttrValue(n) + '" referrerPolicy="no-referrer" ' : e + '="' + r.default.escapeAttrValue(n) + '"' : "style" === e ? e + '="' + n.replace(/^.*color\:([\d.]+);.*$/, "$1") + '"' : "input" === t && "type" === e && "checkbox" === n ? e + '="' + r.default.escapeAttrValue(n) + '" disabled' : void 0
    }
  }, function (t, e) {
    function n() {
      var t = {
        "align-content": !1,
        "align-items": !1,
        "align-self": !1,
        "alignment-adjust": !1,
        "alignment-baseline": !1,
        all: !1,
        "anchor-point": !1,
        animation: !1,
        "animation-delay": !1,
        "animation-direction": !1,
        "animation-duration": !1,
        "animation-fill-mode": !1,
        "animation-iteration-count": !1,
        "animation-name": !1,
        "animation-play-state": !1,
        "animation-timing-function": !1,
        azimuth: !1,
        "backface-visibility": !1,
        background: !0,
        "background-attachment": !0,
        "background-clip": !0,
        "background-color": !0,
        "background-image": !0,
        "background-origin": !0,
        "background-position": !0,
        "background-repeat": !0,
        "background-size": !0,
        "baseline-shift": !1,
        binding: !1,
        bleed: !1,
        "bookmark-label": !1,
        "bookmark-level": !1,
        "bookmark-state": !1,
        border: !0,
        "border-bottom": !0,
        "border-bottom-color": !0,
        "border-bottom-left-radius": !0,
        "border-bottom-right-radius": !0,
        "border-bottom-style": !0,
        "border-bottom-width": !0,
        "border-collapse": !0,
        "border-color": !0,
        "border-image": !0,
        "border-image-outset": !0,
        "border-image-repeat": !0,
        "border-image-slice": !0,
        "border-image-source": !0,
        "border-image-width": !0,
        "border-left": !0,
        "border-left-color": !0,
        "border-left-style": !0,
        "border-left-width": !0,
        "border-radius": !0,
        "border-right": !0,
        "border-right-color": !0,
        "border-right-style": !0,
        "border-right-width": !0,
        "border-spacing": !0,
        "border-style": !0,
        "border-top": !0,
        "border-top-color": !0,
        "border-top-left-radius": !0,
        "border-top-right-radius": !0,
        "border-top-style": !0,
        "border-top-width": !0,
        "border-width": !0,
        bottom: !1,
        "box-decoration-break": !0,
        "box-shadow": !0,
        "box-sizing": !0,
        "box-snap": !0,
        "box-suppress": !0,
        "break-after": !0,
        "break-before": !0,
        "break-inside": !0,
        "caption-side": !1,
        chains: !1,
        clear: !0,
        clip: !1,
        "clip-path": !1,
        "clip-rule": !1,
        color: !0,
        "color-interpolation-filters": !0,
        "column-count": !1,
        "column-fill": !1,
        "column-gap": !1,
        "column-rule": !1,
        "column-rule-color": !1,
        "column-rule-style": !1,
        "column-rule-width": !1,
        "column-span": !1,
        "column-width": !1,
        columns: !1,
        contain: !1,
        content: !1,
        "counter-increment": !1,
        "counter-reset": !1,
        "counter-set": !1,
        crop: !1,
        cue: !1,
        "cue-after": !1,
        "cue-before": !1,
        cursor: !1,
        direction: !1,
        display: !0,
        "display-inside": !0,
        "display-list": !0,
        "display-outside": !0,
        "dominant-baseline": !1,
        elevation: !1,
        "empty-cells": !1,
        filter: !1,
        flex: !1,
        "flex-basis": !1,
        "flex-direction": !1,
        "flex-flow": !1,
        "flex-grow": !1,
        "flex-shrink": !1,
        "flex-wrap": !1,
        float: !1,
        "float-offset": !1,
        "flood-color": !1,
        "flood-opacity": !1,
        "flow-from": !1,
        "flow-into": !1,
        font: !0,
        "font-family": !0,
        "font-feature-settings": !0,
        "font-kerning": !0,
        "font-language-override": !0,
        "font-size": !0,
        "font-size-adjust": !0,
        "font-stretch": !0,
        "font-style": !0,
        "font-synthesis": !0,
        "font-variant": !0,
        "font-variant-alternates": !0,
        "font-variant-caps": !0,
        "font-variant-east-asian": !0,
        "font-variant-ligatures": !0,
        "font-variant-numeric": !0,
        "font-variant-position": !0,
        "font-weight": !0,
        grid: !1,
        "grid-area": !1,
        "grid-auto-columns": !1,
        "grid-auto-flow": !1,
        "grid-auto-rows": !1,
        "grid-column": !1,
        "grid-column-end": !1,
        "grid-column-start": !1,
        "grid-row": !1,
        "grid-row-end": !1,
        "grid-row-start": !1,
        "grid-template": !1,
        "grid-template-areas": !1,
        "grid-template-columns": !1,
        "grid-template-rows": !1,
        "hanging-punctuation": !1,
        height: !0,
        hyphens: !1,
        icon: !1,
        "image-orientation": !1,
        "image-resolution": !1,
        "ime-mode": !1,
        "initial-letters": !1,
        "inline-box-align": !1,
        "justify-content": !1,
        "justify-items": !1,
        "justify-self": !1,
        left: !1,
        "letter-spacing": !0,
        "lighting-color": !0,
        "line-box-contain": !1,
        "line-break": !1,
        "line-grid": !1,
        "line-height": !1,
        "line-snap": !1,
        "line-stacking": !1,
        "line-stacking-ruby": !1,
        "line-stacking-shift": !1,
        "line-stacking-strategy": !1,
        "list-style": !0,
        "list-style-image": !0,
        "list-style-position": !0,
        "list-style-type": !0,
        margin: !0,
        "margin-bottom": !0,
        "margin-left": !0,
        "margin-right": !0,
        "margin-top": !0,
        "marker-offset": !1,
        "marker-side": !1,
        marks: !1,
        mask: !1,
        "mask-box": !1,
        "mask-box-outset": !1,
        "mask-box-repeat": !1,
        "mask-box-slice": !1,
        "mask-box-source": !1,
        "mask-box-width": !1,
        "mask-clip": !1,
        "mask-image": !1,
        "mask-origin": !1,
        "mask-position": !1,
        "mask-repeat": !1,
        "mask-size": !1,
        "mask-source-type": !1,
        "mask-type": !1,
        "max-height": !0,
        "max-lines": !1,
        "max-width": !0,
        "min-height": !0,
        "min-width": !0,
        "move-to": !1,
        "nav-down": !1,
        "nav-index": !1,
        "nav-left": !1,
        "nav-right": !1,
        "nav-up": !1,
        "object-fit": !1,
        "object-position": !1,
        opacity: !1,
        order: !1,
        orphans: !1,
        outline: !1,
        "outline-color": !1,
        "outline-offset": !1,
        "outline-style": !1,
        "outline-width": !1,
        overflow: !1,
        "overflow-wrap": !1,
        "overflow-x": !1,
        "overflow-y": !1,
        padding: !0,
        "padding-bottom": !0,
        "padding-left": !0,
        "padding-right": !0,
        "padding-top": !0,
        page: !1,
        "page-break-after": !1,
        "page-break-before": !1,
        "page-break-inside": !1,
        "page-policy": !1,
        pause: !1,
        "pause-after": !1,
        "pause-before": !1,
        perspective: !1,
        "perspective-origin": !1,
        pitch: !1,
        "pitch-range": !1,
        "play-during": !1,
        position: !1,
        "presentation-level": !1,
        quotes: !1,
        "region-fragment": !1,
        resize: !1,
        rest: !1,
        "rest-after": !1,
        "rest-before": !1,
        richness: !1,
        right: !1,
        rotation: !1,
        "rotation-point": !1,
        "ruby-align": !1,
        "ruby-merge": !1,
        "ruby-position": !1,
        "shape-image-threshold": !1,
        "shape-outside": !1,
        "shape-margin": !1,
        size: !1,
        speak: !1,
        "speak-as": !1,
        "speak-header": !1,
        "speak-numeral": !1,
        "speak-punctuation": !1,
        "speech-rate": !1,
        stress: !1,
        "string-set": !1,
        "tab-size": !1,
        "table-layout": !1,
        "text-align": !0,
        "text-align-last": !0,
        "text-combine-upright": !0,
        "text-decoration": !0,
        "text-decoration-color": !0,
        "text-decoration-line": !0,
        "text-decoration-skip": !0,
        "text-decoration-style": !0,
        "text-emphasis": !0,
        "text-emphasis-color": !0,
        "text-emphasis-position": !0,
        "text-emphasis-style": !0,
        "text-height": !0,
        "text-indent": !0,
        "text-justify": !0,
        "text-orientation": !0,
        "text-overflow": !0,
        "text-shadow": !0,
        "text-space-collapse": !0,
        "text-transform": !0,
        "text-underline-position": !0,
        "text-wrap": !0,
        top: !1,
        transform: !1,
        "transform-origin": !1,
        "transform-style": !1,
        transition: !1,
        "transition-delay": !1,
        "transition-duration": !1,
        "transition-property": !1,
        "transition-timing-function": !1,
        "unicode-bidi": !1,
        "vertical-align": !1,
        visibility: !1,
        "voice-balance": !1,
        "voice-duration": !1,
        "voice-family": !1,
        "voice-pitch": !1,
        "voice-range": !1,
        "voice-rate": !1,
        "voice-stress": !1,
        "voice-volume": !1,
        volume: !1,
        "white-space": !1,
        widows: !1,
        width: !0,
        "will-change": !1,
        "word-break": !0,
        "word-spacing": !0,
        "word-wrap": !0,
        "wrap-flow": !1,
        "wrap-through": !1,
        "writing-mode": !1,
        "z-index": !1
      };
      return t
    }
    var r = /javascript\s*\:/gim;
    e.whiteList = n(), e.getDefaultWhiteList = n, e.onAttr = function (t, e, n) {}, e.onIgnoreAttr = function (t, e, n) {}, e.safeAttrValue = function (t, e) {
      return r.test(e) ? "" : e
    }
  }, function (t, e) {
    t.exports = {
      indexOf: function (t, e) {
        var n, r;
        if (Array.prototype.indexOf) return t.indexOf(e);
        for (n = 0, r = t.length; n < r; n++)
          if (t[n] === e) return n;
        return -1
      },
      forEach: function (t, e, n) {
        var r, i;
        if (Array.prototype.forEach) return t.forEach(e, n);
        for (r = 0, i = t.length; r < i; r++) e.call(n, t[r], r, t)
      },
      trim: function (t) {
        return String.prototype.trim ? t.trim() : t.replace(/(^\s*)|(\s*$)/g, "")
      },
      trimRight: function (t) {
        return String.prototype.trimRight ? t.trimRight() : t.replace(/(\s*$)/g, "")
      }
    }
  }, function (t, e, n) {
    "use strict";
    var r = n(45),
      i = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
      o = Object.prototype.toString,
      a = Array.prototype.concat,
      s = Object.defineProperty,
      l = s && function () {
        var t = {};
        try {
          for (var e in s(t, "x", {
              enumerable: !1,
              value: t
            }), t) return !1;
          return t.x === t
        } catch (t) {
          return !1
        }
      }(),
      d = function (t, e, n, r) {
        (!(e in t) || function (t) {
          return "function" == typeof t && "[object Function]" === o.call(t)
        }(r) && r()) && (l ? s(t, e, {
          configurable: !0,
          enumerable: !1,
          value: n,
          writable: !0
        }) : t[e] = n)
      },
      c = function (t, e) {
        var n = arguments.length > 2 ? arguments[2] : {},
          o = r(e);
        i && (o = a.call(o, Object.getOwnPropertySymbols(e)));
        for (var s = 0; s < o.length; s += 1) d(t, o[s], e[o[s]], n[o[s]])
      };
    c.supportsDescriptors = !!l, t.exports = c
  }, function (t, e, n) {
    "use strict";
    var r = n(3),
      i = n(1)("%Function%"),
      o = i.apply,
      a = i.call;
    t.exports = function () {
      return r.apply(a, arguments)
    }, t.exports.apply = function () {
      return r.apply(o, arguments)
    }
  }, function (t, e, n) {
    "use strict";
    var r = Object.prototype.toString;
    t.exports = function (t) {
      var e = r.call(t),
        n = "[object Arguments]" === e;
      return n || (n = "[object Array]" !== e && null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Function]" === r.call(t.callee)), n
    }
  }, function (t, e, n) {
    "use strict";
    var r = n(32),
      i = n(31),
      o = n(33)("String.prototype.replace"),
      a = /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/,
      s = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
    t.exports = function () {
      var t = i(r(this));
      return o(o(t, a, ""), s, "")
    }
  }, function (t, e, n) {
    "use strict";
    var r = n(12);
    t.exports = function () {
      return String.prototype.trim && "​" === "​".trim() ? String.prototype.trim : r
    }
  }, function (t, e) {
    var n;
    n = function () {
      return this
    }();
    try {
      n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
      "object" == typeof window && (n = window)
    }
    t.exports = n
  }, function (t, e, n) {
    function r() {
      return {
        a: ["target", "href", "title"],
        abbr: ["title"],
        address: [],
        area: ["shape", "coords", "href", "alt"],
        article: [],
        aside: [],
        audio: ["autoplay", "controls", "loop", "preload", "src"],
        b: [],
        bdi: ["dir"],
        bdo: ["dir"],
        big: [],
        blockquote: ["cite"],
        br: [],
        caption: [],
        center: [],
        cite: [],
        code: [],
        col: ["align", "valign", "span", "width"],
        colgroup: ["align", "valign", "span", "width"],
        dd: [],
        del: ["datetime"],
        details: ["open"],
        div: [],
        dl: [],
        dt: [],
        em: [],
        font: ["color", "size", "face"],
        footer: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        header: [],
        hr: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        ins: ["datetime"],
        li: [],
        mark: [],
        nav: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        section: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        table: ["width", "border", "align", "valign"],
        tbody: ["align", "valign"],
        td: ["width", "rowspan", "colspan", "align", "valign"],
        tfoot: ["align", "valign"],
        th: ["width", "rowspan", "colspan", "align", "valign"],
        thead: ["align", "valign"],
        tr: ["rowspan", "align", "valign"],
        tt: [],
        u: [],
        ul: [],
        video: ["autoplay", "controls", "loop", "preload", "src", "height", "width"]
      }
    }

    function i(t) {
      return t.replace(v, "&lt;").replace(m, "&gt;")
    }

    function o(t) {
      return t.replace(b, "&quot;")
    }

    function a(t) {
      return t.replace(y, '"')
    }

    function s(t) {
      return t.replace(_, function (t, e) {
        return "x" === e[0] || "X" === e[0] ? String.fromCharCode(parseInt(e.substr(1), 16)) : String.fromCharCode(parseInt(e, 10))
      })
    }

    function l(t) {
      return t.replace(w, ":").replace(x, " ")
    }

    function d(t) {
      for (var e = "", n = 0, r = t.length; n < r; n++) e += t.charCodeAt(n) < 32 ? " " : t.charAt(n);
      return h.trim(e)
    }

    function c(t) {
      return d(t = l(t = s(t = a(t))))
    }

    function u(t) {
      return i(t = o(t))
    }
    var p = n(2).FilterCSS,
      g = n(2).getDefaultWhiteList,
      h = n(4),
      f = new p,
      v = /</g,
      m = />/g,
      b = /"/g,
      y = /&quot;/g,
      _ = /&#([a-zA-Z0-9]*);?/gim,
      w = /&colon;?/gim,
      x = /&newline;?/gim,
      j = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,
      k = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,
      A = /u\s*r\s*l\s*\(.*/gi,
      S = /<!--[\s\S]*?-->/g;
    e.whiteList = {
      a: ["target", "href", "title"],
      abbr: ["title"],
      address: [],
      area: ["shape", "coords", "href", "alt"],
      article: [],
      aside: [],
      audio: ["autoplay", "controls", "loop", "preload", "src"],
      b: [],
      bdi: ["dir"],
      bdo: ["dir"],
      big: [],
      blockquote: ["cite"],
      br: [],
      caption: [],
      center: [],
      cite: [],
      code: [],
      col: ["align", "valign", "span", "width"],
      colgroup: ["align", "valign", "span", "width"],
      dd: [],
      del: ["datetime"],
      details: ["open"],
      div: [],
      dl: [],
      dt: [],
      em: [],
      font: ["color", "size", "face"],
      footer: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      header: [],
      hr: [],
      i: [],
      img: ["src", "alt", "title", "width", "height"],
      ins: ["datetime"],
      li: [],
      mark: [],
      nav: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      section: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      table: ["width", "border", "align", "valign"],
      tbody: ["align", "valign"],
      td: ["width", "rowspan", "colspan", "align", "valign"],
      tfoot: ["align", "valign"],
      th: ["width", "rowspan", "colspan", "align", "valign"],
      thead: ["align", "valign"],
      tr: ["rowspan", "align", "valign"],
      tt: [],
      u: [],
      ul: [],
      video: ["autoplay", "controls", "loop", "preload", "src", "height", "width"]
    }, e.getDefaultWhiteList = r, e.onTag = function (t, e, n) {}, e.onIgnoreTag = function (t, e, n) {}, e.onTagAttr = function (t, e, n) {}, e.onIgnoreTagAttr = function (t, e, n) {}, e.safeAttrValue = function (t, e, n, r) {
      if (n = c(n), "href" === e || "src" === e) {
        if ("#" === (n = h.trim(n))) return "#";
        if ("http://" !== n.substr(0, 7) && "https://" !== n.substr(0, 8) && "mailto:" !== n.substr(0, 7) && "tel:" !== n.substr(0, 4) && "#" !== n[0] && "/" !== n[0]) return ""
      } else if ("background" === e) {
        if (j.lastIndex = 0, j.test(n)) return ""
      } else if ("style" === e) {
        if (k.lastIndex = 0, k.test(n)) return "";
        if (A.lastIndex = 0, A.test(n) && (j.lastIndex = 0, j.test(n))) return "";
        !1 !== r && (n = (r = r || f).process(n))
      }
      return u(n)
    }, e.escapeHtml = i, e.escapeQuote = o, e.unescapeQuote = a, e.escapeHtmlEntities = s, e.escapeDangerHtml5Entities = l, e.clearNonPrintableCharacter = d, e.friendlyAttrValue = c, e.escapeAttrValue = u, e.onIgnoreTagStripAll = function () {
      return ""
    }, e.StripTagBody = function (t, e) {
      function n(e) {
        return !!r || -1 !== h.indexOf(t, e)
      }
      "function" != typeof e && (e = function () {});
      var r = !Array.isArray(t),
        i = [],
        o = !1;
      return {
        onIgnoreTag: function (t, r, a) {
          if (n(t)) {
            if (a.isClosing) {
              var s = "[/removed]",
                l = a.position + s.length;
              return i.push([!1 !== o ? o : a.position, l]), o = !1, s
            }
            return o || (o = a.position), "[removed]"
          }
          return e(t, r, a)
        },
        remove: function (t) {
          var e = "",
            n = 0;
          return h.forEach(i, function (r) {
            e += t.slice(n, r[0]), n = r[1]
          }), e += t.slice(n)
        }
      }
    }, e.stripCommentTag = function (t) {
      return t.replace(S, "")
    }, e.stripBlankChar = function (t) {
      var e = t.split("");
      return (e = e.filter(function (t) {
        var e = t.charCodeAt(0);
        return !(127 === e || e <= 31 && 10 !== e && 13 !== e)
      })).join("")
    }, e.cssFilter = f, e.getDefaultCSSWhiteList = g
  }, function (t, e, n) {
    function r(t) {
      var e = l.spaceIndex(t);
      if (-1 === e) var n = t.slice(1, -1);
      else n = t.slice(1, e + 1);
      return "/" === (n = l.trim(n).toLowerCase()).slice(0, 1) && (n = n.slice(1)), "/" === n.slice(-1) && (n = n.slice(0, -1)), n
    }

    function i(t) {
      return "</" === t.slice(0, 2)
    }

    function o(t, e) {
      for (; e < t.length; e++) {
        var n = t[e];
        if (" " !== n) return "=" === n ? e : -1
      }
    }

    function a(t, e) {
      for (; e > 0; e--) {
        var n = t[e];
        if (" " !== n) return "=" === n ? e : -1
      }
    }

    function s(t) {
      return function (t) {
        return '"' === t[0] && '"' === t[t.length - 1] || "'" === t[0] && "'" === t[t.length - 1]
      }(t) ? t.substr(1, t.length - 2) : t
    }
    var l = n(4),
      d = /[^a-zA-Z0-9_:\.\-]/gim;
    e.parseTag = function (t, e, n) {
      var o = "",
        a = 0,
        s = !1,
        l = !1,
        d = 0,
        c = t.length,
        u = "",
        p = "";
      for (d = 0; d < c; d++) {
        var g = t.charAt(d);
        if (!1 === s) {
          if ("<" === g) {
            s = d;
            continue
          }
        } else if (!1 === l) {
          if ("<" === g) {
            o += n(t.slice(a, d)), s = d, a = d;
            continue
          }
          if (">" === g) {
            o += n(t.slice(a, s)), u = r(p = t.slice(s, d + 1)), o += e(s, o.length, u, p, i(p)), a = d + 1, s = !1;
            continue
          }
          if (('"' === g || "'" === g) && "=" === t.charAt(d - 1)) {
            l = g;
            continue
          }
        } else if (g === l) {
          l = !1;
          continue
        }
      }
      return a < t.length && (o += n(t.substr(a))), o
    }, e.parseAttr = function (t, e) {
      function n(t, n) {
        if (!((t = (t = l.trim(t)).replace(d, "").toLowerCase()).length < 1)) {
          var r = e(t, n || "");
          r && i.push(r)
        }
      }
      for (var r = 0, i = [], c = !1, u = t.length, p = 0; p < u; p++) {
        var g, h = t.charAt(p);
        if (!1 !== c || "=" !== h)
          if (!1 === c || p !== r || '"' !== h && "'" !== h || "=" !== t.charAt(p - 1)) {
            if (/\s|\n|\t/.test(h)) {
              if (t = t.replace(/\s|\n|\t/g, " "), !1 === c) {
                if (-1 === (g = o(t, p))) {
                  n(l.trim(t.slice(r, p))), c = !1, r = p + 1;
                  continue
                }
                p = g - 1;
                continue
              }
              if (-1 === (g = a(t, p - 1))) {
                n(c, s(l.trim(t.slice(r, p)))), c = !1, r = p + 1;
                continue
              }
            }
          } else {
            if (-1 === (g = t.indexOf(h, p + 1))) break;
            n(c, l.trim(t.slice(r + 1, g))), c = !1, r = (p = g) + 1
          }
        else c = t.slice(r, p), r = p + 1
      }
      return r < t.length && (!1 === c ? n(t.slice(r)) : n(c, s(l.trim(t.slice(r))))), l.trim(i.join(" "))
    }
  }, function (t, e, n) {
    var r, i, o;
    i = [t, e], r = function (t, e) {
      "use strict";

      function n(t) {
        function e(e) {
          var n = t.style.width;
          t.style.width = "0px", t.offsetWidth, t.style.width = n, t.style.overflowY = e
        }

        function n() {
          if (0 !== t.scrollHeight) {
            var e = function (t) {
                for (var e = []; t && t.parentNode && t.parentNode instanceof Element;) t.parentNode.scrollTop && e.push({
                  node: t.parentNode,
                  scrollTop: t.parentNode.scrollTop
                }), t = t.parentNode;
                return e
              }(t),
              n = document.documentElement && document.documentElement.scrollTop;
            t.style.height = "", t.style.height = t.scrollHeight + i + "px", s = t.clientWidth, e.forEach(function (t) {
              t.node.scrollTop = t.scrollTop
            }), n && (document.documentElement.scrollTop = n)
          }
        }

        function r() {
          n();
          var r = Math.round(parseFloat(t.style.height)),
            i = window.getComputedStyle(t, null),
            o = "content-box" === i.boxSizing ? Math.round(parseFloat(i.height)) : t.offsetHeight;
          if (o < r ? "hidden" === i.overflowY && (e("scroll"), n(), o = "content-box" === i.boxSizing ? Math.round(parseFloat(window.getComputedStyle(t, null).height)) : t.offsetHeight) : "hidden" !== i.overflowY && (e("hidden"), n(), o = "content-box" === i.boxSizing ? Math.round(parseFloat(window.getComputedStyle(t, null).height)) : t.offsetHeight), l !== o) {
            l = o;
            var s = a("autosize:resized");
            try {
              t.dispatchEvent(s)
            } catch (t) {}
          }
        }
        if (t && t.nodeName && "TEXTAREA" === t.nodeName && !o.has(t)) {
          var i = null,
            s = null,
            l = null,
            d = function () {
              t.clientWidth !== s && r()
            },
            c = function (e) {
              window.removeEventListener("resize", d, !1), t.removeEventListener("input", r, !1), t.removeEventListener("keyup", r, !1), t.removeEventListener("autosize:destroy", c, !1), t.removeEventListener("autosize:update", r, !1), Object.keys(e).forEach(function (n) {
                t.style[n] = e[n]
              }), o.delete(t)
            }.bind(t, {
              height: t.style.height,
              resize: t.style.resize,
              overflowY: t.style.overflowY,
              overflowX: t.style.overflowX,
              wordWrap: t.style.wordWrap
            });
          t.addEventListener("autosize:destroy", c, !1), "onpropertychange" in t && "oninput" in t && t.addEventListener("keyup", r, !1), window.addEventListener("resize", d, !1), t.addEventListener("input", r, !1), t.addEventListener("autosize:update", r, !1), t.style.overflowX = "hidden", t.style.wordWrap = "break-word", o.set(t, {
              destroy: c,
              update: r
            }),
            function () {
              var e = window.getComputedStyle(t, null);
              "vertical" === e.resize ? t.style.resize = "none" : "both" === e.resize && (t.style.resize = "horizontal"), i = "content-box" === e.boxSizing ? -(parseFloat(e.paddingTop) + parseFloat(e.paddingBottom)) : parseFloat(e.borderTopWidth) + parseFloat(e.borderBottomWidth), isNaN(i) && (i = 0), r()
            }()
        }
      }

      function r(t) {
        var e = o.get(t);
        e && e.destroy()
      }

      function i(t) {
        var e = o.get(t);
        e && e.update()
      }
      var o = "function" == typeof Map ? new Map : function () {
          var t = [],
            e = [];
          return {
            has: function (e) {
              return t.indexOf(e) > -1
            },
            get: function (n) {
              return e[t.indexOf(n)]
            },
            set: function (n, r) {
              -1 === t.indexOf(n) && (t.push(n), e.push(r))
            },
            delete: function (n) {
              var r = t.indexOf(n);
              r > -1 && (t.splice(r, 1), e.splice(r, 1))
            }
          }
        }(),
        a = function (t) {
          return new Event(t, {
            bubbles: !0
          })
        };
      try {
        new Event("test")
      } catch (t) {
        a = function (t) {
          var e = document.createEvent("Event");
          return e.initEvent(t, !0, !1), e
        }
      }
      var s = null;
      "undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((s = function (t) {
        return t
      }).destroy = function (t) {
        return t
      }, s.update = function (t) {
        return t
      }) : ((s = function (t, e) {
        return t && Array.prototype.forEach.call(t.length ? t : [t], function (t) {
          return n(t)
        }), t
      }).destroy = function (t) {
        return t && Array.prototype.forEach.call(t.length ? t : [t], r), t
      }, s.update = function (t) {
        return t && Array.prototype.forEach.call(t.length ? t : [t], i), t
      }), e.default = s, t.exports = e.default
    }, void 0 !== (o = "function" == typeof r ? r.apply(e, i) : r) && (t.exports = o)
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }

    function i(t) {
      return !!t && this.init(t), this
    }

    function o(t) {
      return new i(t)
    }
    var a = r(n(25)),
      s = r(n(17)),
      l = r(n(21)),
      d = r(n(20)),
      c = n(5),
      u = r(n(24)),
      p = r(n(6)),
      g = r(n(0)),
      h = r(n(23)),
      f = r(n(19)),
      v = r(n(22)),
      m = {
        comment: "",
        nick: "Anonymous",
        mail: "",
        link: "",
        ua: g.default.ua,
        url: ""
      },
      b = "",
      y = {
        cdn: "https://gravatar.loli.net/avatar/",
        ds: ["mp", "identicon", "monsterid", "wavatar", "robohash", "retro", ""],
        params: "",
        hide: !1
      };
    i.prototype.init = function (t) {
      if ("undefined" == typeof document) throw new Error("Sorry, Valine does not support Server-side rendering.");
      var e = this;
      return t && (t = g.default.extend(c.DEFAULT_CONFIG, t), e.i18n = (0, l.default)(t.lang || g.default.lang, t.langMode), e.config = t, t.emojiMaps && (d.default.maps = t.emojiMaps, t.emojiCDN && (d.default.cdn = t.emojiCDN)), e._init()), e
    }, i.prototype._init = function () {
      var t = this;
      try {
        var e = t.config,
          n = e.avatar,
          r = e.avatarForce,
          i = e.avatar_cdn,
          o = e.visitor,
          a = e.path,
          s = void 0 === a ? location.pathname : a,
          l = e.pageSize,
          d = e.recordIP;
        t.config.path = s.replace(/index\.html?$/, "");
        var u = y.ds,
          p = r ? "&q=" + Math.random().toString(32).substring(2) : "";
        y.params = "?d=" + (u.indexOf(n) > -1 ? n : "mp") + "&v=" + c.VERSION + p, y.hide = "hide" === n, y.cdn = /^https?\:\/\//.test(i) ? i : y.cdn, t.config.pageSize = isNaN(l) ? 10 : l < 1 ? 10 : l, d && (g.default.sdkLoader("//api.ip.sb/jsonip?callback=getIP", "getIP"), window.getIP = function (t) {
          m.ip = t.ip
        });
        var h = t.config.el || null,
          v = (0, g.default)(h);
        if (h = h instanceof HTMLElement ? h : v[v.length - 1] || null) {
          t.$el = (0, g.default)(h), t.$el.addClass("v").attr("data-class", "v"), y.hide && t.$el.addClass("hide-avatar"), t.config.meta = (t.config.guest_info || t.config.meta || c.DEFAULT_META).filter(function (t) {
            return c.DEFAULT_META.indexOf(t) > -1
          }), t.config.requiredFields = t.config.requiredFields.filter(function (t) {
            return c.DEFAULT_META.indexOf(t) > -1
          });
          var b = (0 == t.config.meta.length ? c.DEFAULT_META : t.config.meta).map(function (e) {
              var n = "mail" == e ? "email" : "text";
              return c.DEFAULT_META.indexOf(e) > -1 ? '<input name="' + e + '" placeholder="' + t.i18n.t(e) + '" class="v' + e + ' vinput" type="' + n + '">' : ""
            }),
            _ = '<div class="vpanel"><div class="vwrap"><p class="cancel-reply text-right" style="display:none;" title="' + t.i18n.t("cancelReply") + '"><svg class="vicon cancel-reply-btn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4220" width="22" height="22"><path d="M796.454 985H227.545c-50.183 0-97.481-19.662-133.183-55.363-35.7-35.701-55.362-83-55.362-133.183V227.545c0-50.183 19.662-97.481 55.363-133.183 35.701-35.7 83-55.362 133.182-55.362h568.909c50.183 0 97.481 19.662 133.183 55.363 35.701 35.702 55.363 83 55.363 133.183v568.909c0 50.183-19.662 97.481-55.363 133.183S846.637 985 796.454 985zM227.545 91C152.254 91 91 152.254 91 227.545v568.909C91 871.746 152.254 933 227.545 933h568.909C871.746 933 933 871.746 933 796.454V227.545C933 152.254 871.746 91 796.454 91H227.545z" p-id="4221"></path><path d="M568.569 512l170.267-170.267c15.556-15.556 15.556-41.012 0-56.569s-41.012-15.556-56.569 0L512 455.431 341.733 285.165c-15.556-15.556-41.012-15.556-56.569 0s-15.556 41.012 0 56.569L455.431 512 285.165 682.267c-15.556 15.556-15.556 41.012 0 56.569 15.556 15.556 41.012 15.556 56.569 0L512 568.569l170.267 170.267c15.556 15.556 41.012 15.556 56.569 0 15.556-15.556 15.556-41.012 0-56.569L568.569 512z" p-id="4222" ></path></svg></p><div class="vheader item' + b.length + '">' + b.join("") + '</div><div class="vedit"><textarea id="veditor" class="veditor vinput" placeholder="' + t.config.placeholder + '"></textarea><div class="vrow"><div class="vcol vcol-60 status-bar"></div><div class="vcol vcol-40 vctrl text-right"><span title="' + t.i18n.t("emoji") + '"  class="vicon vemoji-btn"><svg  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16172" width="22" height="22" ><path d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zM512 56.888889a455.111111 455.111111 0 1 0 455.111111 455.111111 455.111111 455.111111 0 0 0-455.111111-455.111111zM312.888889 512A85.333333 85.333333 0 1 1 398.222222 426.666667 85.333333 85.333333 0 0 1 312.888889 512z" p-id="16173"></path><path d="M512 768A142.222222 142.222222 0 0 1 369.777778 625.777778a28.444444 28.444444 0 0 1 56.888889 0 85.333333 85.333333 0 0 0 170.666666 0 28.444444 28.444444 0 0 1 56.888889 0A142.222222 142.222222 0 0 1 512 768z" p-id="16174"></path><path d="M782.222222 391.964444l-113.777778 59.733334a29.013333 29.013333 0 0 1-38.684444-10.808889 28.444444 28.444444 0 0 1 10.24-38.684445l113.777778-56.888888a28.444444 28.444444 0 0 1 38.684444 10.24 28.444444 28.444444 0 0 1-10.24 36.408888z" p-id="16175"></path><path d="M640.568889 451.697778l113.777778 56.888889a27.875556 27.875556 0 0 0 38.684444-10.24 27.875556 27.875556 0 0 0-10.24-38.684445l-113.777778-56.888889a28.444444 28.444444 0 0 0-38.684444 10.808889 28.444444 28.444444 0 0 0 10.24 38.115556z" p-id="16176"></path></svg></span><span title="' + t.i18n.t("preview") + '" class="vicon vpreview-btn"><svg  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17688" width="22" height="22"><path d="M502.390154 935.384615a29.538462 29.538462 0 1 1 0 59.076923H141.430154C79.911385 994.461538 29.538462 946.254769 29.538462 886.153846V137.846154C29.538462 77.745231 79.950769 29.538462 141.390769 29.538462h741.218462c61.44 0 111.852308 48.206769 111.852307 108.307692v300.268308a29.538462 29.538462 0 1 1-59.076923 0V137.846154c0-26.899692-23.355077-49.230769-52.775384-49.230769H141.390769c-29.420308 0-52.775385 22.331077-52.775384 49.230769v748.307692c0 26.899692 23.355077 49.230769 52.775384 49.230769h360.999385z" p-id="17689"></path><path d="M196.923077 216.615385m29.538461 0l374.153847 0q29.538462 0 29.538461 29.538461l0 0q0 29.538462-29.538461 29.538462l-374.153847 0q-29.538462 0-29.538461-29.538462l0 0q0-29.538462 29.538461-29.538461Z" p-id="17690"></path><path d="M649.846154 846.769231a216.615385 216.615385 0 1 0 0-433.230769 216.615385 216.615385 0 0 0 0 433.230769z m0 59.076923a275.692308 275.692308 0 1 1 0-551.384616 275.692308 275.692308 0 0 1 0 551.384616z" p-id="17691"></path><path d="M807.398383 829.479768m20.886847-20.886846l0 0q20.886846-20.886846 41.773692 0l125.321079 125.321079q20.886846 20.886846 0 41.773693l0 0q-20.886846 20.886846-41.773693 0l-125.321078-125.321079q-20.886846-20.886846 0-41.773693Z" p-id="17692"></path></svg></span></div></div></div><div class="vrow"><div class="vcol vcol-30" ><a alt="Markdown is supported" href="https://guides.github.com/features/mastering-markdown/" class="vicon" target="_blank"><svg class="markdown" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z"></path></svg></a></div><div class="vcol vcol-70 text-right"><button type="button"  title="Cmd|Ctrl+Enter" class="vsubmit vbtn">' + t.i18n.t("submit") + '</button></div></div><div class="vemojis" style="display:none;"></div><div class="vinput vpreview" style="display:none;"></div><div style="display:none;" class="vmark"></div></div></div><div class="vcount" style="display:none;"><span class="vnum">0</span> ' + t.i18n.t("comments") + '</div><div class="vload-top text-center" style="display:none;"><i class="vspinner" style="width:30px;height:30px;"></i></div><div class="vcards"></div><div class="vload-bottom text-center" style="display:none;"><i class="vspinner" style="width:30px;height:30px;"></i></div><div class="vempty" style="display:none;"></div><div class="vpage txt-center" style="display:none"><button type="button" class="vmore vbtn">' + t.i18n.t("more") + '</button></div><div class="vcopy txt-right">Powered By <a href="https://valine.js.org" target="_blank">Valine</a><br>v' + c.VERSION + "</div>";
          t.$el.html(_), t.$el.find(".cancel-reply").on("click", function (e) {
            t.reset()
          });
          var x = t.$el.find(".vempty");
          t.$nodata = {
            show: function (e) {
              return x.html(e || t.i18n.t("sofa")).show(), t
            },
            hide: function () {
              return x.hide(), t
            }
          };
          var j = t.$el.find(".vload-bottom"),
            k = t.$el.find(".vload-top");
          t.$loading = {
            show: function (e) {
              return e && k.show() || j.show(), t.$nodata.hide(), t
            },
            hide: function () {
              return k.hide(), j.hide(), 0 === t.$el.find(".vcard").length && t.$nodata.show(), t
            }
          }
        }(0, f.default)(t.config, function (e) {
          var n = (0, g.default)(".valine-comment-count"),
            r = 0;
          ! function e(n) {
            var i = n[r++];
            if (i) {
              var o = (0, g.default)(i).attr("data-xid");
              o && t.Q(o).count().then(function (t) {
                i.innerText = t, e(n)
              }).catch(function (t) {
                i.innerText = 0
              })
            }
          }(n), o && w.add(AV.Object.extend("Counter"), t.config.path), t.bind()
        })
      } catch (e) {
        t.ErrorHandler(e, "init")
      }
    };
    var _ = function (t, e) {
        var n = new t,
          r = new AV.ACL;
        r.setPublicReadAccess(!0), r.setPublicWriteAccess(!0), n.setACL(r), n.set("url", e.url), n.set("xid", e.xid), n.set("title", e.title), n.set("time", 1), n.save().then(function (t) {
          (0, g.default)(e.el).find(".leancloud-visitors-count").text(1)
        }).catch(function (t) {})
      },
      w = {
        add: function (t, e) {
          var n = this,
            r = (0, g.default)(".leancloud_visitors,.leancloud-visitors");
          if (1 === r.length) {
            var i = r[0],
              o = decodeURI((0, g.default)(i).attr("id")),
              a = (0, g.default)(i).attr("data-flag-title"),
              s = encodeURI(o),
              l = {
                el: i,
                url: o,
                xid: s,
                title: a
              };
            if (decodeURI(o) === decodeURI(e)) {
              var d = new AV.Query(t);
              d.equalTo("url", o), d.find().then(function (e) {
                if (e.length > 0) {
                  var n = e[0];
                  n.increment("time"), n.save().then(function (t) {
                    (0, g.default)(i).find(".leancloud-visitors-count").text(t.get("time"))
                  }).catch(function (t) {})
                } else _(t, l)
              }).catch(function (e) {
                101 == e.code ? _(t, l) : n.ErrorHandler(e)
              })
            } else w.show(t, r)
          } else w.show(t, r)
        },
        show: function (t, e) {
          var n = [];
          if (e.forEach(function (t) {
              var e = (0, g.default)(t).find(".leancloud-visitors-count");
              e && e.text(0), n.push(decodeURI((0, g.default)(t).attr("id")))
            }), n.length) {
            var r = new AV.Query(t);
            r.containedIn("url", n), r.find().then(function (t) {
              t.length > 0 && t.forEach(function (t) {
                var e = t.get("url"),
                  n = t.get("time");
                (0, g.default)(".leancloud_visitors,.leancloud-visitors").forEach(function (t) {
                  var r = (0, g.default)(t);
                  if (r.attr("id") == e || r.attr("data-xid") == e) {
                    var i = r.find(".leancloud-visitors-count");
                    i && i.text(n)
                  }
                })
              })
            }).catch(function (t) {})
          }
        }
      };
    i.prototype.Q = function (t) {
      var e = arguments.length,
        n = this.config.clazzName;
      if (1 == e) {
        var r = new AV.Query(n);
        r.doesNotExist("rid");
        var i = new AV.Query(n);
        i.equalTo("rid", "");
        var o = AV.Query.or(r, i);
        return "*" === t ? o.exists("url") : o.equalTo("url", decodeURI(t)), o.addDescending("createdAt"), o.addDescending("insertedAt"), o
      }
      var a = "select * from " + n + " where rid in (" + JSON.stringify(arguments[1]).replace(/(\[|\])/g, "") + ") order by -createdAt,-createdAt";
      return AV.Query.doCloudQuery(a)
    }, i.prototype.ErrorHandler = function (t, e) {
      var n = this;
      if (n.$el && n.$loading.hide().$nodata.hide() && n.$el.find(".vwrap").hide(), "[object Error]" === {}.toString.call(t)) {
        var r = t.code || !isNaN(t.message) ? t.message : "";
        if (r) {
          var i = n.i18n.t("code-" + r),
            o = (i == "code-" + r ? void 0 : i) || t.message || t.error || "";
          101 == r ? n.$nodata.show() : n.$el && n.$nodata.show('<pre style="text-align:left;">Code ' + r + ": " + o + "</pre>")
        } else n.$el && n.$nodata.show('<pre style="text-align:left;"> ' + msg + "</pre>")
      } else n.$el && n.$nodata.show('<pre style="text-align:left;">' + JSON.stringify(t) + "</pre>")
    }, i.prototype.installLocale = function (t, e) {
      return this.i18n(t, e), this
    }, i.prototype.setPath = function (t) {
      return this.config.path = t, this
    }, i.prototype.bind = function () {
      var t = this,
        e = t.$el.find(".vemojis"),
        n = t.$el.find(".vpreview"),
        r = t.$el.find(".vemoji-btn"),
        i = t.$el.find(".vpreview-btn"),
        o = t.$el.find(".veditor"),
        l = d.default.maps,
        c = !1;
      t.$emoji = {
        show: function () {
          return !c && function (t) {
            var n = [];
            for (var r in l) l.hasOwnProperty(r) && n.push('<i title="' + r + '" >' + d.default.build(r) + "</i>");
            e.html(n.join("")), c = !0, e.find("i").on("click", function (t) {
              t.preventDefault(), k(o[0], " :" + (0, g.default)(this).attr("title") + ":")
            })
          }(), t.$preview.hide(), e.show(), r.addClass("actived"), t.$emoji
        },
        hide: function () {
          return r.removeClass("actived"), e.hide(), t.$emoji
        }
      }, t.$preview = {
        show: function () {
          return b ? (t.$emoji.hide(), i.addClass("actived"), n.html(b).show(), P()) : t.$preview.hide(), t.$preview
        },
        hide: function () {
          return i.removeClass("actived"), n.hide().html(""), t.$preview
        }
      };
      var f = function (t) {
        b = (0, h.default)(d.default.parse(t.val() || "")), i.hasClass("actived") > -1 && b != n.html() && n.html(b), (0, s.default)(t[0]), P()
      };
      r.on("click", function (e) {
        r.hasClass("actived") ? t.$emoji.hide() : t.$emoji.show()
      }), i.on("click", function (e) {
        i.hasClass("actived") ? t.$preview.hide() : t.$preview.show()
      });
      var _ = t.config.meta,
        w = {},
        x = {
          veditor: "comment"
        };
      for (var j in _.forEach(function (t) {
          x["v" + t] = t
        }), x) x.hasOwnProperty(j) && function () {
        var e = x[j],
          n = t.$el.find("." + j);
        w[e] = n, n.on("input change blur propertychange", function (r) {
          t.config.enableQQ && "blur" === r.type && "nick" === e && !isNaN(n.val()) && (0, v.default)(n.val(), function (t) {
            var e = t.name || n.val();
            (0, g.default)(".vnick").val(e), (0, g.default)(".vmail").val(t.qq + "@qq.com"), m.nick = e, m.mail = t.qq + "@qq.com", m.QQAvatar = t.pic
          }), "comment" === e ? f(n) : m[e] = g.default.escape(n.val().replace(/(^\s*)|(\s*$)/g, "")).substring(0, 40)
        })
      }();
      var k = function (t, e) {
          if (document.selection) t.focus(), document.selection.createRange().text = e, t.focus();
          else if (t.selectionStart || "0" == t.selectionStart) {
            var n = t.selectionStart,
              r = t.selectionEnd,
              i = t.scrollTop;
            t.value = t.value.substring(0, n) + e + t.value.substring(r, t.value.length), t.focus(), t.selectionStart = n + e.length, t.selectionEnd = n + e.length, t.scrollTop = i
          } else t.focus(), t.value += e;
          (0, s.default)(t)
        },
        A = {
          no: 1,
          size: t.config.pageSize,
          skip: t.config.pageSize
        },
        S = t.$el.find(".vpage");
      S.on("click", function (t) {
        S.hide(), A.no++, O()
      });
      var O = function () {
        var e = A.size,
          n = A.no,
          r = Number(t.$el.find(".vnum").text());
        t.$loading.show();
        var i = t.Q(t.config.path);
        i.limit(e), i.skip((n - 1) * e), i.find().then(function (i) {
          if (A.skip = A.size, i && i.length) {
            var o = [];
            i.forEach(function (e) {
              o.push(e.id), $(e, t.$el.find(".vcards"), !0)
            }), t.Q(t.config.path, o).then(function (t) {
              (t && t.results || []).forEach(function (t) {
                $(t, (0, g.default)('.vquote[data-self-id="' + t.get("rid") + '"]'))
              }).catch(function (t) {})
            }), e * n < r ? S.show() : S.hide()
          } else t.$nodata.show();
          t.$loading.hide()
        }).catch(function (e) {
          t.$loading.hide().ErrorHandler(e, "query")
        })
      };
      t.Q(t.config.path).count().then(function (e) {
        e > 0 ? (t.$el.find(".vcount").show().find(".vnum").text(e), O()) : t.$loading.hide()
      }).catch(function (e) {
        t.ErrorHandler(e, "count")
      });
      var $ = function (e, n, r) {
          var i = (0, g.default)('<div class="vcard" id="' + e.id + '"></div>'),
            o = e.get("ua"),
            s = "";
          o && !/ja/.test(t.config.lang) && (s = '<span class="vsys">' + (o = g.default.detect(o)).browser + " " + o.version + '</span> <span class="vsys">' + o.os + " " + o.osVersion + "</span>"), "*" === t.config.path && (s = '<a href="' + e.get("url") + '" class="vsys">' + e.get("url") + "</a>");
          var l = e.get("link") ? /^https?\:\/\//.test(e.get("link")) ? e.get("link") : "http://" + e.get("link") : "",
            d = l ? '<a class="vnick" rel="nofollow" href="' + l + '" target="_blank" >' + e.get("nick") + "</a>" : '<span class="vnick">' + e.get("nick") + "</span>",
            c = (y.hide ? "" : t.config.enableQQ && e.get("QQAvatar") ? '<img class="vimg" src="' + e.get("QQAvatar") + '" referrerPolicy="no-referrer"/>' : '<img class="vimg" src="' + (y.cdn + (0, a.default)(e.get("mail")) + y.params) + '">') + '<div class="vh"><div class="vhead">' + d + " " + s + '</div><div class="vmeta"><span class="vtime" >' + (0, u.default)(e.get("insertedAt"), t.i18n) + '</span><span class="vat" data-vm-id="' + (e.get("rid") || e.id) + '" data-self-id="' + e.id + '">' + t.i18n.t("reply") + '</span></div><div class="vcontent" data-expand="' + t.i18n.t("expand") + '">' + (0, p.default)(e.get("comment")) + '</div><div class="vreply-wrapper" data-self-id="' + e.id + '"></div><div class="vquote" data-self-id="' + e.id + '"></div></div>';
          i.html(c);
          var h = i.find(".vat");
          i.find("a").forEach(function (t) {
            t && !(0, g.default)(t).hasClass("at") && (0, g.default)(t).attr({
              target: "_blank",
              rel: "nofollow"
            })
          }), r ? n.append(i) : n.prepend(i);
          var f = i.find(".vcontent");
          f && I(f), h && T(h, e), P()
        },
        E = {},
        T = function (e, n) {
          e.on("click", function (r) {
            var i = e.attr("data-vm-id"),
              o = e.attr("data-self-id"),
              a = t.$el.find(".vwrap"),
              s = "@" + g.default.escape(n.get("nick"));
            (0, g.default)('.vreply-wrapper[data-self-id="' + o + '"]').append(a).find(".cancel-reply").show(), E = {
              at: g.default.escape(s) + " ",
              rid: i,
              pid: o,
              rmail: n.get("mail")
            }, w.comment.attr({
              placeholder: s
            })[0].focus()
          })
        },
        P = function () {
          setTimeout(function () {
            try {
              "MathJax" in window && "version" in window.MathJax && (/^3.*/.test(window.MathJax.version) && MathJax.typeset() || MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.querySelector(".v")])), "renderMathInElement" in window && renderMathInElement((0, g.default)(".v")[0], {
                delimiters: [{
                  left: "$$",
                  right: "$$",
                  display: !0
                }, {
                  left: "$",
                  right: "$",
                  display: !1
                }]
              })
            } catch (t) {}
          }, 100)
        },
        I = function (t) {
          setTimeout(function () {
            t[0].offsetHeight > 180 && (t.addClass("expand"), t.on("click", function (e) {
              t.removeClass("expand")
            }))
          })
        };
      ! function (e) {
        if (e = g.default.store.get("_v_Cache") || e)
          for (var n in _) {
            var r = _[n];
            t.$el.find(".v" + r).val(g.default.unescape(e[r])), m[r] = e[r]
          }
      }(), t.reset = function () {
        m.comment = "", w.comment.val(""), f(w.comment), w.comment.attr("placeholder", t.config.placeholder), E = {}, t.$preview.hide(), t.$el.find(".vpanel").append(t.$el.find(".vwrap")), t.$el.find(".cancel-reply").hide(), b = ""
      };
      var C = t.$el.find(".vsubmit"),
        M = function (e) {
          if (t.config.requiredFields.indexOf("nick") > -1 && m.nick.length < 3) return w.nick[0].focus(), void t.$el.find(".status-bar").text("" + t.i18n.t("nickFail")).empty(3e3);
          if (t.config.requiredFields.indexOf("mail") > -1 && !/[\w-\.]+@([\w-]+\.)+[a-z]{2,3}/.test(m.mail)) return w.mail[0].focus(), void t.$el.find(".status-bar").text("" + t.i18n.t("mailFail")).empty(3e3);
          if ("" != b) {
            m.comment = b, m.nick = m.nick || "Anonymous";
            var n = g.default.store.get("vlx");
            n && Date.now() / 1e3 - n / 1e3 < 20 ? t.$el.find(".status-bar").text(t.i18n.t("busy")).empty(3e3) : z()
          } else w.comment[0].focus()
        },
        z = function () {
          g.default.store.set("vlx", Date.now()), C.attr({
            disabled: !0
          }), t.$loading.show(!0);
          var e = new(AV.Object.extend(t.config.clazzName || "Comment"));
          if (m.url = decodeURI(t.config.path), m.insertedAt = new Date, E.rid) {
            var n = E.pid || E.rid;
            e.set("rid", E.rid), e.set("pid", n), m.comment = b.replace("<p>", '<p><a class="at" href="#' + n + '">' + E.at + "</a> , ")
          }
          for (var r in m)
            if (m.hasOwnProperty(r)) {
              var i = m[r];
              e.set(r, i)
            } e.setACL(function () {
            var t = new AV.ACL;
            return t.setPublicReadAccess(!0), t.setPublicWriteAccess(!1), t
          }()), e.save().then(function (e) {
            "Anonymous" != m.nick && g.default.store.set("_v_Cache", {
              nick: m.nick,
              link: m.link,
              mail: m.mail
            });
            var n = t.$el.find(".vnum");
            try {
              E.rid ? $(e, (0, g.default)('.vquote[data-self-id="' + E.rid + '"]'), !0) : (Number(n.text()) ? n.text(Number(n.text()) + 1) : t.$el.find(".vcount").show().find(".vnum").text(Number(n.text()) + 1), $(e, t.$el.find(".vcards")), A.skip++), C.removeAttr("disabled"), t.$loading.hide(), t.reset()
            } catch (e) {
              t.ErrorHandler(e, "save")
            }
          }).catch(function (e) {
            t.ErrorHandler(e, "commitEvt")
          })
        };
      C.on("click", M), (0, g.default)(document).on("keydown", function (t) {
        var e = (t = event || t).keyCode || t.which || t.charCode;
        (t.ctrlKey || t.metaKey) && 13 === e && M(), 9 === e && "veditor" == (document.activeElement.id || "") && (t.preventDefault(), k(o[0], "    "))
      }).on("paste", function (t) {
        var e = "clipboardData" in t ? t.clipboardData : t.originalEvent && t.originalEvent.clipboardData || window.clipboardData;
        e && L(e.items, !0)
      }), o.on("dragenter dragleave dragover drop", function (t) {
        t.stopPropagation(), t.preventDefault(), "drop" === t.type && L(t.dataTransfer.items)
      });
      var L = function (t, e) {
          for (var n = [], r = 0, i = t.length; r < i; r++) {
            var a = t[r];
            if ("string" === a.kind && a.type.match("^text/html")) !e && a.getAsString(function (t) {
              t && k(o[0], t.replace(/<[^>]+>/g, ""))
            });
            else if (-1 !== a.type.indexOf("image")) {
              n.push(a.getAsFile());
              continue
            }
          }
          R(n)
        },
        R = function e(n, r) {
          r = r || 0;
          var i = n.length;
          if (i > 0) {
            var a = n[r];
            C.attr({
              disabled: !0
            });
            var l = "![Uploading " + a.name + "...]()";
            k(o[0], l), F(a, function (d, c) {
              !d && c ? (o.val(o.val().replace(l, "![" + a.name + "](" + c.data.url + ")\r\n")), (0, s.default)(o[0]), ++r < i ? e(n, r) : C.removeAttr("disabled")) : d && (o.val(o.val().replace(l, "")), (0, s.default)(o[0]), t.$el.find(".status-bar").text(d).empty(3e3), C.removeAttr("disabled"))
            })
          }
        },
        F = function (t, e) {
          var n = new FormData;
          n.append("image", t);
          var r = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
          r.onreadystatechange = function () {
            if (4 == r.readyState)
              if (200 === r.status) try {
                var t = JSON.parse(r.responseText);
                e && e(null, t)
              } catch (t) {
                e && e(t)
              } else e && e(r.status)
          }, r.onerror = e, r.open("POST", "https://pic.alexhchu.com/api/upload", !0), r.send(n)
        }
    }, t.exports = o, t.exports.default = o
  }, function (t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = function (t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }(n(0)),
      i = !1;
    e.default = function (t, e) {
      if ("AV" in window) {
        var n = window.AV.version || window.AV.VERSION;
        if (!(parseInt(n.split(".")[0]) > 2 && AV.applicationId && AV.applicationKey)) throw new Error(98);
        i = !0
      }
      i ? e && e() : r.default.sdkLoader("//cdn.jsdelivr.net/npm/leancloud-storage@3/dist/av-min.js", "AV", function (n) {
        var r, o = "https://",
          a = t.app_id || t.appId,
          s = t.app_key || t.appKey;
        if (!t.serverURLs) switch (a.slice(-9)) {
          case "-9Nh9j0Va":
            o += "tab.";
            break;
          case "-MdYXbMMI":
            o += "us."
        }
        r = t.serverURLs || o + "avoscloud.com", AV.init({
          appId: a,
          appKey: s,
          serverURLs: r
        }), i = !0, e && e()
      })
    }
  }, function (t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = {
      cdn: n(5).DEFAULT_EMOJI_CDN,
      maps: n(53),
      parse: function (t) {
        return String(t).replace(/:(.+?):/g, function (t, e) {
          return r.maps[e] ? r.build(e) : t
        })
      },
      build: function (t) {
        return ' <img alt=":' + t + ':" referrerPolicy="no-referrer" class="vemoji" src=\'' + (r.cdn + r.maps[t]) + "'/>"
      }
    };
    e.default = r
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
    e.__esModule = !0;
    var i = r(n(42)),
      o = r(n(56)),
      a = r(n(57)),
      s = r(n(54)),
      l = r(n(55)),
      d = {
        zh: o.default,
        "zh-cn": o.default,
        "zh-CN": o.default,
        "zh-TW": a.default,
        en: s.default,
        "en-US": s.default,
        ja: l.default,
        "ja-JP": l.default
      };
    e.default = function (t, e) {
      return !d[t] && t && e && (d[t] = e), new i.default({
        phrases: d[t || "zh"],
        locale: t
      })
    }
  }, function (t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = function (t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }(n(0));
    e.default = function (t, e) {
      var n = r.default.store.get("v_" + t);
      if (n) e && e(n);
      else {
        var i = "JSONcallback_" + (Date.now() + Math.round(1e3 * Math.random())),
          o = "//fly.pjax.cn/api/nic.php?qq=" + t + "&callback=" + i;
        r.default.sdkLoader(o, i), window[i] = function (n) {
          window[i] = null, n.qq = t, n.pic = "https://q2.qlogo.cn/headimg_dl?dst_uin=" + t + "&spec=100", r.default.store.set("v_" + t, n), e && e(n)
        }
      }
    }
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
    e.__esModule = !0;
    var i = n(41),
      o = r(i),
      a = r(n(6)),
      s = r(n(0)),
      l = n(36),
      d = new i.Renderer;
    d.code = function (t, e) {
      return '<pre><code class="hljs language-' + e + '">' + (e && hljs.getLanguage(e) ? hljs.highlight(e, t).value : s.default.escape(t)) + "</code></pre>"
    }, o.default.setOptions({
      renderer: "hljs" in window ? d : new i.Renderer,
      highlight: function (t, e) {
        return "hljs" in window ? e && hljs.getLanguage(e) && hljs.highlight(e, t, !0).value || hljs.highlightAuto(t).value : l(t)
      },
      gfm: !0,
      tables: !0,
      breaks: !0,
      pedantic: !1,
      sanitize: !1,
      smartLists: !0,
      smartypants: !0
    }), e.default = function (t) {
      return (0, a.default)((0, o.default)(t))
    }
  }, function (t, e, n) {
    "use strict";
    var r = function (t) {
        var e = o(t.getDate(), 2),
          n = o(t.getMonth() + 1, 2);
        return o(t.getFullYear(), 2) + "-" + n + "-" + e
      },
      i = function t(e) {
        return e instanceof Date ? e : !isNaN(e) || /^\d+$/.test(e) ? new Date(parseInt(e)) : /GMT/.test(e || "") ? t(new Date(e).getTime()) : (e = (e || "").replace(/(^\s*)|(\s*$)/g, "").replace(/\.\d+/, "").replace(/-/, "/").replace(/-/, "/").replace(/(\d)T(\d)/, "$1 $2").replace(/Z/, " UTC").replace(/([+-]\d\d):?(\d\d)/, " $1$2"), new Date(e))
      },
      o = function (t, e) {
        for (var n = t.toString(); n.length < e;) n = "0" + n;
        return n
      };
    t.exports = function (t, e) {
      if (!t) return "";
      try {
        var n = i(t).getTime(),
          o = (new Date).getTime() - n,
          a = Math.floor(o / 864e5);
        if (0 === a) {
          var s = o % 864e5,
            l = Math.floor(s / 36e5);
          if (0 === l) {
            var d = s % 36e5,
              c = Math.floor(d / 6e4);
            if (0 === c) {
              var u = d % 6e4;
              return Math.round(u / 1e3) + " " + e.t("seconds")
            }
            return c + " " + e.t("minutes")
          }
          return l + " " + e.t("hours")
        }
        return a < 0 ? e.t("now") : a < 8 ? a + " " + e.t("days") : r(t)
      } catch (t) {}
    }
  }, function (t, e, n) {
    var r;
    ! function (i) {
      "use strict";

      function o(t, e) {
        var n = (65535 & t) + (65535 & e);
        return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
      }

      function a(t, e, n, r, i, a) {
        return o(function (t, e) {
          return t << e | t >>> 32 - e
        }(o(o(e, t), o(r, a)), i), n)
      }

      function s(t, e, n, r, i, o, s) {
        return a(e & n | ~e & r, t, e, i, o, s)
      }

      function l(t, e, n, r, i, o, s) {
        return a(e & r | n & ~r, t, e, i, o, s)
      }

      function d(t, e, n, r, i, o, s) {
        return a(e ^ n ^ r, t, e, i, o, s)
      }

      function c(t, e, n, r, i, o, s) {
        return a(n ^ (e | ~r), t, e, i, o, s)
      }

      function u(t, e) {
        t[e >> 5] |= 128 << e % 32, t[14 + (e + 64 >>> 9 << 4)] = e;
        var n, r, i, a, u, p = 1732584193,
          g = -271733879,
          h = -1732584194,
          f = 271733878;
        for (n = 0; n < t.length; n += 16) r = p, i = g, a = h, u = f, p = s(p, g, h, f, t[n], 7, -680876936), f = s(f, p, g, h, t[n + 1], 12, -389564586), h = s(h, f, p, g, t[n + 2], 17, 606105819), g = s(g, h, f, p, t[n + 3], 22, -1044525330), p = s(p, g, h, f, t[n + 4], 7, -176418897), f = s(f, p, g, h, t[n + 5], 12, 1200080426), h = s(h, f, p, g, t[n + 6], 17, -1473231341), g = s(g, h, f, p, t[n + 7], 22, -45705983), p = s(p, g, h, f, t[n + 8], 7, 1770035416), f = s(f, p, g, h, t[n + 9], 12, -1958414417), h = s(h, f, p, g, t[n + 10], 17, -42063), g = s(g, h, f, p, t[n + 11], 22, -1990404162), p = s(p, g, h, f, t[n + 12], 7, 1804603682), f = s(f, p, g, h, t[n + 13], 12, -40341101), h = s(h, f, p, g, t[n + 14], 17, -1502002290), p = l(p, g = s(g, h, f, p, t[n + 15], 22, 1236535329), h, f, t[n + 1], 5, -165796510), f = l(f, p, g, h, t[n + 6], 9, -1069501632), h = l(h, f, p, g, t[n + 11], 14, 643717713), g = l(g, h, f, p, t[n], 20, -373897302), p = l(p, g, h, f, t[n + 5], 5, -701558691), f = l(f, p, g, h, t[n + 10], 9, 38016083), h = l(h, f, p, g, t[n + 15], 14, -660478335), g = l(g, h, f, p, t[n + 4], 20, -405537848), p = l(p, g, h, f, t[n + 9], 5, 568446438), f = l(f, p, g, h, t[n + 14], 9, -1019803690), h = l(h, f, p, g, t[n + 3], 14, -187363961), g = l(g, h, f, p, t[n + 8], 20, 1163531501), p = l(p, g, h, f, t[n + 13], 5, -1444681467), f = l(f, p, g, h, t[n + 2], 9, -51403784), h = l(h, f, p, g, t[n + 7], 14, 1735328473), p = d(p, g = l(g, h, f, p, t[n + 12], 20, -1926607734), h, f, t[n + 5], 4, -378558), f = d(f, p, g, h, t[n + 8], 11, -2022574463), h = d(h, f, p, g, t[n + 11], 16, 1839030562), g = d(g, h, f, p, t[n + 14], 23, -35309556), p = d(p, g, h, f, t[n + 1], 4, -1530992060), f = d(f, p, g, h, t[n + 4], 11, 1272893353), h = d(h, f, p, g, t[n + 7], 16, -155497632), g = d(g, h, f, p, t[n + 10], 23, -1094730640), p = d(p, g, h, f, t[n + 13], 4, 681279174), f = d(f, p, g, h, t[n], 11, -358537222), h = d(h, f, p, g, t[n + 3], 16, -722521979), g = d(g, h, f, p, t[n + 6], 23, 76029189), p = d(p, g, h, f, t[n + 9], 4, -640364487), f = d(f, p, g, h, t[n + 12], 11, -421815835), h = d(h, f, p, g, t[n + 15], 16, 530742520), p = c(p, g = d(g, h, f, p, t[n + 2], 23, -995338651), h, f, t[n], 6, -198630844), f = c(f, p, g, h, t[n + 7], 10, 1126891415), h = c(h, f, p, g, t[n + 14], 15, -1416354905), g = c(g, h, f, p, t[n + 5], 21, -57434055), p = c(p, g, h, f, t[n + 12], 6, 1700485571), f = c(f, p, g, h, t[n + 3], 10, -1894986606), h = c(h, f, p, g, t[n + 10], 15, -1051523), g = c(g, h, f, p, t[n + 1], 21, -2054922799), p = c(p, g, h, f, t[n + 8], 6, 1873313359), f = c(f, p, g, h, t[n + 15], 10, -30611744), h = c(h, f, p, g, t[n + 6], 15, -1560198380), g = c(g, h, f, p, t[n + 13], 21, 1309151649), p = c(p, g, h, f, t[n + 4], 6, -145523070), f = c(f, p, g, h, t[n + 11], 10, -1120210379), h = c(h, f, p, g, t[n + 2], 15, 718787259), g = c(g, h, f, p, t[n + 9], 21, -343485551), p = o(p, r), g = o(g, i), h = o(h, a), f = o(f, u);
        return [p, g, h, f]
      }

      function p(t) {
        var e, n = "",
          r = 32 * t.length;
        for (e = 0; e < r; e += 8) n += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
        return n
      }

      function g(t) {
        var e, n = [];
        for (n[(t.length >> 2) - 1] = void 0, e = 0; e < n.length; e += 1) n[e] = 0;
        var r = 8 * t.length;
        for (e = 0; e < r; e += 8) n[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
        return n
      }

      function h(t) {
        var e, n, r = "0123456789abcdef",
          i = "";
        for (n = 0; n < t.length; n += 1) e = t.charCodeAt(n), i += r.charAt(e >>> 4 & 15) + r.charAt(15 & e);
        return i
      }

      function f(t) {
        return unescape(encodeURIComponent(t))
      }

      function v(t) {
        return function (t) {
          return p(u(g(t), 8 * t.length))
        }(f(t))
      }

      function m(t, e) {
        return function (t, e) {
          var n, r, i = g(t),
            o = [],
            a = [];
          for (o[15] = a[15] = void 0, i.length > 16 && (i = u(i, 8 * t.length)), n = 0; n < 16; n += 1) o[n] = 909522486 ^ i[n], a[n] = 1549556828 ^ i[n];
          return r = u(o.concat(g(e)), 512 + 8 * e.length), p(u(a.concat(r), 640))
        }(f(t), f(e))
      }

      function b(t, e, n) {
        return e ? n ? m(e, t) : function (t, e) {
          return h(m(t, e))
        }(e, t) : n ? v(t) : function (t) {
          return h(v(t))
        }(t)
      }
      void 0 !== (r = function () {
        return b
      }.call(e, n, e, t)) && (t.exports = r)
    }()
  }, function (t, e, n) {
    "use strict";
    e.__esModule = !0;
    e.default = function (t) {
      var e = {},
        n = {
          Trident: (t = t || navigator.userAgent).indexOf("Trident") > -1 || t.indexOf("NET CLR") > -1,
          Presto: t.indexOf("Presto") > -1,
          WebKit: t.indexOf("AppleWebKit") > -1,
          Gecko: t.indexOf("Gecko/") > -1,
          Safari: t.indexOf("Safari") > -1,
          Edge: t.indexOf("Edge") > -1 || t.indexOf("Edg") > -1,
          Chrome: t.indexOf("Chrome") > -1 || t.indexOf("CriOS") > -1,
          IE: t.indexOf("MSIE") > -1 || t.indexOf("Trident") > -1,
          Firefox: t.indexOf("Firefox") > -1 || t.indexOf("FxiOS") > -1,
          "Firefox Focus": t.indexOf("Focus") > -1,
          Chromium: t.indexOf("Chromium") > -1,
          Opera: t.indexOf("Opera") > -1 || t.indexOf("OPR") > -1,
          Vivaldi: t.indexOf("Vivaldi") > -1,
          Yandex: t.indexOf("YaBrowser") > -1,
          Kindle: t.indexOf("Kindle") > -1 || t.indexOf("Silk/") > -1,
          360: t.indexOf("360EE") > -1 || t.indexOf("360SE") > -1,
          UC: t.indexOf("UC") > -1 || t.indexOf(" UBrowser") > -1,
          QQBrowser: t.indexOf("QQBrowser") > -1,
          QQ: t.indexOf("QQ/") > -1,
          Baidu: t.indexOf("Baidu") > -1 || t.indexOf("BIDUBrowser") > -1,
          Maxthon: t.indexOf("Maxthon") > -1,
          Sogou: t.indexOf("MetaSr") > -1 || t.indexOf("Sogou") > -1,
          LBBROWSER: t.indexOf("LBBROWSER") > -1,
          "2345Explorer": t.indexOf("2345Explorer") > -1,
          TheWorld: t.indexOf("TheWorld") > -1,
          XiaoMi: t.indexOf("MiuiBrowser") > -1,
          Quark: t.indexOf("Quark") > -1,
          Qiyu: t.indexOf("Qiyu") > -1,
          Wechat: t.indexOf("MicroMessenger") > -1,
          Taobao: t.indexOf("AliApp(TB") > -1,
          Alipay: t.indexOf("AliApp(AP") > -1,
          Weibo: t.indexOf("Weibo") > -1,
          Douban: t.indexOf("com.douban.frodo") > -1,
          Suning: t.indexOf("SNEBUY-APP") > -1,
          iQiYi: t.indexOf("IqiyiApp") > -1,
          Windows: t.indexOf("Windows") > -1,
          Linux: t.indexOf("Linux") > -1 || t.indexOf("X11") > -1,
          macOS: t.indexOf("Macintosh") > -1,
          Android: t.indexOf("Android") > -1 || t.indexOf("Adr") > -1,
          Ubuntu: t.indexOf("Ubuntu") > -1,
          FreeBSD: t.indexOf("FreeBSD") > -1,
          Debian: t.indexOf("Debian") > -1,
          "Windows Phone": t.indexOf("IEMobile") > -1 || t.indexOf("Windows Phone") > -1,
          BlackBerry: t.indexOf("BlackBerry") > -1 || t.indexOf("RIM") > -1 || t.indexOf("BB10") > -1,
          MeeGo: t.indexOf("MeeGo") > -1,
          Symbian: t.indexOf("Symbian") > -1,
          iOS: t.indexOf("like Mac OS X") > -1,
          "Chrome OS": t.indexOf("CrOS") > -1,
          WebOS: t.indexOf("hpwOS") > -1,
          Mobile: t.indexOf("Mobi") > -1 || t.indexOf("iPh") > -1 || t.indexOf("480") > -1,
          Tablet: t.indexOf("Tablet") > -1 || t.indexOf("Pad") > -1 || t.indexOf("Nexus 7") > -1
        };
      n.Mobile && (n.Mobile = !(t.indexOf("iPad") > -1));
      var r = {
        browser: ["Safari", "Chrome", "Edge", "IE", "Firefox", "Firefox Focus", "Chromium", "Opera", "Vivaldi", "Yandex", "Kindle", "360", "UC", "QQBrowser", "QQ", "Baidu", "Maxthon", "Sogou", "LBBROWSER", "2345Explorer", "TheWorld", "XiaoMi", "Quark", "Qiyu", "Wechat", "Taobao", "Alipay", "Weibo", "Douban", "Suning", "iQiYi"],
        os: ["Windows", "Linux", "Mac OS", "macOS", "Android", "Ubuntu", "FreeBSD", "Debian", "iOS", "Windows Phone", "BlackBerry", "MeeGo", "Symbian", "Chrome OS", "WebOS"]
      };
      for (var i in r)
        if (r.hasOwnProperty(i))
          for (var o = 0, a = r[i].length; o < a; o++) {
            var s = r[i][o];
            n[s] && (e[i] = s)
          }
      var l = {
        Windows: function () {
          var e = t.replace(/^.*Windows NT ([\d.]+).*$/, "$1");
          return {
            6.4: "10",
            6.3: "8.1",
            6.2: "8",
            6.1: "7",
            "6.0": "Vista",
            5.2: "XP",
            5.1: "XP",
            "5.0": "2000"
          } [e] || e
        },
        Android: t.replace(/^.*Android ([\d.]+);.*$/, "$1"),
        iOS: t.replace(/^.*OS ([\d_]+) like.*$/, "$1").replace(/_/g, "."),
        Debian: t.replace(/^.*Debian\/([\d.]+).*$/, "$1"),
        "Windows Phone": t.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, "$2"),
        macOS: t.replace(/^.*Mac OS X ([\d_]+).*$/, "$1").replace(/_/g, "."),
        WebOS: t.replace(/^.*hpwOS\/([\d.]+);.*$/, "$1"),
        BlackBerry: t.replace(/^.*BB([\d.]+);*$/, "$1")
      };
      e.osVersion = "";
      var d = l[e.os];
      d && (e.osVersion = "function" == typeof d ? d() : d == t ? "" : d);
      var c = {
        Safari: t.replace(/^.*Version\/([\d.]+).*$/, "$1"),
        Chrome: t.replace(/^.*Chrome\/([\d.]+).*$/, "$1").replace(/^.*CriOS\/([\d.]+).*$/, "$1"),
        IE: t.replace(/^.*MSIE ([\d.]+).*$/, "$1").replace(/^.*rv:([\d.]+).*$/, "$1"),
        Edge: t.replace(/^.*Edge?\/([\d.]+).*$/, "$1"),
        Firefox: t.replace(/^.*Firefox\/([\d.]+).*$/, "$1").replace(/^.*FxiOS\/([\d.]+).*$/, "$1"),
        "Firefox Focus": t.replace(/^.*Focus\/([\d.]+).*$/, "$1"),
        Chromium: t.replace(/^.*Chromium\/([\d.]+).*$/, "$1"),
        Opera: t.replace(/^.*Opera\/([\d.]+).*$/, "$1").replace(/^.*OPR\/([\d.]+).*$/, "$1"),
        Vivaldi: t.replace(/^.*Vivaldi\/([\d.]+).*$/, "$1"),
        Yandex: t.replace(/^.*YaBrowser\/([\d.]+).*$/, "$1"),
        Kindle: t.replace(/^.*Version\/([\d.]+).*$/, "$1"),
        Maxthon: t.replace(/^.*Maxthon\/([\d.]+).*$/, "$1"),
        QQBrowser: t.replace(/^.*QQBrowser\/([\d.]+).*$/, "$1"),
        QQ: t.replace(/^.*QQ\/([\d.]+).*$/, "$1"),
        Baidu: t.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, "$1"),
        UC: t.replace(/^.*UC?Browser\/([\d.]+).*$/, "$1"),
        Sogou: t.replace(/^.*SE ([\d.X]+).*$/, "$1").replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, "$1"),
        "2345Explorer": t.replace(/^.*2345Explorer\/([\d.]+).*$/, "$1"),
        TheWorld: t.replace(/^.*TheWorld ([\d.]+).*$/, "$1"),
        XiaoMi: t.replace(/^.*MiuiBrowser\/([\d.]+).*$/, "$1"),
        Quark: t.replace(/^.*Quark\/([\d.]+).*$/, "$1"),
        Qiyu: t.replace(/^.*Qiyu\/([\d.]+).*$/, "$1"),
        Wechat: t.replace(/^.*MicroMessenger\/([\d.]+).*$/, "$1"),
        Taobao: t.replace(/^.*AliApp\(TB\/([\d.]+).*$/, "$1"),
        Alipay: t.replace(/^.*AliApp\(AP\/([\d.]+).*$/, "$1"),
        Weibo: t.replace(/^.*weibo__([\d.]+).*$/, "$1"),
        Douban: t.replace(/^.*com.douban.frodo\/([\d.]+).*$/, "$1"),
        Suning: t.replace(/^.*SNEBUY-APP([\d.]+).*$/, "$1"),
        iQiYi: t.replace(/^.*IqiyiVersion\/([\d.]+).*$/, "$1")
      };
      e.version = "";
      var u = c[e.browser];
      return u && (e.version = "function" == typeof u ? u() : u == t ? "" : u), null == e.browser && (e.browser = "Unknow App"), e
    }
  }, function (t, e, n) {
    var r;
    ! function (n, i) {
      i = function (t, e, n) {
        function r(i, o, a) {
          return a = Object.create(r.fn), i && a.push.apply(a, i[e] ? [i] : "" + i === i ? /</.test(i) ? ((o = t.createElement(o)).innerHTML = i, o.children) : o ? (o = r(o)[0]) ? o[n](i) : a : t[n](i) : i), a
        }
        return r.fn = [], r.one = function (t, e) {
          return r(t, e)[0] || null
        }, r
      }(document, "addEventListener", "querySelectorAll");
      void 0 !== (r = function () {
        return i
      }.apply(e, [])) && (t.exports = r)
    }()
  }, function (t, e, n) {
    function r(t) {
      return null == t
    }

    function i(t) {
      (t = function (t) {
        var e = {};
        for (var n in t) e[n] = t[n];
        return e
      }(t || {})).whiteList = t.whiteList || o.whiteList, t.onAttr = t.onAttr || o.onAttr, t.onIgnoreAttr = t.onIgnoreAttr || o.onIgnoreAttr, t.safeAttrValue = t.safeAttrValue || o.safeAttrValue, this.options = t
    }
    var o = n(7),
      a = n(29);
    n(8), i.prototype.process = function (t) {
      if (!(t = (t = t || "").toString())) return "";
      var e = this.options,
        n = e.whiteList,
        i = e.onAttr,
        o = e.onIgnoreAttr,
        s = e.safeAttrValue;
      return a(t, function (t, e, a, l, d) {
        var c = n[a],
          u = !1;
        if (!0 === c ? u = c : "function" == typeof c ? u = c(l) : c instanceof RegExp && (u = c.test(l)), !0 !== u && (u = !1), l = s(a, l)) {
          var p, g = {
            position: e,
            sourcePosition: t,
            source: d,
            isWhite: u
          };
          return u ? r(p = i(a, l, g)) ? a + ":" + l : p : r(p = o(a, l, g)) ? void 0 : p
        }
      })
    }, t.exports = i
  }, function (t, e, n) {
    var r = n(8);
    t.exports = function (t, e) {
      function n() {
        if (!o) {
          var n = r.trim(t.slice(a, s)),
            i = n.indexOf(":");
          if (-1 !== i) {
            var d = r.trim(n.slice(0, i)),
              c = r.trim(n.slice(i + 1));
            if (d) {
              var u = e(a, l.length, d, c, n);
              u && (l += u + "; ")
            }
          }
        }
        a = s + 1
      }
      ";" !== (t = r.trimRight(t))[t.length - 1] && (t += ";");
      for (var i = t.length, o = !1, a = 0, s = 0, l = ""; s < i; s++) {
        var d = t[s];
        if ("/" === d && "*" === t[s + 1]) {
          var c = t.indexOf("*/", s + 2);
          if (-1 === c) break;
          a = (s = c + 1) + 1, o = !1
        } else "(" === d ? o = !0 : ")" === d ? o = !1 : ";" === d ? o || n() : "\n" === d && n()
      }
      return r.trim(l)
    }
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (t) {
      var e = t.Element.prototype;
      "function" != typeof e.matches && (e.matches = e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || function (t) {
        for (var e = this, n = (e.document || e.ownerDocument).querySelectorAll(t), r = 0; n[r] && n[r] !== e;) ++r;
        return Boolean(n[r])
      }), "function" != typeof e.closest && (e.closest = function (t) {
        for (var e = this; e && 1 === e.nodeType;) {
          if (e.matches(t)) return e;
          e = e.parentNode
        }
        return null
      })
    }
  }, function (t, e, n) {
    "use strict";
    var r = n(1),
      i = r("%String%"),
      o = r("%TypeError%");
    t.exports = function (t) {
      if ("symbol" == typeof t) throw new o("Cannot convert a Symbol value to a string");
      return i(t)
    }
  }, function (t, e, n) {
    "use strict";
    var r = n(1)("%TypeError%");
    t.exports = function (t, e) {
      if (null == t) throw new r(e || "Cannot call method on " + t);
      return t
    }
  }, function (t, e, n) {
    "use strict";
    var r = n(1),
      i = n(10),
      o = i(r("String.prototype.indexOf"));
    t.exports = function (t, e) {
      var n = r(t, !!e);
      return "function" == typeof n && o(t, ".prototype.") ? i(n) : n
    }
  }, function (t, e, n) {
    "use strict";
    var r = n(40),
      i = Object.prototype.toString,
      o = Object.prototype.hasOwnProperty,
      a = function (t, e, n) {
        for (var r = 0, i = t.length; r < i; r++) o.call(t, r) && (null == n ? e(t[r], r, t) : e.call(n, t[r], r, t))
      },
      s = function (t, e, n) {
        for (var r in t) o.call(t, r) && (null == n ? e(t[r], r, t) : e.call(n, t[r], r, t))
      };
    t.exports = function (t, e, n) {
      if (!r(e)) throw new TypeError("iterator must be a function");
      var o;
      arguments.length >= 3 && (o = n), "[object Array]" === i.call(t) ? a(t, e, o) : "string" == typeof t ? function (t, e, n) {
        for (var r = 0, i = t.length; r < i; r++) null == n ? e(t.charAt(r), r, t) : e.call(n, t.charAt(r), r, t)
      }(t, e, o) : s(t, e, o)
    }
  }, function (t, e, n) {
    "use strict";
    var r = Array.prototype.slice,
      i = Object.prototype.toString;
    t.exports = function (t) {
      var e = this;
      if ("function" != typeof e || "[object Function]" !== i.call(e)) throw new TypeError("Function.prototype.bind called on incompatible " + e);
      for (var n, o = r.call(arguments, 1), a = Math.max(0, e.length - o.length), s = [], l = 0; l < a; l++) s.push("$" + l);
      if (n = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(function () {
          if (this instanceof n) {
            var i = e.apply(this, o.concat(r.call(arguments)));
            return Object(i) === i ? i : this
          }
          return e.apply(t, o.concat(r.call(arguments)))
        }), e.prototype) {
        var d = function () {};
        d.prototype = e.prototype, n.prototype = new d, d.prototype = null
      }
      return n
    }
  }, function (t, e, n) {
    t.exports = function () {
      "use strict";
      var t = function (t, e) {
          return function (t) {
            var e = t.exports = function () {
              return new RegExp("(?:" + e.line().source + ")|(?:" + e.block().source + ")", "gm")
            };
            e.line = function () {
              return /(?:^|\s)\/\/(.+?)$/gm
            }, e.block = function () {
              return /\/\*([\S\s]*?)\*\//gm
            }
          }(e = {
            exports: {}
          }), e.exports
        }(),
        e = ["23AC69", "91C132", "F19726", "E8552D", "1AAB8E", "E1147F", "2980C1", "1BA1E6", "9FA0A0", "F19726", "E30B20", "E30B20", "A3338B"];
      return function (n, r) {
        void 0 === r && (r = {});
        var i = r.colors;
        void 0 === i && (i = e);
        var o = 0,
          a = {},
          s = new RegExp("(" + /[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/.source + "|" + /</.source + ")|(" + t().source + ")", "gmi");
        return n.replace(s, function (t, e, n) {
          if (n) return function (t) {
            return '<span style="color: slategray">' + t + "</span>"
          }(n);
          if ("<" === e) return "&lt;";
          var r;
          a[e] ? r = a[e] : (r = i[o], a[e] = r);
          var s = '<span style="color: #' + r + '">' + e + "</span>";
          return o = ++o % i.length, s
        })
      }
    }()
  }, function (t, e, n) {
    "use strict";
    (function (e) {
      var r = e.Symbol,
        i = n(38);
      t.exports = function () {
        return "function" == typeof r && "function" == typeof Symbol && "symbol" == typeof r("foo") && "symbol" == typeof Symbol("bar") && i()
      }
    }).call(e, n(14))
  }, function (t, e, n) {
    "use strict";
    t.exports = function () {
      if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
      if ("symbol" == typeof Symbol.iterator) return !0;
      var t = {},
        e = Symbol("test"),
        n = Object(e);
      if ("string" == typeof e) return !1;
      if ("[object Symbol]" !== Object.prototype.toString.call(e)) return !1;
      if ("[object Symbol]" !== Object.prototype.toString.call(n)) return !1;
      for (e in t[e] = 42, t) return !1;
      if ("function" == typeof Object.keys && 0 !== Object.keys(t).length) return !1;
      if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t).length) return !1;
      var r = Object.getOwnPropertySymbols(t);
      if (1 !== r.length || r[0] !== e) return !1;
      if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
      if ("function" == typeof Object.getOwnPropertyDescriptor) {
        var i = Object.getOwnPropertyDescriptor(t, e);
        if (42 !== i.value || !0 !== i.enumerable) return !1
      }
      return !0
    }
  }, function (t, e, n) {
    "use strict";
    var r = n(3);
    t.exports = r.call(Function.call, Object.prototype.hasOwnProperty)
  }, function (t, e, n) {
    "use strict";
    var r = Function.prototype.toString,
      i = /^\s*class\b/,
      o = function (t) {
        try {
          var e = r.call(t);
          return i.test(e)
        } catch (t) {
          return !1
        }
      },
      a = Object.prototype.toString,
      s = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
    t.exports = function (t) {
      if (!t) return !1;
      if ("function" != typeof t && "object" != typeof t) return !1;
      if ("function" == typeof t && !t.prototype) return !0;
      if (s) return function (t) {
        try {
          return !o(t) && (r.call(t), !0)
        } catch (t) {
          return !1
        }
      }(t);
      if (o(t)) return !1;
      var e = a.call(t);
      return "[object Function]" === e || "[object GeneratorFunction]" === e
    }
  }, function (t, e, n) {
    (function (e) {
      ! function (e) {
        "use strict";

        function n(t) {
          this.tokens = [], this.tokens.links = {}, this.options = t || h.defaults, this.rules = f.normal, this.options.pedantic ? this.rules = f.pedantic : this.options.gfm && (this.options.tables ? this.rules = f.tables : this.rules = f.gfm)
        }

        function r(t, e) {
          if (this.options = e || h.defaults, this.links = t, this.rules = v.normal, this.renderer = this.options.renderer || new i, this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");
          this.options.pedantic ? this.rules = v.pedantic : this.options.gfm && (this.options.breaks ? this.rules = v.breaks : this.rules = v.gfm)
        }

        function i(t) {
          this.options = t || h.defaults
        }

        function o() {}

        function a(t) {
          this.tokens = [], this.token = null, this.options = t || h.defaults, this.options.renderer = this.options.renderer || new i, this.renderer = this.options.renderer, this.renderer.options = this.options
        }

        function s(t, e) {
          return t.replace(e ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
        }

        function l(t) {
          return t.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, function (t, e) {
            return "colon" === (e = e.toLowerCase()) ? ":" : "#" === e.charAt(0) ? "x" === e.charAt(1) ? String.fromCharCode(parseInt(e.substring(2), 16)) : String.fromCharCode(+e.substring(1)) : ""
          })
        }

        function d(t, e) {
          return t = t.source || t, e = e || "", {
            replace: function (e, n) {
              return n = (n = n.source || n).replace(/(^|[^\[])\^/g, "$1"), t = t.replace(e, n), this
            },
            getRegex: function () {
              return new RegExp(t, e)
            }
          }
        }

        function c(t, e) {
          return m[" " + t] || (/^[^:]+:\/*[^\/]*$/.test(t) ? m[" " + t] = t + "/" : m[" " + t] = t.replace(/[^\/]*$/, "")), t = m[" " + t], "//" === e.slice(0, 2) ? t.replace(/:[\s\S]*/, ":") + e : "/" === e.charAt(0) ? t.replace(/(:\/*[^\/]*)[\s\S]*/, "$1") + e : t + e
        }

        function u() {}

        function p(t) {
          for (var e, n, r = 1; r < arguments.length; r++)
            for (n in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return t
        }

        function g(t, e) {
          var n = t.replace(/([^\\])\|/g, "$1 |").split(/ +\| */),
            r = 0;
          if (n.length > e) n.splice(e);
          else
            for (; n.length < e;) n.push("");
          for (; r < n.length; r++) n[r] = n[r].replace(/\\\|/g, "|");
          return n
        }

        function h(t, e, r) {
          if (null == t) throw new Error("marked(): input parameter is undefined or null");
          if ("string" != typeof t) throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected");
          if (r || "function" == typeof e) {
            r || (r = e, e = null);
            var i, o, l = (e = p({}, h.defaults, e || {})).highlight,
              d = 0;
            try {
              i = n.lex(t, e)
            } catch (t) {
              return r(t)
            }
            o = i.length;
            var c = function (t) {
              if (t) return e.highlight = l, r(t);
              var n;
              try {
                n = a.parse(i, e)
              } catch (e) {
                t = e
              }
              return e.highlight = l, t ? r(t) : r(null, n)
            };
            if (!l || l.length < 3) return c();
            if (delete e.highlight, !o) return c();
            for (; d < i.length; d++) ! function (t) {
              "code" !== t.type ? --o || c() : l(t.text, t.lang, function (e, n) {
                return e ? c(e) : null == n || n === t.text ? --o || c() : (t.text = n, t.escaped = !0, void(--o || c()))
              })
            }(i[d])
          } else try {
            return e && (e = p({}, h.defaults, e)), a.parse(n.lex(t, e), e)
          } catch (t) {
            if (t.message += "\nPlease report this to https://github.com/markedjs/marked.", (e || h.defaults).silent) return "<p>An error occurred:</p><pre>" + s(t.message + "", !0) + "</pre>";
            throw t
          }
        }
        var f = {
          newline: /^\n+/,
          code: /^( {4}[^\n]+\n*)+/,
          fences: u,
          hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
          heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
          nptable: u,
          blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
          list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
          html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$))",
          def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
          table: u,
          lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
          paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,
          text: /^[^\n]+/,
          _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
          _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
        };
        f.def = d(f.def).replace("label", f._label).replace("title", f._title).getRegex(), f.bullet = /(?:[*+-]|\d+\.)/, f.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, f.item = d(f.item, "gm").replace(/bull/g, f.bullet).getRegex(), f.list = d(f.list).replace(/bull/g, f.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + f.def.source + ")").getRegex(), f._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", f._comment = /<!--(?!-?>)[\s\S]*?-->/, f.html = d(f.html, "i").replace("comment", f._comment).replace("tag", f._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), f.paragraph = d(f.paragraph).replace("hr", f.hr).replace("heading", f.heading).replace("lheading", f.lheading).replace("tag", f._tag).getRegex(), f.blockquote = d(f.blockquote).replace("paragraph", f.paragraph).getRegex(), f.normal = p({}, f), f.gfm = p({}, f.normal, {
          fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,
          paragraph: /^/,
          heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
        }), f.gfm.paragraph = d(f.paragraph).replace("(?!", "(?!" + f.gfm.fences.source.replace("\\1", "\\2") + "|" + f.list.source.replace("\\1", "\\3") + "|").getRegex(), f.tables = p({}, f.gfm, {
          nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
          table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
        }), f.pedantic = p({}, f.normal, {
          html: d("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", f._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
          def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/
        }), n.rules = f, n.lex = function (t, e) {
          return new n(e).lex(t)
        }, n.prototype.lex = function (t) {
          return t = t.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(t, !0)
        }, n.prototype.token = function (t, e) {
          t = t.replace(/^ +$/gm, "");
          for (var n, r, i, o, a, s, l, d, c, u, p, h, v; t;)
            if ((i = this.rules.newline.exec(t)) && (t = t.substring(i[0].length), i[0].length > 1 && this.tokens.push({
                type: "space"
              })), i = this.rules.code.exec(t)) t = t.substring(i[0].length), i = i[0].replace(/^ {4}/gm, ""), this.tokens.push({
              type: "code",
              text: this.options.pedantic ? i : i.replace(/\n+$/, "")
            });
            else if (i = this.rules.fences.exec(t)) t = t.substring(i[0].length), this.tokens.push({
            type: "code",
            lang: i[2],
            text: i[3] || ""
          });
          else if (i = this.rules.heading.exec(t)) t = t.substring(i[0].length), this.tokens.push({
            type: "heading",
            depth: i[1].length,
            text: i[2]
          });
          else if (e && (i = this.rules.nptable.exec(t)) && (s = {
              type: "table",
              header: g(i[1].replace(/^ *| *\| *$/g, "")),
              align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
              cells: i[3] ? i[3].replace(/\n$/, "").split("\n") : []
            }).header.length === s.align.length) {
            for (t = t.substring(i[0].length), d = 0; d < s.align.length; d++) /^ *-+: *$/.test(s.align[d]) ? s.align[d] = "right" : /^ *:-+: *$/.test(s.align[d]) ? s.align[d] = "center" : /^ *:-+ *$/.test(s.align[d]) ? s.align[d] = "left" : s.align[d] = null;
            for (d = 0; d < s.cells.length; d++) s.cells[d] = g(s.cells[d], s.header.length);
            this.tokens.push(s)
          } else if (i = this.rules.hr.exec(t)) t = t.substring(i[0].length), this.tokens.push({
            type: "hr"
          });
          else if (i = this.rules.blockquote.exec(t)) t = t.substring(i[0].length), this.tokens.push({
            type: "blockquote_start"
          }), i = i[0].replace(/^ *> ?/gm, ""), this.token(i, e), this.tokens.push({
            type: "blockquote_end"
          });
          else if (i = this.rules.list.exec(t)) {
            for (t = t.substring(i[0].length), p = (o = i[2]).length > 1, this.tokens.push({
                type: "list_start",
                ordered: p,
                start: p ? +o : ""
              }), n = !1, u = (i = i[0].match(this.rules.item)).length, d = 0; d < u; d++) l = (s = i[d]).length, ~(s = s.replace(/^ *([*+-]|\d+\.) +/, "")).indexOf("\n ") && (l -= s.length, s = this.options.pedantic ? s.replace(/^ {1,4}/gm, "") : s.replace(new RegExp("^ {1," + l + "}", "gm"), "")), this.options.smartLists && d !== u - 1 && (o === (a = f.bullet.exec(i[d + 1])[0]) || o.length > 1 && a.length > 1 || (t = i.slice(d + 1).join("\n") + t, d = u - 1)), r = n || /\n\n(?!\s*$)/.test(s), d !== u - 1 && (n = "\n" === s.charAt(s.length - 1), r || (r = n)), v = void 0, (h = /^\[[ xX]\] /.test(s)) && (v = " " !== s[1], s = s.replace(/^\[[ xX]\] +/, "")), this.tokens.push({
              type: r ? "loose_item_start" : "list_item_start",
              task: h,
              checked: v
            }), this.token(s, !1), this.tokens.push({
              type: "list_item_end"
            });
            this.tokens.push({
              type: "list_end"
            })
          } else if (i = this.rules.html.exec(t)) t = t.substring(i[0].length), this.tokens.push({
            type: this.options.sanitize ? "paragraph" : "html",
            pre: !this.options.sanitizer && ("pre" === i[1] || "script" === i[1] || "style" === i[1]),
            text: i[0]
          });
          else if (e && (i = this.rules.def.exec(t))) t = t.substring(i[0].length), i[3] && (i[3] = i[3].substring(1, i[3].length - 1)), c = i[1].toLowerCase().replace(/\s+/g, " "), this.tokens.links[c] || (this.tokens.links[c] = {
            href: i[2],
            title: i[3]
          });
          else if (e && (i = this.rules.table.exec(t)) && (s = {
              type: "table",
              header: g(i[1].replace(/^ *| *\| *$/g, "")),
              align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
              cells: i[3] ? i[3].replace(/(?: *\| *)?\n$/, "").split("\n") : []
            }).header.length === s.align.length) {
            for (t = t.substring(i[0].length), d = 0; d < s.align.length; d++) /^ *-+: *$/.test(s.align[d]) ? s.align[d] = "right" : /^ *:-+: *$/.test(s.align[d]) ? s.align[d] = "center" : /^ *:-+ *$/.test(s.align[d]) ? s.align[d] = "left" : s.align[d] = null;
            for (d = 0; d < s.cells.length; d++) s.cells[d] = g(s.cells[d].replace(/^ *\| *| *\| *$/g, ""), s.header.length);
            this.tokens.push(s)
          } else if (i = this.rules.lheading.exec(t)) t = t.substring(i[0].length), this.tokens.push({
            type: "heading",
            depth: "=" === i[2] ? 1 : 2,
            text: i[1]
          });
          else if (e && (i = this.rules.paragraph.exec(t))) t = t.substring(i[0].length), this.tokens.push({
            type: "paragraph",
            text: "\n" === i[1].charAt(i[1].length - 1) ? i[1].slice(0, -1) : i[1]
          });
          else if (i = this.rules.text.exec(t)) t = t.substring(i[0].length), this.tokens.push({
            type: "text",
            text: i[0]
          });
          else if (t) throw new Error("Infinite loop on byte: " + t.charCodeAt(0));
          return this.tokens
        };
        var v = {
          escape: /^\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/,
          autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
          url: u,
          tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
          link: /^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,
          reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
          nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
          strong: /^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)|^__([^\s])__(?!_)|^\*\*([^\s])\*\*(?!\*)/,
          em: /^_([^\s][\s\S]*?[^\s_])_(?!_)|^_([^\s_][\s\S]*?[^\s])_(?!_)|^\*([^\s][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*][\s\S]*?[^\s])\*(?!\*)|^_([^\s_])_(?!_)|^\*([^\s*])\*(?!\*)/,
          code: /^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,
          br: /^ {2,}\n(?!\s*$)/,
          del: u,
          text: /^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/,
          _escapes: /\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/g,
          _scheme: /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,
          _email: /[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/
        };
        v.autolink = d(v.autolink).replace("scheme", v._scheme).replace("email", v._email).getRegex(), v._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, v.tag = d(v.tag).replace("comment", f._comment).replace("attribute", v._attribute).getRegex(), v._label = /(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/, v._href = /\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f()\\]*\)|[^\s\x00-\x1f()\\])*?)/, v._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, v.link = d(v.link).replace("label", v._label).replace("href", v._href).replace("title", v._title).getRegex(), v.reflink = d(v.reflink).replace("label", v._label).getRegex(), v.normal = p({}, v), v.pedantic = p({}, v.normal, {
          strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
          em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
          link: d(/^!?\[(label)\]\((.*?)\)/).replace("label", v._label).getRegex(),
          reflink: d(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", v._label).getRegex()
        }), v.gfm = p({}, v.normal, {
          escape: d(v.escape).replace("])", "~|])").getRegex(),
          url: d(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("email", v._email).getRegex(),
          _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
          del: /^~~(?=\S)([\s\S]*?\S)~~/,
          text: d(v.text).replace("]|", "~]|").replace("|", "|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|").getRegex()
        }), v.breaks = p({}, v.gfm, {
          br: d(v.br).replace("{2,}", "*").getRegex(),
          text: d(v.gfm.text).replace("{2,}", "*").getRegex()
        }), r.rules = v, r.output = function (t, e, n) {
          return new r(e, n).output(t)
        }, r.prototype.output = function (t) {
          for (var e, n, i, o, a, l = ""; t;)
            if (a = this.rules.escape.exec(t)) t = t.substring(a[0].length), l += a[1];
            else if (a = this.rules.autolink.exec(t)) t = t.substring(a[0].length), "@" === a[2] ? i = "mailto:" + (n = s(this.mangle(a[1]))) : i = n = s(a[1]), l += this.renderer.link(i, null, n);
          else if (this.inLink || !(a = this.rules.url.exec(t))) {
            if (a = this.rules.tag.exec(t)) !this.inLink && /^<a /i.test(a[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(a[0]) && (this.inLink = !1), t = t.substring(a[0].length), l += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(a[0]) : s(a[0]) : a[0];
            else if (a = this.rules.link.exec(t)) t = t.substring(a[0].length), this.inLink = !0, i = a[2], this.options.pedantic ? (e = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i)) ? (i = e[1], o = e[3]) : o = "" : o = a[3] ? a[3].slice(1, -1) : "", i = i.trim().replace(/^<([\s\S]*)>$/, "$1"), l += this.outputLink(a, {
              href: r.escapes(i),
              title: r.escapes(o)
            }), this.inLink = !1;
            else if ((a = this.rules.reflink.exec(t)) || (a = this.rules.nolink.exec(t))) {
              if (t = t.substring(a[0].length), e = (a[2] || a[1]).replace(/\s+/g, " "), !(e = this.links[e.toLowerCase()]) || !e.href) {
                l += a[0].charAt(0), t = a[0].substring(1) + t;
                continue
              }
              this.inLink = !0, l += this.outputLink(a, e), this.inLink = !1
            } else if (a = this.rules.strong.exec(t)) t = t.substring(a[0].length), l += this.renderer.strong(this.output(a[4] || a[3] || a[2] || a[1]));
            else if (a = this.rules.em.exec(t)) t = t.substring(a[0].length), l += this.renderer.em(this.output(a[6] || a[5] || a[4] || a[3] || a[2] || a[1]));
            else if (a = this.rules.code.exec(t)) t = t.substring(a[0].length), l += this.renderer.codespan(s(a[2].trim(), !0));
            else if (a = this.rules.br.exec(t)) t = t.substring(a[0].length), l += this.renderer.br();
            else if (a = this.rules.del.exec(t)) t = t.substring(a[0].length), l += this.renderer.del(this.output(a[1]));
            else if (a = this.rules.text.exec(t)) t = t.substring(a[0].length), l += this.renderer.text(s(this.smartypants(a[0])));
            else if (t) throw new Error("Infinite loop on byte: " + t.charCodeAt(0))
          } else a[0] = this.rules._backpedal.exec(a[0])[0], t = t.substring(a[0].length), "@" === a[2] ? i = "mailto:" + (n = s(a[0])) : (n = s(a[0]), i = "www." === a[1] ? "http://" + n : n), l += this.renderer.link(i, null, n);
          return l
        }, r.escapes = function (t) {
          return t ? t.replace(r.rules._escapes, "$1") : t
        }, r.prototype.outputLink = function (t, e) {
          var n = e.href,
            r = e.title ? s(e.title) : null;
          return "!" !== t[0].charAt(0) ? this.renderer.link(n, r, this.output(t[1])) : this.renderer.image(n, r, s(t[1]))
        }, r.prototype.smartypants = function (t) {
          return this.options.smartypants ? t.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014\/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…") : t
        }, r.prototype.mangle = function (t) {
          if (!this.options.mangle) return t;
          for (var e, n = "", r = t.length, i = 0; i < r; i++) e = t.charCodeAt(i), Math.random() > .5 && (e = "x" + e.toString(16)), n += "&#" + e + ";";
          return n
        }, i.prototype.code = function (t, e, n) {
          if (this.options.highlight) {
            var r = this.options.highlight(t, e);
            null != r && r !== t && (n = !0, t = r)
          }
          return e ? '<pre><code class="' + this.options.langPrefix + s(e, !0) + '">' + (n ? t : s(t, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? t : s(t, !0)) + "</code></pre>"
        }, i.prototype.blockquote = function (t) {
          return "<blockquote>\n" + t + "</blockquote>\n"
        }, i.prototype.html = function (t) {
          return t
        }, i.prototype.heading = function (t, e, n) {
          return this.options.headerIds ? "<h" + e + ' id="' + this.options.headerPrefix + n.toLowerCase().replace(/[^\w]+/g, "-") + '">' + t + "</h" + e + ">\n" : "<h" + e + ">" + t + "</h" + e + ">\n"
        }, i.prototype.hr = function () {
          return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
        }, i.prototype.list = function (t, e, n) {
          var r = e ? "ol" : "ul";
          return "<" + r + (e && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + t + "</" + r + ">\n"
        }, i.prototype.listitem = function (t) {
          return "<li>" + t + "</li>\n"
        }, i.prototype.checkbox = function (t) {
          return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> "
        }, i.prototype.paragraph = function (t) {
          return "<p>" + t + "</p>\n"
        }, i.prototype.table = function (t, e) {
          return e && (e = "<tbody>" + e + "</tbody>"), "<table>\n<thead>\n" + t + "</thead>\n" + e + "</table>\n"
        }, i.prototype.tablerow = function (t) {
          return "<tr>\n" + t + "</tr>\n"
        }, i.prototype.tablecell = function (t, e) {
          var n = e.header ? "th" : "td";
          return (e.align ? "<" + n + ' align="' + e.align + '">' : "<" + n + ">") + t + "</" + n + ">\n"
        }, i.prototype.strong = function (t) {
          return "<strong>" + t + "</strong>"
        }, i.prototype.em = function (t) {
          return "<em>" + t + "</em>"
        }, i.prototype.codespan = function (t) {
          return "<code>" + t + "</code>"
        }, i.prototype.br = function () {
          return this.options.xhtml ? "<br/>" : "<br>"
        }, i.prototype.del = function (t) {
          return "<del>" + t + "</del>"
        }, i.prototype.link = function (t, e, n) {
          if (this.options.sanitize) {
            try {
              var r = decodeURIComponent(l(t)).replace(/[^\w:]/g, "").toLowerCase()
            } catch (t) {
              return n
            }
            if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:") || 0 === r.indexOf("data:")) return n
          }
          this.options.baseUrl && !b.test(t) && (t = c(this.options.baseUrl, t));
          try {
            t = encodeURI(t).replace(/%25/g, "%")
          } catch (t) {
            return n
          }
          var i = '<a href="' + s(t) + '"';
          return e && (i += ' title="' + e + '"'), i + ">" + n + "</a>"
        }, i.prototype.image = function (t, e, n) {
          this.options.baseUrl && !b.test(t) && (t = c(this.options.baseUrl, t));
          var r = '<img src="' + t + '" alt="' + n + '"';
          return e && (r += ' title="' + e + '"'), r + (this.options.xhtml ? "/>" : ">")
        }, i.prototype.text = function (t) {
          return t
        }, o.prototype.strong = o.prototype.em = o.prototype.codespan = o.prototype.del = o.prototype.text = function (t) {
          return t
        }, o.prototype.link = o.prototype.image = function (t, e, n) {
          return "" + n
        }, o.prototype.br = function () {
          return ""
        }, a.parse = function (t, e) {
          return new a(e).parse(t)
        }, a.prototype.parse = function (t) {
          this.inline = new r(t.links, this.options), this.inlineText = new r(t.links, p({}, this.options, {
            renderer: new o
          })), this.tokens = t.reverse();
          for (var e = ""; this.next();) e += this.tok();
          return e
        }, a.prototype.next = function () {
          return this.token = this.tokens.pop()
        }, a.prototype.peek = function () {
          return this.tokens[this.tokens.length - 1] || 0
        }, a.prototype.parseText = function () {
          for (var t = this.token.text;
            "text" === this.peek().type;) t += "\n" + this.next().text;
          return this.inline.output(t)
        }, a.prototype.tok = function () {
          switch (this.token.type) {
            case "space":
              return "";
            case "hr":
              return this.renderer.hr();
            case "heading":
              return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, l(this.inlineText.output(this.token.text)));
            case "code":
              return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
            case "table":
              var t, e, n, r, i = "",
                o = "";
              for (n = "", t = 0; t < this.token.header.length; t++) n += this.renderer.tablecell(this.inline.output(this.token.header[t]), {
                header: !0,
                align: this.token.align[t]
              });
              for (i += this.renderer.tablerow(n), t = 0; t < this.token.cells.length; t++) {
                for (e = this.token.cells[t], n = "", r = 0; r < e.length; r++) n += this.renderer.tablecell(this.inline.output(e[r]), {
                  header: !1,
                  align: this.token.align[r]
                });
                o += this.renderer.tablerow(n)
              }
              return this.renderer.table(i, o);
            case "blockquote_start":
              for (o = "";
                "blockquote_end" !== this.next().type;) o += this.tok();
              return this.renderer.blockquote(o);
            case "list_start":
              o = "";
              for (var a = this.token.ordered, s = this.token.start;
                "list_end" !== this.next().type;) o += this.tok();
              return this.renderer.list(o, a, s);
            case "list_item_start":
              for (o = "", this.token.task && (o += this.renderer.checkbox(this.token.checked));
                "list_item_end" !== this.next().type;) o += "text" === this.token.type ? this.parseText() : this.tok();
              return this.renderer.listitem(o);
            case "loose_item_start":
              for (o = "";
                "list_item_end" !== this.next().type;) o += this.tok();
              return this.renderer.listitem(o);
            case "html":
              return this.renderer.html(this.token.text);
            case "paragraph":
              return this.renderer.paragraph(this.inline.output(this.token.text));
            case "text":
              return this.renderer.paragraph(this.parseText())
          }
        };
        var m = {},
          b = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
        u.exec = u, h.options = h.setOptions = function (t) {
          return p(h.defaults, t), h
        }, h.getDefaults = function () {
          return {
            baseUrl: null,
            breaks: !1,
            gfm: !0,
            headerIds: !0,
            headerPrefix: "",
            highlight: null,
            langPrefix: "language-",
            mangle: !0,
            pedantic: !1,
            renderer: new i,
            sanitize: !1,
            sanitizer: null,
            silent: !1,
            smartLists: !1,
            smartypants: !1,
            tables: !0,
            xhtml: !1
          }
        }, h.defaults = h.getDefaults(), h.Parser = a, h.parser = a.parse, h.Renderer = i, h.TextRenderer = o, h.Lexer = n, h.lexer = n.lex, h.InlineLexer = r, h.inlineLexer = r.output, h.parse = h, t.exports = h
      }(this || "undefined" != typeof window && window)
    }).call(e, n(14))
  }, function (t, e, n) {
    "use strict";

    function r(t, e) {
      var n = function (t) {
        var e = {};
        return l(t, function (t, n) {
          l(t, function (t) {
            e[t] = n
          })
        }), e
      }(t.pluralTypeToLanguages);
      return n[e] || n[h.call(e, /-/, 1)[0]] || n.en
    }

    function i(t, e, n) {
      return t.pluralTypes[r(t, e)](n)
    }

    function o(t) {
      return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function a(t, e, n, r, o) {
      if ("string" != typeof t) throw new TypeError("Polyglot.transformPhrase expects argument #1 to be string");
      if (null == e) return t;
      var a = t,
        s = r || b,
        l = o || m,
        d = "number" == typeof e ? {
          smart_count: e
        } : e;
      if (null != d.smart_count && a) {
        var p = h.call(a, f);
        a = u(p[i(l, n || "en", d.smart_count)] || p[0])
      }
      return g.call(a, s, function (t, e) {
        return c(d, e) && null != d[e] ? d[e] : t
      })
    }

    function s(t) {
      var e = t || {};
      this.phrases = {}, this.extend(e.phrases || {}), this.currentLocale = e.locale || "en";
      var n = e.allowMissing ? a : null;
      this.onMissingKey = "function" == typeof e.onMissingKey ? e.onMissingKey : n, this.warn = e.warn || p, this.tokenRegex = function (t) {
        var e = t && t.prefix || "%{",
          n = t && t.suffix || "}";
        if (e === f || n === f) throw new RangeError('"' + f + '" token is reserved for pluralization');
        return new RegExp(o(e) + "(.*?)" + o(n), "g")
      }(e.interpolation), this.pluralRules = e.pluralRules || m
    }
    var l = n(34),
      d = n(50),
      c = n(39),
      u = n(48),
      p = function (t) {
        d(!1, t)
      },
      g = String.prototype.replace,
      h = String.prototype.split,
      f = "||||",
      v = function (t) {
        var e = t % 100,
          n = e % 10;
        return 11 !== e && 1 === n ? 0 : 2 <= n && n <= 4 && !(e >= 12 && e <= 14) ? 1 : 2
      },
      m = {
        pluralTypes: {
          arabic: function (t) {
            if (t < 3) return t;
            var e = t % 100;
            return e >= 3 && e <= 10 ? 3 : e >= 11 ? 4 : 5
          },
          bosnian_serbian: v,
          chinese: function () {
            return 0
          },
          croatian: v,
          french: function (t) {
            return t > 1 ? 1 : 0
          },
          german: function (t) {
            return 1 !== t ? 1 : 0
          },
          russian: v,
          lithuanian: function (t) {
            return t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && t % 10 <= 9 && (t % 100 < 11 || t % 100 > 19) ? 1 : 2
          },
          czech: function (t) {
            return 1 === t ? 0 : t >= 2 && t <= 4 ? 1 : 2
          },
          polish: function (t) {
            if (1 === t) return 0;
            var e = t % 10;
            return 2 <= e && e <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2
          },
          icelandic: function (t) {
            return t % 10 != 1 || t % 100 == 11 ? 1 : 0
          },
          slovenian: function (t) {
            var e = t % 100;
            return 1 === e ? 0 : 2 === e ? 1 : 3 === e || 4 === e ? 2 : 3
          }
        },
        pluralTypeToLanguages: {
          arabic: ["ar"],
          bosnian_serbian: ["bs-Latn-BA", "bs-Cyrl-BA", "srl-RS", "sr-RS"],
          chinese: ["id", "id-ID", "ja", "ko", "ko-KR", "lo", "ms", "th", "th-TH", "zh"],
          croatian: ["hr", "hr-HR"],
          german: ["fa", "da", "de", "en", "es", "fi", "el", "he", "hi-IN", "hu", "hu-HU", "it", "nl", "no", "pt", "sv", "tr"],
          french: ["fr", "tl", "pt-br"],
          russian: ["ru", "ru-RU"],
          lithuanian: ["lt"],
          czech: ["cs", "cs-CZ", "sk"],
          polish: ["pl"],
          icelandic: ["is"],
          slovenian: ["sl-SL"]
        }
      },
      b = /%\{(.*?)\}/g;
    s.prototype.locale = function (t) {
      return t && (this.currentLocale = t), this.currentLocale
    }, s.prototype.extend = function (t, e) {
      l(t, function (t, n) {
        var r = e ? e + "." + n : n;
        "object" == typeof t ? this.extend(t, r) : this.phrases[r] = t
      }, this)
    }, s.prototype.unset = function (t, e) {
      "string" == typeof t ? delete this.phrases[t] : l(t, function (t, n) {
        var r = e ? e + "." + n : n;
        "object" == typeof t ? this.unset(t, r) : delete this.phrases[r]
      }, this)
    }, s.prototype.clear = function () {
      this.phrases = {}
    }, s.prototype.replace = function (t) {
      this.clear(), this.extend(t)
    }, s.prototype.t = function (t, e) {
      var n, r, i = null == e ? {} : e;
      if ("string" == typeof this.phrases[t]) n = this.phrases[t];
      else if ("string" == typeof i._) n = i._;
      else if (this.onMissingKey) {
        r = (0, this.onMissingKey)(t, i, this.currentLocale, this.tokenRegex, this.pluralRules)
      } else this.warn('Missing translation for key: "' + t + '"'), r = t;
      return "string" == typeof n && (r = a(n, i, this.currentLocale, this.tokenRegex, this.pluralRules)), r
    }, s.prototype.has = function (t) {
      return c(this.phrases, t)
    }, s.transformPhrase = function (t, e, n) {
      return a(t, e, n)
    }, t.exports = s
  }, function (t, e, n) {
    "use strict";
    var r = Object.getOwnPropertySymbols,
      i = Object.prototype.hasOwnProperty,
      o = Object.prototype.propertyIsEnumerable;
    t.exports = function () {
      try {
        if (!Object.assign) return !1;
        var t = new String("abc");
        if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
        for (var e = {}, n = 0; n < 10; n++) e["_" + String.fromCharCode(n)] = n;
        if ("0123456789" !== Object.getOwnPropertyNames(e).map(function (t) {
            return e[t]
          }).join("")) return !1;
        var r = {};
        return "abcdefghijklmnopqrst".split("").forEach(function (t) {
          r[t] = t
        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
      } catch (t) {
        return !1
      }
    }() ? Object.assign : function (t, e) {
      for (var n, a, s = function (t) {
          if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
          return Object(t)
        }(t), l = 1; l < arguments.length; l++) {
        for (var d in n = Object(arguments[l])) i.call(n, d) && (s[d] = n[d]);
        if (r) {
          a = r(n);
          for (var c = 0; c < a.length; c++) o.call(n, a[c]) && (s[a[c]] = n[a[c]])
        }
      }
      return s
    }
  }, function (t, e, n) {
    "use strict";
    var r;
    if (!Object.keys) {
      var i = Object.prototype.hasOwnProperty,
        o = Object.prototype.toString,
        a = n(11),
        s = Object.prototype.propertyIsEnumerable,
        l = !s.call({
          toString: null
        }, "toString"),
        d = s.call(function () {}, "prototype"),
        c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
        u = function (t) {
          var e = t.constructor;
          return e && e.prototype === t
        },
        p = {
          $applicationCache: !0,
          $console: !0,
          $external: !0,
          $frame: !0,
          $frameElement: !0,
          $frames: !0,
          $innerHeight: !0,
          $innerWidth: !0,
          $onmozfullscreenchange: !0,
          $onmozfullscreenerror: !0,
          $outerHeight: !0,
          $outerWidth: !0,
          $pageXOffset: !0,
          $pageYOffset: !0,
          $parent: !0,
          $scrollLeft: !0,
          $scrollTop: !0,
          $scrollX: !0,
          $scrollY: !0,
          $self: !0,
          $webkitIndexedDB: !0,
          $webkitStorageInfo: !0,
          $window: !0
        },
        g = function () {
          if ("undefined" == typeof window) return !1;
          for (var t in window) try {
            if (!p["$" + t] && i.call(window, t) && null !== window[t] && "object" == typeof window[t]) try {
              u(window[t])
            } catch (t) {
              return !0
            }
          } catch (t) {
            return !0
          }
          return !1
        }(),
        h = function (t) {
          if ("undefined" == typeof window || !g) return u(t);
          try {
            return u(t)
          } catch (t) {
            return !1
          }
        };
      r = function (t) {
        var e = null !== t && "object" == typeof t,
          n = "[object Function]" === o.call(t),
          r = a(t),
          s = e && "[object String]" === o.call(t),
          u = [];
        if (!e && !n && !r) throw new TypeError("Object.keys called on a non-object");
        var p = d && n;
        if (s && t.length > 0 && !i.call(t, 0))
          for (var g = 0; g < t.length; ++g) u.push(String(g));
        if (r && t.length > 0)
          for (var f = 0; f < t.length; ++f) u.push(String(f));
        else
          for (var v in t) p && "prototype" === v || !i.call(t, v) || u.push(String(v));
        if (l)
          for (var m = h(t), b = 0; b < c.length; ++b) m && "constructor" === c[b] || !i.call(t, c[b]) || u.push(c[b]);
        return u
      }
    }
    t.exports = r
  }, function (t, e, n) {
    "use strict";
    var r = Array.prototype.slice,
      i = n(11),
      o = Object.keys,
      a = o ? function (t) {
        return o(t)
      } : n(44),
      s = Object.keys;
    a.shim = function () {
      return Object.keys ? function () {
        var t = Object.keys(arguments);
        return t && t.length === arguments.length
      }(1, 2) || (Object.keys = function (t) {
        return s(i(t) ? r.call(t) : t)
      }) : Object.keys = a, Object.keys || a
    }, t.exports = a
  }, function (t, e) {
    function n() {
      throw new Error("setTimeout has not been defined")
    }

    function r() {
      throw new Error("clearTimeout has not been defined")
    }

    function i(t) {
      if (d === setTimeout) return setTimeout(t, 0);
      if ((d === n || !d) && setTimeout) return d = setTimeout, setTimeout(t, 0);
      try {
        return d(t, 0)
      } catch (e) {
        try {
          return d.call(null, t, 0)
        } catch (e) {
          return d.call(this, t, 0)
        }
      }
    }

    function o() {
      h && p && (h = !1, p.length ? g = p.concat(g) : f = -1, g.length && a())
    }

    function a() {
      if (!h) {
        var t = i(o);
        h = !0;
        for (var e = g.length; e;) {
          for (p = g, g = []; ++f < e;) p && p[f].run();
          f = -1, e = g.length
        }
        p = null, h = !1,
          function (t) {
            if (c === clearTimeout) return clearTimeout(t);
            if ((c === r || !c) && clearTimeout) return c = clearTimeout, clearTimeout(t);
            try {
              c(t)
            } catch (e) {
              try {
                return c.call(null, t)
              } catch (e) {
                return c.call(this, t)
              }
            }
          }(t)
      }
    }

    function s(t, e) {
      this.fun = t, this.array = e
    }

    function l() {}
    var d, c, u = t.exports = {};
    ! function () {
      try {
        d = "function" == typeof setTimeout ? setTimeout : n
      } catch (t) {
        d = n
      }
      try {
        c = "function" == typeof clearTimeout ? clearTimeout : r
      } catch (t) {
        c = r
      }
    }();
    var p, g = [],
      h = !1,
      f = -1;
    u.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
      g.push(new s(t, e)), 1 !== g.length || h || i(a)
    }, s.prototype.run = function () {
      this.fun.apply(null, this.array)
    }, u.title = "browser", u.browser = !0, u.env = {}, u.argv = [], u.version = "", u.versions = {}, u.on = l, u.addListener = l, u.once = l, u.off = l, u.removeListener = l, u.removeAllListeners = l, u.emit = l, u.prependListener = l, u.prependOnceListener = l, u.listeners = function (t) {
      return []
    }, u.binding = function (t) {
      throw new Error("process.binding is not supported")
    }, u.cwd = function () {
      return "/"
    }, u.chdir = function (t) {
      throw new Error("process.chdir is not supported")
    }, u.umask = function () {
      return 0
    }
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      return t = JSON.stringify(t), !!/^\{[\s\S]*\}$/.test(t)
    }

    function i(t) {
      if ("string" == typeof t) try {
        return JSON.parse(t)
      } catch (e) {
        return t
      }
    }

    function o(t) {
      return "[object Function]" === {}.toString.call(t)
    }

    function a() {
      if (!(this instanceof a)) return new a
    }

    function s(t, e) {
      var n = arguments,
        i = null;
      if (d || (d = a()), 0 === n.length) return d.get();
      if (1 === n.length) {
        if ("string" == typeof t) return d.get(t);
        if (r(t)) return d.set(t)
      }
      if (2 === n.length && "string" == typeof t) {
        if (!e) return d.remove(t);
        if (e && "string" == typeof e) return d.set(t, e);
        e && o(e) && (i = null, i = e(t, d.get(t)), s.set(t, i))
      }
      if (2 === n.length && function (t) {
          return "[object Array]" === Object.prototype.toString.call(t)
        }(t) && o(e))
        for (var l = 0, c = t.length; l < c; l++) i = e(t[l], d.get(t[l])), s.set(t[l], i);
      return s
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var l = window.localStorage;
    l = function (t) {
      var e = "_Is_Incognit";
      try {
        t.setItem(e, "yes")
      } catch (e) {
        if ("QuotaExceededError" === e.name) {
          var n = function () {};
          t.__proto__ = {
            setItem: n,
            getItem: n,
            removeItem: n,
            clear: n
          }
        }
      } finally {
        "yes" === t.getItem(e) && t.removeItem(e)
      }
      return t
    }(l), a.prototype = {
      set: function (t, e) {
        if (t && !r(t)) l.setItem(t, function (t) {
          return void 0 === t || "function" == typeof t ? t + "" : JSON.stringify(t)
        }(e));
        else if (r(t))
          for (var n in t) this.set(n, t[n]);
        return this
      },
      get: function (t) {
        if (!t) {
          var e = {};
          return this.forEach(function (t, n) {
            return e[t] = n
          }), e
        }
        if ("?" === t.charAt(0)) return this.has(t.substr(1));
        var n = arguments;
        if (n.length > 1) {
          for (var r = {}, o = 0, a = n.length; o < a; o++) {
            var s = i(l.getItem(n[o]));
            s && (r[n[o]] = s)
          }
          return r
        }
        return i(l.getItem(t))
      },
      clear: function () {
        return l.clear(), this
      },
      remove: function (t) {
        var e = this.get(t);
        return l.removeItem(t), e
      },
      has: function (t) {
        return {}.hasOwnProperty.call(this.get(), t)
      },
      keys: function () {
        var t = [];
        return this.forEach(function (e) {
          t.push(e)
        }), t
      },
      forEach: function (t) {
        for (var e = 0, n = l.length; e < n; e++) {
          var r = l.key(e);
          t(r, this.get(r))
        }
        return this
      },
      search: function (t) {
        for (var e = this.keys(), n = {}, r = 0, i = e.length; r < i; r++) e[r].indexOf(t) > -1 && (n[e[r]] = this.get(e[r]));
        return n
      }
    };
    var d = null;
    for (var c in a.prototype) s[c] = a.prototype[c];
    e.default = s
  }, function (t, e, n) {
    "use strict";
    var r = n(10),
      i = n(9),
      o = n(12),
      a = n(13),
      s = n(49),
      l = r(a());
    i(l, {
      getPolyfill: a,
      implementation: o,
      shim: s
    }), t.exports = l
  }, function (t, e, n) {
    "use strict";
    var r = n(9),
      i = n(13);
    t.exports = function () {
      var t = i();
      return r(String.prototype, {
        trim: t
      }, {
        trim: function () {
          return String.prototype.trim !== t
        }
      }), t
    }
  }, function (t, e, n) {
    "use strict";
    (function (e) {
      var n = function () {};
      if ("production" !== e.env.NODE_ENV) {
        n = function (t, e, n) {
          var r = arguments.length;
          n = new Array(r > 2 ? r - 2 : 0);
          for (var i = 2; i < r; i++) n[i - 2] = arguments[i];
          if (void 0 === e) throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
          t || function (t, e) {
            var n = arguments.length;
            e = new Array(n > 1 ? n - 1 : 0);
            for (var r = 1; r < n; r++) e[r - 1] = arguments[r];
            var i = 0,
              o = "Warning: " + t.replace(/%s/g, function () {
                return e[i++]
              });
            try {
              throw new Error(o)
            } catch (t) {}
          }.apply(null, [e].concat(n))
        }
      }
      t.exports = n
    }).call(e, n(46))
  }, function (t, e, n) {
    function r(t, e) {
      return new a(e).process(t)
    }
    var i = n(15),
      o = n(16),
      a = n(52);
    for (var s in (e = t.exports = r).filterXSS = r, e.FilterXSS = a, i) e[s] = i[s];
    for (var s in o) e[s] = o[s];
    "undefined" != typeof window && (window.filterXSS = t.exports), "undefined" != typeof self && "undefined" != typeof DedicatedWorkerGlobalScope && self instanceof DedicatedWorkerGlobalScope && (self.filterXSS = t.exports)
  }, function (t, e, n) {
    function r(t) {
      return null == t
    }

    function i(t) {
      (t = function (t) {
        var e = {};
        for (var n in t) e[n] = t[n];
        return e
      }(t || {})).stripIgnoreTag && (t.onIgnoreTag, t.onIgnoreTag = a.onIgnoreTagStripAll), t.whiteList = t.whiteList || a.whiteList, t.onTag = t.onTag || a.onTag, t.onTagAttr = t.onTagAttr || a.onTagAttr, t.onIgnoreTag = t.onIgnoreTag || a.onIgnoreTag, t.onIgnoreTagAttr = t.onIgnoreTagAttr || a.onIgnoreTagAttr, t.safeAttrValue = t.safeAttrValue || a.safeAttrValue, t.escapeHtml = t.escapeHtml || a.escapeHtml, this.options = t, !1 === t.css ? this.cssFilter = !1 : (t.css = t.css || {}, this.cssFilter = new o(t.css))
    }
    var o = n(2).FilterCSS,
      a = n(15),
      s = n(16),
      l = s.parseTag,
      d = s.parseAttr,
      c = n(4);
    i.prototype.process = function (t) {
      if (!(t = (t = t || "").toString())) return "";
      var e = this.options,
        n = e.whiteList,
        i = e.onTag,
        o = e.onIgnoreTag,
        s = e.onTagAttr,
        u = e.onIgnoreTagAttr,
        p = e.safeAttrValue,
        g = e.escapeHtml,
        h = this.cssFilter;
      e.stripBlankChar && (t = a.stripBlankChar(t)), e.allowCommentTag || (t = a.stripCommentTag(t));
      var f = !1;
      if (e.stripIgnoreTagBody) {
        f = a.StripTagBody(e.stripIgnoreTagBody, o);
        o = f.onIgnoreTag
      }
      var v = l(t, function (t, e, a, l, f) {
        var v, m = {
          sourcePosition: t,
          position: e,
          isClosing: f,
          isWhite: n.hasOwnProperty(a)
        };
        if (!r(v = i(a, l, m))) return v;
        if (m.isWhite) {
          if (m.isClosing) return "</" + a + ">";
          var b = function (t) {
              var e = c.spaceIndex(t);
              if (-1 === e) return {
                html: "",
                closing: "/" === t[t.length - 2]
              };
              var n = "/" === (t = c.trim(t.slice(e + 1, -1)))[t.length - 1];
              return n && (t = c.trim(t.slice(0, -1))), {
                html: t,
                closing: n
              }
            }(l),
            y = n[a],
            _ = d(b.html, function (t, e) {
              var n, i = -1 !== c.indexOf(y, t);
              return r(n = s(a, t, e, i)) ? i ? (e = p(a, t, e, h)) ? t + '="' + e + '"' : t : r(n = u(a, t, e, i)) ? void 0 : n : n
            });
          l = "<" + a;
          return _ && (l += " " + _), b.closing && (l += " /"), l + ">"
        }
        return r(v = o(a, l, m)) ? g(l) : v
      }, g);
      return f && (v = f.remove(v)), v
    }, t.exports = i
  }, function (t, e) {
    t.exports = {
      "bilibili_tv_抓狂": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_抓狂.png",
      "bilibili_tv_皱眉": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_皱眉.png",
      "bilibili_tv_再见": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_再见.png",
      "bilibili_tv_晕": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_晕.png",
      "bilibili_tv_疑问": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_疑问.png",
      "bilibili_tv_斜眼笑": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_斜眼笑.png",
      "bilibili_tv_笑哭": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_笑哭.png",
      "bilibili_tv_无奈": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_无奈.png",
      "bilibili_tv_委屈": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_委屈.png",
      "bilibili_tv_微笑": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_微笑.png",
      "bilibili_tv_吐血": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_吐血.png",
      "bilibili_tv_偷笑": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_偷笑.png",
      "bilibili_tv_调皮": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_调皮.png",
      "bilibili_tv_调侃": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_调侃.png",
      "bilibili_tv_思考": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_思考.png",
      "bilibili_tv_睡着": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_睡着.png",
      "bilibili_tv_生气": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_生气.png",
      "bilibili_tv_生病": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_生病.png",
      "bilibili_tv_色": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_色.png",
      "bilibili_tv_亲亲": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_亲亲.png",
      "bilibili_tv_呕吐": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_呕吐.png",
      "bilibili_tv_难过": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_难过.png",
      "bilibili_tv_目瞪口呆": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_目瞪口呆.png",
      "bilibili_tv_腼腆": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_腼腆.png",
      "bilibili_tv_流泪": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_流泪.png",
      "bilibili_tv_流汗": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_流汗.png",
      "bilibili_tv_流鼻血": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_流鼻血.png",
      "bilibili_tv_冷漠": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_冷漠.png",
      "bilibili_tv_困": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_困.png",
      "bilibili_tv_抠鼻": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_抠鼻.png",
      "bilibili_tv_可爱": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_可爱.png",
      "bilibili_tv_惊吓": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_惊吓.png",
      "bilibili_tv_坏笑": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_坏笑.png",
      "bilibili_tv_黑人问号": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_黑人问号.png",
      "bilibili_tv_害羞": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_害羞.png",
      "bilibili_tv_鬼脸": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_鬼脸.png",
      "bilibili_tv_鼓掌": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_鼓掌.png",
      "bilibili_tv_尴尬": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_尴尬.png",
      "bilibili_tv_发怒": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_发怒.png",
      "bilibili_tv_发财": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_发财.png",
      "bilibili_tv_点赞": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_点赞.png",
      "bilibili_tv_呆": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_呆.png",
      "bilibili_tv_大佬": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_大佬.png",
      "bilibili_tv_大哭": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_大哭.png",
      "bilibili_tv_打脸": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_打脸.png",
      "bilibili_tv_馋": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_馋.png",
      "bilibili_tv_闭嘴": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_闭嘴.png",
      "bilibili_tv_鄙视": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_鄙视.png",
      "bilibili_tv_白眼": "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_白眼.png",
      bilibili_tv_doge: "https://cdn.jsdelivr.net/gh/blogimg/emotion/bilibili/tv_doge.png",
      aru_306: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/306.png",
      aru_305: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/305.png",
      aru_304: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/304.png",
      aru_303: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/303.png",
      aru_302: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/302.png",
      aru_301: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/301.png",
      aru_300: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/300.png",
      aru_299: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/299.png",
      aru_298: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/298.png",
      aru_297: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/297.png",
      aru_296: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/296.png",
      aru_295: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/295.png",
      aru_294: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/294.png",
      aru_293: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/293.png",
      aru_292: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/292.png",
      aru_291: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/291.png",
      aru_290: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/290.png",
      aru_289: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/289.png",
      aru_288: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/288.png",
      aru_287: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/287.png",
      aru_286: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/286.png",
      aru_285: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/285.png",
      aru_284: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/284.png",
      aru_283: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/283.png",
      aru_282: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/282.png",
      aru_281: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/281.png",
      aru_280: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/280.png",
      aru_279: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/279.png",
      aru_278: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/278.png",
      aru_277: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/277.png",
      aru_276: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/276.png",
      aru_275: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/275.png",
      aru_274: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/274.png",
      aru_273: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/273.png",
      aru_272: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/272.png",
      aru_271: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/271.png",
      aru_270: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/270.png",
      aru_269: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/269.png",
      aru_268: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/268.png",
      aru_267: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/267.png",
      aru_266: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/266.png",
      aru_265: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/265.png",
      aru_264: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/264.png",
      aru_263: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/263.png",
      aru_262: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/262.png",
      aru_261: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/261.png",
      aru_260: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/260.png",
      aru_259: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/259.png",
      aru_258: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/258.png",
      aru_257: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/257.png",
      aru_256: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/256.png",
      aru_255: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/255.png",
      aru_254: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/254.png",
      aru_253: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/253.png",
      aru_252: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/252.png",
      aru_251: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/251.png",
      aru_250: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/250.png",
      aru_249: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/249.png",
      aru_248: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/248.png",
      aru_247: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/247.png",
      aru_246: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/246.png",
      aru_245: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/245.png",
      aru_244: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/244.png",
      aru_243: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/243.png",
      aru_242: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/242.png",
      aru_241: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/241.png",
      aru_240: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/240.png",
      aru_239: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/239.png",
      aru_238: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/238.png",
      aru_237: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/237.png",
      aru_236: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/236.png",
      aru_235: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/235.png",
      aru_234: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/234.png",
      aru_233: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/233.png",
      aru_232: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/232.png",
      aru_231: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/231.png",
      aru_230: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/230.png",
      aru_229: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/229.png",
      aru_228: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/228.png",
      aru_227: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/227.png",
      aru_226: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/226.png",
      aru_225: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/225.png",
      aru_224: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/224.png",
      aru_223: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/223.png",
      aru_222: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/222.png",
      aru_221: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/221.png",
      aru_220: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/220.png",
      aru_219: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/219.png",
      aru_218: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/218.png",
      aru_217: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/217.png",
      aru_216: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/216.png",
      aru_215: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/215.png",
      aru_214: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/214.png",
      aru_213: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/213.png",
      aru_212: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/212.png",
      aru_211: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/211.png",
      aru_210: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/210.png",
      aru_209: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/209.png",
      aru_208: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/208.png",
      aru_207: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/207.png",
      aru_206: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/206.png",
      aru_205: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/205.png",
      aru_204: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/204.png",
      aru_203: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/203.png",
      aru_202: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/202.png",
      aru_201: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/201.png",
      aru_200: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/200.png",
      aru_199: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/199.png",
      aru_198: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/198.png",
      aru_197: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/197.png",
      aru_196: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/196.png",
      aru_195: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/195.png",
      aru_194: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/194.png",
      aru_193: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/193.png",
      aru_192: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/192.png",
      aru_191: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/191.png",
      aru_190: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/190.png",
      aru_189: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/189.png",
      aru_188: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/188.png",
      aru_187: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/187.png",
      aru_186: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/186.png",
      aru_185: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/185.png",
      aru_184: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/184.png",
      aru_183: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/183.png",
      aru_182: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/182.png",
      aru_181: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/181.png",
      aru_180: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/180.png",
      aru_179: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/179.png",
      aru_178: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/178.png",
      aru_177: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/177.png",
      aru_176: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/176.png",
      aru_175: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/175.png",
      aru_174: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/174.png",
      aru_173: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/173.png",
      aru_172: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/172.png",
      aru_171: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/171.png",
      aru_170: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/170.png",
      aru_169: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/169.png",
      aru_168: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/168.png",
      aru_167: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/167.png",
      aru_166: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/166.png",
      aru_165: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/165.png",
      aru_164: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/164.png",
      aru_163: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/163.png",
      aru_162: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/162.png",
      aru_161: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/161.png",
      aru_160: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/160.png",
      aru_159: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/159.png",
      aru_158: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/158.png",
      aru_157: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/157.png",
      aru_156: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/156.png",
      aru_155: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/155.png",
      aru_154: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/154.png",
      aru_153: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/153.png",
      aru_152: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/152.png",
      aru_151: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/151.png",
      aru_150: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/150.png",
      aru_149: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/149.png",
      aru_148: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/148.png",
      aru_147: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/147.png",
      aru_146: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/146.png",
      aru_145: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/145.png",
      aru_144: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/144.png",
      aru_143: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/143.png",
      aru_142: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/142.png",
      aru_141: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/141.png",
      aru_140: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/140.png",
      aru_139: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/139.png",
      aru_138: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/138.png",
      aru_137: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/137.png",
      aru_136: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/136.png",
      aru_135: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/135.png",
      aru_134: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/134.png",
      aru_133: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/133.png",
      aru_132: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/132.png",
      aru_131: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/131.png",
      aru_130: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/130.png",
      aru_129: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/129.png",
      aru_128: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/128.png",
      aru_127: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/127.png",
      aru_126: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/126.png",
      aru_125: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/125.png",
      aru_124: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/124.png",
      aru_123: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/123.png",
      aru_122: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/122.png",
      aru_121: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/121.png",
      aru_120: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/120.png",
      aru_119: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/119.png",
      aru_118: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/118.png",
      aru_117: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/117.png",
      aru_116: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/116.png",
      aru_115: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/115.png",
      aru_114: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/114.png",
      aru_113: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/113.png",
      aru_112: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/112.png",
      aru_111: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/111.png",
      aru_110: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/110.png",
      aru_109: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/109.png",
      aru_108: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/108.png",
      aru_107: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/107.png",
      aru_106: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/106.png",
      aru_105: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/105.png",
      aru_104: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/104.png",
      aru_103: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/103.png",
      aru_102: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/102.png",
      aru_101: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/101.png",
      aru_100: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/100.png",
      aru_99: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/99.png",
      aru_98: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/98.png",
      aru_97: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/97.png",
      aru_96: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/96.png",
      aru_95: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/95.png",
      aru_94: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/94.png",
      aru_93: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/93.png",
      aru_92: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/92.png",
      aru_91: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/91.png",
      aru_90: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/90.png",
      aru_89: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/89.png",
      aru_88: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/88.png",
      aru_87: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/87.png",
      aru_86: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/86.png",
      aru_85: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/85.png",
      aru_84: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/84.png",
      aru_83: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/83.png",
      aru_82: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/82.png",
      aru_81: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/81.png",
      aru_80: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/80.png",
      aru_79: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/79.png",
      aru_78: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/78.png",
      aru_77: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/77.png",
      aru_76: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/76.png",
      aru_75: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/75.png",
      aru_74: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/74.png",
      aru_73: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/73.png",
      aru_72: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/72.png",
      aru_71: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/71.png",
      aru_70: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/70.png",
      aru_69: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/69.png",
      aru_68: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/68.png",
      aru_67: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/67.png",
      aru_66: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/66.png",
      aru_65: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/65.png",
      aru_64: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/64.png",
      aru_63: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/63.png",
      aru_62: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/62.png",
      aru_61: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/61.png",
      aru_60: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/60.png",
      aru_59: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/59.png",
      aru_58: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/58.png",
      aru_57: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/57.png",
      aru_56: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/56.png",
      aru_55: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/55.png",
      aru_54: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/54.png",
      aru_53: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/53.png",
      aru_52: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/52.png",
      aru_51: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/51.png",
      aru_50: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/50.png",
      aru_49: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/49.png",
      aru_48: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/48.png",
      aru_47: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/47.png",
      aru_46: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/46.png",
      aru_45: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/45.png",
      aru_44: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/44.png",
      aru_43: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/43.png",
      aru_42: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/42.png",
      aru_41: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/41.png",
      aru_40: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/40.png",
      aru_39: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/39.png",
      aru_38: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/38.png",
      aru_37: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/37.png",
      aru_36: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/36.png",
      aru_35: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/35.png",
      aru_34: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/34.png",
      aru_33: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/33.png",
      aru_32: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/32.png",
      aru_31: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/31.png",
      aru_30: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/30.png",
      aru_29: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/29.png",
      aru_28: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/28.png",
      aru_27: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/27.png",
      aru_26: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/26.png",
      aru_25: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/25.png",
      aru_24: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/24.png",
      aru_23: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/23.png",
      aru_22: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/22.png",
      aru_21: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/21.png",
      aru_20: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/20.png",
      aru_19: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/19.png",
      aru_18: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/18.png",
      aru_17: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/17.png",
      aru_16: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/16.png",
      aru_15: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/15.png",
      aru_14: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/14.png",
      aru_13: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/13.png",
      aru_12: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/12.png",
      aru_11: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/11.png",
      aru_10: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/10.png",
      aru_9: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/9.png",
      aru_8: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/8.png",
      aru_7: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/7.png",
      aru_6: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/6.png",
      aru_5: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/5.png",
      aru_4: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/4.png",
      aru_3: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/3.png",
      aru_2: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/2.png",
      aru_1: "https://cdn.jsdelivr.net/gh/blogimg/emotion/aru/1.png"
    }
  }, function (t, e) {
    t.exports = {
      nick: "NickName",
      mail: "E-Mail",
      link: "Website(http://)",
      nickFail: "NickName cannot be less than 3 bytes.",
      mailFail: "Please confirm your email address.",
      sofa: "No comment yet.",
      submit: "Submit",
      reply: "Reply",
      cancelReply: "Cancel reply",
      comments: "Comments",
      cancel: "Cancel",
      confirm: "Confirm",
      continue: "Continue",
      more: "Load More...",
      preview: "Preview",
      emoji: "Emoji",
      expand: "See more....",
      seconds: "seconds ago",
      minutes: "minutes ago",
      hours: "hours ago",
      days: "days ago",
      now: "just now",
      uploading: "Uploading ...",
      uploadDone: "Upload completed!",
      busy: "Submit is busy, please wait...",
      "code-98": "Valine initialization failed, please check your version of av-min.js.",
      "code-99": "Valine initialization failed, Please check the `el` element in the init method.",
      "code-100": "Valine initialization failed, Please check your appId and appKey.",
      "code-140": "The total number of API calls today has exceeded the development version limit.",
      "code-401": "Unauthorized operation, Please check your appId and appKey.",
      "code-403": "Access denied by API domain white list, Please check your security domain."
    }
  }, function (t, e) {
    t.exports = {
      nick: "ニックネーム",
      mail: "メールアドレス",
      link: "サイト(http://)",
      nickFail: "3バイト以上のニックネームをご入力ください.",
      mailFail: "メールアドレスをご確認ください.",
      sofa: "コメントしましょう~",
      submit: "提出する",
      reply: "返信する",
      cancelReply: "キャンセル",
      comments: "コメント",
      cancel: "キャンセル",
      confirm: "確認する",
      continue: "继续",
      more: "さらに読み込む...",
      preview: "プレビュー",
      emoji: "絵文字",
      expand: "もっと見る",
      seconds: "秒前",
      minutes: "分前",
      hours: "時間前",
      days: "日前",
      now: "たっだ今",
      uploading: "アップロード中...",
      uploadDone: "アップロードが完了しました!",
      busy: "20 秒間隔で提出してください    ...",
      "code-98": "ロードエラーです。av-min.js のバージョンを確認してください.",
      "code-99": "ロードエラーです。initにある`el`エレメントを確認ください.",
      "code-100": "ロードエラーです。AppIdとAppKeyを確認ください.",
      "code-140": "今日のAPIコールの総数が開発バージョンの上限を超えた.",
      "code-401": "権限が制限されています。AppIdとAppKeyを確認ください.",
      "code-403": "アクセスがAPIなどに制限されました、ドメイン名のセキュリティ設定を確認ください"
    }
  }, function (t, e) {
    t.exports = {
      nick: "昵称",
      mail: "邮箱",
      link: "网址(http://)",
      nickFail: "昵称不能少于3个字符",
      mailFail: "请填写正确的邮件地址",
      sofa: "来发评论吧~",
      submit: "提交",
      reply: "回复",
      cancelReply: "取消回复",
      comments: "评论",
      cancel: "取消",
      confirm: "确认",
      continue: "继续",
      more: "加载更多...",
      preview: "预览",
      emoji: "表情",
      expand: "查看更多...",
      seconds: "秒前",
      minutes: "分钟前",
      hours: "小时前",
      days: "天前",
      now: "刚刚",
      uploading: "正在传输...",
      uploadDone: "传输完成!",
      busy: "操作频繁，请稍候再试...",
      "code-98": "Valine 初始化失败，请检查 av-min.js 版本",
      "code-99": "Valine 初始化失败，请检查init中的`el`元素.",
      "code-100": "Valine 初始化失败，请检查你的AppId和AppKey.",
      "code-140": "今日 API 调用总次数已超过开发版限制.",
      "code-401": "未经授权的操作，请检查你的AppId和AppKey.",
      "code-403": "访问被API域名白名单拒绝，请检查你的安全域名设置."
    }
  }, function (t, e) {
    t.exports = {
      nick: "暱稱",
      mail: "郵箱",
      link: "網址(http://)",
      nickFail: "昵稱不能少於3個字符",
      mailFail: "請填寫正確的郵件地址",
      sofa: "來發評論吧~",
      submit: "提交",
      reply: "回覆",
      cancelReply: "取消回覆",
      comments: "評論",
      cancel: "取消",
      confirm: "確認",
      continue: "繼續",
      more: "加載更多...",
      preview: "預覽",
      emoji: "表情",
      expand: "查看更多...",
      seconds: "秒前",
      minutes: "分鐘前",
      hours: "小時前",
      days: "天前",
      now: "剛剛",
      uploading: "正在上傳...",
      uploadDone: "上傳完成!",
      busy: "操作頻繁，請稍候再試...",
      "code-98": "Valine 初始化失敗，請檢查 av-min.js 版本",
      "code-99": "Valine 初始化失敗，請檢查init中的`el`元素.",
      "code-100": "Valine 初始化失敗，請檢查你的AppId和AppKey.",
      "code-140": "今日 API 調用總次數已超過開發版限制.",
      "code-401": "未經授權的操作，請檢查你的AppId和AppKey.",
      "code-403": "訪問被API域名白名單拒絕，請檢查你的安全域名設置."
    }
  }, function (t, e, n) {
    var r = n(59);
    "string" == typeof r && (r = [
      [t.i, r, ""]
    ]);
    var i = {
      transform: void 0
    };
    n(61)(r, i), r.locals && (t.exports = r.locals)
  }, function (t, e, n) {
    (t.exports = n(60)(!1)).push([t.i, '.v[data-class=v]{font-size:16px;text-align:left}.v[data-class=v] *{-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.75}.v[data-class=v] .status-bar,.v[data-class=v] .veditor,.v[data-class=v] .vinput,.v[data-class=v] p,.v[data-class=v] pre code{color:#555}.v[data-class=v] .vsys,.v[data-class=v] .vtime{color:#b3b3b3}.v[data-class=v] .text-right{text-align:right}.v[data-class=v] .text-center{text-align:center}.v[data-class=v] hr{margin:.825em 0;border-color:#f6f6f6;border-style:dashed}.v[data-class=v].hide-avatar .vimg{display:none}.v[data-class=v] a{position:relative;cursor:pointer;text-decoration:none;display:inline-block;color:#FE9600;}.v[data-class=v] a:hover{color:#d7191a}.v[data-class=v] code,.v[data-class=v] pre{background-color:#f8f8f8;padding:.2em .4em;border-radius:3px;font-size:85%;margin:0;font-family:Source Code Pro,courier new,Input Mono,PT Mono,SFMono-Regular,Consolas,Monaco,Menlo,PingFang SC,Liberation Mono,Microsoft YaHei,Courier，monospace}.v[data-class=v] pre{padding:10px;overflow:auto;line-height:1.45}.v[data-class=v] pre code{padding:0;background:transparent;white-space:pre-wrap;word-break:keep-all}.v[data-class=v] blockquote{color:#666;margin:.5em 0;padding:0 0 0 1em;border-left:8px solid hsla(0,0%,93%,.5)}.v[data-class=v] .vinput{border:none;resize:none;outline:none;padding:10px 5px;max-width:100%;font-size:.775em}.v[data-class=v] input[type=checkbox],.v[data-class=v] input[type=radio]{display:inline-block;vertical-align:middle;margin-top:-2px}.v[data-class=v] .vicon{cursor:pointer;display:inline-block;overflow:hidden;fill:#666;vertical-align:middle}.v[data-class=v] .vicon+.vicon{margin-left:10px}.v[data-class=v] .vicon.actived{fill:#FE9600}.v[data-class=v] .vrow{font-size:0;padding:10px 0}.v[data-class=v] .vrow .vcol{display:inline-block;vertical-align:middle;font-size:14px}.v[data-class=v] .vrow .vcol.vcol-20{width:20%}.v[data-class=v] .vrow .vcol.vcol-30{width:30%}.v[data-class=v] .vrow .vcol.vcol-40{width:40%}.v[data-class=v] .vrow .vcol.vcol-50{width:50%}.v[data-class=v] .vrow .vcol.vcol-60{width:60%}.v[data-class=v] .vrow .vcol.vcol-70{width:70%}.v[data-class=v] .vrow .vcol.vcol-80{width:80%}.v[data-class=v] .vrow .vcol.vctrl{font-size:12px}.v[data-class=v] .emoji,.v[data-class=v] .vemoji{max-height:28px;vertical-align:middle;margin:0 1px;display:inline-block}.v[data-class=v] .vwrap{border:1px solid #f0f0f0;border-radius:4px;margin-bottom:10px;overflow:hidden;position:relative;padding:10px}.v[data-class=v] .vwrap input{background:transparent}.v[data-class=v] .vwrap .vedit{position:relative;padding-top:10px}.v[data-class=v] .vwrap .cancel-reply-btn{position:absolute;right:5px;top:5px;cursor:pointer}.v[data-class=v] .vwrap .vemojis{display:none;font-size:18px;text-align:justify;max-height:145px;overflow:auto;padding-bottom:10px;-webkit-box-shadow:0 0 1px #f0f0f0;box-shadow:0 0 1px #f0f0f0}.v[data-class=v] .vwrap .vemojis i{font-style:normal;padding-top:7px;width:36px;cursor:pointer;text-align:center;display:inline-block;vertical-align:middle}.v[data-class=v] .vwrap .vpreview{padding:7px;-webkit-box-shadow:0 0 1px #f0f0f0;box-shadow:0 0 1px #f0f0f0}.v[data-class=v] .vwrap .vpreview frame,.v[data-class=v] .vwrap .vpreview iframe,.v[data-class=v] .vwrap .vpreview img{max-width:100%;border:none}.v[data-class=v] .vwrap .vheader .vinput{width:33.33%;border-bottom:1px dashed #dedede}.v[data-class=v] .vwrap .vheader.item2 .vinput{width:50%}.v[data-class=v] .vwrap .vheader.item1 .vinput{width:100%}.v[data-class=v] .vwrap .vheader .vinput:focus{border-bottom-color:#eb5055}@media screen and (max-width:520px){.v[data-class=v] .vwrap .vheader.item2 .vinput,.v[data-class=v] .vwrap .vheader .vinput{width:100%}}.v[data-class=v] .vcopy{color:#999;font-size:.75em;padding:.5em 0}.v[data-class=v] .vcopy a{font-size:.75em}.v[data-class=v] .vcount{padding:5px;font-weight:600;font-size:1.25em}.v[data-class=v] ol,.v[data-class=v] ul{padding:0;margin-left:1.25em}.v[data-class=v] .txt-center{text-align:center}.v[data-class=v] .txt-right{text-align:right}.v[data-class=v] .pd5{padding:5px}.v[data-class=v] .pd10{padding:10px}.v[data-class=v] .veditor{width:100%;min-height:8.75em;font-size:.875em;background:transparent;resize:vertical;-webkit-transition:all .25s ease;transition:all .25s ease}.v[data-class=v] .vbtn{-webkit-transition-duration:.4s;transition-duration:.4s;text-align:center;color:#313131;border:1px solid #ededed;border-radius:.3em;display:inline-block;background:transparent;margin-bottom:0;font-weight:400;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;white-space:nowrap;padding:.5em 1.25em;font-size:.875em;line-height:1.42857143;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}.v[data-class=v] .vbtn+.vbtn{margin-left:1.25em}.v[data-class=v] .vbtn:active,.v[data-class=v] .vbtn:hover{color:#3090e4;border-color:#3090e4}.v[data-class=v] .vbtn:disabled{border-color:#e1e1e1;color:#e1e1e1;background-color:#fdfafa;cursor:not-allowed}.v[data-class=v] .vempty{padding:1.25em;text-align:center;color:#999}.v[data-class=v] .vsys{display:inline-block;padding:.2em .5em;font-size:.75em;border-radius:.2em;margin-right:.3em}@media screen and (max-width:520px){.v[data-class=v] .vsys{display:none}}.v[data-class=v] .vcards{width:100%}.v[data-class=v] .vcards .vcard{padding-top:1.25em;position:relative;display:block}.v[data-class=v] .vcards .vcard:after{content:"";clear:both;display:block}.v[data-class=v] .vcards .vcard .vimg{width:3.125em;height:3.125em;float:left;border-radius:50%;margin-right:.7525em;border:1px solid #f5f5f5;padding:.125em}@media screen and (max-width:720px){.v[data-class=v] .vcards .vcard .vimg{width:2.5em;height:2.5em}}.v[data-class=v] .vcards .vcard .vhead{line-height:1.5;margin-top:0}.v[data-class=v] .vcards .vcard .vhead .vnick{position:relative;font-size:.875em;font-weight:500;margin-right:.875em;cursor:pointer;text-decoration:none;display:inline-block}.v[data-class=v] .vcards .vcard .vhead .vnick:hover{color:#d7191a}.v[data-class=v] .vcards .vcard .vh{overflow:hidden;padding-bottom:.5em;border-bottom:1px dashed #f5f5f5}.v[data-class=v] .vcards .vcard .vh .vtime{font-size:.75em;margin-right:.875em}.v[data-class=v] .vcards .vcard .vh .vmeta{line-height:1;position:relative}.v[data-class=v] .vcards .vcard .vh .vmeta .vat{font-size:.8125em;color:#ef2f11;cursor:pointer;float:right}.v[data-class=v] .vcards .vcard:last-child .vh{border-bottom:none}.v[data-class=v] .vcards .vcard .vcontent{word-wrap:break-word;word-break:break-all;text-align:justify;font-size:.875em;line-height:2;position:relative;margin-bottom:.75em;padding-top:.625em}.v[data-class=v] .vcards .vcard .vcontent frame,.v[data-class=v] .vcards .vcard .vcontent iframe,.v[data-class=v] .vcards .vcard .vcontent img{max-width:100%;border:none}.v[data-class=v] .vcards .vcard .vcontent.expand{cursor:pointer;max-height:8em;overflow:hidden}.v[data-class=v] .vcards .vcard .vcontent.expand:before{display:block;content:"";position:absolute;width:100%;left:0;top:0;bottom:3.15em;background:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,0)),to(hsla(0,0%,100%,.9)));background:linear-gradient(180deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.9));z-index:999}.v[data-class=v] .vcards .vcard .vcontent.expand:after{display:block;content:attr(data-expand);text-align:center;color:#828586;position:absolute;width:100%;height:3.15em;line-height:3.15em;left:0;bottom:0;z-index:999;background:hsla(0,0%,100%,.9)}.v[data-class=v] .vcards .vcard .vquote{padding-left:1em;border-left:1px dashed hsla(0,0%,93%,.5)}.v[data-class=v] .vcards .vcard .vquote .vimg{width:2.225em;height:2.225em}.v[data-class=v] .vpage .vmore{margin:1em 0}.v[data-class=v] .clear{content:"";display:block;clear:both}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes pulse{50%{background:#dcdcdc}}@keyframes pulse{50%{background:#dcdcdc}}.v[data-class=v] .vspinner{width:22px;height:22px;display:inline-block;border:6px double #a0a0a0;border-top-color:transparent;border-bottom-color:transparent;border-radius:50%;-webkit-animation:spin 1s infinite linear;animation:spin 1s infinite linear;position:relative;vertical-align:middle;margin:0 5px}.dark .v[data-class=v] .status-bar,.dark .v[data-class=v] .veditor,.dark .v[data-class=v] .vinput,.dark .v[data-class=v] .vsys,.dark .v[data-class=v] .vtime,.dark .v[data-class=v] li,.dark .v[data-class=v] p,.night .v[data-class=v] .status-bar,.night .v[data-class=v] .veditor,.night .v[data-class=v] .vinput,.night .v[data-class=v] .vsys,.night .v[data-class=v] .vtime,.night .v[data-class=v] li,.night .v[data-class=v] p,.theme__dark .v[data-class=v] .status-bar,.theme__dark .v[data-class=v] .veditor,.theme__dark .v[data-class=v] .vinput,.theme__dark .v[data-class=v] .vsys,.theme__dark .v[data-class=v] .vtime,.theme__dark .v[data-class=v] li,.theme__dark .v[data-class=v] p,[data-theme=dark] .v[data-class=v] .status-bar,[data-theme=dark] .v[data-class=v] .veditor,[data-theme=dark] .v[data-class=v] .vinput,[data-theme=dark] .v[data-class=v] .vsys,[data-theme=dark] .v[data-class=v] .vtime,[data-theme=dark] .v[data-class=v] li,[data-theme=dark] .v[data-class=v] p{color:#929298}.dark .v[data-class=v] code,.dark .v[data-class=v] pre,.dark .v[data-class=v] pre code,.night .v[data-class=v] code,.night .v[data-class=v] pre,.night .v[data-class=v] pre code,.theme__dark .v[data-class=v] code,.theme__dark .v[data-class=v] pre,.theme__dark .v[data-class=v] pre code,[data-theme=dark] .v[data-class=v] code,[data-theme=dark] .v[data-class=v] pre,[data-theme=dark] .v[data-class=v] pre code{color:#929298;background-color:#151414}.dark .v[data-class=v] .vwrap,.night .v[data-class=v] .vwrap,.theme__dark .v[data-class=v] .vwrap,[data-theme=dark] .v[data-class=v] .vwrap{border-color:#929298}.dark .v[data-class=v] .vicon,.night .v[data-class=v] .vicon,.theme__dark .v[data-class=v] .vicon,[data-theme=dark] .v[data-class=v] .vicon{fill:#929298}.dark .v[data-class=v] .vicon.actived,.night .v[data-class=v] .vicon.actived,.theme__dark .v[data-class=v] .vicon.actived,[data-theme=dark] .v[data-class=v] .vicon.actived{fill:#FE9600}.dark .v[data-class=v] .vbtn,.night .v[data-class=v] .vbtn,.theme__dark .v[data-class=v] .vbtn,[data-theme=dark] .v[data-class=v] .vbtn{color:#929298;border-color:#929298}.dark .v[data-class=v] .vbtn:hover,.night .v[data-class=v] .vbtn:hover,.theme__dark .v[data-class=v] .vbtn:hover,[data-theme=dark] .v[data-class=v] .vbtn:hover{color:#66b1ff;border-color:#66b1ff}.dark .v[data-class=v] a:hover,.night .v[data-class=v] a:hover,.theme__dark .v[data-class=v] a:hover,[data-theme=dark] .v[data-class=v] a:hover{color:#d7191a}.dark .v[data-class=v] .vcards .vcard .vcontent.expand:before,.night .v[data-class=v] .vcards .vcard .vcontent.expand:before,.theme__dark .v[data-class=v] .vcards .vcard .vcontent.expand:before,[data-theme=dark] .v[data-class=v] .vcards .vcard .vcontent.expand:before{background:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.3)),to(rgba(0,0,0,.7)));background:linear-gradient(180deg,rgba(0,0,0,.3),rgba(0,0,0,.7))}.dark .v[data-class=v] .vcards .vcard .vcontent.expand:after,.night .v[data-class=v] .vcards .vcard .vcontent.expand:after,.theme__dark .v[data-class=v] .vcards .vcard .vcontent.expand:after,[data-theme=dark] .v[data-class=v] .vcards .vcard .vcontent.expand:after{background:rgba(0,0,0,.7)}@media (prefers-color-scheme:dark){.v[data-class=v] .status-bar,.v[data-class=v] .veditor,.v[data-class=v] .vinput,.v[data-class=v] .vsys,.v[data-class=v] .vtime,.v[data-class=v] li,.v[data-class=v] p{color:#929298}.v[data-class=v] code,.v[data-class=v] pre,.v[data-class=v] pre code{color:#929298;background-color:#151414}.v[data-class=v] .vwrap{border-color:#929298}.v[data-class=v] .vicon{fill:#929298}.v[data-class=v] .vicon.actived{fill:#FE9600}.v[data-class=v] .vbtn{color:#929298;border-color:#929298}.v[data-class=v] .vbtn:hover{color:#66b1ff;border-color:#66b1ff}.v[data-class=v] a:hover{color:#d7191a}.v[data-class=v] .vcards .vcard .vcontent.expand:before{background:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.3)),to(rgba(0,0,0,.7)));background:linear-gradient(180deg,rgba(0,0,0,.3),rgba(0,0,0,.7))}.v[data-class=v] .vcards .vcard .vcontent.expand:after{background:rgba(0,0,0,.7)}}', ""])
  }, function (t, e) {
    function n(t, e) {
      var n = t[1] || "",
        r = t[3];
      if (!r) return n;
      if (e && "function" == typeof btoa) {
        var i = function (t) {
          return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */"
        }(r);
        return [n].concat(r.sources.map(function (t) {
          return "/*# sourceURL=" + r.sourceRoot + t + " */"
        })).concat([i]).join("\n")
      }
      return [n].join("\n")
    }
    t.exports = function (t) {
      var e = [];
      return e.toString = function () {
        return this.map(function (e) {
          var r = n(e, t);
          return e[2] ? "@media " + e[2] + "{" + r + "}" : r
        }).join("")
      }, e.i = function (t, n) {
        "string" == typeof t && (t = [
          [null, t, ""]
        ]);
        for (var r = {}, i = 0; i < this.length; i++) {
          var o = this[i][0];
          "number" == typeof o && (r[o] = !0)
        }
        for (i = 0; i < t.length; i++) {
          var a = t[i];
          "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
        }
      }, e
    }
  }, function (t, e, n) {
    function r(t, e) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n],
          i = p[r.id];
        if (i) {
          i.refs++;
          for (var o = 0; o < i.parts.length; o++) i.parts[o](r.parts[o]);
          for (; o < r.parts.length; o++) i.parts.push(c(r.parts[o], e))
        } else {
          var a = [];
          for (o = 0; o < r.parts.length; o++) a.push(c(r.parts[o], e));
          p[r.id] = {
            id: r.id,
            refs: 1,
            parts: a
          }
        }
      }
    }

    function i(t, e) {
      for (var n = [], r = {}, i = 0; i < t.length; i++) {
        var o = t[i],
          a = e.base ? o[0] + e.base : o[0],
          s = {
            css: o[1],
            media: o[2],
            sourceMap: o[3]
          };
        r[a] ? r[a].parts.push(s) : n.push(r[a] = {
          id: a,
          parts: [s]
        })
      }
      return n
    }

    function o(t, e) {
      var n = h(t.insertInto);
      if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
      var r = m[m.length - 1];
      if ("top" === t.insertAt) r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), m.push(e);
      else {
        if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
        n.appendChild(e)
      }
    }

    function a(t) {
      if (null === t.parentNode) return !1;
      t.parentNode.removeChild(t);
      var e = m.indexOf(t);
      e >= 0 && m.splice(e, 1)
    }

    function s(t) {
      var e = document.createElement("style");
      return t.attrs.type = "text/css", d(e, t.attrs), o(t, e), e
    }

    function l(t) {
      var e = document.createElement("link");
      return t.attrs.type = "text/css", t.attrs.rel = "stylesheet", d(e, t.attrs), o(t, e), e
    }

    function d(t, e) {
      Object.keys(e).forEach(function (n) {
        t.setAttribute(n, e[n])
      })
    }

    function c(t, e) {
      var n, r, i, o;
      if (e.transform && t.css) {
        if (!(o = e.transform(t.css))) return function () {};
        t.css = o
      }
      if (e.singleton) {
        var d = v++;
        n = f || (f = s(e)), r = u.bind(null, n, d, !1), i = u.bind(null, n, d, !0)
      } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = l(e), r = function (t, e, n) {
        var r = n.css,
          i = n.sourceMap,
          o = void 0 === e.convertToAbsoluteUrls && i;
        (e.convertToAbsoluteUrls || o) && (r = b(r)), i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
        var a = new Blob([r], {
            type: "text/css"
          }),
          s = t.href;
        t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
      }.bind(null, n, e), i = function () {
        a(n), n.href && URL.revokeObjectURL(n.href)
      }) : (n = s(e), r = function (t, e) {
        var n = e.css,
          r = e.media;
        if (r && t.setAttribute("media", r), t.styleSheet) t.styleSheet.cssText = n;
        else {
          for (; t.firstChild;) t.removeChild(t.firstChild);
          t.appendChild(document.createTextNode(n))
        }
      }.bind(null, n), i = function () {
        a(n)
      });
      return r(t),
        function (e) {
          if (e) {
            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
            r(t = e)
          } else i()
        }
    }

    function u(t, e, n, r) {
      var i = n ? "" : r.css;
      if (t.styleSheet) t.styleSheet.cssText = y(e, i);
      else {
        var o = document.createTextNode(i),
          a = t.childNodes;
        a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(o, a[e]) : t.appendChild(o)
      }
    }
    var p = {},
      g = function (t) {
        var e;
        return function () {
          return void 0 === e && (e = function () {
            return window && document && document.all && !window.atob
          }.apply(this, arguments)), e
        }
      }(),
      h = function (t) {
        var e = {};
        return function (t) {
          return void 0 === e[t] && (e[t] = function (t) {
            return document.querySelector(t)
          }.call(this, t)), e[t]
        }
      }(),
      f = null,
      v = 0,
      m = [],
      b = n(62);
    t.exports = function (t, e) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
      (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || (e.singleton = g()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
      var n = i(t, e);
      return r(n, e),
        function (t) {
          for (var o = [], a = 0; a < n.length; a++) {
            var s = n[a];
            (l = p[s.id]).refs--, o.push(l)
          }
          t && r(i(t, e), e);
          for (a = 0; a < o.length; a++) {
            var l;
            if (0 === (l = o[a]).refs) {
              for (var d = 0; d < l.parts.length; d++) l.parts[d]();
              delete p[l.id]
            }
          }
        }
    };
    var y = function () {
      var t = [];
      return function (e, n) {
        return t[e] = n, t.filter(Boolean).join("\n")
      }
    }()
  }, function (t, e) {
    t.exports = function (t) {
      var e = "undefined" != typeof window && window.location;
      if (!e) throw new Error("fixUrls requires window.location");
      if (!t || "string" != typeof t) return t;
      var n = e.protocol + "//" + e.host,
        r = n + e.pathname.replace(/\/[^\/]*$/, "/");
      return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
        var i, o = e.trim().replace(/^"(.*)"$/, function (t, e) {
          return e
        }).replace(/^'(.*)'$/, function (t, e) {
          return e
        });
        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o) ? t : (i = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : r + o.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")")
      })
    }
  }, function (t, e, n) {
    n(58), t.exports = n(18)
  }])
});
