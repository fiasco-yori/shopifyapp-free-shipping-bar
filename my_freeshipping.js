function wow_fsb () {
    var fsb_server_domain = "//98a4c15a.ngrok.io/";
    var fsb_bar, total_price, font_default_family, font_added_family, score;
    var e, a, t, i, o, r, n, s, d, p = ["CLP", "HRK", "SEK", "ISK", "NOK", "CZK", "DKK", "EUR", "RON", "TRY"], currency_values = {
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
        var appendToElement = document.getElementsByTagName("head")[0];
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js";
        script.onload = success;
        appendToElement.appendChild(script);
    } else {
        setTimeout(success, 100);
    }
    function success() {
        jQuery('#shopify-section-header').prepend('<div id="fsb_container" style="display: block; color: inherit;"><div id="fsb_background" style="opacity: 1; margin: 0px; padding: 0px; left: 0px; height: 45px; width: 100%; z-index: 100000; top:0px; position: fixed;"><div id="fsb_bar" style="text-align: center; margin: 0px; padding: 12px 10px; left: 0px; height: auto; width: 100%; box-sizing: border-box; border: none; position: absolute; background-color: rgb(199, 249, 216); color: rgb(63, 63, 63); font-size: 17px; line-height: 21.25px; font-family: Helvetica;">Free shipping for orders over <span id="fsb_symbol" style="color: rgb(255, 60, 71); font-family: Helvetica; font-size: 17px;">$</span><span id="fsb_amount" style="color: rgb(255, 60, 71); font-family: Helvetica; font-size: 17px;">100</span></div></div></div>');
        console.log('success');

        fsb_bar = {};
        if ( font_added_family = "",
             font_default_family = "Serif,Helvetica,Verdana,Courier",
             score = 0,
             hostname = window.location.hostname,
             pathname = window.location.pathname,
        -1 === hostname.indexOf("checkout.shopify.com") && (-1 === pathname.indexOf("checkout") || -1 === pathname.indexOf("thank_you"))) 
        {
            fsb_get_bar()
        }
	}
    function fsb_get_bar() {
        jQuery.ajax({
            url: fsb_server_domain + "fsb_get_bar/" + get_shop_domain(),
            method: "POST",
            dataType: "json",
            success: function(result) {
                if(result.is_active) {
                    fsb_bar = result.bar;
                    cart_json();
                    jQuery(document).ajaxSuccess(function(e, a, t) {
                        -1 === t.url.indexOf("/cart/add.js") 
                        && -1 === t.url.indexOf("/cart/change.js") 
                        && "/cart.js" !== t.url 
                        && "/cart/update.js" !== t.url 
                        || cart_json()
                    })   
                }   
            }
        })
    }
    function cart_json() {
        jQuery.ajax({
            dataType: "json",
            url: "/cart.json",
            success: function(result, d) {
                total_price = result.total_price;

                if ("yes" === get_cookie_value("fsb_close_clicked"))
                    return;
                var cur_score;
                cur_score = show_score(fsb_bar);
                if(cur_score > score) {
                    score = cur_score;
                }
                if (0 == score)
                    return;

                if (font_default_family.indexOf(fsb_bar.font) > -1)
                    draw_bar();
                else if (font_added_family.indexOf(fsb_bar.font) > -1)
                    draw_bar();
                else {
                    font_added_family += "," + fsb_bar.font;
                    var link_element = document.createElement("link")
                      , head_element = document.getElementsByTagName("head")[0];
                    link_element.setAttribute("href", "https://fonts.googleapis.com/css?family=" + fsb_bar.font.replace(/ /g, "+")),
                    link_element.setAttribute("type", "text/css"),
                    link_element.setAttribute("rel", "stylesheet"),
                    link_element.onload = draw_bar,
                    head_element.insertBefore(ling_element, head_element.firstChild)
                }
            }
        })
    }
    function show_score(e) {
        var a = 1;
        if ("all" != e.dev_target) {
            if ("desktop" == e.dev_target && dev_check())
                return 0;
            if ("mobile" == e.dev_target && !dev_check())
                return 0
        }
        if (e.schedule) {
            var t = Date.parse(e.sch_start)
              , i = Date.parse(e.dev_check)
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
    function draw_bar() {

    }
    function get_shop_domain() {
        if ("object" == typeof Shopify && Shopify.hasOwnProperty("shop"))
            return Shopify.shop;
        return document.domain
    }
    function get_cookie_value(name) {
        var return_value = ("; " + document.cookie).split("; " + name + "=");
        if (2 == return_value.length)
            return return_value.pop().split(";").shift()
    }
    function dev_check() {
        var result = !1;
        return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (result = !0),
        result        
    }
}
if (!wow_fsb_instance)
    var wow_fsb_instance = wow_fsb();
