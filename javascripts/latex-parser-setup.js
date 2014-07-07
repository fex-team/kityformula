jQuery( function () {

    var Parser = kf.Parser,
        Assembly = kf.Assembly,
        assembly = Assembly.use( document.getElementById( "formulaContainer" ) ),
        input = $( "#latexInput" )[0],
        errorTip = document.getElementById( "errorTip" ),
        latexParser = null,
        latexStr = "",
        defaultLatexBox = document.getElementById( "defaultLatexBox" ),
        $mathquill = $('#latexView').mathquill( 'editable' );

    latexParser = Parser.use( "latex" );

    // 渲染公式
    function render () {

        var hasError = false;
        latexStr = input.value.replace( /^\s+|\s+$/g, "" );

        if ( latexStr ) {
            try {
                assembly.regenerateBy( latexParser.parse( input.value ) );
            } catch ( e ) {
                hasError = true;
                showError( "对不起，还未支持该表达式的解析" );
            }
        }

        if ( !hasError ) {
            clearError();
        }

    };

    // 预设表达式的选取
    document.getElementById( "defaultLatexBtn" ).onclick = function () {
        defaultLatexBox.style.display = "block";
        document.documentElement.style.overflowY = "hidden";
    };

    // 预设表达式弹出层的关闭
    document.getElementById( "defaultLatexBoxCloseBtn" ).onclick = closeBox;

    // 预设表达式的选择
    defaultLatexBox.onclick = function ( e ) {

        if ( e.target.nodeName.toLowerCase() === "li" ) {
            input.value = e.target.innerHTML;
            closeBox();
            updateView(input.value);
            render();
            input.focus();
        }

    };

    input.onmousedown = clearError;

    function clearError () {
        input.style.borderColor = "#b3b3b3";
        errorTip.innerHTML = "";
    }

    function showError ( errMsg ) {

        input.style.borderColor = "red";
        errorTip.innerHTML = errMsg;


    }

    function closeBox () {
        defaultLatexBox.style.display = "none";
        document.documentElement.style.overflowY = "visible";
    }



    // 同步更新latex输入框
    $mathquill.keyup(function(){
        var latex = $mathquill.mathquill('latex');
        setLatexValue(latex);
        render();
    });

    // 同步更新可视化编辑器
    $( input ).keyup(function(){
        updateView(input.value);
        render();
    });


    function setLatexValue ( value ) {
        input.value = value;
    }

    function updateView ( value ) {
        $mathquill.mathquill( 'latex', value );
    }

    /* 选择公式结束 */
    formula.onSelectLatex(function(latex){
        input.style.borderColor = "#b3b3b3";
        errorTip.innerHTML = "";
        $mathquill.mathquill( 'write', latex );
        var l = $mathquill.mathquill('latex');
        setLatexValue(l);
        render();
    });
//    formula.onSelectLatex(function(latex){
//        input.style.borderColor = "#b3b3b3";
//        errorTip.innerHTML = "";
//        setLatexValue(latex);
//        updateView(latex);
//        render();
//    });

} );
