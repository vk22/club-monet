function goBack() {
    window.history.back()
}
function goBack2() {
    window.history.go(-2);return false;
}
$(document).ready(function () {
    $(".zoom").magnify(),

        // $("#phone").mask("+7 (999) 999-99-99", {
        //     autoclear: !1
        // }), 
        $(document).on("click", ".number-spinner span.chg-ctn", function (e) {
            btn = $(this), input = btn.closest(".number-spinner").find("input"), btn.closest(".number-spinner").find("button").prop("disabled", !1), "up" == btn.attr("data-dir") ? (console.log("up" + input.val() + "_" + parseInt(input.attr("max"))), void 0 == input.attr("max") || parseInt(input.val()) + 1 <= parseInt(input.attr("max")) ? input.val(parseInt(input.val()) + 1) : btn.prop("disabled", !0)) : "dwn" == btn.attr("data-dir") && (console.log("down" + input.val() + "_" + parseInt(input.attr("min"))), void 0 == input.attr("min") || parseInt(input.val()) - 1 >= parseInt(input.attr("min")) ? input.val(parseInt(input.val()) - 1) : btn.prop("disabled", !0))
        }), $(window).width() < 769
}), $(document).ready(function () {
    $(window).width() < 769 && $(".cat-filter-body").addClass("modal fade"), $(window).on("resize", function () {
        $(this).width() < 769 && $(".cat-filter-body").addClass("modal fade")
    })
}), $(function () {
    if ($(".outofstock").length > 0 ? $(".outofstock").each(function (e) {
        var t = $(this).data("id");
        console.log(t), $("#" + t).addClass("outofstock"), $("button.order-go").addClass("disabled"), $(".cart-footer-message-outofstock").addClass("visible")
    }) : ($(".go-to-order").show(), $("#msOrder").show()), $(".cart-remove").click(function () {
        $(this).closest("tr").hasClass("outofstock") && setTimeout(function () {
            location.reload()
        }, 1e3)
    }), $("#mse2_mfilter").length) {
        $(".cat-filter .nominal").hide();
        var e = mSearch2.Hash.get();
        0 == jQuery.isEmptyObject(e) ? (console.log("есть запрос"), console.log("data country: " + e["ms|made_in"]), $(".cat-filter .nominal").show(), $(".made_in input[type=checkbox]:not(:checked)").parents(".checkboxWrap").fadeOut()) : ($(".cat-filter .nominal input").prop("checked", !1), $(".cat-filter .nominal").hide(), $(".made_in input[type=checkbox]:not(:checked)").parents(".checkboxWrap").fadeIn())
    }
}), $(function () {
    if ($(".outofstockInFavs").length > 0) {

        $(".outofstockInFavs").each(function (e) {
            var t = $(this).data("id");
            console.log(t);
            $("#" + t).addClass("outofstockInFavsItem");
        })

        $('.outofstockInFavsItem .outofstockLink').each(function (e) {
            $(this).click(function (e) {
                console.log('outofstockLink');
                e.preventDefault();
            });

        })


    }

})

