function wow_fsb () {
    function success() {
        jQuery('body').append('<div id="fsb_container" style="display: block; color: inherit;"><div id="fsb_background" style="opacity: 1; margin: 0px; padding: 0px; left: 0px; height: 45px; width: 100%; z-index: 100000; top:0px; position: fixed;"><div id="fsb_bar" style="text-align: center; margin: 0px; padding: 12px 10px; left: 0px; height: auto; width: 100%; box-sizing: border-box; border: none; position: absolute; background-color: rgb(199, 249, 216); color: rgb(63, 63, 63); font-size: 17px; line-height: 21.25px; font-family: Helvetica;">Free shipping for orders over <span id="fsb_symbol" style="color: rgb(255, 60, 71); font-family: Helvetica; font-size: 17px;">$</span><span id="fsb_amount" style="color: rgb(255, 60, 71); font-family: Helvetica; font-size: 17px;">100</span></div></div></div>');
        console.log('success');
	}
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
}
if (!wow_fsb_instance)
    var wow_fsb_instance = wow_fsb();
