/**
 * list页公式脚本
 */

function listSetup () {

    // 常用表达式列表
    var commonExpressions = [

            {
                title: "加法表达式",
                exp: new kf.AdditionExpression( "a", "b" )
            }, {
                title: "减法表达式",
                exp: new kf.SubtractionExpression( "a", "b" )
            }, {
                title: "乘法表达式",
                exp: new kf.MultiplicationExpression( "a", "b" )
            }, {
                title: "除法表达式",
                exp: new kf.DivisionExpression( "a", "b" )
            }, {
                title: "点乘表达式",
                exp: new kf.DotExpression( "a", "b" )
            }, {
                title: "星号乘法表达式",
                exp: new kf.AsteriskExpression( "a", "b" )
            }, {
                title: "等号表达式",
                exp: new kf.EqExpression( "a", "b" )
            }, {
                title: "正负号表达式",
                exp: new kf.PlusMinusExpression( "a", "b" )
            }, {
                title: "负正号表达式",
                exp: new kf.MinusPlusExpression( "a", "b" )
            }, {
                title: "方根表达式",
                exp: new kf.RadicalExpression( "a", "b" )
            }, {
                title: "上标表达式",
                exp: new kf.SuperscriptExpression( "a", "b" )
            }, {
                title: "下标表达式",
                exp: new kf.SubscriptExpression( "a", "b" )
            }, {
                title: "积分表达式",
                exp: new kf.IntegrationExpression( "f(x)dx", "b", "a" )
            }, {
                title: "求和表达式",
                exp: new kf.SummationExpression( "f(x)dx", "b", "a" )
            }

        ],
        compareExpressions = [ {
            title: "kf.LtExpression",
            exp: new kf.LtExpression( "a", "b" )
        }, {
            title: "kf.GtExpression",
            exp: new kf.GtExpression( "a", "b" )
        }, {
            title: "kf.LeqExpression",
            exp: new kf.LeqExpression( "a", "b" )
        }, {
            title: "kf.GeqExpression",
            exp: new kf.GeqExpression( "a", "b" )
        }, {
            title: "kf.SimExpression",
            exp: new kf.SimExpression( "a", "b" )
        }, {
            title: "kf.SimeqExpression",
            exp: new kf.SimeqExpression( "a", "b" )
        }, {
            title: "kf.ApproxExpression",
            exp: new kf.ApproxExpression( "a", "b" )
        }, {
            title: "kf.LiExpression",
            exp: new kf.LiExpression( "a", "b" )
        }, {
            title: "kf.GgExpression",
            exp: new kf.GgExpression( "a", "b" )
        }, {
            title: "kf.EqExpression",
            exp: new kf.EqExpression( "a", "b" )
        }, {
            title: "kf.EquivExpression",
            exp: new kf.EquivExpression( "a", "b" )
        } ],
        setExpressions = [ {
            title: "kf.CapExpression",
            exp: new kf.CapExpression( "a", "b" )
        }, {
            title: "kf.CupExpression",
            exp: new kf.CupExpression( "a", "b" )
        }, {
            title: "kf.SubsetExpression",
            exp: new kf.SubsetExpression( "a", "b" )
        }, {
            title: "kf.SupsetExpression",
            exp: new kf.SupsetExpression( "a", "b" )
        }, {
            title: "kf.SubseteqExpression",
            exp: new kf.SubseteqExpression( "a", "b" )
        }, {
            title: "kf.SupseteqExpression",
            exp: new kf.SupseteqExpression( "a", "b" )
        }, {
            title: "kf.InExpression",
            exp: new kf.InExpression( "a", "b" )
        }, {
            title: "kf.NiExpression",
            exp: new kf.NiExpression( "a", "b" )
        }, {
            title: "kf.SqsubsetExpression",
            exp: new kf.SqsubsetExpression( "a", "b" )
        }, {
            title: "kf.SqsupsetExpression",
            exp: new kf.SqsupsetExpression( "a", "b" )
        }, {
            title: "kf.SqsupseteqExpression",
            exp: new kf.SqsupseteqExpression( "a", "b" )
        }, {
            title: "kf.SqsubseteqExpression",
            exp: new kf.SqsubseteqExpression( "a", "b" )
        }, {
            title: "kf.SqcapExpression",
            exp: new kf.SqcapExpression( "a", "b" )
        }, {
            title: "kf.SqcupExpression",
            exp: new kf.SqcupExpression( "a", "b" )
        } ],
        logicalExpressions = [ {
            title: "kf.WedgeExpression",
            exp: new kf.WedgeExpression( "a", "b" )
        }, {
            title: "kf.VeeExpression",
            exp: new kf.VeeExpression( "a", "b" )
        }, {
            title: "kf.MidExpression",
            exp: new kf.MidExpression( "a", "b" )
        } ],
        notExpressions = [ {
            title: "kf.NotEqExpression",
            exp: new kf.NotEqExpression( "a", "b" )
        }, {
            title: "kf.NotEquivExpression",
            exp: new kf.NotEquivExpression( "a", "b" )
        }, {
            title: "kf.NotLtExpression",
            exp: new kf.NotLtExpression( "a", "b" )
        }, {
            title: "kf.NotGtExpression",
            exp: new kf.NotGtExpression( "a", "b" )
        }, {
            title: "kf.NotLeExpression",
            exp: new kf.NotLeExpression( "a", "b" )
        }, {
            title: "kf.NotGeExpression",
            exp: new kf.NotGeExpression( "a", "b" )
        }, {
            title: "kf.NotSubseteqExpression",
            exp: new kf.NotSubseteqExpression( "a", "b" )
        }, {
            title: "kf.NotSupseteqExpression",
            exp: new kf.NotSupseteqExpression( "a", "b" )
        }, {
            title: "kf.NotSimExpression",
            exp: new kf.NotSimExpression( "a", "b" )
        }, {
            title: "kf.NotCongExpression",
            exp: new kf.NotCongExpression( "a", "b" )
        }, {
            title: "kf.NotInExpression",
            exp: new kf.NotInExpression( "a", "b" )
        } ];

    // init start
    ( function () {

        initCharset();
        initRomanCharset();
        initGreekCharset();
        initSymbol();
        initCompare();
        initSet();
        initLogical();
        initNotExpression();

        initCommonFormulas();

    } )();

    /*
     * 初始化基本字符集
     */
    function initCharset () {

        var formula = new kf.Formula( "baseCharset" ),
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

        var formula = new kf.Formula( "romanCharset" ),
            textExp1 = new kf.RomanTextExpression( "abcdefghijklmnopqrstuvwxyz" ),
            textExp2 = new kf.RomanTextExpression( "ABCDEFGHIJKLMNOPQRSTUVWXYZ" );

        formula.appendExpression( textExp1 );
        formula.appendExpression( textExp2 );

    }

    /*
     * 初始化可打印符号
     */
    function initSymbol () {

        var formula = new kf.Formula( "symbol" ),
            textExp = new kf.TextExpression( "()-+|/![]:'<>.{}\\infty\\\\to\\" );

        formula.appendExpression( textExp );

    }

    /*
     * 初始化比较表达式
     */
    function initCompare () {

        createTable( compareExpressions, "compare", "compareTitle", "compareBox" );
        createFormulas( compareExpressions, "compareTitle", "compareBox" );

    }

    /**
     * 初始化集合表达式
     */
    function initSet () {

        createTable( setExpressions, "set", "setTitle", "setBox" );
        createFormulas( setExpressions, "setTitle", "setBox" );

    }

    /**
     * 初始化逻辑表达式
     */
    function initLogical () {

        createTable( logicalExpressions, "logical", "logicalTitle", "logicalBox" );
        createFormulas( logicalExpressions, "logicalTitle", "logicalBox" );

    }

    /**
     * 初始化否定表达式
     */
    function initNotExpression () {

        createTable( notExpressions, "notExp", "notExpTitle", "notExpBox" );
        createFormulas( notExpressions, "notExpTitle", "notExpBox" );

    }

    /*
     * 初始化希腊语字符集
     */
    function initGreekCharset () {

        var formula = new kf.Formula( "greekCharset" ),
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
     * 初始化常用表达式
     */
    function initCommonFormulas () {

        createTable( commonExpressions, "commonExpressionsContainer", "boxTitle", "commonBox" );
        createFormulas( commonExpressions, "boxTitle", "commonBox" );

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