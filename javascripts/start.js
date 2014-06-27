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
        expressions = [{
            title: "质能方程",
            latex: "E_0=mc^2"
        }, {
            title: "圆周长",
            latex: "c=2\\pi r"
        }, {
            title: "勾股定理",
            latex: "a^2+b^2=c^2"
        }, {
            title: "欧拉公式",
            latex: "e^{i\\pi}+1=0"
        }, {
            title: "乘积的方根",
            latex: "\\sqrt[n]{ab}=\\sqrt[n]{a}\\cdot\\sqrt[n]{b}"
        }, {
            title: "转动惯量",
            latex: "\\iiint_V{\\rho r^2dV}"
        }, {
            title: "其他组合",
            latex: [
                "f_j=n_j+m-\\sum^{m-1}_{i=0}{A_ig_j+m-i}",
                "(\\sqrt[n]a)^m=\\sqrt[n]{a^m}",
                "a \\pm c > b \\pm c",
                "{\\left(\\sum^n_{i=1}{a_ib_i}\\right)}^2 \\leq {(\\sum^n_{i=1}{a^2_i})}{(\\sum^n_{i=1}{b^2_i})}",
                "\\sqrt{2\\pi n}(\\frac ne)^n<n!<\\sqrt{2\\pi n}(\\frac ne)^n(1+\\frac 1{12n-1})",
                "\\lim_{z\\to z_0}f(z)=f(z_0)",
                "\\ln w=\\ln \\mid w \\mid + i \\arg w",
                "\\sin z=\\frac{e^{iz}-e^{-iz}}{2i}",
                "N_\\nu(z)=\\frac 1{\\sin \\nu\\pi}(\\cos(\\nu\\pi)(\\frac \\pi2)^\\nu\\sum^\\infty_{k=0}(-1)^k\\frac{z^{2k}}{2^{2k}k!\\Gamma(\\nu+k+1)}-(\\frac z2)^{-\\nu}\\sum^\\infty_{k=0}(-1)^k\\frac {z^{2k}}{2^{2k}k!\\Gamma(k-\\nu+1)})"
            ]
        }];

    require( 'impl/latex/latex' );

    // 启动其他脚本
    listSetup();
    createTable( expressions );

    var latexParser = Parser.use( "latex" ),
        latexStr = null;

    for ( var i = 0, len = expressions.length; i < len; i++ ) {

        latexStr = expressions[ i ].latex;
        assembly = Assembly.use( document.getElementById( "cExp" + i ) );

        if ( typeof latexStr === "string" ) {
            assembly.generateBy( latexParser.parse( latexStr ) );
        } else {

            for ( var j = 0, jlen = latexStr.length; j < jlen; j++ ) {
                assembly.generateBy( latexParser.parse( latexStr[ j ] ) );
            }

        }

    };

} );

window.addEventListener( "DOMContentLoaded", function () {

    seajs.use( 'start' );

});

function createTable ( exps ) {

    var tables = [],
        className = "title-cell";

    // 创建table容器
    for ( var i = 0 , len = exps.length; i < len; i++ ) {

        if ( i === exps.length - 1 ) {
            className += " title-cell-last";
        }
        tables.push( '<tr><td class="'+ className +'">'+ exps[ i ].title +'</td><td><div id="cExp'+ i +'"></div></td></tr>' );

    }

    document.getElementById( "complex" ).innerHTML = "<table><tbody>"+ tables.join( "" ) +"</tbody></table>";
}