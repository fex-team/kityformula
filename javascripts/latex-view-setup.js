/**
 * Created by hn on 14-3-5.
 */
jQuery( function ( $ ) {


    var $mathquill = $('#latexView').mathquill( 'editable' ),
        latexInput = $( "#latexInput" )[0];


    // 同步更新latex输入框
    $mathquill.keyup(function(){
        var latex = $mathquill.mathquill('latex');
        setLatexValue(latex);
    });

    // 同步更新可视化编辑器
    $( latexInput ).keyup(function(){
        updateView(latexInput.value);
    });


    function setLatexValue ( value ) {
        latexInput.value = value;
    }

    function updateView ( value ) {
        $mathquill.mathquill( 'latex', value );
    }

} );