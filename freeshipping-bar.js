function hextom_fsb() {
    var shop_currency='', e, a, t, i, o, r, n, s, d, c = "//b0aacfb3.ngrok.io/", l = "", p = ["CLP", "HRK", "SEK", "ISK", "NOK", "CZK", "DKK", "EUR", "RON", "TRY"], h = {
        DZD: "DA",
        NAD: "N$",
        GHS: "GH¢",
        EGP: "E£",
        BGN: "лв",
        PAB: "B/.",
        PHP: "₱",
        BOB: "$b",
        DKK: "kr",
        BWP: "P",
        LBP: "£",
        TZS: "TZS",
        VND: "₫",
        AOA: "Kz",
        KHR: "៛",
        QAR: "﷼",
        KYD: "$",
        LYD: "LYD",
        UAH: "₴",
        JOD: "JOD",
        AWG: "ƒ",
        SAR: "﷼",
        HKD: "HK$",
        CHF: "CHF",
        GIP: "£",
        CDF: "CDF",
        BYN: "Br",
        MRO: "MRO",
        HRK: "kn",
        DJF: "DJF",
        THB: "฿",
        XAF: "XAF",
        BND: "$",
        VUV: "VUV",
        UYU: "$U",
        NIO: "C$",
        LAK: "₭",
        SYP: "£",
        MAD: "Dh",
        MZN: "MT",
        SCR: "₨",
        ZAR: "R",
        NPR: "₨",
        NGN: "₦",
        CRC: "₡",
        AED: "Dhs.",
        GBP: "£",
        MWK: "MWK",
        LKR: "₨",
        PKR: "₨",
        HUF: "Ft",
        BMD: "$",
        LSL: "LSL",
        MNT: "₮",
        AMD: "AMD",
        UGX: "Ush",
        JMD: "J$",
        GEL: "GEL",
        SHP: "£",
        AFN: "BS؋",
        SBD: "$",
        KPW: "₩",
        TRY: "TRY",
        BDT: "Tk",
        YER: "﷼",
        CNY: "¥",
        HTG: "G",
        SLL: "Le",
        MGA: "Ar",
        ANG: "ƒ",
        LRD: "$",
        XCD: "EC$",
        NOK: "kr",
        MOP: "MOP",
        INR: "Rs.",
        MXN: "$",
        CZK: "Kč",
        TJS: "TJS",
        TWD: "NT$",
        BTN: "Nu",
        COP: "$",
        MYR: "RM",
        TMT: "TMT",
        MUR: "₨",
        IDR: "Rp",
        HNL: "L",
        ETB: "Br",
        FJD: "FJ$",
        ISK: "kr",
        PEN: "S/.",
        BZD: "BZ$",
        ILS: "₪",
        DOP: "RD$",
        GGP: "GGP",
        MDL: "MDL",
        BSD: "$",
        SEK: "kr",
        MVR: "Rf",
        AUD: "$",
        SRD: "$",
        CUP: "₱",
        BBD: "$",
        KMF: "KMF",
        KRW: "₩",
        GMD: "D",
        VEF: "Bs",
        IMP: "IMP",
        CUC: "$",
        CLP: "$",
        ZMW: "ZK",
        EUR: "€",
        ALL: "Lek",
        RWF: "RWF",
        KZT: "лв",
        RUB: "руб",
        TTD: "TT$",
        RON: "lei",
        OMR: "﷼",
        BRL: "R$",
        MMK: "K",
        PLN: "zł",
        PYG: "Gs",
        KES: "Khs",
        SVC: "$",
        MKD: "ден",
        AZN: "ман",
        TOP: "T$",
        JEP: "JEP",
        GNF: "GNF",
        WST: "WS$",
        IQD: "IQD",
        ERN: "£",
        BAM: "KM",
        CAD: "$",
        CVE: "CVE",
        KWD: "KWD",
        BIF: "BIF",
        PGK: "K",
        SOS: "S",
        SGD: "$",
        UZS: "лв",
        STD: "Db",
        IRR: "﷼",
        XPF: "XPF",
        XOF: "XOF",
        TND: "TND",
        GYD: "$",
        NZD: "$",
        FKP: "£",
        USD: "$",
        KGS: "лв",
        ARS: "$",
        SZL: "SZL",
        GTQ: "Q",
        RSD: "Дин.",
        BHD: "BHD",
        JPY: "¥",
        SDG: "SDG"
    };
    if ("undefined" == typeof jQuery) {
        var _ = document.getElementsByTagName("head")[0]
          , b = document.createElement("script");
        b.type = "text/javascript",
        b.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js",
        b.onload = u,
        _.appendChild(b)
    } else
        setTimeout(u, 100);
    function u() {
        if (
        e = 0,
        a = -1,
        t = [],
        i = !1,
        o = "Serif,Helvetica,Verdana,Courier",
        r = "",
        n = !1,
        s = 0,
        d = window.location.hostname,
        c = window.location.pathname,
        -1 === d.indexOf("checkout.shopify.com") && (-1 === c.indexOf("checkout") || -1 === c.indexOf("thank_you"))) {
            
            var d, c, l, p, h = window.location.pathname, _ = w("fsb_previous_pathname");
            k("fsb_previous_pathname", window.location.pathname),
            h == _ || null == _ ? (h == _ && -1 === _.indexOf("/cart") && x("fsb_close_clicked"),
            f()) : (l = function(e) {
                try {
                    return sessionStorage.getItem(e)
                } catch (e) {
                    return null
                }
            }("fsb_payload"),
            (p = JSON.parse(l)) ? "yes" == p.shop_active && (t = p.bars,
            i = p.record,
            y(),
            jQuery(document).ajaxSuccess(function(e, a, t) {
                -1 === t.url.indexOf("/cart/add.js") && -1 === t.url.indexOf("/cart/change.js") && "/cart.js" !== t.url && "/cart/update.js" !== t.url || y()
            })) : f())
        }
    }
    function f() {
        jQuery.ajax({
            url: c + "fsb_get_bar/" + v(),
            method: "POST",
            dataType: "json",
            success: function(e) {
                !function(e, a) {
                    try {
                        sessionStorage.setItem(e, a)
                    } catch (e) {
                        return
                    }
                }("fsb_payload", JSON.stringify(e)),
                "yes" == e.shop_active && (t = e.bars,
                i = e.record,
                y(),
                jQuery(document).ajaxSuccess(function(e, a, t) {
                    -1 === t.url.indexOf("/cart/add.js") && -1 === t.url.indexOf("/cart/change.js") && "/cart.js" !== t.url && "/cart/update.js" !== t.url || y()
                }))
            }
        })
    }
    function y() {
        jQuery.ajax({
            dataType: "json",
            url: "/cart.json",
            success: function(i, d) {
                e = i.total_price,
                function() {
                    if ("yes" === w("fsb_close_clicked"))
                        return;
                    if (!n)
                        for (var e = 0; e < t.length; e++)
                            t[e].score = m(t[e]),
                            t[e].score > s && (s = t[e].score);
                    if (0 == s)
                        return;
                    for (var e = 0; e < t.length; e++)
                        if (!(m(t[e]) < s)) {
                            a = e;
                            break
                        }
                    !function() {
                        if (o.indexOf(t[a].font) > -1)
                            g();
                        else if (r.indexOf(t[a].font) > -1)
                            g();
                        else {
                            r += "," + t[a].font;
                            var e = document.createElement("link")
                              , i = document.getElementsByTagName("head")[0];
                            e.setAttribute("href", "https://fonts.googleapis.com/css?family=" + t[a].font.replace(/ /g, "+")),
                            e.setAttribute("type", "text/css"),
                            e.setAttribute("rel", "stylesheet"),
                            e.onload = g,
                            i.insertBefore(e, i.firstChild)
                        }
                    }()
                }()
            }
        })
    }
    function m(e) {
        var a = 1;
        if ("all" != e.target_device) {
            if ("desktop" == e.target_device && j())
                return 0;
            if ("mobile" == e.target_device && !j())
                return 0
        }
        if (e.schedule_enabled) {
            var t = Date.parse(e.start_on)
              , i = Date.parse(e.end_on)
              , o = Date.now();
            if (o > i)
                return 0;
            if (o < t)
                return 0;
            a += 1e3
        }
        if ("" != e.countries && (a += 100),
        "all" != e.display_page) {
            var r = window.location.pathname
              , n = window.location.href;
            if ("home" == e.display_page && "/" != r)
                return 0;
            if ("/" == e.display_page.charAt(0) && e.display_page != r)
                return 0;
            if (":" == e.display_page.charAt(0)) {
                for (var s = e.display_page.substring(1, e.display_page.length).split(","), d = !1, c = 0; c < s.length; ) {
                    if (n.indexOf(s[c].trim()) > -1) {
                        d = !0;
                        break
                    }
                    c += 1
                }
                if (!0 !== d)
                    return 0;
                a += 10
            } else
                a += 10
        }
        if (e.exclude_page) {
            r = window.location.pathname,
            n = window.location.href;
            if ("home" === e.exclude_page && "/" === r)
                return 0;
            if ("/" === e.exclude_page.charAt(0) && e.exclude_page === r)
                return 0;
            if (":" == e.exclude_page.charAt(0)) {
                for (s = e.exclude_page.substring(1, e.exclude_page.length).split(","),
                d = !1,
                c = 0; c < s.length; ) {
                    if (n.indexOf(s[c].trim()) > -1) {
                        d = !0;
                        break
                    }
                    c += 1
                }
                if (!0 === d)
                    return 0;
                a += 10
            } else
                a += 10
        }
        return a
    }
    function g() {
        var o, r, n, s, _, b = window.Shopify.currency.rate, u = window.Shopify.currency.active, f = t[a].goal, y = t[a].goal_2, m = window.location.search, g = m.toLocaleLowerCase().indexOf("currency="), j = g + "currency=".length, D = (s = window.location.pathname.split("/"),
        null === (_ = (s = s.splice(1, s.length))[0].match(/^[a-zA-Z]{2}$/) || s[0].match(/^[a-zA-Z]{2}-[a-zA-Z]{2}$/)) ? null : _[0]);
        if (null !== D && t[a].locales.indexOf(D) > -1) {
            if (null != t[a].translation[D].message_one && t[a].translation[D].message_one.trim().length > 0 && null != t[a].translation[D].message_one)
                var S = t[a].translation[D].message_one;
            else
                S = t[a].message_one;
            if (null != t[a].translation[D].message_two && t[a].translation[D].message_two.trim().length > 0 && null != t[a].translation[D].message_two)
                var T = t[a].translation[D].message_two;
            else
                T = t[a].message_two;
            if (null != t[a].translation[D].message_two_2 && t[a].translation[D].message_two_2.trim().length > 0 && null != t[a].translation[D].message_two_2)
                var B = t[a].translation[D].message_two_2;
            else
                B = t[a].message_two_2;
            if (null != t[a].translation[D].message_three && t[a].translation[D].message_three.trim().length > 0 && null != t[a].translation[D].message_three)
                var A = t[a].translation[D].message_three;
            else
                A = t[a].message_three
        } else
            S = t[a].message_one,
            T = t[a].message_two,
            B = t[a].message_two_2,
            A = t[a].message_three;
        g > -1 && (o = (o = m.substr(j, j + 3)).toUpperCase());
        var M = function() {
            for (var e = ["form#currency_form", "form.shopify-currency-form", "input#CurrencySelector", "form.currency-selector__form", "li.account.currencies", ".nav__sub-wrap--currency", "form.currency-selector", ".switcher.switcher--native"], a = 1; a < e.length; a++)
                if (document.querySelector(e[a]))
                    return !0;
            return !1
        }();
        t[a].auto_currency ? "1.0" !== b || M || o ? (r = e / 100,
        f *= b,
        y *= b,
        n = h[window.Shopify.currency.active]) : (r = e * t[a].currency_exchange_rate / 100,
        f *= t[a].currency_exchange_rate,
        y *= t[a].currency_exchange_rate,
        n = t[a].currency_symbol) : t[a].currency_code === u ? (r = e / 100,
        n = t[a].currency_symbol) : (r = e / b * t[a].currency_exchange_rate / 100,
        n = t[a].currency_symbol);
        var N = f - r
          , R = y - r;
        f = f == parseInt(f, 10) ? parseInt(f, 10) : parseFloat(f).toFixed(2),
        y = y == parseInt(y, 10) ? parseInt(y, 10) : parseFloat(y).toFixed(2),
        N = N == parseInt(N, 10) ? parseInt(N, 10) : parseFloat(N).toFixed(2),
        R = R == parseInt(R, 10) ? parseInt(R, 10) : parseFloat(R).toFixed(2);
        var z = "<span id='fsb_symbol' style='color:" + t[a].text_color_two + "'>" + n + "</span>"
          , O = "<span id='fsb_amount' style='color:" + t[a].text_color_two + "'>" + f + "</span>"
          , F = "<span id='fsb_amount' style='color:" + t[a].text_color_two + "'>" + N + "</span>"
          , K = "<span id='fsb_amount' style='color:" + t[a].text_color_two + "'>" + R + "</span>";
        w("fsb_total_price_" + t[a].bar_id) != r && (k("fsb_total_price_" + t[a].bar_id, r),
        x("fsb_message_one_" + t[a].bar_id),
        x("fsb_message_two_" + t[a].bar_id),
        x("fsb_message_two2_" + t[a].bar_id),
        x("fsb_message_three_" + t[a].bar_id));
        var P = "";
        if (0 === r) {
            if ("yes" === w("fsb_message_one_" + t[a].bar_id))
                return;
            k("fsb_message_one_" + t[a].bar_id, "yes", t[a].interval_time + .1),
            P = S
        } else if (r < f) {
            if ("yes" === w("fsb_message_two_" + t[a].bar_id))
                return;
            k("fsb_message_two_" + t[a].bar_id, "yes", t[a].interval_time + .1),
            P = T
        } else if (y > 0 && r >= f && r < y) {
            if ("yes" === w("fsb_message_two2_" + t[a].bar_id))
                return;
            k("fsb_message_two2_" + t[a].bar_id, "yes", t[a].interval_time + .1),
            P = B
        } else {
            if ("yes" === w("fsb_message_three_" + t[a].bar_id))
                return;
            k("fsb_message_three_" + t[a].bar_id, "yes", t[a].interval_time + .1),
            i && f > 0 && "yes" != w("fsb_achieved_" + t[a].bar_id) && jQuery.ajax({
                url: c + "fsb_record_bar?shop=" + v() + "&bar_id=" + t[a].bar_id + "&event=achieve",
                method: "GET",
                dataType: "json",
                success: function(e) {
                    k("fsb_achieved_" + t[a].bar_id, "yes")
                }
            }),
            P = A
        }
        p.indexOf(t[a].visitor_currency_code) > -1 && P.indexOf("{{goal}}") > -1 ? P = P.replace(/({{currency_symbol}}|{{goal}})/g, function(e) {
            return "{{currency_symbol}}" === e ? "{{goal}}" : " {{currency_symbol}}"
        }) : p.indexOf(t[a].visitor_currency_code) > -1 && P.indexOf("{{remainder}}") > -1 ? P = P.replace(/({{currency_symbol}}|{{remainder}})/g, function(e) {
            return "{{currency_symbol}}" === e ? "{{remainder}}" : " {{currency_symbol}}"
        }) : p.indexOf(t[a].visitor_currency_code) > -1 && P.indexOf("{{remainder_2}}") > -1 && (P = P.replace(/({{currency_symbol}}|{{remainder_2}})/g, function(e) {
            return "{{currency_symbol}}" === e ? "{{remainder_2}}" : " {{currency_symbol}}"
        })),
        P = (P = (P = (P = (P = (P = P.replace("{{currency_symbol}}", z)).replace("{{goal}}", O)).replace("{{remainder}}", F)).replace("{{remainder_2}}", K)).replace(/{{/g, "<span style='color:" + t[a].text_color_two + "'>")).replace(/}}/g, "</span>");
        var C = window.innerWidth || document.body.clientWidth;
        if (0 == jQuery("#fsb_container").length) {
            var $ = '<div id="fsb_container"></div>';
            if ("top_push_v1" === t[a].position) {
                var G = ['.header-container.drawer__header-container .header-wrapper:not([data-section-id="header"]):not(.wrapper-fluid)', ".fadeout-overlay + #shopify-section-header", "#shopify-section-header.header-wrapper", ".site-header.is-moved-by-drawer", ".site-header__wrapper", ".site-header.full--w", ".PageContainer #shopify-section-announcement", "nav.cbp-spmenu + .wrapper-container", "#PageContainer:not(.page-container)", ".header-wrapper.header-wrapper--sticky", 'div[data-section-type="header-section"] .header-wrapper.header-wrapper--overlay', ".page__container.page__container--secondary", "#shopify-section-static-header .header", ".off-canvas--viewport .off-canvas--main-content", "#shopify-section-announcement .announcement--root", ".header.sticky .relative", 'body[class^="kagami--"] .page__container', "body > #page", "#page-wrap-content .container + #content", "#shopify-section-side-nav + .page-container", "#pageheader.pageheader.nav-shift", ".bodywrap.cf #shopify-section-header + #content", ".header.mm-fixed-top", ".has-vertical-header .is-beside-vertical-header", "#shopify-section-announcement-bar", ".header-container.drawer__header-container", "#shopify-section-header", "#shopify-section-side-nav + .page-container", "body.boxed", 'body[class*="maxmin_"]', ".page-wrapper", "#content-holder #content", "#shopify-section-static-header + .page-body-content", ".header_wrap_icon_cart header.main_header.locked", "#header-sticky-wrapper #header", '#shopify-section-header-classic div[data-enable_sticky="false"] #header', "#mobile-header-sticky-wrapper #mobile-header", "body", '[data-section-id="header"]'];
                C < 500 && G.unshift(".page__container #header.header.header--absolute + #main.main"),
                C < 650 && G.unshift("#SiteContainer #MainContent.main-content"),
                C < 740 && G.unshift("body.shifter-enabled .shifter-page.is-moved-by-drawer > #content", "main#panel.slideout-panel .page-wrap .content-wrapper"),
                C < 798 && G.unshift("body.mobile_nav-fixed--true #header.mobile_nav-fixed--true", 'div[data-enable_sticky="false"] #mobile-header'),
                C < 1e3 && G.unshift(".bodywrap.cf #shopify-section-header"),
                C > 767 && G.unshift("#page-wrap #page-wrap-content");
                for (var L = 0; L < G.length; L++) {
                    var I = jQuery(G[L]);
                    if (I.length)
                        break
                }
                I.prepend($)
            } else if ("top_push_sticky_v1" === t[a].position) {
                var E = ['.header-container.drawer__header-container .header-wrapper:not([data-section-id="header"])', ".fadeout-overlay + #shopify-section-header", "#shopify-section-header.header-wrapper", ".site-header.is-moved-by-drawer", ".site-header.full--w", 'div[data-section-type="header-section"] .header-wrapper.header-wrapper--sticky', 'div[data-section-type="header-section"] .header-wrapper.header-wrapper--overlay', "nav.cbp-spmenu + .wrapper-container", "#PageContainer:not(.drawer-page-content)", 'body[class^="trademark--"]', "header#top.header.header--fluid", "#shopify-section-static-header .header", ".off-canvas--viewport .off-canvas--main-content", "#shopify-section-announcement .announcement--root", ".header.sticky .relative", 'body[class^="kagami--"] .page__container', "body > #page", "#page-wrap", "#shopify-section-side-nav + .page-container", "#pageheader.pageheader.nav-shift", ".header.default-header.mm-fixed-top", "#main-body.slideout-panel", "#PageContainer.drawer-page-content:not(.page-container)", "body.fixed-header.fixed-header--all", "body.has-vertical-header.announcement-bar--hidden", "#shopify-section-announcement-bar", "#shopify-section-header:not(.d-none)", ".header_wrap_icon_cart header.main_header.locked", "#header-sticky-wrapper #header", "#mobile-header-sticky-wrapper #mobile-header", "body"];
                C < 800 && E.unshift(".mm-page.mm-slideout #shopify-section-header"),
                C <= 740 && E.unshift("body.gridlock.shifter.shifter-enabled"),
                C < 798 && E.unshift('div[data-enable_sticky="false"] #mobile-header'),
                C < 992 && E.unshift("#site-content #shopify-section-header-mobile.header-mobile__placeholder");
                for (var H = 0; H < E.length; H++) {
                    var U = jQuery(E[H]);
                    if (U.length)
                        break
                }
                U.prepend($)
            } else
                jQuery("body").append($)
        }
        var Z = "";
        Z = "top_push_v1" === t[a].position || "top_push_sticky_v1" === t[a].position ? !0 === t[a].entire_bar_clickable ? !0 === t[a].close_option ? '<div id="fsb_background" onclick="fsb_button_on_click_v1(event)" style="opacity: 0; margin: 0; padding: 0; left: 0; height: auto; width: 100%; z-index: 1000000; position: relative; cursor: pointer;"><div id="fsb_bar" style="text-align: center; margin: 0; padding: 10px; left: 0; height: auto; width: 100%; box-sizing: border-box; border: none;">' + P + '</div><div><a id="fsb_close" style="position:absolute; right:8px; top:50%; transform:translateY(-50%); font-family:Helvetica, Arial, sans-serif; font-weight:bold; font-size:18px; text-decoration: none;" href="#" onclick="fsb_close_on_click_v1(event)">X</a></div></div>' : '<div id="fsb_background" onclick="fsb_button_on_click_v1(event)" style="opacity: 0; margin: 0; padding: 0; left: 0; height: auto; width: 100%; z-index: 1000000; position: relative; cursor: pointer;"><div id="fsb_bar" style="text-align: center; margin: 0; padding: 10px; left: 0; height: auto; width: 100%; box-sizing: border-box; border: none;">' + P + "</div></div>" : !0 === t[a].close_option ? '<div id="fsb_background" style="opacity: 0; margin: 0; padding: 0; left: 0; height: auto; width: 100%; z-index: 1000000; position: relative;"><div id="fsb_bar" style="text-align: center; margin: 0; padding: 10px; left: 0; height: auto; width: 100%; box-sizing: border-box; border: none;">' + P + '</div><div><a id="fsb_close" style="position:absolute; right:8px; top:50%; transform:translateY(-50%); font-family:Helvetica, Arial, sans-serif; font-weight:bold; font-size:18px; text-decoration: none;" href="#" onclick="fsb_close_on_click_v1(event)">X</a></div></div>' : '<div id="fsb_background" style="opacity: 0; margin: 0; padding: 0; left: 0; height: auto; width: 100%; z-index: 1000000; position: relative;"><div id="fsb_bar" style="text-align: center; margin: 0; padding: 10px; left: 0; height: auto; width: 100%; box-sizing: border-box; border: none;">' + P + "</div></div>" : !0 === t[a].entire_bar_clickable ? !0 === t[a].close_option ? '<a href="javascript:fsb_button_on_click()"><div id="fsb_background" style="opacity: 0; margin: 0px; padding: 0px; left: 0px; height: auto; width: 100%; z-index: 100000;"><div id="fsb_bar" style="text-align: center; margin: 0px; padding: 10px; left: 0px; height: auto; width: 100%; box-sizing: border-box; border: none; position:absolute;">' + P + '</div><div><a id="fsb_close" style="position:absolute; right:8px; top:50%; transform:translateY(-50%); font-family:Helvetica, Arial, sans-serif; font-weight:bold; font-size:18px; text-decoration: none;" href="javascript:fsb_close_on_click()">X</a></div></div></a>' : '<a href="javascript:fsb_button_on_click()"><div id="fsb_background" style="opacity: 0; margin: 0px; padding: 0px; left: 0px; height: auto; width: 100%; z-index: 100000;"><div id="fsb_bar" style="text-align: center; margin: 0px; padding: 10px; left: 0px; height: auto; width: 100%; box-sizing: border-box; border: none; position:absolute;">' + P + "</div></div></a>" : !0 === t[a].close_option ? '<div id="fsb_background" style="opacity: 0; margin: 0px; padding: 0px; left: 0px; height: auto; width: 100%; z-index: 100000;"><div id="fsb_bar" style="text-align: center; margin: 0px; padding: 10px; left: 0px; height: auto; width: 100%; box-sizing: border-box; border: none; position:absolute;">' + P + '</div><div><a id="fsb_close" style="position:absolute; right:8px; top:50%; transform:translateY(-50%); font-family:Helvetica, Arial, sans-serif; font-weight:bold; font-size:18px; text-decoration: none;" href="javascript:fsb_close_on_click()">X</a></div></div>' : '<div id="fsb_background" style="opacity: 0; margin: 0px; padding: 0px; left: 0px; height: auto; width: 100%; z-index: 100000;"><div id="fsb_bar" style="text-align: center; margin: 0px; padding: 10px; left: 0px; height: auto; width: 100%; box-sizing: border-box; border: none; position:absolute;">' + P + "</div></div>",
        jQuery("#fsb_placeholder").length > 0 && jQuery("#fsb_placeholder").html(""),
        jQuery("#fsb_container").html(""),
        jQuery("#fsb_container").css("display", "block"),
        jQuery("#fsb_container").css("color", "inherit"),
        jQuery("#fsb_placeholder").length > 0 && ("inserted" === t[a].position || "inserted_sticky" === t[a].position) ? jQuery("#fsb_placeholder").html(Z) : jQuery("#fsb_container").html(Z);
        var Y = window.innerWidth > 0 ? window.innerWidth : screen.width
          , W = parseFloat(t[a].font_size)
          , J = parseFloat(t[a].bar_padding);
        "all" == t[a].target_device && (Y <= 736 && W > 14 ? (J = 14 * J / W,
        W = 14,
        J > 8 && (J = 8)) : Y > 736 && Y <= 770 && W > 16 && (J = 16 * J / W,
        W = 16,
        J > 10 && (J = 10)));
        var X = t[a].background_color
          , q = "rgba(" + parseInt(X.slice(-6, -4), 16) + "," + parseInt(X.slice(-4, -2), 16) + "," + parseInt(X.slice(-2), 16) + "," + t[a].opacity + ")";
        jQuery("#fsb_bar").css("backgroundColor", q),
        jQuery("#fsb_bar").css("color", t[a].text_color_one),
        jQuery("#fsb_bar").css("fontSize", W + "px"),
        jQuery("#fsb_bar").css("lineHeight", 1.25 * W + "px"),
        jQuery("#fsb_bar").css("paddingTop", J + "px"),
        jQuery("#fsb_bar").css("paddingBottom", J + "px"),
        jQuery("#fsb_bar").css("fontFamily", t[a].font),
        jQuery("#fsb_close").css("color", t[a].text_color_one),
        W < 18 && jQuery("#fsb_close").css("fontSize", W + "px"),
        t[a].background_pic && jQuery("#fsb_background").css("backgroundImage", "url(" + l + t[a].background_pic + ")"),
        jQuery("#fsb_symbol").css("fontFamily", t[a].font),
        jQuery("#fsb_amount").css("fontFamily", t[a].font),
        jQuery("#fsb_symbol").css("fontSize", W + "px"),
        jQuery("#fsb_amount").css("fontSize", W + "px"),
        0 == jQuery("#fsb_custom_code").length && jQuery("body").append('<div id="fsb_custom_code"></div>'),
        jQuery("#fsb_custom_code").html(t[a].custom_code);
        var V = jQuery("#fsb_bar").outerHeight(!0);
        if (jQuery("#fsb_placeholder").length > 0 && "inserted" === t[a].position ? (jQuery("#fsb_background").css("position", "relative"),
        jQuery("#fsb_background").css("height", V),
        jQuery("#fsb_background").animate({
            opacity: 1
        }, 1e3 * t[a].animation_time, "linear")) : jQuery("#fsb_placeholder").length > 0 && "inserted_sticky" === t[a].position ? (jQuery("#fsb_background").css("position", "fixed"),
        jQuery("#fsb_placeholder").css("paddingBottom", V),
        jQuery("#fsb_background").css("height", V),
        jQuery("#fsb_background").animate({
            opacity: 1
        }, 1e3 * t[a].animation_time, "linear")) : "top_push" === t[a].position ? (jQuery("#fsb_background").css("top", 0),
        jQuery("#fsb_background").css("position", "absolute"),
        jQuery("#fsb_background").css("height", V),
        jQuery("body").css("paddingTop", V),
        jQuery("#fsb_background").animate({
            opacity: 1
        }, 1e3 * t[a].animation_time, "linear")) : "top_push_sticky" === t[a].position ? (jQuery("#fsb_background").css("top", 0),
        jQuery("#fsb_background").css("position", "fixed"),
        jQuery("#fsb_background").css("height", V),
        jQuery("body").css("paddingTop", V),
        jQuery("#fsb_background").animate({
            opacity: 1
        }, 1e3 * t[a].animation_time, "linear")) : "top_push_v1" === t[a].position ? jQuery("#fsb_background").animate({
            opacity: 1
        }, 1e3 * t[a].animation_time, "linear") : "top_push_sticky_v1" === t[a].position ? (jQuery("#fsb_background").css("top", 0),
        jQuery("#fsb_background").css("position", "fixed"),
        jQuery("#fsb_container").css("height", V),
        jQuery("#fsb_background").animate({
            opacity: 1
        }, 1e3 * t[a].animation_time, "linear")) : "top_cover" === t[a].position ? (jQuery("#fsb_background").css("top", 0),
        jQuery("#fsb_background").css("position", "fixed"),
        jQuery("#fsb_background").css("height", V),
        jQuery("#fsb_background").animate({
            opacity: 1
        }, 1e3 * t[a].animation_time, "linear")) : "top_cover_nonsticky" === t[a].position ? (jQuery("#fsb_background").css("top", 0),
        jQuery("#fsb_background").css("position", "absolute"),
        jQuery("#fsb_background").css("height", V),
        jQuery("#fsb_background").animate({
            opacity: 1
        }, 1e3 * t[a].animation_time, "linear")) : "bottom_cover" === t[a].position && (jQuery("#fsb_background").css("bottom", 0),
        jQuery("#fsb_background").css("position", "fixed"),
        jQuery("#fsb_background").css("height", V),
        jQuery("body").css("paddingBottom", V),
        jQuery("#fsb_background").animate({
            opacity: 1
        }, 1e3 * t[a].animation_time, "linear")),
        t[a].show_time > 0 && (clearTimeout(d),
        d = setTimeout(function() {
            jQuery("#fsb_background").animate({
                opacity: 0
            }, 1e3 * t[a].animation_time, "linear"),
            jQuery("#fsb_background").animate({
                height: "0px"
            }, 1e3 * t[a].animation_time, "linear"),
            jQuery("#fsb_placeholder").length > 0 && "inserted" === t[a].position ? jQuery("#fsb_placeholder").css("paddingBottom", 0) : jQuery("#fsb_placeholder").length > 0 && "inserted_sticky" === t[a].position ? jQuery("#fsb_placeholder").css("paddingBottom", 0) : "top_push" === t[a].position ? (jQuery("body").css("paddingTop", 0),
            jQuery("#fsb_container").css("display", "none")) : "top_push_sticky" === t[a].position ? (jQuery("body").css("paddingTop", 0),
            jQuery("#fsb_container").css("display", "none")) : "top_push_v1" === t[a].position ? jQuery("#fsb_container").css("display", "none") : "top_push_sticky_v1" === t[a].position ? jQuery("#fsb_container").css("display", "none") : "top_cover" === t[a].position ? jQuery("#fsb_container").css("display", "none") : "top_cover_nonsticky" === t[a].position ? jQuery("#fsb_container").css("display", "none") : "bottom_cover" === t[a].position && jQuery("body").css("paddingBottom", 0),
            jQuery("#fsb_placeholder").trigger("fsb_fully_unloaded", [t[a].position]),
            jQuery("#fsb_container").trigger("fsb_fully_unloaded", [t[a].position]),
            Q()
        }, 1e3 * t[a].show_time)),
        "top_push_v1" === t[a].position || "top_push_sticky_v1" === t[a].position) {
            var ee = 1e6
              , ae = ["#announcement-bar.table[data-parallax]", "#NavDrawer", ".drawer + .drawer__close", '.drawer:not(".search-bar")', "#navBar", ".header-toolbar.open-container", ".navigation__container", ".mobileMenu__overlay", ".SidebarMenu.Drawer", "#pushy-menu", ".nav-container.nav-main", "#site-overlay", ".mobilenav-overlay", ".mobile-menu-overlay", ".site-header-wrapper", ".ajaxcart-draw", ".overnav-overlay", ".mobilemenu.dblclick", "header.sticky", ".nav.side-nav", 'body[class^="kagami--"] .page__overlay', 'body[class^="focal--"] .page__overlay', "#sidebar #menu", "#nav .dropdown-menu", "#mobile-nav-return.mobile-nav-toggle", ".main-header-wrap .main-header .mobile-dropdown", ".page-header.cf + #navbar.nav-style-out", ".header-cart.slide", ".moTab-navigation", ".cart-popup-wrapper", ".mobile-nav-wrapper", "#velaMenuMobile", 'a[href="/cart"].dropdown_link + .cart_content', ".basel-close-side", ".mobile-nav-overlay", ".panel-menu.mobile-main-menu", "#shopify-section-popup .popup", ".wrap-all>.overlay", "#shopify-section-header-vertical #mobile-header .mobile-header__content .mobile-menu"];
            C < 650 && ae.unshift("#SiteContainer #header.header__wrapper"),
            C < 768 && ae.unshift(".cbp-spmenu.cbp-spmenu-vertical"),
            C < 992 && ae.unshift(".mobile__widget.mobile-header__nav .mobile__menu-wrapper"),
            C < 1024 && ae.unshift('.mono-produit-true [class^="mobile-type-header"]');
            for (var te = 0; te < ae.length; te++) {
                var ie = jQuery(ae[te]);
                if (ie.length) {
                    var oe = "auto" === ie.css("z-index") || ie.css("z-index") <= 1 ? 99999 : ie.css("z-index");
                    ee = parseFloat(oe) - 1,
                    jQuery("#fsb_background").css("z-index", ee);
                    break
                }
            }
        }
        var re = []
          , ne = []
          , se = [];
        if ("top_push_v1" === t[a].position)
            ne = [".site-header.page-element:not(.is-moved-by-drawer)", ".nav-mobile", ".ajaxify-drawer", "#MobileNav", ".header__close.fixed", ".site-header.headroom.headroom--top", "header.hero-active .hero-image-header-wrap", "#nav .wsmenu", "body:not(.scrolled-down) #site-control.site-control", ".nav-shift #page-banner.banner-under-header", ".nav-shift .container #main", "#shopify-section-general-header .main-header-wrapper:not(.sticky-header-scrolled) + .header-drawer", ".mobile_nav-fixed--true .page_banner", ".mobile_nav-fixed--false .page_banner", ".tt-desctop-parent-search .tt-dropdown-menu", ".header__search-bar-wrapper.is-fixed", "header#top.scroll-to-fixed-fixed:not(.js-header-sticky--fixed)"],
            se = ["body:not(.mobile-drawer--open) .page-wrapper.page-element", ".site-header.is-standard.shift--alert", ".large--hide.medium-down--show.sticky-header:not(.ui)", "#shopify-section-static-header.site-header-sticky--open:not(.visible)", "body:not(.site-header-sticky--scrolled) .site-navigation-wrapper + .site-mobile-nav .mobile-nav-panel", "body.js-focus-visible.is-mobile", "body:not(.js-drawer-open) .sticky-header.offset-by-announcement-bar", "#announcement-bar.table", 'a#pagecontent[name="pagecontent"]', ".header.header-fixed--true.is-absolute", ".mobile_nav-fixed--false.is-active #header", ".site-header-main-content .live-search--takeover .live-search-form"],
            C <= 1080 && ne.push(".navigation.navigation-has-mega-nav"),
            C > 720 && ne.push("#shopify-section-general-header .main-header-wrapper:not(.sticky-header-scrolled)"),
            C >= 800 && se.push("#site-wrap #header #shopify-section-header > .row.clearfix", "#site-wrap #header #shopify-section-header + .curr-switcher.js");
        else if ("top_push_sticky_v1" === t[a].position) {
            re = ["#page header.util + #shopify-section-header.header"],
            ne = [".site-header--fixed", ".site-header.site-header--homepage", "#mobileNavBar", "#StickyBar.sticky--active", ".js-sticky-action-bar .action-area", ".site-header.page-element:not(.is-moved-by-drawer)", ".nav-mobile", ".ajaxify-drawer", ".sticky-navigation-container.sticky.stuck", "#MobileNav", ".header__close.fixed", ".site-header-sticky .site-header--stuck", ".nav-container.nav-sticky", "#navbarStickyDesktop.nav-sticky", ".site-header.has-scrolled", ".site-header.headroom", "#site-header.site-header", 'body[class^="trademark--"] .shopify-section__header', '[data-header-sidebar="true"] .main-sidebar', ".ui.sticky.top", "header.hero-active .hero-image-header-wrap", ".header.sticky .bar.fixed", 'body[class^="kagami--"] #shopify-section-header', "#page header.util", "body:not(.show-mobile-nav) #toolbar.docked", "body.show-mobile-nav #mobile-nav .inner", "body.sticky-header .header .header-main-content[data-header-content]", "#nav .wsmenu", ".transition-body #shopify-section-header #NavDrawer.drawer.drawer--is-open", ".transition-body #shopify-section-header #CartDrawer.drawer.drawer--is-open", ".header__mobile-nav", ".searching .search-bar-wrapper", "#shopify-section-header .coverheader", ".header.sticky-header--true", ".header.sticky-header--false.is-absolute", "#header.mobile-sticky-header--true", "#header.mm-fixed-top.mobile-header.mm-slideout", "#site-control.site-control", ".nav-shift #page-banner.banner-under-header", ".nav-shift .container #main", "#shopify-section-general-header .main-header-wrapper + .header-drawer", ".header-section .stuckMenu.isStuck", "#shopify-section-mobile-navigation .shifter-navigation", ".header-wrapper .sticky-header-wrapper.sticky", "#mobile-header #mobile-nav.mobile-nav", "header.is-sticky.st-visible", 'header#top.header:not([role="banner"])', "header#velaHeader.velaHeader", "body.fixed-header.fixed-header--all > header", ".have-fixed .nav-bar", ".header-bottom.on .header-panel", ".have-fixed .nav-search", ".mb-fixed .hd_mobile", ".open-mn .hd_mobile .icon-menu, .open-user .close_user", "html.open-mn .mn_mobile nav, html.open-user .mobile_customer nav", ".header__search-bar-wrapper.is-fixed", ".sticky-header.header-clone.act-scroll", ".mobile_nav-fixed--false .page_banner", ".header-container.sticky-header", ".tt-stuck-nav.stuck", ".tt-dropdown-menu", "header#top.scroll-to-fixed-fixed", "header#header .header__content--sticky", ".header--sticky.is-sticky .header__content", ".stickyNav", "#header-phantom.sticky-header.fixed-header", "#sticky-info-product-template", ".sticky-wrapper.is-sticky .header-sticky", ".header__mobile.is-fixed", "#shopify-section-header-sticky.header-sticky__placeholder"],
            se = ["#ajaxifyDrawer.is-visible", "header.site-header.sticky:not(.ui)", "#shopify-section-header.header header.sticky:not(.ui)", "body:not(.mobile-drawer--open) .page-wrapper.page-element", ".site-header.is-standard.shift--alert", ".large--hide.medium-down--show.sticky-header:not(.ui)", "#shopify-section-static-header.site-header-sticky--open", "#shopify-section-static-header.visible", ".site-navigation-wrapper + .site-mobile-nav .mobile-nav-panel", ".site-header-main-content .live-search--takeover .live-search-form", "body.colors--body-n-button-match .off-canvas--viewport .off-canvas--main-content", "body.js-focus-visible.is-mobile", "body:not(.js-drawer-open) .sticky-header.squished-header", "#announcement-bar.table", "body.meta-fixed #meta", "header.main-header-wrap.main-header--minimal-sticky", "#site-wrap #header #shopify-section-header + .curr-switcher.js", ".main_nav_wrapper.sticky_nav.sticky_nav--stick", ".header.header-fixed--true.is-absolute", "#header.mobile_nav-fixed--true", 'body.mobile_nav-fixed--false a#pagecontent[name="pagecontent"]', ".mobile_nav-fixed--false.is-active #header", '.mono-produit-true [class^="mobile-type-header"] nav.nav-bar', ".wrap-all #headerApp", ".group-header.sticky-menu.active"],
            C <= 480 && ne.push("#ajaxifyModal"),
            C < 650 && ne.push("#SiteContainer #header.header__wrapper .header__content"),
            C <= 768 && se.push("#navBar.nav-bar:not(.opened)"),
            C <= 840 && se.push("body:not(.js-drawer-open) .medium-down--fixed"),
            C <= 1080 && ne.push(".navigation.navigation-has-mega-nav"),
            C > 720 && se.push("body:not(.js-drawer-open) .sticky-header.main-header-wrapper"),
            C > 748 && se.push("#sidebar-holder #sidebar", "#content-holder #content"),
            C >= 800 && ne.push("#nav + #content_wrapper.mm-page .content.container"),
            C > 1e3 && ne.push(".bodywrap.cf .page-header.cf", ".bodywrap.cf .page-header.cf + #navbar.nav-style-out");
            var de = document.querySelector('body[class^="warehouse"] #shopify-section-header');
            if (null != de)
                "sticky" === getComputedStyle(de).position && ne.push('body[class^="warehouse"] #shopify-section-header')
        }
        for (var ce = 0, le = 0; le < re.length; le++) {
            var pe = document.querySelector(re[le]);
            if (pe) {
                ce = parseFloat(pe.style.top);
                break
            }
        }
        var he = "";
        re.length && (he = re.join() + "{top:" + (V + ce) + "px !important;}");
        var _e = "";
        ne.length && (_e = ne.join() + "{top:" + V + "px !important;}");
        var be = "";
        se.length && (be = se.join() + "{margin-top:" + V + "px;}"),
        Q(),
        jQuery("body").append('<div id="fsb_theme_integration_styles"><style>' + he + _e + be + "</style></div>"),
        jQuery("#fsb_placeholder").trigger("fsb_fully_loaded", [t[a].position]),
        jQuery("#fsb_container").trigger("fsb_fully_loaded", [t[a].position])
    }
    function v() {
        if ("object" == typeof Shopify && Shopify.hasOwnProperty("shop"))
            return Shopify.shop;
        for (var e = document.getElementsByTagName("script"), a = 0; a < e.length; a++) {
            if (e[a].hasAttribute("src") && e[a].src.indexOf("freeshippingbar") > -1)
                return e[a].src.substring(e[a].src.indexOf("shop=") + 5, e[a].src.length)
        }
        return document.domain
    }
    function w(e) {
        var a = ("; " + document.cookie).split("; " + e + "=");
        if (2 == a.length)
            return a.pop().split(";").shift()
    }
    function k(e, a, t) {
        if (t) {
            var i = new Date;
            i.setTime(i.getTime() + 1e3 * t);
            var o = "; expires=" + i.toGMTString()
        } else
            o = "";
        document.cookie = e + "=" + a + o + "; path=/"
    }
    function x(e) {
        document.cookie = e + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"
    }
    function j() {
        var e = !1;
        return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (e = !0),
        e
    }
    function Q() {
        var e = document.getElementById("fsb_theme_integration_styles");
        e && e.parentNode.removeChild(e)
    }
    return {
        fsb_button_on_click: function() {
            t[a].new_tab ? window.open(t[a].bar_link, "_blank") : window.location = t[a].bar_link
        },
        fsb_close_on_click: function() {
            jQuery("#fsb_placeholder").trigger("fsb_fully_unloaded", [t[a].position]),
            jQuery("#fsb_container").trigger("fsb_fully_unloaded", [t[a].position]),
            jQuery("#fsb_placeholder").length > 0 && setTimeout(function() {
                jQuery("#fsb_placeholder").html("")
            }, 100),
            setTimeout(function() {
                jQuery("#fsb_container").html("")
            }, 100),
            jQuery("#fsb_placeholder").length > 0 && "inserted" === t[a].position ? jQuery("#fsb_placeholder").css("paddingBottom", 0) : jQuery("#fsb_placeholder").length > 0 && "inserted_sticky" === t[a].position ? jQuery("#fsb_placeholder").css("paddingBottom", 0) : "top_push" === t[a].position ? jQuery("body").css("paddingTop", 0) : "top_push_sticky" === t[a].position ? jQuery("body").css("paddingTop", 0) : "top_cover" === t[a].position ? jQuery("#fsb_container").css("display", "none") : "top_cover_nonsticky" === t[a].position ? jQuery("#fsb_container").css("display", "none") : "bottom_cover" === t[a].position && jQuery("body").css("paddingBottom", 0),
            k("fsb_close_clicked", "yes")
        },
        fsb_button_on_click_v1: function(e) {
            e.preventDefault(),
            e.stopPropagation(),
            t[a].new_tab ? window.open(t[a].bar_link, "_blank") : window.location = t[a].bar_link
        },
        fsb_close_on_click_v1: function(e) {
            e.preventDefault(),
            e.stopPropagation(),
            jQuery("#fsb_placeholder").trigger("fsb_fully_unloaded", [t[a].position]),
            jQuery("#fsb_container").trigger("fsb_fully_unloaded", [t[a].position]),
            jQuery("#fsb_placeholder").length > 0 && setTimeout(function() {
                jQuery("#fsb_placeholder").html("")
            }, 100),
            setTimeout(function() {
                jQuery("#fsb_container").html("")
            }, 100),
            jQuery("#fsb_placeholder").length > 0 && "inserted" === t[a].position ? jQuery("#fsb_placeholder").css("paddingBottom", 0) : jQuery("#fsb_placeholder").length > 0 && "inserted_sticky" === t[a].position ? jQuery("#fsb_placeholder").css("paddingBottom", 0) : "top_push" === t[a].position ? jQuery("body").css("paddingTop", 0) : "top_push_sticky" === t[a].position ? jQuery("body").css("paddingTop", 0) : "top_cover" === t[a].position ? jQuery("#fsb_container").css("display", "none") : "top_cover_nonsticky" === t[a].position ? jQuery("#fsb_container").css("display", "none") : "bottom_cover" === t[a].position && jQuery("body").css("paddingBottom", 0),
            Q(),
            function() {
                var e = document.getElementById("fsb_container");
                if (e) {
                    var a = parseFloat(e.style.height);
                    a > 0 && (e.style.height = "0")
                }
            }(),
            k("fsb_close_clicked", "yes")
        }
    }
}
if (!hextom_fsb_instance)
    var hextom_fsb_instance = hextom_fsb();
function fsb_button_on_click() {
    hextom_fsb_instance.fsb_button_on_click()
}
function fsb_close_on_click() {
    hextom_fsb_instance.fsb_close_on_click()
}
function fsb_button_on_click_v1(e) {
    hextom_fsb_instance.fsb_button_on_click_v1(e)
}
function fsb_close_on_click_v1(e) {
    hextom_fsb_instance.fsb_close_on_click_v1(e)
}
