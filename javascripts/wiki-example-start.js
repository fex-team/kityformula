/**
 * Created by hn on 14-2-27.
 */
seajs.config( {
    base: "./parser"
} );

define( "start", function ( require, exports, module ) {

    var Parser = require( "parser" ).Parser,
        Assembly = require( "assembly" ),
        assembly = null,
        fn = "innerText" in document.body ? "innerText" : "textContent";

    require( 'impl/latex/latex' );

    var latexExp = document.getElementsByClassName( "latex-exp" ),
        latexParser = Parser.use( "latex" ),
        latexStr = "";

    for ( var i = 0, len = latexExp.length; i < len; i++ ) {

        latexStr = latexExp[ i ][ fn ];
        latexExp[ i ][ fn ] = "";

        assembly = Assembly.use( latexExp[ i ], {
            fontsize: 15
        } );

        assembly.generateBy( latexParser.parse( latexStr ) );

    }


} );

window.addEventListener( "DOMContentLoaded", function () {

    seajs.use( 'start' );

}, false );