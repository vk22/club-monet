
function goBack() {
    window.history.back()
}! function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = "length" in e && e.length,
            n = V.type(e);
        return "function" !== n && !V.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }

    function i(e, t, n) {
        if (V.isFunction(t)) return V.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return V.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ae.test(t)) return V.filter(t, e, n);
            t = V.filter(t, e)
        }
        return V.grep(e, function (e) {
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
        return V.each(e.match(fe) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function r() {
        G.removeEventListener("DOMContentLoaded", r, !1), e.removeEventListener("load", r, !1), V.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
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
                } catch (o) { }
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
        } catch (e) { }
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
            get: function () {
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
        return setTimeout(function () {
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
        n.queue || (a = V._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
            a.unqueued || l()
        }), a.unqueued++, u.always(function () {
            u.always(function () {
                a.unqueued--, V.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], d = V.css(e, "display"), c = "none" === d ? ve.get(e, "olddisplay") || A(e.nodeName) : d, "inline" === c && "none" === V.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", u.always(function () {
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
            m ? "hidden" in m && (p = m.hidden) : m = ve.access(e, "fxshow", {}), s && (m.hidden = !p), p ? V(e).show() : u.done(function () {
                V(e).hide()
            }), u.done(function () {
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
            a = V.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
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
                createTween: function (t, n) {
                    var i = V.Tween(e, d.opts, t, n, d.opts.specialEasing[t] || d.opts.easing);
                    return d.tweens.push(i), i
                },
                stop: function (t) {
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
        return function (t, n) {
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
            return s[a] = !0, V.each(e[a] || [], function (e, a) {
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
        if (V.isArray(t)) V.each(t, function (t, o) {
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
        V = function (e, t) {
            return new V.fn.init(e, t)
        },
        ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        te = /^-ms-/,
        ne = /-([\da-z])/gi,
        ie = function (e, t) {
            return t.toUpperCase()
        };
    V.fn = V.prototype = {
        jquery: X,
        constructor: V,
        selector: "",
        length: 0,
        toArray: function () {
            return Q.call(this)
        },
        get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : Q.call(this)
        },
        pushStack: function (e) {
            var t = V.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return V.each(this, e, t)
        },
        map: function (e) {
            return this.pushStack(V.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(Q.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: F,
        sort: M.sort,
        splice: M.splice
    }, V.extend = V.fn.extend = function () {
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
        error: function (e) {
            throw new Error(e)
        },
        noop: function () { },
        isFunction: function (e) {
            return "function" === V.type(e)
        },
        isArray: Array.isArray,
        isWindow: function (e) {
            return null != e && e === e.window
        },
        isNumeric: function (e) {
            return !V.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function (e) {
            return "object" === V.type(e) && !e.nodeType && !V.isWindow(e) && !(e.constructor && !Z.call(e.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Y[J.call(e)] || "object" : typeof e
        },
        globalEval: function (e) {
            var t, n = eval;
            e = V.trim(e), e && (1 === e.indexOf("use strict") ? (t = G.createElement("script"), t.text = e, G.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function (e) {
            return e.replace(te, "ms-").replace(ne, ie)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, i) {
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
        trim: function (e) {
            return null == e ? "" : (e + "").replace(ee, "")
        },
        makeArray: function (e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? V.merge(i, "string" == typeof e ? [e] : e) : F.call(i, e)), i
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : R.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, i = 0, o = e.length; n > i; i++) e[o++] = t[i];
            return e.length = o, e
        },
        grep: function (e, t, n) {
            for (var i, o = [], s = 0, r = e.length, a = !n; r > s; s++) i = !t(e[s], s), i !== a && o.push(e[s]);
            return o
        },
        map: function (e, t, i) {
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
        proxy: function (e, t) {
            var n, i, o;
            return "string" == typeof t && (n = e[t], t = e, e = n), V.isFunction(e) ? (i = Q.call(arguments, 2), o = function () {
                return e.apply(t || this, i.concat(Q.call(arguments)))
            }, o.guid = e.guid = e.guid || V.guid++, o) : void 0
        },
        now: Date.now,
        support: U
    }), V.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        Y["[object " + t + "]"] = t.toLowerCase()
    });
    var oe = function (e) {
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
                    } catch (g) { } finally {
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
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function d(e) {
            return i(function (t) {
                return t = +t, i(function (n, i) {
                    for (var o, s = e([], n.length, t), r = s.length; r--;) n[o = s[r]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function u() { }

        function h(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }

        function f(e, t, n) {
            var i = t.dir,
                o = n && "parentNode" === i,
                s = M++;
            return t.first ? function (t, n, s) {
                for (; t = t[i];)
                    if (1 === t.nodeType || o) return e(t, n, s)
            } : function (t, n, r) {
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
            return e.length > 1 ? function (t, n, i) {
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
            return o && !o[W] && (o = v(o)), s && !s[W] && (s = v(s, r)), i(function (i, r, a, l) {
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
            for (var t, n, i, o = e.length, s = w.relative[e[0].type], r = s || w.relative[" "], a = s ? 1 : 0, l = f(function (e) {
                return e === t
            }, r, !0), d = f(function (e) {
                return ee(t, e) > -1
            }, r, !0), c = [function (e, n, i) {
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
                r = function (i, r, a, l, d) {
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
            R = function (e, t) {
                return e === t && (P = !0), 0
            },
            Y = 1 << 31,
            J = {}.hasOwnProperty,
            Z = [],
            U = Z.pop,
            G = Z.push,
            X = Z.push,
            V = Z.slice,
            ee = function (e, t) {
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
            we = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            xe = function () {
                j()
            };
        try {
            X.apply(Z = V.call(z.childNodes), z.childNodes), Z[z.childNodes.length].nodeType
        } catch (Ce) {
            X = {
                apply: Z.length ? function (e, t) {
                    G.apply(e, V.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        _ = t.support = {}, C = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, j = t.setDocument = function (e) {
            var t, n, i = e ? e.ownerDocument || e : z;
            return i !== E && 9 === i.nodeType && i.documentElement ? (E = i, N = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), L = !C(i), _.attributes = o(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), _.getElementsByTagName = o(function (e) {
                return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
            }), _.getElementsByClassName = ve.test(i.getElementsByClassName), _.getById = o(function (e) {
                return N.appendChild(e).id = W, !i.getElementsByName || !i.getElementsByName(W).length
            }), _.getById ? (w.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && L) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, w.filter.ID = function (e) {
                var t = e.replace(_e, we);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete w.find.ID, w.filter.ID = function (e) {
                var t = e.replace(_e, we);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), w.find.TAG = _.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : _.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [],
                    o = 0,
                    s = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = s[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return s
            }, w.find.CLASS = _.getElementsByClassName && function (e, t) {
                return L ? t.getElementsByClassName(e) : void 0
            }, D = [], O = [], (_.qsa = ve.test(i.querySelectorAll)) && (o(function (e) {
                N.appendChild(e).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + W + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + W + "+*").length || O.push(".#.+[+~]")
            }), o(function (e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
            })), (_.matchesSelector = ve.test($ = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && o(function (e) {
                _.disconnectedMatch = $.call(e, "div"), $.call(e, "[s!='']:x"), D.push("!=", re)
            }), O = O.length && new RegExp(O.join("|")), D = D.length && new RegExp(D.join("|")), t = ve.test(N.compareDocumentPosition), B = t || ve.test(N.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, R = t ? function (e, t) {
                if (e === t) return P = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !_.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === z && B(z, e) ? -1 : t === i || t.ownerDocument === z && B(z, t) ? 1 : q ? ee(q, e) - ee(q, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
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
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== E && j(e), n = n.replace(ue, "='$1']"), !(!_.matchesSelector || !L || D && D.test(n) || O && O.test(n))) try {
                var i = $.call(e, n);
                if (i || _.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (o) { }
            return t(n, E, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== E && j(e), B(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== E && j(e);
            var n = w.attrHandle[t.toLowerCase()],
                i = n && J.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
            return void 0 !== i ? i : _.attributes || !L ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [],
                i = 0,
                o = 0;
            if (P = !_.detectDuplicates, q = !_.sortStable && e.slice(0), e.sort(R), P) {
                for (; t = e[o++];) t === e[o] && (i = n.push(o));
                for (; i--;) e.splice(n[i], 1)
            }
            return q = null, e
        }, x = t.getText = function (e) {
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
                ATTR: function (e) {
                    return e[1] = e[1].replace(_e, we), e[3] = (e[3] || e[4] || e[5] || "").replace(_e, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && he.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(_e, we).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = Q[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && Q(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, n, i) {
                    return function (o) {
                        var s = t.attr(o, e);
                        return null == s ? "!=" === n : !n || (s += "", "=" === n ? s === i : "!=" === n ? s !== i : "^=" === n ? i && 0 === s.indexOf(i) : "*=" === n ? i && s.indexOf(i) > -1 : "$=" === n ? i && s.slice(-i.length) === i : "~=" === n ? (" " + s.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n && (s === i || s.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function (e, t, n, i, o) {
                    var s = "nth" !== e.slice(0, 3),
                        r = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === i && 0 === o ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
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
                PSEUDO: function (e, n) {
                    var o, s = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return s[W] ? s(n) : s.length > 1 ? (o = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                        for (var i, o = s(e, n), r = o.length; r--;) i = ee(e, o[r]), e[i] = !(t[i] = o[r])
                    }) : function (e) {
                        return s(e, 0, o)
                    }) : s
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [],
                        n = [],
                        o = S(e.replace(le, "$1"));
                    return o[W] ? i(function (e, t, n, i) {
                        for (var s, r = o(e, null, i, []), a = e.length; a--;)(s = r[a]) && (e[a] = !(t[a] = s))
                    }) : function (e, i, s) {
                        return t[0] = e, o(t, null, s, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function (e) {
                    return e = e.replace(_e, we),
                        function (t) {
                            return (t.textContent || t.innerText || x(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function (e) {
                    return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(_e, we).toLowerCase(),
                        function (t) {
                            var n;
                            do
                                if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === N
                },
                focus: function (e) {
                    return e === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return e.disabled === !1
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !w.pseudos.empty(e)
                },
                header: function (e) {
                    return ge.test(e.nodeName)
                },
                input: function (e) {
                    return me.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: d(function () {
                    return [0]
                }),
                last: d(function (e, t) {
                    return [t - 1]
                }),
                eq: d(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: d(function (e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: d(function (e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: d(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: d(function (e, t, n) {
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
        return u.prototype = w.filters = w.pseudos, w.setFilters = new u, k = t.tokenize = function (e, n) {
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
        }, S = t.compile = function (e, t) {
            var n, i = [],
                o = [],
                s = F[e + " "];
            if (!s) {
                for (t || (t = k(e)), n = t.length; n--;) s = b(t[n]), s[W] ? i.push(s) : o.push(s);
                s = F(e, y(o, i)), s.selector = e
            }
            return s
        }, T = t.select = function (e, t, n, i) {
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
        }, _.sortStable = W.split("").sort(R).join("") === W, _.detectDuplicates = !!P, j(), _.sortDetached = o(function (e) {
            return 1 & e.compareDocumentPosition(E.createElement("div"))
        }), o(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || s("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), _.attributes && o(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || s("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), o(function (e) {
            return null == e.getAttribute("disabled")
        }) || s(te, function (e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    V.find = oe, V.expr = oe.selectors, V.expr[":"] = V.expr.pseudos, V.unique = oe.uniqueSort, V.text = oe.getText, V.isXMLDoc = oe.isXML, V.contains = oe.contains;
    var se = V.expr.match.needsContext,
        re = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ae = /^.[^:#\[\.,]*$/;
    V.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? V.find.matchesSelector(i, e) ? [i] : [] : V.find.matches(e, V.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, V.fn.extend({
        find: function (e) {
            var t, n = this.length,
                i = [],
                o = this;
            if ("string" != typeof e) return this.pushStack(V(e).filter(function () {
                for (t = 0; n > t; t++)
                    if (V.contains(o[t], this)) return !0
            }));
            for (t = 0; n > t; t++) V.find(e, o[t], i);
            return i = this.pushStack(n > 1 ? V.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function (e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function (e) {
            return !!i(this, "string" == typeof e && se.test(e) ? V(e) : e || [], !1).length
        }
    });
    var le, de = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ce = V.fn.init = function (e, t) {
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
        dir: function (e, t, n) {
            for (var i = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && V(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), V.fn.extend({
        has: function (e) {
            var t = V(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; n > e; e++)
                    if (V.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            for (var n, i = 0, o = this.length, s = [], r = se.test(e) || "string" != typeof e ? V(e, t || this.context) : 0; o > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && V.find.matchesSelector(n, e))) {
                        s.push(n);
                        break
                    }
            return this.pushStack(s.length > 1 ? V.unique(s) : s)
        },
        index: function (e) {
            return e ? "string" == typeof e ? R.call(V(e), this[0]) : R.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(V.unique(V.merge(this.get(), V(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), V.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return V.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return V.dir(e, "parentNode", n)
        },
        next: function (e) {
            return o(e, "nextSibling")
        },
        prev: function (e) {
            return o(e, "previousSibling")
        },
        nextAll: function (e) {
            return V.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return V.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return V.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return V.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return V.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return V.sibling(e.firstChild)
        },
        contents: function (e) {
            return e.contentDocument || V.merge([], e.childNodes)
        }
    }, function (e, t) {
        V.fn[e] = function (n, i) {
            var o = V.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = V.filter(i, o)), this.length > 1 && (he[e] || V.unique(o), ue.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var fe = /\S+/g,
        pe = {};
    V.Callbacks = function (e) {
        e = "string" == typeof e ? pe[e] || s(e) : V.extend({}, e);
        var t, n, i, o, r, a, l = [],
            d = !e.once && [],
            c = function (s) {
                for (t = e.memory && s, n = !0, a = o || 0, o = 0, r = l.length, i = !0; l && r > a; a++)
                    if (l[a].apply(s[0], s[1]) === !1 && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                i = !1, l && (d ? d.length && c(d.shift()) : t ? l = [] : u.disable())
            },
            u = {
                add: function () {
                    if (l) {
                        var n = l.length;
                        ! function s(t) {
                            V.each(t, function (t, n) {
                                var i = V.type(n);
                                "function" === i ? e.unique && u.has(n) || l.push(n) : n && n.length && "string" !== i && s(n)
                            })
                        }(arguments), i ? r = l.length : t && (o = n, c(t))
                    }
                    return this
                },
                remove: function () {
                    return l && V.each(arguments, function (e, t) {
                        for (var n;
                            (n = V.inArray(t, l, n)) > -1;) l.splice(n, 1), i && (r >= n && r--, a >= n && a--)
                    }), this
                },
                has: function (e) {
                    return e ? V.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function () {
                    return l = [], r = 0, this
                },
                disable: function () {
                    return l = d = t = void 0, this
                },
                disabled: function () {
                    return !l
                },
                lock: function () {
                    return d = void 0, t || u.disable(), this
                },
                locked: function () {
                    return !d
                },
                fireWith: function (e, t) {
                    return !l || n && !d || (t = t || [], t = [e, t.slice ? t.slice() : t], i ? d.push(t) : c(t)), this
                },
                fire: function () {
                    return u.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!n
                }
            };
        return u
    }, V.extend({
        Deferred: function (e) {
            var t = [
                ["resolve", "done", V.Callbacks("once memory"), "resolved"],
                ["reject", "fail", V.Callbacks("once memory"), "rejected"],
                ["notify", "progress", V.Callbacks("memory")]
            ],
                n = "pending",
                i = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return V.Deferred(function (n) {
                            V.each(t, function (t, s) {
                                var r = V.isFunction(e[t]) && e[t];
                                o[s[1]](function () {
                                    var e = r && r.apply(this, arguments);
                                    e && V.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === i ? n.promise() : this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? V.extend(e, i) : i
                    }
                },
                o = {};
            return i.pipe = i.then, V.each(t, function (e, s) {
                var r = s[2],
                    a = s[3];
                i[s[1]] = r.add, a && r.add(function () {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), o[s[0]] = function () {
                    return o[s[0] + "With"](this === o ? i : this, arguments), this
                }, o[s[0] + "With"] = r.fireWith
            }), i.promise(o), e && e.call(o, o), o
        },
        when: function (e) {
            var t, n, i, o = 0,
                s = Q.call(arguments),
                r = s.length,
                a = 1 !== r || e && V.isFunction(e.promise) ? r : 0,
                l = 1 === a ? e : V.Deferred(),
                d = function (e, n, i) {
                    return function (o) {
                        n[e] = this, i[e] = arguments.length > 1 ? Q.call(arguments) : o, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (r > 1)
                for (t = new Array(r), n = new Array(r), i = new Array(r); r > o; o++) s[o] && V.isFunction(s[o].promise) ? s[o].promise().done(d(o, i, s)).fail(l.reject).progress(d(o, n, t)) : --a;
            return a || l.resolveWith(i, s), l.promise()
        }
    });
    var me;
    V.fn.ready = function (e) {
        return V.ready.promise().done(e), this
    }, V.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? V.readyWait++ : V.ready(!0)
        },
        ready: function (e) {
            (e === !0 ? --V.readyWait : V.isReady) || (V.isReady = !0, e !== !0 && --V.readyWait > 0 || (me.resolveWith(G, [V]), V.fn.triggerHandler && (V(G).triggerHandler("ready"), V(G).off("ready"))))
        }
    }), V.ready.promise = function (t) {
        return me || (me = V.Deferred(), "complete" === G.readyState ? setTimeout(V.ready) : (G.addEventListener("DOMContentLoaded", r, !1), e.addEventListener("load", r, !1))), me.promise(t)
    }, V.ready.promise();
    var ge = V.access = function (e, t, n, i, o, s, r) {
        var a = 0,
            l = e.length,
            d = null == n;
        if ("object" === V.type(n)) {
            o = !0;
            for (a in n) V.access(e, t, a, n[a], !0, s, r)
        } else if (void 0 !== i && (o = !0, V.isFunction(i) || (r = !0), d && (r ? (t.call(e, i), t = null) : (d = t, t = function (e, t, n) {
            return d.call(V(e), n)
        })), t))
            for (; l > a; a++) t(e[a], n, r ? i : i.call(e[a], a, t(e[a], n)));
        return o ? e : d ? t.call(e) : l ? t(e[0], n) : s
    };
    V.acceptData = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, a.uid = 1, a.accepts = V.acceptData, a.prototype = {
        key: function (e) {
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
        set: function (e, t, n) {
            var i, o = this.key(e),
                s = this.cache[o];
            if ("string" == typeof t) s[t] = n;
            else if (V.isEmptyObject(s)) V.extend(this.cache[o], t);
            else
                for (i in t) s[i] = t[i];
            return s
        },
        get: function (e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function (e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, V.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, i, o, s = this.key(e),
                r = this.cache[s];
            if (void 0 === t) this.cache[s] = {};
            else {
                V.isArray(t) ? i = t.concat(t.map(V.camelCase)) : (o = V.camelCase(t), t in r ? i = [t, o] : (i = o, i = i in r ? [i] : i.match(fe) || [])), n = i.length;
                for (; n--;) delete r[i[n]]
            }
        },
        hasData: function (e) {
            return !V.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function (e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var ve = new a,
        be = new a,
        ye = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ae = /([A-Z])/g;
    V.extend({
        hasData: function (e) {
            return be.hasData(e) || ve.hasData(e)
        },
        data: function (e, t, n) {
            return be.access(e, t, n)
        },
        removeData: function (e, t) {
            be.remove(e, t)
        },
        _data: function (e, t, n) {
            return ve.access(e, t, n)
        },
        _removeData: function (e, t) {
            ve.remove(e, t)
        }
    }), V.fn.extend({
        data: function (e, t) {
            var n, i, o, s = this[0],
                r = s && s.attributes;
            if (void 0 === e) {
                if (this.length && (o = be.get(s), 1 === s.nodeType && !ve.get(s, "hasDataAttrs"))) {
                    for (n = r.length; n--;) r[n] && (i = r[n].name, 0 === i.indexOf("data-") && (i = V.camelCase(i.slice(5)), l(s, i, o[i])));
                    ve.set(s, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function () {
                be.set(this, e)
            }) : ge(this, function (t) {
                var n, i = V.camelCase(e);
                if (s && void 0 === t) {
                    if (n = be.get(s, e), void 0 !== n) return n;
                    if (n = be.get(s, i), void 0 !== n) return n;
                    if (n = l(s, i, void 0), void 0 !== n) return n
                } else this.each(function () {
                    var n = be.get(this, i);
                    be.set(this, i, t), -1 !== e.indexOf("-") && void 0 !== n && be.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                be.remove(this, e)
            })
        }
    }), V.extend({
        queue: function (e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = ve.get(e, t), n && (!i || V.isArray(n) ? i = ve.access(e, t, V.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = V.queue(e, t),
                i = n.length,
                o = n.shift(),
                s = V._queueHooks(e, t),
                r = function () {
                    V.dequeue(e, t)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete s.stop, o.call(e, r, s)), !i && s && s.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return ve.get(e, n) || ve.access(e, n, {
                empty: V.Callbacks("once memory").add(function () {
                    ve.remove(e, [t + "queue", n])
                })
            })
        }
    }), V.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? V.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = V.queue(this, e, t);
                V._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && V.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                V.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, i = 1,
                o = V.Deferred(),
                s = this,
                r = this.length,
                a = function () {
                    --i || o.resolveWith(s, [s])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;) n = ve.get(s[r], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var _e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        we = ["Top", "Right", "Bottom", "Left"],
        xe = function (e, t) {
            return e = t || e, "none" === V.css(e, "display") || !V.contains(e.ownerDocument, e)
        },
        Ce = /^(?:checkbox|radio)$/i;
    ! function () {
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
        add: function (e, t, n, i, o) {
            var s, r, a, l, d, c, u, h, f, p, m, g = ve.get(e);
            if (g)
                for (n.handler && (s = n, n = s.handler, o = s.selector), n.guid || (n.guid = V.guid++), (l = g.events) || (l = g.events = {}), (r = g.handle) || (r = g.handle = function (t) {
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
        remove: function (e, t, n, i, o) {
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
        trigger: function (t, n, i, o) {
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
        dispatch: function (e) {
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
        handlers: function (e, t) {
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
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, i, o, s = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || G, i = n.documentElement, o = n.body, e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        fix: function (e) {
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
                trigger: function () {
                    return this !== u() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === u() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && V.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function (e) {
                    return V.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, i) {
            var o = V.extend(new V.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? V.event.trigger(o, null, t) : V.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, V.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, V.Event = function (e, t) {
        return this instanceof V.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? d : c) : this.type = e, t && V.extend(this, t), this.timeStamp = e && e.timeStamp || V.now(), void (this[V.expando] = !0)) : new V.Event(e, t)
    }, V.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = d, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = d, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = d, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, V.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        V.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, i = this,
                    o = e.relatedTarget,
                    s = e.handleObj;
                return (!o || o !== i && !V.contains(i, o)) && (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), U.focusinBubbles || V.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            V.event.simulate(t, e.target, V.event.fix(e), !0)
        };
        V.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this,
                    o = ve.access(i, t);
                o || i.addEventListener(e, n, !0), ve.access(i, t, (o || 0) + 1)
            },
            teardown: function () {
                var i = this.ownerDocument || this,
                    o = ve.access(i, t) - 1;
                o ? ve.access(i, t, o) : (i.removeEventListener(e, n, !0), ve.remove(i, t))
            }
        }
    }), V.fn.extend({
        on: function (e, t, n, i, o) {
            var s, r;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (r in e) this.on(r, t, n, e[r], o);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = c;
            else if (!i) return this;
            return 1 === o && (s = i, i = function (e) {
                return V().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = V.guid++)), this.each(function () {
                V.event.add(this, e, i, n, t)
            })
        },
        one: function (e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function (e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, V(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = c), this.each(function () {
                V.event.remove(this, e, n, t)
            })
        },
        trigger: function (e, t) {
            return this.each(function () {
                V.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
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
        clone: function (e, t, n) {
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
        buildFragment: function (e, t, n, i) {
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
        cleanData: function (e) {
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
        text: function (e) {
            return ge(this, function (e) {
                return void 0 === e ? V.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            for (var n, i = e ? V.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType || V.cleanData(v(n)), n.parentNode && (t && V.contains(n.ownerDocument, n) && m(v(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (V.cleanData(v(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return V.clone(this, e, t)
            })
        },
        html: function (e) {
            return ge(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !Be[(je.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Pe, "<$1></$2>");
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (V.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (o) { }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = arguments[0];
            return this.domManip(arguments, function (t) {
                e = this.parentNode, V.cleanData(v(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, t) {
            e = K.apply([], e);
            var n, i, o, s, r, a, l = 0,
                d = this.length,
                c = this,
                u = d - 1,
                h = e[0],
                m = V.isFunction(h);
            if (m || d > 1 && "string" == typeof h && !U.checkClone && Le.test(h)) return this.each(function (n) {
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
    }, function (e, t) {
        V.fn[e] = function (e) {
            for (var n, i = [], o = V(e), s = o.length - 1, r = 0; s >= r; r++) n = r === s ? this : this.clone(!0), V(o[r])[t](n), F.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var We, ze = {},
        He = /^margin/,
        Me = new RegExp("^(" + _e + ")(?!px)[a-z%]+$", "i"),
        Qe = function (t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        };
    ! function () {
        function t() {
            r.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r.innerHTML = "", o.appendChild(s);
            var t = e.getComputedStyle(r, null);
            n = "1%" !== t.top, i = "4px" === t.width, o.removeChild(s)
        }
        var n, i, o = G.documentElement,
            s = G.createElement("div"),
            r = G.createElement("div");
        r.style && (r.style.backgroundClip = "content-box", r.cloneNode(!0).style.backgroundClip = "", U.clearCloneStyle = "content-box" === r.style.backgroundClip, s.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", s.appendChild(r), e.getComputedStyle && V.extend(U, {
            pixelPosition: function () {
                return t(), n
            },
            boxSizingReliable: function () {
                return null == i && t(), i
            },
            reliableMarginRight: function () {
                var t, n = r.appendChild(G.createElement("div"));
                return n.style.cssText = r.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", r.style.width = "1px", o.appendChild(s), t = !parseFloat(e.getComputedStyle(n, null).marginRight), o.removeChild(s), r.removeChild(n), t
            }
        }))
    }(), V.swap = function (e, t, n, i) {
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
                get: function (e, t) {
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
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, s, r, a = V.camelCase(t),
                    l = e.style;
                return t = V.cssProps[a] || (V.cssProps[a] = x(l, a)), r = V.cssHooks[t] || V.cssHooks[a], void 0 === n ? r && "get" in r && void 0 !== (o = r.get(e, !1, i)) ? o : l[t] : (s = typeof n, "string" === s && (o = Re.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(V.css(e, t)), s = "number"), void (null != n && n === n && ("number" !== s || V.cssNumber[a] || (n += "px"), U.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), r && "set" in r && void 0 === (n = r.set(e, n, i)) || (l[t] = n))))
            }
        },
        css: function (e, t, n, i) {
            var o, s, r, a = V.camelCase(t);
            return t = V.cssProps[a] || (V.cssProps[a] = x(e.style, a)), r = V.cssHooks[t] || V.cssHooks[a], r && "get" in r && (o = r.get(e, !0, n)), void 0 === o && (o = _(e, t, i)), "normal" === o && t in Je && (o = Je[t]), "" === n || n ? (s = parseFloat(o), n === !0 || V.isNumeric(s) ? s || 0 : o) : o
        }
    }), V.each(["height", "width"], function (e, t) {
        V.cssHooks[t] = {
            get: function (e, n, i) {
                return n ? Ke.test(V.css(e, "display")) && 0 === e.offsetWidth ? V.swap(e, Ye, function () {
                    return S(e, t, i)
                }) : S(e, t, i) : void 0
            },
            set: function (e, n, i) {
                var o = i && Qe(e);
                return C(e, n, i ? k(e, t, i, "border-box" === V.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }), V.cssHooks.marginRight = w(U.reliableMarginRight, function (e, t) {
        return t ? V.swap(e, {
            display: "inline-block"
        }, _, [e, "marginRight"]) : void 0
    }), V.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        V.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, o = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + we[i] + t] = s[i] || s[i - 2] || s[0];
                return o
            }
        }, He.test(e) || (V.cssHooks[e + t].set = C)
    }), V.fn.extend({
        css: function (e, t) {
            return ge(this, function (e, t, n) {
                var i, o, s = {},
                    r = 0;
                if (V.isArray(t)) {
                    for (i = Qe(e), o = t.length; o > r; r++) s[t[r]] = V.css(e, t[r], !1, i);
                    return s
                }
                return void 0 !== n ? V.style(e, t, n) : V.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function () {
            return T(this, !0)
        },
        hide: function () {
            return T(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                xe(this) ? V(this).show() : V(this).hide()
            })
        }
    }), V.Tween = I, I.prototype = {
        constructor: I,
        init: function (e, t, n, i, o, s) {
            this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = s || (V.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = I.propHooks[this.prop];
            return e && e.get ? e.get(this) : I.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = I.propHooks[this.prop];
            return this.options.duration ? this.pos = t = V.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this
        }
    }, I.prototype.init.prototype = I.prototype, I.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = V.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function (e) {
                V.fx.step[e.prop] ? V.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[V.cssProps[e.prop]] || V.cssHooks[e.prop]) ? V.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, V.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, V.fx = I.prototype.init, V.fx.step = {};
    var Ue, Ge, Xe = /^(?:toggle|show|hide)$/,
        Ve = new RegExp("^(?:([+-])=|)(" + _e + ")([a-z%]*)$", "i"),
        et = /queueHooks$/,
        tt = [E],
        nt = {
            "*": [function (e, t) {
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
        tweener: function (e, t) {
            V.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, i = 0, o = e.length; o > i; i++) n = e[i], nt[n] = nt[n] || [], nt[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? tt.unshift(e) : tt.push(e)
        }
    }), V.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? V.extend({}, e) : {
            complete: n || !n && t || V.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !V.isFunction(t) && t
        };
        return i.duration = V.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in V.fx.speeds ? V.fx.speeds[i.duration] : V.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            V.isFunction(i.old) && i.old.call(this), i.queue && V.dequeue(this, i.queue)
        }, i
    }, V.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(xe).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function (e, t, n, i) {
            var o = V.isEmptyObject(e),
                s = V.speed(t, n, i),
                r = function () {
                    var t = L(this, V.extend({}, e), s);
                    (o || ve.get(this, "finish")) && t.stop(!0)
                };
            return r.finish = r, o || s.queue === !1 ? this.each(r) : this.queue(s.queue, r)
        },
        stop: function (e, t, n) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
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
        finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
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
    }), V.each(["toggle", "show", "hide"], function (e, t) {
        var n = V.fn[t];
        V.fn[t] = function (e, i, o) {
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
    }, function (e, t) {
        V.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), V.timers = [], V.fx.tick = function () {
        var e, t = 0,
            n = V.timers;
        for (Ue = V.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
        n.length || V.fx.stop(), Ue = void 0
    }, V.fx.timer = function (e) {
        V.timers.push(e), e() ? V.fx.start() : V.timers.pop()
    }, V.fx.interval = 13, V.fx.start = function () {
        Ge || (Ge = setInterval(V.fx.tick, V.fx.interval))
    }, V.fx.stop = function () {
        clearInterval(Ge), Ge = null
    }, V.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, V.fn.delay = function (e, t) {
        return e = V.fx ? V.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
            var i = setTimeout(t, e);
            n.stop = function () {
                clearTimeout(i)
            }
        })
    },
        function () {
            var e = G.createElement("input"),
                t = G.createElement("select"),
                n = t.appendChild(G.createElement("option"));
            e.type = "checkbox", U.checkOn = "" !== e.value, U.optSelected = n.selected, t.disabled = !0, U.optDisabled = !n.disabled, e = G.createElement("input"), e.value = "t", e.type = "radio", U.radioValue = "t" === e.value
        }();
    var it, ot, st = V.expr.attrHandle;
    V.fn.extend({
        attr: function (e, t) {
            return ge(this, V.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                V.removeAttr(this, e)
            })
        }
    }), V.extend({
        attr: function (e, t, n) {
            var i, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === ke ? V.prop(e, t, n) : (1 === s && V.isXMLDoc(e) || (t = t.toLowerCase(), i = V.attrHooks[t] || (V.expr.match.bool.test(t) ? ot : it)), void 0 === n ? i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = V.find.attr(e, t), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void V.removeAttr(e, t))
        },
        removeAttr: function (e, t) {
            var n, i, o = 0,
                s = t && t.match(fe);
            if (s && 1 === e.nodeType)
                for (; n = s[o++];) i = V.propFix[n] || n, V.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!U.radioValue && "radio" === t && V.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), ot = {
        set: function (e, t, n) {
            return t === !1 ? V.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, V.each(V.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = st[t] || V.find.attr;
        st[t] = function (e, t, i) {
            var o, s;
            return i || (s = st[t], st[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, st[t] = s), o
        }
    });
    var rt = /^(?:input|select|textarea|button)$/i;
    V.fn.extend({
        prop: function (e, t) {
            return ge(this, V.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[V.propFix[e] || e]
            })
        }
    }), V.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (e, t, n) {
            var i, o, s, r = e.nodeType;
            if (e && 3 !== r && 8 !== r && 2 !== r) return s = 1 !== r || !V.isXMLDoc(e), s && (t = V.propFix[t] || t, o = V.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    return e.hasAttribute("tabindex") || rt.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), U.optSelected || (V.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), V.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        V.propFix[this.toLowerCase()] = this
    });
    var at = /[\t\r\n\f]/g;
    V.fn.extend({
        addClass: function (e) {
            var t, n, i, o, s, r, a = "string" == typeof e && e,
                l = 0,
                d = this.length;
            if (V.isFunction(e)) return this.each(function (t) {
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
        removeClass: function (e) {
            var t, n, i, o, s, r, a = 0 === arguments.length || "string" == typeof e && e,
                l = 0,
                d = this.length;
            if (V.isFunction(e)) return this.each(function (t) {
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
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(V.isFunction(e) ? function (n) {
                V(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function () {
                if ("string" === n)
                    for (var t, i = 0, o = V(this), s = e.match(fe) || []; t = s[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else (n === ke || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(at, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var lt = /\r/g;
    V.fn.extend({
        val: function (e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = V.isFunction(e), this.each(function (n) {
                var o;
                1 === this.nodeType && (o = i ? e.call(this, n, V(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : V.isArray(o) && (o = V.map(o, function (e) {
                    return null == e ? "" : e + ""
                })), t = V.valHooks[this.type] || V.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = V.valHooks[o.type] || V.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(lt, "") : null == n ? "" : n)) : void 0
        }
    }), V.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = V.find.attr(e, "value");
                    return null != t ? t : V.trim(V.text(e))
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, s = "select-one" === e.type || 0 > o, r = s ? null : [], a = s ? o + 1 : i.length, l = 0 > o ? a : s ? o : 0; a > l; l++)
                        if (n = i[l], !(!n.selected && l !== o || (U.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && V.nodeName(n.parentNode, "optgroup"))) {
                            if (t = V(n).val(), s) return t;
                            r.push(t)
                        }
                    return r
                },
                set: function (e, t) {
                    for (var n, i, o = e.options, s = V.makeArray(t), r = o.length; r--;) i = o[r], (i.selected = V.inArray(i.value, s) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), s
                }
            }
        }
    }), V.each(["radio", "checkbox"], function () {
        V.valHooks[this] = {
            set: function (e, t) {
                return V.isArray(t) ? e.checked = V.inArray(V(e).val(), t) >= 0 : void 0
            }
        }, U.checkOn || (V.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), V.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        V.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), V.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var dt = V.now(),
        ct = /\?/;
    V.parseJSON = function (e) {
        return JSON.parse(e + "")
    }, V.parseXML = function (e) {
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
        ajaxSetup: function (e, t) {
            return t ? $($(e, V.ajaxSettings), t) : $(V.ajaxSettings, e)
        },
        ajaxPrefilter: O(bt),
        ajaxTransport: O(yt),
        ajax: function (e, t) {
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
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === y) {
                            if (!r)
                                for (r = {}; t = ft.exec(s);) r[t[1].toLowerCase()] = t[2];
                            t = r[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === y ? s : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return y || (e = b[n] = b[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return y || (u.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > y)
                                for (t in e) g[t] = [g[t], e[t]];
                            else _.always(e[_.status]);
                        return this
                    },
                    abort: function (e) {
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
                _.readyState = 1, d && f.trigger("ajaxSend", [_, u]), u.async && u.timeout > 0 && (a = setTimeout(function () {
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
        getJSON: function (e, t, n) {
            return V.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return V.get(e, void 0, t, "script")
        }
    }), V.each(["get", "post"], function (e, t) {
        V[t] = function (e, n, i, o) {
            return V.isFunction(n) && (o = o || i, i = n, n = void 0), V.ajax({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            })
        }
    }), V._evalUrl = function (e) {
        return V.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, V.fn.extend({
        wrapAll: function (e) {
            var t;
            return V.isFunction(e) ? this.each(function (t) {
                V(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = V(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function (e) {
            return this.each(V.isFunction(e) ? function (t) {
                V(this).wrapInner(e.call(this, t))
            } : function () {
                var t = V(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = V.isFunction(e);
            return this.each(function (n) {
                V(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                V.nodeName(this, "body") || V(this).replaceWith(this.childNodes)
            }).end()
        }
    }), V.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, V.expr.filters.visible = function (e) {
        return !V.expr.filters.hidden(e)
    };
    var xt = /%20/g,
        Ct = /\[\]$/,
        kt = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        Tt = /^(?:input|select|textarea|keygen)/i;
    V.param = function (e, t) {
        var n, i = [],
            o = function (e, t) {
                t = V.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = V.ajaxSettings && V.ajaxSettings.traditional), V.isArray(e) || e.jquery && !V.isPlainObject(e)) V.each(e, function () {
            o(this.name, this.value)
        });
        else
            for (n in e) z(n, e[n], t, o);
        return i.join("&").replace(xt, "+")
    }, V.fn.extend({
        serialize: function () {
            return V.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = V.prop(this, "elements");
                return e ? V.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !V(this).is(":disabled") && Tt.test(this.nodeName) && !St.test(e) && (this.checked || !Ce.test(e))
            }).map(function (e, t) {
                var n = V(this).val();
                return null == n ? null : V.isArray(n) ? V.map(n, function (e) {
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
    }), V.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (e) { }
    };
    var It = 0,
        qt = {},
        Pt = {
            0: 200,
            1223: 204
        },
        jt = V.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function () {
        for (var e in qt) qt[e]()
    }), U.cors = !!jt && "withCredentials" in jt, U.ajax = jt = !!jt, V.ajaxTransport(function (e) {
        var t;
        return U.cors || jt && !e.crossDomain ? {
            send: function (n, i) {
                var o, s = e.xhr(),
                    r = ++It;
                if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (o in e.xhrFields) s[o] = e.xhrFields[o];
                e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (o in n) s.setRequestHeader(o, n[o]);
                t = function (e) {
                    return function () {
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
            abort: function () {
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
            "text script": function (e) {
                return V.globalEval(e), e
            }
        }
    }), V.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), V.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (i, o) {
                    t = V("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), G.head.appendChild(t[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var Et = [],
        Nt = /(=)\?(?=&|$)|\?\?/;
    V.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Et.pop() || V.expando + "_" + dt++;
            return this[e] = !0, e
        }
    }), V.ajaxPrefilter("json jsonp", function (t, n, i) {
        var o, s, r, a = t.jsonp !== !1 && (Nt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Nt.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = V.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Nt, "$1" + o) : t.jsonp !== !1 && (t.url += (ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
            return r || V.error(o + " was not called"), r[0]
        }, t.dataTypes[0] = "json", s = e[o], e[o] = function () {
            r = arguments
        }, i.always(function () {
            e[o] = s, t[o] && (t.jsonpCallback = n.jsonpCallback, Et.push(o)), r && V.isFunction(s) && s(r[0]), r = s = void 0
        }), "script") : void 0
    }), V.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || G;
        var i = re.exec(e),
            o = !n && [];
        return i ? [t.createElement(i[1])] : (i = V.buildFragment([e], t, o), o && o.length && V(o).remove(), V.merge([], i.childNodes))
    };
    var Lt = V.fn.load;
    V.fn.load = function (e, t, n) {
        if ("string" != typeof e && Lt) return Lt.apply(this, arguments);
        var i, o, s, r = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = V.trim(e.slice(a)), e = e.slice(0, a)), V.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), r.length > 0 && V.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function (e) {
            s = arguments, r.html(i ? V("<div>").append(V.parseHTML(e)).find(i) : e)
        }).complete(n && function (e, t) {
            r.each(n, s || [e.responseText, t, e])
        }), this
    }, V.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        V.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), V.expr.filters.animated = function (e) {
        return V.grep(V.timers, function (t) {
            return e === t.elem
        }).length
    };
    var Ot = e.document.documentElement;
    V.offset = {
        setOffset: function (e, t, n) {
            var i, o, s, r, a, l, d, c = V.css(e, "position"),
                u = V(e),
                h = {};
            "static" === c && (e.style.position = "relative"), a = u.offset(), s = V.css(e, "top"), l = V.css(e, "left"), d = ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1, d ? (i = u.position(), r = i.top, o = i.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), V.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (h.top = t.top - a.top + r), null != t.left && (h.left = t.left - a.left + o), "using" in t ? t.using.call(e, h) : u.css(h)
        }
    }, V.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
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
        position: function () {
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
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || Ot; e && !V.nodeName(e, "html") && "static" === V.css(e, "position");) e = e.offsetParent;
                return e || Ot
            })
        }
    }), V.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, n) {
        var i = "pageYOffset" === n;
        V.fn[t] = function (o) {
            return ge(this, function (t, o, s) {
                var r = H(t);
                return void 0 === s ? r ? r[n] : t[o] : void (r ? r.scrollTo(i ? e.pageXOffset : s, i ? s : e.pageYOffset) : t[o] = s)
            }, t, o, arguments.length, null)
        }
    }), V.each(["top", "left"], function (e, t) {
        V.cssHooks[t] = w(U.pixelPosition, function (e, n) {
            return n ? (n = _(e, t), Me.test(n) ? V(e).position()[t] + "px" : n) : void 0
        })
    }), V.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        V.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, i) {
            V.fn[i] = function (i, o) {
                var s = arguments.length && (n || "boolean" != typeof i),
                    r = n || (i === !0 || o === !0 ? "margin" : "border");
                return ge(this, function (t, n, i) {
                    var o;
                    return V.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? V.css(t, n, r) : V.style(t, n, i, r)
                }, t, s ? i : void 0, s, null)
            }
        })
    }), V.fn.size = function () {
        return this.length
    }, V.fn.andSelf = V.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return V
    });
    var Dt = e.jQuery,
        $t = e.$;
    return V.noConflict = function (t) {
        return e.$ === V && (e.$ = $t), t && e.jQuery === V && (e.jQuery = Dt), V
    }, typeof t === ke && (e.jQuery = e.$ = V), V
})




    
    