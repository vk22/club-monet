function (e) {
    function t(t, n) {
        var i, o, s = this,
            r = navigator.userAgent.toLowerCase();
        s.uid = e.rsModules.uid++, s.ns = ".rs" + s.uid;
        var a = document.createElement("div").style,
            l = ["webkit", "Moz", "ms", "O"],
            d = "",
            c = 0;
        for (i = 0; i < l.length; i++) o = l[i], !d && o + "Transform" in a && (d = o), o = o.toLowerCase(), window.requestAnimationFrame || (window.requestAnimationFrame = window[o + "RequestAnimationFrame"], window.cancelAnimationFrame = window[o + "CancelAnimationFrame"] || window[o + "CancelRequestAnimationFrame"]);
        window.requestAnimationFrame || (window.requestAnimationFrame = function (e) {
            var t = (new Date).getTime(),
                n = Math.max(0, 16 - (t - c)),
                i = window.setTimeout(function () {
                    e(t + n)
                }, n);
            return c = t + n, i
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
            clearTimeout(e)
        }), s.isIPAD = r.match(/(ipad)/), l = /(chrome)[ \/]([\w.]+)/.exec(r) || /(webkit)[ \/]([\w.]+)/.exec(r) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(r) || /(msie) ([\w.]+)/.exec(r) || 0 > r.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(r) || [], i = l[1] || "", o = l[2] || "0", l = {}, i && (l[i] = !0, l.version = o), l.chrome && (l.webkit = !0), s._a = l, s.isAndroid = -1 < r.indexOf("android"), s.slider = e(t), s.ev = e(s), s._b = e(document), s.st = e.extend({}, e.fn.royalSlider.defaults, n), s._c = s.st.transitionSpeed, s._d = 0, !s.st.allowCSS3 || l.webkit && !s.st.allowCSS3OnWebkit || (r = d + (d ? "T" : "t"), s._e = r + "ransform" in a && r + "ransition" in a, s._e && (s._f = d + (d ? "P" : "p") + "erspective" in a)), d = d.toLowerCase(), s._g = "-" + d + "-", s._h = "vertical" !== s.st.slidesOrientation, s._i = s._h ? "left" : "top", s._j = s._h ? "width" : "height", s._k = -1, s._l = "fade" !== s.st.transitionType, s._l || (s.st.sliderDrag = !1, s._m = 10), s._n = "z-index:0; display:none; opacity:0;", s._o = 0, s._p = 0, s._q = 0, e.each(e.rsModules, function (e, t) {
            "uid" !== e && t.call(s)
        }), s.slides = [], s._r = 0, (s.st.slides ? e(s.st.slides) : s.slider.children().detach()).each(function () {
            s._s(this, !0)
        }), s.st.randomizeSlides && s.slides.sort(function () {
            return .5 - Math.random()
        }), s.numSlides = s.slides.length, s._t(), s.st.startSlideId ? s.st.startSlideId > s.numSlides - 1 && (s.st.startSlideId = s.numSlides - 1) : s.st.startSlideId = 0, s._o = s.staticSlideId = s.currSlideId = s._u = s.st.startSlideId, s.currSlide = s.slides[s.currSlideId], s._v = 0, s.msTouch = !1, s.slider.addClass((s._h ? "rsHor" : "rsVer") + (s._l ? "" : " rsFade")), a = '<div class="rsOverflow"><div class="rsContainer">', s.slidesSpacing = s.st.slidesSpacing, s._w = (s._h ? s.slider.width() : s.slider.height()) + s.st.slidesSpacing, s._x = Boolean(0 < s._y), 1 >= s.numSlides && (s._z = !1), s._a1 = s._z && s._l ? 2 === s.numSlides ? 1 : 2 : 0, s._b1 = 6 > s.numSlides ? s.numSlides : 6, s._c1 = 0, s._d1 = 0, s.slidesJQ = [];
        for (i = 0; i < s.numSlides; i++) s.slidesJQ.push(e('<div style="' + (s._l ? "" : i !== s.currSlideId ? s._n : "z-index:0;") + '" class="rsSlide "></div>'));
        s._e1 = a = e(a + "</div></div>"), d = s.ns, s.msEnabled = window.navigator.msPointerEnabled, s.msEnabled ? (s.msTouch = Boolean(1 < window.navigator.msMaxTouchPoints), s.hasTouch = !1, s._n1 = .2, s._j1 = "MSPointerDown" + d, s._k1 = "MSPointerMove" + d, s._l1 = "MSPointerUp" + d, s._m1 = "MSPointerCancel" + d) : (s._j1 = "mousedown" + d, s._k1 = "mousemove" + d, s._l1 = "mouseup" + d, s._m1 = "mouseup" + d, "ontouchstart" in window || "createTouch" in document ? (s.hasTouch = !0, s._j1 += " touchstart" + d, s._k1 += " touchmove" + d, s._l1 += " touchend" + d, s._m1 += " touchcancel" + d, s._n1 = .5, s.st.sliderTouch && (s._f1 = !0)) : (s.hasTouch = !1, s._n1 = .2)), s.st.sliderDrag && (s._f1 = !0, l.msie || l.opera ? s._g1 = s._h1 = "move" : l.mozilla ? (s._g1 = "-moz-grab", s._h1 = "-moz-grabbing") : l.webkit && -1 != navigator.platform.indexOf("Mac") && (s._g1 = "-webkit-grab", s._h1 = "-webkit-grabbing"), s._i1()), s.slider.html(a), s._o1 = s.st.controlsInside ? s._e1 : s.slider, s._p1 = s._e1.children(".rsContainer"), s.msEnabled && s._p1.css("-ms-touch-action", s._h ? "pan-y" : "pan-x"), s._q1 = e('<div class="rsPreloader"></div>'), a = s._p1.children(".rsSlide"), s._r1 = s.slidesJQ[s.currSlideId], s._s1 = 0, s._e ? (s._t1 = "transition-property", s._u1 = "transition-duration", s._v1 = "transition-timing-function", s._w1 = s._x1 = s._g + "transform", s._f ? (l.webkit && !l.chrome && s.slider.addClass("rsWebkit3d"), /iphone|ipad|ipod/gi.test(navigator.appVersion), s._y1 = "translate3d(", s._z1 = "px, ", s._a2 = "px, 0px)") : (s._y1 = "translate(", s._z1 = "px, ", s._a2 = "px)"), s._l ? s._p1[s._g + s._t1] = s._g + "transform" : (d = {}, d[s._g + s._t1] = "opacity", d[s._g + s._u1] = s.st.transitionSpeed + "ms", d[s._g + s._v1] = s.st.css3easeInOut, a.css(d))) : (s._x1 = "left", s._w1 = "top");
        var u;
        e(window).on("resize" + s.ns, function () {
            u && clearTimeout(u), u = setTimeout(function () {
                s.updateSliderSize()
            }, 50)
        }), s.ev.trigger("rsAfterPropsSetup"), s.updateSliderSize(), s.st.keyboardNavEnabled && s._b2(), s.st.arrowsNavHideOnTouch && (s.hasTouch || s.msTouch) && (s.st.arrowsNav = !1), s.st.arrowsNav && (a = s._o1, e('<div class="rsArrow rsArrowLeft"><div class="rsArrowIcn"></div></div><div class="rsArrow rsArrowRight"><div class="rsArrowIcn"></div></div>').appendTo(a), s._c2 = a.children(".rsArrowLeft").click(function (e) {
            e.preventDefault(), s.prev()
        }), s._d2 = a.children(".rsArrowRight").click(function (e) {
            e.preventDefault(), s.next()
        }), s.st.arrowsNavAutoHide && !s.hasTouch && (s._c2.addClass("rsHidden"), s._d2.addClass("rsHidden"), a.one("mousemove.arrowshover", function () {
            s._c2.removeClass("rsHidden"), s._d2.removeClass("rsHidden")
        }), a.hover(function () {
            s._e2 || (s._c2.removeClass("rsHidden"), s._d2.removeClass("rsHidden"))
        }, function () {
            s._e2 || (s._c2.addClass("rsHidden"), s._d2.addClass("rsHidden"))
        })), s.ev.on("rsOnUpdateNav", function () {
            s._f2()
        }), s._f2()), s._f1 ? s._p1.on(s._j1, function (e) {
            s._g2(e)
        }) : s.dragSuccess = !1;
        var h = ["rsPlayBtnIcon", "rsPlayBtn", "rsCloseVideoBtn", "rsCloseVideoIcn"];
        s._p1.click(function (t) {
            if (!s.dragSuccess) {
                var n = e(t.target).attr("class");
                if (-1 !== e.inArray(n, h) && s.toggleVideo()) return !1;
                if (s.st.navigateByClick && !s._h2) {
                    if (e(t.target).closest(".rsNoDrag", s._r1).length) return !0;
                    s._i2(t)
                }
                s.ev.trigger("rsSlideClick")
            }
        }).on("click.rs", "a", function () {
            return !s.dragSuccess && (s._h2 = !0, void setTimeout(function () {
                s._h2 = !1
            }, 3))
        }), s.ev.trigger("rsAfterInit")
    }
    e.rsModules || (e.rsModules = {
        uid: 0
    }), t.prototype = {
        constructor: t,
        _i2: function (e) {
            e = e[this._h ? "pageX" : "pageY"] - this._j2, e >= this._q ? this.next() : 0 > e && this.prev()
        },
        _t: function () {
            var e;
            e = this.st.numImagesToPreload, (this._z = this.st.loop) && (2 === this.numSlides ? (this._z = !1, this.st.loopRewind = !0) : 2 > this.numSlides && (this.st.loopRewind = this._z = !1)), this._z && 0 < e && (4 >= this.numSlides ? e = 1 : this.st.numImagesToPreload > (this.numSlides - 1) / 2 && (e = Math.floor((this.numSlides - 1) / 2))), this._y = e
        },
        _s: function (t, n) {
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
            if (t = e(t), r._k2 = t, r.ev.trigger("rsBeforeParseNode", [t, a]), !a.stopParsing) return t = r._k2, a.id = r._r, a.contentAdded = !1, r._r++, a.images = [], a.isBig = !1, a.hasCover || (t.hasClass("rsImg") ? (s = t, o = !0) : (s = t.find(".rsImg"), s.length && (o = !0)), o ? (a.bigImage = s.eq(0).attr("data-rsBigImg"), s.each(function () {
                var t = e(this);
                t.is("a") ? i(t, "href") : t.is("img") ? i(t, "src") : i(t)
            })) : t.is("img") && (t.addClass("rsImg rsMainSlideImage"), i(t, "src"))), s = t.find(".rsCaption"), s.length && (a.caption = s.remove()), a.content = t, r.ev.trigger("rsAfterParseNode", [t, a]), n && r.slides.push(a), 0 === a.images.length && (a.isLoaded = !0, a.isRendered = !1, a.isLoading = !1, a.images = null), a
        },
        _b2: function () {
            var e, t, n = this,
                i = function (e) {
                    37 === e ? n.prev() : 39 === e && n.next()
                };
            n._b.on("keydown" + n.ns, function (o) {
                n._l2 || (t = o.keyCode, 37 !== t && 39 !== t || e) || (i(t), e = setInterval(function () {
                    i(t)
                }, 700))
            }).on("keyup" + n.ns, function () {
                e && (clearInterval(e), e = null)
            })
        },
        goTo: function (e, t) {
            e !== this.currSlideId && this._m2(e, this.st.transitionSpeed, !0, !t)
        },
        destroy: function (t) {
            this.ev.trigger("rsBeforeDestroy"), this._b.off("keydown" + this.ns + " keyup" + this.ns + " " + this._k1 + " " + this._l1), this._p1.off(this._j1 + " click"), this.slider.data("royalSlider", null), e.removeData(this.slider, "royalSlider"), e(window).off("resize" + this.ns), t && this.slider.remove(), this.ev = this.slider = this.slides = null
        },
        _n2: function (t, n) {
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
        setItemHtml: function (t, n) {
            var i = this,
                o = function () {
                    if (t.images) {
                        if (!t.isLoading) {
                            var n, o;
                            if (t.content.hasClass("rsImg") ? (n = t.content, o = !0) : n = t.content.find(".rsImg:not(img)"), n && !n.is("img") && n.each(function () {
                                var n = e(this),
                                    i = '<img class="rsImg" src="' + (n.is("a") ? n.attr("href") : n.text()) + '" />';
                                o ? t.content = e(i) : n.replaceWith(i)
                            }), n = o ? t.content : t.content.find("img.rsImg"), d(), n.eq(0).addClass("rsMainSlideImage"), t.iW && t.iH && (t.isLoaded || i._q2(t), a()), t.isLoading = !0, t.isBig) e("<img />").on("load.rs error.rs", function () {
                                e(this).off("load.rs error.rs"), s([this], !0)
                            }).attr("src", t.image);
                            else {
                                t.loaded = [], t.numStartedLoad = 0, n = function () {
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
                s = function (e, n) {
                    if (e.length) {
                        var i = e[0];
                        if (n !== t.isBig) (i = t.holder.children()) && 1 < i.length && c();
                        else if (t.iW && t.iH) r();
                        else if (t.iW = i.width, t.iH = i.height, t.iW && t.iH) r();
                        else {
                            var o = new Image;
                            o.onload = function () {
                                o.width ? (t.iW = o.width, t.iH = o.height, r()) : setTimeout(function () {
                                    o.width && (t.iW = o.width, t.iH = o.height), r()
                                }, 1e3)
                            }, o.src = i.src
                        }
                    } else r()
                },
                r = function () {
                    t.isLoaded = !0, t.isLoading = !1, a(), c(), l()
                },
                a = function () {
                    if (!t.isAppended && i.ev) {
                        var e = i.st.visibleNearby,
                            o = t.id - i._o;
                        n || t.appendOnLoaded || !i.st.fadeinLoadedSlide || 0 !== o && (!(e || i._r2 || i._l2) || -1 !== o && 1 !== o) || (e = {
                            visibility: "visible",
                            opacity: 0
                        }, e[i._g + "transition"] = "opacity 400ms ease-in-out", t.content.css(e), setTimeout(function () {
                            t.content.css("opacity", 1)
                        }, 16)), t.holder.find(".rsPreloader").length ? t.holder.append(t.content) : t.holder.html(t.content), t.isAppended = !0, t.isLoaded && (i._q2(t), l()), t.sizeReady || (t.sizeReady = !0, setTimeout(function () {
                            i.ev.trigger("rsMaybeSizeReady", t)
                        }, 100))
                    }
                },
                l = function () {
                    !t.loadedTriggered && i.ev && (t.isLoaded = t.loadedTriggered = !0, t.holder.trigger("rsAfterContentSet"), i.ev.trigger("rsAfterContentSet", t))
                },
                d = function () {
                    i.st.usePreloader && t.holder.html(i._q1.clone())
                },
                c = function () {
                    if (i.st.usePreloader) {
                        var e = t.holder.find(".rsPreloader");
                        e.length && e.remove()
                    }
                };
            t.isLoaded ? a() : n ? !i._l && t.images && t.iW && t.iH ? o() : (t.holder.isWaiting = !0, d(), t.holder.slideId = -99) : o()
        },
        _p2: function (e) {
            this._p1.append(e.holder), e.appendOnLoaded = !1
        },
        _g2: function (t, n) {
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
                o._l2 = !0, o._b.on(o._k1, function (e) {
                    o._x2(e, n)
                }).on(o._l1, function (e) {
                    o._y2(e, n)
                }), o._z2 = "", o._a3 = !1, o._b3 = i.pageX, o._c3 = i.pageY, o._d3 = o._v = (n ? o._e3 : o._h) ? i.pageX : i.pageY, o._f3 = 0, o._g3 = 0, o._h3 = n ? o._i3 : o._p, o._j3 = (new Date).getTime(), s && o._e1.on(o._m1, function (e) {
                    o._y2(e, n)
                })
            }
        },
        _k3: function (e, t) {
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
        _x2: function (e, t) {
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
        _v3: function () {
            this._r3 = !0, this._a3 = this._l2 = !1, this._y2()
        },
        _y2: function (t, n) {
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
                        if (n || !d._t2) return d._t2 = !1, void (d.dragSuccess = !1);
                        if (d._t2 = !1, d.st.navigateByClick) return d._i2(d.msEnabled ? t.originalEvent : t), void (d.dragSuccess = !0);
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
        _p3: function (e) {
            e = this._p = e, this._e ? this._p1.css(this._x1, this._y1 + (this._h ? e + this._z1 + 0 : 0 + this._z1 + e) + this._a2) : this._p1.css(this._h ? this._x1 : this._w1, e)
        },
        updateSliderSize: function (e) {
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
        appendSlide: function (e, t) {
            var n = this._s(e);
            (isNaN(t) || t > this.numSlides) && (t = this.numSlides), this.slides.splice(t, 0, n), this.slidesJQ.splice(t, 0, '<div style="' + (this._l ? "position:absolute;" : this._n) + '" class="rsSlide"></div>'), t < this.currSlideId && this.currSlideId++, this.ev.trigger("rsOnAppendSlide", [n, t]), this._f4(t), t === this.currSlideId && this.ev.trigger("rsAfterSlideChange")
        },
        removeSlide: function (e) {
            var t = this.slides[e];
            t && (t.holder && t.holder.remove(), e < this.currSlideId && this.currSlideId--, this.slides.splice(e, 1), this.slidesJQ.splice(e, 1), this.ev.trigger("rsOnRemoveSlide", [e]), this._f4(e), e === this.currSlideId && this.ev.trigger("rsAfterSlideChange"))
        },
        _f4: function () {
            var e = this,
                t = e.numSlides,
                t = 0 >= e._u ? 0 : Math.floor(e._u / t);
            for (e.numSlides = e.slides.length, 0 === e.numSlides ? (e.currSlideId = e._d1 = e._u = 0, e.currSlide = e._g4 = null) : e._u = t * e.numSlides + e.currSlideId, t = 0; t < e.numSlides; t++) e.slides[t].id = t;
            e.currSlide = e.slides[e.currSlideId], e._r1 = e.slidesJQ[e.currSlideId], e.currSlideId >= e.numSlides ? e.goTo(e.numSlides - 1) : 0 > e.currSlideId && e.goTo(0), e._t(), e._l && e._z && e._p1.css(e._g + e._u1, "0ms"), e._h4 && clearTimeout(e._h4), e._h4 = setTimeout(function () {
                e._l && e._p3((-e._u - e._d1) * e._w), e._n2(), e._l || e._r1.css({
                    display: "block",
                    opacity: 1
                })
            }, 14), e.ev.trigger("rsOnUpdateNav")
        },
        _i1: function () {
            this._f1 && this._l && (this._g1 ? this._e1.css("cursor", this._g1) : (this._e1.removeClass("grabbing-cursor"), this._e1.addClass("grab-cursor")))
        },
        _w2: function () {
            this._f1 && this._l && (this._h1 ? this._e1.css("cursor", this._h1) : (this._e1.removeClass("grab-cursor"), this._e1.addClass("grabbing-cursor")))
        },
        next: function (e) {
            this._m2("next", this.st.transitionSpeed, !0, !e)
        },
        prev: function (e) {
            this._m2("prev", this.st.transitionSpeed, !0, !e)
        },
        _m2: function (e, t, n, i, o) {
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
            l._c = t, l._n2(!0), o || (c = !0), s = (-i - l._d1) * l._w, c ? setTimeout(function () {
                l._j4 = !1, l._x3(s, e, !1, n), l.ev.trigger("rsOnUpdateNav")
            }, 0) : (l._x3(s, e, !1, n), l.ev.trigger("rsOnUpdateNav"))
        },
        _f2: function () {
            this.st.arrowsNav && (1 >= this.numSlides ? (this._c2.css("display", "none"), this._d2.css("display", "none")) : (this._c2.css("display", "block"), this._d2.css("display", "block"), !this._z && !this.st.loopRewind && (0 === this.currSlideId ? this._c2.addClass("rsArrowDisabled") : this._c2.removeClass("rsArrowDisabled"), this.currSlideId === this.numSlides - 1 ? this._d2.addClass("rsArrowDisabled") : this._d2.removeClass("rsArrowDisabled"))))
        },
        _x3: function (t, n, i, o, s) {
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
            isNaN(d._c) && (d._c = 400), d._p = d._h3 = t, d.ev.trigger("rsBeforeAnimStart"), d._e ? d._l ? (d._c = parseInt(d._c, 10), i = d._g + d._v1, c[d._g + d._u1] = d._c + "ms", c[i] = o ? e.rsCSS3Easing[d.st.easeInOut] : e.rsCSS3Easing[d.st.easeOut], d._p1.css(c), o || !d.hasTouch ? setTimeout(function () {
                d._p3(t)
            }, 5) : d._p3(t)) : (d._c = d.st.transitionSpeed, a = d._g4, l = d._r1, l.data("rsTimeout") && l.css("opacity", 0), r(), a && a.data("rsTimeout", setTimeout(function () {
                c[d._g + d._u1] = "0ms", c.zIndex = 0, c.display = "none", a.data("rsTimeout", ""), a.css(c), setTimeout(function () {
                    a.css("opacity", 0)
                }, 16)
            }, d._c + 60)), c.display = "block", c.zIndex = d._m, c.opacity = 0, c[d._g + d._u1] = "0ms", c[d._g + d._v1] = e.rsCSS3Easing[d.st.easeInOut], l.css(c), l.data("rsTimeout", setTimeout(function () {
                l.css(d._g + d._u1, d._c + "ms"), l.data("rsTimeout", setTimeout(function () {
                    l.css("opacity", 1), l.data("rsTimeout", "")
                }, 20))
            }, 20))) : d._l ? (c[d._h ? d._x1 : d._w1] = t + "px", d._p1.animate(c, d._c, o ? d.st.easeInOut : d.st.easeOut)) : (a = d._g4, l = d._r1, l.stop(!0, !0).css({
                opacity: 0,
                display: "block",
                zIndex: d._m
            }), d._c = d.st.transitionSpeed, l.animate({
                opacity: 1
            }, d._c, d.st.easeInOut), r(), a && a.data("rsTimeout", setTimeout(function () {
                a.stop(!0, !0).css({
                    opacity: 0,
                    display: "none",
                    zIndex: 0
                })
            }, d._c + 60))), d._r2 = !0, d.loadingTimeout && clearTimeout(d.loadingTimeout), d.loadingTimeout = s ? setTimeout(function () {
                d.loadingTimeout = null, s.call()
            }, d._c + 60) : setTimeout(function () {
                d.loadingTimeout = null, d._k4(n)
            }, d._c + 60)
        },
        _u2: function (e) {
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
        _l4: function () {
            var e = window.getComputedStyle(this._p1.get(0), null).getPropertyValue(this._g + "transform").replace(/^matrix\(/i, "").split(/, |\)$/g),
                t = 0 === e[0].indexOf("matrix3d");
            return parseInt(e[this._h ? t ? 12 : 4 : t ? 13 : 5], 10)
        },
        _m4: function (e, t) {
            return this._e ? this._y1 + (t ? e + this._z1 + 0 : 0 + this._z1 + e) + this._a2 : e
        },
        _k4: function () {
            this._l || (this._r1.css("z-index", 0), this._m = 10), this._r2 = !1, this.staticSlideId = this.currSlideId, this._n2(), this._n4 = !1, this.ev.trigger("rsAfterSlideChange")
        },
        _i4: function (e, t) {
            var n = this,
                i = (-n._u - n._d1) * n._w;
            if (0 !== n.numSlides && !n._r2)
                if (n.st.loopRewind) n.goTo("left" === e ? n.numSlides - 1 : 0, t);
                else if (n._l) {
                    n._c = 200;
                    var o = function () {
                        n._r2 = !1
                    };
                    n._x3(i + ("left" === e ? 30 : -30), "", !1, !0, function () {
                        n._r2 = !1, n._x3(i, "", !1, !0, o)
                    })
                }
        },
        _q2: function (e) {
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
    }, e.rsProto = t.prototype, e.fn.royalSlider = function (n) {
        var i = arguments;
        return this.each(function () {
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
        easeInOutSine: function (e, t, n, i, o) {
            return -i / 2 * (Math.cos(Math.PI * t / o) - 1) + n
        },
        easeOutSine: function (e, t, n, i, o) {
            return i * Math.sin(t / o * (Math.PI / 2)) + n
        },
        easeOutCubic: function (e, t, n, i, o) {
            return i * ((t = t / o - 1) * t * t + 1) + n
        }
    })
}(jQuery, window),
function (e) {
    e.rsProto._o4 = function () {
        var e, t = this;
        t.st.addActiveClass && t.ev.on("rsOnUpdateNav", function () {
            e && clearTimeout(e), e = setTimeout(function () {
                t._g4 && t._g4.removeClass("rsActiveSlide"), t._r1 && t._r1.addClass("rsActiveSlide"), e = null
            }, 50)
        })
    }, e.rsModules.activeClass = e.rsProto._o4
}(jQuery),
function (e) {
    e.extend(e.rsProto, {
        _p4: function () {
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
            }, i.st.block = e.extend({}, i._q4, i.st.block), i._r4 = [], i._s4 = [], i.ev.on("rsAfterInit", function () {
                t()
            }), i.ev.on("rsBeforeParseNode", function (t, n, i) {
                n = e(n), i.animBlocks = n.find(".rsABlock").css("display", "none"), i.animBlocks.length || (i.animBlocks = !!n.hasClass("rsABlock") && n.css("display", "none"))
            }), i.ev.on("rsAfterContentSet", function (e, n) {
                n.id === i.slides[i.currSlideId].id && setTimeout(function () {
                    t()
                }, i.st.fadeinLoadedSlide ? 300 : 0)
            }), i.ev.on("rsAfterSlideChange", function () {
                t()
            })
        },
        _v4: function (e, t) {
            setTimeout(function () {
                e.css(t)
            }, 6)
        },
        _u4: function (t) {
            var n, i, o, s, r, a, l, d = this;
            d._s4 = [], t.each(function (t) {
                n = e(this), i = {}, o = {}, s = null;
                var c = n.attr("data-move-offset"),
                    c = c ? parseInt(c, 10) : d.st.block.moveOffset;
                if (0 < c && ((a = n.data("move-effect")) ? (a = a.toLowerCase(), "none" === a ? a = !1 : "left" !== a && "top" !== a && "bottom" !== a && "right" !== a && (a = d.st.block.moveEffect,
                    "none" === a && (a = !1))) : a = d.st.block.moveEffect, a && "none" !== a)) {
                    var u;
                    u = "right" === a || "left" === a;
                    var h;
                    l = !1, d._e ? (h = 0, r = d._x1) : (u ? isNaN(parseInt(n.css("right"), 10)) ? r = "left" : (r = "right", l = !0) : isNaN(parseInt(n.css("bottom"), 10)) ? r = "top" : (r = "bottom", l = !0), r = "margin-" + r, l && (c = -c), d._e ? h = parseInt(n.css(r), 10) : (h = n.data("rs-start-move-prop"), void 0 === h && (h = parseInt(n.css(r), 10), n.data("rs-start-move-prop", h)))), o[r] = d._m4("top" === a || "left" === a ? h - c : h + c, u), i[r] = d._m4(h, u)
                } (c = n.attr("data-fade-effect")) ? "none" !== c.toLowerCase() && "false" !== c.toLowerCase() || (c = !1) : c = d.st.block.fadeEffect, c && (o.opacity = 0, i.opacity = 1), (c || a) && (s = {}, s.hasFade = Boolean(c), Boolean(a) && (s.moveProp = r, s.hasMove = !0), s.speed = n.data("speed"), isNaN(s.speed) && (s.speed = d.st.block.speed), s.easing = n.data("easing"), s.easing || (s.easing = d.st.block.easing), s.css3Easing = e.rsCSS3Easing[s.easing], s.delay = n.data("delay"), isNaN(s.delay) && (s.delay = d.st.block.delay * t)), c = {}, d._e && (c[d._g + d._u1] = "0ms"), c.moveProp = i.moveProp, c.opacity = i.opacity, c.display = "none", d._r4.push({
                    block: n,
                    css: c
                }), d._v4(n, o), d._s4.push(setTimeout(function (e, t, n, i) {
                    return function () {
                        if (e.css("display", "block"), n) {
                            var o = {};
                            if (d._e) {
                                var s = "";
                                n.hasMove && (s += n.moveProp), n.hasFade && (n.hasMove && (s += ", "), s += "opacity"), o[d._g + d._t1] = s, o[d._g + d._u1] = n.speed + "ms", o[d._g + d._v1] = n.css3Easing, e.css(o), setTimeout(function () {
                                    e.css(t)
                                }, 24)
                            } else setTimeout(function () {
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
function (e) {
    e.extend(e.rsProto, {
        _w4: function () {
            var e = this;
            if (e.st.autoHeight) {
                var t, n, i, o = function (o) {
                    i = e.slides[e.currSlideId], (t = i.holder) && (n = t.height()) && void 0 !== n && (e._c4 = n, e._e || !o ? e._e1.css("height", n) : e._e1.stop(!0, !0).animate({
                        height: n
                    }, e.st.transitionSpeed))
                };
                e.ev.on("rsMaybeSizeReady.rsAutoHeight", function (e, t) {
                    i === t && o()
                }), e.ev.on("rsAfterContentSet.rsAutoHeight", function (e, t) {
                    i === t && o()
                }), e.slider.addClass("rsAutoHeight"), e.ev.one("rsAfterInit", function () {
                    setTimeout(function () {
                        o(!1), setTimeout(function () {
                            e.slider.append('<div style="clear:both; float: none;"></div>'), e._e && e._e1.css(e._g + "transition", "height " + e.st.transitionSpeed + "ms ease-in-out")
                        }, 16)
                    }, 16)
                }), e.ev.on("rsBeforeAnimStart", function () {
                    o(!0)
                }), e.ev.on("rsBeforeSizeSet", function () {
                    setTimeout(function () {
                        o(!1)
                    }, 16)
                })
            }
        }
    }), e.rsModules.autoHeight = e.rsProto._w4
}(jQuery),
function (e) {
    e.extend(e.rsProto, {
        _x4: function () {
            var t, n = this;
            n._y4 = {
                enabled: !1,
                stopAtAction: !0,
                pauseOnHover: !0,
                delay: 2e3
            }, !n.st.autoPlay && n.st.autoplay && (n.st.autoPlay = n.st.autoplay), n.st.autoPlay = e.extend({}, n._y4, n.st.autoPlay), n.st.autoPlay.enabled && (n.ev.on("rsBeforeParseNode", function (n, i, o) {
                i = e(i), (t = i.attr("data-rsDelay")) && (o.customDelay = parseInt(t, 10))
            }), n.ev.one("rsAfterInit", function () {
                n._z4()
            }), n.ev.on("rsBeforeDestroy", function () {
                n.stopAutoPlay(), n.slider.off("mouseenter mouseleave"), e(window).off("blur" + n.ns + " focus" + n.ns)
            }))
        },
        _z4: function () {
            var t = this;
            t.startAutoPlay(), t.ev.on("rsAfterContentSet", function (e, n) {
                !t._l2 && !t._r2 && t._a5 && n === t.currSlide && t._b5()
            }), t.ev.on("rsDragRelease", function () {
                t._a5 && t._c5 && (t._c5 = !1, t._b5())
            }), t.ev.on("rsAfterSlideChange", function () {
                t._a5 && t._c5 && (t._c5 = !1, t.currSlide.isLoaded && t._b5())
            }), t.ev.on("rsDragStart", function () {
                t._a5 && (t.st.autoPlay.stopAtAction ? t.stopAutoPlay() : (t._c5 = !0, t._d5()))
            }), t.ev.on("rsBeforeMove", function (e, n, i) {
                t._a5 && (i && t.st.autoPlay.stopAtAction ? t.stopAutoPlay() : (t._c5 = !0, t._d5()))
            }), t._e5 = !1, t.ev.on("rsVideoStop", function () {
                t._a5 && (t._e5 = !1, t._b5())
            }), t.ev.on("rsVideoPlay", function () {
                t._a5 && (t._c5 = !1, t._d5(), t._e5 = !0)
            }), e(window).on("blur" + t.ns, function () {
                t._a5 && (t._c5 = !0, t._d5())
            }).on("focus" + t.ns, function () {
                t._a5 && t._c5 && (t._c5 = !1, t._b5())
            }), t.st.autoPlay.pauseOnHover && (t._f5 = !1, t.slider.hover(function () {
                t._a5 && (t._c5 = !1, t._d5(), t._f5 = !0)
            }, function () {
                t._a5 && (t._f5 = !1, t._b5())
            }))
        },
        toggleAutoPlay: function () {
            this._a5 ? this.stopAutoPlay() : this.startAutoPlay()
        },
        startAutoPlay: function () {
            this._a5 = !0, this.currSlide.isLoaded && this._b5()
        },
        stopAutoPlay: function () {
            this._e5 = this._f5 = this._c5 = this._a5 = !1, this._d5()
        },
        _b5: function () {
            var e = this;
            !e._f5 && !e._e5 && (e._g5 = !0, e._h5 && clearTimeout(e._h5), e._h5 = setTimeout(function () {
                var t;
                !e._z && !e.st.loopRewind && (t = !0, e.st.loopRewind = !0), e.next(!0), t && (e.st.loopRewind = !1)
            }, e.currSlide.customDelay ? e.currSlide.customDelay : e.st.autoPlay.delay))
        },
        _d5: function () {
            !this._f5 && !this._e5 && (this._g5 = !1, this._h5 && (clearTimeout(this._h5), this._h5 = null))
        }
    }), e.rsModules.autoplay = e.rsProto._x4
}(jQuery),
function (e) {
    e.extend(e.rsProto, {
        _i5: function () {
            var t = this;
            "bullets" === t.st.controlNavigation && (t.ev.one("rsAfterPropsSetup", function () {
                t._j5 = !0, t.slider.addClass("rsWithBullets");
                for (var n = '<div class="rsNav rsBullets">', i = 0; i < t.numSlides; i++) n += '<div class="rsNavItem rsBullet"><span></span></div>';
                t._k5 = n = e(n + "</div>"), t._l5 = n.appendTo(t.slider).children(), t._k5.on("click.rs", ".rsNavItem", function () {
                    t._m5 || t.goTo(e(this).index())
                })
            }), t.ev.on("rsOnAppendSlide", function (e, n, i) {
                i >= t.numSlides ? t._k5.append('<div class="rsNavItem rsBullet"><span></span></div>') : t._l5.eq(i).before('<div class="rsNavItem rsBullet"><span></span></div>'), t._l5 = t._k5.children()
            }), t.ev.on("rsOnRemoveSlide", function (e, n) {
                var i = t._l5.eq(n);
                i && i.length && (i.remove(), t._l5 = t._k5.children())
            }), t.ev.on("rsOnUpdateNav", function () {
                var e = t.currSlideId;
                t._n5 && t._n5.removeClass("rsNavSelected"), e = t._l5.eq(e), e.addClass("rsNavSelected"), t._n5 = e
            }))
        }
    }), e.rsModules.bullets = e.rsProto._i5
}(jQuery),
function (e) {
    e.extend(e.rsProto, {
        _o5: function () {
            var t, n, i, o = this;
            if (o._p5 = {
                enabled: !1,
                change: !1,
                prefix: ""
            }, o.st.deeplinking = e.extend({}, o._p5, o.st.deeplinking), o.st.deeplinking.enabled) {
                var s = o.st.deeplinking.change,
                    r = "#" + o.st.deeplinking.prefix,
                    a = function () {
                        var e = window.location.hash;
                        return e && (e = parseInt(e.substring(r.length), 10), 0 <= e) ? e - 1 : -1
                    },
                    l = a(); - 1 !== l && (o.st.startSlideId = l), s && (e(window).on("hashchange" + o.ns, function () {
                        if (!t) {
                            var e = a();
                            0 > e || (e > o.numSlides - 1 && (e = o.numSlides - 1), o.goTo(e))
                        }
                    }), o.ev.on("rsBeforeAnimStart", function () {
                        n && clearTimeout(n), i && clearTimeout(i)
                    }), o.ev.on("rsAfterSlideChange", function () {
                        n && clearTimeout(n), i && clearTimeout(i), i = setTimeout(function () {
                            t = !0, window.location.replace(("" + window.location).split("#")[0] + r + (o.currSlideId + 1)), n = setTimeout(function () {
                                t = !1, n = null
                            }, 60)
                        }, 400)
                    })), o.ev.on("rsBeforeDestroy", function () {
                        n = i = null, s && e(window).off("hashchange" + o.ns)
                    })
            }
        }
    }), e.rsModules.deeplinking = e.rsProto._o5
}(jQuery),
function (e, t, n) {
    function i(e) {
        return e = e || location.href, "#" + e.replace(/^[^#]*#?(.*)$/, "$1")
    }
    var o, s = document,
        r = e.event.special,
        a = s.documentMode,
        l = "onhashchange" in t && (a === n || 7 < a);
    e.fn.hashchange = function (e) {
        return e ? this.bind("hashchange", e) : this.trigger("hashchange")
    }, e.fn.hashchange.delay = 50, r.hashchange = e.extend(r.hashchange, {
        setup: function () {
            return !l && void e(o.start)
        },
        teardown: function () {
            return !l && void e(o.stop)
        }
    });
    var d, c = function () {
        var n = i(),
            o = f(u);
        n !== u ? (h(u = n, o), e(t).trigger("hashchange")) : o !== u && (location.href = location.href.replace(/#.*/, "") + o), d = setTimeout(c, e.fn.hashchange.delay)
    },
        r = {},
        u = i(),
        h = a = function (e) {
            return e
        },
        f = a;
    if (r.start = function () {
        d || c()
    }, r.stop = function () {
        d && clearTimeout(d), d = n
    }, t.attachEvent && !t.addEventListener && !l) {
        var p, m;
        r.start = function () {
            p || (m = (m = e.fn.hashchange.src) && m + i(), p = e('<iframe tabindex="-1" title="empty"/>').hide().one("load", function () {
                m || h(i()), c()
            }).attr("src", m || "javascript:0").insertAfter("body")[0].contentWindow, s.onpropertychange = function () {
                try {
                    "title" === event.propertyName && (p.document.title = s.title)
                } catch (e) { }
            })
        }, r.stop = a, f = function () {
            return i(p.location.href)
        }, h = function (t, n) {
            var i = p.document,
                o = e.fn.hashchange.domain;
            t !== n && (i.title = s.title, i.open(), o && i.write('<script>document.domain="' + o + '"</script>'), i.close(), p.location.hash = t)
        }
    }
    o = r
}(jQuery, this),
function (e) {
    e.extend(e.rsProto, {
        _q5: function () {
            var t = this;
            t._r5 = {
                enabled: !1,
                keyboardNav: !0,
                buttonFS: !0,
                nativeFS: !1,
                doubleTap: !0
            }, t.st.fullscreen = e.extend({}, t._r5, t.st.fullscreen), t.st.fullscreen.enabled && t.ev.one("rsBeforeSizeSet", function () {
                t._s5()
            })
        },
        _s5: function () {
            var t = this;
            if (t._t5 = !t.st.keyboardNavEnabled && t.st.fullscreen.keyboardNav, t.st.fullscreen.nativeFS) {
                t._u5 = {
                    supportsFullScreen: !1,
                    isFullScreen: function () {
                        return !1
                    },
                    requestFullScreen: function () { },
                    cancelFullScreen: function () { },
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
                t._u5.supportsFullScreen ? (t.nativeFS = !0, t._u5.fullScreenEventName = t._u5.prefix + "fullscreenchange" + t.ns, t._u5.isFullScreen = function () {
                    switch (this.prefix) {
                        case "":
                            return document.fullScreen;
                        case "webkit":
                            return document.webkitIsFullScreen;
                        default:
                            return document[this.prefix + "FullScreen"]
                    }
                }, t._u5.requestFullScreen = function (e) {
                    return "" === this.prefix ? e.requestFullScreen() : e[this.prefix + "RequestFullScreen"]()
                }, t._u5.cancelFullScreen = function () {
                    return "" === this.prefix ? document.cancelFullScreen() : document[this.prefix + "CancelFullScreen"]()
                }) : t._u5 = !1
            }
            t.st.fullscreen.buttonFS && (t._v5 = e('<div class="rsFullscreenBtn"><div class="rsFullscreenIcn"></div></div>').appendTo(t._o1).on("click.rs", function () {
                t.isFullscreen ? t.exitFullscreen() : t.enterFullscreen()
            }))
        },
        enterFullscreen: function (t) {
            var n = this;
            if (n._u5) {
                if (!t) return n._b.on(n._u5.fullScreenEventName, function () {
                    n._u5.isFullScreen() ? n.enterFullscreen(!0) : n.exitFullscreen(!0)
                }), void n._u5.requestFullScreen(e("html")[0]);
                n._u5.requestFullScreen(e("html")[0])
            }
            if (!n._w5) {
                n._w5 = !0, n._b.on("keyup" + n.ns + "fullscreen", function (e) {
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
        exitFullscreen: function (t) {
            var n = this;
            if (n._u5) {
                if (!t) return void n._u5.cancelFullScreen(e("html")[0]);
                n._b.off(n._u5.fullScreenEventName)
            }
            if (!n._w5) {
                n._w5 = !0, n._b.off("keyup" + n.ns + "fullscreen"), n._t5 && n._b.off("keydown" + n.ns), e("html").attr("style", n._z5 || ""), e("body").attr("style", n._a6 || "");
                var i;
                for (i = 0; i < n.numSlides; i++) t = n.slides[i], t.isRendered = !1, t.bigImage && (t.isBig = !1, t.slideId = -99, t.isBigLoaded = t.isLoaded, t.isBigLoading = t.isLoading, t.bigImage = t.image, t.bigIW = t.iW, t.bigIH = t.iH, t.isLoaded = t.isMedLoaded, t.isLoading = !1, t.image = t.medImage, t.images[0] = t.medImage, t.iW = t.medIW, t.iH = t.medIH, t.isAppended = t.contentAdded = !1, n._c6(t, !0), t.bigImage !== t.medImage && (t.sizeType = "med"));
                n.isFullscreen = !1, t = e(window), t.scrollTop(n._x5), t.scrollLeft(n._y5), n._w5 = !1, n.slider.removeClass("rsFullscreen"), n.updateSliderSize(), setTimeout(function () {
                    n.updateSliderSize()
                }, 1), n.ev.trigger("rsExitFullscreen")
            }
        },
        _c6: function (t) {
            var n = t.isLoaded || t.isLoading ? '<img class="rsImg rsMainSlideImage" src="' + t.image + '"/>' : '<a class="rsImg rsMainSlideImage" href="' + t.image + '"></a>';
            t.content.hasClass("rsImg") ? t.content = e(n) : t.content.find(".rsImg").eq(0).replaceWith(n), !t.isLoaded && !t.isLoading && t.holder && t.holder.html(t.content)
        }
    }), e.rsModules.fullscreen = e.rsProto._q5
}(jQuery),
function (e) {
    e.extend(e.rsProto, {
        _d6: function () {
            var t = this;
            t.st.globalCaption && (t.ev.on("rsAfterInit", function () {
                t.globalCaption = e('<div class="rsGCaption"></div>').appendTo(t.st.globalCaptionInside ? t._e1 : t.slider), t.globalCaption.html(t.currSlide.caption)
            }), t.ev.on("rsBeforeAnimStart", function () {
                t.globalCaption.html(t.currSlide.caption)
            }))
        }
    }), e.rsModules.globalCaption = e.rsProto._d6
}(jQuery),
function (e) {
    e.extend(e.rsProto, {
        _e6: function () {
            var e = this;
            e.st.navAutoHide && !e.hasTouch && e.ev.one("rsAfterInit", function () {
                if (e._k5) {
                    e._k5.addClass("rsHidden");
                    var t = e.slider;
                    t.one("mousemove.controlnav", function () {
                        e._k5.removeClass("rsHidden")
                    }), t.hover(function () {
                        e._k5.removeClass("rsHidden")
                    }, function () {
                        e._k5.addClass("rsHidden")
                    })
                }
            })
        }
    }), e.rsModules.autoHideNav = e.rsProto._e6
}(jQuery),
function (e) {
    e.extend(e.rsProto, {
        _f6: function () {
            var t = this;
            "tabs" === t.st.controlNavigation && (t.ev.on("rsBeforeParseNode", function (t, n, i) {
                n = e(n), i.thumbnail = n.find(".rsTmb").remove(), i.thumbnail.length ? i.thumbnail = e(document.createElement("div")).append(i.thumbnail).html() : (i.thumbnail = n.attr("data-rsTmb"), i.thumbnail || (i.thumbnail = n.find(".rsImg").attr("data-rsTmb")), i.thumbnail = i.thumbnail ? '<img src="' + i.thumbnail + '"/>' : "")
            }), t.ev.one("rsAfterPropsSetup", function () {
                t._g6()
            }), t.ev.on("rsOnAppendSlide", function (e, n, i) {
                i >= t.numSlides ? t._k5.append('<div class="rsNavItem rsTab">' + n.thumbnail + "</div>") : t._l5.eq(i).before('<div class="rsNavItem rsTab">' + item.thumbnail + "</div>"), t._l5 = t._k5.children()
            }), t.ev.on("rsOnRemoveSlide", function (e, n) {
                var i = t._l5.eq(n);
                i && (i.remove(), t._l5 = t._k5.children())
            }), t.ev.on("rsOnUpdateNav", function () {
                var e = t.currSlideId;
                t._n5 && t._n5.removeClass("rsNavSelected"), e = t._l5.eq(e), e.addClass("rsNavSelected"), t._n5 = e
            }))
        },
        _g6: function () {
            var t, n = this;
            n._j5 = !0, t = '<div class="rsNav rsTabs">';
            for (var i = 0; i < n.numSlides; i++) t += '<div class="rsNavItem rsTab">' + n.slides[i].thumbnail + "</div>";
            t = e(t + "</div>"), n._k5 = t, n._l5 = t.children(".rsNavItem"), n.slider.append(t), n._k5.click(function (t) {
                t = e(t.target).closest(".rsNavItem"), t.length && n.goTo(t.index())
            })
        }
    }), e.rsModules.tabs = e.rsProto._f6
}(jQuery),
function (e) {
    e.extend(e.rsProto, {
        _h6: function () {
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
            }, t.st.thumbs = e.extend({}, t._i6, t.st.thumbs), t._j6 = !0, !1 === t.st.thumbs.firstMargin ? t.st.thumbs.firstMargin = 0 : !0 === t.st.thumbs.firstMargin && (t.st.thumbs.firstMargin = t.st.thumbs.spacing), t.ev.on("rsBeforeParseNode", function (t, n, i) {
                n = e(n), i.thumbnail = n.find(".rsTmb").remove(), i.thumbnail.length ? i.thumbnail = e(document.createElement("div")).append(i.thumbnail).html() : (i.thumbnail = n.attr("data-rsTmb"), i.thumbnail || (i.thumbnail = n.find(".rsImg").attr("data-rsTmb")), i.thumbnail = i.thumbnail ? '<img src="' + i.thumbnail + '"/>' : "")
            }), t.ev.one("rsAfterPropsSetup", function () {
                t._k6()
            }), t._n5 = null, t.ev.on("rsOnUpdateNav", function () {
                var n = e(t._l5[t.currSlideId]);
                n !== t._n5 && (t._n5 && (t._n5.removeClass("rsNavSelected"), t._n5 = null), t._l6 && t._m6(t.currSlideId), t._n5 = n.addClass("rsNavSelected"))
            }), t.ev.on("rsOnAppendSlide", function (e, n, i) {
                e = "<div" + t._n6 + ' class="rsNavItem rsThumb">' + t._o6 + n.thumbnail + "</div>", i >= t.numSlides ? t._s3.append(e) : t._l5.eq(i).before(e), t._l5 = t._s3.children(), t.updateThumbsSize()
            }), t.ev.on("rsOnRemoveSlide", function (e, n) {
                var i = t._l5.eq(n);
                i && (i.remove(), t._l5 = t._s3.children(), t.updateThumbsSize())
            }))
        },
        _k6: function () {
            var t, n, i = this,
                o = "rsThumbs",
                s = i.st.thumbs,
                r = "",
                a = s.spacing;
            i._j5 = !0, i._e3 = "vertical" !== s.orientation, i._n6 = t = a ? ' style="margin-' + (i._e3 ? "right" : "bottom") + ":" + a + 'px;"' : "", i._i3 = 0, i._p6 = !1, i._m5 = !1, i._l6 = !1, i._q6 = s.arrows && s.navigation, n = i._e3 ? "Hor" : "Ver", i.slider.addClass("rsWithThumbs rsWithThumbs" + n), r += '<div class="rsNav rsThumbs rsThumbs' + n + '"><div class="' + o + 'Container">', i._o6 = s.appendSpan ? '<span class="thumbIco"></span>' : "";
            for (var l = 0; l < i.numSlides; l++) n = i.slides[l], r += "<div" + t + ' class="rsNavItem rsThumb">' + n.thumbnail + i._o6 + "</div>";
            r = e(r + "</div></div>"), t = {}, s.paddingTop && (t[i._e3 ? "paddingTop" : "paddingLeft"] = s.paddingTop), s.paddingBottom && (t[i._e3 ? "paddingBottom" : "paddingRight"] = s.paddingBottom), r.css(t), i._s3 = e(r).find("." + o + "Container"), i._q6 && (o += "Arrow", s.arrowLeft ? i._r6 = s.arrowLeft : (i._r6 = e('<div class="' + o + " " + o + 'Left"><div class="' + o + 'Icn"></div></div>'), r.append(i._r6)), s.arrowRight ? i._s6 = s.arrowRight : (i._s6 = e('<div class="' + o + " " + o + 'Right"><div class="' + o + 'Icn"></div></div>'), r.append(i._s6)), i._r6.click(function () {
                var e = (Math.floor(i._i3 / i._t6) + i._u6) * i._t6;
                i._a4(e > i._n3 ? i._n3 : e)
            }), i._s6.click(function () {
                var e = (Math.floor(i._i3 / i._t6) - i._u6) * i._t6;
                i._a4(e < i._o3 ? i._o3 : e)
            }), s.arrowsAutoHide && !i.hasTouch && (i._r6.css("opacity", 0), i._s6.css("opacity", 0), r.one("mousemove.rsarrowshover", function () {
                i._l6 && (i._r6.css("opacity", 1), i._s6.css("opacity", 1))
            }), r.hover(function () {
                i._l6 && (i._r6.css("opacity", 1), i._s6.css("opacity", 1))
            }, function () {
                i._l6 && (i._r6.css("opacity", 0), i._s6.css("opacity", 0))
            }))), i._k5 = r, i._l5 = i._s3.children(), i.msEnabled && i.st.thumbs.navigation && i._s3.css("-ms-touch-action", i._e3 ? "pan-y" : "pan-x"), i.slider.append(r), i._w3 = !0, i._v6 = a, s.navigation && i._e && i._s3.css(i._g + "transition-property", i._g + "transform"), i._k5.on("click.rs", ".rsNavItem", function () {
                i._m5 || i.goTo(e(this).index())
            }), i.ev.off("rsBeforeSizeSet.thumbs").on("rsBeforeSizeSet.thumbs", function () {
                i._w6 = i._e3 ? i._c4 : i._b4, i.updateThumbsSize(!0)
            })
        },
        updateThumbsSize: function () {
            var e = this,
                t = e._l5.first(),
                n = {},
                i = e._l5.length;
            e._t6 = (e._e3 ? t.outerWidth() : t.outerHeight()) + e._v6, e._y3 = i * e._t6 - e._v6, n[e._e3 ? "width" : "height"] = e._y3 + e._v6, e._z3 = e._e3 ? e._k5.width() : e._k5.height(), e._o3 = -(e._y3 - e._z3) - e.st.thumbs.firstMargin, e._n3 = e.st.thumbs.firstMargin, e._u6 = Math.floor(e._z3 / e._t6), e._y3 < e._z3 ? (e.st.thumbs.autoCenter && e._q3((e._z3 - e._y3) / 2), e.st.thumbs.arrows && e._r6 && (e._r6.addClass("rsThumbsArrowDisabled"), e._s6.addClass("rsThumbsArrowDisabled")), e._l6 = !1, e._m5 = !1, e._k5.off(e._j1)) : e.st.thumbs.navigation && !e._l6 && (e._l6 = !0, !e.hasTouch && e.st.thumbs.drag || e.hasTouch && e.st.thumbs.touch) && (e._m5 = !0, e._k5.on(e._j1, function (t) {
                e._g2(t, !0)
            })), e._e && (n[e._g + "transition-duration"] = "0ms"), e._s3.css(n), e._w3 && (e.isFullscreen || e.st.thumbs.fitInViewport) && (e._e3 ? e._c4 = e._w6 - e._k5.outerHeight() : e._b4 = e._w6 - e._k5.outerWidth())
        },
        setThumbsOrientation: function (e, t) {
            this._w3 && (this.st.thumbs.orientation = e, this._k5.remove(), this.slider.removeClass("rsWithThumbsHor rsWithThumbsVer"), this._k6(), this._k5.off(this._j1), t || this.updateSliderSize(!0))
        },
        _q3: function (e) {
            this._i3 = e, this._e ? this._s3.css(this._x1, this._y1 + (this._e3 ? e + this._z1 + 0 : 0 + this._z1 + e) + this._a2) : this._s3.css(this._e3 ? this._x1 : this._w1, e)
        },
        _a4: function (t, n, i, o, s) {
            var r = this;
            if (r._l6) {
                n || (n = r.st.thumbs.transitionSpeed), r._i3 = t, r._x6 && clearTimeout(r._x6), r._p6 && (r._e || r._s3.stop(), i = !0);
                var a = {};
                r._p6 = !0, r._e ? (a[r._g + "transition-duration"] = n + "ms", a[r._g + "transition-timing-function"] = i ? e.rsCSS3Easing[r.st.easeOut] : e.rsCSS3Easing[r.st.easeInOut], r._s3.css(a), r._q3(t)) : (a[r._e3 ? r._x1 : r._w1] = t + "px", r._s3.animate(a, n, i ? "easeOutCubic" : r.st.easeInOut)), o && (r._i3 = o), r._y6(), r._x6 = setTimeout(function () {
                    r._p6 = !1, s && (r._a4(o, s, !0), s = null)
                }, n)
            }
        },
        _y6: function () {
            this._q6 && (this._i3 === this._n3 ? this._r6.addClass("rsThumbsArrowDisabled") : this._r6.removeClass("rsThumbsArrowDisabled"), this._i3 === this._o3 ? this._s6.addClass("rsThumbsArrowDisabled") : this._s6.removeClass("rsThumbsArrowDisabled"))
        },
        _m6: function (e, t) {
            var n, i = 0,
                o = e * this._t6 + 2 * this._t6 - this._v6 + this._n3,
                s = Math.floor(this._i3 / this._t6);
            this._l6 && (this._j6 && (t = !0, this._j6 = !1), o + this._i3 > this._z3 ? (e === this.numSlides - 1 && (i = 1), s = -e + this._u6 - 2 + i, n = s * this._t6 + this._z3 % this._t6 + this._v6 - this._n3) : 0 !== e ? (e - 1) * this._t6 <= -this._i3 + this._n3 && e - 1 <= this.numSlides - this._u6 && (n = (-e + 1) * this._t6 + this._n3) : n = this._n3, n !== this._i3 && (i = void 0 === n ? this._i3 : n, i > this._n3 ? this._q3(this._n3) : i < this._o3 ? this._q3(this._o3) : void 0 !== n && (t ? this._q3(n) : this._a4(n))), this._y6())
        }
    }), e.rsModules.thumbnails = e.rsProto._h6
}(jQuery),
function (e) {
    e.extend(e.rsProto, {
        _z6: function () {
            var t = this;
            t._a7 = {
                autoHideArrows: !0,
                autoHideControlNav: !1,
                autoHideBlocks: !1,
                autoHideCaption: !1,
                disableCSS3inFF: !0,
                youTubeCode: '<iframe src="http://www.youtube.com/embed/%id%?rel=1&autoplay=1&showinfo=0&autoplay=1&wmode=transparent" frameborder="no"></iframe>',
                vimeoCode: '<iframe src="http://player.vimeo.com/video/%id%?byline=0&amp;portrait=0&amp;autoplay=1" frameborder="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
            }, t.st.video = e.extend({}, t._a7, t.st.video), t.ev.on("rsBeforeSizeSet", function () {
                t._b7 && setTimeout(function () {
                    var e = t._r1,
                        e = e.hasClass("rsVideoContainer") ? e : e.find(".rsVideoContainer");
                    t._c7 && t._c7.css({
                        width: e.width(),
                        height: e.height()
                    })
                }, 32)
            });
            var n = t._a.mozilla;
            t.ev.on("rsAfterParseNode", function (i, o, s) {
                if (i = e(o), s.videoURL) {
                    t.st.video.disableCSS3inFF && n && (t._e = t._f = !1), o = e('<div class="rsVideoContainer"></div>');
                    var r = e('<div class="rsBtnCenterer"><div class="rsPlayBtn"><div class="rsPlayBtnIcon"></div></div></div>');
                    i.hasClass("rsImg") ? s.content = o.append(i).append(r) : s.content.find(".rsImg").wrap(o).after(r)
                }
            }), t.ev.on("rsAfterSlideChange", function () {
                t.stopVideo()
            })
        },
        toggleVideo: function () {
            return this._b7 ? this.stopVideo() : this.playVideo()
        },
        playVideo: function () {
            var t = this;
            if (!t._b7) {
                var n = t.currSlide;
                if (!n.videoURL) return !1;
                var i, o, s = t._d7 = n.content,
                    n = n.videoURL;
                return n.match(/youtu\.be/i) || n.match(/youtube\.com/i) ? (o = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/, (o = n.match(o)) && 11 == o[7].length && (i = o[7]), void 0 !== i && (t._c7 = t.st.video.youTubeCode.replace("%id%", i))) : n.match(/vimeo\.com/i) && (o = /(www\.)?vimeo.com\/(\d+)($|\/)/, (o = n.match(o)) && (i = o[2]), void 0 !== i && (t._c7 = t.st.video.vimeoCode.replace("%id%", i))), t.videoObj = e(t._c7), t.ev.trigger("rsOnCreateVideoElement", [n]), t.videoObj.length && (t._c7 = e('<div class="rsVideoFrameHolder"><div class="rsPreloader"></div><div class="rsCloseVideoBtn"><div class="rsCloseVideoIcn"></div></div></div>'), t._c7.find(".rsPreloader").after(t.videoObj), s = s.hasClass("rsVideoContainer") ? s : s.find(".rsVideoContainer"), t._c7.css({
                    width: s.width(),
                    height: s.height()
                }).find(".rsCloseVideoBtn").off("click.rsv").on("click.rsv", function (e) {
                    return t.stopVideo(), e.preventDefault(), e.stopPropagation(), !1
                }), s.append(t._c7), t.isIPAD && s.addClass("rsIOSVideo"), t._e7(!1), setTimeout(function () {
                    t._c7.addClass("rsVideoActive")
                }, 10), t.ev.trigger("rsVideoPlay"), t._b7 = !0), !0
            }
            return !1
        },
        stopVideo: function () {
            var e = this;
            return !!e._b7 && (e.isIPAD && e.slider.find(".rsCloseVideoBtn").remove(), e._e7(!0), setTimeout(function () {
                e.ev.trigger("rsOnDestroyVideoElement", [e.videoObj]);
                var t = e._c7.find("iframe");
                if (t.length) try {
                    t.attr("src", "")
                } catch (n) { }
                e._c7.remove(), e._c7 = null
            }, 16), e.ev.trigger("rsVideoStop"), e._b7 = !1, !0)
        },
        _e7: function (e) {
            var t = [],
                n = this.st.video;
            if (n.autoHideArrows && (this._c2 && (t.push(this._c2, this._d2), this._e2 = !e), this._v5 && t.push(this._v5)), n.autoHideControlNav && this._k5 && t.push(this._k5), n.autoHideBlocks && this.currSlide.animBlocks && t.push(this.currSlide.animBlocks), n.autoHideCaption && this.globalCaption && t.push(this.globalCaption), t.length)
                for (n = 0; n < t.length; n++) e ? t[n].removeClass("rsHidden") : t[n].addClass("rsHidden")
        }
    }), e.rsModules.video = e.rsProto._z6
}(jQuery),
function (e) {
    e.rsProto._f7 = function () {
        var t = this;
        t.st.visibleNearby && t.st.visibleNearby.enabled && (t._g7 = {
            enabled: !0,
            centerArea: .6,
            center: !0,
            breakpoint: 0,
            breakpointCenterArea: .8,
            hiddenOverflow: !0,
            navigateByCenterClick: !1
        }, t.st.visibleNearby = e.extend({}, t._g7, t.st.visibleNearby), t.ev.one("rsAfterPropsSetup", function () {
            t._h7 = t._e1.css("overflow", "visible").wrap('<div class="rsVisibleNearbyWrap"></div>').parent(), t.st.visibleNearby.hiddenOverflow || t._h7.css("overflow", "visible"), t._o1 = t.st.controlsInside ? t._h7 : t.slider
        }), t.ev.on("rsAfterSizePropSet", function () {
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
}(jQuery)