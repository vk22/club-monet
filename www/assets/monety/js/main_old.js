function goBack() {
    window.history.back()
}! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = "length" in e && e.length,
            n = V.type(e);
        return "function" !== n && !V.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }

    function i(e, t, n) {
        if (V.isFunction(t)) return V.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return V.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ae.test(t)) return V.filter(t, e, n);
            t = V.filter(t, e)
        }
        return V.grep(e, function(e) {
            return R.call(t, e) >= 0 !== n
        })
    }

    function o(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function s(e) {
        var t = pe[e] = {};
        return V.each(e.match(fe) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function r() {
        G.removeEventListener("DOMContentLoaded", r, !1), e.removeEventListener("load", r, !1), V.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = V.expando + a.uid++
    }

    function l(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Ae, "-$1").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ye.test(n) ? V.parseJSON(n) : n)
                } catch (o) {}
                be.set(e, t, n)
            } else n = void 0;
        return n
    }

    function d() {
        return !0
    }

    function c() {
        return !1
    }

    function u() {
        try {
            return G.activeElement
        } catch (e) {}
    }

    function h(e, t) {
        return V.nodeName(e, "table") && V.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function f(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function p(e) {
        var t = De.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function m(e, t) {
        for (var n = 0, i = e.length; i > n; n++) ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
    }

    function g(e, t) {
        var n, i, o, s, r, a, l, d;
        if (1 === t.nodeType) {
            if (ve.hasData(e) && (s = ve.access(e), r = ve.set(t, s), d = s.events)) {
                delete r.handle, r.events = {};
                for (o in d)
                    for (n = 0, i = d[o].length; i > n; n++) V.event.add(t, o, d[o][n])
            }
            be.hasData(e) && (a = be.access(e), l = V.extend({}, a), be.set(t, l))
        }
    }

    function v(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && V.nodeName(e, t) ? V.merge([e], n) : n
    }

    function b(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ce.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function y(t, n) {
        var i, o = V(n.createElement(t)).appendTo(n.body),
            s = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(o[0])) ? i.display : V.css(o[0], "display");
        return o.detach(), s
    }

    function A(e) {
        var t = G,
            n = ze[e];
        return n || (n = y(e, t), "none" !== n && n || (We = (We || V("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = We[0].contentDocument, t.write(), t.close(), n = y(e, t), We.detach()), ze[e] = n), n
    }

    function _(e, t, n) {
        var i, o, s, r, a = e.style;
        return n = n || Qe(e), n && (r = n.getPropertyValue(t) || n[t]), n && ("" !== r || V.contains(e.ownerDocument, e) || (r = V.style(e, t)), Me.test(r) && He.test(t) && (i = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = n.width, a.width = i, a.minWidth = o, a.maxWidth = s)), void 0 !== r ? r + "" : r
    }

    function w(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function x(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), i = t, o = Ze.length; o--;)
            if (t = Ze[o] + n, t in e) return t;
        return i
    }

    function C(e, t, n) {
        var i = Fe.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function k(e, t, n, i, o) {
        for (var s = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; 4 > s; s += 2) "margin" === n && (r += V.css(e, n + we[s], !0, o)), i ? ("content" === n && (r -= V.css(e, "padding" + we[s], !0, o)), "margin" !== n && (r -= V.css(e, "border" + we[s] + "Width", !0, o))) : (r += V.css(e, "padding" + we[s], !0, o), "padding" !== n && (r += V.css(e, "border" + we[s] + "Width", !0, o)));
        return r
    }

    function S(e, t, n) {
        var i = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            s = Qe(e),
            r = "border-box" === V.css(e, "boxSizing", !1, s);
        if (0 >= o || null == o) {
            if (o = _(e, t, s), (0 > o || null == o) && (o = e.style[t]), Me.test(o)) return o;
            i = r && (U.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + k(e, t, n || (r ? "border" : "content"), i, s) + "px"
    }

    function T(e, t) {
        for (var n, i, o, s = [], r = 0, a = e.length; a > r; r++) i = e[r], i.style && (s[r] = ve.get(i, "olddisplay"), n = i.style.display, t ? (s[r] || "none" !== n || (i.style.display = ""), "" === i.style.display && xe(i) && (s[r] = ve.access(i, "olddisplay", A(i.nodeName)))) : (o = xe(i), "none" === n && o || ve.set(i, "olddisplay", o ? n : V.css(i, "display"))));
        for (r = 0; a > r; r++) i = e[r], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? s[r] || "" : "none"));
        return e
    }

    function I(e, t, n, i, o) {
        return new I.prototype.init(e, t, n, i, o)
    }

    function q() {
        return setTimeout(function() {
            Ue = void 0
        }), Ue = V.now()
    }

    function P(e, t) {
        var n, i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = we[i], o["margin" + n] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function j(e, t, n) {
        for (var i, o = (nt[t] || []).concat(nt["*"]), s = 0, r = o.length; r > s; s++)
            if (i = o[s].call(n, t, e)) return i
    }

    function E(e, t, n) {
        var i, o, s, r, a, l, d, c, u = this,
            h = {},
            f = e.style,
            p = e.nodeType && xe(e),
            m = ve.get(e, "fxshow");
        n.queue || (a = V._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, u.always(function() {
            u.always(function() {
                a.unqueued--, V.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], d = V.css(e, "display"), c = "none" === d ? ve.get(e, "olddisplay") || A(e.nodeName) : d, "inline" === c && "none" === V.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", u.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (o = t[i], Xe.exec(o)) {
                if (delete t[i], s = s || "toggle" === o, o === (p ? "hide" : "show")) {
                    if ("show" !== o || !m || void 0 === m[i]) continue;
                    p = !0
                }
                h[i] = m && m[i] || V.style(e, i)
            } else d = void 0;
        if (V.isEmptyObject(h)) "inline" === ("none" === d ? A(e.nodeName) : d) && (f.display = d);
        else {
            m ? "hidden" in m && (p = m.hidden) : m = ve.access(e, "fxshow", {}), s && (m.hidden = !p), p ? V(e).show() : u.done(function() {
                V(e).hide()
            }), u.done(function() {
                var t;
                ve.remove(e, "fxshow");
                for (t in h) V.style(e, t, h[t])
            });
            for (i in h) r = j(p ? m[i] : 0, i, u), i in m || (m[i] = r.start, p && (r.end = r.start, r.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function N(e, t) {
        var n, i, o, s, r;
        for (n in e)
            if (i = V.camelCase(n), o = t[i], s = e[n], V.isArray(s) && (o = s[1], s = e[n] = s[0]), n !== i && (e[i] = s, delete e[n]), r = V.cssHooks[i], r && "expand" in r) {
                s = r.expand(s), delete e[i];
                for (n in s) n in e || (e[n] = s[n], t[n] = o)
            } else t[i] = o
    }

    function L(e, t, n) {
        var i, o, s = 0,
            r = tt.length,
            a = V.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var t = Ue || q(), n = Math.max(0, d.startTime + d.duration - t), i = n / d.duration || 0, s = 1 - i, r = 0, l = d.tweens.length; l > r; r++) d.tweens[r].run(s);
                return a.notifyWith(e, [d, s, n]), 1 > s && l ? n : (a.resolveWith(e, [d]), !1)
            },
            d = a.promise({
                elem: e,
                props: V.extend({}, t),
                opts: V.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ue || q(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = V.Tween(e, d.opts, t, n, d.opts.specialEasing[t] || d.opts.easing);
                    return d.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? d.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i > n; n++) d.tweens[n].run(1);
                    return t ? a.resolveWith(e, [d, t]) : a.rejectWith(e, [d, t]), this
                }
            }),
            c = d.props;
        for (N(c, d.opts.specialEasing); r > s; s++)
            if (i = tt[s].call(d, e, c, d.opts)) return i;
        return V.map(c, j, d), V.isFunction(d.opts.start) && d.opts.start.call(e, d), V.fx.timer(V.extend(l, {
            elem: e,
            anim: d,
            queue: d.opts.queue
        })), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always)
    }

    function O(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0,
                s = t.toLowerCase().match(fe) || [];
            if (V.isFunction(n))
                for (; i = s[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function D(e, t, n, i) {
        function o(a) {
            var l;
            return s[a] = !0, V.each(e[a] || [], function(e, a) {
                var d = a(t, n, i);
                return "string" != typeof d || r || s[d] ? r ? !(l = d) : void 0 : (t.dataTypes.unshift(d), o(d), !1)
            }), l
        }
        var s = {},
            r = e === yt;
        return o(t.dataTypes[0]) || !s["*"] && o("*")
    }

    function $(e, t) {
        var n, i, o = V.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && V.extend(!0, e, i), e
    }

    function B(e, t, n) {
        for (var i, o, s, r, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (o in a)
                if (a[o] && a[o].test(i)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in n) s = l[0];
        else {
            for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    s = o;
                    break
                }
                r || (r = o)
            }
            s = s || r
        }
        return s ? (s !== l[0] && l.unshift(s), n[s]) : void 0
    }

    function W(e, t, n, i) {
        var o, s, r, a, l, d = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (r in e.converters) d[r.toLowerCase()] = e.converters[r];
        for (s = c.shift(); s;)
            if (e.responseFields[s] && (n[e.responseFields[s]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = c.shift())
                if ("*" === s) s = l;
                else if ("*" !== l && l !== s) {
            if (r = d[l + " " + s] || d["* " + s], !r)
                for (o in d)
                    if (a = o.split(" "), a[1] === s && (r = d[l + " " + a[0]] || d["* " + a[0]])) {
                        r === !0 ? r = d[o] : d[o] !== !0 && (s = a[0], c.unshift(a[1]));
                        break
                    }
            if (r !== !0)
                if (r && e["throws"]) t = r(t);
                else try {
                    t = r(t)
                } catch (u) {
                    return {
                        state: "parsererror",
                        error: r ? u : "No conversion from " + l + " to " + s
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function z(e, t, n, i) {
        var o;
        if (V.isArray(t)) V.each(t, function(t, o) {
            n || Ct.test(e) ? i(e, o) : z(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i)
        });
        else if (n || "object" !== V.type(t)) i(e, t);
        else
            for (o in t) z(e + "[" + o + "]", t[o], n, i)
    }

    function H(e) {
        return V.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var M = [],
        Q = M.slice,
        K = M.concat,
        F = M.push,
        R = M.indexOf,
        Y = {},
        J = Y.toString,
        Z = Y.hasOwnProperty,
        U = {},
        G = e.document,
        X = "2.1.4",
        V = function(e, t) {
            return new V.fn.init(e, t)
        },
        ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        te = /^-ms-/,
        ne = /-([\da-z])/gi,
        ie = function(e, t) {
            return t.toUpperCase()
        };
    V.fn = V.prototype = {
        jquery: X,
        constructor: V,
        selector: "",
        length: 0,
        toArray: function() {
            return Q.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : Q.call(this)
        },
        pushStack: function(e) {
            var t = V.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return V.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(V.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(Q.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: F,
        sort: M.sort,
        splice: M.splice
    }, V.extend = V.fn.extend = function() {
        var e, t, n, i, o, s, r = arguments[0] || {},
            a = 1,
            l = arguments.length,
            d = !1;
        for ("boolean" == typeof r && (d = r, r = arguments[a] || {}, a++), "object" == typeof r || V.isFunction(r) || (r = {}), a === l && (r = this, a--); l > a; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = r[t], i = e[t], r !== i && (d && i && (V.isPlainObject(i) || (o = V.isArray(i))) ? (o ? (o = !1, s = n && V.isArray(n) ? n : []) : s = n && V.isPlainObject(n) ? n : {}, r[t] = V.extend(d, s, i)) : void 0 !== i && (r[t] = i));
        return r
    }, V.extend({
        expando: "jQuery" + (X + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === V.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !V.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(e) {
            return "object" === V.type(e) && !e.nodeType && !V.isWindow(e) && !(e.constructor && !Z.call(e.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Y[J.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = V.trim(e), e && (1 === e.indexOf("use strict") ? (t = G.createElement("script"), t.text = e, G.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(te, "ms-").replace(ne, ie)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, i) {
            var o, s = 0,
                r = e.length,
                a = n(e);
            if (i) {
                if (a)
                    for (; r > s && (o = t.apply(e[s], i), o !== !1); s++);
                else
                    for (s in e)
                        if (o = t.apply(e[s], i), o === !1) break
            } else if (a)
                for (; r > s && (o = t.call(e[s], s, e[s]), o !== !1); s++);
            else
                for (s in e)
                    if (o = t.call(e[s], s, e[s]), o === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ee, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? V.merge(i, "string" == typeof e ? [e] : e) : F.call(i, e)), i
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : R.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; n > i; i++) e[o++] = t[i];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i, o = [], s = 0, r = e.length, a = !n; r > s; s++) i = !t(e[s], s), i !== a && o.push(e[s]);
            return o
        },
        map: function(e, t, i) {
            var o, s = 0,
                r = e.length,
                a = n(e),
                l = [];
            if (a)
                for (; r > s; s++) o = t(e[s], s, i), null != o && l.push(o);
            else
                for (s in e) o = t(e[s], s, i), null != o && l.push(o);
            return K.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, o;
            return "string" == typeof t && (n = e[t], t = e, e = n), V.isFunction(e) ? (i = Q.call(arguments, 2), o = function() {
                return e.apply(t || this, i.concat(Q.call(arguments)))
            }, o.guid = e.guid = e.guid || V.guid++, o) : void 0
        },
        now: Date.now,
        support: U
    }), V.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        Y["[object " + t + "]"] = t.toLowerCase()
    });
    var oe = function(e) {
        function t(e, t, n, i) {
            var o, s, r, a, l, d, u, f, p, m;
            if ((t ? t.ownerDocument || t : z) !== E && j(t), t = t || E, n = n || [], a = t.nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a) return n;
            if (!i && L) {
                if (11 !== a && (o = be.exec(e)))
                    if (r = o[1]) {
                        if (9 === a) {
                            if (s = t.getElementById(r), !s || !s.parentNode) return n;
                            if (s.id === r) return n.push(s), n
                        } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(r)) && B(t, s) && s.id === r) return n.push(s), n
                    } else {
                        if (o[2]) return X.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = o[3]) && _.getElementsByClassName) return X.apply(n, t.getElementsByClassName(r)), n
                    }
                if (_.qsa && (!O || !O.test(e))) {
                    if (f = u = W, p = t, m = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (d = k(e), (u = t.getAttribute("id")) ? f = u.replace(Ae, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = d.length; l--;) d[l] = f + h(d[l]);
                        p = ye.test(e) && c(t.parentNode) || t, m = d.join(",")
                    }
                    if (m) try {
                        return X.apply(n, p.querySelectorAll(m)), n
                    } catch (g) {} finally {
                        u || t.removeAttribute("id")
                    }
                }
            }
            return T(e.replace(le, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[W] = !0, e
        }

        function o(e) {
            var t = E.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function s(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) w.attrHandle[n[i]] = t
        }

        function r(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function d(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var o, s = e([], n.length, t), r = s.length; r--;) n[o = s[r]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function u() {}

        function h(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }

        function f(e, t, n) {
            var i = t.dir,
                o = n && "parentNode" === i,
                s = M++;
            return t.first ? function(t, n, s) {
                for (; t = t[i];)
                    if (1 === t.nodeType || o) return e(t, n, s)
            } : function(t, n, r) {
                var a, l, d = [H, s];
                if (r) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || o) && e(t, n, r)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || o) {
                            if (l = t[W] || (t[W] = {}), (a = l[i]) && a[0] === H && a[1] === s) return d[2] = a[2];
                            if (l[i] = d, d[2] = e(t, n, r)) return !0
                        }
            }
        }

        function p(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, i) {
            for (var o = 0, s = n.length; s > o; o++) t(e, n[o], i);
            return i
        }

        function g(e, t, n, i, o) {
            for (var s, r = [], a = 0, l = e.length, d = null != t; l > a; a++)(s = e[a]) && (!n || n(s, i, o)) && (r.push(s), d && t.push(a));
            return r
        }

        function v(e, t, n, o, s, r) {
            return o && !o[W] && (o = v(o)), s && !s[W] && (s = v(s, r)), i(function(i, r, a, l) {
                var d, c, u, h = [],
                    f = [],
                    p = r.length,
                    v = i || m(t || "*", a.nodeType ? [a] : a, []),
                    b = !e || !i && t ? v : g(v, h, e, a, l),
                    y = n ? s || (i ? e : p || o) ? [] : r : b;
                if (n && n(b, y, a, l), o)
                    for (d = g(y, f), o(d, [], a, l), c = d.length; c--;)(u = d[c]) && (y[f[c]] = !(b[f[c]] = u));
                if (i) {
                    if (s || e) {
                        if (s) {
                            for (d = [], c = y.length; c--;)(u = y[c]) && d.push(b[c] = u);
                            s(null, y = [], d, l)
                        }
                        for (c = y.length; c--;)(u = y[c]) && (d = s ? ee(i, u) : h[c]) > -1 && (i[d] = !(r[d] = u))
                    }
                } else y = g(y === r ? y.splice(p, y.length) : y), s ? s(null, r, y, l) : X.apply(r, y)
            })
        }

        function b(e) {
            for (var t, n, i, o = e.length, s = w.relative[e[0].type], r = s || w.relative[" "], a = s ? 1 : 0, l = f(function(e) {
                    return e === t
                }, r, !0), d = f(function(e) {
                    return ee(t, e) > -1
                }, r, !0), c = [function(e, n, i) {
                    var o = !s && (i || n !== I) || ((t = n).nodeType ? l(e, n, i) : d(e, n, i));
                    return t = null, o
                }]; o > a; a++)
                if (n = w.relative[e[a].type]) c = [f(p(c), n)];
                else {
                    if (n = w.filter[e[a].type].apply(null, e[a].matches), n[W]) {
                        for (i = ++a; o > i && !w.relative[e[i].type]; i++);
                        return v(a > 1 && p(c), a > 1 && h(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(le, "$1"), n, i > a && b(e.slice(a, i)), o > i && b(e = e.slice(i)), o > i && h(e))
                    }
                    c.push(n)
                }
            return p(c)
        }

        function y(e, n) {
            var o = n.length > 0,
                s = e.length > 0,
                r = function(i, r, a, l, d) {
                    var c, u, h, f = 0,
                        p = "0",
                        m = i && [],
                        v = [],
                        b = I,
                        y = i || s && w.find.TAG("*", d),
                        A = H += null == b ? 1 : Math.random() || .1,
                        _ = y.length;
                    for (d && (I = r !== E && r); p !== _ && null != (c = y[p]); p++) {
                        if (s && c) {
                            for (u = 0; h = e[u++];)
                                if (h(c, r, a)) {
                                    l.push(c);
                                    break
                                }
                            d && (H = A)
                        }
                        o && ((c = !h && c) && f--, i && m.push(c))
                    }
                    if (f += p, o && p !== f) {
                        for (u = 0; h = n[u++];) h(m, v, r, a);
                        if (i) {
                            if (f > 0)
                                for (; p--;) m[p] || v[p] || (v[p] = U.call(l));
                            v = g(v)
                        }
                        X.apply(l, v), d && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                    }
                    return d && (H = A, I = b), m
                };
            return o ? i(r) : r
        }
        var A, _, w, x, C, k, S, T, I, q, P, j, E, N, L, O, D, $, B, W = "sizzle" + 1 * new Date,
            z = e.document,
            H = 0,
            M = 0,
            Q = n(),
            K = n(),
            F = n(),
            R = function(e, t) {
                return e === t && (P = !0), 0
            },
            Y = 1 << 31,
            J = {}.hasOwnProperty,
            Z = [],
            U = Z.pop,
            G = Z.push,
            X = Z.push,
            V = Z.slice,
            ee = function(e, t) {
                for (var n = 0, i = e.length; i > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = ie.replace("w", "w#"),
            se = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]",
            re = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + se + ")*)|.*)\\)|)",
            ae = new RegExp(ne + "+", "g"),
            le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            de = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            he = new RegExp(re),
            fe = new RegExp("^" + oe + "$"),
            pe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + se),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            me = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            Ae = /'|\\/g,
            _e = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            we = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            xe = function() {
                j()
            };
        try {
            X.apply(Z = V.call(z.childNodes), z.childNodes), Z[z.childNodes.length].nodeType
        } catch (Ce) {
            X = {
                apply: Z.length ? function(e, t) {
                    G.apply(e, V.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        _ = t.support = {}, C = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, j = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : z;
            return i !== E && 9 === i.nodeType && i.documentElement ? (E = i, N = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), L = !C(i), _.attributes = o(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), _.getElementsByTagName = o(function(e) {
                return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
            }), _.getElementsByClassName = ve.test(i.getElementsByClassName), _.getById = o(function(e) {
                return N.appendChild(e).id = W, !i.getElementsByName || !i.getElementsByName(W).length
            }), _.getById ? (w.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && L) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, w.filter.ID = function(e) {
                var t = e.replace(_e, we);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete w.find.ID, w.filter.ID = function(e) {
                var t = e.replace(_e, we);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), w.find.TAG = _.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : _.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, i = [],
                    o = 0,
                    s = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = s[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return s
            }, w.find.CLASS = _.getElementsByClassName && function(e, t) {
                return L ? t.getElementsByClassName(e) : void 0
            }, D = [], O = [], (_.qsa = ve.test(i.querySelectorAll)) && (o(function(e) {
                N.appendChild(e).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + W + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + W + "+*").length || O.push(".#.+[+~]")
            }), o(function(e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
            })), (_.matchesSelector = ve.test($ = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && o(function(e) {
                _.disconnectedMatch = $.call(e, "div"), $.call(e, "[s!='']:x"), D.push("!=", re)
            }), O = O.length && new RegExp(O.join("|")), D = D.length && new RegExp(D.join("|")), t = ve.test(N.compareDocumentPosition), B = t || ve.test(N.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, R = t ? function(e, t) {
                if (e === t) return P = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !_.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === z && B(z, e) ? -1 : t === i || t.ownerDocument === z && B(z, t) ? 1 : q ? ee(q, e) - ee(q, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return P = !0, 0;
                var n, o = 0,
                    s = e.parentNode,
                    a = t.parentNode,
                    l = [e],
                    d = [t];
                if (!s || !a) return e === i ? -1 : t === i ? 1 : s ? -1 : a ? 1 : q ? ee(q, e) - ee(q, t) : 0;
                if (s === a) return r(e, t);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (n = t; n = n.parentNode;) d.unshift(n);
                for (; l[o] === d[o];) o++;
                return o ? r(l[o], d[o]) : l[o] === z ? -1 : d[o] === z ? 1 : 0
            }, i) : E
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== E && j(e), n = n.replace(ue, "='$1']"), !(!_.matchesSelector || !L || D && D.test(n) || O && O.test(n))) try {
                var i = $.call(e, n);
                if (i || _.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (o) {}
            return t(n, E, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== E && j(e), B(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== E && j(e);
            var n = w.attrHandle[t.toLowerCase()],
                i = n && J.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
            return void 0 !== i ? i : _.attributes || !L ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                o = 0;
            if (P = !_.detectDuplicates, q = !_.sortStable && e.slice(0), e.sort(R), P) {
                for (; t = e[o++];) t === e[o] && (i = n.push(o));
                for (; i--;) e.splice(n[i], 1)
            }
            return q = null, e
        }, x = t.getText = function(e) {
            var t, n = "",
                i = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += x(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[i++];) n += x(t);
            return n
        }, w = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(_e, we), e[3] = (e[3] || e[4] || e[5] || "").replace(_e, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && he.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(_e, we).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = Q[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && Q(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(o) {
                        var s = t.attr(o, e);
                        return null == s ? "!=" === n : !n || (s += "", "=" === n ? s === i : "!=" === n ? s !== i : "^=" === n ? i && 0 === s.indexOf(i) : "*=" === n ? i && s.indexOf(i) > -1 : "$=" === n ? i && s.slice(-i.length) === i : "~=" === n ? (" " + s.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n && (s === i || s.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(e, t, n, i, o) {
                    var s = "nth" !== e.slice(0, 3),
                        r = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === i && 0 === o ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var d, c, u, h, f, p, m = s !== r ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            b = !l && !a;
                        if (g) {
                            if (s) {
                                for (; m;) {
                                    for (u = t; u = u[m];)
                                        if (a ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                    p = m = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [r ? g.firstChild : g.lastChild], r && b) {
                                for (c = g[W] || (g[W] = {}), d = c[e] || [], f = d[0] === H && d[1], h = d[0] === H && d[2], u = f && g.childNodes[f]; u = ++f && u && u[m] || (h = f = 0) || p.pop();)
                                    if (1 === u.nodeType && ++h && u === t) {
                                        c[e] = [H, f, h];
                                        break
                                    }
                            } else if (b && (d = (t[W] || (t[W] = {}))[e]) && d[0] === H) h = d[1];
                            else
                                for (;
                                    (u = ++f && u && u[m] || (h = f = 0) || p.pop()) && ((a ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++h || (b && ((u[W] || (u[W] = {}))[e] = [H, h]), u !== t)););
                            return h -= o, h === i || h % i === 0 && h / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var o, s = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return s[W] ? s(n) : s.length > 1 ? (o = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, o = s(e, n), r = o.length; r--;) i = ee(e, o[r]), e[i] = !(t[i] = o[r])
                    }) : function(e) {
                        return s(e, 0, o)
                    }) : s
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        o = S(e.replace(le, "$1"));
                    return o[W] ? i(function(e, t, n, i) {
                        for (var s, r = o(e, null, i, []), a = e.length; a--;)(s = r[a]) && (e[a] = !(t[a] = s))
                    }) : function(e, i, s) {
                        return t[0] = e, o(t, null, s, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(_e, we),
                        function(t) {
                            return (t.textContent || t.innerText || x(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function(e) {
                    return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(_e, we).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === N
                },
                focus: function(e) {
                    return e === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !w.pseudos.empty(e)
                },
                header: function(e) {
                    return ge.test(e.nodeName)
                },
                input: function(e) {
                    return me.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: d(function() {
                    return [0]
                }),
                last: d(function(e, t) {
                    return [t - 1]
                }),
                eq: d(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: d(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: d(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: d(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: d(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (A in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[A] = a(A);
        for (A in {
                submit: !0,
                reset: !0
            }) w.pseudos[A] = l(A);
        return u.prototype = w.filters = w.pseudos, w.setFilters = new u, k = t.tokenize = function(e, n) {
            var i, o, s, r, a, l, d, c = K[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = e, l = [], d = w.preFilter; a;) {
                (!i || (o = de.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(s = [])), i = !1, (o = ce.exec(a)) && (i = o.shift(), s.push({
                    value: i,
                    type: o[0].replace(le, " ")
                }), a = a.slice(i.length));
                for (r in w.filter) !(o = pe[r].exec(a)) || d[r] && !(o = d[r](o)) || (i = o.shift(), s.push({
                    value: i,
                    type: r,
                    matches: o
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? t.error(e) : K(e, l).slice(0)
        }, S = t.compile = function(e, t) {
            var n, i = [],
                o = [],
                s = F[e + " "];
            if (!s) {
                for (t || (t = k(e)), n = t.length; n--;) s = b(t[n]), s[W] ? i.push(s) : o.push(s);
                s = F(e, y(o, i)), s.selector = e
            }
            return s
        }, T = t.select = function(e, t, n, i) {
            var o, s, r, a, l, d = "function" == typeof e && e,
                u = !i && k(e = d.selector || e);
            if (n = n || [], 1 === u.length) {
                if (s = u[0] = u[0].slice(0), s.length > 2 && "ID" === (r = s[0]).type && _.getById && 9 === t.nodeType && L && w.relative[s[1].type]) {
                    if (t = (w.find.ID(r.matches[0].replace(_e, we), t) || [])[0], !t) return n;
                    d && (t = t.parentNode), e = e.slice(s.shift().value.length)
                }
                for (o = pe.needsContext.test(e) ? 0 : s.length; o-- && (r = s[o], !w.relative[a = r.type]);)
                    if ((l = w.find[a]) && (i = l(r.matches[0].replace(_e, we), ye.test(s[0].type) && c(t.parentNode) || t))) {
                        if (s.splice(o, 1), e = i.length && h(s), !e) return X.apply(n, i), n;
                        break
                    }
            }
            return (d || S(e, u))(i, t, !L, n, ye.test(e) && c(t.parentNode) || t), n
        }, _.sortStable = W.split("").sort(R).join("") === W, _.detectDuplicates = !!P, j(), _.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(E.createElement("div"))
        }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || s("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), _.attributes && o(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || s("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), o(function(e) {
            return null == e.getAttribute("disabled")
        }) || s(te, function(e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    V.find = oe, V.expr = oe.selectors, V.expr[":"] = V.expr.pseudos, V.unique = oe.uniqueSort, V.text = oe.getText, V.isXMLDoc = oe.isXML, V.contains = oe.contains;
    var se = V.expr.match.needsContext,
        re = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ae = /^.[^:#\[\.,]*$/;
    V.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? V.find.matchesSelector(i, e) ? [i] : [] : V.find.matches(e, V.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, V.fn.extend({
        find: function(e) {
            var t, n = this.length,
                i = [],
                o = this;
            if ("string" != typeof e) return this.pushStack(V(e).filter(function() {
                for (t = 0; n > t; t++)
                    if (V.contains(o[t], this)) return !0
            }));
            for (t = 0; n > t; t++) V.find(e, o[t], i);
            return i = this.pushStack(n > 1 ? V.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && se.test(e) ? V(e) : e || [], !1).length
        }
    });
    var le, de = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ce = V.fn.init = function(e, t) {
            var n, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : de.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || le).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof V ? t[0] : t, V.merge(this, V.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : G, !0)), re.test(n[1]) && V.isPlainObject(t))
                        for (n in t) V.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return i = G.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = G, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : V.isFunction(e) ? "undefined" != typeof le.ready ? le.ready(e) : e(V) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), V.makeArray(e, this))
        };
    ce.prototype = V.fn, le = V(G);
    var ue = /^(?:parents|prev(?:Until|All))/,
        he = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    V.extend({
        dir: function(e, t, n) {
            for (var i = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && V(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), V.fn.extend({
        has: function(e) {
            var t = V(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (V.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, o = this.length, s = [], r = se.test(e) || "string" != typeof e ? V(e, t || this.context) : 0; o > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && V.find.matchesSelector(n, e))) {
                        s.push(n);
                        break
                    }
            return this.pushStack(s.length > 1 ? V.unique(s) : s)
        },
        index: function(e) {
            return e ? "string" == typeof e ? R.call(V(e), this[0]) : R.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(V.unique(V.merge(this.get(), V(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), V.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return V.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return V.dir(e, "parentNode", n)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return V.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return V.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return V.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return V.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return V.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return V.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || V.merge([], e.childNodes)
        }
    }, function(e, t) {
        V.fn[e] = function(n, i) {
            var o = V.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = V.filter(i, o)), this.length > 1 && (he[e] || V.unique(o), ue.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var fe = /\S+/g,
        pe = {};
    V.Callbacks = function(e) {
        e = "string" == typeof e ? pe[e] || s(e) : V.extend({}, e);
        var t, n, i, o, r, a, l = [],
            d = !e.once && [],
            c = function(s) {
                for (t = e.memory && s, n = !0, a = o || 0, o = 0, r = l.length, i = !0; l && r > a; a++)
                    if (l[a].apply(s[0], s[1]) === !1 && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                i = !1, l && (d ? d.length && c(d.shift()) : t ? l = [] : u.disable())
            },
            u = {
                add: function() {
                    if (l) {
                        var n = l.length;
                        ! function s(t) {
                            V.each(t, function(t, n) {
                                var i = V.type(n);
                                "function" === i ? e.unique && u.has(n) || l.push(n) : n && n.length && "string" !== i && s(n)
                            })
                        }(arguments), i ? r = l.length : t && (o = n, c(t))
                    }
                    return this
                },
                remove: function() {
                    return l && V.each(arguments, function(e, t) {
                        for (var n;
                            (n = V.inArray(t, l, n)) > -1;) l.splice(n, 1), i && (r >= n && r--, a >= n && a--)
                    }), this
                },
                has: function(e) {
                    return e ? V.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], r = 0, this
                },
                disable: function() {
                    return l = d = t = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return d = void 0, t || u.disable(), this
                },
                locked: function() {
                    return !d
                },
                fireWith: function(e, t) {
                    return !l || n && !d || (t = t || [], t = [e, t.slice ? t.slice() : t], i ? d.push(t) : c(t)), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return u
    }, V.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", V.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", V.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", V.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return V.Deferred(function(n) {
                            V.each(t, function(t, s) {
                                var r = V.isFunction(e[t]) && e[t];
                                o[s[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && V.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === i ? n.promise() : this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? V.extend(e, i) : i
                    }
                },
                o = {};
            return i.pipe = i.then, V.each(t, function(e, s) {
                var r = s[2],
                    a = s[3];
                i[s[1]] = r.add, a && r.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), o[s[0]] = function() {
                    return o[s[0] + "With"](this === o ? i : this, arguments), this
                }, o[s[0] + "With"] = r.fireWith
            }), i.promise(o), e && e.call(o, o), o
        },
        when: function(e) {
            var t, n, i, o = 0,
                s = Q.call(arguments),
                r = s.length,
                a = 1 !== r || e && V.isFunction(e.promise) ? r : 0,
                l = 1 === a ? e : V.Deferred(),
                d = function(e, n, i) {
                    return function(o) {
                        n[e] = this, i[e] = arguments.length > 1 ? Q.call(arguments) : o, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (r > 1)
                for (t = new Array(r), n = new Array(r), i = new Array(r); r > o; o++) s[o] && V.isFunction(s[o].promise) ? s[o].promise().done(d(o, i, s)).fail(l.reject).progress(d(o, n, t)) : --a;
            return a || l.resolveWith(i, s), l.promise()
        }
    });
    var me;
    V.fn.ready = function(e) {
        return V.ready.promise().done(e), this
    }, V.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? V.readyWait++ : V.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --V.readyWait : V.isReady) || (V.isReady = !0, e !== !0 && --V.readyWait > 0 || (me.resolveWith(G, [V]), V.fn.triggerHandler && (V(G).triggerHandler("ready"), V(G).off("ready"))))
        }
    }), V.ready.promise = function(t) {
        return me || (me = V.Deferred(), "complete" === G.readyState ? setTimeout(V.ready) : (G.addEventListener("DOMContentLoaded", r, !1), e.addEventListener("load", r, !1))), me.promise(t)
    }, V.ready.promise();
    var ge = V.access = function(e, t, n, i, o, s, r) {
        var a = 0,
            l = e.length,
            d = null == n;
        if ("object" === V.type(n)) {
            o = !0;
            for (a in n) V.access(e, t, a, n[a], !0, s, r)
        } else if (void 0 !== i && (o = !0, V.isFunction(i) || (r = !0), d && (r ? (t.call(e, i), t = null) : (d = t, t = function(e, t, n) {
                return d.call(V(e), n)
            })), t))
            for (; l > a; a++) t(e[a], n, r ? i : i.call(e[a], a, t(e[a], n)));
        return o ? e : d ? t.call(e) : l ? t(e[0], n) : s
    };
    V.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, a.uid = 1, a.accepts = V.acceptData, a.prototype = {
        key: function(e) {
            if (!a.accepts(e)) return 0;
            var t = {},
                n = e[this.expando];
            if (!n) {
                n = a.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (i) {
                    t[this.expando] = n, V.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(e, t, n) {
            var i, o = this.key(e),
                s = this.cache[o];
            if ("string" == typeof t) s[t] = n;
            else if (V.isEmptyObject(s)) V.extend(this.cache[o], t);
            else
                for (i in t) s[i] = t[i];
            return s
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function(e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, V.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i, o, s = this.key(e),
                r = this.cache[s];
            if (void 0 === t) this.cache[s] = {};
            else {
                V.isArray(t) ? i = t.concat(t.map(V.camelCase)) : (o = V.camelCase(t), t in r ? i = [t, o] : (i = o, i = i in r ? [i] : i.match(fe) || [])), n = i.length;
                for (; n--;) delete r[i[n]]
            }
        },
        hasData: function(e) {
            return !V.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var ve = new a,
        be = new a,
        ye = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ae = /([A-Z])/g;
    V.extend({
        hasData: function(e) {
            return be.hasData(e) || ve.hasData(e)
        },
        data: function(e, t, n) {
            return be.access(e, t, n)
        },
        removeData: function(e, t) {
            be.remove(e, t)
        },
        _data: function(e, t, n) {
            return ve.access(e, t, n)
        },
        _removeData: function(e, t) {
            ve.remove(e, t)
        }
    }), V.fn.extend({
        data: function(e, t) {
            var n, i, o, s = this[0],
                r = s && s.attributes;
            if (void 0 === e) {
                if (this.length && (o = be.get(s), 1 === s.nodeType && !ve.get(s, "hasDataAttrs"))) {
                    for (n = r.length; n--;) r[n] && (i = r[n].name, 0 === i.indexOf("data-") && (i = V.camelCase(i.slice(5)), l(s, i, o[i])));
                    ve.set(s, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                be.set(this, e)
            }) : ge(this, function(t) {
                var n, i = V.camelCase(e);
                if (s && void 0 === t) {
                    if (n = be.get(s, e), void 0 !== n) return n;
                    if (n = be.get(s, i), void 0 !== n) return n;
                    if (n = l(s, i, void 0), void 0 !== n) return n
                } else this.each(function() {
                    var n = be.get(this, i);
                    be.set(this, i, t), -1 !== e.indexOf("-") && void 0 !== n && be.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                be.remove(this, e)
            })
        }
    }), V.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = ve.get(e, t), n && (!i || V.isArray(n) ? i = ve.access(e, t, V.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = V.queue(e, t),
                i = n.length,
                o = n.shift(),
                s = V._queueHooks(e, t),
                r = function() {
                    V.dequeue(e, t)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete s.stop, o.call(e, r, s)), !i && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ve.get(e, n) || ve.access(e, n, {
                empty: V.Callbacks("once memory").add(function() {
                    ve.remove(e, [t + "queue", n])
                })
            })
        }
    }), V.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? V.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = V.queue(this, e, t);
                V._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && V.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                V.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                o = V.Deferred(),
                s = this,
                r = this.length,
                a = function() {
                    --i || o.resolveWith(s, [s])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;) n = ve.get(s[r], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var _e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        we = ["Top", "Right", "Bottom", "Left"],
        xe = function(e, t) {
            return e = t || e, "none" === V.css(e, "display") || !V.contains(e.ownerDocument, e)
        },
        Ce = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = G.createDocumentFragment(),
            t = e.appendChild(G.createElement("div")),
            n = G.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), U.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", U.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var ke = "undefined";
    U.focusinBubbles = "onfocusin" in e;
    var Se = /^key/,
        Te = /^(?:mouse|pointer|contextmenu)|click/,
        Ie = /^(?:focusinfocus|focusoutblur)$/,
        qe = /^([^.]*)(?:\.(.+)|)$/;
    V.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var s, r, a, l, d, c, u, h, f, p, m, g = ve.get(e);
            if (g)
                for (n.handler && (s = n, n = s.handler, o = s.selector), n.guid || (n.guid = V.guid++), (l = g.events) || (l = g.events = {}), (r = g.handle) || (r = g.handle = function(t) {
                        return typeof V !== ke && V.event.triggered !== t.type ? V.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(fe) || [""], d = t.length; d--;) a = qe.exec(t[d]) || [], f = m = a[1], p = (a[2] || "").split(".").sort(), f && (u = V.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = V.event.special[f] || {}, c = V.extend({
                    type: f,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && V.expr.match.needsContext.test(o),
                    namespace: p.join(".")
                }, s), (h = l[f]) || (h = l[f] = [], h.delegateCount = 0, u.setup && u.setup.call(e, i, p, r) !== !1 || e.addEventListener && e.addEventListener(f, r, !1)), u.add && (u.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, c) : h.push(c), V.event.global[f] = !0)
        },
        remove: function(e, t, n, i, o) {
            var s, r, a, l, d, c, u, h, f, p, m, g = ve.hasData(e) && ve.get(e);
            if (g && (l = g.events)) {
                for (t = (t || "").match(fe) || [""], d = t.length; d--;)
                    if (a = qe.exec(t[d]) || [], f = m = a[1], p = (a[2] || "").split(".").sort(), f) {
                        for (u = V.event.special[f] || {}, f = (i ? u.delegateType : u.bindType) || f, h = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = h.length; s--;) c = h[s], !o && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(s, 1), c.selector && h.delegateCount--, u.remove && u.remove.call(e, c));
                        r && !h.length && (u.teardown && u.teardown.call(e, p, g.handle) !== !1 || V.removeEvent(e, f, g.handle), delete l[f])
                    } else
                        for (f in l) V.event.remove(e, f + t[d], n, i, !0);
                V.isEmptyObject(l) && (delete g.handle, ve.remove(e, "events"))
            }
        },
        trigger: function(t, n, i, o) {
            var s, r, a, l, d, c, u, h = [i || G],
                f = Z.call(t, "type") ? t.type : t,
                p = Z.call(t, "namespace") ? t.namespace.split(".") : [];
            if (r = a = i = i || G, 3 !== i.nodeType && 8 !== i.nodeType && !Ie.test(f + V.event.triggered) && (f.indexOf(".") >= 0 && (p = f.split("."), f = p.shift(), p.sort()), d = f.indexOf(":") < 0 && "on" + f, t = t[V.expando] ? t : new V.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : V.makeArray(n, [t]), u = V.event.special[f] || {}, o || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                if (!o && !u.noBubble && !V.isWindow(i)) {
                    for (l = u.delegateType || f, Ie.test(l + f) || (r = r.parentNode); r; r = r.parentNode) h.push(r), a = r;
                    a === (i.ownerDocument || G) && h.push(a.defaultView || a.parentWindow || e)
                }
                for (s = 0;
                    (r = h[s++]) && !t.isPropagationStopped();) t.type = s > 1 ? l : u.bindType || f, c = (ve.get(r, "events") || {})[t.type] && ve.get(r, "handle"), c && c.apply(r, n), c = d && r[d], c && c.apply && V.acceptData(r) && (t.result = c.apply(r, n), t.result === !1 && t.preventDefault());
                return t.type = f, o || t.isDefaultPrevented() || u._default && u._default.apply(h.pop(), n) !== !1 || !V.acceptData(i) || d && V.isFunction(i[f]) && !V.isWindow(i) && (a = i[d], a && (i[d] = null), V.event.triggered = f, i[f](), V.event.triggered = void 0, a && (i[d] = a)), t.result
            }
        },
        dispatch: function(e) {
            e = V.event.fix(e);
            var t, n, i, o, s, r = [],
                a = Q.call(arguments),
                l = (ve.get(this, "events") || {})[e.type] || [],
                d = V.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !d.preDispatch || d.preDispatch.call(this, e) !== !1) {
                for (r = V.event.handlers.call(this, e, l), t = 0;
                    (o = r[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, n = 0;
                        (s = o.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(s.namespace)) && (e.handleObj = s, e.data = s.data, i = ((V.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, a), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, s, r = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && (!e.button || "click" !== e.type))
                for (; l !== this; l = l.parentNode || this)
                    if (l.disabled !== !0 || "click" !== e.type) {
                        for (i = [], n = 0; a > n; n++) s = t[n], o = s.selector + " ", void 0 === i[o] && (i[o] = s.needsContext ? V(o, this).index(l) >= 0 : V.find(o, this, null, [l]).length), i[o] && i.push(s);
                        i.length && r.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return a < t.length && r.push({
                elem: this,
                handlers: t.slice(a)
            }), r
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, o, s = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || G, i = n.documentElement, o = n.body, e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[V.expando]) return e;
            var t, n, i, o = e.type,
                s = e,
                r = this.fixHooks[o];
            for (r || (this.fixHooks[o] = r = Te.test(o) ? this.mouseHooks : Se.test(o) ? this.keyHooks : {}), i = r.props ? this.props.concat(r.props) : this.props, e = new V.Event(s), t = i.length; t--;) n = i[t], e[n] = s[n];
            return e.target || (e.target = G), 3 === e.target.nodeType && (e.target = e.target.parentNode), r.filter ? r.filter(e, s) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== u() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === u() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && V.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return V.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var o = V.extend(new V.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? V.event.trigger(o, null, t) : V.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, V.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, V.Event = function(e, t) {
        return this instanceof V.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? d : c) : this.type = e, t && V.extend(this, t), this.timeStamp = e && e.timeStamp || V.now(), void(this[V.expando] = !0)) : new V.Event(e, t)
    }, V.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = d, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = d, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = d, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, V.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        V.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    o = e.relatedTarget,
                    s = e.handleObj;
                return (!o || o !== i && !V.contains(i, o)) && (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), U.focusinBubbles || V.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            V.event.simulate(t, e.target, V.event.fix(e), !0)
        };
        V.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    o = ve.access(i, t);
                o || i.addEventListener(e, n, !0), ve.access(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    o = ve.access(i, t) - 1;
                o ? ve.access(i, t, o) : (i.removeEventListener(e, n, !0), ve.remove(i, t))
            }
        }
    }), V.fn.extend({
        on: function(e, t, n, i, o) {
            var s, r;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (r in e) this.on(r, t, n, e[r], o);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = c;
            else if (!i) return this;
            return 1 === o && (s = i, i = function(e) {
                return V().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = V.guid++)), this.each(function() {
                V.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, V(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = c), this.each(function() {
                V.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                V.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? V.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        je = /<([\w:]+)/,
        Ee = /<|&#?\w+;/,
        Ne = /<(?:script|style|link)/i,
        Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Oe = /^$|\/(?:java|ecma)script/i,
        De = /^true\/(.*)/,
        $e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Be = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Be.optgroup = Be.option, Be.tbody = Be.tfoot = Be.colgroup = Be.caption = Be.thead, Be.th = Be.td, V.extend({
        clone: function(e, t, n) {
            var i, o, s, r, a = e.cloneNode(!0),
                l = V.contains(e.ownerDocument, e);
            if (!(U.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || V.isXMLDoc(e)))
                for (r = v(a), s = v(e), i = 0, o = s.length; o > i; i++) b(s[i], r[i]);
            if (t)
                if (n)
                    for (s = s || v(e), r = r || v(a), i = 0, o = s.length; o > i; i++) g(s[i], r[i]);
                else g(e, a);
            return r = v(a, "script"), r.length > 0 && m(r, !l && v(e, "script")), a
        },
        buildFragment: function(e, t, n, i) {
            for (var o, s, r, a, l, d, c = t.createDocumentFragment(), u = [], h = 0, f = e.length; f > h; h++)
                if (o = e[h], o || 0 === o)
                    if ("object" === V.type(o)) V.merge(u, o.nodeType ? [o] : o);
                    else if (Ee.test(o)) {
                for (s = s || c.appendChild(t.createElement("div")), r = (je.exec(o) || ["", ""])[1].toLowerCase(), a = Be[r] || Be._default, s.innerHTML = a[1] + o.replace(Pe, "<$1></$2>") + a[2], d = a[0]; d--;) s = s.lastChild;
                V.merge(u, s.childNodes), s = c.firstChild, s.textContent = ""
            } else u.push(t.createTextNode(o));
            for (c.textContent = "", h = 0; o = u[h++];)
                if ((!i || -1 === V.inArray(o, i)) && (l = V.contains(o.ownerDocument, o), s = v(c.appendChild(o), "script"), l && m(s), n))
                    for (d = 0; o = s[d++];) Oe.test(o.type || "") && n.push(o);
            return c
        },
        cleanData: function(e) {
            for (var t, n, i, o, s = V.event.special, r = 0; void 0 !== (n = e[r]); r++) {
                if (V.acceptData(n) && (o = n[ve.expando], o && (t = ve.cache[o]))) {
                    if (t.events)
                        for (i in t.events) s[i] ? V.event.remove(n, i) : V.removeEvent(n, i, t.handle);
                    ve.cache[o] && delete ve.cache[o]
                }
                delete be.cache[n[be.expando]]
            }
        }
    }), V.fn.extend({
        text: function(e) {
            return ge(this, function(e) {
                return void 0 === e ? V.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? V.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType || V.cleanData(v(n)), n.parentNode && (t && V.contains(n.ownerDocument, n) && m(v(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (V.cleanData(v(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return V.clone(this, e, t)
            })
        },
        html: function(e) {
            return ge(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !Be[(je.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Pe, "<$1></$2>");
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (V.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, V.cleanData(v(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = K.apply([], e);
            var n, i, o, s, r, a, l = 0,
                d = this.length,
                c = this,
                u = d - 1,
                h = e[0],
                m = V.isFunction(h);
            if (m || d > 1 && "string" == typeof h && !U.checkClone && Le.test(h)) return this.each(function(n) {
                var i = c.eq(n);
                m && (e[0] = h.call(this, n, i.html())), i.domManip(e, t)
            });
            if (d && (n = V.buildFragment(e, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                for (o = V.map(v(n, "script"), f), s = o.length; d > l; l++) r = n, l !== u && (r = V.clone(r, !0, !0), s && V.merge(o, v(r, "script"))), t.call(this[l], r, l);
                if (s)
                    for (a = o[o.length - 1].ownerDocument, V.map(o, p), l = 0; s > l; l++) r = o[l], Oe.test(r.type || "") && !ve.access(r, "globalEval") && V.contains(a, r) && (r.src ? V._evalUrl && V._evalUrl(r.src) : V.globalEval(r.textContent.replace($e, "")))
            }
            return this
        }
    }), V.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        V.fn[e] = function(e) {
            for (var n, i = [], o = V(e), s = o.length - 1, r = 0; s >= r; r++) n = r === s ? this : this.clone(!0), V(o[r])[t](n), F.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var We, ze = {},
        He = /^margin/,
        Me = new RegExp("^(" + _e + ")(?!px)[a-z%]+$", "i"),
        Qe = function(t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        };
    ! function() {
        function t() {
            r.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r.innerHTML = "", o.appendChild(s);
            var t = e.getComputedStyle(r, null);
            n = "1%" !== t.top, i = "4px" === t.width, o.removeChild(s)
        }
        var n, i, o = G.documentElement,
            s = G.createElement("div"),
            r = G.createElement("div");
        r.style && (r.style.backgroundClip = "content-box", r.cloneNode(!0).style.backgroundClip = "", U.clearCloneStyle = "content-box" === r.style.backgroundClip, s.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", s.appendChild(r), e.getComputedStyle && V.extend(U, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return null == i && t(), i
            },
            reliableMarginRight: function() {
                var t, n = r.appendChild(G.createElement("div"));
                return n.style.cssText = r.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", r.style.width = "1px", o.appendChild(s), t = !parseFloat(e.getComputedStyle(n, null).marginRight), o.removeChild(s), r.removeChild(n), t
            }
        }))
    }(), V.swap = function(e, t, n, i) {
        var o, s, r = {};
        for (s in t) r[s] = e.style[s], e.style[s] = t[s];
        o = n.apply(e, i || []);
        for (s in t) e.style[s] = r[s];
        return o
    };
    var Ke = /^(none|table(?!-c[ea]).+)/,
        Fe = new RegExp("^(" + _e + ")(.*)$", "i"),
        Re = new RegExp("^([+-])=(" + _e + ")", "i"),
        Ye = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Je = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ze = ["Webkit", "O", "Moz", "ms"];
    V.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = _(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, s, r, a = V.camelCase(t),
                    l = e.style;
                return t = V.cssProps[a] || (V.cssProps[a] = x(l, a)), r = V.cssHooks[t] || V.cssHooks[a], void 0 === n ? r && "get" in r && void 0 !== (o = r.get(e, !1, i)) ? o : l[t] : (s = typeof n, "string" === s && (o = Re.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(V.css(e, t)), s = "number"), void(null != n && n === n && ("number" !== s || V.cssNumber[a] || (n += "px"), U.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), r && "set" in r && void 0 === (n = r.set(e, n, i)) || (l[t] = n))))
            }
        },
        css: function(e, t, n, i) {
            var o, s, r, a = V.camelCase(t);
            return t = V.cssProps[a] || (V.cssProps[a] = x(e.style, a)), r = V.cssHooks[t] || V.cssHooks[a], r && "get" in r && (o = r.get(e, !0, n)), void 0 === o && (o = _(e, t, i)), "normal" === o && t in Je && (o = Je[t]), "" === n || n ? (s = parseFloat(o), n === !0 || V.isNumeric(s) ? s || 0 : o) : o
        }
    }), V.each(["height", "width"], function(e, t) {
        V.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? Ke.test(V.css(e, "display")) && 0 === e.offsetWidth ? V.swap(e, Ye, function() {
                    return S(e, t, i)
                }) : S(e, t, i) : void 0
            },
            set: function(e, n, i) {
                var o = i && Qe(e);
                return C(e, n, i ? k(e, t, i, "border-box" === V.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }), V.cssHooks.marginRight = w(U.reliableMarginRight, function(e, t) {
        return t ? V.swap(e, {
            display: "inline-block"
        }, _, [e, "marginRight"]) : void 0
    }), V.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        V.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, o = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + we[i] + t] = s[i] || s[i - 2] || s[0];
                return o
            }
        }, He.test(e) || (V.cssHooks[e + t].set = C)
    }), V.fn.extend({
        css: function(e, t) {
            return ge(this, function(e, t, n) {
                var i, o, s = {},
                    r = 0;
                if (V.isArray(t)) {
                    for (i = Qe(e), o = t.length; o > r; r++) s[t[r]] = V.css(e, t[r], !1, i);
                    return s
                }
                return void 0 !== n ? V.style(e, t, n) : V.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return T(this, !0)
        },
        hide: function() {
            return T(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                xe(this) ? V(this).show() : V(this).hide()
            })
        }
    }), V.Tween = I, I.prototype = {
        constructor: I,
        init: function(e, t, n, i, o, s) {
            this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = s || (V.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = I.propHooks[this.prop];
            return e && e.get ? e.get(this) : I.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = I.propHooks[this.prop];
            return this.options.duration ? this.pos = t = V.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this
        }
    }, I.prototype.init.prototype = I.prototype, I.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = V.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                V.fx.step[e.prop] ? V.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[V.cssProps[e.prop]] || V.cssHooks[e.prop]) ? V.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, V.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, V.fx = I.prototype.init, V.fx.step = {};
    var Ue, Ge, Xe = /^(?:toggle|show|hide)$/,
        Ve = new RegExp("^(?:([+-])=|)(" + _e + ")([a-z%]*)$", "i"),
        et = /queueHooks$/,
        tt = [E],
        nt = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    o = Ve.exec(t),
                    s = o && o[3] || (V.cssNumber[e] ? "" : "px"),
                    r = (V.cssNumber[e] || "px" !== s && +i) && Ve.exec(V.css(n.elem, e)),
                    a = 1,
                    l = 20;
                if (r && r[3] !== s) {
                    s = s || r[3], o = o || [], r = +i || 1;
                    do a = a || ".5", r /= a, V.style(n.elem, e, r + s); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                }
                return o && (r = n.start = +r || +i || 0, n.unit = s, n.end = o[1] ? r + (o[1] + 1) * o[2] : +o[2]), n
            }]
        };
    V.Animation = V.extend(L, {
            tweener: function(e, t) {
                V.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, o = e.length; o > i; i++) n = e[i], nt[n] = nt[n] || [], nt[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? tt.unshift(e) : tt.push(e)
            }
        }), V.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? V.extend({}, e) : {
                complete: n || !n && t || V.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !V.isFunction(t) && t
            };
            return i.duration = V.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in V.fx.speeds ? V.fx.speeds[i.duration] : V.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                V.isFunction(i.old) && i.old.call(this), i.queue && V.dequeue(this, i.queue)
            }, i
        }, V.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(xe).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var o = V.isEmptyObject(e),
                    s = V.speed(t, n, i),
                    r = function() {
                        var t = L(this, V.extend({}, e), s);
                        (o || ve.get(this, "finish")) && t.stop(!0)
                    };
                return r.finish = r, o || s.queue === !1 ? this.each(r) : this.queue(s.queue, r)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        s = V.timers,
                        r = ve.get(this);
                    if (o) r[o] && r[o].stop && i(r[o]);
                    else
                        for (o in r) r[o] && r[o].stop && et.test(o) && i(r[o]);
                    for (o = s.length; o--;) s[o].elem !== this || null != e && s[o].queue !== e || (s[o].anim.stop(n), t = !1, s.splice(o, 1));
                    (t || !n) && V.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = ve.get(this),
                        i = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        s = V.timers,
                        r = i ? i.length : 0;
                    for (n.finish = !0,
                        V.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                    for (t = 0; r > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), V.each(["toggle", "show", "hide"], function(e, t) {
            var n = V.fn[t];
            V.fn[t] = function(e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, i, o)
            }
        }), V.each({
            slideDown: P("show"),
            slideUp: P("hide"),
            slideToggle: P("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            V.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), V.timers = [], V.fx.tick = function() {
            var e, t = 0,
                n = V.timers;
            for (Ue = V.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || V.fx.stop(), Ue = void 0
        }, V.fx.timer = function(e) {
            V.timers.push(e), e() ? V.fx.start() : V.timers.pop()
        }, V.fx.interval = 13, V.fx.start = function() {
            Ge || (Ge = setInterval(V.fx.tick, V.fx.interval))
        }, V.fx.stop = function() {
            clearInterval(Ge), Ge = null
        }, V.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, V.fn.delay = function(e, t) {
            return e = V.fx ? V.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        function() {
            var e = G.createElement("input"),
                t = G.createElement("select"),
                n = t.appendChild(G.createElement("option"));
            e.type = "checkbox", U.checkOn = "" !== e.value, U.optSelected = n.selected, t.disabled = !0, U.optDisabled = !n.disabled, e = G.createElement("input"), e.value = "t", e.type = "radio", U.radioValue = "t" === e.value
        }();
    var it, ot, st = V.expr.attrHandle;
    V.fn.extend({
        attr: function(e, t) {
            return ge(this, V.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                V.removeAttr(this, e)
            })
        }
    }), V.extend({
        attr: function(e, t, n) {
            var i, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === ke ? V.prop(e, t, n) : (1 === s && V.isXMLDoc(e) || (t = t.toLowerCase(), i = V.attrHooks[t] || (V.expr.match.bool.test(t) ? ot : it)), void 0 === n ? i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = V.find.attr(e, t), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void V.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, i, o = 0,
                s = t && t.match(fe);
            if (s && 1 === e.nodeType)
                for (; n = s[o++];) i = V.propFix[n] || n, V.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!U.radioValue && "radio" === t && V.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), ot = {
        set: function(e, t, n) {
            return t === !1 ? V.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, V.each(V.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = st[t] || V.find.attr;
        st[t] = function(e, t, i) {
            var o, s;
            return i || (s = st[t], st[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, st[t] = s), o
        }
    });
    var rt = /^(?:input|select|textarea|button)$/i;
    V.fn.extend({
        prop: function(e, t) {
            return ge(this, V.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[V.propFix[e] || e]
            })
        }
    }), V.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var i, o, s, r = e.nodeType;
            if (e && 3 !== r && 8 !== r && 2 !== r) return s = 1 !== r || !V.isXMLDoc(e), s && (t = V.propFix[t] || t, o = V.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || rt.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), U.optSelected || (V.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), V.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        V.propFix[this.toLowerCase()] = this
    });
    var at = /[\t\r\n\f]/g;
    V.fn.extend({
        addClass: function(e) {
            var t, n, i, o, s, r, a = "string" == typeof e && e,
                l = 0,
                d = this.length;
            if (V.isFunction(e)) return this.each(function(t) {
                V(this).addClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(fe) || []; d > l; l++)
                    if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : " ")) {
                        for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r = V.trim(i), n.className !== r && (n.className = r)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, o, s, r, a = 0 === arguments.length || "string" == typeof e && e,
                l = 0,
                d = this.length;
            if (V.isFunction(e)) return this.each(function(t) {
                V(this).removeClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(fe) || []; d > l; l++)
                    if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : "")) {
                        for (s = 0; o = t[s++];)
                            for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                        r = e ? V.trim(i) : "", n.className !== r && (n.className = r)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(V.isFunction(e) ? function(n) {
                V(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, i = 0, o = V(this), s = e.match(fe) || []; t = s[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else(n === ke || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(at, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var lt = /\r/g;
    V.fn.extend({
        val: function(e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = V.isFunction(e), this.each(function(n) {
                var o;
                1 === this.nodeType && (o = i ? e.call(this, n, V(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : V.isArray(o) && (o = V.map(o, function(e) {
                    return null == e ? "" : e + ""
                })), t = V.valHooks[this.type] || V.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = V.valHooks[o.type] || V.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(lt, "") : null == n ? "" : n)) : void 0
        }
    }), V.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = V.find.attr(e, "value");
                    return null != t ? t : V.trim(V.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, s = "select-one" === e.type || 0 > o, r = s ? null : [], a = s ? o + 1 : i.length, l = 0 > o ? a : s ? o : 0; a > l; l++)
                        if (n = i[l], !(!n.selected && l !== o || (U.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && V.nodeName(n.parentNode, "optgroup"))) {
                            if (t = V(n).val(), s) return t;
                            r.push(t)
                        }
                    return r
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, s = V.makeArray(t), r = o.length; r--;) i = o[r], (i.selected = V.inArray(i.value, s) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), s
                }
            }
        }
    }), V.each(["radio", "checkbox"], function() {
        V.valHooks[this] = {
            set: function(e, t) {
                return V.isArray(t) ? e.checked = V.inArray(V(e).val(), t) >= 0 : void 0
            }
        }, U.checkOn || (V.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), V.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        V.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), V.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var dt = V.now(),
        ct = /\?/;
    V.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, V.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (i) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && V.error("Invalid XML: " + e), t
    };
    var ut = /#.*$/,
        ht = /([?&])_=[^&]*/,
        ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        mt = /^(?:GET|HEAD)$/,
        gt = /^\/\//,
        vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        bt = {},
        yt = {},
        At = "*/".concat("*"),
        _t = e.location.href,
        wt = vt.exec(_t.toLowerCase()) || [];
    V.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: _t,
            type: "GET",
            isLocal: pt.test(wt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": At,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": V.parseJSON,
                "text xml": V.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? $($(e, V.ajaxSettings), t) : $(V.ajaxSettings, e)
        },
        ajaxPrefilter: O(bt),
        ajaxTransport: O(yt),
        ajax: function(e, t) {
            function n(e, t, n, r) {
                var l, c, v, b, A, w = t;
                2 !== y && (y = 2, a && clearTimeout(a), i = void 0, s = r || "", _.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, n && (b = B(u, _, n)), b = W(u, b, _, l), l ? (u.ifModified && (A = _.getResponseHeader("Last-Modified"), A && (V.lastModified[o] = A), A = _.getResponseHeader("etag"), A && (V.etag[o] = A)), 204 === e || "HEAD" === u.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = b.state, c = b.data, v = b.error, l = !v)) : (v = w, (e || !w) && (w = "error", 0 > e && (e = 0))), _.status = e, _.statusText = (t || w) + "", l ? p.resolveWith(h, [c, w, _]) : p.rejectWith(h, [_, w, v]), _.statusCode(g), g = void 0, d && f.trigger(l ? "ajaxSuccess" : "ajaxError", [_, u, l ? c : v]), m.fireWith(h, [_, w]), d && (f.trigger("ajaxComplete", [_, u]), --V.active || V.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, o, s, r, a, l, d, c, u = V.ajaxSetup({}, t),
                h = u.context || u,
                f = u.context && (h.nodeType || h.jquery) ? V(h) : V.event,
                p = V.Deferred(),
                m = V.Callbacks("once memory"),
                g = u.statusCode || {},
                v = {},
                b = {},
                y = 0,
                A = "canceled",
                _ = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === y) {
                            if (!r)
                                for (r = {}; t = ft.exec(s);) r[t[1].toLowerCase()] = t[2];
                            t = r[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === y ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return y || (e = b[n] = b[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return y || (u.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > y)
                                for (t in e) g[t] = [g[t], e[t]];
                            else _.always(e[_.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || A;
                        return i && i.abort(t), n(0, t), this
                    }
                };
            if (p.promise(_).complete = m.add, _.success = _.done, _.error = _.fail, u.url = ((e || u.url || _t) + "").replace(ut, "").replace(gt, wt[1] + "//"), u.type = t.method || t.type || u.method || u.type, u.dataTypes = V.trim(u.dataType || "*").toLowerCase().match(fe) || [""], null == u.crossDomain && (l = vt.exec(u.url.toLowerCase()), u.crossDomain = !(!l || l[1] === wt[1] && l[2] === wt[2] && (l[3] || ("https:" === l[1] ? "80" : "443")) === (wt[3] || ("https:" === wt[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = V.param(u.data, u.traditional)), D(bt, u, t, _), 2 === y) return _;
            d = V.event && u.global, d && 0 === V.active++ && V.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !mt.test(u.type), o = u.url, u.hasContent || (u.data && (o = u.url += (ct.test(o) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = ht.test(o) ? o.replace(ht, "$1_=" + dt++) : o + (ct.test(o) ? "&" : "?") + "_=" + dt++)), u.ifModified && (V.lastModified[o] && _.setRequestHeader("If-Modified-Since", V.lastModified[o]), V.etag[o] && _.setRequestHeader("If-None-Match", V.etag[o])), (u.data && u.hasContent && u.contentType !== !1 || t.contentType) && _.setRequestHeader("Content-Type", u.contentType), _.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + At + "; q=0.01" : "") : u.accepts["*"]);
            for (c in u.headers) _.setRequestHeader(c, u.headers[c]);
            if (u.beforeSend && (u.beforeSend.call(h, _, u) === !1 || 2 === y)) return _.abort();
            A = "abort";
            for (c in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) _[c](u[c]);
            if (i = D(yt, u, t, _)) {
                _.readyState = 1, d && f.trigger("ajaxSend", [_, u]), u.async && u.timeout > 0 && (a = setTimeout(function() {
                    _.abort("timeout")
                }, u.timeout));
                try {
                    y = 1, i.send(v, n)
                } catch (w) {
                    if (!(2 > y)) throw w;
                    n(-1, w)
                }
            } else n(-1, "No Transport");
            return _
        },
        getJSON: function(e, t, n) {
            return V.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return V.get(e, void 0, t, "script")
        }
    }), V.each(["get", "post"], function(e, t) {
        V[t] = function(e, n, i, o) {
            return V.isFunction(n) && (o = o || i, i = n, n = void 0), V.ajax({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            })
        }
    }), V._evalUrl = function(e) {
        return V.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, V.fn.extend({
        wrapAll: function(e) {
            var t;
            return V.isFunction(e) ? this.each(function(t) {
                V(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = V(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return this.each(V.isFunction(e) ? function(t) {
                V(this).wrapInner(e.call(this, t))
            } : function() {
                var t = V(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = V.isFunction(e);
            return this.each(function(n) {
                V(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                V.nodeName(this, "body") || V(this).replaceWith(this.childNodes)
            }).end()
        }
    }), V.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, V.expr.filters.visible = function(e) {
        return !V.expr.filters.hidden(e)
    };
    var xt = /%20/g,
        Ct = /\[\]$/,
        kt = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        Tt = /^(?:input|select|textarea|keygen)/i;
    V.param = function(e, t) {
        var n, i = [],
            o = function(e, t) {
                t = V.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = V.ajaxSettings && V.ajaxSettings.traditional), V.isArray(e) || e.jquery && !V.isPlainObject(e)) V.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) z(n, e[n], t, o);
        return i.join("&").replace(xt, "+")
    }, V.fn.extend({
        serialize: function() {
            return V.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = V.prop(this, "elements");
                return e ? V.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !V(this).is(":disabled") && Tt.test(this.nodeName) && !St.test(e) && (this.checked || !Ce.test(e))
            }).map(function(e, t) {
                var n = V(this).val();
                return null == n ? null : V.isArray(n) ? V.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }).get()
        }
    }), V.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var It = 0,
        qt = {},
        Pt = {
            0: 200,
            1223: 204
        },
        jt = V.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in qt) qt[e]()
    }), U.cors = !!jt && "withCredentials" in jt, U.ajax = jt = !!jt, V.ajaxTransport(function(e) {
        var t;
        return U.cors || jt && !e.crossDomain ? {
            send: function(n, i) {
                var o, s = e.xhr(),
                    r = ++It;
                if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (o in e.xhrFields) s[o] = e.xhrFields[o];
                e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (o in n) s.setRequestHeader(o, n[o]);
                t = function(e) {
                    return function() {
                        t && (delete qt[r], t = s.onload = s.onerror = null, "abort" === e ? s.abort() : "error" === e ? i(s.status, s.statusText) : i(Pt[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? {
                            text: s.responseText
                        } : void 0, s.getAllResponseHeaders()))
                    }
                }, s.onload = t(), s.onerror = t("error"), t = qt[r] = t("abort");
                try {
                    s.send(e.hasContent && e.data || null)
                } catch (a) {
                    if (t) throw a
                }
            },
            abort: function() {
                t && t()
            }
        } : void 0
    }), V.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return V.globalEval(e), e
            }
        }
    }), V.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), V.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, o) {
                    t = V("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), G.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Et = [],
        Nt = /(=)\?(?=&|$)|\?\?/;
    V.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Et.pop() || V.expando + "_" + dt++;
            return this[e] = !0, e
        }
    }), V.ajaxPrefilter("json jsonp", function(t, n, i) {
        var o, s, r, a = t.jsonp !== !1 && (Nt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Nt.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = V.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Nt, "$1" + o) : t.jsonp !== !1 && (t.url += (ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return r || V.error(o + " was not called"), r[0]
        }, t.dataTypes[0] = "json", s = e[o], e[o] = function() {
            r = arguments
        }, i.always(function() {
            e[o] = s, t[o] && (t.jsonpCallback = n.jsonpCallback, Et.push(o)), r && V.isFunction(s) && s(r[0]), r = s = void 0
        }), "script") : void 0
    }), V.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || G;
        var i = re.exec(e),
            o = !n && [];
        return i ? [t.createElement(i[1])] : (i = V.buildFragment([e], t, o), o && o.length && V(o).remove(), V.merge([], i.childNodes))
    };
    var Lt = V.fn.load;
    V.fn.load = function(e, t, n) {
        if ("string" != typeof e && Lt) return Lt.apply(this, arguments);
        var i, o, s, r = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = V.trim(e.slice(a)), e = e.slice(0, a)), V.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), r.length > 0 && V.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            s = arguments, r.html(i ? V("<div>").append(V.parseHTML(e)).find(i) : e)
        }).complete(n && function(e, t) {
            r.each(n, s || [e.responseText, t, e])
        }), this
    }, V.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        V.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), V.expr.filters.animated = function(e) {
        return V.grep(V.timers, function(t) {
            return e === t.elem
        }).length
    };
    var Ot = e.document.documentElement;
    V.offset = {
        setOffset: function(e, t, n) {
            var i, o, s, r, a, l, d, c = V.css(e, "position"),
                u = V(e),
                h = {};
            "static" === c && (e.style.position = "relative"), a = u.offset(), s = V.css(e, "top"), l = V.css(e, "left"), d = ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1, d ? (i = u.position(), r = i.top, o = i.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), V.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (h.top = t.top - a.top + r), null != t.left && (h.left = t.left - a.left + o), "using" in t ? t.using.call(e, h) : u.css(h)
        }
    }, V.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                V.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0],
                o = {
                    top: 0,
                    left: 0
                },
                s = i && i.ownerDocument;
            return s ? (t = s.documentElement, V.contains(t, i) ? (typeof i.getBoundingClientRect !== ke && (o = i.getBoundingClientRect()), n = H(s), {
                top: o.top + n.pageYOffset - t.clientTop,
                left: o.left + n.pageXOffset - t.clientLeft
            }) : o) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === V.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), V.nodeName(e[0], "html") || (i = e.offset()), i.top += V.css(e[0], "borderTopWidth", !0), i.left += V.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - V.css(n, "marginTop", !0),
                    left: t.left - i.left - V.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Ot; e && !V.nodeName(e, "html") && "static" === V.css(e, "position");) e = e.offsetParent;
                return e || Ot
            })
        }
    }), V.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var i = "pageYOffset" === n;
        V.fn[t] = function(o) {
            return ge(this, function(t, o, s) {
                var r = H(t);
                return void 0 === s ? r ? r[n] : t[o] : void(r ? r.scrollTo(i ? e.pageXOffset : s, i ? s : e.pageYOffset) : t[o] = s)
            }, t, o, arguments.length, null)
        }
    }), V.each(["top", "left"], function(e, t) {
        V.cssHooks[t] = w(U.pixelPosition, function(e, n) {
            return n ? (n = _(e, t), Me.test(n) ? V(e).position()[t] + "px" : n) : void 0
        })
    }), V.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        V.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            V.fn[i] = function(i, o) {
                var s = arguments.length && (n || "boolean" != typeof i),
                    r = n || (i === !0 || o === !0 ? "margin" : "border");
                return ge(this, function(t, n, i) {
                    var o;
                    return V.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? V.css(t, n, r) : V.style(t, n, i, r)
                }, t, s ? i : void 0, s, null)
            }
        })
    }), V.fn.size = function() {
        return this.length
    }, V.fn.andSelf = V.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return V
    });
    var Dt = e.jQuery,
        $t = e.$;
    return V.noConflict = function(t) {
        return e.$ === V && (e.$ = $t), t && e.jQuery === V && (e.jQuery = Dt), V
    }, typeof t === ke && (e.jQuery = e.$ = V), V
}), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)), "string" == typeof t && o[t]()
        })
    }
    var n = function(t) {
        this.element = e(t)
    };
    n.VERSION = "3.3.4", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
        var t = this.element,
            n = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target");
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var o = n.find(".active:last a"),
                s = e.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                r = e.Event("show.bs.tab", {
                    relatedTarget: o[0]
                });
            if (o.trigger(s), t.trigger(r), !r.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var a = e(i);
                this.activate(t.closest("li"), n), this.activate(a, a.parent(), function() {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: t[0]
                    }), t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function(t, i, o) {
        function s() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }
        var r = i.find("> .active"),
            a = o && e.support.transition && (r.length && r.hasClass("fade") || !!i.find("> .fade").length);
        r.length && a ? r.one("bsTransitionEnd", s).emulateTransitionEnd(n.TRANSITION_DURATION) : s(), r.removeClass("in")
    };
    var i = e.fn.tab;
    e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function() {
        return e.fn.tab = i, this
    };
    var o = function(n) {
        n.preventDefault(), t.call(e(this), "show")
    };
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.tooltip"),
                s = "object" == typeof t && t;
            !o && /destroy|hide/.test(t) || (o || i.data("bs.tooltip", o = new n(this, s)), "string" == typeof t && o[t]())
        })
    }
    var n = function(e, t) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", e, t)
    };
    n.VERSION = "3.3.4", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(t, n, i) {
        if (this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && e(this.options.viewport.selector || this.options.viewport), this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), s = o.length; s--;) {
            var r = o[s];
            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if ("manual" != r) {
                var a = "hover" == r ? "mouseenter" : "focusin",
                    l = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, n.prototype.getDelegateOptions = function() {
        var t = {},
            n = this.getDefaults();
        return this._options && e.each(this._options, function(e, i) {
            n[e] != i && (t[e] = i)
        }), t
    }, n.prototype.enter = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n && n.$tip && n.$tip.is(":visible") ? void(n.hoverState = "in") : (n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.leave = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, n.prototype.show = function() {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var i = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !i) return;
            var o = this,
                s = this.tip(),
                r = this.getUID(this.type);
            this.setContent(), s.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && s.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                d = l.test(a);
            d && (a = a.replace(l, "") || "top"), s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element);
            var c = this.getPosition(),
                u = s[0].offsetWidth,
                h = s[0].offsetHeight;
            if (d) {
                var f = a,
                    p = this.options.container ? e(this.options.container) : this.$element.parent(),
                    m = this.getPosition(p);
                a = "bottom" == a && c.bottom + h > m.bottom ? "top" : "top" == a && c.top - h < m.top ? "bottom" : "right" == a && c.right + u > m.width ? "left" : "left" == a && c.left - u < m.left ? "right" : a, s.removeClass(f).addClass(a)
            }
            var g = this.getCalculatedOffset(a, c, u, h);
            this.applyPlacement(g, a);
            var v = function() {
                var e = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == e && o.leave(o)
            };
            e.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", v).emulateTransitionEnd(n.TRANSITION_DURATION) : v()
        }
    }, n.prototype.applyPlacement = function(t, n) {
        var i = this.tip(),
            o = i[0].offsetWidth,
            s = i[0].offsetHeight,
            r = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(a) && (a = 0), t.top = t.top + r, t.left = t.left + a, e.offset.setOffset(i[0], e.extend({
            using: function(e) {
                i.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, t), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            d = i[0].offsetHeight;
        "top" == n && d != s && (t.top = t.top + s - d);
        var c = this.getViewportAdjustedDelta(n, t, l, d);
        c.left ? t.left += c.left : t.top += c.top;
        var u = /top|bottom/.test(n),
            h = u ? 2 * c.left - o + l : 2 * c.top - s + d,
            f = u ? "offsetWidth" : "offsetHeight";
        i.offset(t), this.replaceArrow(h, i[0][f], u)
    }, n.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function(t) {
        function i() {
            "in" != o.hoverState && s.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), t && t()
        }
        var o = this,
            s = e(this.$tip),
            r = e.Event("hide.bs." + this.type);
        if (this.$element.trigger(r), !r.isDefaultPrevented()) return s.removeClass("in"), e.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this
    }, n.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(t) {
        t = t || this.$element;
        var n = t[0],
            i = "BODY" == n.tagName,
            o = n.getBoundingClientRect();
        null == o.width && (o = e.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var s = i ? {
                top: 0,
                left: 0
            } : t.offset(),
            r = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            a = i ? {
                width: e(window).width(),
                height: e(window).height()
            } : null;
        return e.extend({}, o, r, a, s)
    }, n.prototype.getCalculatedOffset = function(e, t, n, i) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - i,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - i / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - i / 2,
            left: t.left + t.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(e, t, n, i) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            r = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var a = t.top - s - r.scroll,
                l = t.top + s - r.scroll + i;
            a < r.top ? o.top = r.top - a : l > r.top + r.height && (o.top = r.top + r.height - l)
        } else {
            var d = t.left - s,
                c = t.left + s + n;
            d < r.left ? o.left = r.left - d : c > r.width && (o.left = r.left + r.width - c)
        }
        return o
    }, n.prototype.getTitle = function() {
        var e, t = this.$element,
            n = this.options;
        return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    }, n.prototype.getUID = function(e) {
        do e += ~~(1e6 * Math.random()); while (document.getElementById(e));
        return e
    }, n.prototype.tip = function() {
        return this.$tip = this.$tip || e(this.options.template)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(t) {
        var n = this;
        t && (n = e(t.currentTarget).data("bs." + this.type), n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        var e = this;
        clearTimeout(this.timeout), this.hide(function() {
            e.$element.off("." + e.type).removeData("bs." + e.type)
        })
    };
    var i = e.fn.tooltip;
    e.fn.tooltip = t, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = i, this
    }
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.popover"),
                s = "object" == typeof t && t;
            !o && /destroy|hide/.test(t) || (o || i.data("bs.popover", o = new n(this, s)), "string" == typeof t && o[t]())
        })
    }
    var n = function(e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.4", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle(),
            n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var e = this.$element,
            t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = e.fn.popover;
    e.fn.popover = t, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function() {
        return e.fn.popover = i, this
    }
}(jQuery), + function(e) {
    "use strict";

    function t(t, i) {
        return this.each(function() {
            var o = e(this),
                s = o.data("bs.modal"),
                r = e.extend({}, n.DEFAULTS, o.data(), "object" == typeof t && t);
            s || o.data("bs.modal", s = new n(this, r)),
                "string" == typeof t ? s[t](i) : r.show && s.show(i)
        })
    }
    var n = function(t, n) {
        this.$catFilter = e(".cat-filter"), this.options = n, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.4", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(e) {
        return this.isShown ? this.hide() : this.show(e)
    }, n.prototype.show = function(t) {
        var i = this,
            o = e.Event("show.bs.modal", {
                relatedTarget: t
            });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(t) {
                e(t.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var o = e.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus();
            var s = e.Event("shown.bs.modal", {
                relatedTarget: t
            });
            o ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(s)
        }))
    }, n.prototype.hide = function(t) {
        t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
            this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function() {
        this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(), this.backdrop(function() {
            e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(t) {
        var i = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = e.support.transition && o;
            if (this.$backdrop = e('<div class="modal-backdrop ' + o + '" />').appendTo(this.$catFilter), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            s ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var r = function() {
                i.removeBackdrop(), t && t()
            };
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : r()
        } else t && t()
    }, n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function() {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function() {
        var e = window.innerWidth;
        if (!e) {
            var t = document.documentElement.getBoundingClientRect();
            e = t.right - Math.abs(t.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function() {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure", this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t
    };
    var i = e.fn.modal;
    e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function() {
        return e.fn.modal = i, this
    }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = e(this),
            o = i.attr("href"),
            s = e(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            r = s.data("bs.modal") ? "toggle" : e.extend({
                remote: !/#/.test(o) && o
            }, s.data(), i.data());
        i.is("a") && n.preventDefault(), s.one("show.bs.modal", function(e) {
            e.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), t.call(s, r, this)
    })
}(jQuery),
function(e) {
    function t(t, n) {
        var i, o, s = this,
            r = navigator.userAgent.toLowerCase();
        s.uid = e.rsModules.uid++, s.ns = ".rs" + s.uid;
        var a = document.createElement("div").style,
            l = ["webkit", "Moz", "ms", "O"],
            d = "",
            c = 0;
        for (i = 0; i < l.length; i++) o = l[i], !d && o + "Transform" in a && (d = o), o = o.toLowerCase(), window.requestAnimationFrame || (window.requestAnimationFrame = window[o + "RequestAnimationFrame"], window.cancelAnimationFrame = window[o + "CancelAnimationFrame"] || window[o + "CancelRequestAnimationFrame"]);
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
            var t = (new Date).getTime(),
                n = Math.max(0, 16 - (t - c)),
                i = window.setTimeout(function() {
                    e(t + n)
                }, n);
            return c = t + n, i
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
            clearTimeout(e)
        }), s.isIPAD = r.match(/(ipad)/), l = /(chrome)[ \/]([\w.]+)/.exec(r) || /(webkit)[ \/]([\w.]+)/.exec(r) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(r) || /(msie) ([\w.]+)/.exec(r) || 0 > r.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(r) || [], i = l[1] || "", o = l[2] || "0", l = {}, i && (l[i] = !0, l.version = o), l.chrome && (l.webkit = !0), s._a = l, s.isAndroid = -1 < r.indexOf("android"), s.slider = e(t), s.ev = e(s), s._b = e(document), s.st = e.extend({}, e.fn.royalSlider.defaults, n), s._c = s.st.transitionSpeed, s._d = 0, !s.st.allowCSS3 || l.webkit && !s.st.allowCSS3OnWebkit || (r = d + (d ? "T" : "t"), s._e = r + "ransform" in a && r + "ransition" in a, s._e && (s._f = d + (d ? "P" : "p") + "erspective" in a)), d = d.toLowerCase(), s._g = "-" + d + "-", s._h = "vertical" !== s.st.slidesOrientation, s._i = s._h ? "left" : "top", s._j = s._h ? "width" : "height", s._k = -1, s._l = "fade" !== s.st.transitionType, s._l || (s.st.sliderDrag = !1, s._m = 10), s._n = "z-index:0; display:none; opacity:0;", s._o = 0, s._p = 0, s._q = 0, e.each(e.rsModules, function(e, t) {
            "uid" !== e && t.call(s)
        }), s.slides = [], s._r = 0, (s.st.slides ? e(s.st.slides) : s.slider.children().detach()).each(function() {
            s._s(this, !0)
        }), s.st.randomizeSlides && s.slides.sort(function() {
            return .5 - Math.random()
        }), s.numSlides = s.slides.length, s._t(), s.st.startSlideId ? s.st.startSlideId > s.numSlides - 1 && (s.st.startSlideId = s.numSlides - 1) : s.st.startSlideId = 0, s._o = s.staticSlideId = s.currSlideId = s._u = s.st.startSlideId, s.currSlide = s.slides[s.currSlideId], s._v = 0, s.msTouch = !1, s.slider.addClass((s._h ? "rsHor" : "rsVer") + (s._l ? "" : " rsFade")), a = '<div class="rsOverflow"><div class="rsContainer">', s.slidesSpacing = s.st.slidesSpacing, s._w = (s._h ? s.slider.width() : s.slider.height()) + s.st.slidesSpacing, s._x = Boolean(0 < s._y), 1 >= s.numSlides && (s._z = !1), s._a1 = s._z && s._l ? 2 === s.numSlides ? 1 : 2 : 0, s._b1 = 6 > s.numSlides ? s.numSlides : 6, s._c1 = 0, s._d1 = 0, s.slidesJQ = [];
        for (i = 0; i < s.numSlides; i++) s.slidesJQ.push(e('<div style="' + (s._l ? "" : i !== s.currSlideId ? s._n : "z-index:0;") + '" class="rsSlide "></div>'));
        s._e1 = a = e(a + "</div></div>"), d = s.ns, s.msEnabled = window.navigator.msPointerEnabled, s.msEnabled ? (s.msTouch = Boolean(1 < window.navigator.msMaxTouchPoints), s.hasTouch = !1, s._n1 = .2, s._j1 = "MSPointerDown" + d, s._k1 = "MSPointerMove" + d, s._l1 = "MSPointerUp" + d, s._m1 = "MSPointerCancel" + d) : (s._j1 = "mousedown" + d, s._k1 = "mousemove" + d, s._l1 = "mouseup" + d, s._m1 = "mouseup" + d, "ontouchstart" in window || "createTouch" in document ? (s.hasTouch = !0, s._j1 += " touchstart" + d, s._k1 += " touchmove" + d, s._l1 += " touchend" + d, s._m1 += " touchcancel" + d, s._n1 = .5, s.st.sliderTouch && (s._f1 = !0)) : (s.hasTouch = !1, s._n1 = .2)), s.st.sliderDrag && (s._f1 = !0, l.msie || l.opera ? s._g1 = s._h1 = "move" : l.mozilla ? (s._g1 = "-moz-grab", s._h1 = "-moz-grabbing") : l.webkit && -1 != navigator.platform.indexOf("Mac") && (s._g1 = "-webkit-grab", s._h1 = "-webkit-grabbing"), s._i1()), s.slider.html(a), s._o1 = s.st.controlsInside ? s._e1 : s.slider, s._p1 = s._e1.children(".rsContainer"), s.msEnabled && s._p1.css("-ms-touch-action", s._h ? "pan-y" : "pan-x"), s._q1 = e('<div class="rsPreloader"></div>'), a = s._p1.children(".rsSlide"), s._r1 = s.slidesJQ[s.currSlideId], s._s1 = 0, s._e ? (s._t1 = "transition-property", s._u1 = "transition-duration", s._v1 = "transition-timing-function", s._w1 = s._x1 = s._g + "transform", s._f ? (l.webkit && !l.chrome && s.slider.addClass("rsWebkit3d"), /iphone|ipad|ipod/gi.test(navigator.appVersion), s._y1 = "translate3d(", s._z1 = "px, ", s._a2 = "px, 0px)") : (s._y1 = "translate(", s._z1 = "px, ", s._a2 = "px)"), s._l ? s._p1[s._g + s._t1] = s._g + "transform" : (d = {}, d[s._g + s._t1] = "opacity", d[s._g + s._u1] = s.st.transitionSpeed + "ms", d[s._g + s._v1] = s.st.css3easeInOut, a.css(d))) : (s._x1 = "left", s._w1 = "top");
        var u;
        e(window).on("resize" + s.ns, function() {
            u && clearTimeout(u), u = setTimeout(function() {
                s.updateSliderSize()
            }, 50)
        }), s.ev.trigger("rsAfterPropsSetup"), s.updateSliderSize(), s.st.keyboardNavEnabled && s._b2(), s.st.arrowsNavHideOnTouch && (s.hasTouch || s.msTouch) && (s.st.arrowsNav = !1), s.st.arrowsNav && (a = s._o1, e('<div class="rsArrow rsArrowLeft"><div class="rsArrowIcn"></div></div><div class="rsArrow rsArrowRight"><div class="rsArrowIcn"></div></div>').appendTo(a), s._c2 = a.children(".rsArrowLeft").click(function(e) {
            e.preventDefault(), s.prev()
        }), s._d2 = a.children(".rsArrowRight").click(function(e) {
            e.preventDefault(), s.next()
        }), s.st.arrowsNavAutoHide && !s.hasTouch && (s._c2.addClass("rsHidden"), s._d2.addClass("rsHidden"), a.one("mousemove.arrowshover", function() {
            s._c2.removeClass("rsHidden"), s._d2.removeClass("rsHidden")
        }), a.hover(function() {
            s._e2 || (s._c2.removeClass("rsHidden"), s._d2.removeClass("rsHidden"))
        }, function() {
            s._e2 || (s._c2.addClass("rsHidden"), s._d2.addClass("rsHidden"))
        })), s.ev.on("rsOnUpdateNav", function() {
            s._f2()
        }), s._f2()), s._f1 ? s._p1.on(s._j1, function(e) {
            s._g2(e)
        }) : s.dragSuccess = !1;
        var h = ["rsPlayBtnIcon", "rsPlayBtn", "rsCloseVideoBtn", "rsCloseVideoIcn"];
        s._p1.click(function(t) {
            if (!s.dragSuccess) {
                var n = e(t.target).attr("class");
                if (-1 !== e.inArray(n, h) && s.toggleVideo()) return !1;
                if (s.st.navigateByClick && !s._h2) {
                    if (e(t.target).closest(".rsNoDrag", s._r1).length) return !0;
                    s._i2(t)
                }
                s.ev.trigger("rsSlideClick")
            }
        }).on("click.rs", "a", function() {
            return !s.dragSuccess && (s._h2 = !0, void setTimeout(function() {
                s._h2 = !1
            }, 3))
        }), s.ev.trigger("rsAfterInit")
    }
    e.rsModules || (e.rsModules = {
        uid: 0
    }), t.prototype = {
        constructor: t,
        _i2: function(e) {
            e = e[this._h ? "pageX" : "pageY"] - this._j2, e >= this._q ? this.next() : 0 > e && this.prev()
        },
        _t: function() {
            var e;
            e = this.st.numImagesToPreload, (this._z = this.st.loop) && (2 === this.numSlides ? (this._z = !1, this.st.loopRewind = !0) : 2 > this.numSlides && (this.st.loopRewind = this._z = !1)), this._z && 0 < e && (4 >= this.numSlides ? e = 1 : this.st.numImagesToPreload > (this.numSlides - 1) / 2 && (e = Math.floor((this.numSlides - 1) / 2))), this._y = e
        },
        _s: function(t, n) {
            function i(e, t) {
                if (t ? a.images.push(e.attr(t)) : a.images.push(e.text()), l) {
                    l = !1, a.caption = "src" === t ? e.attr("alt") : e.contents(), a.image = a.images[0], a.videoURL = e.attr("data-rsVideo");
                    var n = e.attr("data-rsw"),
                        i = e.attr("data-rsh");
                    "undefined" != typeof n && !1 !== n && "undefined" != typeof i && !1 !== i ? (a.iW = parseInt(n, 10), a.iH = parseInt(i, 10)) : r.st.imgWidth && r.st.imgHeight && (a.iW = r.st.imgWidth, a.iH = r.st.imgHeight)
                }
            }
            var o, s, r = this,
                a = {},
                l = !0;
            if (t = e(t), r._k2 = t, r.ev.trigger("rsBeforeParseNode", [t, a]), !a.stopParsing) return t = r._k2, a.id = r._r, a.contentAdded = !1, r._r++, a.images = [], a.isBig = !1, a.hasCover || (t.hasClass("rsImg") ? (s = t, o = !0) : (s = t.find(".rsImg"), s.length && (o = !0)), o ? (a.bigImage = s.eq(0).attr("data-rsBigImg"), s.each(function() {
                var t = e(this);
                t.is("a") ? i(t, "href") : t.is("img") ? i(t, "src") : i(t)
            })) : t.is("img") && (t.addClass("rsImg rsMainSlideImage"), i(t, "src"))), s = t.find(".rsCaption"), s.length && (a.caption = s.remove()), a.content = t, r.ev.trigger("rsAfterParseNode", [t, a]), n && r.slides.push(a), 0 === a.images.length && (a.isLoaded = !0, a.isRendered = !1, a.isLoading = !1, a.images = null), a
        },
        _b2: function() {
            var e, t, n = this,
                i = function(e) {
                    37 === e ? n.prev() : 39 === e && n.next()
                };
            n._b.on("keydown" + n.ns, function(o) {
                n._l2 || (t = o.keyCode, 37 !== t && 39 !== t || e) || (i(t), e = setInterval(function() {
                    i(t)
                }, 700))
            }).on("keyup" + n.ns, function() {
                e && (clearInterval(e), e = null)
            })
        },
        goTo: function(e, t) {
            e !== this.currSlideId && this._m2(e, this.st.transitionSpeed, !0, !t)
        },
        destroy: function(t) {
            this.ev.trigger("rsBeforeDestroy"), this._b.off("keydown" + this.ns + " keyup" + this.ns + " " + this._k1 + " " + this._l1), this._p1.off(this._j1 + " click"), this.slider.data("royalSlider", null), e.removeData(this.slider, "royalSlider"), e(window).off("resize" + this.ns), t && this.slider.remove(), this.ev = this.slider = this.slides = null
        },
        _n2: function(t, n) {
            function i(n, i, r) {
                n.isAdded ? (o(i, n), s(i, n)) : (r || (r = d.slidesJQ[i]), n.holder ? r = n.holder : (r = d.slidesJQ[i] = e(r), n.holder = r), n.appendOnLoaded = !1, s(i, n, r), o(i, n), d._p2(n, r, t), n.isAdded = !0)
            }

            function o(e, n) {
                n.contentAdded || (d.setItemHtml(n, t), t || (n.contentAdded = !0))
            }

            function s(e, t, n) {
                d._l && (n || (n = d.slidesJQ[e]), n.css(d._i, (e + d._d1 + h) * d._w))
            }

            function r(e) {
                if (c) {
                    if (e > u - 1) return r(e - u);
                    if (0 > e) return r(u + e)
                }
                return e
            }
            var a, l, d = this,
                c = d._z,
                u = d.numSlides;
            if (!isNaN(n)) return r(n);
            var h, f, p = d.currSlideId,
                m = t ? Math.abs(d._o2 - d.currSlideId) >= d.numSlides - 1 ? 0 : 1 : d._y,
                g = Math.min(2, m),
                v = !1,
                b = !1;
            for (l = p; l < p + 1 + g; l++)
                if (f = r(l), (a = d.slides[f]) && (!a.isAdded || !a.positionSet)) {
                    v = !0;
                    break
                }
            for (l = p - 1; l > p - 1 - g; l--)
                if (f = r(l), (a = d.slides[f]) && (!a.isAdded || !a.positionSet)) {
                    b = !0;
                    break
                }
            if (v)
                for (l = p; l < p + m + 1; l++) f = r(l), h = Math.floor((d._u - (p - l)) / d.numSlides) * d.numSlides, (a = d.slides[f]) && i(a, f);
            if (b)
                for (l = p - 1; l > p - 1 - m; l--) f = r(l), h = Math.floor((d._u - (p - l)) / u) * u, (a = d.slides[f]) && i(a, f);
            if (!t)
                for (g = r(p - m), p = r(p + m), m = g > p ? 0 : g, l = 0; l < u; l++) g > p && l > g - 1 || !(l < m || l > p) || (a = d.slides[l]) && a.holder && (a.holder.detach(), a.isAdded = !1)
        },
        setItemHtml: function(t, n) {
            var i = this,
                o = function() {
                    if (t.images) {
                        if (!t.isLoading) {
                            var n, o;
                            if (t.content.hasClass("rsImg") ? (n = t.content, o = !0) : n = t.content.find(".rsImg:not(img)"), n && !n.is("img") && n.each(function() {
                                    var n = e(this),
                                        i = '<img class="rsImg" src="' + (n.is("a") ? n.attr("href") : n.text()) + '" />';
                                    o ? t.content = e(i) : n.replaceWith(i)
                                }), n = o ? t.content : t.content.find("img.rsImg"), d(), n.eq(0).addClass("rsMainSlideImage"), t.iW && t.iH && (t.isLoaded || i._q2(t), a()), t.isLoading = !0, t.isBig) e("<img />").on("load.rs error.rs", function() {
                                e(this).off("load.rs error.rs"), s([this], !0)
                            }).attr("src", t.image);
                            else {
                                t.loaded = [], t.numStartedLoad = 0, n = function() {
                                    e(this).off("load.rs error.rs"), t.loaded.push(this), t.loaded.length === t.numStartedLoad && s(t.loaded, !1)
                                };
                                for (var r = 0; r < t.images.length; r++) {
                                    var l = e("<img />");
                                    t.numStartedLoad++, l.on("load.rs error.rs", n).attr("src", t.images[r])
                                }
                            }
                        }
                    } else t.isRendered = !0, t.isLoaded = !0, t.isLoading = !1, a(!0)
                },
                s = function(e, n) {
                    if (e.length) {
                        var i = e[0];
                        if (n !== t.isBig)(i = t.holder.children()) && 1 < i.length && c();
                        else if (t.iW && t.iH) r();
                        else if (t.iW = i.width, t.iH = i.height, t.iW && t.iH) r();
                        else {
                            var o = new Image;
                            o.onload = function() {
                                o.width ? (t.iW = o.width, t.iH = o.height, r()) : setTimeout(function() {
                                    o.width && (t.iW = o.width, t.iH = o.height), r()
                                }, 1e3)
                            }, o.src = i.src
                        }
                    } else r()
                },
                r = function() {
                    t.isLoaded = !0, t.isLoading = !1, a(), c(), l()
                },
                a = function() {
                    if (!t.isAppended && i.ev) {
                        var e = i.st.visibleNearby,
                            o = t.id - i._o;
                        n || t.appendOnLoaded || !i.st.fadeinLoadedSlide || 0 !== o && (!(e || i._r2 || i._l2) || -1 !== o && 1 !== o) || (e = {
                            visibility: "visible",
                            opacity: 0
                        }, e[i._g + "transition"] = "opacity 400ms ease-in-out", t.content.css(e), setTimeout(function() {
                            t.content.css("opacity", 1)
                        }, 16)), t.holder.find(".rsPreloader").length ? t.holder.append(t.content) : t.holder.html(t.content), t.isAppended = !0, t.isLoaded && (i._q2(t), l()), t.sizeReady || (t.sizeReady = !0, setTimeout(function() {
                            i.ev.trigger("rsMaybeSizeReady", t)
                        }, 100))
                    }
                },
                l = function() {
                    !t.loadedTriggered && i.ev && (t.isLoaded = t.loadedTriggered = !0, t.holder.trigger("rsAfterContentSet"), i.ev.trigger("rsAfterContentSet", t))
                },
                d = function() {
                    i.st.usePreloader && t.holder.html(i._q1.clone())
                },
                c = function() {
                    if (i.st.usePreloader) {
                        var e = t.holder.find(".rsPreloader");
                        e.length && e.remove()
                    }
                };
            t.isLoaded ? a() : n ? !i._l && t.images && t.iW && t.iH ? o() : (t.holder.isWaiting = !0, d(), t.holder.slideId = -99) : o()
        },
        _p2: function(e) {
            this._p1.append(e.holder), e.appendOnLoaded = !1
        },
        _g2: function(t, n) {
            var i, o = this,
                s = "touchstart" === t.type;
            if (o._s2 = s, o.ev.trigger("rsDragStart"), e(t.target).closest(".rsNoDrag", o._r1).length) return o.dragSuccess = !1, !0;
            if (!n && o._r2 && (o._t2 = !0, o._u2()), o.dragSuccess = !1, o._l2) s && (o._v2 = !0);
            else {
                if (s && (o._v2 = !1), o._w2(), s) {
                    var r = t.originalEvent.touches;
                    if (!(r && 0 < r.length)) return;
                    i = r[0], 1 < r.length && (o._v2 = !0)
                } else t.preventDefault(), i = t, o.msEnabled && (i = i.originalEvent);
                o._l2 = !0, o._b.on(o._k1, function(e) {
                    o._x2(e, n)
                }).on(o._l1, function(e) {
                    o._y2(e, n)
                }), o._z2 = "", o._a3 = !1, o._b3 = i.pageX, o._c3 = i.pageY, o._d3 = o._v = (n ? o._e3 : o._h) ? i.pageX : i.pageY, o._f3 = 0, o._g3 = 0, o._h3 = n ? o._i3 : o._p, o._j3 = (new Date).getTime(), s && o._e1.on(o._m1, function(e) {
                    o._y2(e, n)
                })
            }
        },
        _k3: function(e, t) {
            if (this._l3) {
                var n = this._m3,
                    i = e.pageX - this._b3,
                    o = e.pageY - this._c3,
                    s = this._h3 + i,
                    r = this._h3 + o,
                    a = t ? this._e3 : this._h,
                    s = a ? s : r,
                    r = this._z2;
                this._a3 = !0, this._b3 = e.pageX, this._c3 = e.pageY, "x" === r && 0 !== i ? this._f3 = 0 < i ? 1 : -1 : "y" === r && 0 !== o && (this._g3 = 0 < o ? 1 : -1), r = a ? this._b3 : this._c3, i = a ? i : o, t ? s > this._n3 ? s = this._h3 + i * this._n1 : s < this._o3 && (s = this._h3 + i * this._n1) : this._z || (0 >= this.currSlideId && 0 < r - this._d3 && (s = this._h3 + i * this._n1), this.currSlideId >= this.numSlides - 1 && 0 > r - this._d3 && (s = this._h3 + i * this._n1)), this._h3 = s, 200 < n - this._j3 && (this._j3 = n, this._v = r), t ? this._q3(this._h3) : this._l && this._p3(this._h3)
            }
        },
        _x2: function(e, t) {
            var n, i = this,
                o = "touchmove" === e.type;
            if (!i._s2 || o) {
                if (o) {
                    if (i._r3) return;
                    var s = e.originalEvent.touches;
                    if (!s) return;
                    if (1 < s.length) return;
                    n = s[0]
                } else n = e, i.msEnabled && (n = n.originalEvent);
                if (i._a3 || (i._e && (t ? i._s3 : i._p1).css(i._g + i._u1, "0s"), function r() {
                        i._l2 && (i._t3 = requestAnimationFrame(r), i._u3 && i._k3(i._u3, t))
                    }()), i._l3) e.preventDefault(), i._m3 = (new Date).getTime(), i._u3 = n;
                else if (s = t ? i._e3 : i._h, n = Math.abs(n.pageX - i._b3) - Math.abs(n.pageY - i._c3) - (s ? -7 : 7), 7 < n) {
                    if (s) e.preventDefault(), i._z2 = "x";
                    else if (o) return void i._v3();
                    i._l3 = !0
                } else if (-7 > n) {
                    if (s) {
                        if (o) return void i._v3()
                    } else e.preventDefault(), i._z2 = "y";
                    i._l3 = !0
                }
            }
        },
        _v3: function() {
            this._r3 = !0, this._a3 = this._l2 = !1, this._y2()
        },
        _y2: function(t, n) {
            function i(e) {
                return 100 > e ? 100 : 500 < e ? 500 : e
            }

            function o(e, t) {
                (d._l || n) && (a = (-d._u - d._d1) * d._w, l = Math.abs(d._p - a), d._c = l / t, e && (d._c += 250), d._c = i(d._c), d._x3(a, !1))
            }
            var s, r, a, l, d = this;
            if (r = "touchend" === t.type || "touchcancel" === t.type, !d._s2 || r)
                if (d._s2 = !1, d.ev.trigger("rsDragRelease"), d._u3 = null, d._l2 = !1, d._r3 = !1, d._l3 = !1, d._m3 = 0, cancelAnimationFrame(d._t3), d._a3 && (n ? d._q3(d._h3) : d._l && d._p3(d._h3)), d._b.off(d._k1).off(d._l1), r && d._e1.off(d._m1), d._i1(), !d._a3 && !d._v2 && n && d._w3) {
                    var c = e(t.target).closest(".rsNavItem");
                    c.length && d.goTo(c.index())
                } else {
                    if (s = n ? d._e3 : d._h, !d._a3 || "y" === d._z2 && s || "x" === d._z2 && !s) {
                        if (n || !d._t2) return d._t2 = !1, void(d.dragSuccess = !1);
                        if (d._t2 = !1, d.st.navigateByClick) return d._i2(d.msEnabled ? t.originalEvent : t), void(d.dragSuccess = !0);
                        d.dragSuccess = !0
                    } else d.dragSuccess = !0;
                    d._t2 = !1, d._z2 = "";
                    var u = d.st.minSlideOffset;
                    r = r ? t.originalEvent.changedTouches[0] : d.msEnabled ? t.originalEvent : t;
                    var h = s ? r.pageX : r.pageY,
                        f = d._d3;
                    r = d._v;
                    var p = d.currSlideId,
                        m = d.numSlides,
                        g = s ? d._f3 : d._g3,
                        v = d._z;
                    if (Math.abs(h - f), s = h - r, r = (new Date).getTime() - d._j3, r = Math.abs(s) / r, 0 === g || 1 >= m) o(!0, r);
                    else {
                        if (!v && !n)
                            if (0 >= p) {
                                if (0 < g) return void o(!0, r)
                            } else if (p >= m - 1 && 0 > g) return void o(!0, r);
                        if (n) {
                            if (a = d._i3, a > d._n3) a = d._n3;
                            else if (a < d._o3) a = d._o3;
                            else {
                                if (u = r * r / .006, c = -d._i3, h = d._y3 - d._z3 + d._i3, 0 < s && u > c ? (c += d._z3 / (15 / (.003 * (u / r))), r = r * c / u, u = c) : 0 > s && u > h && (h += d._z3 / (15 / (.003 * (u / r))), r = r * h / u, u = h), c = Math.max(Math.round(r / .003), 50), a += u * (0 > s ? -1 : 1), a > d._n3) return void d._a4(a, c, !0, d._n3, 200);
                                if (a < d._o3) return void d._a4(a, c, !0, d._o3, 200)
                            }
                            d._a4(a, c, !0)
                        } else f + u < h ? 0 > g ? o(!1, r) : d._m2("prev", i(Math.abs(d._p - (-d._u - d._d1 + 1) * d._w) / r), !1, !0, !0) : f - u > h ? 0 < g ? o(!1, r) : d._m2("next", i(Math.abs(d._p - (-d._u - d._d1 - 1) * d._w) / r), !1, !0, !0) : o(!1, r)
                    }
                }
        },
        _p3: function(e) {
            e = this._p = e, this._e ? this._p1.css(this._x1, this._y1 + (this._h ? e + this._z1 + 0 : 0 + this._z1 + e) + this._a2) : this._p1.css(this._h ? this._x1 : this._w1, e)
        },
        updateSliderSize: function(e) {
            var t, n;
            if (this.st.autoScaleSlider) {
                var i = this.st.autoScaleSliderWidth,
                    o = this.st.autoScaleSliderHeight;
                this.st.autoScaleHeight ? (t = this.slider.width(), t != this.width && (this.slider.css("height", t * (o / i)), t = this.slider.width()), n = this.slider.height()) : (n = this.slider.height(), n != this.height && (this.slider.css("width", n * (i / o)), n = this.slider.height()), t = this.slider.width())
            } else t = this.slider.width(), n = this.slider.height();
            if (e || t != this.width || n != this.height) {
                for (this.width = t, this.height = n, this._b4 = t, this._c4 = n, this.ev.trigger("rsBeforeSizeSet"), this.ev.trigger("rsAfterSizePropSet"), this._e1.css({
                        width: this._b4,
                        height: this._c4
                    }), this._w = (this._h ? this._b4 : this._c4) + this.st.slidesSpacing, this._d4 = this.st.imageScalePadding, t = 0; t < this.slides.length; t++) e = this.slides[t], e.positionSet = !1, e && e.images && e.isLoaded && (e.isRendered = !1, this._q2(e));
                if (this._e4)
                    for (t = 0; t < this._e4.length; t++) e = this._e4[t], e.holder.css(this._i, (e.id + this._d1) * this._w);
                this._n2(), this._l && (this._e && this._p1.css(this._g + "transition-duration", "0s"), this._p3((-this._u - this._d1) * this._w)), this.ev.trigger("rsOnUpdateNav")
            }
            this._j2 = this._e1.offset(), this._j2 = this._j2[this._i]
        },
        appendSlide: function(e, t) {
            var n = this._s(e);
            (isNaN(t) || t > this.numSlides) && (t = this.numSlides), this.slides.splice(t, 0, n), this.slidesJQ.splice(t, 0, '<div style="' + (this._l ? "position:absolute;" : this._n) + '" class="rsSlide"></div>'), t < this.currSlideId && this.currSlideId++, this.ev.trigger("rsOnAppendSlide", [n, t]), this._f4(t), t === this.currSlideId && this.ev.trigger("rsAfterSlideChange")
        },
        removeSlide: function(e) {
            var t = this.slides[e];
            t && (t.holder && t.holder.remove(), e < this.currSlideId && this.currSlideId--, this.slides.splice(e, 1), this.slidesJQ.splice(e, 1), this.ev.trigger("rsOnRemoveSlide", [e]), this._f4(e), e === this.currSlideId && this.ev.trigger("rsAfterSlideChange"))
        },
        _f4: function() {
            var e = this,
                t = e.numSlides,
                t = 0 >= e._u ? 0 : Math.floor(e._u / t);
            for (e.numSlides = e.slides.length, 0 === e.numSlides ? (e.currSlideId = e._d1 = e._u = 0, e.currSlide = e._g4 = null) : e._u = t * e.numSlides + e.currSlideId, t = 0; t < e.numSlides; t++) e.slides[t].id = t;
            e.currSlide = e.slides[e.currSlideId], e._r1 = e.slidesJQ[e.currSlideId], e.currSlideId >= e.numSlides ? e.goTo(e.numSlides - 1) : 0 > e.currSlideId && e.goTo(0), e._t(), e._l && e._z && e._p1.css(e._g + e._u1, "0ms"), e._h4 && clearTimeout(e._h4), e._h4 = setTimeout(function() {
                e._l && e._p3((-e._u - e._d1) * e._w), e._n2(), e._l || e._r1.css({
                    display: "block",
                    opacity: 1
                })
            }, 14), e.ev.trigger("rsOnUpdateNav")
        },
        _i1: function() {
            this._f1 && this._l && (this._g1 ? this._e1.css("cursor", this._g1) : (this._e1.removeClass("grabbing-cursor"), this._e1.addClass("grab-cursor")))
        },
        _w2: function() {
            this._f1 && this._l && (this._h1 ? this._e1.css("cursor", this._h1) : (this._e1.removeClass("grab-cursor"), this._e1.addClass("grabbing-cursor")))
        },
        next: function(e) {
            this._m2("next", this.st.transitionSpeed, !0, !e)
        },
        prev: function(e) {
            this._m2("prev", this.st.transitionSpeed, !0, !e)
        },
        _m2: function(e, t, n, i, o) {
            var s, r, a, l = this;
            if (l.ev.trigger("rsBeforeMove", [e, i]), a = "next" === e ? l.currSlideId + 1 : "prev" === e ? l.currSlideId - 1 : e = parseInt(e, 10), !l._z) {
                if (0 > a) return void l._i4("left", !i);
                if (a >= l.numSlides) return void l._i4("right", !i)
            }
            l._r2 && (l._u2(!0), n = !1), r = a - l.currSlideId, a = l._o2 = l.currSlideId;
            var d = l.currSlideId + r;
            i = l._u;
            var c;
            l._z ? (d = l._n2(!1, d), i += r) : i = d, l._o = d, l._g4 = l.slidesJQ[l.currSlideId], l._u = i, l.currSlideId = l._o, l.currSlide = l.slides[l.currSlideId], l._r1 = l.slidesJQ[l.currSlideId];
            var d = l.st.slidesDiff,
                u = Boolean(0 < r);
            r = Math.abs(r);
            var h = Math.floor(a / l._y),
                f = Math.floor((a + (u ? d : -d)) / l._y),
                h = (u ? Math.max(h, f) : Math.min(h, f)) * l._y + (u ? l._y - 1 : 0);
            if (h > l.numSlides - 1 ? h = l.numSlides - 1 : 0 > h && (h = 0), a = u ? h - a : a - h, a > l._y && (a = l._y), r > a + d)
                for (l._d1 += (r - (a + d)) * (u ? -1 : 1), t *= 1.4, a = 0; a < l.numSlides; a++) l.slides[a].positionSet = !1;
            l._c = t, l._n2(!0), o || (c = !0), s = (-i - l._d1) * l._w, c ? setTimeout(function() {
                l._j4 = !1, l._x3(s, e, !1, n), l.ev.trigger("rsOnUpdateNav")
            }, 0) : (l._x3(s, e, !1, n), l.ev.trigger("rsOnUpdateNav"))
        },
        _f2: function() {
            this.st.arrowsNav && (1 >= this.numSlides ? (this._c2.css("display", "none"), this._d2.css("display", "none")) : (this._c2.css("display", "block"), this._d2.css("display", "block"), !this._z && !this.st.loopRewind && (0 === this.currSlideId ? this._c2.addClass("rsArrowDisabled") : this._c2.removeClass("rsArrowDisabled"), this.currSlideId === this.numSlides - 1 ? this._d2.addClass("rsArrowDisabled") : this._d2.removeClass("rsArrowDisabled"))))
        },
        _x3: function(t, n, i, o, s) {
            function r() {
                var e;
                a && (e = a.data("rsTimeout")) && (a !== l && a.css({
                    opacity: 0,
                    display: "none",
                    zIndex: 0
                }), clearTimeout(e), a.data("rsTimeout", "")), (e = l.data("rsTimeout")) && (clearTimeout(e), l.data("rsTimeout", ""))
            }
            var a, l, d = this,
                c = {};
            isNaN(d._c) && (d._c = 400), d._p = d._h3 = t, d.ev.trigger("rsBeforeAnimStart"), d._e ? d._l ? (d._c = parseInt(d._c, 10), i = d._g + d._v1, c[d._g + d._u1] = d._c + "ms", c[i] = o ? e.rsCSS3Easing[d.st.easeInOut] : e.rsCSS3Easing[d.st.easeOut], d._p1.css(c), o || !d.hasTouch ? setTimeout(function() {
                d._p3(t)
            }, 5) : d._p3(t)) : (d._c = d.st.transitionSpeed, a = d._g4, l = d._r1, l.data("rsTimeout") && l.css("opacity", 0), r(), a && a.data("rsTimeout", setTimeout(function() {
                c[d._g + d._u1] = "0ms", c.zIndex = 0, c.display = "none", a.data("rsTimeout", ""), a.css(c), setTimeout(function() {
                    a.css("opacity", 0)
                }, 16)
            }, d._c + 60)), c.display = "block", c.zIndex = d._m, c.opacity = 0, c[d._g + d._u1] = "0ms", c[d._g + d._v1] = e.rsCSS3Easing[d.st.easeInOut], l.css(c), l.data("rsTimeout", setTimeout(function() {
                l.css(d._g + d._u1, d._c + "ms"), l.data("rsTimeout", setTimeout(function() {
                    l.css("opacity", 1), l.data("rsTimeout", "")
                }, 20))
            }, 20))) : d._l ? (c[d._h ? d._x1 : d._w1] = t + "px", d._p1.animate(c, d._c, o ? d.st.easeInOut : d.st.easeOut)) : (a = d._g4, l = d._r1, l.stop(!0, !0).css({
                opacity: 0,
                display: "block",
                zIndex: d._m
            }), d._c = d.st.transitionSpeed, l.animate({
                opacity: 1
            }, d._c, d.st.easeInOut), r(), a && a.data("rsTimeout", setTimeout(function() {
                a.stop(!0, !0).css({
                    opacity: 0,
                    display: "none",
                    zIndex: 0
                })
            }, d._c + 60))), d._r2 = !0, d.loadingTimeout && clearTimeout(d.loadingTimeout), d.loadingTimeout = s ? setTimeout(function() {
                d.loadingTimeout = null, s.call()
            }, d._c + 60) : setTimeout(function() {
                d.loadingTimeout = null, d._k4(n)
            }, d._c + 60)
        },
        _u2: function(e) {
            if (this._r2 = !1, clearTimeout(this.loadingTimeout), this._l)
                if (this._e) {
                    if (!e) {
                        e = this._p;
                        var t = this._h3 = this._l4();
                        this._p1.css(this._g + this._u1, "0ms"), e !== t && this._p3(t)
                    }
                } else this._p1.stop(!0), this._p = parseInt(this._p1.css(this._x1), 10);
            else 20 < this._m ? this._m = 10 : this._m++
        },
        _l4: function() {
            var e = window.getComputedStyle(this._p1.get(0), null).getPropertyValue(this._g + "transform").replace(/^matrix\(/i, "").split(/, |\)$/g),
                t = 0 === e[0].indexOf("matrix3d");
            return parseInt(e[this._h ? t ? 12 : 4 : t ? 13 : 5], 10)
        },
        _m4: function(e, t) {
            return this._e ? this._y1 + (t ? e + this._z1 + 0 : 0 + this._z1 + e) + this._a2 : e
        },
        _k4: function() {
            this._l || (this._r1.css("z-index", 0), this._m = 10), this._r2 = !1, this.staticSlideId = this.currSlideId, this._n2(), this._n4 = !1, this.ev.trigger("rsAfterSlideChange")
        },
        _i4: function(e, t) {
            var n = this,
                i = (-n._u - n._d1) * n._w;
            if (0 !== n.numSlides && !n._r2)
                if (n.st.loopRewind) n.goTo("left" === e ? n.numSlides - 1 : 0, t);
                else if (n._l) {
                n._c = 200;
                var o = function() {
                    n._r2 = !1
                };
                n._x3(i + ("left" === e ? 30 : -30), "", !1, !0, function() {
                    n._r2 = !1, n._x3(i, "", !1, !0, o)
                })
            }
        },
        _q2: function(e) {
            if (!e.isRendered) {
                var t, n, i = e.content,
                    o = "rsMainSlideImage",
                    s = this.st.imageAlignCenter,
                    r = this.st.imageScaleMode;
                if (e.videoURL && (o = "rsVideoContainer", "fill" !== r ? t = !0 : (n = i, n.hasClass(o) || (n = n.find("." + o)), n.css({
                        width: "100%",
                        height: "100%"
                    }), o = "rsMainSlideImage")), i.hasClass(o) || (i = i.find("." + o)), i) {
                    var a = e.iW,
                        o = e.iH;
                    if (e.isRendered = !0, "none" !== r || s) {
                        e = "fill" !== r ? this._d4 : 0, n = this._b4 - 2 * e;
                        var l, d, c = this._c4 - 2 * e,
                            u = {};
                        "fit-if-smaller" === r && (a > n || o > c) && (r = "fit"), "fill" !== r && "fit" !== r || (l = n / a, d = c / o, l = "fill" == r ? l > d ? l : d : "fit" == r ? l < d ? l : d : 1, a = Math.ceil(a * l, 10), o = Math.ceil(o * l, 10)), "none" !== r && (u.width = a, u.height = o, t && i.find(".rsImg").css({
                            width: "100%",
                            height: "100%"
                        })), s && (u.marginLeft = Math.floor((n - a) / 2) + e, u.marginTop = Math.floor((c - o) / 2) + e), i.css(u)
                    }
                }
            }
        }
    }, e.rsProto = t.prototype, e.fn.royalSlider = function(n) {
        var i = arguments;
        return this.each(function() {
            var o = e(this);
            if ("object" != typeof n && n) {
                if ((o = o.data("royalSlider")) && o[n]) return o[n].apply(o, Array.prototype.slice.call(i, 1))
            } else o.data("royalSlider") || o.data("royalSlider", new t(o, n))
        })
    }, e.fn.royalSlider.defaults = {
        slidesSpacing: 8,
        startSlideId: 0,
        loop: !1,
        loopRewind: !1,
        numImagesToPreload: 4,
        fadeinLoadedSlide: !0,
        slidesOrientation: "horizontal",
        transitionType: "move",
        transitionSpeed: 600,
        controlNavigation: "bullets",
        controlsInside: !0,
        arrowsNav: !0,
        arrowsNavAutoHide: !0,
        navigateByClick: !0,
        randomizeSlides: !1,
        sliderDrag: !0,
        sliderTouch: !0,
        keyboardNavEnabled: !1,
        fadeInAfterLoaded: !0,
        allowCSS3: !0,
        allowCSS3OnWebkit: !0,
        addActiveClass: !1,
        autoHeight: !1,
        easeOut: "easeOutSine",
        easeInOut: "easeInOutSine",
        minSlideOffset: 10,
        imageScaleMode: "fit-if-smaller",
        imageAlignCenter: !0,
        imageScalePadding: 4,
        usePreloader: !0,
        autoScaleSlider: !1,
        autoScaleSliderWidth: 800,
        autoScaleSliderHeight: 400,
        autoScaleHeight: !0,
        arrowsNavHideOnTouch: !1,
        globalCaption: !1,
        slidesDiff: 2
    }, e.rsCSS3Easing = {
        easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
        easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)"
    }, e.extend(jQuery.easing, {
        easeInOutSine: function(e, t, n, i, o) {
            return -i / 2 * (Math.cos(Math.PI * t / o) - 1) + n
        },
        easeOutSine: function(e, t, n, i, o) {
            return i * Math.sin(t / o * (Math.PI / 2)) + n
        },
        easeOutCubic: function(e, t, n, i, o) {
            return i * ((t = t / o - 1) * t * t + 1) + n
        }
    })
}(jQuery, window),
function(e) {
    e.rsProto._o4 = function() {
        var e, t = this;
        t.st.addActiveClass && t.ev.on("rsOnUpdateNav", function() {
            e && clearTimeout(e), e = setTimeout(function() {
                t._g4 && t._g4.removeClass("rsActiveSlide"), t._r1 && t._r1.addClass("rsActiveSlide"), e = null
            }, 50)
        })
    }, e.rsModules.activeClass = e.rsProto._o4
}(jQuery),
function(e) {
    e.extend(e.rsProto, {
        _p4: function() {
            function t() {
                var e = i.currSlide;
                if (i.currSlide && i.currSlide.isLoaded && i._t4 !== e) {
                    if (0 < i._s4.length) {
                        for (n = 0; n < i._s4.length; n++) clearTimeout(i._s4[n]);
                        i._s4 = []
                    }
                    if (0 < i._r4.length) {
                        var t;
                        for (n = 0; n < i._r4.length; n++)(t = i._r4[n]) && (i._e ? (t.block.css(i._g + i._u1, "0s"), t.block.css(t.css)) : t.block.stop(!0).css(t.css), i._t4 = null, e.animBlocksDisplayed = !1);
                        i._r4 = []
                    }
                    e.animBlocks && (e.animBlocksDisplayed = !0, i._t4 = e, i._u4(e.animBlocks))
                }
            }
            var n, i = this;
            i._q4 = {
                fadeEffect: !0,
                moveEffect: "top",
                moveOffset: 20,
                speed: 400,
                easing: "easeOutSine",
                delay: 200
            }, i.st.block = e.extend({}, i._q4, i.st.block), i._r4 = [], i._s4 = [], i.ev.on("rsAfterInit", function() {
                t()
            }), i.ev.on("rsBeforeParseNode", function(t, n, i) {
                n = e(n), i.animBlocks = n.find(".rsABlock").css("display", "none"), i.animBlocks.length || (i.animBlocks = !!n.hasClass("rsABlock") && n.css("display", "none"))
            }), i.ev.on("rsAfterContentSet", function(e, n) {
                n.id === i.slides[i.currSlideId].id && setTimeout(function() {
                    t()
                }, i.st.fadeinLoadedSlide ? 300 : 0)
            }), i.ev.on("rsAfterSlideChange", function() {
                t()
            })
        },
        _v4: function(e, t) {
            setTimeout(function() {
                e.css(t)
            }, 6)
        },
        _u4: function(t) {
            var n, i, o, s, r, a, l, d = this;
            d._s4 = [], t.each(function(t) {
                n = e(this), i = {}, o = {}, s = null;
                var c = n.attr("data-move-offset"),
                    c = c ? parseInt(c, 10) : d.st.block.moveOffset;
                if (0 < c && ((a = n.data("move-effect")) ? (a = a.toLowerCase(), "none" === a ? a = !1 : "left" !== a && "top" !== a && "bottom" !== a && "right" !== a && (a = d.st.block.moveEffect,
                        "none" === a && (a = !1))) : a = d.st.block.moveEffect, a && "none" !== a)) {
                    var u;
                    u = "right" === a || "left" === a;
                    var h;
                    l = !1, d._e ? (h = 0, r = d._x1) : (u ? isNaN(parseInt(n.css("right"), 10)) ? r = "left" : (r = "right", l = !0) : isNaN(parseInt(n.css("bottom"), 10)) ? r = "top" : (r = "bottom", l = !0), r = "margin-" + r, l && (c = -c), d._e ? h = parseInt(n.css(r), 10) : (h = n.data("rs-start-move-prop"), void 0 === h && (h = parseInt(n.css(r), 10), n.data("rs-start-move-prop", h)))), o[r] = d._m4("top" === a || "left" === a ? h - c : h + c, u), i[r] = d._m4(h, u)
                }(c = n.attr("data-fade-effect")) ? "none" !== c.toLowerCase() && "false" !== c.toLowerCase() || (c = !1): c = d.st.block.fadeEffect, c && (o.opacity = 0, i.opacity = 1), (c || a) && (s = {}, s.hasFade = Boolean(c), Boolean(a) && (s.moveProp = r, s.hasMove = !0), s.speed = n.data("speed"), isNaN(s.speed) && (s.speed = d.st.block.speed), s.easing = n.data("easing"), s.easing || (s.easing = d.st.block.easing), s.css3Easing = e.rsCSS3Easing[s.easing], s.delay = n.data("delay"), isNaN(s.delay) && (s.delay = d.st.block.delay * t)), c = {}, d._e && (c[d._g + d._u1] = "0ms"), c.moveProp = i.moveProp, c.opacity = i.opacity, c.display = "none", d._r4.push({
                    block: n,
                    css: c
                }), d._v4(n, o), d._s4.push(setTimeout(function(e, t, n, i) {
                    return function() {
                        if (e.css("display", "block"), n) {
                            var o = {};
                            if (d._e) {
                                var s = "";
                                n.hasMove && (s += n.moveProp), n.hasFade && (n.hasMove && (s += ", "), s += "opacity"), o[d._g + d._t1] = s, o[d._g + d._u1] = n.speed + "ms", o[d._g + d._v1] = n.css3Easing, e.css(o), setTimeout(function() {
                                    e.css(t)
                                }, 24)
                            } else setTimeout(function() {
                                e.animate(t, n.speed, n.easing)
                            }, 16)
                        }
                        delete d._s4[i]
                    }
                }(n, i, s, t), 6 >= s.delay ? 12 : s.delay))
            })
        }
    }), e.rsModules.animatedBlocks = e.rsProto._p4
}(jQuery),
function(e) {
    e.extend(e.rsProto, {
        _w4: function() {
            var e = this;
            if (e.st.autoHeight) {
                var t, n, i, o = function(o) {
                    i = e.slides[e.currSlideId], (t = i.holder) && (n = t.height()) && void 0 !== n && (e._c4 = n, e._e || !o ? e._e1.css("height", n) : e._e1.stop(!0, !0).animate({
                        height: n
                    }, e.st.transitionSpeed))
                };
                e.ev.on("rsMaybeSizeReady.rsAutoHeight", function(e, t) {
                    i === t && o()
                }), e.ev.on("rsAfterContentSet.rsAutoHeight", function(e, t) {
                    i === t && o()
                }), e.slider.addClass("rsAutoHeight"), e.ev.one("rsAfterInit", function() {
                    setTimeout(function() {
                        o(!1), setTimeout(function() {
                            e.slider.append('<div style="clear:both; float: none;"></div>'), e._e && e._e1.css(e._g + "transition", "height " + e.st.transitionSpeed + "ms ease-in-out")
                        }, 16)
                    }, 16)
                }), e.ev.on("rsBeforeAnimStart", function() {
                    o(!0)
                }), e.ev.on("rsBeforeSizeSet", function() {
                    setTimeout(function() {
                        o(!1)
                    }, 16)
                })
            }
        }
    }), e.rsModules.autoHeight = e.rsProto._w4
}(jQuery),
function(e) {
    e.extend(e.rsProto, {
        _x4: function() {
            var t, n = this;
            n._y4 = {
                enabled: !1,
                stopAtAction: !0,
                pauseOnHover: !0,
                delay: 2e3
            }, !n.st.autoPlay && n.st.autoplay && (n.st.autoPlay = n.st.autoplay), n.st.autoPlay = e.extend({}, n._y4, n.st.autoPlay), n.st.autoPlay.enabled && (n.ev.on("rsBeforeParseNode", function(n, i, o) {
                i = e(i), (t = i.attr("data-rsDelay")) && (o.customDelay = parseInt(t, 10))
            }), n.ev.one("rsAfterInit", function() {
                n._z4()
            }), n.ev.on("rsBeforeDestroy", function() {
                n.stopAutoPlay(), n.slider.off("mouseenter mouseleave"), e(window).off("blur" + n.ns + " focus" + n.ns)
            }))
        },
        _z4: function() {
            var t = this;
            t.startAutoPlay(), t.ev.on("rsAfterContentSet", function(e, n) {
                !t._l2 && !t._r2 && t._a5 && n === t.currSlide && t._b5()
            }), t.ev.on("rsDragRelease", function() {
                t._a5 && t._c5 && (t._c5 = !1, t._b5())
            }), t.ev.on("rsAfterSlideChange", function() {
                t._a5 && t._c5 && (t._c5 = !1, t.currSlide.isLoaded && t._b5())
            }), t.ev.on("rsDragStart", function() {
                t._a5 && (t.st.autoPlay.stopAtAction ? t.stopAutoPlay() : (t._c5 = !0, t._d5()))
            }), t.ev.on("rsBeforeMove", function(e, n, i) {
                t._a5 && (i && t.st.autoPlay.stopAtAction ? t.stopAutoPlay() : (t._c5 = !0, t._d5()))
            }), t._e5 = !1, t.ev.on("rsVideoStop", function() {
                t._a5 && (t._e5 = !1, t._b5())
            }), t.ev.on("rsVideoPlay", function() {
                t._a5 && (t._c5 = !1, t._d5(), t._e5 = !0)
            }), e(window).on("blur" + t.ns, function() {
                t._a5 && (t._c5 = !0, t._d5())
            }).on("focus" + t.ns, function() {
                t._a5 && t._c5 && (t._c5 = !1, t._b5())
            }), t.st.autoPlay.pauseOnHover && (t._f5 = !1, t.slider.hover(function() {
                t._a5 && (t._c5 = !1, t._d5(), t._f5 = !0)
            }, function() {
                t._a5 && (t._f5 = !1, t._b5())
            }))
        },
        toggleAutoPlay: function() {
            this._a5 ? this.stopAutoPlay() : this.startAutoPlay()
        },
        startAutoPlay: function() {
            this._a5 = !0, this.currSlide.isLoaded && this._b5()
        },
        stopAutoPlay: function() {
            this._e5 = this._f5 = this._c5 = this._a5 = !1, this._d5()
        },
        _b5: function() {
            var e = this;
            !e._f5 && !e._e5 && (e._g5 = !0, e._h5 && clearTimeout(e._h5), e._h5 = setTimeout(function() {
                var t;
                !e._z && !e.st.loopRewind && (t = !0, e.st.loopRewind = !0), e.next(!0), t && (e.st.loopRewind = !1)
            }, e.currSlide.customDelay ? e.currSlide.customDelay : e.st.autoPlay.delay))
        },
        _d5: function() {
            !this._f5 && !this._e5 && (this._g5 = !1, this._h5 && (clearTimeout(this._h5), this._h5 = null))
        }
    }), e.rsModules.autoplay = e.rsProto._x4
}(jQuery),
function(e) {
    e.extend(e.rsProto, {
        _i5: function() {
            var t = this;
            "bullets" === t.st.controlNavigation && (t.ev.one("rsAfterPropsSetup", function() {
                t._j5 = !0, t.slider.addClass("rsWithBullets");
                for (var n = '<div class="rsNav rsBullets">', i = 0; i < t.numSlides; i++) n += '<div class="rsNavItem rsBullet"><span></span></div>';
                t._k5 = n = e(n + "</div>"), t._l5 = n.appendTo(t.slider).children(), t._k5.on("click.rs", ".rsNavItem", function() {
                    t._m5 || t.goTo(e(this).index())
                })
            }), t.ev.on("rsOnAppendSlide", function(e, n, i) {
                i >= t.numSlides ? t._k5.append('<div class="rsNavItem rsBullet"><span></span></div>') : t._l5.eq(i).before('<div class="rsNavItem rsBullet"><span></span></div>'), t._l5 = t._k5.children()
            }), t.ev.on("rsOnRemoveSlide", function(e, n) {
                var i = t._l5.eq(n);
                i && i.length && (i.remove(), t._l5 = t._k5.children())
            }), t.ev.on("rsOnUpdateNav", function() {
                var e = t.currSlideId;
                t._n5 && t._n5.removeClass("rsNavSelected"), e = t._l5.eq(e), e.addClass("rsNavSelected"), t._n5 = e
            }))
        }
    }), e.rsModules.bullets = e.rsProto._i5
}(jQuery),
function(e) {
    e.extend(e.rsProto, {
        _o5: function() {
            var t, n, i, o = this;
            if (o._p5 = {
                    enabled: !1,
                    change: !1,
                    prefix: ""
                }, o.st.deeplinking = e.extend({}, o._p5, o.st.deeplinking), o.st.deeplinking.enabled) {
                var s = o.st.deeplinking.change,
                    r = "#" + o.st.deeplinking.prefix,
                    a = function() {
                        var e = window.location.hash;
                        return e && (e = parseInt(e.substring(r.length), 10), 0 <= e) ? e - 1 : -1
                    },
                    l = a(); - 1 !== l && (o.st.startSlideId = l), s && (e(window).on("hashchange" + o.ns, function() {
                    if (!t) {
                        var e = a();
                        0 > e || (e > o.numSlides - 1 && (e = o.numSlides - 1), o.goTo(e))
                    }
                }), o.ev.on("rsBeforeAnimStart", function() {
                    n && clearTimeout(n), i && clearTimeout(i)
                }), o.ev.on("rsAfterSlideChange", function() {
                    n && clearTimeout(n), i && clearTimeout(i), i = setTimeout(function() {
                        t = !0, window.location.replace(("" + window.location).split("#")[0] + r + (o.currSlideId + 1)), n = setTimeout(function() {
                            t = !1, n = null
                        }, 60)
                    }, 400)
                })), o.ev.on("rsBeforeDestroy", function() {
                    n = i = null, s && e(window).off("hashchange" + o.ns)
                })
            }
        }
    }), e.rsModules.deeplinking = e.rsProto._o5
}(jQuery),
function(e, t, n) {
    function i(e) {
        return e = e || location.href, "#" + e.replace(/^[^#]*#?(.*)$/, "$1")
    }
    var o, s = document,
        r = e.event.special,
        a = s.documentMode,
        l = "onhashchange" in t && (a === n || 7 < a);
    e.fn.hashchange = function(e) {
        return e ? this.bind("hashchange", e) : this.trigger("hashchange")
    }, e.fn.hashchange.delay = 50, r.hashchange = e.extend(r.hashchange, {
        setup: function() {
            return !l && void e(o.start)
        },
        teardown: function() {
            return !l && void e(o.stop)
        }
    });
    var d, c = function() {
            var n = i(),
                o = f(u);
            n !== u ? (h(u = n, o), e(t).trigger("hashchange")) : o !== u && (location.href = location.href.replace(/#.*/, "") + o), d = setTimeout(c, e.fn.hashchange.delay)
        },
        r = {},
        u = i(),
        h = a = function(e) {
            return e
        },
        f = a;
    if (r.start = function() {
            d || c()
        }, r.stop = function() {
            d && clearTimeout(d), d = n
        }, t.attachEvent && !t.addEventListener && !l) {
        var p, m;
        r.start = function() {
            p || (m = (m = e.fn.hashchange.src) && m + i(), p = e('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
                m || h(i()), c()
            }).attr("src", m || "javascript:0").insertAfter("body")[0].contentWindow, s.onpropertychange = function() {
                try {
                    "title" === event.propertyName && (p.document.title = s.title)
                } catch (e) {}
            })
        }, r.stop = a, f = function() {
            return i(p.location.href)
        }, h = function(t, n) {
            var i = p.document,
                o = e.fn.hashchange.domain;
            t !== n && (i.title = s.title, i.open(), o && i.write('<script>document.domain="' + o + '"</script>'), i.close(), p.location.hash = t)
        }
    }
    o = r
}(jQuery, this),
function(e) {
    e.extend(e.rsProto, {
        _q5: function() {
            var t = this;
            t._r5 = {
                enabled: !1,
                keyboardNav: !0,
                buttonFS: !0,
                nativeFS: !1,
                doubleTap: !0
            }, t.st.fullscreen = e.extend({}, t._r5, t.st.fullscreen), t.st.fullscreen.enabled && t.ev.one("rsBeforeSizeSet", function() {
                t._s5()
            })
        },
        _s5: function() {
            var t = this;
            if (t._t5 = !t.st.keyboardNavEnabled && t.st.fullscreen.keyboardNav, t.st.fullscreen.nativeFS) {
                t._u5 = {
                    supportsFullScreen: !1,
                    isFullScreen: function() {
                        return !1
                    },
                    requestFullScreen: function() {},
                    cancelFullScreen: function() {},
                    fullScreenEventName: "",
                    prefix: ""
                };
                var n = ["webkit", "moz", "o", "ms", "khtml"];
                if (!t.isAndroid)
                    if ("undefined" != typeof document.cancelFullScreen) t._u5.supportsFullScreen = !0;
                    else
                        for (var i = 0; i < n.length; i++)
                            if (t._u5.prefix = n[i], "undefined" != typeof document[t._u5.prefix + "CancelFullScreen"]) {
                                t._u5.supportsFullScreen = !0;
                                break
                            }
                t._u5.supportsFullScreen ? (t.nativeFS = !0, t._u5.fullScreenEventName = t._u5.prefix + "fullscreenchange" + t.ns, t._u5.isFullScreen = function() {
                    switch (this.prefix) {
                        case "":
                            return document.fullScreen;
                        case "webkit":
                            return document.webkitIsFullScreen;
                        default:
                            return document[this.prefix + "FullScreen"]
                    }
                }, t._u5.requestFullScreen = function(e) {
                    return "" === this.prefix ? e.requestFullScreen() : e[this.prefix + "RequestFullScreen"]()
                }, t._u5.cancelFullScreen = function() {
                    return "" === this.prefix ? document.cancelFullScreen() : document[this.prefix + "CancelFullScreen"]()
                }) : t._u5 = !1
            }
            t.st.fullscreen.buttonFS && (t._v5 = e('<div class="rsFullscreenBtn"><div class="rsFullscreenIcn"></div></div>').appendTo(t._o1).on("click.rs", function() {
                t.isFullscreen ? t.exitFullscreen() : t.enterFullscreen()
            }))
        },
        enterFullscreen: function(t) {
            var n = this;
            if (n._u5) {
                if (!t) return n._b.on(n._u5.fullScreenEventName, function() {
                    n._u5.isFullScreen() ? n.enterFullscreen(!0) : n.exitFullscreen(!0)
                }), void n._u5.requestFullScreen(e("html")[0]);
                n._u5.requestFullScreen(e("html")[0])
            }
            if (!n._w5) {
                n._w5 = !0, n._b.on("keyup" + n.ns + "fullscreen", function(e) {
                    27 === e.keyCode && n.exitFullscreen()
                }), n._t5 && n._b2(), t = e(window), n._x5 = t.scrollTop(), n._y5 = t.scrollLeft(), n._z5 = e("html").attr("style"), n._a6 = e("body").attr("style"), n._b6 = n.slider.attr("style"), e("body, html").css({
                    overflow: "hidden",
                    height: "100%",
                    width: "100%",
                    margin: "0",
                    padding: "0"
                }), n.slider.addClass("rsFullscreen");
                var i;
                for (i = 0; i < n.numSlides; i++) t = n.slides[i], t.isRendered = !1, t.bigImage && (t.isBig = !0, t.isMedLoaded = t.isLoaded, t.isMedLoading = t.isLoading, t.medImage = t.image, t.medIW = t.iW, t.medIH = t.iH, t.slideId = -99, t.bigImage !== t.medImage && (t.sizeType = "big"), t.isLoaded = t.isBigLoaded, t.isLoading = !1, t.image = t.bigImage, t.images[0] = t.bigImage, t.iW = t.bigIW, t.iH = t.bigIH, t.isAppended = t.contentAdded = !1, n._c6(t));
                n.isFullscreen = !0, n._w5 = !1, n.updateSliderSize(), n.ev.trigger("rsEnterFullscreen")
            }
        },
        exitFullscreen: function(t) {
            var n = this;
            if (n._u5) {
                if (!t) return void n._u5.cancelFullScreen(e("html")[0]);
                n._b.off(n._u5.fullScreenEventName)
            }
            if (!n._w5) {
                n._w5 = !0, n._b.off("keyup" + n.ns + "fullscreen"), n._t5 && n._b.off("keydown" + n.ns), e("html").attr("style", n._z5 || ""), e("body").attr("style", n._a6 || "");
                var i;
                for (i = 0; i < n.numSlides; i++) t = n.slides[i], t.isRendered = !1, t.bigImage && (t.isBig = !1, t.slideId = -99, t.isBigLoaded = t.isLoaded, t.isBigLoading = t.isLoading, t.bigImage = t.image, t.bigIW = t.iW, t.bigIH = t.iH, t.isLoaded = t.isMedLoaded, t.isLoading = !1, t.image = t.medImage, t.images[0] = t.medImage, t.iW = t.medIW, t.iH = t.medIH, t.isAppended = t.contentAdded = !1, n._c6(t, !0), t.bigImage !== t.medImage && (t.sizeType = "med"));
                n.isFullscreen = !1, t = e(window), t.scrollTop(n._x5), t.scrollLeft(n._y5), n._w5 = !1, n.slider.removeClass("rsFullscreen"), n.updateSliderSize(), setTimeout(function() {
                    n.updateSliderSize()
                }, 1), n.ev.trigger("rsExitFullscreen")
            }
        },
        _c6: function(t) {
            var n = t.isLoaded || t.isLoading ? '<img class="rsImg rsMainSlideImage" src="' + t.image + '"/>' : '<a class="rsImg rsMainSlideImage" href="' + t.image + '"></a>';
            t.content.hasClass("rsImg") ? t.content = e(n) : t.content.find(".rsImg").eq(0).replaceWith(n), !t.isLoaded && !t.isLoading && t.holder && t.holder.html(t.content)
        }
    }), e.rsModules.fullscreen = e.rsProto._q5
}(jQuery),
function(e) {
    e.extend(e.rsProto, {
        _d6: function() {
            var t = this;
            t.st.globalCaption && (t.ev.on("rsAfterInit", function() {
                t.globalCaption = e('<div class="rsGCaption"></div>').appendTo(t.st.globalCaptionInside ? t._e1 : t.slider), t.globalCaption.html(t.currSlide.caption)
            }), t.ev.on("rsBeforeAnimStart", function() {
                t.globalCaption.html(t.currSlide.caption)
            }))
        }
    }), e.rsModules.globalCaption = e.rsProto._d6
}(jQuery),
function(e) {
    e.extend(e.rsProto, {
        _e6: function() {
            var e = this;
            e.st.navAutoHide && !e.hasTouch && e.ev.one("rsAfterInit", function() {
                if (e._k5) {
                    e._k5.addClass("rsHidden");
                    var t = e.slider;
                    t.one("mousemove.controlnav", function() {
                        e._k5.removeClass("rsHidden")
                    }), t.hover(function() {
                        e._k5.removeClass("rsHidden")
                    }, function() {
                        e._k5.addClass("rsHidden")
                    })
                }
            })
        }
    }), e.rsModules.autoHideNav = e.rsProto._e6
}(jQuery),
function(e) {
    e.extend(e.rsProto, {
        _f6: function() {
            var t = this;
            "tabs" === t.st.controlNavigation && (t.ev.on("rsBeforeParseNode", function(t, n, i) {
                n = e(n), i.thumbnail = n.find(".rsTmb").remove(), i.thumbnail.length ? i.thumbnail = e(document.createElement("div")).append(i.thumbnail).html() : (i.thumbnail = n.attr("data-rsTmb"), i.thumbnail || (i.thumbnail = n.find(".rsImg").attr("data-rsTmb")), i.thumbnail = i.thumbnail ? '<img src="' + i.thumbnail + '"/>' : "")
            }), t.ev.one("rsAfterPropsSetup", function() {
                t._g6()
            }), t.ev.on("rsOnAppendSlide", function(e, n, i) {
                i >= t.numSlides ? t._k5.append('<div class="rsNavItem rsTab">' + n.thumbnail + "</div>") : t._l5.eq(i).before('<div class="rsNavItem rsTab">' + item.thumbnail + "</div>"), t._l5 = t._k5.children()
            }), t.ev.on("rsOnRemoveSlide", function(e, n) {
                var i = t._l5.eq(n);
                i && (i.remove(), t._l5 = t._k5.children())
            }), t.ev.on("rsOnUpdateNav", function() {
                var e = t.currSlideId;
                t._n5 && t._n5.removeClass("rsNavSelected"), e = t._l5.eq(e), e.addClass("rsNavSelected"), t._n5 = e
            }))
        },
        _g6: function() {
            var t, n = this;
            n._j5 = !0, t = '<div class="rsNav rsTabs">';
            for (var i = 0; i < n.numSlides; i++) t += '<div class="rsNavItem rsTab">' + n.slides[i].thumbnail + "</div>";
            t = e(t + "</div>"), n._k5 = t, n._l5 = t.children(".rsNavItem"), n.slider.append(t), n._k5.click(function(t) {
                t = e(t.target).closest(".rsNavItem"), t.length && n.goTo(t.index())
            })
        }
    }), e.rsModules.tabs = e.rsProto._f6
}(jQuery),
function(e) {
    e.extend(e.rsProto, {
        _h6: function() {
            var t = this;
            "thumbnails" === t.st.controlNavigation && (t._i6 = {
                drag: !0,
                touch: !0,
                orientation: "horizontal",
                navigation: !0,
                arrows: !0,
                arrowLeft: null,
                arrowRight: null,
                spacing: 4,
                arrowsAutoHide: !1,
                appendSpan: !1,
                transitionSpeed: 600,
                autoCenter: !0,
                fitInViewport: !0,
                firstMargin: !0,
                paddingTop: 0,
                paddingBottom: 0
            }, t.st.thumbs = e.extend({}, t._i6, t.st.thumbs), t._j6 = !0, !1 === t.st.thumbs.firstMargin ? t.st.thumbs.firstMargin = 0 : !0 === t.st.thumbs.firstMargin && (t.st.thumbs.firstMargin = t.st.thumbs.spacing), t.ev.on("rsBeforeParseNode", function(t, n, i) {
                n = e(n), i.thumbnail = n.find(".rsTmb").remove(), i.thumbnail.length ? i.thumbnail = e(document.createElement("div")).append(i.thumbnail).html() : (i.thumbnail = n.attr("data-rsTmb"), i.thumbnail || (i.thumbnail = n.find(".rsImg").attr("data-rsTmb")), i.thumbnail = i.thumbnail ? '<img src="' + i.thumbnail + '"/>' : "")
            }), t.ev.one("rsAfterPropsSetup", function() {
                t._k6()
            }), t._n5 = null, t.ev.on("rsOnUpdateNav", function() {
                var n = e(t._l5[t.currSlideId]);
                n !== t._n5 && (t._n5 && (t._n5.removeClass("rsNavSelected"), t._n5 = null), t._l6 && t._m6(t.currSlideId), t._n5 = n.addClass("rsNavSelected"))
            }), t.ev.on("rsOnAppendSlide", function(e, n, i) {
                e = "<div" + t._n6 + ' class="rsNavItem rsThumb">' + t._o6 + n.thumbnail + "</div>", i >= t.numSlides ? t._s3.append(e) : t._l5.eq(i).before(e), t._l5 = t._s3.children(), t.updateThumbsSize()
            }), t.ev.on("rsOnRemoveSlide", function(e, n) {
                var i = t._l5.eq(n);
                i && (i.remove(), t._l5 = t._s3.children(), t.updateThumbsSize())
            }))
        },
        _k6: function() {
            var t, n, i = this,
                o = "rsThumbs",
                s = i.st.thumbs,
                r = "",
                a = s.spacing;
            i._j5 = !0, i._e3 = "vertical" !== s.orientation, i._n6 = t = a ? ' style="margin-' + (i._e3 ? "right" : "bottom") + ":" + a + 'px;"' : "", i._i3 = 0, i._p6 = !1, i._m5 = !1, i._l6 = !1, i._q6 = s.arrows && s.navigation, n = i._e3 ? "Hor" : "Ver", i.slider.addClass("rsWithThumbs rsWithThumbs" + n), r += '<div class="rsNav rsThumbs rsThumbs' + n + '"><div class="' + o + 'Container">', i._o6 = s.appendSpan ? '<span class="thumbIco"></span>' : "";
            for (var l = 0; l < i.numSlides; l++) n = i.slides[l], r += "<div" + t + ' class="rsNavItem rsThumb">' + n.thumbnail + i._o6 + "</div>";
            r = e(r + "</div></div>"), t = {}, s.paddingTop && (t[i._e3 ? "paddingTop" : "paddingLeft"] = s.paddingTop), s.paddingBottom && (t[i._e3 ? "paddingBottom" : "paddingRight"] = s.paddingBottom), r.css(t), i._s3 = e(r).find("." + o + "Container"), i._q6 && (o += "Arrow", s.arrowLeft ? i._r6 = s.arrowLeft : (i._r6 = e('<div class="' + o + " " + o + 'Left"><div class="' + o + 'Icn"></div></div>'), r.append(i._r6)), s.arrowRight ? i._s6 = s.arrowRight : (i._s6 = e('<div class="' + o + " " + o + 'Right"><div class="' + o + 'Icn"></div></div>'), r.append(i._s6)), i._r6.click(function() {
                var e = (Math.floor(i._i3 / i._t6) + i._u6) * i._t6;
                i._a4(e > i._n3 ? i._n3 : e)
            }), i._s6.click(function() {
                var e = (Math.floor(i._i3 / i._t6) - i._u6) * i._t6;
                i._a4(e < i._o3 ? i._o3 : e)
            }), s.arrowsAutoHide && !i.hasTouch && (i._r6.css("opacity", 0), i._s6.css("opacity", 0), r.one("mousemove.rsarrowshover", function() {
                i._l6 && (i._r6.css("opacity", 1), i._s6.css("opacity", 1))
            }), r.hover(function() {
                i._l6 && (i._r6.css("opacity", 1), i._s6.css("opacity", 1))
            }, function() {
                i._l6 && (i._r6.css("opacity", 0), i._s6.css("opacity", 0))
            }))), i._k5 = r, i._l5 = i._s3.children(), i.msEnabled && i.st.thumbs.navigation && i._s3.css("-ms-touch-action", i._e3 ? "pan-y" : "pan-x"), i.slider.append(r), i._w3 = !0, i._v6 = a, s.navigation && i._e && i._s3.css(i._g + "transition-property", i._g + "transform"), i._k5.on("click.rs", ".rsNavItem", function() {
                i._m5 || i.goTo(e(this).index())
            }), i.ev.off("rsBeforeSizeSet.thumbs").on("rsBeforeSizeSet.thumbs", function() {
                i._w6 = i._e3 ? i._c4 : i._b4, i.updateThumbsSize(!0)
            })
        },
        updateThumbsSize: function() {
            var e = this,
                t = e._l5.first(),
                n = {},
                i = e._l5.length;
            e._t6 = (e._e3 ? t.outerWidth() : t.outerHeight()) + e._v6, e._y3 = i * e._t6 - e._v6, n[e._e3 ? "width" : "height"] = e._y3 + e._v6, e._z3 = e._e3 ? e._k5.width() : e._k5.height(), e._o3 = -(e._y3 - e._z3) - e.st.thumbs.firstMargin, e._n3 = e.st.thumbs.firstMargin, e._u6 = Math.floor(e._z3 / e._t6), e._y3 < e._z3 ? (e.st.thumbs.autoCenter && e._q3((e._z3 - e._y3) / 2), e.st.thumbs.arrows && e._r6 && (e._r6.addClass("rsThumbsArrowDisabled"), e._s6.addClass("rsThumbsArrowDisabled")), e._l6 = !1, e._m5 = !1, e._k5.off(e._j1)) : e.st.thumbs.navigation && !e._l6 && (e._l6 = !0, !e.hasTouch && e.st.thumbs.drag || e.hasTouch && e.st.thumbs.touch) && (e._m5 = !0, e._k5.on(e._j1, function(t) {
                e._g2(t, !0)
            })), e._e && (n[e._g + "transition-duration"] = "0ms"), e._s3.css(n), e._w3 && (e.isFullscreen || e.st.thumbs.fitInViewport) && (e._e3 ? e._c4 = e._w6 - e._k5.outerHeight() : e._b4 = e._w6 - e._k5.outerWidth())
        },
        setThumbsOrientation: function(e, t) {
            this._w3 && (this.st.thumbs.orientation = e, this._k5.remove(), this.slider.removeClass("rsWithThumbsHor rsWithThumbsVer"), this._k6(), this._k5.off(this._j1), t || this.updateSliderSize(!0))
        },
        _q3: function(e) {
            this._i3 = e, this._e ? this._s3.css(this._x1, this._y1 + (this._e3 ? e + this._z1 + 0 : 0 + this._z1 + e) + this._a2) : this._s3.css(this._e3 ? this._x1 : this._w1, e)
        },
        _a4: function(t, n, i, o, s) {
            var r = this;
            if (r._l6) {
                n || (n = r.st.thumbs.transitionSpeed), r._i3 = t, r._x6 && clearTimeout(r._x6), r._p6 && (r._e || r._s3.stop(), i = !0);
                var a = {};
                r._p6 = !0, r._e ? (a[r._g + "transition-duration"] = n + "ms", a[r._g + "transition-timing-function"] = i ? e.rsCSS3Easing[r.st.easeOut] : e.rsCSS3Easing[r.st.easeInOut], r._s3.css(a), r._q3(t)) : (a[r._e3 ? r._x1 : r._w1] = t + "px", r._s3.animate(a, n, i ? "easeOutCubic" : r.st.easeInOut)), o && (r._i3 = o), r._y6(), r._x6 = setTimeout(function() {
                    r._p6 = !1, s && (r._a4(o, s, !0), s = null)
                }, n)
            }
        },
        _y6: function() {
            this._q6 && (this._i3 === this._n3 ? this._r6.addClass("rsThumbsArrowDisabled") : this._r6.removeClass("rsThumbsArrowDisabled"), this._i3 === this._o3 ? this._s6.addClass("rsThumbsArrowDisabled") : this._s6.removeClass("rsThumbsArrowDisabled"))
        },
        _m6: function(e, t) {
            var n, i = 0,
                o = e * this._t6 + 2 * this._t6 - this._v6 + this._n3,
                s = Math.floor(this._i3 / this._t6);
            this._l6 && (this._j6 && (t = !0, this._j6 = !1), o + this._i3 > this._z3 ? (e === this.numSlides - 1 && (i = 1), s = -e + this._u6 - 2 + i, n = s * this._t6 + this._z3 % this._t6 + this._v6 - this._n3) : 0 !== e ? (e - 1) * this._t6 <= -this._i3 + this._n3 && e - 1 <= this.numSlides - this._u6 && (n = (-e + 1) * this._t6 + this._n3) : n = this._n3, n !== this._i3 && (i = void 0 === n ? this._i3 : n, i > this._n3 ? this._q3(this._n3) : i < this._o3 ? this._q3(this._o3) : void 0 !== n && (t ? this._q3(n) : this._a4(n))), this._y6())
        }
    }), e.rsModules.thumbnails = e.rsProto._h6
}(jQuery),
function(e) {
    e.extend(e.rsProto, {
        _z6: function() {
            var t = this;
            t._a7 = {
                autoHideArrows: !0,
                autoHideControlNav: !1,
                autoHideBlocks: !1,
                autoHideCaption: !1,
                disableCSS3inFF: !0,
                youTubeCode: '<iframe src="http://www.youtube.com/embed/%id%?rel=1&autoplay=1&showinfo=0&autoplay=1&wmode=transparent" frameborder="no"></iframe>',
                vimeoCode: '<iframe src="http://player.vimeo.com/video/%id%?byline=0&amp;portrait=0&amp;autoplay=1" frameborder="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
            }, t.st.video = e.extend({}, t._a7, t.st.video), t.ev.on("rsBeforeSizeSet", function() {
                t._b7 && setTimeout(function() {
                    var e = t._r1,
                        e = e.hasClass("rsVideoContainer") ? e : e.find(".rsVideoContainer");
                    t._c7 && t._c7.css({
                        width: e.width(),
                        height: e.height()
                    })
                }, 32)
            });
            var n = t._a.mozilla;
            t.ev.on("rsAfterParseNode", function(i, o, s) {
                if (i = e(o), s.videoURL) {
                    t.st.video.disableCSS3inFF && n && (t._e = t._f = !1), o = e('<div class="rsVideoContainer"></div>');
                    var r = e('<div class="rsBtnCenterer"><div class="rsPlayBtn"><div class="rsPlayBtnIcon"></div></div></div>');
                    i.hasClass("rsImg") ? s.content = o.append(i).append(r) : s.content.find(".rsImg").wrap(o).after(r)
                }
            }), t.ev.on("rsAfterSlideChange", function() {
                t.stopVideo()
            })
        },
        toggleVideo: function() {
            return this._b7 ? this.stopVideo() : this.playVideo()
        },
        playVideo: function() {
            var t = this;
            if (!t._b7) {
                var n = t.currSlide;
                if (!n.videoURL) return !1;
                var i, o, s = t._d7 = n.content,
                    n = n.videoURL;
                return n.match(/youtu\.be/i) || n.match(/youtube\.com/i) ? (o = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/, (o = n.match(o)) && 11 == o[7].length && (i = o[7]), void 0 !== i && (t._c7 = t.st.video.youTubeCode.replace("%id%", i))) : n.match(/vimeo\.com/i) && (o = /(www\.)?vimeo.com\/(\d+)($|\/)/, (o = n.match(o)) && (i = o[2]), void 0 !== i && (t._c7 = t.st.video.vimeoCode.replace("%id%", i))), t.videoObj = e(t._c7), t.ev.trigger("rsOnCreateVideoElement", [n]), t.videoObj.length && (t._c7 = e('<div class="rsVideoFrameHolder"><div class="rsPreloader"></div><div class="rsCloseVideoBtn"><div class="rsCloseVideoIcn"></div></div></div>'), t._c7.find(".rsPreloader").after(t.videoObj), s = s.hasClass("rsVideoContainer") ? s : s.find(".rsVideoContainer"), t._c7.css({
                    width: s.width(),
                    height: s.height()
                }).find(".rsCloseVideoBtn").off("click.rsv").on("click.rsv", function(e) {
                    return t.stopVideo(), e.preventDefault(), e.stopPropagation(), !1
                }), s.append(t._c7), t.isIPAD && s.addClass("rsIOSVideo"), t._e7(!1), setTimeout(function() {
                    t._c7.addClass("rsVideoActive")
                }, 10), t.ev.trigger("rsVideoPlay"), t._b7 = !0), !0
            }
            return !1
        },
        stopVideo: function() {
            var e = this;
            return !!e._b7 && (e.isIPAD && e.slider.find(".rsCloseVideoBtn").remove(), e._e7(!0), setTimeout(function() {
                e.ev.trigger("rsOnDestroyVideoElement", [e.videoObj]);
                var t = e._c7.find("iframe");
                if (t.length) try {
                    t.attr("src", "")
                } catch (n) {}
                e._c7.remove(), e._c7 = null
            }, 16), e.ev.trigger("rsVideoStop"), e._b7 = !1, !0)
        },
        _e7: function(e) {
            var t = [],
                n = this.st.video;
            if (n.autoHideArrows && (this._c2 && (t.push(this._c2, this._d2), this._e2 = !e), this._v5 && t.push(this._v5)), n.autoHideControlNav && this._k5 && t.push(this._k5), n.autoHideBlocks && this.currSlide.animBlocks && t.push(this.currSlide.animBlocks), n.autoHideCaption && this.globalCaption && t.push(this.globalCaption), t.length)
                for (n = 0; n < t.length; n++) e ? t[n].removeClass("rsHidden") : t[n].addClass("rsHidden")
        }
    }), e.rsModules.video = e.rsProto._z6
}(jQuery),
function(e) {
    e.rsProto._f7 = function() {
        var t = this;
        t.st.visibleNearby && t.st.visibleNearby.enabled && (t._g7 = {
            enabled: !0,
            centerArea: .6,
            center: !0,
            breakpoint: 0,
            breakpointCenterArea: .8,
            hiddenOverflow: !0,
            navigateByCenterClick: !1
        }, t.st.visibleNearby = e.extend({}, t._g7, t.st.visibleNearby), t.ev.one("rsAfterPropsSetup", function() {
            t._h7 = t._e1.css("overflow", "visible").wrap('<div class="rsVisibleNearbyWrap"></div>').parent(), t.st.visibleNearby.hiddenOverflow || t._h7.css("overflow", "visible"), t._o1 = t.st.controlsInside ? t._h7 : t.slider
        }), t.ev.on("rsAfterSizePropSet", function() {
            var e, n = t.st.visibleNearby;
            e = n.breakpoint && t.width < n.breakpoint ? n.breakpointCenterArea : n.centerArea, t._h ? (t._b4 *= e, t._h7.css({
                height: t._c4,
                width: t._b4 / e
            }), t._d = t._b4 * (1 - e) / 2 / e) : (t._c4 *= e, t._h7.css({
                height: t._c4 / e,
                width: t._b4
            }), t._d = t._c4 * (1 - e) / 2 / e), n.navigateByCenterClick || (t._q = t._h ? t._b4 : t._c4), n.center && t._e1.css("margin-" + (t._h ? "left" : "top"), t._d)
        }))
    }, e.rsModules.visibleNearby = e.rsProto._f7
}(jQuery),
function(e, t, n, i) {
    "use strict";
    var o = n("html"),
        s = n(e),
        r = n(t),
        a = n.fancybox = function() {
            a.open.apply(this, arguments)
        },
        l = navigator.userAgent.match(/msie/i),
        d = null,
        c = t.createTouch !== i,
        u = function(e) {
            return e && e.hasOwnProperty && e instanceof n
        },
        h = function(e) {
            return e && "string" === n.type(e)
        },
        f = function(e) {
            return h(e) && e.indexOf("%") > 0
        },
        p = function(e) {
            return e && !(e.style.overflow && "hidden" === e.style.overflow) && (e.clientWidth && e.scrollWidth > e.clientWidth || e.clientHeight && e.scrollHeight > e.clientHeight)
        },
        m = function(e, t) {
            var n = parseInt(e, 10) || 0;
            return t && f(e) && (n = a.getViewport()[t] / 100 * n), Math.ceil(n)
        },
        g = function(e, t) {
            return m(e, t) + "px"
        };
    n.extend(a, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !c,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: .5,
            leftRatio: .5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3e3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": !0
                }
            },
            iframe: {
                scrolling: "auto",
                preload: !0
            },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: {
                    13: "left",
                    34: "up",
                    39: "left",
                    40: "up"
                },
                prev: {
                    8: "right",
                    33: "down",
                    37: "right",
                    38: "down"
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (l ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: !0,
                title: !0
            },
            onCancel: n.noop,
            beforeLoad: n.noop,
            afterLoad: n.noop,
            beforeShow: n.noop,
            afterShow: n.noop,
            beforeChange: n.noop,
            beforeClose: n.noop,
            afterClose: n.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: !1
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(e, t) {
            if (e && (n.isPlainObject(t) || (t = {}), !1 !== a.close(!0))) return n.isArray(e) || (e = u(e) ? n(e).get() : [e]), n.each(e, function(o, s) {
                var r, l, d, c, f, p, m, g = {};
                "object" === n.type(s) && (s.nodeType && (s = n(s)), u(s) ? (g = {
                    href: s.data("fancybox-href") || s.attr("href"),
                    title: s.data("fancybox-title") || s.attr("title"),
                    isDom: !0,
                    element: s
                }, n.metadata && n.extend(!0, g, s.metadata())) : g = s), r = t.href || g.href || (h(s) ? s : null), l = t.title !== i ? t.title : g.title || "", d = t.content || g.content, c = d ? "html" : t.type || g.type, !c && g.isDom && (c = s.data("fancybox-type"), c || (f = s.prop("class").match(/fancybox\.(\w+)/), c = f ? f[1] : null)), h(r) && (c || (a.isImage(r) ? c = "image" : a.isSWF(r) ? c = "swf" : "#" === r.charAt(0) ? c = "inline" : h(s) && (c = "html", d = s)), "ajax" === c && (p = r.split(/\s+/, 2), r = p.shift(), m = p.shift())), d || ("inline" === c ? r ? d = n(h(r) ? r.replace(/.*(?=#[^\s]+$)/, "") : r) : g.isDom && (d = s) : "html" === c ? d = r : c || r || !g.isDom || (c = "inline", d = s)), n.extend(g, {
                    href: r,
                    type: c,
                    content: d,
                    title: l,
                    selector: m
                }), e[o] = g
            }), a.opts = n.extend(!0, {}, a.defaults, t), t.keys !== i && (a.opts.keys = !!t.keys && n.extend({}, a.defaults.keys, t.keys)), a.group = e, a._start(a.opts.index)
        },
        cancel: function() {
            var e = a.coming;
            e && !1 !== a.trigger("onCancel") && (a.hideLoading(), a.ajaxLoad && a.ajaxLoad.abort(), a.ajaxLoad = null, a.imgPreload && (a.imgPreload.onload = a.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(), a.coming = null, a.current || a._afterZoomOut(e))
        },
        close: function(e) {
            a.cancel(), !1 !== a.trigger("beforeClose") && (a.unbindEvents(), a.isActive && (a.isOpen && e !== !0 ? (a.isOpen = a.isOpened = !1, a.isClosing = !0, n(".fancybox-item, .fancybox-nav").remove(), a.wrap.stop(!0, !0).removeClass("fancybox-opened"), a.transitions[a.current.closeMethod]()) : (n(".fancybox-wrap").stop(!0).trigger("onReset").remove(), a._afterZoomOut())))
        },
        play: function(e) {
            var t = function() {
                    clearTimeout(a.player.timer)
                },
                n = function() {
                    t(), a.current && a.player.isActive && (a.player.timer = setTimeout(a.next, a.current.playSpeed))
                },
                i = function() {
                    t(), r.unbind(".player"), a.player.isActive = !1, a.trigger("onPlayEnd")
                },
                o = function() {
                    a.current && (a.current.loop || a.current.index < a.group.length - 1) && (a.player.isActive = !0, r.bind({
                        "onCancel.player beforeClose.player": i,
                        "onUpdate.player": n,
                        "beforeLoad.player": t
                    }), n(), a.trigger("onPlayStart"))
                };
            e === !0 || !a.player.isActive && e !== !1 ? o() : i()
        },
        next: function(e) {
            var t = a.current;
            t && (h(e) || (e = t.direction.next), a.jumpto(t.index + 1, e, "next"))
        },
        prev: function(e) {
            var t = a.current;
            t && (h(e) || (e = t.direction.prev), a.jumpto(t.index - 1, e, "prev"))
        },
        jumpto: function(e, t, n) {
            var o = a.current;
            o && (e = m(e), a.direction = t || o.direction[e >= o.index ? "next" : "prev"], a.router = n || "jumpto", o.loop && (e < 0 && (e = o.group.length + e % o.group.length), e %= o.group.length), o.group[e] !== i && (a.cancel(), a._start(e)))
        },
        reposition: function(e, t) {
            var i, o = a.current,
                s = o ? o.wrap : null;
            s && (i = a._getPosition(t), e && "scroll" === e.type ? (delete i.position, s.stop(!0, !0).animate(i, 200)) : (s.css(i), o.pos = n.extend({}, o.dim, i)))
        },
        update: function(e) {
            var t = e && e.type,
                n = !t || "orientationchange" === t;
            n && (clearTimeout(d), d = null), a.isOpen && !d && (d = setTimeout(function() {
                var i = a.current;
                i && !a.isClosing && (a.wrap.removeClass("fancybox-tmp"), (n || "load" === t || "resize" === t && i.autoResize) && a._setDimension(), "scroll" === t && i.canShrink || a.reposition(e), a.trigger("onUpdate"), d = null)
            }, n && !c ? 0 : 300))
        },
        toggle: function(e) {
            a.isOpen && (a.current.fitToView = "boolean" === n.type(e) ? e : !a.current.fitToView, c && (a.wrap.removeAttr("style").addClass("fancybox-tmp"), a.trigger("onUpdate")), a.update())
        },
        hideLoading: function() {
            r.unbind(".loading"), n("#fancybox-loading").remove()
        },
        showLoading: function() {
            var e, t;
            a.hideLoading(), e = n('<div id="fancybox-loading"><div></div></div>').click(a.cancel).appendTo("body"), r.bind("keydown.loading", function(e) {
                27 === (e.which || e.keyCode) && (e.preventDefault(), a.cancel())
            }), a.defaults.fixed || (t = a.getViewport(), e.css({
                position: "absolute",
                top: .5 * t.h + t.y,
                left: .5 * t.w + t.x
            }))
        },
        getViewport: function() {
            var t = a.current && a.current.locked || !1,
                n = {
                    x: s.scrollLeft(),
                    y: s.scrollTop()
                };
            return t ? (n.w = t[0].clientWidth, n.h = t[0].clientHeight) : (n.w = c && e.innerWidth ? e.innerWidth : s.width(), n.h = c && e.innerHeight ? e.innerHeight : s.height()), n
        },
        unbindEvents: function() {
            a.wrap && u(a.wrap) && a.wrap.unbind(".fb"), r.unbind(".fb"), s.unbind(".fb")
        },
        bindEvents: function() {
            var e, t = a.current;
            t && (s.bind("orientationchange.fb" + (c ? "" : " resize.fb") + (t.autoCenter && !t.locked ? " scroll.fb" : ""), a.update), e = t.keys, e && r.bind("keydown.fb", function(o) {
                var s = o.which || o.keyCode,
                    r = o.target || o.srcElement;
                return (27 !== s || !a.coming) && void(o.ctrlKey || o.altKey || o.shiftKey || o.metaKey || r && (r.type || n(r).is("[contenteditable]")) || n.each(e, function(e, r) {
                    return t.group.length > 1 && r[s] !== i ? (a[e](r[s]), o.preventDefault(), !1) : n.inArray(s, r) > -1 ? (a[e](), o.preventDefault(), !1) : void 0
                }))
            }), n.fn.mousewheel && t.mouseWheel && a.wrap.bind("mousewheel.fb", function(e, i, o, s) {
                for (var r = e.target || null, l = n(r), d = !1; l.length && !(d || l.is(".fancybox-skin") || l.is(".fancybox-wrap"));) d = p(l[0]), l = n(l).parent();
                0 === i || d || a.group.length > 1 && !t.canShrink && (s > 0 || o > 0 ? a.prev(s > 0 ? "down" : "left") : (s < 0 || o < 0) && a.next(s < 0 ? "up" : "right"),
                    e.preventDefault())
            }))
        },
        trigger: function(e, t) {
            var i, o = t || a.coming || a.current;
            if (o) {
                if (n.isFunction(o[e]) && (i = o[e].apply(o, Array.prototype.slice.call(arguments, 1))), i === !1) return !1;
                o.helpers && n.each(o.helpers, function(t, i) {
                    i && a.helpers[t] && n.isFunction(a.helpers[t][e]) && a.helpers[t][e](n.extend(!0, {}, a.helpers[t].defaults, i), o)
                }), r.trigger(e)
            }
        },
        isImage: function(e) {
            return h(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function(e) {
            return h(e) && e.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function(e) {
            var t, i, o, s, r, l = {};
            if (e = m(e), t = a.group[e] || null, !t) return !1;
            if (l = n.extend(!0, {}, a.opts, t), s = l.margin, r = l.padding, "number" === n.type(s) && (l.margin = [s, s, s, s]), "number" === n.type(r) && (l.padding = [r, r, r, r]), l.modal && n.extend(!0, l, {
                    closeBtn: !1,
                    closeClick: !1,
                    nextClick: !1,
                    arrows: !1,
                    mouseWheel: !1,
                    keys: null,
                    helpers: {
                        overlay: {
                            closeClick: !1
                        }
                    }
                }), l.autoSize && (l.autoWidth = l.autoHeight = !0), "auto" === l.width && (l.autoWidth = !0), "auto" === l.height && (l.autoHeight = !0), l.group = a.group, l.index = e, a.coming = l, !1 === a.trigger("beforeLoad")) return void(a.coming = null);
            if (o = l.type, i = l.href, !o) return a.coming = null, !(!a.current || !a.router || "jumpto" === a.router) && (a.current.index = e, a[a.router](a.direction));
            if (a.isActive = !0, "image" !== o && "swf" !== o || (l.autoHeight = l.autoWidth = !1, l.scrolling = "visible"), "image" === o && (l.aspectRatio = !0), "iframe" === o && c && (l.scrolling = "scroll"), l.wrap = n(l.tpl.wrap).addClass("fancybox-" + (c ? "mobile" : "desktop") + " fancybox-type-" + o + " fancybox-tmp " + l.wrapCSS).appendTo(l.parent || "body"), n.extend(l, {
                    skin: n(".fancybox-skin", l.wrap),
                    outer: n(".fancybox-outer", l.wrap),
                    inner: n(".fancybox-inner", l.wrap)
                }), n.each(["Top", "Right", "Bottom", "Left"], function(e, t) {
                    l.skin.css("padding" + t, g(l.padding[e]))
                }), a.trigger("onReady"), "inline" === o || "html" === o) {
                if (!l.content || !l.content.length) return a._error("content")
            } else if (!i) return a._error("href");
            "image" === o ? a._loadImage() : "ajax" === o ? a._loadAjax() : "iframe" === o ? a._loadIframe() : a._afterLoad()
        },
        _error: function(e) {
            n.extend(a.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: e,
                content: a.coming.tpl.error
            }), a._afterLoad()
        },
        _loadImage: function() {
            var e = a.imgPreload = new Image;
            e.onload = function() {
                this.onload = this.onerror = null, a.coming.width = this.width / a.opts.pixelRatio, a.coming.height = this.height / a.opts.pixelRatio, a._afterLoad()
            }, e.onerror = function() {
                this.onload = this.onerror = null, a._error("image")
            }, e.src = a.coming.href, e.complete !== !0 && a.showLoading()
        },
        _loadAjax: function() {
            var e = a.coming;
            a.showLoading(), a.ajaxLoad = n.ajax(n.extend({}, e.ajax, {
                url: e.href,
                error: function(e, t) {
                    a.coming && "abort" !== t ? a._error("ajax", e) : a.hideLoading()
                },
                success: function(t, n) {
                    "success" === n && (e.content = t, a._afterLoad())
                }
            }))
        },
        _loadIframe: function() {
            var e = a.coming,
                t = n(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", c ? "auto" : e.iframe.scrolling).attr("src", e.href);
            n(e.wrap).bind("onReset", function() {
                try {
                    n(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (e) {}
            }), e.iframe.preload && (a.showLoading(), t.one("load", function() {
                n(this).data("ready", 1), c || n(this).bind("load.fb", a.update), n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), a._afterLoad()
            })), e.content = t.appendTo(e.inner), e.iframe.preload || a._afterLoad()
        },
        _preloadImages: function() {
            var e, t, n = a.group,
                i = a.current,
                o = n.length,
                s = i.preload ? Math.min(i.preload, o - 1) : 0;
            for (t = 1; t <= s; t += 1) e = n[(i.index + t) % o], "image" === e.type && e.href && ((new Image).src = e.href)
        },
        _afterLoad: function() {
            var e, t, i, o, s, r, l = a.coming,
                d = a.current,
                c = "fancybox-placeholder";
            if (a.hideLoading(), l && a.isActive !== !1) {
                if (!1 === a.trigger("afterLoad", l, d)) return l.wrap.stop(!0).trigger("onReset").remove(), void(a.coming = null);
                switch (d && (a.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), a.unbindEvents(), e = l, t = l.content, i = l.type, o = l.scrolling, n.extend(a, {
                    wrap: e.wrap,
                    skin: e.skin,
                    outer: e.outer,
                    inner: e.inner,
                    current: e,
                    previous: d
                }), s = e.href, i) {
                    case "inline":
                    case "ajax":
                    case "html":
                        e.selector ? t = n("<div>").html(t).find(e.selector) : u(t) && (t.data(c) || t.data(c, n('<div class="' + c + '"></div>').insertAfter(t).hide()), t = t.show().detach(), e.wrap.bind("onReset", function() {
                            n(this).find(t).length && t.hide().replaceAll(t.data(c)).data(c, !1)
                        }));
                        break;
                    case "image":
                        t = e.tpl.image.replace("{href}", s);
                        break;
                    case "swf":
                        t = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + s + '"></param>', r = "", n.each(e.swf, function(e, n) {
                            t += '<param name="' + e + '" value="' + n + '"></param>', r += " " + e + '="' + n + '"'
                        }), t += '<embed src="' + s + '" type="application/x-shockwave-flash" width="100%" height="100%"' + r + "></embed></object>"
                }
                u(t) && t.parent().is(e.inner) || e.inner.append(t), a.trigger("beforeShow"), e.inner.css("overflow", "yes" === o ? "scroll" : "no" === o ? "hidden" : o), a._setDimension(), a.reposition(), a.isOpen = !1, a.coming = null, a.bindEvents(), a.isOpened ? d.prevMethod && a.transitions[d.prevMethod]() : n(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(), a.transitions[a.isOpened ? e.nextMethod : e.openMethod](), a._preloadImages()
            }
        },
        _setDimension: function() {
            var e, t, i, o, s, r, l, d, c, u, h, p, v, b, y, A = a.getViewport(),
                _ = 0,
                w = !1,
                x = !1,
                C = a.wrap,
                k = a.skin,
                S = a.inner,
                T = a.current,
                I = T.width,
                q = T.height,
                P = T.minWidth,
                j = T.minHeight,
                E = T.maxWidth,
                N = T.maxHeight,
                L = T.scrolling,
                O = T.scrollOutside ? T.scrollbarWidth : 0,
                D = T.margin,
                $ = m(D[1] + D[3]),
                B = m(D[0] + D[2]);
            if (C.add(k).add(S).width("auto").height("auto").removeClass("fancybox-tmp"), e = m(k.outerWidth(!0) - k.width()), t = m(k.outerHeight(!0) - k.height()), i = $ + e, o = B + t, s = f(I) ? (A.w - i) * m(I) / 100 : I, r = f(q) ? (A.h - o) * m(q) / 100 : q, "iframe" === T.type) {
                if (b = T.content, T.autoHeight && 1 === b.data("ready")) try {
                    b[0].contentWindow.document.location && (S.width(s).height(9999), y = b.contents().find("body"), O && y.css("overflow-x", "hidden"), r = y.outerHeight(!0))
                } catch (W) {}
            } else(T.autoWidth || T.autoHeight) && (S.addClass("fancybox-tmp"), T.autoWidth || S.width(s), T.autoHeight || S.height(r), T.autoWidth && (s = S.width()), T.autoHeight && (r = S.height()), S.removeClass("fancybox-tmp"));
            if (I = m(s), q = m(r), c = s / r, P = m(f(P) ? m(P, "w") - i : P), E = m(f(E) ? m(E, "w") - i : E), j = m(f(j) ? m(j, "h") - o : j), N = m(f(N) ? m(N, "h") - o : N), l = E, d = N, T.fitToView && (E = Math.min(A.w - i, E), N = Math.min(A.h - o, N)), p = A.w - $, v = A.h - B, T.aspectRatio ? (I > E && (I = E, q = m(I / c)), q > N && (q = N, I = m(q * c)), I < P && (I = P, q = m(I / c)), q < j && (q = j, I = m(q * c))) : (I = Math.max(P, Math.min(I, E)), T.autoHeight && "iframe" !== T.type && (S.width(I), q = S.height()), q = Math.max(j, Math.min(q, N))), T.fitToView)
                if (S.width(I).height(q), C.width(I + e), u = C.width(), h = C.height(), T.aspectRatio)
                    for (;
                        (u > p || h > v) && I > P && q > j && !(_++ > 19);) q = Math.max(j, Math.min(N, q - 10)), I = m(q * c), I < P && (I = P, q = m(I / c)), I > E && (I = E, q = m(I / c)), S.width(I).height(q), C.width(I + e), u = C.width(), h = C.height();
                else I = Math.max(P, Math.min(I, I - (u - p))), q = Math.max(j, Math.min(q, q - (h - v)));
            O && "auto" === L && q < r && I + e + O < p && (I += O), S.width(I).height(q), C.width(I + e), u = C.width(), h = C.height(), w = (u > p || h > v) && I > P && q > j, x = T.aspectRatio ? I < l && q < d && I < s && q < r : (I < l || q < d) && (I < s || q < r), n.extend(T, {
                dim: {
                    width: g(u),
                    height: g(h)
                },
                origWidth: s,
                origHeight: r,
                canShrink: w,
                canExpand: x,
                wPadding: e,
                hPadding: t,
                wrapSpace: h - k.outerHeight(!0),
                skinSpace: k.height() - q
            }), !b && T.autoHeight && q > j && q < N && !x && S.height("auto")
        },
        _getPosition: function(e) {
            var t = a.current,
                n = a.getViewport(),
                i = t.margin,
                o = a.wrap.width() + i[1] + i[3],
                s = a.wrap.height() + i[0] + i[2],
                r = {
                    position: "absolute",
                    top: i[0],
                    left: i[3]
                };
            return t.autoCenter && t.fixed && !e && s <= n.h && o <= n.w ? r.position = "fixed" : t.locked || (r.top += n.y, r.left += n.x), r.top = g(Math.max(r.top, r.top + (n.h - s) * t.topRatio)), r.left = g(Math.max(r.left, r.left + (n.w - o) * t.leftRatio)), r
        },
        _afterZoomIn: function() {
            var e = a.current;
            e && (a.isOpen = a.isOpened = !0, a.wrap.css("overflow", "visible").addClass("fancybox-opened"), a.update(), (e.closeClick || e.nextClick && a.group.length > 1) && a.inner.css("cursor", "pointer").bind("click.fb", function(t) {
                n(t.target).is("a") || n(t.target).parent().is("a") || (t.preventDefault(), a[e.closeClick ? "close" : "next"]())
            }), e.closeBtn && n(e.tpl.closeBtn).appendTo(a.skin).bind("click.fb", function(e) {
                e.preventDefault(), a.close()
            }), e.arrows && a.group.length > 1 && ((e.loop || e.index > 0) && n(e.tpl.prev).appendTo(a.outer).bind("click.fb", a.prev), (e.loop || e.index < a.group.length - 1) && n(e.tpl.next).appendTo(a.outer).bind("click.fb", a.next)), a.trigger("afterShow"), e.loop || e.index !== e.group.length - 1 ? a.opts.autoPlay && !a.player.isActive && (a.opts.autoPlay = !1, a.play()) : a.play(!1))
        },
        _afterZoomOut: function(e) {
            e = e || a.current, n(".fancybox-wrap").trigger("onReset").remove(), n.extend(a, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            }), a.trigger("afterClose", e)
        }
    }), a.transitions = {
        getOrigPosition: function() {
            var e = a.current,
                t = e.element,
                n = e.orig,
                i = {},
                o = 50,
                s = 50,
                r = e.hPadding,
                l = e.wPadding,
                d = a.getViewport();
            return !n && e.isDom && t.is(":visible") && (n = t.find("img:first"), n.length || (n = t)), u(n) ? (i = n.offset(), n.is("img") && (o = n.outerWidth(), s = n.outerHeight())) : (i.top = d.y + (d.h - s) * e.topRatio, i.left = d.x + (d.w - o) * e.leftRatio), ("fixed" === a.wrap.css("position") || e.locked) && (i.top -= d.y, i.left -= d.x), i = {
                top: g(i.top - r * e.topRatio),
                left: g(i.left - l * e.leftRatio),
                width: g(o + l),
                height: g(s + r)
            }
        },
        step: function(e, t) {
            var n, i, o, s = t.prop,
                r = a.current,
                l = r.wrapSpace,
                d = r.skinSpace;
            "width" !== s && "height" !== s || (n = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), a.isClosing && (n = 1 - n), i = "width" === s ? r.wPadding : r.hPadding, o = e - i, a.skin[s](m("width" === s ? o : o - l * n)), a.inner[s](m("width" === s ? o : o - l * n - d * n)))
        },
        zoomIn: function() {
            var e = a.current,
                t = e.pos,
                i = e.openEffect,
                o = "elastic" === i,
                s = n.extend({
                    opacity: 1
                }, t);
            delete s.position, o ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : "fade" === i && (t.opacity = .1), a.wrap.css(t).animate(s, {
                duration: "none" === i ? 0 : e.openSpeed,
                easing: e.openEasing,
                step: o ? this.step : null,
                complete: a._afterZoomIn
            })
        },
        zoomOut: function() {
            var e = a.current,
                t = e.closeEffect,
                n = "elastic" === t,
                i = {
                    opacity: .1
                };
            n && (i = this.getOrigPosition(), e.closeOpacity && (i.opacity = .1)), a.wrap.animate(i, {
                duration: "none" === t ? 0 : e.closeSpeed,
                easing: e.closeEasing,
                step: n ? this.step : null,
                complete: a._afterZoomOut
            })
        },
        changeIn: function() {
            var e, t = a.current,
                n = t.nextEffect,
                i = t.pos,
                o = {
                    opacity: 1
                },
                s = a.direction,
                r = 200;
            i.opacity = .1, "elastic" === n && (e = "down" === s || "up" === s ? "top" : "left", "down" === s || "right" === s ? (i[e] = g(m(i[e]) - r), o[e] = "+=" + r + "px") : (i[e] = g(m(i[e]) + r), o[e] = "-=" + r + "px")), "none" === n ? a._afterZoomIn() : a.wrap.css(i).animate(o, {
                duration: t.nextSpeed,
                easing: t.nextEasing,
                complete: a._afterZoomIn
            })
        },
        changeOut: function() {
            var e = a.previous,
                t = e.prevEffect,
                i = {
                    opacity: .1
                },
                o = a.direction,
                s = 200;
            "elastic" === t && (i["down" === o || "up" === o ? "top" : "left"] = ("up" === o || "left" === o ? "-" : "+") + "=" + s + "px"), e.wrap.animate(i, {
                duration: "none" === t ? 0 : e.prevSpeed,
                easing: e.prevEasing,
                complete: function() {
                    n(this).trigger("onReset").remove()
                }
            })
        }
    }, a.helpers.overlay = {
        defaults: {
            closeClick: !0,
            speedOut: 200,
            showEarly: !0,
            css: {},
            locked: !c,
            fixed: !0
        },
        overlay: null,
        fixed: !1,
        el: n("html"),
        create: function(e) {
            e = n.extend({}, this.defaults, e), this.overlay && this.close(), this.overlay = n('<div class="fancybox-overlay"></div>').appendTo(a.coming ? a.coming.parent : e.parent), this.fixed = !1, e.fixed && a.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        },
        open: function(e) {
            var t = this;
            e = n.extend({}, this.defaults, e), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e), this.fixed || (s.bind("resize.overlay", n.proxy(this.update, this)), this.update()), e.closeClick && this.overlay.bind("click.overlay", function(e) {
                if (n(e.target).hasClass("fancybox-overlay")) return a.isActive ? a.close() : t.close(), !1
            }), this.overlay.css(e.css).show()
        },
        close: function() {
            var e, t;
            s.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (n(".fancybox-margin").removeClass("fancybox-margin"), e = s.scrollTop(), t = s.scrollLeft(), this.el.removeClass("fancybox-lock"), s.scrollTop(e).scrollLeft(t)), n(".fancybox-overlay").remove().hide(), n.extend(this, {
                overlay: null,
                fixed: !1
            })
        },
        update: function() {
            var e, n = "100%";
            this.overlay.width(n).height("100%"), l ? (e = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), r.width() > e && (n = r.width())) : r.width() > s.width() && (n = r.width()), this.overlay.width(n).height(r.height())
        },
        onReady: function(e, t) {
            var i = this.overlay;
            n(".fancybox-overlay").stop(!0, !0), i || this.create(e), e.locked && this.fixed && t.fixed && (i || (this.margin = r.height() > s.height() && n("html").css("margin-right").replace("px", "")), t.locked = this.overlay.append(t.wrap), t.fixed = !1), e.showEarly === !0 && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function(e, t) {
            var i, o;
            t.locked && (this.margin !== !1 && (n("*").filter(function() {
                return "fixed" === n(this).css("position") && !n(this).hasClass("fancybox-overlay") && !n(this).hasClass("fancybox-wrap")
            }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), i = s.scrollTop(), o = s.scrollLeft(), this.el.addClass("fancybox-lock"), s.scrollTop(i).scrollLeft(o)), this.open(e)
        },
        onUpdate: function() {
            this.fixed || this.update()
        },
        afterClose: function(e) {
            this.overlay && !a.coming && this.overlay.fadeOut(e.speedOut, n.proxy(this.close, this))
        }
    }, a.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        },
        beforeShow: function(e) {
            var t, i, o = a.current,
                s = o.title,
                r = e.type;
            if (n.isFunction(s) && (s = s.call(o.element, o)), h(s) && "" !== n.trim(s)) {
                switch (t = n('<div class="fancybox-title fancybox-title-' + r + '-wrap">' + s + "</div>"), r) {
                    case "inside":
                        i = a.skin;
                        break;
                    case "outside":
                        i = a.wrap;
                        break;
                    case "over":
                        i = a.inner;
                        break;
                    default:
                        i = a.skin, t.appendTo("body"), l && t.width(t.width()), t.wrapInner('<span class="child"></span>'), a.current.margin[2] += Math.abs(m(t.css("margin-bottom")))
                }
                t["top" === e.position ? "prependTo" : "appendTo"](i)
            }
        }
    }, n.fn.fancybox = function(e) {
        var t, i = n(this),
            o = this.selector || "",
            s = function(s) {
                var r, l, d = n(this).blur(),
                    c = t;
                s.ctrlKey || s.altKey || s.shiftKey || s.metaKey || d.is(".fancybox-wrap") || (r = e.groupAttr || "data-fancybox-group", l = d.attr(r), l || (r = "rel", l = d.get(0)[r]), l && "" !== l && "nofollow" !== l && (d = o.length ? n(o) : i, d = d.filter("[" + r + '="' + l + '"]'), c = d.index(this)), e.index = c, a.open(d, e) !== !1 && s.preventDefault())
            };
        return e = e || {}, t = e.index || 0, o && e.live !== !1 ? r.undelegate(o, "click.fb-start").delegate(o + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", s) : i.unbind("click.fb-start").bind("click.fb-start", s), this.filter("[data-fancybox-start=1]").trigger("click"), this
    }, r.ready(function() {
        var t, s;
        n.scrollbarWidth === i && (n.scrollbarWidth = function() {
            var e = n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                t = e.children(),
                i = t.innerWidth() - t.height(99).innerWidth();
            return e.remove(), i
        }), n.support.fixedPosition === i && (n.support.fixedPosition = function() {
            var e = n('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                t = 20 === e[0].offsetTop || 15 === e[0].offsetTop;
            return e.remove(), t
        }()), n.extend(a.defaults, {
            scrollbarWidth: n.scrollbarWidth(),
            fixed: n.support.fixedPosition,
            parent: n("body")
        }), t = n(e).width(), o.addClass("fancybox-lock-test"), s = n(e).width(), o.removeClass("fancybox-lock-test"), n("<style type='text/css'>.fancybox-margin{margin-right:" + (s - t) + "px;}</style>").appendTo("head")
    })
}(window, document, jQuery), ! function(e) {
    function t() {
        e[n].glbl || (a = {
            $wndw: e(window),
            $docu: e(document),
            $html: e("html"),
            $body: e("body")
        }, o = {}, s = {}, r = {}, e.each([o, s, r], function(e, t) {
            t.add = function(e) {
                e = e.split(" ");
                for (var n = 0, i = e.length; n < i; n++) t[e[n]] = t.mm(e[n])
            }
        }), o.mm = function(e) {
            return "mm-" + e
        }, o.add("wrapper menu panels panel nopanel current highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen"), o.umm = function(e) {
            return "mm-" == e.slice(0, 3) && (e = e.slice(3)), e
        }, s.mm = function(e) {
            return "mm-" + e
        }, s.add("parent child"), r.mm = function(e) {
            return e + ".mm"
        }, r.add("transitionend webkitTransitionEnd click scroll keydown mousedown mouseup touchstart touchmove touchend orientationchange"), e[n]._c = o, e[n]._d = s, e[n]._e = r, e[n].glbl = a)
    }
    var n = "mmenu",
        i = "5.7.8";
    if (!(e[n] && e[n].version > i)) {
        e[n] = function(e, t, n) {
            this.$menu = e, this._api = ["bind", "getInstance", "update", "initPanels", "openPanel", "closePanel", "closeAllPanels", "setSelected"], this.opts = t, this.conf = n, this.vars = {}, this.cbck = {}, "function" == typeof this.___deprecated && this.___deprecated(), this._initMenu(), this._initAnchors();
            var i = this.$pnls.children();
            return this._initAddons(), this.initPanels(i), "function" == typeof this.___debug && this.___debug(), this
        }, e[n].version = i, e[n].addons = {}, e[n].uniqueId = 0, e[n].defaults = {
            extensions: [],
            initMenu: function() {},
            initPanels: function() {},
            navbar: {
                add: !0,
                title: "Menu",
                titleLink: "panel"
            },
            onClick: {
                setSelected: !0
            },
            slidingSubmenus: !0
        }, e[n].configuration = {
            classNames: {
                divider: "Divider",
                inset: "Inset",
                panel: "Panel",
                selected: "Selected",
                spacer: "Spacer",
                vertical: "Vertical"
            },
            clone: !1,
            openingInterval: 25,
            panelNodetype: "ul, ol, div",
            transitionDuration: 400
        }, e[n].prototype = {
            init: function(e) {
                this.initPanels(e)
            },
            getInstance: function() {
                return this
            },
            update: function() {
                this.trigger("update")
            },
            initPanels: function(e) {
                e = e.not("." + o.nopanel), e = this._initPanels(e), this.opts.initPanels.call(this, e), this.trigger("initPanels", e), this.trigger("update")
            },
            openPanel: function(t) {
                var i = t.parent(),
                    s = this;
                if (i.hasClass(o.vertical)) {
                    var r = i.parents("." + o.subopened);
                    if (r.length) return void this.openPanel(r.first());
                    i.addClass(o.opened), this.trigger("openPanel", t), this.trigger("openingPanel", t), this.trigger("openedPanel", t)
                } else {
                    if (t.hasClass(o.current)) return;
                    var a = this.$pnls.children("." + o.panel),
                        l = a.filter("." + o.current);
                    a.removeClass(o.highest).removeClass(o.current).not(t).not(l).not("." + o.vertical).addClass(o.hidden), e[n].support.csstransitions || l.addClass(o.hidden), t.hasClass(o.opened) ? t.nextAll("." + o.opened).addClass(o.highest).removeClass(o.opened).removeClass(o.subopened) : (t.addClass(o.highest), l.addClass(o.subopened)), t.removeClass(o.hidden).addClass(o.current), s.trigger("openPanel", t), setTimeout(function() {
                        t.removeClass(o.subopened).addClass(o.opened), s.trigger("openingPanel", t), s.__transitionend(t, function() {
                            s.trigger("openedPanel", t)
                        }, s.conf.transitionDuration)
                    }, this.conf.openingInterval)
                }
            },
            closePanel: function(e) {
                var t = e.parent();
                t.hasClass(o.vertical) && (t.removeClass(o.opened), this.trigger("closePanel", e), this.trigger("closingPanel", e), this.trigger("closedPanel", e))
            },
            closeAllPanels: function() {
                this.$menu.find("." + o.listview).children().removeClass(o.selected).filter("." + o.vertical).removeClass(o.opened);
                var e = this.$pnls.children("." + o.panel),
                    t = e.first();
                this.$pnls.children("." + o.panel).not(t).removeClass(o.subopened).removeClass(o.opened).removeClass(o.current).removeClass(o.highest).addClass(o.hidden), this.openPanel(t)
            },
            togglePanel: function(e) {
                var t = e.parent();
                t.hasClass(o.vertical) && this[t.hasClass(o.opened) ? "closePanel" : "openPanel"](e)
            },
            setSelected: function(e) {
                this.$menu.find("." + o.listview).children("." + o.selected).removeClass(o.selected), e.addClass(o.selected), this.trigger("setSelected", e)
            },
            bind: function(e, t) {
                e = "init" == e ? "initPanels" : e, this.cbck[e] = this.cbck[e] || [], this.cbck[e].push(t)
            },
            trigger: function() {
                var e = this,
                    t = Array.prototype.slice.call(arguments),
                    n = t.shift();
                if (n = "init" == n ? "initPanels" : n, this.cbck[n])
                    for (var i = 0, o = this.cbck[n].length; i < o; i++) this.cbck[n][i].apply(e, t)
            },
            _initMenu: function() {
                this.conf.clone && (this.$orig = this.$menu, this.$menu = this.$orig.clone(!0), this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function() {
                    e(this).attr("id", o.mm(e(this).attr("id")))
                })), this.opts.initMenu.call(this, this.$menu, this.$orig), this.$menu.attr("id", this.$menu.attr("id") || this.__getUniqueId()), this.$pnls = e('<div class="' + o.panels + '" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu), this.$menu.parent().addClass(o.wrapper);
                var t = [o.menu];
                this.opts.slidingSubmenus || t.push(o.vertical), this.opts.extensions = this.opts.extensions.length ? "mm-" + this.opts.extensions.join(" mm-") : "", this.opts.extensions && t.push(this.opts.extensions), this.$menu.addClass(t.join(" ")), this.trigger("_initMenu")
            },
            _initPanels: function(t) {
                var i = this,
                    r = this.__findAddBack(t, "ul, ol");
                this.__refactorClass(r, this.conf.classNames.inset, "inset").addClass(o.nolistview + " " + o.nopanel), r.not("." + o.nolistview).addClass(o.listview);
                var a = this.__findAddBack(t, "." + o.listview).children();
                this.__refactorClass(a, this.conf.classNames.selected, "selected"), this.__refactorClass(a, this.conf.classNames.divider, "divider"), this.__refactorClass(a, this.conf.classNames.spacer, "spacer"), this.__refactorClass(this.__findAddBack(t, "." + this.conf.classNames.panel), this.conf.classNames.panel, "panel");
                var l = e(),
                    d = t.add(t.find("." + o.panel)).add(this.__findAddBack(t, "." + o.listview).children().children(this.conf.panelNodetype)).not("." + o.nopanel);
                this.__refactorClass(d, this.conf.classNames.vertical, "vertical"), this.opts.slidingSubmenus || d.addClass(o.vertical), d.each(function() {
                    var t = e(this),
                        n = t;
                    t.is("ul, ol") ? (t.wrap('<div class="' + o.panel + '" />'), n = t.parent()) : n.addClass(o.panel);
                    var s = t.attr("id");
                    t.removeAttr("id"), n.attr("id", s || i.__getUniqueId()), t.hasClass(o.vertical) && (t.removeClass(i.conf.classNames.vertical), n.add(n.parent()).addClass(o.vertical)), l = l.add(n)
                });
                var c = e("." + o.panel, this.$menu);
                l.each(function(t) {
                    var r, a, l = e(this),
                        d = l.parent(),
                        c = d.children("a, span").first();
                    if (d.is("." + o.panels) || (d.data(s.child, l), l.data(s.parent, d)), d.children("." + o.next).length || d.parent().is("." + o.listview) && (r = l.attr("id"), a = e('<a class="' + o.next + '" href="#' + r + '" data-target="#' + r + '" />').insertBefore(c), c.is("span") && a.addClass(o.fullsubopen)), !l.children("." + o.navbar).length && !d.hasClass(o.vertical)) {
                        d.parent().is("." + o.listview) ? d = d.closest("." + o.panel) : (c = d.closest("." + o.panel).find('a[href="#' + l.attr("id") + '"]').first(), d = c.closest("." + o.panel));
                        var u = !1,
                            h = e('<div class="' + o.navbar + '" />');
                        if (i.opts.navbar.add && l.addClass(o.hasnavbar), d.length) {
                            switch (r = d.attr("id"), i.opts.navbar.titleLink) {
                                case "anchor":
                                    u = c.attr("href");
                                    break;
                                case "panel":
                                case "parent":
                                    u = "#" + r;
                                    break;
                                default:
                                    u = !1
                            }
                            h.append('<a class="' + o.btn + " " + o.prev + '" href="#' + r + '" data-target="#' + r + '" />').append(e('<a class="' + o.title + '"' + (u ? ' href="' + u + '"' : "") + " />").text(c.text())).prependTo(l)
                        } else i.opts.navbar.title && h.append('<a class="' + o.title + '">' + e[n].i18n(i.opts.navbar.title) + "</a>").prependTo(l)
                    }
                });
                var u = this.__findAddBack(t, "." + o.listview).children("." + o.selected).removeClass(o.selected).last().addClass(o.selected);
                u.add(u.parentsUntil("." + o.menu, "li")).filter("." + o.vertical).addClass(o.opened).end().each(function() {
                    e(this).parentsUntil("." + o.menu, "." + o.panel).not("." + o.vertical).first().addClass(o.opened).parentsUntil("." + o.menu, "." + o.panel).not("." + o.vertical).first().addClass(o.opened).addClass(o.subopened)
                }), u.children("." + o.panel).not("." + o.vertical).addClass(o.opened).parentsUntil("." + o.menu, "." + o.panel).not("." + o.vertical).first().addClass(o.opened).addClass(o.subopened);
                var h = c.filter("." + o.opened);
                return h.length || (h = l.first()), h.addClass(o.opened).last().addClass(o.current), l.not("." + o.vertical).not(h.last()).addClass(o.hidden).end().filter(function() {
                    return !e(this).parent().hasClass(o.panels)
                }).appendTo(this.$pnls), this.trigger("_initPanels", l), l
            },
            _initAnchors: function() {
                var t = this;
                a.$body.on(r.click + "-oncanvas", "a[href]", function(i) {
                    var s = e(this),
                        r = !1,
                        a = t.$menu.find(s).length;
                    for (var l in e[n].addons)
                        if (e[n].addons[l].clickAnchor.call(t, s, a)) {
                            r = !0;
                            break
                        }
                    var d = s.attr("href");
                    if (!r && a && d.length > 1 && "#" == d.slice(0, 1)) try {
                        var c = e(d, t.$menu);
                        c.is("." + o.panel) && (r = !0, t[s.parent().hasClass(o.vertical) ? "togglePanel" : "openPanel"](c))
                    } catch (u) {}
                    if (r && i.preventDefault(), !r && a && s.is("." + o.listview + " > li > a") && !s.is('[rel="external"]') && !s.is('[target="_blank"]')) {
                        t.__valueOrFn(t.opts.onClick.setSelected, s) && t.setSelected(e(i.target).parent());
                        var h = t.__valueOrFn(t.opts.onClick.preventDefault, s, "#" == d.slice(0, 1));
                        h && i.preventDefault(), t.__valueOrFn(t.opts.onClick.close, s, h) && t.close()
                    }
                }), this.trigger("_initAnchors")
            },
            _initAddons: function() {
                var t;
                for (t in e[n].addons) e[n].addons[t].add.call(this), e[n].addons[t].add = function() {};
                for (t in e[n].addons) e[n].addons[t].setup.call(this);
                this.trigger("_initAddons")
            },
            _getOriginalMenuId: function() {
                var e = this.$menu.attr("id");
                return e && e.length && this.conf.clone && (e = o.umm(e)), e
            },
            __api: function() {
                var t = this,
                    n = {};
                return e.each(this._api, function(e) {
                    var i = this;
                    n[i] = function() {
                        var e = t[i].apply(t, arguments);
                        return "undefined" == typeof e ? n : e
                    }
                }), n
            },
            __valueOrFn: function(e, t, n) {
                return "function" == typeof e ? e.call(t[0]) : "undefined" == typeof e && "undefined" != typeof n ? n : e
            },
            __refactorClass: function(e, t, n) {
                return e.filter("." + t).removeClass(t).addClass(o[n])
            },
            __findAddBack: function(e, t) {
                return e.find(t).add(e.filter(t))
            },
            __filterListItems: function(e) {
                return e.not("." + o.divider).not("." + o.hidden)
            },
            __transitionend: function(t, n, i) {
                var o = !1,
                    s = function(i) {
                        if ("undefined" != typeof i) {
                            if (!e(i.target).is(t)) return !1;
                            t.unbind(r.transitionend), t.unbind(r.webkitTransitionEnd)
                        }
                        o || n.call(t[0]), o = !0
                    };
                t.on(r.transitionend, s), t.on(r.webkitTransitionEnd, s), setTimeout(s, 1.1 * i)
            },
            __getUniqueId: function() {
                return o.mm(e[n].uniqueId++)
            }
        }, e.fn[n] = function(i, o) {
            t(), i = e.extend(!0, {}, e[n].defaults, i), o = e.extend(!0, {}, e[n].configuration, o);
            var s = e();
            return this.each(function() {
                var t = e(this);
                if (!t.data(n)) {
                    var r = new e[n](t, i, o);
                    r.$menu.data(n, r.__api()), s = s.add(r.$menu)
                }
            }), s
        }, e[n].i18n = function() {
            var t = {};
            return function(n) {
                switch (typeof n) {
                    case "object":
                        return e.extend(t, n), t;
                    case "string":
                        return t[n] || n;
                    case "undefined":
                    default:
                        return t
                }
            }
        }(), e[n].support = {
            touch: "ontouchstart" in window || navigator.msMaxTouchPoints || !1,
            csstransitions: function() {
                if ("undefined" != typeof Modernizr && "undefined" != typeof Modernizr.csstransitions) return Modernizr.csstransitions;
                var e = document.body || document.documentElement,
                    t = e.style,
                    n = "transition";
                if ("string" == typeof t[n]) return !0;
                var i = ["Moz", "webkit", "Webkit", "Khtml", "O", "ms"];
                n = n.charAt(0).toUpperCase() + n.substr(1);
                for (var o = 0; o < i.length; o++)
                    if ("string" == typeof t[i[o] + n]) return !0;
                return !1
            }(),
            csstransforms: function() {
                return "undefined" == typeof Modernizr || "undefined" == typeof Modernizr.csstransforms || Modernizr.csstransforms
            }(),
            csstransforms3d: function() {
                return "undefined" == typeof Modernizr || "undefined" == typeof Modernizr.csstransforms3d || Modernizr.csstransforms3d
            }()
        };
        var o, s, r, a
    }
}(jQuery),
function(e) {
    var t = "mmenu",
        n = "offCanvas";
    e[t].addons[n] = {
        setup: function() {
            if (this.opts[n]) {
                var o = this.opts[n],
                    s = this.conf[n];
                r = e[t].glbl, this._api = e.merge(this._api, ["open", "close", "setPage"]), "top" != o.position && "bottom" != o.position || (o.zposition = "front"), "string" != typeof s.pageSelector && (s.pageSelector = "> " + s.pageNodetype), r.$allMenus = (r.$allMenus || e()).add(this.$menu), this.vars.opened = !1;
                var a = [i.offcanvas];
                "left" != o.position && a.push(i.mm(o.position)), "back" != o.zposition && a.push(i.mm(o.zposition)), this.$menu.addClass(a.join(" ")).parent().removeClass(i.wrapper), e[t].support.csstransforms || this.$menu.addClass(i["no-csstransforms"]), e[t].support.csstransforms3d || this.$menu.addClass(i["no-csstransforms3d"]), this.setPage(r.$page), this._initBlocker(), this["_initWindow_" + n](), this.$menu[s.menuInjectMethod + "To"](s.menuWrapperSelector);
                var l = window.location.hash;
                if (l) {
                    var d = this._getOriginalMenuId();
                    d && d == l.slice(1) && this.open()
                }
            }
        },
        add: function() {
            i = e[t]._c, o = e[t]._d, s = e[t]._e, i.add("offcanvas slideout blocking modal background opening blocker page no-csstransforms3d"), o.add("style"), s.add("resize")
        },
        clickAnchor: function(e, t) {
            var o = this;
            if (this.opts[n]) {
                var s = this._getOriginalMenuId();
                if (s && e.is('[href="#' + s + '"]')) {
                    if (t) return !0;
                    var a = e.closest("." + i.menu);
                    if (a.length) {
                        var l = a.data("mmenu");
                        if (l && l.close) return l.close(), o.__transitionend(a, function() {
                            o.open()
                        }, o.conf.transitionDuration), !0
                    }
                    return this.open(), !0
                }
                if (r.$page) return s = r.$page.first().attr("id"), s && e.is('[href="#' + s + '"]') ? (this.close(), !0) : void 0
            }
        }
    }, e[t].defaults[n] = {
        position: "left",
        zposition: "back",
        blockUI: !0,
        moveBackground: !0
    }, e[t].configuration[n] = {
        pageNodetype: "div",
        pageSelector: null,
        noPageSelector: [],
        wrapPageIfNeeded: !0,
        menuWrapperSelector: "body",
        menuInjectMethod: "prepend"
    }, e[t].prototype.open = function() {
        if (!this.vars.opened) {
            var e = this;
            this._openSetup(), setTimeout(function() {
                e._openFinish()
            }, this.conf.openingInterval), this.trigger("open")
        }
    }, e[t].prototype._openSetup = function() {
        var t = this,
            a = this.opts[n];
        this.closeAllOthers(), r.$page.each(function() {
            e(this).data(o.style, e(this).attr("style") || "")
        }), r.$wndw.trigger(s.resize + "-" + n, [!0]);
        var l = [i.opened];
        a.blockUI && l.push(i.blocking), "modal" == a.blockUI && l.push(i.modal), a.moveBackground && l.push(i.background), "left" != a.position && l.push(i.mm(this.opts[n].position)), "back" != a.zposition && l.push(i.mm(this.opts[n].zposition)), this.opts.extensions && l.push(this.opts.extensions), r.$html.addClass(l.join(" ")), setTimeout(function() {
            t.vars.opened = !0
        }, this.conf.openingInterval), this.$menu.addClass(i.current + " " + i.opened)
    }, e[t].prototype._openFinish = function() {
        var e = this;
        this.__transitionend(r.$page.first(), function() {
            e.trigger("opened")
        }, this.conf.transitionDuration), r.$html.addClass(i.opening), this.trigger("opening")
    }, e[t].prototype.close = function() {
        if (this.vars.opened) {
            var t = this;
            this.__transitionend(r.$page.first(), function() {
                t.$menu.removeClass(i.current + " " + i.opened);
                var s = [i.opened, i.blocking, i.modal, i.background, i.mm(t.opts[n].position), i.mm(t.opts[n].zposition)];
                t.opts.extensions && s.push(t.opts.extensions), r.$html.removeClass(s.join(" ")), r.$page.each(function() {
                    e(this).attr("style", e(this).data(o.style))
                }), t.vars.opened = !1, t.trigger("closed")
            }, this.conf.transitionDuration), r.$html.removeClass(i.opening), this.trigger("close"), this.trigger("closing")
        }
    }, e[t].prototype.closeAllOthers = function() {
        r.$allMenus.not(this.$menu).each(function() {
            var n = e(this).data(t);
            n && n.close && n.close()
        })
    }, e[t].prototype.setPage = function(t) {
        var o = this,
            s = this.conf[n];
        t && t.length || (t = r.$body.find(s.pageSelector), s.noPageSelector.length && (t = t.not(s.noPageSelector.join(", "))), t.length > 1 && s.wrapPageIfNeeded && (t = t.wrapAll("<" + this.conf[n].pageNodetype + " />").parent())), t.each(function() {
            e(this).attr("id", e(this).attr("id") || o.__getUniqueId())
        }), t.addClass(i.page + " " + i.slideout), r.$page = t, this.trigger("setPage", t)
    }, e[t].prototype["_initWindow_" + n] = function() {
        r.$wndw.off(s.keydown + "-" + n).on(s.keydown + "-" + n, function(e) {
            if (r.$html.hasClass(i.opened) && 9 == e.keyCode) return e.preventDefault(), !1
        });
        var e = 0;
        r.$wndw.off(s.resize + "-" + n).on(s.resize + "-" + n, function(t, n) {
            if (1 == r.$page.length && (n || r.$html.hasClass(i.opened))) {
                var o = r.$wndw.height();
                (n || o != e) && (e = o, r.$page.css("minHeight", o))
            }
        })
    }, e[t].prototype._initBlocker = function() {
        var t = this;
        this.opts[n].blockUI && (r.$blck || (r.$blck = e('<div id="' + i.blocker + '" class="' + i.slideout + '" />')), r.$blck.appendTo(r.$body).off(s.touchstart + "-" + n + " " + s.touchmove + "-" + n).on(s.touchstart + "-" + n + " " + s.touchmove + "-" + n, function(e) {
            e.preventDefault(), e.stopPropagation(), r.$blck.trigger(s.mousedown + "-" + n)
        }).off(s.mousedown + "-" + n).on(s.mousedown + "-" + n, function(e) {
            e.preventDefault(), r.$html.hasClass(i.modal) || (t.closeAllOthers(), t.close())
        }))
    };
    var i, o, s, r
}(jQuery),
function(e) {
    var t = "mmenu",
        n = "scrollBugFix";
    e[t].addons[n] = {
        setup: function() {
            var o = this,
                a = this.opts[n];
            if (this.conf[n], r = e[t].glbl, e[t].support.touch && this.opts.offCanvas && this.opts.offCanvas.blockUI && ("boolean" == typeof a && (a = {
                    fix: a
                }), "object" != typeof a && (a = {}), a = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], a), a.fix)) {
                var l = this.$menu.attr("id"),
                    d = !1;
                this.bind("opening", function() {
                    this.$pnls.children("." + i.current).scrollTop(0)
                }), r.$docu.on(s.touchmove, function(e) {
                    o.vars.opened && e.preventDefault()
                }), r.$body.on(s.touchstart, "#" + l + "> ." + i.panels + "> ." + i.current, function(e) {
                    o.vars.opened && (d || (d = !0, 0 === e.currentTarget.scrollTop ? e.currentTarget.scrollTop = 1 : e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight && (e.currentTarget.scrollTop -= 1), d = !1))
                }).on(s.touchmove, "#" + l + "> ." + i.panels + "> ." + i.current, function(t) {
                    o.vars.opened && e(this)[0].scrollHeight > e(this).innerHeight() && t.stopPropagation()
                }), r.$wndw.on(s.orientationchange, function() {
                    o.$pnls.children("." + i.current).scrollTop(0).css({
                        "-webkit-overflow-scrolling": "auto"
                    }).css({
                        "-webkit-overflow-scrolling": "touch"
                    })
                })
            }
        },
        add: function() {
            i = e[t]._c, o = e[t]._d, s = e[t]._e
        },
        clickAnchor: function(e, t) {}
    }, e[t].defaults[n] = {
        fix: !0
    };
    var i, o, s, r
}(jQuery),
function(e) {
    var t = "mmenu",
        n = "autoHeight";
    e[t].addons[n] = {
        setup: function() {
            if (this.opts.offCanvas) {
                var o = this.opts[n];
                if (this.conf[n], r = e[t].glbl, "boolean" == typeof o && o && (o = {
                        height: "auto"
                    }), "string" == typeof o && (o = {
                        height: o
                    }), "object" != typeof o && (o = {}), o = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], o), "auto" == o.height || "highest" == o.height) {
                    this.$menu.addClass(i.autoheight);
                    var s = function(t) {
                        if (this.vars.opened) {
                            var n = parseInt(this.$pnls.css("top"), 10) || 0,
                                s = parseInt(this.$pnls.css("bottom"), 10) || 0,
                                r = 0;
                            this.$menu.addClass(i.measureheight), "auto" == o.height ? (t = t || this.$pnls.children("." + i.current), t.is("." + i.vertical) && (t = t.parents("." + i.panel).not("." + i.vertical).first()), r = t.outerHeight()) : "highest" == o.height && this.$pnls.children().each(function() {
                                var t = e(this);
                                t.is("." + i.vertical) && (t = t.parents("." + i.panel).not("." + i.vertical).first()), r = Math.max(r, t.outerHeight())
                            }), this.$menu.height(r + n + s).removeClass(i.measureheight)
                        }
                    };
                    this.bind("opening", s), "highest" == o.height && this.bind("initPanels", s), "auto" == o.height && (this.bind("update", s), this.bind("openPanel", s), this.bind("closePanel", s))
                }
            }
        },
        add: function() {
            i = e[t]._c, o = e[t]._d, s = e[t]._e, i.add("autoheight measureheight"), s.add("resize")
        },
        clickAnchor: function(e, t) {}
    }, e[t].defaults[n] = {
        height: "default"
    };
    var i, o, s, r
}(jQuery),
function(e) {
    var t = "mmenu",
        n = "backButton";
    e[t].addons[n] = {
        setup: function() {
            if (this.opts.offCanvas) {
                var o = this,
                    s = this.opts[n];
                if (this.conf[n], r = e[t].glbl, "boolean" == typeof s && (s = {
                        close: s
                    }), "object" != typeof s && (s = {}), s = e.extend(!0, {}, e[t].defaults[n], s), s.close) {
                    var a = "#" + o.$menu.attr("id");
                    this.bind("opened", function(e) {
                        location.hash != a && history.pushState(null, document.title, a)
                    }), e(window).on("popstate", function(e) {
                        r.$html.hasClass(i.opened) ? (e.stopPropagation(), o.close()) : location.hash == a && (e.stopPropagation(), o.open())
                    })
                }
            }
        },
        add: function() {
            return window.history && window.history.pushState ? (i = e[t]._c, o = e[t]._d, void(s = e[t]._e)) : void(e[t].addons[n].setup = function() {})
        },
        clickAnchor: function(e, t) {}
    }, e[t].defaults[n] = {
        close: !1
    };
    var i, o, s, r
}(jQuery),
function(e) {
    var t = "mmenu",
        n = "columns";
    e[t].addons[n] = {
        setup: function() {
            var o = this.opts[n];
            if (this.conf[n], r = e[t].glbl, "boolean" == typeof o && (o = {
                    add: o
                }), "number" == typeof o && (o = {
                    add: !0,
                    visible: o
                }), "object" != typeof o && (o = {}), "number" == typeof o.visible && (o.visible = {
                    min: o.visible,
                    max: o.visible
                }), o = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], o), o.add) {
                o.visible.min = Math.max(1, Math.min(6, o.visible.min)), o.visible.max = Math.max(o.visible.min, Math.min(6, o.visible.max)), this.$menu.addClass(i.columns);
                for (var s = this.opts.offCanvas ? this.$menu.add(r.$html) : this.$menu, a = [], l = 0; l <= o.visible.max; l++) a.push(i.columns + "-" + l);
                a = a.join(" ");
                var d = function(e) {
                        h.call(this, this.$pnls.children("." + i.current))
                    },
                    c = function() {
                        var e = this.$pnls.children("." + i.panel).filter("." + i.opened).length;
                        e = Math.min(o.visible.max, Math.max(o.visible.min, e)), s.removeClass(a).addClass(i.columns + "-" + e)
                    },
                    u = function() {
                        this.opts.offCanvas && r.$html.removeClass(a)
                    },
                    h = function(t) {
                        this.$pnls.children("." + i.panel).removeClass(a).filter("." + i.subopened).removeClass(i.hidden).add(t).slice(-o.visible.max).each(function(t) {
                            e(this).addClass(i.columns + "-" + t)
                        })
                    };
                this.bind("open", c), this.bind("close", u), this.bind("initPanels", d), this.bind("openPanel", h), this.bind("openingPanel", c), this.bind("openedPanel", c), this.opts.offCanvas || c.call(this)
            }
        },
        add: function() {
            i = e[t]._c, o = e[t]._d, s = e[t]._e, i.add("columns")
        },
        clickAnchor: function(t, o) {
            if (!this.opts[n].add) return !1;
            if (o) {
                var s = t.attr("href");
                if (s.length > 1 && "#" == s.slice(0, 1)) try {
                    var r = e(s, this.$menu);
                    if (r.is("." + i.panel))
                        for (var a = parseInt(t.closest("." + i.panel).attr("class").split(i.columns + "-")[1].split(" ")[0], 10) + 1; a !== !1;) {
                            var l = this.$pnls.children("." + i.columns + "-" + a);
                            if (!l.length) {
                                a = !1;
                                break
                            }
                            a++, l.removeClass(i.subopened).removeClass(i.opened).removeClass(i.current).removeClass(i.highest).addClass(i.hidden)
                        }
                } catch (d) {}
            }
        }
    }, e[t].defaults[n] = {
        add: !1,
        visible: {
            min: 1,
            max: 3
        }
    };
    var i, o, s, r
}(jQuery),
function(e) {
    var t = "mmenu",
        n = "counters";
    e[t].addons[n] = {
        setup: function() {
            var s = this,
                a = this.opts[n];
            this.conf[n], r = e[t].glbl, "boolean" == typeof a && (a = {
                add: a,
                update: a
            }), "object" != typeof a && (a = {}), a = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], a), this.bind("initPanels", function(t) {
                this.__refactorClass(e("em", t), this.conf.classNames[n].counter, "counter")
            }), a.add && this.bind("initPanels", function(t) {
                var n;
                switch (a.addTo) {
                    case "panels":
                        n = t;
                        break;
                    default:
                        n = t.filter(a.addTo)
                }
                n.each(function() {
                    var t = e(this).data(o.parent);
                    t && (t.children("em." + i.counter).length || t.prepend(e('<em class="' + i.counter + '" />')))
                })
            }), a.update && this.bind("update", function() {
                this.$pnls.find("." + i.panel).each(function() {
                    var t = e(this),
                        n = t.data(o.parent);
                    if (n) {
                        var r = n.children("em." + i.counter);
                        r.length && (t = t.children("." + i.listview), t.length && r.html(s.__filterListItems(t.children()).length))
                    }
                })
            })
        },
        add: function() {
            i = e[t]._c, o = e[t]._d, s = e[t]._e, i.add("counter search noresultsmsg")
        },
        clickAnchor: function(e, t) {}
    }, e[t].defaults[n] = {
        add: !1,
        addTo: "panels",
        update: !1
    }, e[t].configuration.classNames[n] = {
        counter: "Counter"
    };
    var i, o, s, r
}(jQuery),
function(e) {
    var t = "mmenu",
        n = "dividers";
    e[t].addons[n] = {
        setup: function() {
            var o = this,
                a = this.opts[n];
            if (this.conf[n], r = e[t].glbl, "boolean" == typeof a && (a = {
                    add: a,
                    fixed: a
                }), "object" != typeof a && (a = {}), a = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], a), this.bind("initPanels", function(t) {
                    this.__refactorClass(e("li", this.$menu), this.conf.classNames[n].collapsed, "collapsed")
                }), a.add && this.bind("initPanels", function(t) {
                    var n;
                    switch (a.addTo) {
                        case "panels":
                            n = t;
                            break;
                        default:
                            n = t.filter(a.addTo)
                    }
                    e("." + i.divider, n).remove(), n.find("." + i.listview).not("." + i.vertical).each(function() {
                        var t = "";
                        o.__filterListItems(e(this).children()).each(function() {
                            var n = e.trim(e(this).children("a, span").text()).slice(0, 1).toLowerCase();
                            n != t && n.length && (t = n, e('<li class="' + i.divider + '">' + n + "</li>").insertBefore(this))
                        })
                    })
                }), a.collapse && this.bind("initPanels", function(t) {
                    e("." + i.divider, t).each(function() {
                        var t = e(this),
                            n = t.nextUntil("." + i.divider, "." + i.collapsed);
                        n.length && (t.children("." + i.subopen).length || (t.wrapInner("<span />"), t.prepend('<a href="#" class="' + i.subopen + " " + i.fullsubopen + '" />')))
                    })
                }), a.fixed) {
                var l = function(t) {
                    t = t || this.$pnls.children("." + i.current);
                    var n = t.find("." + i.divider).not("." + i.hidden);
                    if (n.length) {
                        this.$menu.addClass(i.hasdividers);
                        var o = t.scrollTop() || 0,
                            s = "";
                        t.is(":visible") && t.find("." + i.divider).not("." + i.hidden).each(function() {
                            e(this).position().top + o < o + 1 && (s = e(this).text())
                        }), this.$fixeddivider.text(s)
                    } else this.$menu.removeClass(i.hasdividers)
                };
                this.$fixeddivider = e('<ul class="' + i.listview + " " + i.fixeddivider + '"><li class="' + i.divider + '"></li></ul>').prependTo(this.$pnls).children(), this.bind("openPanel", l), this.bind("update", l), this.bind("initPanels", function(t) {
                    t.off(s.scroll + "-dividers " + s.touchmove + "-dividers").on(s.scroll + "-dividers " + s.touchmove + "-dividers", function(t) {
                        l.call(o, e(this))
                    })
                })
            }
        },
        add: function() {
            i = e[t]._c, o = e[t]._d, s = e[t]._e, i.add("collapsed uncollapsed fixeddivider hasdividers"), s.add("scroll")
        },
        clickAnchor: function(e, t) {
            if (this.opts[n].collapse && t) {
                var o = e.parent();
                if (o.is("." + i.divider)) {
                    var s = o.nextUntil("." + i.divider, "." + i.collapsed);
                    return o.toggleClass(i.opened), s[o.hasClass(i.opened) ? "addClass" : "removeClass"](i.uncollapsed), !0
                }
            }
            return !1
        }
    }, e[t].defaults[n] = {
        add: !1,
        addTo: "panels",
        fixed: !1,
        collapse: !1
    }, e[t].configuration.classNames[n] = {
        collapsed: "Collapsed"
    };
    var i, o, s, r
}(jQuery),
function(e) {
    function t(e, t, n) {
        return e < t && (e = t), e > n && (e = n), e
    }

    function n(n, i, o) {
        var a, l, d, c, u, h = this,
            f = {},
            p = 0,
            m = !1,
            g = !1,
            v = 0,
            b = 0;
        switch (this.opts.offCanvas.position) {
            case "left":
            case "right":
                f.events = "panleft panright", f.typeLower = "x", f.typeUpper = "X", g = "width";
                break;
            case "top":
            case "bottom":
                f.events = "panup pandown", f.typeLower = "y", f.typeUpper = "Y", g = "height"
        }
        switch (this.opts.offCanvas.position) {
            case "right":
            case "bottom":
                f.negative = !0, c = function(e) {
                    e >= o.$wndw[g]() - n.maxStartPos && (p = 1)
                };
                break;
            default:
                f.negative = !1, c = function(e) {
                    e <= n.maxStartPos && (p = 1)
                }
        }
        switch (this.opts.offCanvas.position) {
            case "left":
                f.open_dir = "right", f.close_dir = "left";
                break;
            case "right":
                f.open_dir = "left", f.close_dir = "right";
                break;
            case "top":
                f.open_dir = "down", f.close_dir = "up";
                break;
            case "bottom":
                f.open_dir = "up", f.close_dir = "down"
        }
        switch (this.opts.offCanvas.zposition) {
            case "front":
                u = function() {
                    return this.$menu
                };
                break;
            default:
                u = function() {
                    return e("." + r.slideout)
                }
        }
        var y = this.__valueOrFn(n.node, this.$menu, o.$page);
        "string" == typeof y && (y = e(y));
        var A = new Hammer(y[0], this.opts[s].vendors.hammer);
        A.on("panstart", function(e) {
            c(e.center[f.typeLower]), o.$slideOutNodes = u(), m = f.open_dir
        }).on(f.events + " panend", function(e) {
            p > 0 && e.preventDefault()
        }).on(f.events, function(e) {
            if (a = e["delta" + f.typeUpper], f.negative && (a = -a), a != v && (m = a >= v ? f.open_dir : f.close_dir), v = a, v > n.threshold && 1 == p) {
                if (o.$html.hasClass(r.opened)) return;
                p = 2, h._openSetup(), h.trigger("opening"), o.$html.addClass(r.dragging), b = t(o.$wndw[g]() * i[g].perc, i[g].min, i[g].max)
            }
            2 == p && (l = t(v, 10, b) - ("front" == h.opts.offCanvas.zposition ? b : 0), f.negative && (l = -l), d = "translate" + f.typeUpper + "(" + l + "px )", o.$slideOutNodes.css({
                "-webkit-transform": "-webkit-" + d,
                transform: d
            }))
        }).on("panend", function(e) {
            2 == p && (o.$html.removeClass(r.dragging), o.$slideOutNodes.css("transform", ""), h[m == f.open_dir ? "_openFinish" : "close"]()), p = 0
        })
    }

    function i(t, n, i, o) {
        var l = this;
        t.each(function() {
            var t = e(this),
                n = t.data(a.parent);
            if (n && (n = n.closest("." + r.panel), n.length)) {
                var i = new Hammer(t[0], l.opts[s].vendors.hammer);
                i.on("panright", function(e) {
                    l.openPanel(n)
                })
            }
        })
    }
    var o = "mmenu",
        s = "drag";
    e[o].addons[s] = {
        setup: function() {
            if (this.opts.offCanvas) {
                var t = this.opts[s],
                    r = this.conf[s];
                d = e[o].glbl, "boolean" == typeof t && (t = {
                    menu: t,
                    panels: t
                }), "object" != typeof t && (t = {}), "boolean" == typeof t.menu && (t.menu = {
                    open: t.menu
                }), "object" != typeof t.menu && (t.menu = {}), "boolean" == typeof t.panels && (t.panels = {
                    close: t.panels
                }), "object" != typeof t.panels && (t.panels = {}), t = this.opts[s] = e.extend(!0, {}, e[o].defaults[s], t), t.menu.open && n.call(this, t.menu, r.menu, d), t.panels.close && this.bind("initPanels", function(e) {
                    i.call(this, e, t.panels, r.panels, d)
                })
            }
        },
        add: function() {
            return "function" != typeof Hammer || Hammer.VERSION < 2 ? void(e[o].addons[s].setup = function() {}) : (r = e[o]._c, a = e[o]._d, l = e[o]._e, void r.add("dragging"))
        },
        clickAnchor: function(e, t) {}
    }, e[o].defaults[s] = {
        menu: {
            open: !1,
            maxStartPos: 100,
            threshold: 50
        },
        panels: {
            close: !1
        },
        vendors: {
            hammer: {}
        }
    }, e[o].configuration[s] = {
        menu: {
            width: {
                perc: .8,
                min: 140,
                max: 440
            },
            height: {
                perc: .8,
                min: 140,
                max: 880
            }
        },
        panels: {}
    };
    var r, a, l, d
}(jQuery),
function(e) {
    var t = "mmenu",
        n = "fixedElements";
    e[t].addons[n] = {
        setup: function() {
            if (this.opts.offCanvas) {
                var i = this.opts[n];
                this.conf[n], r = e[t].glbl, i = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], i);
                var o = function(e) {
                    var t = this.conf.classNames[n].fixed;
                    this.__refactorClass(e.find("." + t), t, "slideout").appendTo(r.$body)
                };
                o.call(this, r.$page), this.bind("setPage", o)
            }
        },
        add: function() {
            i = e[t]._c, o = e[t]._d, s = e[t]._e, i.add("fixed")
        },
        clickAnchor: function(e, t) {}
    }, e[t].configuration.classNames[n] = {
        fixed: "Fixed"
    };
    var i, o, s, r
}(jQuery),
function(e) {
    var t = "mmenu",
        n = "dropdown";
    e[t].addons[n] = {
        setup: function() {
            if (this.opts.offCanvas) {
                var a = this,
                    l = this.opts[n],
                    d = this.conf[n];
                if (r = e[t].glbl, "boolean" == typeof l && l && (l = {
                        drop: l
                    }), "object" != typeof l && (l = {}), "string" == typeof l.position && (l.position = {
                        of: l.position
                    }), l = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], l), l.drop) {
                    if ("string" != typeof l.position.of) {
                        var c = this.$menu.attr("id");
                        c && c.length && (this.conf.clone && (c = i.umm(c)), l.position.of = '[href="#' + c + '"]')
                    }
                    if ("string" == typeof l.position.of) {
                        var u = e(l.position.of);
                        if (u.length) {
                            this.$menu.addClass(i.dropdown), l.tip && this.$menu.addClass(i.tip), l.event = l.event.split(" "), 1 == l.event.length && (l.event[1] = l.event[0]), "hover" == l.event[0] && u.on(s.mouseenter + "-dropdown", function() {
                                a.open()
                            }), "hover" == l.event[1] && this.$menu.on(s.mouseleave + "-dropdown", function() {
                                a.close()
                            }), this.bind("opening", function() {
                                this.$menu.data(o.style, this.$menu.attr("style") || ""), r.$html.addClass(i.dropdown)
                            }), this.bind("closed", function() {
                                this.$menu.attr("style", this.$menu.data(o.style)), r.$html.removeClass(i.dropdown)
                            });
                            var h = function(o, s) {
                                    var a = s[0],
                                        c = s[1],
                                        h = "x" == o ? "scrollLeft" : "scrollTop",
                                        f = "x" == o ? "outerWidth" : "outerHeight",
                                        p = "x" == o ? "left" : "top",
                                        m = "x" == o ? "right" : "bottom",
                                        g = "x" == o ? "width" : "height",
                                        v = "x" == o ? "maxWidth" : "maxHeight",
                                        b = null,
                                        y = r.$wndw[h](),
                                        A = u.offset()[p] -= y,
                                        _ = A + u[f](),
                                        w = r.$wndw[g](),
                                        x = d.offset.button[o] + d.offset.viewport[o];
                                    if (l.position[o]) switch (l.position[o]) {
                                        case "left":
                                        case "bottom":
                                            b = "after";
                                            break;
                                        case "right":
                                        case "top":
                                            b = "before"
                                    }
                                    null === b && (b = A + (_ - A) / 2 < w / 2 ? "after" : "before");
                                    var C, k;
                                    return "after" == b ? (C = "x" == o ? A : _, k = w - (C + x), a[p] = C + d.offset.button[o], a[m] = "auto", c.push(i["x" == o ? "tipleft" : "tiptop"])) : (C = "x" == o ? _ : A, k = C - x, a[m] = "calc( 100% - " + (C - d.offset.button[o]) + "px )", a[p] = "auto", c.push(i["x" == o ? "tipright" : "tipbottom"])), a[v] = Math.min(e[t].configuration[n][g].max, k), [a, c]
                                },
                                f = function(e) {
                                    if (this.vars.opened) {
                                        this.$menu.attr("style", this.$menu.data(o.style));
                                        var t = [{},
                                            []
                                        ];
                                        t = h.call(this, "y", t), t = h.call(this, "x", t), this.$menu.css(t[0]), l.tip && this.$menu.removeClass(i.tipleft + " " + i.tipright + " " + i.tiptop + " " + i.tipbottom).addClass(t[1].join(" "))
                                    }
                                };
                            this.bind("opening", f), r.$wndw.on(s.resize + "-dropdown", function(e) {
                                f.call(a)
                            }), this.opts.offCanvas.blockUI || r.$wndw.on(s.scroll + "-dropdown", function(e) {
                                f.call(a)
                            })
                        }
                    }
                }
            }
        },
        add: function() {
            i = e[t]._c, o = e[t]._d, s = e[t]._e, i.add("dropdown tip tipleft tipright tiptop tipbottom"), s.add("mouseenter mouseleave resize scroll")
        },
        clickAnchor: function(e, t) {}
    }, e[t].defaults[n] = {
        drop: !1,
        event: "click",
        position: {},
        tip: !0
    }, e[t].configuration[n] = {
        offset: {
            button: {
                x: -10,
                y: 10
            },
            viewport: {
                x: 20,
                y: 20
            }
        },
        height: {
            max: 880
        },
        width: {
            max: 440
        }
    };
    var i, o, s, r
}(jQuery),
function(e) {
    var t = "mmenu",
        n = "iconPanels";
    e[t].addons[n] = {
        setup: function() {
            var o = this,
                s = this.opts[n];
            if (this.conf[n], r = e[t].glbl, "boolean" == typeof s && (s = {
                    add: s
                }), "number" == typeof s && (s = {
                    add: !0,
                    visible: s
                }), "object" != typeof s && (s = {}), s = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], s), s.visible++, s.add) {
                this.$menu.addClass(i.iconpanel);
                for (var a = [], l = 0; l <= s.visible; l++) a.push(i.iconpanel + "-" + l);
                a = a.join(" ");
                var d = function(t) {
                    t.hasClass(i.vertical) || o.$pnls.children("." + i.panel).removeClass(a).filter("." + i.subopened).removeClass(i.hidden).add(t).not("." + i.vertical).slice(-s.visible).each(function(t) {
                        e(this).addClass(i.iconpanel + "-" + t)
                    })
                };
                this.bind("openPanel", d), this.bind("initPanels", function(t) {
                    d.call(o, o.$pnls.children("." + i.current)), t.not("." + i.vertical).each(function() {
                        e(this).children("." + i.subblocker).length || e(this).prepend('<a href="#' + e(this).closest("." + i.panel).attr("id") + '" class="' + i.subblocker + '" />')
                    })
                })
            }
        },
        add: function() {
            i = e[t]._c, o = e[t]._d, s = e[t]._e, i.add("iconpanel subblocker")
        },
        clickAnchor: function(e, t) {}
    }, e[t].defaults[n] = {
        add: !1,
        visible: 3
    };
    var i, o, s, r
}(jQuery),
function(e) {
    function t(t, n) {
        t || (t = this.$pnls.children("." + s.current));
        var i = e();
        "default" == n && (i = t.children("." + s.listview).find("a[href]").not(":hidden"), i.length || (i = t.find(d).not(":hidden")), i.length || (i = this.$menu.children("." + s.navbar).find(d).not(":hidden"))), i.length || (i = this.$menu.children("." + s.tabstart)), i.first().focus()
    }

    function n(e) {
        e || (e = this.$pnls.children("." + s.current));
        var t = this.$pnls.children("." + s.panel),
            n = t.not(e);
        n.find(d).attr("tabindex", -1), e.find(d).attr("tabindex", 0), e.find("input.mm-toggle, input.mm-check").attr("tabindex", -1)
    }
    var i = "mmenu",
        o = "keyboardNavigation";
    e[i].addons[o] = {
        setup: function() {
            var r = this,
                a = this.opts[o];
            if (this.conf[o], l = e[i].glbl, "boolean" != typeof a && "string" != typeof a || (a = {
                    enable: a
                }), "object" != typeof a && (a = {}), a = this.opts[o] = e.extend(!0, {}, e[i].defaults[o], a), a.enable) {
                a.enhance && this.$menu.addClass(s.keyboardfocus);
                var c = e('<input class="' + s.tabstart + '" tabindex="0" type="text" />'),
                    u = e('<input class="' + s.tabend + '" tabindex="0" type="text" />');
                this.bind("initPanels", function() {
                    this.$menu.prepend(c).append(u).children("." + s.navbar).find(d).attr("tabindex", 0)
                }), this.bind("open", function() {
                    n.call(this), this.__transitionend(this.$menu, function() {
                        t.call(r, null, a.enable)
                    }, this.conf.transitionDuration)
                }), this.bind("openPanel", function(e) {
                    n.call(this, e), this.__transitionend(e, function() {
                        t.call(r, e, a.enable)
                    }, this.conf.transitionDuration)
                }), this["_initWindow_" + o](a.enhance)
            }
        },
        add: function() {
            s = e[i]._c, r = e[i]._d, a = e[i]._e, s.add("tabstart tabend keyboardfocus"), a.add("focusin keydown")
        },
        clickAnchor: function(e, t) {}
    }, e[i].defaults[o] = {
        enable: !1,
        enhance: !1
    }, e[i].configuration[o] = {}, e[i].prototype["_initWindow_" + o] = function(t) {
        l.$wndw.off(a.keydown + "-offCanvas"), l.$wndw.off(a.focusin + "-" + o).on(a.focusin + "-" + o, function(t) {
            if (l.$html.hasClass(s.opened)) {
                var n = e(t.target);
                n.is("." + s.tabend) && n.parent().find("." + s.tabstart).focus()
            }
        }), l.$wndw.off(a.keydown + "-" + o).on(a.keydown + "-" + o, function(t) {
            var n = e(t.target),
                i = n.closest("." + s.menu);
            if (i.length)
                if (i.data("mmenu"), n.is("input, textarea"));
                else switch (t.keyCode) {
                    case 13:
                        (n.is(".mm-toggle") || n.is(".mm-check")) && n.trigger(a.click);
                        break;
                    case 32:
                    case 37:
                    case 38:
                    case 39:
                    case 40:
                        t.preventDefault()
                }
        }), t && l.$wndw.on(a.keydown + "-" + o, function(t) {
            var n = e(t.target),
                i = n.closest("." + s.menu);
            if (i.length) {
                var o = i.data("mmenu");
                if (n.is("input, textarea")) switch (t.keyCode) {
                    case 27:
                        n.val("")
                } else switch (t.keyCode) {
                    case 8:
                        var a = n.closest("." + s.panel).data(r.parent);
                        a && a.length && o.openPanel(a.closest("." + s.panel));
                        break;
                    case 27:
                        i.hasClass(s.offcanvas) && o.close()
                }
            }
        })
    };
    var s, r, a, l, d = "input, select, textarea, button, label, a[href]"
}(jQuery),
function(e) {
    var t = "mmenu",
        n = "lazySubmenus";
    e[t].addons[n] = {
        setup: function() {
            var s = this.opts[n];
            this.conf[n], r = e[t].glbl, "boolean" == typeof s && (s = {
                load: s
            }), "object" != typeof s && (s = {}), s = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], s), s.load && (this.$menu.find("li").find("li").children(this.conf.panelNodetype).each(function() {
                e(this).parent().addClass(i.lazysubmenu).data(o.lazysubmenu, this).end().remove()
            }), this.bind("openingPanel", function(t) {
                var n = t.find("." + i.lazysubmenu);
                n.length && (n.each(function() {
                    e(this).append(e(this).data(o.lazysubmenu)).removeData(o.lazysubmenu).removeClass(i.lazysubmenu)
                }), this.initPanels(t))
            }))
        },
        add: function() {
            i = e[t]._c, o = e[t]._d, s = e[t]._e, i.add("lazysubmenu"), o.add("lazysubmenu")
        },
        clickAnchor: function(e, t) {}
    }, e[t].defaults[n] = {
        load: !1
    }, e[t].configuration[n] = {};
    var i, o, s, r
}(jQuery),
function(e) {
    var t = "mmenu",
        n = "navbars";
    e[t].addons[n] = {
        setup: function() {
            var o = this,
                s = this.opts[n],
                a = this.conf[n];
            if (r = e[t].glbl, "undefined" != typeof s) {
                s instanceof Array || (s = [s]);
                var l = {};
                if (s.length) {
                    e.each(s, function(r) {
                        var d = s[r];
                        "boolean" == typeof d && d && (d = {}), "object" != typeof d && (d = {}), "undefined" == typeof d.content && (d.content = ["prev", "title"]), d.content instanceof Array || (d.content = [d.content]), d = e.extend(!0, {}, o.opts.navbar, d);
                        var c = d.position,
                            u = d.height;
                        "number" != typeof u && (u = 1), u = Math.min(4, Math.max(1, u)), "bottom" != c && (c = "top"), l[c] || (l[c] = 0), l[c]++;
                        var h = e("<div />").addClass(i.navbar + " " + i.navbar + "-" + c + " " + i.navbar + "-" + c + "-" + l[c] + " " + i.navbar + "-size-" + u);
                        l[c] += u - 1;
                        for (var f = 0, p = 0, m = d.content.length; p < m; p++) {
                            var g = e[t].addons[n][d.content[p]] || !1;
                            g ? f += g.call(o, h, d, a) : (g = d.content[p], g instanceof e || (g = e(d.content[p])), h.append(g))
                        }
                        f += Math.ceil(h.children().not("." + i.btn).length / u), f > 1 && h.addClass(i.navbar + "-content-" + f), h.children("." + i.btn).length && h.addClass(i.hasbtns), h.prependTo(o.$menu)
                    });
                    for (var d in l) o.$menu.addClass(i.hasnavbar + "-" + d + "-" + l[d])
                }
            }
        },
        add: function() {
            i = e[t]._c, o = e[t]._d, s = e[t]._e, i.add("close hasbtns")
        },
        clickAnchor: function(e, t) {}
    }, e[t].configuration[n] = {
        breadcrumbSeparator: "/"
    }, e[t].configuration.classNames[n] = {};
    var i, o, s, r
}(jQuery),
function(e) {
    var t = "mmenu",
        n = "navbars",
        i = "breadcrumbs";
    e[t].addons[n][i] = function(n, i, o) {
        var s = e[t]._c,
            r = e[t]._d;
        s.add("breadcrumbs separator");
        var a = e('<span class="' + s.breadcrumbs + '" />').appendTo(n);
        this.bind("initPanels", function(t) {
            t.removeClass(s.hasnavbar).each(function() {
                for (var t = [], n = e(this), i = e('<span class="' + s.breadcrumbs + '"></span>'), a = e(this).children().first(), l = !0; a && a.length;) {
                    a.is("." + s.panel) || (a = a.closest("." + s.panel));
                    var d = a.children("." + s.navbar).children("." + s.title).text();
                    t.unshift(l ? "<span>" + d + "</span>" : '<a href="#' + a.attr("id") + '">' + d + "</a>"), l = !1, a = a.data(r.parent)
                }
                i.append(t.join('<span class="' + s.separator + '">' + o.breadcrumbSeparator + "</span>")).appendTo(n.children("." + s.navbar))
            })
        });
        var l = function() {
            a.html(this.$pnls.children("." + s.current).children("." + s.navbar).children("." + s.breadcrumbs).html())
        };
        return this.bind("openPanel", l), this.bind("initPanels", l), 0
    }
}(jQuery),
function(e) {
    var t = "mmenu",
        n = "navbars",
        i = "close";
    e[t].addons[n][i] = function(n, i) {
        var o = e[t]._c,
            s = e[t].glbl,
            r = e('<a class="' + o.close + " " + o.btn + '" href="#" />').appendTo(n),
            a = function(e) {
                r.attr("href", "#" + e.attr("id"))
            };
        return a.call(this, s.$page), this.bind("setPage", a), -1
    }
}(jQuery),
function(e) {
    var t = "mmenu",
        n = "navbars",
        i = "next";
    e[t].addons[n][i] = function(i, o) {
        var s, r, a, l = e[t]._c,
            d = e('<a class="' + l.next + " " + l.btn + '" href="#" />').appendTo(i),
            c = function(e) {
                e = e || this.$pnls.children("." + l.current);
                var t = e.find("." + this.conf.classNames[n].panelNext);
                s = t.attr("href"), a = t.attr("aria-owns"), r = t.html(), d[s ? "attr" : "removeAttr"]("href", s), d[a ? "attr" : "removeAttr"]("aria-owns", a), d[s || r ? "removeClass" : "addClass"](l.hidden), d.html(r)
            };
        return this.bind("openPanel", c), this.bind("initPanels", function() {
            c.call(this)
        }), -1
    }, e[t].configuration.classNames[n].panelNext = "Next"
}(jQuery),
function(e) {
    var t = "mmenu",
        n = "navbars",
        i = "prev";
    e[t].addons[n][i] = function(i, o) {
        var s = e[t]._c,
            r = e('<a class="' + s.prev + " " + s.btn + '" href="#" />').appendTo(i);
        this.bind("initPanels", function(e) {
            e.removeClass(s.hasnavbar).children("." + s.navbar).addClass(s.hidden)
        });
        var a, l, d, c = function(e) {
            if (e = e || this.$pnls.children("." + s.current), !e.hasClass(s.vertical)) {
                var t = e.find("." + this.conf.classNames[n].panelPrev);
                t.length || (t = e.children("." + s.navbar).children("." + s.prev)), a = t.attr("href"), d = t.attr("aria-owns"), l = t.html(), r[a ? "attr" : "removeAttr"]("href", a), r[d ? "attr" : "removeAttr"]("aria-owns", d), r[a || l ? "removeClass" : "addClass"](s.hidden), r.html(l)
            }
        };
        return this.bind("openPanel", c), this.bind("initPanels", function() {
            c.call(this)
        }), -1
    }, e[t].configuration.classNames[n].panelPrev = "Prev"
}(jQuery),
function(e) {
    var t = "mmenu",
        n = "navbars",
        i = "searchfield";
    e[t].addons[n][i] = function(n, i) {
        var o = e[t]._c,
            s = e('<div class="' + o.search + '" />').appendTo(n);
        return "object" != typeof this.opts.searchfield && (this.opts.searchfield = {}), this.opts.searchfield.add = !0, this.opts.searchfield.addTo = s, 0
    }
}(jQuery),
function(e) {
    var t = "mmenu",
        n = "navbars",
        i = "title";
    e[t].addons[n][i] = function(i, o) {
        var s, r, a = e[t]._c,
            l = e('<a class="' + a.title + '" />').appendTo(i),
            d = function(e) {
                if (e = e || this.$pnls.children("." + a.current), !e.hasClass(a.vertical)) {
                    var t = e.find("." + this.conf.classNames[n].panelTitle);
                    t.length || (t = e.children("." + a.navbar).children("." + a.title)), s = t.attr("href"), r = t.html() || o.title, l[s ? "attr" : "removeAttr"]("href", s), l[s || r ? "removeClass" : "addClass"](a.hidden), l.html(r)
                }
            };
        return this.bind("openPanel", d), this.bind("initPanels", function(e) {
            d.call(this)
        }), 0
    }, e[t].configuration.classNames[n].panelTitle = "Title"
}(jQuery),
function(e) {
    var t = "mmenu",
        n = "rtl";
    e[t].addons[n] = {
        setup: function() {
            var o = this.opts[n];
            this.conf[n], r = e[t].glbl, "object" != typeof o && (o = {
                use: o
            }), o = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], o), "boolean" != typeof o.use && (o.use = "rtl" == (r.$html.attr("dir") || "").toLowerCase()), o.use && this.$menu.addClass(i.rtl)
        },
        add: function() {
            i = e[t]._c, o = e[t]._d, s = e[t]._e, i.add("rtl")
        },
        clickAnchor: function(e, t) {}
    }, e[t].defaults[n] = {
        use: "detect"
    };
    var i, o, s, r
}(jQuery),
function(e) {
    function t(e, t, n) {
        e.prop("aria-" + t, n)[n ? "attr" : "removeAttr"]("aria-" + t, n)
    }

    function n(e) {
        return '<span class="' + s.sronly + '">' + e + "</span>"
    }
    var i = "mmenu",
        o = "screenReader";
    e[i].addons[o] = {
        setup: function() {
            var r = this.opts[o],
                a = this.conf[o];
            if (l = e[i].glbl, "boolean" == typeof r && (r = {
                    aria: r,
                    text: r
                }), "object" != typeof r && (r = {}), r = this.opts[o] = e.extend(!0, {}, e[i].defaults[o], r), r.aria) {
                if (this.opts.offCanvas) {
                    var d = function() {
                            t(this.$menu, "hidden", !1)
                        },
                        c = function() {
                            t(this.$menu, "hidden", !0)
                        };
                    this.bind("open", d), this.bind("close", c), t(this.$menu, "hidden", !0)
                }
                var u = function() {},
                    h = function(e) {
                        var n = this.$menu.children("." + s.navbar),
                            i = n.children("." + s.prev),
                            o = n.children("." + s.next),
                            a = n.children("." + s.title);
                        t(i, "hidden", i.is("." + s.hidden)), t(o, "hidden", o.is("." + s.hidden)), r.text && t(a, "hidden", !i.is("." + s.hidden)), t(this.$pnls.children("." + s.panel).not(e), "hidden", !0), t(e, "hidden", !1)
                    };
                this.bind("update", u), this.bind("openPanel", u), this.bind("openPanel", h);
                var f = function(n) {
                    var i;
                    n = n || this.$menu;
                    var o = n.children("." + s.navbar),
                        a = o.children("." + s.prev),
                        l = o.children("." + s.next);
                    o.children("." + s.title), t(a, "haspopup", !0), t(l, "haspopup", !0), i = n.is("." + s.panel) ? n.find("." + s.prev + ", ." + s.next) : a.add(l), i.each(function() {
                        t(e(this), "owns", e(this).attr("href").replace("#", ""))
                    }), r.text && n.is("." + s.panel) && (i = n.find("." + s.listview).find("." + s.fullsubopen).parent().children("span"), t(i, "hidden", !0))
                };
                this.bind("initPanels", f), this.bind("_initAddons", f)
            }
            if (r.text) {
                var p = function(t) {
                    var o;
                    t = t || this.$menu;
                    var r = t.children("." + s.navbar);
                    r.each(function() {
                        var t = e(this),
                            r = e[i].i18n(a.text.closeSubmenu);
                        o = t.children("." + s.title), o.length && (r += " (" + o.text() + ")"), t.children("." + s.prev).html(n(r))
                    }), r.children("." + s.close).html(n(e[i].i18n(a.text.closeMenu))), t.is("." + s.panel) && t.find("." + s.listview).children("li").children("." + s.next).each(function() {
                        var t = e(this),
                            r = e[i].i18n(a.text[t.parent().is("." + s.vertical) ? "toggleSubmenu" : "openSubmenu"]);
                        o = t.nextAll("span, a").first(), o.length && (r += " (" + o.text() + ")"), t.html(n(r))
                    })
                };
                this.bind("initPanels", p), this.bind("_initAddons", p)
            }
        },
        add: function() {
            s = e[i]._c, r = e[i]._d, a = e[i]._e, s.add("sronly")
        },
        clickAnchor: function(e, t) {}
    }, e[i].defaults[o] = {
        aria: !1,
        text: !1
    }, e[i].configuration[o] = {
        text: {
            closeMenu: "Close menu",
            closeSubmenu: "Close submenu",
            openSubmenu: "Open submenu",
            toggleSubmenu: "Toggle submenu"
        }
    };
    var s, r, a, l
}(jQuery),
function(e) {
    function t(e) {
        switch (e) {
            case 9:
            case 16:
            case 17:
            case 18:
            case 37:
            case 38:
            case 39:
            case 40:
                return !0
        }
        return !1
    }
    var n = "mmenu",
        i = "searchfield";
    e[n].addons[i] = {
        setup: function() {
            var l = this,
                d = this.opts[i],
                c = this.conf[i];
            a = e[n].glbl, "boolean" == typeof d && (d = {
                add: d
            }), "object" != typeof d && (d = {}), "boolean" == typeof d.resultsPanel && (d.resultsPanel = {
                add: d.resultsPanel
            }), d = this.opts[i] = e.extend(!0, {}, e[n].defaults[i], d), c = this.conf[i] = e.extend(!0, {}, e[n].configuration[i], c), this.bind("close", function() {
                this.$menu.find("." + o.search).find("input").blur()
            }), this.bind("initPanels", function(a) {
                if (d.add) {
                    var u;
                    switch (d.addTo) {
                        case "panels":
                            u = a;
                            break;
                        default:
                            u = this.$menu.find(d.addTo)
                    }
                    if (u.each(function() {
                            var t = e(this);
                            if (!t.is("." + o.panel) || !t.is("." + o.vertical)) {
                                if (!t.children("." + o.search).length) {
                                    var i = l.__valueOrFn(c.clear, t),
                                        s = l.__valueOrFn(c.form, t),
                                        a = l.__valueOrFn(c.input, t),
                                        u = l.__valueOrFn(c.submit, t),
                                        h = e("<" + (s ? "form" : "div") + ' class="' + o.search + '" />'),
                                        f = e('<input placeholder="' + e[n].i18n(d.placeholder) + '" type="text" autocomplete="off" />');
                                    h.append(f);
                                    var p;
                                    if (a)
                                        for (p in a) f.attr(p, a[p]);
                                    if (i && e('<a class="' + o.btn + " " + o.clear + '" href="#" />').appendTo(h).on(r.click + "-searchfield", function(e) {
                                            e.preventDefault(), f.val("").trigger(r.keyup + "-searchfield")
                                        }), s) {
                                        for (p in s) h.attr(p, s[p]);
                                        u && !i && e('<a class="' + o.btn + " " + o.next + '" href="#" />').appendTo(h).on(r.click + "-searchfield", function(e) {
                                            e.preventDefault(), h.submit()
                                        })
                                    }
                                    t.hasClass(o.search) ? t.replaceWith(h) : t.prepend(h).addClass(o.hassearch)
                                }
                                if (d.noResults) {
                                    var m = t.closest("." + o.panel).length;
                                    if (m || (t = l.$pnls.children("." + o.panel).first()), !t.children("." + o.noresultsmsg).length) {
                                        var g = t.children("." + o.listview).first();
                                        e('<div class="' + o.noresultsmsg + " " + o.hidden + '" />').append(e[n].i18n(d.noResults))[g.length ? "insertAfter" : "prependTo"](g.length ? g : t)
                                    }
                                }
                            }
                        }), d.search) {
                        if (d.resultsPanel.add) {
                            d.showSubPanels = !1;
                            var h = this.$pnls.children("." + o.resultspanel);
                            h.length || (h = e('<div class="' + o.panel + " " + o.resultspanel + " " + o.hidden + '" />').appendTo(this.$pnls).append('<div class="' + o.navbar + " " + o.hidden + '"><a class="' + o.title + '">' + e[n].i18n(d.resultsPanel.title) + "</a></div>").append('<ul class="' + o.listview + '" />').append(this.$pnls.find("." + o.noresultsmsg).first().clone()), this.initPanels(h))
                        }
                        this.$menu.find("." + o.search).each(function() {
                            var n, a, c = e(this),
                                u = c.closest("." + o.panel).length;
                            u ? (n = c.closest("." + o.panel), a = n) : (n = e("." + o.panel, l.$menu), a = l.$menu), d.resultsPanel.add && (n = n.not(h));
                            var f = c.children("input"),
                                p = l.__findAddBack(n, "." + o.listview).children("li"),
                                m = p.filter("." + o.divider),
                                g = l.__filterListItems(p),
                                v = "a",
                                b = v + ", span",
                                y = "",
                                A = function() {
                                    var t = f.val().toLowerCase();
                                    if (t != y) {
                                        if (y = t, d.resultsPanel.add && h.children("." + o.listview).empty(), n.scrollTop(0), g.add(m).addClass(o.hidden).find("." + o.fullsubopensearch).removeClass(o.fullsubopen + " " + o.fullsubopensearch), g.each(function() {
                                                var t = e(this),
                                                    n = v;
                                                (d.showTextItems || d.showSubPanels && t.find("." + o.next)) && (n = b);
                                                var i = t.data(s.searchtext) || t.children(n).text();
                                                i.toLowerCase().indexOf(y) > -1 && t.add(t.prevAll("." + o.divider).first()).removeClass(o.hidden)
                                            }), d.showSubPanels && n.each(function(t) {
                                                var n = e(this);
                                                l.__filterListItems(n.find("." + o.listview).children()).each(function() {
                                                    var t = e(this),
                                                        n = t.data(s.child);
                                                    t.removeClass(o.nosubresults), n && n.find("." + o.listview).children().removeClass(o.hidden)
                                                })
                                            }), d.resultsPanel.add)
                                            if ("" === y) this.closeAllPanels(), this.openPanel(this.$pnls.children("." + o.subopened).last());
                                            else {
                                                var i = e();
                                                n.each(function() {
                                                    var t = l.__filterListItems(e(this).find("." + o.listview).children()).not("." + o.hidden).clone(!0);
                                                    t.length && (d.resultsPanel.dividers && (i = i.add('<li class="' + o.divider + '">' + e(this).children("." + o.navbar).text() + "</li>")), i = i.add(t))
                                                }), i.find("." + o.next).remove(), h.children("." + o.listview).append(i), this.openPanel(h)
                                            } else e(n.get().reverse()).each(function(t) {
                                            var n = e(this),
                                                i = n.data(s.parent);
                                            i && (l.__filterListItems(n.find("." + o.listview).children()).length ? (i.hasClass(o.hidden) && i.children("." + o.next).not("." + o.fullsubopen).addClass(o.fullsubopen).addClass(o.fullsubopensearch), i.removeClass(o.hidden).removeClass(o.nosubresults).prevAll("." + o.divider).first().removeClass(o.hidden)) : u || (n.hasClass(o.opened) && setTimeout(function() {
                                                l.openPanel(i.closest("." + o.panel))
                                            }, (t + 1) * (1.5 * l.conf.openingInterval)), i.addClass(o.nosubresults)))
                                        });
                                        a.find("." + o.noresultsmsg)[g.not("." + o.hidden).length ? "addClass" : "removeClass"](o.hidden), this.update()
                                    }
                                };
                            f.off(r.keyup + "-" + i + " " + r.change + "-" + i).on(r.keyup + "-" + i, function(e) {
                                t(e.keyCode) || A.call(l)
                            }).on(r.change + "-" + i, function(e) {
                                A.call(l)
                            });
                            var _ = c.children("." + o.btn);
                            _.length && f.on(r.keyup + "-" + i, function(e) {
                                _[f.val().length ? "removeClass" : "addClass"](o.hidden)
                            }), f.trigger(r.keyup + "-" + i)
                        })
                    }
                }
            })
        },
        add: function() {
            o = e[n]._c, s = e[n]._d, r = e[n]._e, o.add("clear search hassearch resultspanel noresultsmsg noresults nosubresults fullsubopensearch"), s.add("searchtext"), r.add("change keyup")
        },
        clickAnchor: function(e, t) {}
    }, e[n].defaults[i] = {
        add: !1,
        addTo: "panels",
        placeholder: "Search",
        noResults: "No results found.",
        resultsPanel: {
            add: !1,
            dividers: !0,
            title: "Search results"
        },
        search: !0,
        showTextItems: !1,
        showSubPanels: !0
    }, e[n].configuration[i] = {
        clear: !1,
        form: !1,
        input: !1,
        submit: !1
    };
    var o, s, r, a
}(jQuery),
function(e) {
    var t = "mmenu",
        n = "sectionIndexer";
    e[t].addons[n] = {
        setup: function() {
            var o = this,
                a = this.opts[n];
            this.conf[n], r = e[t].glbl, "boolean" == typeof a && (a = {
                add: a
            }), "object" != typeof a && (a = {}), a = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], a), this.bind("initPanels", function(t) {
                if (a.add) {
                    var n;
                    switch (a.addTo) {
                        case "panels":
                            n = t;
                            break;
                        default:
                            n = e(a.addTo, this.$menu).filter("." + i.panel)
                    }
                    n.find("." + i.divider).closest("." + i.panel).addClass(i.hasindexer)
                }
                if (!this.$indexer && this.$pnls.children("." + i.hasindexer).length) {
                    this.$indexer = e('<div class="' + i.indexer + '" />').prependTo(this.$pnls).append('<a href="#a">a</a><a href="#b">b</a><a href="#c">c</a><a href="#d">d</a><a href="#e">e</a><a href="#f">f</a><a href="#g">g</a><a href="#h">h</a><a href="#i">i</a><a href="#j">j</a><a href="#k">k</a><a href="#l">l</a><a href="#m">m</a><a href="#n">n</a><a href="#o">o</a><a href="#p">p</a><a href="#q">q</a><a href="#r">r</a><a href="#s">s</a><a href="#t">t</a><a href="#u">u</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a><a href="#y">y</a><a href="#z">z</a>'), this.$indexer.children().on(s.mouseover + "-sectionindexer " + i.touchstart + "-sectionindexer", function(t) {
                        var n = e(this).attr("href").slice(1),
                            s = o.$pnls.children("." + i.current),
                            r = s.find("." + i.listview),
                            a = !1,
                            l = s.scrollTop();
                        s.scrollTop(0), r.children("." + i.divider).not("." + i.hidden).each(function() {
                            a === !1 && n == e(this).text().slice(0, 1).toLowerCase() && (a = e(this).position().top)
                        }), s.scrollTop(a !== !1 ? a : l)
                    });
                    var r = function(e) {
                        o.$menu[(e.hasClass(i.hasindexer) ? "add" : "remove") + "Class"](i.hasindexer)
                    };
                    this.bind("openPanel", r), r.call(this, this.$pnls.children("." + i.current))
                }
            })
        },
        add: function() {
            i = e[t]._c, o = e[t]._d, s = e[t]._e, i.add("indexer hasindexer"), s.add("mouseover touchstart")
        },
        clickAnchor: function(e, t) {
            if (e.parent().is("." + i.indexer)) return !0
        }
    }, e[t].defaults[n] = {
        add: !1,
        addTo: "panels"
    };
    var i, o, s, r
}(jQuery),
function(e) {
    var t = "mmenu",
        n = "setSelected";
    e[t].addons[n] = {
        setup: function() {
            var s = this,
                a = this.opts[n];
            if (this.conf[n], r = e[t].glbl, "boolean" == typeof a && (a = {
                    hover: a,
                    parent: a
                }), "object" != typeof a && (a = {}), a = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], a), "detect" == a.current) {
                var l = function(e) {
                    e = e.split("?")[0].split("#")[0];
                    var t = s.$menu.find('a[href="' + e + '"], a[href="' + e + '/"]');
                    t.length ? s.setSelected(t.parent(), !0) : (e = e.split("/").slice(0, -1), e.length && l(e.join("/")))
                };
                l(window.location.href)
            } else a.current || this.bind("initPanels", function(e) {
                e.find("." + i.listview).children("." + i.selected).removeClass(i.selected)
            });
            if (a.hover && this.$menu.addClass(i.hoverselected), a.parent) {
                this.$menu.addClass(i.parentselected);
                var d = function(e) {
                    this.$pnls.find("." + i.listview).find("." + i.next).removeClass(i.selected);
                    for (var t = e.data(o.parent); t && t.length;) t = t.not("." + i.vertical).children("." + i.next).addClass(i.selected).end().closest("." + i.panel).data(o.parent)
                };
                this.bind("openedPanel", d), this.bind("initPanels", function(e) {
                    d.call(this, this.$pnls.children("." + i.current))
                })
            }
        },
        add: function() {
            i = e[t]._c, o = e[t]._d, s = e[t]._e, i.add("hoverselected parentselected")
        },
        clickAnchor: function(e, t) {}
    }, e[t].defaults[n] = {
        current: !0,
        hover: !1,
        parent: !1
    };
    var i, o, s, r
}(jQuery),
function(e) {
    var t = "mmenu",
        n = "toggles";
    e[t].addons[n] = {
        setup: function() {
            var o = this;
            this.opts[n], this.conf[n], r = e[t].glbl, this.bind("initPanels", function(t) {
                this.__refactorClass(e("input", t), this.conf.classNames[n].toggle, "toggle"), this.__refactorClass(e("input", t), this.conf.classNames[n].check, "check"), e("input." + i.toggle + ", input." + i.check, t).each(function() {
                    var t = e(this),
                        n = t.closest("li"),
                        s = t.hasClass(i.toggle) ? "toggle" : "check",
                        r = t.attr("id") || o.__getUniqueId();
                    n.children('label[for="' + r + '"]').length || (t.attr("id", r), n.prepend(t), e('<label for="' + r + '" class="' + i[s] + '"></label>').insertBefore(n.children("a, span").last()))
                })
            })
        },
        add: function() {
            i = e[t]._c, o = e[t]._d, s = e[t]._e, i.add("toggle check")
        },
        clickAnchor: function(e, t) {}
    }, e[t].configuration.classNames[n] = {
        toggle: "Toggle",
        check: "Check"
    };
    var i, o, s, r
}(jQuery), ! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function(e) {
    var t, n = navigator.userAgent,
        i = /iphone/i.test(n),
        o = /chrome/i.test(n),
        s = /android/i.test(n);
    e.mask = {
        definitions: {
            9: "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]"
        },
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, e.fn.extend({
        caret: function(e, t) {
            var n;
            if (0 !== this.length && !this.is(":hidden")) return "number" == typeof e ? (t = "number" == typeof t ? t : e, this.each(function() {
                this.setSelectionRange ? this.setSelectionRange(e, t) : this.createTextRange && (n = this.createTextRange(), n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", e), n.select())
            })) : (this[0].setSelectionRange ? (e = this[0].selectionStart, t = this[0].selectionEnd) : document.selection && document.selection.createRange && (n = document.selection.createRange(), e = 0 - n.duplicate().moveStart("character", -1e5), t = e + n.text.length), {
                begin: e,
                end: t
            })
        },
        unmask: function() {
            return this.trigger("unmask")
        },
        mask: function(n, r) {
            var a, l, d, c, u, h, f, p;
            if (!n && this.length > 0) {
                a = e(this[0]);
                var m = a.data(e.mask.dataName);
                return m ? m() : void 0
            }
            return r = e.extend({
                autoclear: e.mask.autoclear,
                placeholder: e.mask.placeholder,
                completed: null
            }, r), l = e.mask.definitions, d = [], c = f = n.length, u = null, e.each(n.split(""), function(e, t) {
                "?" == t ? (f--, c = e) : l[t] ? (d.push(new RegExp(l[t])), null === u && (u = d.length - 1), c > e && (h = d.length - 1)) : d.push(null)
            }), this.trigger("unmask").each(function() {
                function a() {
                    if (r.completed) {
                        for (var e = u; h >= e; e++)
                            if (d[e] && I[e] === m(e)) return;
                        r.completed.call(T)
                    }
                }

                function m(e) {
                    return r.placeholder.charAt(e < r.placeholder.length ? e : 0)
                }

                function g(e) {
                    for (; ++e < f && !d[e];);
                    return e
                }

                function v(e) {
                    for (; --e >= 0 && !d[e];);
                    return e
                }

                function b(e, t) {
                    var n, i;
                    if (!(0 > e)) {
                        for (n = e, i = g(t); f > n; n++)
                            if (d[n]) {
                                if (!(f > i && d[n].test(I[i]))) break;
                                I[n] = I[i], I[i] = m(i), i = g(i)
                            }
                        k(), T.caret(Math.max(u, e))
                    }
                }

                function y(e) {
                    var t, n, i, o;
                    for (t = e, n = m(e); f > t; t++)
                        if (d[t]) {
                            if (i = g(t), o = I[t], I[t] = n, !(f > i && d[i].test(o))) break;
                            n = o
                        }
                }

                function A() {
                    var e = T.val(),
                        t = T.caret();
                    if (p && p.length && p.length > e.length) {
                        for (S(!0); t.begin > 0 && !d[t.begin - 1];) t.begin--;
                        if (0 === t.begin)
                            for (; t.begin < u && !d[t.begin];) t.begin++;
                        T.caret(t.begin, t.begin)
                    } else {
                        for (S(!0); t.begin < f && !d[t.begin];) t.begin++;
                        T.caret(t.begin, t.begin)
                    }
                    a()
                }

                function _() {
                    S(), T.val() != P && T.change()
                }

                function w(e) {
                    if (!T.prop("readonly")) {
                        var t, n, o, s = e.which || e.keyCode;
                        p = T.val(), 8 === s || 46 === s || i && 127 === s ? (t = T.caret(), n = t.begin, o = t.end, o - n === 0 && (n = 46 !== s ? v(n) : o = g(n - 1), o = 46 === s ? g(o) : o), C(n, o), b(n, o - 1), e.preventDefault()) : 13 === s ? _.call(this, e) : 27 === s && (T.val(P), T.caret(0, S()), e.preventDefault())
                    }
                }

                function x(t) {
                    if (!T.prop("readonly")) {
                        var n, i, o, r = t.which || t.keyCode,
                            l = T.caret();
                        if (!(t.ctrlKey || t.altKey || t.metaKey || 32 > r) && r && 13 !== r) {
                            if (l.end - l.begin !== 0 && (C(l.begin, l.end), b(l.begin, l.end - 1)), n = g(l.begin - 1), f > n && (i = String.fromCharCode(r), d[n].test(i))) {
                                if (y(n), I[n] = i, k(), o = g(n), s) {
                                    var c = function() {
                                        e.proxy(e.fn.caret, T, o)()
                                    };
                                    setTimeout(c, 0)
                                } else T.caret(o);
                                l.begin <= h && a()
                            }
                            t.preventDefault()
                        }
                    }
                }

                function C(e, t) {
                    var n;
                    for (n = e; t > n && f > n; n++) d[n] && (I[n] = m(n))
                }

                function k() {
                    T.val(I.join(""))
                }

                function S(e) {
                    var t, n, i, o = T.val(),
                        s = -1;
                    for (t = 0, i = 0; f > t; t++)
                        if (d[t]) {
                            for (I[t] = m(t); i++ < o.length;)
                                if (n = o.charAt(i - 1), d[t].test(n)) {
                                    I[t] = n, s = t;
                                    break
                                }
                            if (i > o.length) {
                                C(t + 1, f);
                                break
                            }
                        } else I[t] === o.charAt(i) && i++, c > t && (s = t);
                    return e ? k() : c > s + 1 ? r.autoclear || I.join("") === q ? (T.val() && T.val(""), C(0, f)) : k() : (k(), T.val(T.val().substring(0, s + 1))), c ? t : u
                }
                var T = e(this),
                    I = e.map(n.split(""), function(e, t) {
                        return "?" != e ? l[e] ? m(t) : e : void 0
                    }),
                    q = I.join(""),
                    P = T.val();
                T.data(e.mask.dataName, function() {
                    return e.map(I, function(e, t) {
                        return d[t] && e != m(t) ? e : null
                    }).join("")
                }), T.one("unmask", function() {
                    T.off(".mask").removeData(e.mask.dataName)
                }).on("focus.mask", function() {
                    if (!T.prop("readonly")) {
                        clearTimeout(t);
                        var e;
                        P = T.val(), e = S(), t = setTimeout(function() {
                            T.get(0) === document.activeElement && (k(), e == n.replace("?", "").length ? T.caret(0, e) : T.caret(e))
                        }, 10)
                    }
                }).on("blur.mask", _).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function() {
                    T.prop("readonly") || setTimeout(function() {
                        var e = S(!0);
                        T.caret(e), a()
                    }, 0)
                }), o && s && T.off("input.mask").on("input.mask", A), S()
            })
        }
    })
}),
function(e) {
    var t = !0,
        n = !1;
    e.fn.imagezoomsl = function(n) {
        return n = n || {}, this.each(function() {
            if (!e(this).is("img")) return t;
            var o = this;
            setTimeout(function() {
                e(new Image).load(function() {
                    i.F(e(o), n)
                }).attr("src", e(o).attr("src"))
            }, 30)
        })
    };
    var i = {};
    e.extend(i, {
        dsetting: {
            loadinggif: "",
            loadopacity: .1,
            loadbackground: "#878787",
            cursorshade: t,
            magnifycursor: "crosshair",
            cursorshadecolor: "#fff",
            cursorshadeopacity: .3,
            cursorshadeborder: "1px solid black",
            zindex: "",
            stepzoom: .5,
            zoomrange: [2, 2],
            zoomstart: 2,
            disablewheel: t,
            showstatus: t,
            showstatustime: 2e3,
            statusdivborder: "1px solid black",
            statusdivbackground: "#C0C0C0",
            statusdivpadding: "4px",
            statusdivfont: "bold 13px Arial",
            statusdivopacity: .8,
            magnifierpos: "right",
            magnifiersize: [0, 0],
            magnifiereffectanimate: "showIn",
            innerzoom: n,
            innerzoommagnifier: n,
            descarea: n,
            leftoffset: 15,
            rightoffset: 15,
            switchsides: t,
            magnifierborder: "1px solid black",
            textdnbackground: "#fff",
            textdnpadding: "10px",
            textdnfont: "13px/20px cursive",
            scrollspeedanimate: 5,
            zoomspeedanimate: 7,
            loopspeedanimate: 2.5,
            magnifierspeedanimate: 350,
            classmagnifier: "magnifier",
            classcursorshade: "cursorshade",
            classstatusdiv: "statusdiv",
            classtextdn: "textdn"
        },
        U: -1 != navigator.userAgent.indexOf("MSIE") ? t : n,
        T: function(t) {
            var n, i = 0;
            return t.parents().add(t).each(function() {
                n = e(this).css("zIndex"), n = isNaN(n) ? 0 : +n, i = Math.max(i, n)
            }), i
        },
        L: function(e, t, n) {
            return "left" == e ? (e = -n.f.b * n.k + n.e.b, 0 < t ? 0 : t < e ? e : t) : (e = -n.f.d * n.k + n.e.d, 0 < t ? 0 : t < e ? e : t)
        },
        H: function(e) {
            var t = this,
                n = e.data("specs");
            if (n) {
                var i = n.r.offsetsl(),
                    o = t.a.g - i.left,
                    s = t.a.i - i.top;
                t.a.B += (t.a.g - t.a.B) / 2.45342, t.a.C += (t.a.i - t.a.C) / 2.45342, n.G.css({
                    left: t.a.B - 10,
                    top: t.a.C + 20
                });
                var r = Math.round(n.e.b / n.k),
                    a = Math.round(n.e.d / n.k);
                t.a.z += (o - t.a.z) / n.c.loopspeedanimate, t.a.A += (s - t.a.A) / n.c.loopspeedanimate, n.K.css({
                    left: n.f.b > r ? Math.min(n.f.b - r, Math.max(0, t.a.z - r / 2)) + i.left - n.w.t.N : i.left - n.w.t.N,
                    top: n.f.d > a ? Math.min(n.f.d - a, Math.max(0, t.a.A - a / 2)) + i.top - n.w.t.R : i.top - n.w.t.R
                }), n.c.innerzoommagnifier && (t.a.p += (t.a.g - t.a.p) / n.c.loopspeedanimate, t.a.q += (t.a.i - t.a.q) / n.c.loopspeedanimate, n.l.css({
                    left: t.a.p - Math.round(n.e.b / 2),
                    top: t.a.q - Math.round(n.e.d / 2)
                }), n.s.css({
                    left: t.a.p - Math.round(n.e.b / 2),
                    top: t.a.q + n.e.d / 2
                })), t.a.u += (o - t.a.u) / n.c.scrollspeedanimate, t.a.v += (s - t.a.v) / n.c.scrollspeedanimate, n.J.css({
                    left: t.L("left", -t.a.u * n.k + n.e.b / 2, n),
                    top: t.L("top", -t.a.v * n.k + n.e.d / 2, n)
                }), t.a.n = setTimeout(function() {
                    t.H(e)
                }, 30)
            }
        },
        I: function(e) {
            var t = this,
                n = e.data("specs");
            n && (n.h += (n.k - n.h) / n.c.zoomspeedanimate, n.h = Math.round(1e3 * n.h) / 1e3, n.K.css({
                width: n.f.b > Math.round(n.e.b / n.h) ? Math.round(n.e.b / n.h) : n.f.b,
                height: n.f.d > Math.round(n.e.d / n.h) ? Math.round(n.e.d / n.h) : n.f.d
            }), n.J.css({
                width: Math.round(n.h * n.m.b * (n.f.b / n.m.b)),
                height: Math.round(n.h * n.m.d * (n.f.d / n.m.d))
            }), t.a.o = setTimeout(function() {
                t.I(e)
            }, 30))
        },
        a: {},
        P: function(n) {
            function i() {}
            var o = n.data("specs");
            n = o.c.magnifiersize[0];
            var s, r = o.c.magnifiersize[1],
                a = o.r.offsetsl(),
                l = 0,
                d = 0;
            switch (s = a.left + ("left" === o.c.magnifierpos ? -o.e.b - o.c.leftoffset : o.f.b + o.c.rightoffset), o.c.switchsides && !o.c.innerzoom && ("left" !== o.c.magnifierpos && s + o.e.b + o.c.leftoffset >= e(window).width() && a.left - o.e.b >= o.c.leftoffset ? s = a.left - o.e.b - o.c.leftoffset : "left" === o.c.magnifierpos && 0 > s && (s = a.left + o.f.b + o.c.rightoffset)), l = s, d = a.top, o.l.css({
                visibility: "visible",
                display: "none"
            }), o.c.descarea && (l = e(o.c.descarea).offsetsl().left, d = e(o.c.descarea).offsetsl().top), o.c.innerzoommagnifier && (l = this.a.g - Math.round(o.e.b / 2), d = this.a.i - Math.round(o.e.d / 2)), i = function() {
                o.s.stop(t, t).fadeIn(o.c.magnifierspeedanimate), o.c.innerzoommagnifier || o.s.css({
                    left: l,
                    top: d + r
                })
            }, o.c.innerzoom && (l = a.left, d = a.top, i = function() {
                o.r.css({
                    visibility: "hidden"
                }), o.s.css({
                    left: l,
                    top: d + r
                }).stop(t, t).fadeIn(o.c.magnifierspeedanimate)
            }), o.c.magnifiereffectanimate) {
                case "slideIn":
                    o.l.css({
                        left: l,
                        top: d - r / 3,
                        width: n,
                        height: r
                    }).stop(t, t).show().animate({
                        top: d
                    }, o.c.magnifierspeedanimate, "easeOutBounceSL", i);
                    break;
                case "showIn":
                    o.l.css({
                        left: a.left + Math.round(o.f.b / 2),
                        top: a.top + Math.round(o.f.d / 2),
                        width: Math.round(o.e.b / 5),
                        height: Math.round(o.e.d / 5)
                    }).stop(t, t).show().css({
                        opacity: "0.1"
                    }).animate({
                        left: l,
                        top: d,
                        opacity: "1",
                        width: n,
                        height: r
                    }, o.c.magnifierspeedanimate, i);
                    break;
                default:
                    o.l.css({
                        left: l,
                        top: d,
                        width: n,
                        height: r
                    }).stop(t, t).fadeIn(o.c.magnifierspeedanimate, i)
            }
            o.c.showstatus && (o.Q || o.M) ? o.G.html(o.Q + '<div style="font-size:80%">' + o.M + "</div>").stop(t, t).fadeIn().delay(o.c.showstatustime).fadeOut("slow") : o.G.hide()
        },
        S: function(e) {
            var n = e.data("specs");
            switch (e = n.r.offsetsl(), n.c.magnifiereffectanimate) {
                case "showIn":
                    n.l.stop(t, t).animate({
                        left: e.left + Math.round(n.f.b / 2),
                        top: e.top + Math.round(n.f.d / 2),
                        opacity: "0.1",
                        width: Math.round(n.e.b / 5),
                        height: Math.round(n.e.d / 5)
                    }, n.c.magnifierspeedanimate, function() {
                        n.l.hide()
                    });
                    break;
                default:
                    n.l.stop(t, t).fadeOut(n.c.magnifierspeedanimate)
            }
        },
        F: function(i, o, s) {
            function r() {
                this.i = this.g = 0
            }

            function a(e) {
                m.data("specs", {
                    c: v,
                    Q: A,
                    M: _,
                    r: i,
                    l: h,
                    J: e,
                    G: p,
                    K: f,
                    s: g,
                    f: y,
                    m: {
                        b: e.width(),
                        d: e.height()
                    },
                    e: {
                        b: h.width(),
                        d: h.height()
                    },
                    w: {
                        b: f.width(),
                        d: f.height(),
                        t: {
                            N: parseInt(f.css("border-left-width")) || 0,
                            R: parseInt(f.css("border-top-width")) || 0
                        }
                    },
                    h: c,
                    k: c
                })
            }

            function l(e) {
                return !e.complete || "undefined" != typeof e.naturalWidth && 0 === e.naturalWidth ? n : t
            }

            function d(t) {
                var n = t || window.event,
                    i = [].slice.call(arguments, 1),
                    o = 0,
                    s = 0,
                    r = 0,
                    a = 0,
                    a = 0;
                return t = e.event.fix(n), t.type = "mousewheel", n.wheelDelta && (o = n.wheelDelta), n.detail && (o = -1 * n.detail), n.deltaY && (o = r = -1 * n.deltaY), n.deltaX && (s = n.deltaX, o = -1 * s), void 0 !== n.wheelDeltaY && (r = n.wheelDeltaY), void 0 !== n.wheelDeltaX && (s = -1 * n.wheelDeltaX), a = Math.abs(o), (!C || a < C) && (C = a), a = Math.max(Math.abs(r), Math.abs(s)), (!k || a < k) && (k = a), n = 0 < o ? "floor" : "ceil", o = Math[n](o / C), s = Math[n](s / k), r = Math[n](r / k), i.unshift(t, o, s, r), (e.event.dispatch || e.event.handle).apply(this, i)
            }
            var c, u, h, f, p, m, g, v = e.extend({}, this.dsetting, o),
                b = v.zindex || this.T(i),
                y = {
                    b: i.width(),
                    d: i.height()
                },
                r = new r,
                A = i.attr("data-title") ? i.attr("data-title") : "",
                _ = i.attr("data-help") ? i.attr("data-help") : "",
                w = i.attr("data-text-bottom") ? i.attr("data-text-bottom") : "",
                x = this;
            if (0 === y.d || 0 === y.b) e(new Image).load(function() {
                x.F(i, o)
            }).attr("src", i.attr("src"));
            else {
                i.css({
                    visibility: "visible"
                }), v.j = i.attr("data-large") || i.attr("src");
                for (u in v) "" === v[u] && (v[u] = this.dsetting[u]);
                c = v.zoomrange[0] < v.zoomstart ? v.zoomstart : v.zoomrange[0], "0,0" !== v.magnifiersize.toString() && "" !== v.magnifiersize.toString() || (v.magnifiersize = v.innerzoommagnifier ? [y.b / 2, y.d / 2] : [y.b, y.d]), v.descarea && e(v.descarea).length ? 0 === e(v.descarea).width() || 0 === e(v.descarea).height() ? v.descarea = n : v.magnifiersize = [e(v.descarea).width(), e(v.descarea).height()] : v.descarea = n, v.innerzoom && (v.magnifiersize = [y.b, y.d], o.cursorshade || (v.cursorshade = n), o.scrollspeedanimate || (v.scrollspeedanimate = 10)), v.innerzoommagnifier && (o.magnifycursor || !window.chrome && !window.sidebar || (v.magnifycursor = "none"), v.cursorshade = n, v.magnifiereffectanimate = "fadeIn"), u = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"];
                var C, k, S = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"];
                if (e.event.fixHooks)
                    for (var T = u.length; T;) e.event.fixHooks[u[--T]] = e.event.mouseHooks;
                e.event.special.mousewheel = {
                    setup: function() {
                        if (this.addEventListener)
                            for (var e = S.length; e;) this.addEventListener(S[--e], d, n);
                        else this.onmousewheel = d
                    },
                    teardown: function() {
                        if (this.removeEventListener)
                            for (var e = S.length; e;) this.removeEventListener(S[--e], d, n);
                        else this.onmousewheel = null
                    }
                }, e.fn.offsetsl = function() {
                    var e = this.get(0);
                    if (e.getBoundingClientRect) e = this.offset();
                    else {
                        for (var t = 0, n = 0; e;) t += parseInt(e.offsetTop), n += parseInt(e.offsetLeft), e = e.offsetParent;
                        e = {
                            top: t,
                            left: n
                        }
                    }
                    return e
                }, e.easing.easeOutBounceSL = function(e, t, n, i, o) {
                    return (t /= o) < 1 / 2.75 ? 7.5625 * i * t * t + n : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
                }, h = e("<div />").attr({
                    "class": v.classmagnifier
                }).css({
                    position: "absolute",
                    zIndex: b,
                    width: v.magnifiersize[0],
                    height: v.magnifiersize[1],
                    left: -1e4,
                    top: -1e4,
                    visibility: "hidden",
                    overflow: "hidden"
                }).appendTo(document.body), o.classmagnifier || h.css({
                    border: v.magnifierborder
                }), f = e("<div />"), v.cursorshade && (f.attr({
                    "class": v.classcursorshade
                }).css({
                    zIndex: b,
                    display: "none",
                    position: "absolute",
                    width: Math.round(v.magnifiersize[0] / v.zoomstart),
                    height: Math.round(v.magnifiersize[1] / v.zoomstart),
                    top: 0,
                    left: 0
                }).appendTo(document.body), o.classcursorshade || f.css({
                    border: v.cursorshadeborder,
                    opacity: v.cursorshadeopacity,
                    backgroundColor: v.cursorshadecolor
                })), v.loadinggif || (v.loadinggif = "data:image/gif;base64,R0lGODlhQABAAKEAAPz6/Pz+/Pr6+gAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJBgACACwAAAAAQABAAAACVJSPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/g8MCofEovGITCqXzKbzCY1Kp9Sq9YqFBbaBH5cL4H2/4vG2bEaPe+YwmysqAAAh+QQJBgACACwAAAAAQABAAAACVZSPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/g8MCofEovGITCqXzKbzqQpIAT+pNdC7XnlaK7eL3YHDOrAPsIWq1+y2+w2PnwoAIfkECQYAAgAsAAAAAEAAQAAAAleUj6nL7Q+jnLTai7PevPsPhuJIluaJpurKtu4Lx/JM1/aN5/rO9/4PDI4AgQDgV0wGekolr5l8Qpe7KVVHhDKbQKPwCw6Lx+Sy+YxOq9fstvsNj8vn4AIAIfkECQYAAgAsAAAAAEAAQAAAAmiUj6nL7Q+jnLTai7PevPsPhuJIluaJpurKtu4Lx/JM1/aNk0DAB3nSC/4OwR5guCvyhsreUNA8MpVPQ7GKzWq33K73Cw6Lx+Sy+YxOq9fsttsWlD6bz+R1qpTjmgH9zS40R1UV95ZQAAAh+QQJBgACACwAAAAAQABAAAACapSPqcvtD6OctNqLs968+w+G4kiW5omm6sq2bRAAbgXAtjxH9p5D9W7rOYA8IeMHxBkXxMByWHwOpdSq9YrNarfcrvcLDovH5LL5jE6r1+y2+/JTZonaphNrnzf1dCzyVgfUFfNWaHgoVQAAIfkECQYAAgAsAAAAAEAAQAAAAm2Uj6nL7Q+jnLTai7PevPsPhuJIluZ5AQDKBe7LYsD7rnFF0zeeuzvV8/0kwcBw0jtSZgGb8gmNSqfUqvWKzWq33K73Cw6Lx4uZc5s7X4NaZhJbNGaLWjaapoY3yfy+/w8YKDhIWGh4iJioWFIAACH5BAkGAAIALAAAAABAAEAAAAJ3lI+py+0Po5y02ouz3rz7D4YcEACAGAbqinrrG7QczMoardo3rmf42cPQgpsS8YhMKpfMpvMJjUqn1Kr1+iSZsIchFhe7gr88cdlKggHNL2537Y7L5/S6/Y7P6/f8vt+nAsdWM9hWSFg1dphD9iJIlYb4N0nZVAAAIfkECQYAAgAsAAAAAEAAQAAAAnqUj6nL7Q+jnLTai7O+YHsZhOFHLuJZpgJwip36tSjsyeFLb3b+sSfO042CxKLxiEwql8ym85mcQR2yacMWsJp22gS26+WCDeKxwTc0q9fstvsNj8vn9Lr9js/r9/y+/w8YWCOlVgaGRgiGBdS1qIYowmY4hsYoeIlQAAAh+QQJBgACACwAAAAAQABAAAACepSPqcvtD6OctNp7QQC4Wx2Em0dC4lmmC3iO6iu0KKyyJ0ercpDDbU8L4YDEovGITCqXzJho2IzsotIp9bFzXRlZ6DZhE30dMu848Tur1+y2+w2Py+f0uv2Oz+v3/H5yFicTaOWWBWf4hpiYNhji9wgZKTlJWWl5SVkAACH5BAkGAAIALAAAAABAAEAAAAKJlI+py+0Po5z0BRCq3ir4z4XURwLiaZEgyiaY6rXyAcezXN+3aup77wsKh8RGqSiCAZGUl4qpqV2go9qS+nCSsNUnd3L8isfksvmMTqvX7Lb7DY/L5zPMla3NvHNtqVt6d+b3B/OWJ+cRSLfISKW4xrOnRFjYx8c2iHmpuQX38dgYKjpKWmqKVAAAIfkECQYAAgAsAAAAAEAAQAAAAoiUj6nL7Q9ZALHaa4LeuPuzhcFHWiJXps6pqe7Cju+csfR93t60yvqV+7lYFGEqZjzakiQk8+N87kTSEqBVzWq33K73Cw6Lx+SyuXMFFM+IIFsQPcfN83KdfBWt2e53Zu8XKDhIWGh4iJiouMjY6PgIGSlpSBW4xJan9xbjQ0fkd8mnGZgJSFMAACH5BAkGAAIALAAAAABAAEAAAAKLlI+py+0PW5gz2oupxrwnvXliBk7AiEJAGZzpu7ABTCulW5MUs1Y5x/rlZEJYr1R8yWbJFAvXFB13UaWpis1qt9yu9wsOi8dCDZRsA53RBiL783wjZGv0lCo/3PJwPP8PGCg4SFhoeIiYqLjI2Oj4+LMCUCeHBOjGh5mnWRn0F3cJQtgCWWp6inpYAAAh+QQJBgACACwAAAAAQABAAAACnpSPqQgBC6Oc9ISLq94b+8eFIuJ54xmWGcpS6tWyzQWSaoy+Slnj6a1o9HycF4xInAGROOOQydJBiaWp9YrNarfcrpcDeH411XFnaZYY066XmG2RwiFK0zyCvi+U+r7/DxgoOEhYaHiImKi4yMhVFqH0hiW3k5dVt7JAqeWk6dbVGbTGhXlUaZmlIrm59Qjh2hgrO0tba3uLm6u721IAACH5BAkGAAIALAAAAABAAEAAAAKalI+pCeELo5zUuBuq3rvhx4Ui8l3jGQFLCaKu8CVs9qKsXNan96lHrhvNaIygjeUzGm9KJc+RbC5b0qr1ig0BotnjhdvlIMNCJllsPmtmanSv7TbBOR7w/I7P6/f8vv8PGCg4SLiwVWgRM/gkF8gm+OiY9hcpiYFYh6i5ydnp+QkaKjpK6mJnCUU4SbnaV8kKhPqlqkgbcCpSAAAh+QQJBgACACwAAAAAQABAAAACnJSPqQrhsKKctIrmst2c5w91otWEB/Y54xqhz5F+7IzEQW3TtJuZuT6zqU4y4Iz3MipxqaUTVnw+k9KqlRUAmK66GFeHvH2xv/FIaF6h06Iw+9x8q8Xyuv2Oz+v3/L7/D8iCEpjgRXhRBrgWuKiY6BhHyHNYs0V5iZmpucnZ6fkJGio62oFhyRiJaqia+tfo+uiHdOq3SplFmutUAAAh+QQJBgACACwAAAAAQABAAAACmJSPqSvhwaKcNL5Xs9b37l91SYeB5kJCR6qersEeQPrW8doB9Xvjzm6jAYcjEfHo0yFPAYBySZx5oEMhlZd6Xk1S0tbF0n4/1jGo+zNjxeq2+w2Py+f0un2HZt99D/29t8c3FShYQghTduh1WJTG+AgZKTlJWWl5iZmpucnoR4jW8pgYCEhYSjq6B+rIuBg5yBkrO0tbO1sAACH5BAkGAAIALAAAAABAAEAAAAKalI+paxAfmJy0Moit3gkChXncWIXR4ZgnyXYqqq7tHCPqN+f18eZ6D4P4hsChDucSGn+ZpZNnQj6Nuym1aGWGslcTt6v8DlPisvmMTqvXFIeUrdnC4955+2afxGT5RCr01mdTJ3iBEVg4iJjI2Oj4CBkpOUlZaXn5lbLISPhY5fjZGMqJRQoo2RkZsInZ6voKGys7S1trextZAAAh+QQJBgACACwAAAAAQABAAAACmpSPqYvhwaKcFLD3qN4XJ+xxogY6TQmNKgOgloGm63zEckznQoueoU7rfR4v4ASE4BGNOWHNxGw6o0Ylksq0YaOuLdMK9WYdRbH5jE6r1+wgub0qwUW4OWlqj9Tzkj1fD1L215ExaHiImKi4yNjo+AgZKdECIMgo5+inqJnIieh5CBZg2XkFOSqZqrrK2ur6ChsrO0tba3vbWgAAIfkECQYAAgAsAAAAAEAAQAAAApiUj6mbEA+YnHS+ENPdtfu1PVoYfKZHioaTnq6UlkYsv/YRH2yY3XeOI/lQHJ1wdBl2WsFLT2kDQqcrKXVqvSpTT+2Q6aU6w+Sy+YxONzZdtWeXdJ+ycgq9DgPj7fq9JeT3URRIWGh4iJiouMjY+DLmKACn0sjVOBm3SON4d9inORgpOkpaanqKmqq6ytrq+gobKztLW9tYAAAh+QQJBgACACwAAAAAQABAAAACn5SPqbsQAJicdIZ7Fca1+7VxhxMG39mV2aGa6Mu0kdHCdkKGs1DfXe4yAEW00s4nGQZ5ukQJWekJiQoHNKW6ap3ZrVfq1T7D4Q35jIZC0tsm26c6vlHg+alu9+DzUSP/NfaHQiInaHiImKi4yNhIBlToWLQR2bhn2SXJkqnJFNjpSQUaOlpqeoqaqrrK2ur6ChsrO0tba3uLm6u7y7tYAAAh+QQJBgACACwAAAAAQABAAAACo5SPqQgBex6ctNKAs8rY+r9wmWSIHYh65ik0Zgpf67E6McoldbSSd/WiBYWin2pGxPgEpqUxhOQ5S5qnZWfNbqLaLrPoDX9Z4ptjWv4N00YXmK3mwmHYeaxuT7lz+fu77wcoOEhYaHiImNcAgJaIsOaoIxdJBUk59neJyadpsKfU+ZgZytRIeoqaqrrK2ur6ChsrO0tba3uLm6u7y9vr+wusUAAAIfkECQYAAgAsAAAAAEAAQAAAAp6Uj6kJ4QujnNS4G2ADtXvUYE8iZt8pleOhcqgXmqxK0m9VuoIq7/xNiWEQtlkJOPkZL4oiEsLTsSIi6bPp9ASs10W2C7YMw88Ll9w9osPK9bXtRsLjtzkd9b3jMWe9/w8YKDhIWPjBZ9iRk5iUx7g09ujlKCnEJAlVhUkVuen5CRoqOkpaanqKmqq6ytrq+gobKztLW2t7i5uru/tUAAAh+QQJBgACACwAAAAAQABAAAACopSPqQrhsKKctIrmst2c5w8xWkcaTXhgn6OsQcmpz+GOaQ1bOL3zbk6RZVA93wo4qbFuNoQSKRHOYi4UtPUjZa+RI/DFvXwSp/BVak4balY1Urp0Q5Vg+bxoz+HzORn/DxgoOJhWRgjjdeixpRjE1lhBB+lYNUmxZ4k1lBkZ0MYJGio6SlpqeoqaqrrK2ur6ChsrO0tba3uLm6u7y9vr+0taAAAh+QQJBgACACwAAAAAQABAAAACnJSPqSvhwaKcNL5Xs9b37l91SYctgAOAHImQzsKqlAsZZ4zcoizRbZcauXi94e8FcwWJCt9G52EycBsjb3d4LD9UlVV6OIGV4HLOaS7Tamk1adtmQpFxd6mOz+v3qwCcD9IF2Ic1SBhleHiXGPLFOAP0WIUoWWl5iZmpucnZ6fkJGio6SlpqeoqaqrrK2ur6ChsrO0tba3uLmytTAAAh+QQJBgACACwAAAAAQABAAAACnpSPqXsQH5ictDKIrd4IgoV53EiFEeKYJ8l2KqquCUC3VZyo3xzaE+7qKV4+EDH4MJqKl+UoFdqxhAcqJyYdHZmGrdaUZTpZUCtX8Ah/vWeurg0XlJPxuKiOz+v3LTOfxPanMZcmCAhkuEFIl7gR2PgzBulYOGl5iZmpucnZ6fkJGio6SlpqeoqaqrrK2ur6ChsrO0tba3uLm6u7e1kAACH5BAkGAAIALAAAAABAAEAAAAKklI+pqxDPopwSyIcD3Vxl7X1QR04iiJxoySKOaKVnSx/qKqh1/YpJj4ntWrNQpvIQsj6ujzIReBoxRJ8Mt4RlrUNosQM8dr1czm1MZpZO0u6XFMainbUgOiK/61sOQHs/VAYY+DZYV2hYJZi4pcZIE5f3aOY4Wfdnmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxxcWwAAIfkECQYAAgAsAAAAAEAAQAAAAp6Uj6nLBg2jTKG+VvPc3GS9fGBHhmKlAGdQttSqrMHltnK80jV54+Ie+R1UQl9GB3wVBSIk4pOE9KJUx7SKUDknVyxzyT1to7kOzHvohmfo57kNVGehcEaZQaTXjSiMeG8yNiQHuHZS6HKHyHO42JLH4ig5SVlpeYmZqbnJ2en5CRoqOkpaanqKmqq6ytrq+gobKztLW2t7i5uru7tXAAAh+QQJBgACACwAAAAAQABAAAACopSPqQiwD6OcB4R7o3W0e4OFT5h95kiWSRpw5wuy7sEG8F0rtX1DFpb4kRa53kIIRKRQQyORpWtFSDMnDQqTWp/LrTfW/XrD4nGyjE5HL9WVSA1JtcFveBDrJtvpoXZtrvangIQBmFaU17SnpHfVt7imcnQGWWl5iZmpucnZ6fkJGio6SlpqeoqaqrrK2ur6ChsrO0tba3uLm6u7y9vr+4taAAAh+QQJBgACACwAAAAAQABAAAACm5SPqRoNC6OcVICGQ92cZ/x04nhcXyNl5GqcGGSqLCQnrrbcM/PxPe3aIXS2Wi4obCFJxGRztHRGRzFc8nC6an3W7SwACHm32fG1+jILn+oVuw2dwkVo1JxVvn+7+n775yciF5gySAhkeJhQB6ZI8eZ4lCEWKRFTiZmpucnZ6fkJGio6SlpqeoqaqrrK2ur6ChsrO0tba3uL+1kAACH5BAkGAAIALAAAAABAAEAAAAKYlI+pK+HBopw0vlez1vfuDyYdFpYIQCqjY7YjoK5UgLYJOi7v1MF2I9OlLLnfiuY6GoOmI2TZseF6P0MU6gE9fFXG9VPsLlDcjVKMPqO76jU2636z4uxLmY7P6/f8vv8PGCg4SFhoeIgINpQo8sV40PYYyTiZWIk4tfgIpLnp+QkaKjpKWmp6ipqqusra6voKGys7S1urVwAAIfkECQYAAgAsAAAAAEAAQAAAApqUj6l7EB+YnLQyiK3eG0PAhRMGKo73iGqCRsmJrjKcKW0pi22AH22+2vV8NaCIBjESeUrBTxmDfpq7Da05elaQLqxNS7l5v1EKNzVGiCu7btpQZoPfhqFlTp8V8/y+/w8YKDhIWGh4iJiouMjY6PgIGSk5SVlpeYmZqbnJ2dkxNYnHWBUpVLr2eBbqYefo4QkbKztLW2t7m1kAACH5BAkGAAIALAAAAABAAEAAAAKYlI+pywLQopw0hYurpgCH2HkBtJWKeDVoarbGSp6r24Yos350meuK7dmZYCqRcHiLYGLHDbApNEKniBmVSrw2gUHtsedtZsOJp4TrIx+syq66yn4jk/K5tM6L4yv6fcXsFyg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjo66gaJwsSYc9qnuPr4CiuS2mgKVQAAIfkECQYAAgAsAAAAAEAAQAAAApeUj6nL7Q9ZmCDai8XcIfKahQfHPWQAitk5OQCrhmzXzPEK1/lt7ZLPg7w2Kd0nOCohlUjNqQlFsIpR3vBZXdqyWhKVq7puwFAi+YxOq9fstvsNj1dJcg+2zhCb8YsZjZ/gB9h3N4ig92VoMKbY6PgIGSk5SVlpeYmZqRmzF1nYuOUYCgpkOKpYqii2ydrq+gobKztL61YAACH5BAkGAAIALAAAAABAAEAAAAKZlI+pCLAPo5wHhHup3hx7DoaJ94lmR16OZGHrqaXZlL4wK9P5LXj2kaLIArzaQxXbnVokXk9pGv6izZvU+ZzdmCWs1wD9YqvisvmMTqvX7Lb7DY/L5/S6/Y7P6/fr1pQfxAcUpjckCEaYZ3jIhXGI2PXY80fXIDkYCWh0uCjYqRnomahI9uh3iZqqusra6voKGys7S1trO1cAACH5BAkGAAIALAAAAABAAEAAAAKalI+pC+Gxopy0ioet3hs/wIUi0njOiHLmk7YNtYKtWLLROo94VEN5uPL9hoegjHjJ6HZIJqdna5qOKg/SAI2KHFRiUHjNxcJDJ3nWO6vX7Lb7DY8zlPKOqW73dPFzM1/x9QczJTjhV5hghbjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKKoix53i4mAWWOgZpFMk6qcp4WkpRAAAh+QQJBgACACwAAAAAQABAAAACmZSPqZvhwKKcNLobqt4bYw6GjeeIpgBcFFmeIAlZrMul5ATT3SzdusYKxH5EQ7CINPqSRQ/zCY1KQ4+pznYZWqnLLcKpwIK9yvEhmCGjeAhxVi04Kthk+fwDj9Pn+a9H24ejEkhYaHiImKi4yNjo+AgZKTlJWWl5iZmpucnZ6elpA9jYxWhXuqdouqiq6CYESer4+klba0tbAAAh+QQJBgACACwAAAAAQABAAAACmZSPqcvtD6MLNACJc6xc+8NdEMBVn1dSUEqJZ0SmI+u+D2vdrC3hNbPjzWSbyk/YCCJ5gGNoySNCp7HnFIq7YpXaKLf7yoKF0jGzZU6r1+y2+w2Py+f0uv2Oz+v3DNKRX/KHR8NnILZXVVIocCjgd3cYaCf1JWdykNgB2KjHmVfZabXImDNqeoqaqrrK2ur6ChsrO0tba3tVAAAh+QQJBgACACwAAAAAQABAAAACm5SPqcvtD1kIINqLBZi85g8a3BiW1zh610aZEIsGWOw68aRCt+xuQC64zYQmGgKV2RWJCKBFWYLWbs6hsRZELq/YYPVD7YqP2rHZe06r1+y2+w2Py+f0uv2Oz+v3fLvv28fVJ8I0mCUYWDgoZQjTYUhGApnQMml5iZmpucnZ6fkJGio6KvqIiZiIuse4qJhaBhkDqOfIQ3qLa1kAACH5BAkGAAIALAAAAABAAEAAAAKclI+pGQGwopy0moaD3ZxnDHXiiHwYiUphaTbpe3xMC790bNYp0K6CrEO1XAleMDX0HQXK0W3Jy+w+zdqTdFperlrYsBv8gmtR4NhrPqOJ6rb7Dbdl48403SK+47l6Sb4/8QcYwTe4UKZhqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpK6idFWciIOAeZJOkaucoWmdpYVlWaW1EAACH5BAkGAAIALAAAAABAAEAAAAKclI+pa+EBmJy0svei3dxi3IUVAF2fI6YKiWnIiaqyACtwMKvs5x5nn+PccDZQULRrHZeJGvPZMEKhDuD0is1qt9yu9ytSgkPOsadsptys6eKvTUk+4JU3XS2ls9h3hJzYtwDD13cTuGJ42ISmSHPS6BYDOUlZaXmJmam5ydnpaSJZ+SjKqJg4eQqZqvqBmfcJGys7S1tre4uby1UAACH5BAkGAAIALAAAAABAAEAAAAKZlI+py+0P4wOhygsDvbRWgIWJ50EdGYgq+j1sq2Jv6sxgLJ3o9OJy72L5LsAMafjz3CQ0ZEjjjEqn1GoQZnWyllmcrtT12cK4MVn1tZxjxbWIxHXL5/S6/Y7P6/f8vv8PGCg4SFiYQBEX+FXY9jczaAb4CCk0uGiIZai5CZgoiOLZ9xK6NxloKtnoh5p6xJjJGSs7S1trG1sAACH5BAkGAAIALAAAAABAAEAAAAKZlI+py+0PWQCx2muC3rj7s4XBR1oiV6bOqXWi2rDjxcKLjOF2cmKA/pmsZq6ap7fLnChFEXP3ex2NSUGIBKyqstoSt4uVgmHRsfmMTqvX7Lb7DY/L53T5D/Cs38R6xFf/VxdINzgXFZLXp3SleJPYCBkpOUlZaXmJmam5ydnp+QkaKirHB0nVeIgYKUOkKPMIiLTqRHkIa1MAACH5BAkGAAIALAAAAABAAEAAAAKYlI+py+0PW5gz2oupxrwnvXliBk7AiEJAGZzpu7ABTCulW5MUs1Y5x/rlZEJYr1R8yWbJFAvXFB13UaWpis1qndetB+nVgcIXIjliPj/Sagn4oIGqx4hbex28u+362LO/MEUFaAMiRwgXgrjI2Oj4CBkpOUlZaXmJmam5yXmxAnDI+NbItliKeEqYCvj3OOoa2ik7S1ubWQAAIfkECQYAAgAsAAAAAEAAQAAAAp6Uj6kIAQujnPSEi6veG/vHhSLieeMZlhnKUurVss0FkmqMvkpZ4+mtaPR8nBeMSJwBkTjjkMnSQYmlqfWKzWq33K6XA3h+NdVxZ2mWGNOul5htkcIhStM8gr4vlPq+/w8YKDhIWGh4iJiouMjIVRah9IYlt5OXVbeyQKnlpOnW1Rm0xoV5VGmZpSK5ufUI4doYKztLW2t7i5uru9tSAAAh+QQJBgACACwAAAAAQABAAAACmpSPqQnhC6Oc1Lgbqt674ceFIvJd4xkBSwmirvAlbPairFzWp/epR64bzWiMoI3lMxpvSiXPkWwuW9Kq9YoNAaLZ44Xb5SDDQiZZbD5rZmp0r+02wTke8PyOz+v3/L7/DxgoOEi4sFVoETP4JBfIJvjomPYXKYmBWIeoucnZ6fkJGio6SupiZwlFOEm52lfJCoT6papIG3AqUgAAIfkECQYAAgAsAAAAAEAAQAAAApyUj6kK4bCinLSK5rLdnOcPdaLVhAf2OeMaoc+RfuyMxEFt07Sbmbk+s6lOMuCM9zIqcamlE1Z8PpPSqpUVAJiuuhhXh7x9sb/xSGheodOiMPvcfKvF8rr9js/r9/y+/w/IghKY4EV4UQa4FriomOgYR8hzWLNFeYmZqbnJ2en5CRoqOtqBYckYiWqomvrX6Proh3Tqt0qZRZrrVAAAIfkECQYAAgAsAAAAAEAAQAAAApiUj6kr4cGinDS+V7PW9+5fdUmHgeZCQkeqnq7BHkD61vHaAfV7485uowGHIxHx6NMhTwGAckmceaBDIZWXel5NUtLWxdJ+P9YxqPszY8XqtvsNj8vn9Lp9h2bffQ/9vbfHNxUoWEIIU3bodViUxvgIGSk5SVlpeYmZqbnJ6EeI1vKYGAhIWEo6ugfqyLgYOcgZKztLWztbAAAh+QQJBgACACwAAAAAQABAAAACmpSPqWsQH5ictDKIrd4JAoV53FiF0eGYJ8l2Kqqu7Rwj6jfn9fHmeg+D+IbAoQ7nEhp/maWTZ0I+jbsptWhlhrJXE7er/A5T4rL5jE6r1xSHlK3ZwuPeeftmn8Rk+UQq9NZnUyd4gRFYOIiYyNjo+AgZKTlJWWl5+ZWyyEj4WOX42RjKiUUKKNkZGbCJ2er6ChsrO0tba3sbWQAAIfkECQYAAgAsAAAAAEAAQAAAApqUj6mL4cGinBSw96jeFyfscaIGOk0JjSoDoJaBput8xHJM50KLnqFO630eL+AEhOARjTlhzcRsOqNGJZLKtGGjri3TCvVmHUWx+YxOq9fsILm9KsFFuDlpao/U85I9Xw9S9teRMWh4iJiouMjY6PgIGSnRAiDIKOfop6iZyInoeQgWYNl5BTkqmaq6ytrq+gobKztLW2t721oAACH5BAkGAAIALAAAAABAAEAAAAKYlI+pmxAPmJx0vhDT3bX7tT1aGHymR4qGk56ulJZGLL/2ER9smN13jiP5UBydcHQZdlrBS09pA0KnKyl1ar0qU0/tkOmlOsPksvmMTjc2XbVnl3SfsnIKvQ4D4+36vSXk91EUSFhoeIiYqLjI2Pgy5igAp9LI1TgZt0jjeHfYpzkYKTpKWmp6ipqqusra6voKGys7S1vbWAAAIfkECQYAAgAsAAAAAEAAQAAAAp+Uj6m7EACYnHSGexXGtfu1cYcTBt/ZldmhmujLtJHRwnZChrNQ313uMgBFtNLOJxkGebpECVnpCYkKBzSlumqd2a1X6tU+w+EN+YyGQtLbJtunOr5R4Pmpbvfg81Ej/zX2h0IiJ2h4iJiouMjYSAZU6Fi0Edm4Z9klyZKpyRTY6UkFGjpaanqKmqq6ytrq+gobKztLW2t7i5uru8u7WAAAIfkECQYAAgAsAAAAAEAAQAAAAqOUj6kIAXsenLTSgLPK2Pq/cJlkiB2IeuYpNGYKX+uxOjHKJXW0knf1ogWFop9qRsT4BKalMYTkOUuap2VnzW6i2i6z6A1/WeKbY1r+DdNGF5it5sJh2Hmsbk+5c/n7u+8HKDhIWGh4iJjXAICWiLDmqCMXSQVJOfZ3icmnabCn1PmYGcrUSHqKmqq6ytrq+gobKztLW2t7i5uru8vb6/sLrFAAACH5BAkGAAIALAAAAABAAEAAAAKelI+pCeELo5zUuBtgA7V71GBPImbfKZXjoXKoF5qsStJvVbqCKu/8TYlhELZZCTj5GS+KIhLC07EiIumz6fQErNdFtgu2DMPPC5fcPaLDyvW17UbC47c5HfW94zFnvf8PGCg4SFj4wWfYkZOYlMe4NPbo5SgpxCQJVYVJFbnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7v7VAAAIfkECQYAAgAsAAAAAEAAQAAAAqKUj6kK4bCinLSK5rLdnOcPMVpHGk14YJ+jrEHJqc/hjmkNWzi9825OkWVQPd8KOKmxbjaEEikRzmIuFLT1I2WvkSPwxb18EqfwVWpOG2pWNVK6dEOVYPm8aM/h8zkZ/w8YKDiYVkYI43XosaUYxNZYQQfpWDVJsWeJNZQZGdDGCRoqOkpaanqKmqq6ytrq+gobKztLW2t7i5uru8vb6/tLWgAAIfkECQYAAgAsAAAAAEAAQAAAApyUj6kr4cGinDS+V7PW9+5fdUmHLYADgByJkM7CqpQLGWeM3KIs0W2XGrl4veHvBXMFiQrfRudhMnAbI293eCw/VJVVejiBleByzmku02ppNWnbZkKRcXepjs/r96sAnA/SBdiHNUgYZXh4lxjyxTgD9FiFKFlpeYmZqbnJ2en5CRoqOkpaanqKmqq6ytrq+gobKztLW2t7i5srUwAAIfkECQYAAgAsAAAAAEAAQAAAAp6Uj6l7EB+YnLQyiK3eCIKFedxIhRHimCfJdiqqrglAt1WcqN8c2hPu6ilePhAx+DCaipflKBXasYQHKicmHR2Zhq3WlGU6WVArV/AIf71nrq4NF5ST8biojs/r9y0zn8T2pzGXJggIZLhBSJe4Edj4MwbpWDhpeYmZqbnJ2en5CRoqOkpaanqKmqq6ytrq+gobKztLW2t7i5uru3tZAAAh+QQJBgACACwAAAAAQABAAAACpJSPqasQz6KcEsiHA91cZe19UEdOIoicaMkijmilZ0sf6iqodf2KSY+J7VqzUKbyELI+ro8yEXgaMUSfDLeEZa1DaLEDPHa9XM5tTGaWTtLulxTGop21IDoiv+tbDkB7P1QGGPg2WFdoWCWYuKXGSBOX92jmOFn3Z5mpucnZ6fkJGio6SlpqeoqaqrrK2ur6ChsrO0tba3uLm6u7y9vr+wscXFsAACH5BAkGAAIALAAAAABAAEAAAAKelI+pywYNo0yhvlbz3NxkvXxgR4ZipQBnULbUqqzB5bZyvNI1eePiHvkdVEJfRgd8FQUiJOKThPSiVMe0ilA5J1csc8k9baO5Dsx76IZn6Oe5DVRnoXBGmUGk140ojHhvMjYkB7h2Uuhyh8hzuNiSx+IoOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7u7VwAAIfkECQYAAgAsAAAAAEAAQAAAAqKUj6kIsA+jnAeEe6N1tHuDhU+YfeZIlkkacOcLsu7BBvBdK7V9QxaW+JEWud5CCESkUEMjkaVrRUgzJw0Kk1qfy6031v16w+JxsoxORy/VlUgNSbXBb3gQ6ybb6aF2ba72p4CEAZhWlNe0p6R31be4pnJ0BllpeYmZqbnJ2en5CRoqOkpaanqKmqq6ytrq+gobKztLW2t7i5uru8vb6/uLWgAAIfkECQYAAgAsAAAAAEAAQAAAApuUj6kaDQujnFSAhkPdnGf8dOJ4XF8jZeRqnBhkqiwkJ6623DPz8T3t2iF0tlouKGwhScRkc7R0RkcxXPJwump91u0sAAh5t9nxtfoyC5/qFbsNncJFaNScVb5/u/p+++cnIheYMkgIZHiYUAemSPHmeJQhFikRU4mZqbnJ2en5CRoqOkpaanqKmqq6ytrq+gobKztLW2t7i/tZAAAh+QQJBgACACwAAAAAQABAAAACmJSPqSvhwaKcNL5Xs9b37g8mHRaWCEAqo2O2I6CuVIC2CTou79TBdiPTpSy534rmOhqDpiNk2bHhej9DFOoBPXxVxvVT7C5Q3I1SjD6ju+o1Nut+s+LsS5mOz+v3/L7/DxgoOEhYaHiICDaUKPLFeND2GMk4mViJOLX4CKS56fkJGio6SlpqeoqaqrrK2ur6ChsrO0tbq1cAACH5BAkGAAIALAAAAABAAEAAAAKalI+pexAfmJy0Moit3htDwIUTBiqO94hqgkbJia4ynCltKYttgB9tvtr1fDWgiAYxEnlKwU8Zg36auw2tOXpWkC6sTUu5eb9RCjc1Rogru27aUGaD34ahZU6fFfP8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnZMTWJx1gVKVS69ngW6mHn6OEJGys7S1tre5tZAAAh+QQJBgACACwAAAAAQABAAAACmJSPqcsC0KKcNIWLq6YAh9h5AbSVing1aGq2xkqeq9uGKLN+dJnriu3ZmWAqkXB4i2Bixw2wKTRCp4gZlUq8NoFB7bHnbWbDiaeE6yMfrMquusp+I5PyubTOi+Mr+n3F7BcoOEhYaHiImKi4yNjo+AgZKTlJWWl5iZmpucnZ6fkJGio6OuoGicLEmHPap7j6+AorktpoClUAACH5BAkGAAIALAAAAABAAEAAAAKNlI+py+0PWZgg2ovF3CHymoUHxz1kAIrZOTkAq4Zs18zxCtf5be2Sz4O8NindJzgqIZVIzakJRbCKUd7wWV3asloSlau6bsBQIvmMTqvX7Lb7DY9XSXIPts4Qm/GLGY2f4AfYdzeIoPdlaDCm2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqqlYAACH5BAkGAAIALAAAAABAAEAAAAKLlI+pCLAPo5wHhHup3hx7DoaJ94lmR16OZGHrqaXZlL4wK9P5LXj2kaLIArzaQxXbnVokXk9pGv6izZvU+ZzdmCWs1wD9YqvisvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFj41TAY9CczlTe0GKb36DdJSfbX0mi4ydnp+QkaKjpKWmp6iqpWAAAh+QQJBgACACwAAAAAQABAAAACi5SPqQvhsaKctIqHrd4bP8CFItJ4zohy5pO2DbWCrViy0TqPeFRDebjy/YaHoIx4yeh2SCanZ2uajioP0gCNihxUYlB4zcXCQyd51jur1+y2+w2Py+f0uv2Oz+v3/L7/DxgoOEhYaHiImKi4yNjo+AgZKTlJWZmH0eVnxpcF1mcECPrXKbj5+WEpUQAAIfkECQYAAgAsAAAAAEAAQAAAAnmUj6mb4cCinDS6G6reG2MOho3niKYAXBRZniAJWazLpeQE090s3brGCsR+REOwiDT6kkUP8wmNSqfUqvXa+2Bfy+2K5/12w7IxeWFznnGe4bqcecvn9Lr9js/r9/y+/w8YKDhIWGh4iJiouMjY6PgIGSk5SVlp2VgAACH5BAkGAAIALAAAAABAAEAAAAJ7lI+py+0Pows0AIlzrFz7w10QwFWfV1JQSolnRKYj674Pa92sLeE1s+PNZJvKT9gIIpeJEPMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7PaJdEyX4mXaGqeOEeVKNP5e4mbiRlhoeIiYqLjI2Oj4CBkpOUlZaXmJ2VAAACH5BAkGAAIALAAAAABAAEAAAAJ6lI+py+0PWQgg2osFmLzmDxrcGJbXOHrXRpkQiwZY7DrxpEK3XEv0ees1UJmd0AYyHpewzvL5e0Jz0qr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg45wQXxaaEGNSWuNboiEKl1sQzaHmZVQAAIfkECQYAAgAsAAAAAEAAQAAAAm2Uj6kZAbCinLSahoPdnGcMdeKIfBiJdoDZpK7Fau8csfS9fPiuOPzPCwFxq8zwZju6YsplskliQklF3TRqvWJb2q73Cw6Lx+Sy+YxOq9fstvsNj8vn9Lr9js/r9/y+/w8YKDhIWGh4iJioeFUAACH5BAkGAAIALAAAAABAAEAAAAJnlI+pa+EBmJy0svei3dxi3IVi8j3jGZYOynpqC0+lFtckaOf6zvf+DwwKh8Si8YhMKpfMpvMJjUp3mSkCULI2ZlpVwIp9Wb3drFbwOavX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SMhXAAAh+QQJBgACACwAAAAAQABAAAACapSPqcvtD+MDocqLZd0B5A8aFGeFpkZW3sk2qdrGyhvINvLeukDufu0LCofEovGITCqXzKbzCY1Kp9Sq9YrNarfcrvcLDovH5LL5jE6r1+zsikt6X1/yKi17x+bnOXxvu1HXNkhYaHj4VAAAIfkECQYAAgAsAAAAAEAAQAAAAleUj6nL7Q+jnLTai7PevHsZhOFHHuJZkieacsAqth08yhsN2Desz3EPDAqHxKLxiEwql8ym8wmNSqfUqvWKzWq33K73Cw6Lx+Sy+YxOq9fstvsNj8vnyAIAIfkECQYAAgAsAAAAAEAAQAAAAlmUj6nL7Q+jnLTai7PevPsPhuJIluaJpurKtu4Lx/JMBTZAP/Ye5AzP8ymAO2GCaDMikD2lAelEAILRqvWKzWq33K73Cw6Lx+Sy+YxOq9fstvsNj8vn9Hq4AAAh+QQJBgACACwAAAAAQABAAAACVpSPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/g8MCofEovGITCqXzGYrAIX6olQetbq7RgFZbYCrA3h7WrAV60yr1+y2+w2Py0UFADs="), p = e("<div />").attr({
                    "class": v.classstatusdiv + " preloadevt"
                }).css({
                    position: "absolute",
                    display: "none",
                    zIndex: b,
                    top: 0,
                    left: 0
                }).html('<img src="' + v.loadinggif + '" />').appendTo(document.body), m = e("<div />").attr({
                    "class": "tracker"
                }).css({
                    zIndex: b,
                    backgroundImage: x.U ? "url(cannotbe)" : "none",
                    position: "absolute",
                    width: y.b,
                    height: y.d,
                    left: s ? i.offsetsl().left : -1e4,
                    top: s ? i.offsetsl().top : -1e4
                }).appendTo(document.body), g = e("<div />"), w && (g.attr({
                    "class": v.classtextdn
                }).css({
                    position: "absolute",
                    zIndex: b,
                    left: 0,
                    top: 0,
                    display: "none"
                }).html(w).appendTo(document.body), o.classtextdn || g.css({
                    border: v.magnifierborder,
                    background: v.textdnbackground,
                    padding: v.textdnpadding,
                    font: v.textdnfont
                }), g.css({
                    width: v.magnifiersize[0] - parseInt(g.css("padding-left")) - parseInt(g.css("padding-right"))
                })), m.data("largeimage", v.j), e(window).bind("resize", function() {
                    var e = i.offsetsl();
                    m.data("loadimgevt") && m.css({
                        left: e.left,
                        top: e.top
                    }), p.filter(".preloadevt").css({
                        left: e.left + y.b / 2 - p.width() / 2,
                        top: e.top + y.d / 2 - p.height() / 2,
                        visibility: "visible"
                    })
                }), e(document).mousemove(function(e) {
                    x.a.D = e.pageX, x.a.g !== x.a.D && (clearTimeout(x.a.n), clearTimeout(x.a.o), i.css({
                        visibility: "visible"
                    }))
                }), i.mouseover(function() {
                    var e = i.offsetsl();
                    m.css({
                        left: e.left,
                        top: e.top
                    }).show()
                }), m.mouseover(function(n) {
                    x.a.g = n.pageX, x.a.i = n.pageY, r.g = n.pageX, r.i = n.pageY, x.a.D = n.pageX;
                    var s = i.offsetsl();
                    n = x.a.g - s.left, s = x.a.i - s.top, x.a.z = n, x.a.A = s, x.a.u = n, x.a.v = s, x.a.p = x.a.g, x.a.q = x.a.i, x.a.B = x.a.g - 10, x.a.C = x.a.i + 20, m.css({
                        cursor: v.magnifycursor
                    }), v.j = i.attr("data-large") || i.attr("src"), p.show(), clearTimeout(x.a.n), clearTimeout(x.a.o), v.j !== m.data("largeimage") && (e(new Image).load(function() {}).attr("src", v.j), e(m).unbind(), e(p).remove(), e(f).remove(), e(h).remove(), e(m).remove(), e(g).remove(), x.F(i, o, t)), m.data("loadevt") && (f.fadeIn(), x.P(m), x.H(m), x.I(m))
                }), m.mousemove(function(n) {
                    v.j = i.attr("data-large") || i.attr("src"), v.j !== m.data("largeimage") && (e(new Image).load(function() {}).attr("src", v.j), e(m).unbind(), e(p).remove(), e(f).remove(), e(h).remove(), e(m).remove(), e(g).remove(), x.F(i, o, t)), x.a.g = n.pageX, x.a.i = n.pageY, r.g = n.pageX, r.i = n.pageY, x.a.D = n.pageX
                }), m.mouseout(function() {
                    clearTimeout(x.a.n), clearTimeout(x.a.o), i.css({
                        visibility: "visible"
                    }), g.hide(), f.add(p.not(".preloadevt")).stop(t, t).hide()
                }), m.one("mouseover", function() {
                    var s = i.offsetsl(),
                        d = e('<img src="' + v.j + '"/>').css({
                            position: "relative",
                            maxWidth: "none"
                        }).appendTo(h);
                    x.O[v.j] || (m.css({
                        opacity: v.loadopacity,
                        background: v.loadbackground
                    }), m.data("loadimgevt", t), p.css({
                        left: s.left + y.b / 2 - p.width() / 2,
                        top: s.top + y.d / 2 - p.height() / 2,
                        visibility: "visible"
                    })), d.bind("loadevt", function(e, s) {
                        if ("error" !== s.type) {
                            m.mouseout(function() {
                                x.S(m), clearTimeout(x.a.n), clearTimeout(x.a.o), i.css({
                                    visibility: "visible"
                                }), g.hide(), m.hide().css({
                                    left: -1e4,
                                    top: -1e4
                                })
                            }), m.mouseover(function() {
                                l.h = l.k
                            }), m.data("loadimgevt", n), m.css({
                                opacity: 0,
                                cursor: v.magnifycursor
                            }), p.empty(), o.classstatusdiv || p.css({
                                border: v.statusdivborder,
                                background: v.statusdivbackground,
                                padding: v.statusdivpadding,
                                font: v.statusdivfont,
                                opacity: v.statusdivopacity
                            }), p.hide().removeClass("preloadevt"), x.O[v.j] = t, a(d), r.g == x.a.D && (f.fadeIn(), x.P(m), clearTimeout(x.a.n), clearTimeout(x.a.o), x.H(m), x.I(m));
                            var l = m.data("specs");
                            d.css({
                                width: v.zoomstart * l.m.b * (y.b / l.m.b),
                                height: v.zoomstart * l.m.d * (y.d / l.m.d)
                            }), m.data("loadevt", t), v.zoomrange && v.zoomrange[1] > v.zoomrange[0] ? m.bind("mousewheel", function(e, t) {
                                var n = l.k,
                                    n = "in" == (0 > t ? "out" : "in") ? Math.min(n + v.stepzoom, v.zoomrange[1]) : Math.max(n - v.stepzoom, v.zoomrange[0]);
                                l.k = n, l.V = t, e.preventDefault()
                            }) : v.disablewheel && m.bind("mousewheel", function(e) {
                                e.preventDefault()
                            })
                        }
                    }), l(d.get(0)) ? d.trigger("loadevt", {
                        type: "load"
                    }) : d.bind("load error", function(e) {
                        d.trigger("loadevt", e)
                    })
                })
            }
        },
        O: {}
    })
}(jQuery, window),
function(e) {
    e.fn.magnify = function(t) {
        t = e.extend({
            src: "",
            speed: 100,
            timeout: -1,
            touchBottomOffset: 0,
            finalWidth: null,
            finalHeight: null,
            magnifiedWidth: null,
            magnifiedHeight: null,
            limitBounds: !1,
            mobileCloseEvent: "touchstart",
            afterLoad: function() {}
        }, t);
        var n = this,
            i = e("html"),
            o = function(n) {
                var o = e(n),
                    s = o.closest("a"),
                    a = {};
                for (var l in t) a[l] = o.attr("data-magnify-" + l.toLowerCase());
                var d = a.src || t.src || s.attr("href") || "";
                if (d) {
                    var c, u, h, f, p, m, g, v, b, y, A = 0,
                        _ = 0,
                        w = function() {
                            var e = c.offset();
                            return y = {
                                top: o.offset().top - e.top + parseInt(o.css("border-top-width")) + parseInt(o.css("padding-top")),
                                left: o.offset().left - e.left + parseInt(o.css("border-left-width")) + parseInt(o.css("padding-left"))
                            }, e.top += y.top, e.left += y.left, e
                        },
                        x = function() {
                            u.is(":visible") && u.fadeOut(t.speed, function() {
                                i.removeClass("magnifying").trigger("magnifyend")
                            })
                        },
                        C = function(e) {
                            if (!f) return void r();
                            if (e ? (e.preventDefault(), nPosX = e.pageX || e.originalEvent.touches[0].pageX, nPosY = e.pageY || e.originalEvent.touches[0].pageY, o.data("lastPos", {
                                    x: nPosX,
                                    y: nPosY
                                })) : (nPosX = o.data("lastPos").x, nPosY = o.data("lastPos").y), nX = nPosX - b.left, nY = nPosY - b.top - t.touchBottomOffset, u.is(":animated") || (nX > A && nX < h - A && nY > _ && nY < f - _ ? u.is(":hidden") && (i.addClass("magnifying").trigger("magnifystart"), u.fadeIn(t.speed)) : x()), u.is(":visible")) {
                                var n = "";
                                if (p && m) {
                                    var s = -Math.round(nX / h * p - g / 2),
                                        a = -Math.round(nY / f * m - v / 2);
                                    if (t.limitBounds) {
                                        var l = -Math.round((h - A) / h * p - g / 2),
                                            d = -Math.round((f - _) / f * m - v / 2);
                                        s > 0 ? s = 0 : s < l && (s = l), a > 0 ? a = 0 : a < d && (a = d)
                                    }
                                    n = s + "px " + a + "px"
                                }
                                u.css({
                                    top: Math.round(nY - v / 2) + y.top + "px",
                                    left: Math.round(nX - g / 2) + y.left + "px",
                                    "background-position": n
                                })
                            }
                        };
                    isNaN(+a.speed) || (t.speed = +a.speed), isNaN(+a.timeout) || (t.timeout = +a.timeout), isNaN(+a.finalWidth) || (t.finalWidth = +a.finalWidth), isNaN(+a.finalHeight) || (t.finalHeight = +a.finalHeight), isNaN(+a.magnifiedWidth) || (t.magnifiedWidth = +a.magnifiedWidth), isNaN(+a.magnifiedHeight) || (t.magnifiedHeight = +a.magnifiedHeight), "true" === a.limitBounds && (t.limitBounds = !0), "function" == typeof window[a.afterLoad] && (t.afterLoad = window[a.afterLoad]), /\b(Android|BlackBerry|IEMobile|iPad|iPhone|Mobile|Opera Mini)\b/.test(navigator.userAgent) ? isNaN(+a.touchBottomOffset) || (t.touchBottomOffset = +a.touchBottomOffset) : t.touchBottomOffset = 0, o.data("originalStyle", o.attr("style"));
                    var k = new Image;
                    e(k).on({
                        load: function() {
                            var n, i;
                            o.css("display", "block"), o.parent(".magnify").length || o.wrap('<div class="magnify"></div>'), c = o.parent(".magnify"), o.prev(".magnify-lens").length ? c.children(".magnify-lens").css("background-image", "url('" + d + "')") : o.before('<div class="magnify-lens loading" style="background:url(\'' + d + "') 0 0 no-repeat\"></div>"), u = c.children(".magnify-lens"), u.removeClass("loading"), h = t.finalWidth || o.width(), f = t.finalHeight || o.height(), p = t.magnifiedWidth || k.width, m = t.magnifiedHeight || k.height, g = u.width(), v = u.height(), b = w(), t.limitBounds && (A = g / 2 / (p / h), _ = v / 2 / (m / f)), p === k.width && m === k.height || u.css("background-size", p + "px " + m + "px"), o.data("zoomSize", {
                                width: p,
                                height: m
                            }), c.data("mobileCloseEvent", a.mobileCloseEvent || t.mobileCloseEvent), k = null, t.afterLoad(), u.is(":visible") && C(), c.off().on({
                                "mousemove touchmove": C,
                                mouseenter: function() {
                                    b = w()
                                },
                                mouseleave: x
                            }), t.timeout >= 0 && c.on("touchend", function() {
                                setTimeout(x, t.timeout)
                            }), e("body").not(c).on("touchstart", x);
                            var r = o.attr("usemap");
                            if (r) {
                                var l = e("map[name=" + r.slice(1) + "]");
                                o.after(l), c.click(function(t) {
                                    if (t.clientX || t.clientY) {
                                        u.hide();
                                        var o = document.elementFromPoint(t.clientX || t.originalEvent.touches[0].clientX, t.clientY || t.originalEvent.touches[0].clientY);
                                        "AREA" === o.nodeName ? o.click() : e("area", l).each(function() {
                                            var t = e(this).attr("coords").split(",");
                                            if (n >= t[0] && n <= t[2] && i >= t[1] && i <= t[3]) return this.click(), !1
                                        })
                                    }
                                })
                            }
                            s.length && (s.css("display", "inline-block"), !s.attr("href") || a.src || t.src || s.click(function(e) {
                                e.preventDefault()
                            }))
                        },
                        error: function() {
                            k = null
                        }
                    }), k.src = d
                }
            },
            s = 0,
            r = function() {
                clearTimeout(s), s = setTimeout(function() {
                    n.destroy(), n.magnify(t)
                }, 100)
            };
        return this.destroy = function() {
            return this.each(function() {
                var t = e(this),
                    n = t.prev("div.magnify-lens"),
                    i = t.data("originalStyle");
                t.parent("div.magnify").length && n.length && (i ? t.attr("style", i) : t.removeAttr("style"), t.unwrap(), n.remove())
            }), e(window).off("resize", r), n
        }, e(window).resize(r), this.each(function() {
            o(this)
        })
    }
}(jQuery), $(document).ready(function() {
    $(".zoom").magnify(), 
    
    // $("#phone").mask("+7 (999) 999-99-99", {
    //     autoclear: !1
    // }), 
    $(document).on("click", ".number-spinner span.chg-ctn", function(e) {
        btn = $(this), input = btn.closest(".number-spinner").find("input"), btn.closest(".number-spinner").find("button").prop("disabled", !1), "up" == btn.attr("data-dir") ? (console.log("up" + input.val() + "_" + parseInt(input.attr("max"))), void 0 == input.attr("max") || parseInt(input.val()) + 1 <= parseInt(input.attr("max")) ? input.val(parseInt(input.val()) + 1) : btn.prop("disabled", !0)) : "dwn" == btn.attr("data-dir") && (console.log("down" + input.val() + "_" + parseInt(input.attr("min"))), void 0 == input.attr("min") || parseInt(input.val()) - 1 >= parseInt(input.attr("min")) ? input.val(parseInt(input.val()) - 1) : btn.prop("disabled", !0))
    }), $(window).width() < 769
}), $(document).ready(function() {
    $(window).width() < 769 && $(".cat-filter-body").addClass("modal fade"), $(window).on("resize", function() {
        $(this).width() < 769 && $(".cat-filter-body").addClass("modal fade")
    })
}), $(function() {
    if ($(".outofstock").length > 0 ? $(".outofstock").each(function(e) {
            var t = $(this).data("id");
            console.log(t), $("#" + t).addClass("outofstock"), $("button.order-go").addClass("disabled"), $(".cart-footer-message-outofstock").addClass("visible")
        }) : ($(".go-to-order").show(), $("#msOrder").show()), $(".cart-remove").click(function() {
            $(this).closest("tr").hasClass("outofstock") && setTimeout(function() {
                location.reload()
            }, 1e3)
        }), $("#mse2_mfilter").length) {
        $(".cat-filter .nominal").hide();
        var e = mSearch2.Hash.get();
        0 == jQuery.isEmptyObject(e) ? (console.log("есть запрос"), console.log("data country: " + e["ms|made_in"]), $(".cat-filter .nominal").show(), $(".made_in input[type=checkbox]:not(:checked)").parents(".checkboxWrap").fadeOut()) : ($(".cat-filter .nominal input").prop("checked", !1), $(".cat-filter .nominal").hide(), $(".made_in input[type=checkbox]:not(:checked)").parents(".checkboxWrap").fadeIn())
    }
}), $(function() {
    if ($(".outofstockInFavs").length > 0) {

        $(".outofstockInFavs").each(function(e) {
            var t = $(this).data("id");
            console.log(t); 
            $("#" + t).addClass("outofstockInFavsItem");
        }) 

        $('.outofstockInFavsItem .outofstockLink').each(function(e) {
            $(this).click(function(e) {
                console.log('outofstockLink');
                e.preventDefault();
            });

        }) 


    }

}),

$(document).ready(function() {

    // miniShop2.Callbacks.add('Order.submit.before', 'restrict_payment_redirect', function() {
    //     location.reload();
    // });
    $("td.weight").hide(), $("[type='number']").keypress(function(e) {
        e.preventDefault()
    }), miniShop2.Callbacks.Cart.add.response.success = function() {
        document.location = "/basket.html"
    }, miniShop2.Callbacks.Order.submit.before = function() {
        return console.log("before"), 
        $("body").addClass("overflow-h"), $("#before-load").find("i").fadeIn().end().delay(400).fadeIn("slow"), !0
    }, miniShop2.Callbacks.Order.submit.response.error = function() {
        return console.log("errrrror"), $("body").removeClass("overflow-h"), $("#before-load").fadeOut("fast"), !0
    }, miniShop2.Callbacks.Order.submit.response.success = function(response) {
        return console.log("success", response.data['msorder']), 
        $("body").addClass("overflow-h"), $("#before-load").find("i").fadeIn().end().delay(400).fadeIn("slow"), !0
        // location.reload();
        // document.location.href = document.location.origin + document.location.pathname
        // + (document.location.search ? document.location.search + '&' : '?')
        // + 'msorder=' + response.data['msorder'];
    }
}), $(function() {
    $("nav#menu").mmenu({
        navbar: {
            add: !0
        }
    })
}), $(function() {
    var e = $("header.header"),
        t = e.offset(),
        n = (e.innerHeight() + $(".navbar").innerHeight() - 110, e.innerHeight());
    $(window).scroll(function() {
        $(this).scrollTop() > t.top ? (e.slideDown().addClass("header-fixed"), $("body").css("padding-top", n)) : (e.removeClass("header-fixed"), $("body").css("padding-top", "0px"))
    })
}), $(function() {
    $("nav.main-nav li").hover(function() {
        clearTimeout($.data(this, "timer"));
        var e = $(this).innerWidth() / 2,
            t = $("ul", this).innerWidth() / 2,
            n = t - e;
        $("ul", this).css("left", "0px").stop(!0, !0).slideDown(200)
    }, function() {
        $.data(this, "timer", setTimeout($.proxy(function() {
            $("ul", this).stop(!0, !0).slideUp(50)
        }, this), 50))
    })
}), jQuery(document).ready(function(e) {
    e(".to-new").click(function() {
        return e("body,html").animate({
            scrollTop: 470
        }, 800), !1
    }), e("#full-width-slider").slideDown().royalSlider({
        arrowsNav: !0,
        loop: !0,
        keyboardNavEnabled: !0,
        controlsInside: !1,
        imageScaleMode: "fill",
        arrowsNavAutoHide: !1,
        autoScaleSlider: !0,
        controlNavigation: "bullets",
        thumbsFitInViewport: !1,
        navigateByClick: !0,
        startSlideId: 0,
        autoPlay: {
            enabled: !0,
            pauseOnHover: !0,
            delay: 5e3
        },
        transitionType: "move",
        globalCaption: !0,
        deeplinking: {
            enabled: !0,
            change: !1
        }
    })
}), $(function() {
    $("#slider-range1").slider({
        range: !0,
        min: 0,
        max: 500,
        values: [0, 500],
        slide: function(e, t) {
            $("#amount1_0").val(t.values[0]), $("#amount1_1").val(t.values[1])
        }
    }), $("#amount1_0").val($("#slider-range1").slider("values", 0)), $("#amount1_1").val($("#slider-range1").slider("values", 1))
}), $(function() {
    $("#slider-range2").slider({
        range: !0,
        min: 0,
        max: 500,
        values: [0, 500],
        slide: function(e, t) {
            $("#amount2_0").val(t.values[0]), $("#amount2_1").val(t.values[1])
        }
    }), $("#amount2_0").val($("#slider-range2").slider("values", 0)), $("#amount2_1").val($("#slider-range2").slider("values", 1))
}), $(function() {
    $(".quick-view").fancybox({
        width: 850,
        height: 750,
        padding: 0,
        fitToView: !0,
        autoSize: !1,
        closeClick: !1,
        openEffect: "none",
        closeEffect: "none",
        helpers: {
            overlay: {
                locked: !1
            }
        },
        oncomplete: function() {
            $(".fancybox-wrap").css({
                top: "auto",
                bottom: "auto"
            })
        }
    }), $(".fancybox").fancybox({
        padding: 0,
        fitToView: !0,
        autoSize: !0,
        closeClick: !1,
        openEffect: "none",
        closeEffect: "none"
    }), $(document).on("click", ".quick-view", function() {
        $("#qview-result").empty();
        var e = $(this).data();
        return $.post(document.location.href, e, function(e) {
            $("#qview-result").html(e), miniShop2.Gallery2.initialize()
        }), !1
    })
}), $(function() {
    $("#tabs a").click(function(e) {
        e.preventDefault(), $(this).tab("show")
    }), $(".popover-open").popover()
}), $(function() {
    $(".search-toggle .glyphicon-search").click(function() {
        $(".search-toggle").removeClass("open").addClass("closed"), $(".search-header").removeClass("closed").addClass("open")
    }), $(".search-toggle .glyphicon-remove").click(function() {
        $(".search-toggle").removeClass("closed").addClass("open"), $(".search-header").removeClass("open").addClass("closed")
    })
}), $(function() {
    var e = $(".search-header input").val();
    $("#searched-value").html(e), "" == $(".founded").text() && $(".search-results").text("Результатов по запросу не найдено")
}), $(".go-to-order").click(function() {
    return $("body,html").animate({
        scrollTop: $("#msOrder").offset().top - 350
    }, 1e3), !1
});
