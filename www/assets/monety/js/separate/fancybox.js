function (e, t, n, i) {
    "use strict";
    var o = n("html"),
        s = n(e),
        r = n(t),
        a = n.fancybox = function () {
            a.open.apply(this, arguments)
        },
        l = navigator.userAgent.match(/msie/i),
        d = null,
        c = t.createTouch !== i,
        u = function (e) {
            return e && e.hasOwnProperty && e instanceof n
        },
        h = function (e) {
            return e && "string" === n.type(e)
        },
        f = function (e) {
            return h(e) && e.indexOf("%") > 0
        },
        p = function (e) {
            return e && !(e.style.overflow && "hidden" === e.style.overflow) && (e.clientWidth && e.scrollWidth > e.clientWidth || e.clientHeight && e.scrollHeight > e.clientHeight)
        },
        m = function (e, t) {
            var n = parseInt(e, 10) || 0;
            return t && f(e) && (n = a.getViewport()[t] / 100 * n), Math.ceil(n)
        },
        g = function (e, t) {
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
        open: function (e, t) {
            if (e && (n.isPlainObject(t) || (t = {}), !1 !== a.close(!0))) return n.isArray(e) || (e = u(e) ? n(e).get() : [e]), n.each(e, function (o, s) {
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
        cancel: function () {
            var e = a.coming;
            e && !1 !== a.trigger("onCancel") && (a.hideLoading(), a.ajaxLoad && a.ajaxLoad.abort(), a.ajaxLoad = null, a.imgPreload && (a.imgPreload.onload = a.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(), a.coming = null, a.current || a._afterZoomOut(e))
        },
        close: function (e) {
            a.cancel(), !1 !== a.trigger("beforeClose") && (a.unbindEvents(), a.isActive && (a.isOpen && e !== !0 ? (a.isOpen = a.isOpened = !1, a.isClosing = !0, n(".fancybox-item, .fancybox-nav").remove(), a.wrap.stop(!0, !0).removeClass("fancybox-opened"), a.transitions[a.current.closeMethod]()) : (n(".fancybox-wrap").stop(!0).trigger("onReset").remove(), a._afterZoomOut())))
        },
        play: function (e) {
            var t = function () {
                clearTimeout(a.player.timer)
            },
                n = function () {
                    t(), a.current && a.player.isActive && (a.player.timer = setTimeout(a.next, a.current.playSpeed))
                },
                i = function () {
                    t(), r.unbind(".player"), a.player.isActive = !1, a.trigger("onPlayEnd")
                },
                o = function () {
                    a.current && (a.current.loop || a.current.index < a.group.length - 1) && (a.player.isActive = !0, r.bind({
                        "onCancel.player beforeClose.player": i,
                        "onUpdate.player": n,
                        "beforeLoad.player": t
                    }), n(), a.trigger("onPlayStart"))
                };
            e === !0 || !a.player.isActive && e !== !1 ? o() : i()
        },
        next: function (e) {
            var t = a.current;
            t && (h(e) || (e = t.direction.next), a.jumpto(t.index + 1, e, "next"))
        },
        prev: function (e) {
            var t = a.current;
            t && (h(e) || (e = t.direction.prev), a.jumpto(t.index - 1, e, "prev"))
        },
        jumpto: function (e, t, n) {
            var o = a.current;
            o && (e = m(e), a.direction = t || o.direction[e >= o.index ? "next" : "prev"], a.router = n || "jumpto", o.loop && (e < 0 && (e = o.group.length + e % o.group.length), e %= o.group.length), o.group[e] !== i && (a.cancel(), a._start(e)))
        },
        reposition: function (e, t) {
            var i, o = a.current,
                s = o ? o.wrap : null;
            s && (i = a._getPosition(t), e && "scroll" === e.type ? (delete i.position, s.stop(!0, !0).animate(i, 200)) : (s.css(i), o.pos = n.extend({}, o.dim, i)))
        },
        update: function (e) {
            var t = e && e.type,
                n = !t || "orientationchange" === t;
            n && (clearTimeout(d), d = null), a.isOpen && !d && (d = setTimeout(function () {
                var i = a.current;
                i && !a.isClosing && (a.wrap.removeClass("fancybox-tmp"), (n || "load" === t || "resize" === t && i.autoResize) && a._setDimension(), "scroll" === t && i.canShrink || a.reposition(e), a.trigger("onUpdate"), d = null)
            }, n && !c ? 0 : 300))
        },
        toggle: function (e) {
            a.isOpen && (a.current.fitToView = "boolean" === n.type(e) ? e : !a.current.fitToView, c && (a.wrap.removeAttr("style").addClass("fancybox-tmp"), a.trigger("onUpdate")), a.update())
        },
        hideLoading: function () {
            r.unbind(".loading"), n("#fancybox-loading").remove()
        },
        showLoading: function () {
            var e, t;
            a.hideLoading(), e = n('<div id="fancybox-loading"><div></div></div>').click(a.cancel).appendTo("body"), r.bind("keydown.loading", function (e) {
                27 === (e.which || e.keyCode) && (e.preventDefault(), a.cancel())
            }), a.defaults.fixed || (t = a.getViewport(), e.css({
                position: "absolute",
                top: .5 * t.h + t.y,
                left: .5 * t.w + t.x
            }))
        },
        getViewport: function () {
            var t = a.current && a.current.locked || !1,
                n = {
                    x: s.scrollLeft(),
                    y: s.scrollTop()
                };
            return t ? (n.w = t[0].clientWidth, n.h = t[0].clientHeight) : (n.w = c && e.innerWidth ? e.innerWidth : s.width(), n.h = c && e.innerHeight ? e.innerHeight : s.height()), n
        },
        unbindEvents: function () {
            a.wrap && u(a.wrap) && a.wrap.unbind(".fb"), r.unbind(".fb"), s.unbind(".fb")
        },
        bindEvents: function () {
            var e, t = a.current;
            t && (s.bind("orientationchange.fb" + (c ? "" : " resize.fb") + (t.autoCenter && !t.locked ? " scroll.fb" : ""), a.update), e = t.keys, e && r.bind("keydown.fb", function (o) {
                var s = o.which || o.keyCode,
                    r = o.target || o.srcElement;
                return (27 !== s || !a.coming) && void (o.ctrlKey || o.altKey || o.shiftKey || o.metaKey || r && (r.type || n(r).is("[contenteditable]")) || n.each(e, function (e, r) {
                    return t.group.length > 1 && r[s] !== i ? (a[e](r[s]), o.preventDefault(), !1) : n.inArray(s, r) > -1 ? (a[e](), o.preventDefault(), !1) : void 0
                }))
            }), n.fn.mousewheel && t.mouseWheel && a.wrap.bind("mousewheel.fb", function (e, i, o, s) {
                for (var r = e.target || null, l = n(r), d = !1; l.length && !(d || l.is(".fancybox-skin") || l.is(".fancybox-wrap"));) d = p(l[0]), l = n(l).parent();
                0 === i || d || a.group.length > 1 && !t.canShrink && (s > 0 || o > 0 ? a.prev(s > 0 ? "down" : "left") : (s < 0 || o < 0) && a.next(s < 0 ? "up" : "right"),
                    e.preventDefault())
            }))
        },
        trigger: function (e, t) {
            var i, o = t || a.coming || a.current;
            if (o) {
                if (n.isFunction(o[e]) && (i = o[e].apply(o, Array.prototype.slice.call(arguments, 1))), i === !1) return !1;
                o.helpers && n.each(o.helpers, function (t, i) {
                    i && a.helpers[t] && n.isFunction(a.helpers[t][e]) && a.helpers[t][e](n.extend(!0, {}, a.helpers[t].defaults, i), o)
                }), r.trigger(e)
            }
        },
        isImage: function (e) {
            return h(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function (e) {
            return h(e) && e.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function (e) {
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
            }), l.autoSize && (l.autoWidth = l.autoHeight = !0), "auto" === l.width && (l.autoWidth = !0), "auto" === l.height && (l.autoHeight = !0), l.group = a.group, l.index = e, a.coming = l, !1 === a.trigger("beforeLoad")) return void (a.coming = null);
            if (o = l.type, i = l.href, !o) return a.coming = null, !(!a.current || !a.router || "jumpto" === a.router) && (a.current.index = e, a[a.router](a.direction));
            if (a.isActive = !0, "image" !== o && "swf" !== o || (l.autoHeight = l.autoWidth = !1, l.scrolling = "visible"), "image" === o && (l.aspectRatio = !0), "iframe" === o && c && (l.scrolling = "scroll"), l.wrap = n(l.tpl.wrap).addClass("fancybox-" + (c ? "mobile" : "desktop") + " fancybox-type-" + o + " fancybox-tmp " + l.wrapCSS).appendTo(l.parent || "body"), n.extend(l, {
                skin: n(".fancybox-skin", l.wrap),
                outer: n(".fancybox-outer", l.wrap),
                inner: n(".fancybox-inner", l.wrap)
            }), n.each(["Top", "Right", "Bottom", "Left"], function (e, t) {
                l.skin.css("padding" + t, g(l.padding[e]))
            }), a.trigger("onReady"), "inline" === o || "html" === o) {
                if (!l.content || !l.content.length) return a._error("content")
            } else if (!i) return a._error("href");
            "image" === o ? a._loadImage() : "ajax" === o ? a._loadAjax() : "iframe" === o ? a._loadIframe() : a._afterLoad()
        },
        _error: function (e) {
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
        _loadImage: function () {
            var e = a.imgPreload = new Image;
            e.onload = function () {
                this.onload = this.onerror = null, a.coming.width = this.width / a.opts.pixelRatio, a.coming.height = this.height / a.opts.pixelRatio, a._afterLoad()
            }, e.onerror = function () {
                this.onload = this.onerror = null, a._error("image")
            }, e.src = a.coming.href, e.complete !== !0 && a.showLoading()
        },
        _loadAjax: function () {
            var e = a.coming;
            a.showLoading(), a.ajaxLoad = n.ajax(n.extend({}, e.ajax, {
                url: e.href,
                error: function (e, t) {
                    a.coming && "abort" !== t ? a._error("ajax", e) : a.hideLoading()
                },
                success: function (t, n) {
                    "success" === n && (e.content = t, a._afterLoad())
                }
            }))
        },
        _loadIframe: function () {
            var e = a.coming,
                t = n(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", c ? "auto" : e.iframe.scrolling).attr("src", e.href);
            n(e.wrap).bind("onReset", function () {
                try {
                    n(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (e) { }
            }), e.iframe.preload && (a.showLoading(), t.one("load", function () {
                n(this).data("ready", 1), c || n(this).bind("load.fb", a.update), n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), a._afterLoad()
            })), e.content = t.appendTo(e.inner), e.iframe.preload || a._afterLoad()
        },
        _preloadImages: function () {
            var e, t, n = a.group,
                i = a.current,
                o = n.length,
                s = i.preload ? Math.min(i.preload, o - 1) : 0;
            for (t = 1; t <= s; t += 1) e = n[(i.index + t) % o], "image" === e.type && e.href && ((new Image).src = e.href)
        },
        _afterLoad: function () {
            var e, t, i, o, s, r, l = a.coming,
                d = a.current,
                c = "fancybox-placeholder";
            if (a.hideLoading(), l && a.isActive !== !1) {
                if (!1 === a.trigger("afterLoad", l, d)) return l.wrap.stop(!0).trigger("onReset").remove(), void (a.coming = null);
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
                        e.selector ? t = n("<div>").html(t).find(e.selector) : u(t) && (t.data(c) || t.data(c, n('<div class="' + c + '"></div>').insertAfter(t).hide()), t = t.show().detach(), e.wrap.bind("onReset", function () {
                            n(this).find(t).length && t.hide().replaceAll(t.data(c)).data(c, !1)
                        }));
                        break;
                    case "image":
                        t = e.tpl.image.replace("{href}", s);
                        break;
                    case "swf":
                        t = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + s + '"></param>', r = "", n.each(e.swf, function (e, n) {
                            t += '<param name="' + e + '" value="' + n + '"></param>', r += " " + e + '="' + n + '"'
                        }), t += '<embed src="' + s + '" type="application/x-shockwave-flash" width="100%" height="100%"' + r + "></embed></object>"
                }
                u(t) && t.parent().is(e.inner) || e.inner.append(t), a.trigger("beforeShow"), e.inner.css("overflow", "yes" === o ? "scroll" : "no" === o ? "hidden" : o), a._setDimension(), a.reposition(), a.isOpen = !1, a.coming = null, a.bindEvents(), a.isOpened ? d.prevMethod && a.transitions[d.prevMethod]() : n(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(), a.transitions[a.isOpened ? e.nextMethod : e.openMethod](), a._preloadImages()
            }
        },
        _setDimension: function () {
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
                } catch (W) { }
            } else (T.autoWidth || T.autoHeight) && (S.addClass("fancybox-tmp"), T.autoWidth || S.width(s), T.autoHeight || S.height(r), T.autoWidth && (s = S.width()), T.autoHeight && (r = S.height()), S.removeClass("fancybox-tmp"));
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
        _getPosition: function (e) {
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
        _afterZoomIn: function () {
            var e = a.current;
            e && (a.isOpen = a.isOpened = !0, a.wrap.css("overflow", "visible").addClass("fancybox-opened"), a.update(), (e.closeClick || e.nextClick && a.group.length > 1) && a.inner.css("cursor", "pointer").bind("click.fb", function (t) {
                n(t.target).is("a") || n(t.target).parent().is("a") || (t.preventDefault(), a[e.closeClick ? "close" : "next"]())
            }), e.closeBtn && n(e.tpl.closeBtn).appendTo(a.skin).bind("click.fb", function (e) {
                e.preventDefault(), a.close()
            }), e.arrows && a.group.length > 1 && ((e.loop || e.index > 0) && n(e.tpl.prev).appendTo(a.outer).bind("click.fb", a.prev), (e.loop || e.index < a.group.length - 1) && n(e.tpl.next).appendTo(a.outer).bind("click.fb", a.next)), a.trigger("afterShow"), e.loop || e.index !== e.group.length - 1 ? a.opts.autoPlay && !a.player.isActive && (a.opts.autoPlay = !1, a.play()) : a.play(!1))
        },
        _afterZoomOut: function (e) {
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
        getOrigPosition: function () {
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
        step: function (e, t) {
            var n, i, o, s = t.prop,
                r = a.current,
                l = r.wrapSpace,
                d = r.skinSpace;
            "width" !== s && "height" !== s || (n = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), a.isClosing && (n = 1 - n), i = "width" === s ? r.wPadding : r.hPadding, o = e - i, a.skin[s](m("width" === s ? o : o - l * n)), a.inner[s](m("width" === s ? o : o - l * n - d * n)))
        },
        zoomIn: function () {
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
        zoomOut: function () {
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
        changeIn: function () {
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
        changeOut: function () {
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
                complete: function () {
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
        create: function (e) {
            e = n.extend({}, this.defaults, e), this.overlay && this.close(), this.overlay = n('<div class="fancybox-overlay"></div>').appendTo(a.coming ? a.coming.parent : e.parent), this.fixed = !1, e.fixed && a.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        },
        open: function (e) {
            var t = this;
            e = n.extend({}, this.defaults, e), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e), this.fixed || (s.bind("resize.overlay", n.proxy(this.update, this)), this.update()), e.closeClick && this.overlay.bind("click.overlay", function (e) {
                if (n(e.target).hasClass("fancybox-overlay")) return a.isActive ? a.close() : t.close(), !1
            }), this.overlay.css(e.css).show()
        },
        close: function () {
            var e, t;
            s.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (n(".fancybox-margin").removeClass("fancybox-margin"), e = s.scrollTop(), t = s.scrollLeft(), this.el.removeClass("fancybox-lock"), s.scrollTop(e).scrollLeft(t)), n(".fancybox-overlay").remove().hide(), n.extend(this, {
                overlay: null,
                fixed: !1
            })
        },
        update: function () {
            var e, n = "100%";
            this.overlay.width(n).height("100%"), l ? (e = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), r.width() > e && (n = r.width())) : r.width() > s.width() && (n = r.width()), this.overlay.width(n).height(r.height())
        },
        onReady: function (e, t) {
            var i = this.overlay;
            n(".fancybox-overlay").stop(!0, !0), i || this.create(e), e.locked && this.fixed && t.fixed && (i || (this.margin = r.height() > s.height() && n("html").css("margin-right").replace("px", "")), t.locked = this.overlay.append(t.wrap), t.fixed = !1), e.showEarly === !0 && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function (e, t) {
            var i, o;
            t.locked && (this.margin !== !1 && (n("*").filter(function () {
                return "fixed" === n(this).css("position") && !n(this).hasClass("fancybox-overlay") && !n(this).hasClass("fancybox-wrap")
            }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), i = s.scrollTop(), o = s.scrollLeft(), this.el.addClass("fancybox-lock"), s.scrollTop(i).scrollLeft(o)), this.open(e)
        },
        onUpdate: function () {
            this.fixed || this.update()
        },
        afterClose: function (e) {
            this.overlay && !a.coming && this.overlay.fadeOut(e.speedOut, n.proxy(this.close, this))
        }
    }, a.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        },
        beforeShow: function (e) {
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
    }, n.fn.fancybox = function (e) {
        var t, i = n(this),
            o = this.selector || "",
            s = function (s) {
                var r, l, d = n(this).blur(),
                    c = t;
                s.ctrlKey || s.altKey || s.shiftKey || s.metaKey || d.is(".fancybox-wrap") || (r = e.groupAttr || "data-fancybox-group", l = d.attr(r), l || (r = "rel", l = d.get(0)[r]), l && "" !== l && "nofollow" !== l && (d = o.length ? n(o) : i, d = d.filter("[" + r + '="' + l + '"]'), c = d.index(this)), e.index = c, a.open(d, e) !== !1 && s.preventDefault())
            };
        return e = e || {}, t = e.index || 0, o && e.live !== !1 ? r.undelegate(o, "click.fb-start").delegate(o + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", s) : i.unbind("click.fb-start").bind("click.fb-start", s), this.filter("[data-fancybox-start=1]").trigger("click"), this
    }, r.ready(function () {
        var t, s;
        n.scrollbarWidth === i && (n.scrollbarWidth = function () {
            var e = n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                t = e.children(),
                i = t.innerWidth() - t.height(99).innerWidth();
            return e.remove(), i
        }), n.support.fixedPosition === i && (n.support.fixedPosition = function () {
            var e = n('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                t = 20 === e[0].offsetTop || 15 === e[0].offsetTop;
            return e.remove(), t
        }()), n.extend(a.defaults, {
            scrollbarWidth: n.scrollbarWidth(),
            fixed: n.support.fixedPosition,
            parent: n("body")
        }), t = n(e).width(), o.addClass("fancybox-lock-test"), s = n(e).width(), o.removeClass("fancybox-lock-test"), n("<style type='text/css'>.fancybox-margin{margin-right:" + (s - t) + "px;}</style>").appendTo("head")
    })
}(window, document, jQuery)