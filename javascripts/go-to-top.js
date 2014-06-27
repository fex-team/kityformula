/**
 * 回到顶部
 */

window.onscroll = function () {

    var body = document.body,
        docHtml = document.documentElement,
        goToTop = document.getElementById( "goToTop" );

    if ( body.scrollTop > 0 || docHtml.scrollTop > 0 ) {
        goToTop.style.display = "block";
    } else {
        goToTop.style.display = "none";
    }

};