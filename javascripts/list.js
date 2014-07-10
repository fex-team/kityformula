/**
 * list页公式脚本
 */

function listSetup () {

    // init start
    ( function () {

        initCharset();
        initRomanCharset();
        initGreekCharset();
        initSymbol();

    } )();

    /*
     * 初始化基本字符集
     */
    function initCharset () {

        var formula = new kf.Formula( "baseCharset", {
                fontsize: 40
            } ),
            textExp1 = new kf.TextExpression( "abcdefghijklmnopqrstuvwxyz" ),
            textExp2 = new kf.TextExpression( "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ),
            textExp3 = new kf.TextExpression( "0123456789" );

        formula.appendExpression( textExp1 );
        formula.appendExpression( textExp2 );
        formula.appendExpression( textExp3 );

    }

    /*
     * 初始化罗马字符集
     */
    function initRomanCharset () {

        var formula = new kf.Formula( "romanCharset", {
                fontsize: 40
            } ),
            textExp1 = new kf.TextExpression( "abcdefghijklmnopqrstuvwxyz", "KF AMS ROMAN" ),
            textExp2 = new kf.TextExpression( "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "KF AMS ROMAN" );

        formula.appendExpression( textExp1 );
        formula.appendExpression( textExp2 );

    }

    /*
     * 初始化可打印符号
     */
    function initSymbol () {

        var formula = new kf.Formula( "symbol", {
                fontsize: 40
            } ),
            textExp = new kf.TextExpression( "()-+|/![]:'<>.{}\\infty\\\\to\\" );

        formula.appendExpression( textExp );

    }

    /*
     * 初始化希腊语字符集
     */
    function initGreekCharset () {

        var formula = new kf.Formula( "greekCharset" , {
                fontsize: 40
            }),
            chars = [ "alpha", "beta", "gamma",
                      "delta", "epsilon", "zeta",
                      "eta", "theta", "iota",
                      "kappa", "lambda", "mu",
                      "nu", "xi", "omicron",
                      "pi", "rho", "sigma",
                      "tau", "upsilon", "phi",
                      "chi", "psi", "omega" ],

            textExp = new kf.TextExpression( "\\" + chars.join( "\\\\" ) + "\\" );

        for ( var i = 0, len = chars.length; i < len; i++ ) {

            chars[ i ] = chars[ i ].replace( /^\w/, function ( match ) {
                return match.toUpperCase();
            } );

        }

        formula.appendExpression( textExp );
        formula.appendExpression( new kf.TextExpression( "\\" + chars.join( "\\\\" ) + "\\" ) );

    }

    /*
     * 创建公式
     */
    function createFormulas ( expressions, titleId, boxId ) {

        var currentExp = null;

        for ( var i = 0, len = expressions.length; i < len; i++ ) {

            currentExp = expressions[ i ];

            document.getElementById( titleId + i ).innerHTML = currentExp.title;

            new kf.Formula( boxId + i ).appendExpression( currentExp.exp );

        }

    }

    function createTable ( exps, containerId, titleId, boxId ) {

        var tables = [];

        for ( var i = 0, len = exps.length; i < len; i+=2 ) {

            tables.push( '<tr><td class="title-cell"><div id="' + titleId + i +'"></div></td><td><div id="' + boxId + i +'"></div></td>' );
            tables.push( '<td class="title-cell"><div id="'+ titleId + (i+1) +'"></div></td><td><div id="' + boxId + (i+1) +'"></div></td></tr>' );

        }

        document.getElementById( containerId ).innerHTML = '<table><tbody>'+ tables.join( "" ) +'</tbody></table>';

    }

};