$(document).ready(function () {

    // miniShop2.Callbacks.add('Order.submit.before', 'restrict_payment_redirect', function() {
    //     location.reload();
    // });
    $("td.weight").hide(), $("[type='number']").keypress(function (e) {
        e.preventDefault()
    }), miniShop2.Callbacks.Cart.add.response.success = function () {
        document.location = "/basket.html"
    }, miniShop2.Callbacks.Order.submit.before = function () {
        return console.log("before"),
            $("body").addClass("overflow-h"), $("#before-load").find("i").fadeIn().end().delay(400).fadeIn("slow"), !0
    }, miniShop2.Callbacks.Order.submit.response.error = function () {
        return console.log("errrrror"), $("body").removeClass("overflow-h"), $("#before-load").fadeOut("fast"), !0
    }, miniShop2.Callbacks.Order.submit.response.success = function (response) {
        return console.log("success", response.data['msorder']),
            $("body").addClass("overflow-h"), $("#before-load").find("i").fadeIn().end().delay(400).fadeIn("slow"), !0
        // location.reload();
        // document.location.href = document.location.origin + document.location.pathname
        // + (document.location.search ? document.location.search + '&' : '?')
        // + 'msorder=' + response.data['msorder'];
    }
}), $(function () {
    $("nav#menu").mmenu({
        navbar: {
            add: !0
        }
    })
}), $(function () {
    var e = $("header.header"),
        t = e.offset(),
        n = (e.innerHeight() + $(".navbar").innerHeight() - 110, e.innerHeight());
    $(window).scroll(function () {
        $(this).scrollTop() > t.top ? (e.slideDown().addClass("header-fixed"), $("body").css("padding-top", n)) : (e.removeClass("header-fixed"), $("body").css("padding-top", "0px"))
    })
}), $(function () {
    $("nav.main-nav li").hover(function () {
        clearTimeout($.data(this, "timer"));
        var e = $(this).innerWidth() / 2,
            t = $("ul", this).innerWidth() / 2,
            n = t - e;
        $("ul", this).css("left", "0px").stop(!0, !0).slideDown(200)
    }, function () {
        $.data(this, "timer", setTimeout($.proxy(function () {
            $("ul", this).stop(!0, !0).slideUp(50)
        }, this), 50))
    })
}), jQuery(document).ready(function (e) {
    e(".to-new").click(function () {
        return e("body,html").animate({
            scrollTop: 470
        }, 800), !1
    })
}), $(function () {
    $("#slider-range1").slider({
        range: !0,
        min: 0,
        max: 500,
        values: [0, 500],
        slide: function (e, t) {
            $("#amount1_0").val(t.values[0]), $("#amount1_1").val(t.values[1])
        }
    }), $("#amount1_0").val($("#slider-range1").slider("values", 0)), $("#amount1_1").val($("#slider-range1").slider("values", 1))
}), $(function () {
    $("#slider-range2").slider({
        range: !0,
        min: 0,
        max: 500,
        values: [0, 500],
        slide: function (e, t) {
            $("#amount2_0").val(t.values[0]), $("#amount2_1").val(t.values[1])
        }
    }), $("#amount2_0").val($("#slider-range2").slider("values", 0)), $("#amount2_1").val($("#slider-range2").slider("values", 1))
}), $(function () {
    $("#tabs a").click(function (e) {
        e.preventDefault(), $(this).tab("show")
    }), $(".popover-open").popover()
}), $(function () {
    $(".search-toggle .glyphicon-search").click(function () {
        $(".search-toggle").removeClass("open").addClass("closed"), $(".search-header").removeClass("closed").addClass("open")
    }), $(".search-toggle .glyphicon-remove").click(function () {
        $(".search-toggle").removeClass("closed").addClass("open"), $(".search-header").removeClass("open").addClass("closed")
    })
}), $(function () {
    var e = $(".search-header input").val();
    $("#searched-value").html(e), "" == $(".founded").text() && $(".search-results").text("Результатов по запросу не найдено")
}), $(".go-to-order").click(function () {
    return $("body,html").animate({
        scrollTop: $("#msOrder").offset().top - 350
    }, 1e3), !1
});

////

(function () {
    function logElementEvent(eventName, element) {
        console.log(Date.now(), eventName, element.getAttribute("data-src"));
    }

    var callback_enter = function (element) {
        logElementEvent("🔑 ENTERED", element);
    };
    var callback_exit = function (element) {
        logElementEvent("🚪 EXITED", element);
    };
    var callback_loading = function (element) {
        logElementEvent("⌚ LOADING", element);
    };
    var callback_loaded = function (element) {
        logElementEvent("👍 LOADED", element);
    };
    var callback_error = function (element) {
        logElementEvent("💀 ERROR", element);
        element.src = "/assets/monety/img/logo-s.svg";
    };
    var callback_finish = function () {
        logElementEvent("✔️ FINISHED", document.documentElement);
    };
    var callback_cancel = function (element) {
        logElementEvent("🔥 CANCEL", element);
    };

    var ll = new LazyLoad({
        class_applied: "lz-applied",
        class_loading: "lz-loading",
        class_loaded: "lz-loaded",
        class_error: "lz-error",
        class_entered: "lz-entered",
        class_exited: "lz-exited",
        // Assign the callbacks defined above
        callback_enter: callback_enter,
        callback_exit: callback_exit,
        callback_cancel: callback_cancel,
        callback_loading: callback_loading,
        callback_loaded: callback_loaded,
        callback_error: callback_error,
        callback_finish: callback_finish
    });
})();

$(document).on('mse2_load', function (e, data) {
    console.log(e, data);
    $(".item-prev-img img").each(function() {
        console.log($(this).html());
        let src = $(this).attr("data-src") 
        $(this).attr("src", src).addClass('lz-entered')
    });
   
});