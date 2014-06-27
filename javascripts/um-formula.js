$(function () {

    var Formula = function(){
        this.init();
    };

    Formula.prototype = {

        tpl: '<div class="formula-pupop-container">' +
            '<div class="formula-cover"></div>' +
            '<div class="formula-pupop">' +
            '<div class="formula-toolbar"></div>' +
            '<div class="formula-content"></div>' +
            '<div>' +
            '<div>',
        sourceData: [
            {
                'name': '常用公式',
                'value':[
                    {x:0, y:0, latex: "{/}frac{x}{y}"},
                    {x:1, y:0, latex:"{x}/{y}"},
                    {x:2, y:0, latex:"x^{y}"},
                    {x:3, y:0, latex:"x_{y}"},
                    {x:4, y:0, latex:"x^{x}_{y}"},
                    // {x:5, y:0, latex:"{/}bar{x}"},
                    {x:6, y:0, latex:"{/}sqrt{x}"},
                    {x:7, y:0, latex:"{/}sqrt[x]{y}"},
                    {x:0, y:1, latex:"{/}sum^{x}_{n=}"},
                    {x:1, y:1, latex:"{/}sum"},
                    {x:2, y:1, latex:"{/}log_{x}"},
                    {x:3, y:1, latex:"{/}ln"},
                    {x:4, y:1, latex:"{/}int_{x}^{y}"},
                    // {x:5, y:1, latex:"{/}oint_{x}^{y}"}
                ]
            },
            {
                'name': '符号',
                'value':[
                    {x:0, y:2, latex:"+"},
                    {x:1, y:2, latex:"-"},
                    {x:2, y:2, latex:"{/}pm"},
                    {x:3, y:2, latex:"{/}times"},
                    {x:4, y:2, latex:"{/}ast"},
                    {x:5, y:2, latex:"{/}div"},
                    {x:6, y:2, latex:"/"},
                    {x:7, y:2, latex:"{/}Delta"},
                    {x:0, y:3, latex:"="},
                    {x:1, y:3, latex:"{/}neq"},
//                    {x:2, y:3, latex:"{/}approx"},
                    {x:3, y:3, latex:">"},
                    {x:4, y:3, latex:"<"},
                    {x:5, y:3, latex:"{/}geq"},
                    {x:6, y:3, latex:"{/}leq"},
                    {x:7, y:3, latex:"{/}infty"},
                    {x:0, y:4, latex:"{/}cap"},
                    {x:1, y:4, latex:"{/}cup"},
                    // {x:2, y:4, latex:"{/}because"},
                    // {x:3, y:4, latex:"{/}therefore"},
                    {x:4, y:4, latex:"{/}subset"},
                    {x:5, y:4, latex:"{/}supset"},
                    {x:6, y:4, latex:"{/}subseteq"},
                    {x:7, y:4, latex:"{/}supseteq"},
                    // {x:0, y:5, latex:"{/}nsubseteq"},
                    // {x:1, y:5, latex:"{/}nsupseteq"},
                    {x:2, y:5, latex:"{/}in"},
                    {x:3, y:5, latex:"{/}ni"},
                    // {x:4, y:5, latex:"{/}notin"},
                    // {x:5, y:5, latex:"{/}mapsto"},
                    // {x:6, y:5, latex:"{/}leftarrow"},
                    {x:7, y:5, latex:"{/}to"}//,
                    // {x:0, y:6, latex:"{/}Leftarrow"},
                    // {x:1, y:6, latex:"{/}Rightarrow"},
                    // {x:2, y:6, latex:"{/}leftrightarrow"},
                    // {x:3, y:6, latex:"{/}Leftrightarrow"}
                ]
            },
            {
                'name': '字母',
                'value':[
                    {x:0, y:7, latex:"{/}alpha"},
                    {x:1, y:7, latex:"{/}beta"},
                    {x:2, y:7, latex:"{/}gamma"},
                    {x:3, y:7, latex:"{/}delta"},
                    {x:4, y:7, latex:"{/}epsilon"},
                    {x:5, y:7, latex:"{/}phi"},
                    {x:6, y:7, latex:"{/}lambda"},
                    {x:7, y:7, latex:"{/}mu"},
                    {x:0, y:8, latex:"{/}rho"},
                    {x:1, y:8, latex:"{/}sigma"},
                    {x:2, y:8, latex:"{/}omega"},
                    {x:3, y:8, latex:"{/}Gamma"},
                    {x:4, y:8, latex:"{/}Delta"},
                    {x:5, y:8, latex:"{/}Theta"},
                    {x:6, y:8, latex:"{/}Lambda"},
                    {x:7, y:8, latex:"{/}Xi"},
                    {x:0, y:9, latex:"{/}Pi"},
                    {x:1, y:9, latex:"{/}Sigma"},
                    {x:2, y:9, latex:"{/}Upsilon"},
                    {x:3, y:9, latex:"{/}Phi"},
                    {x:4, y:9, latex:"{/}Psi"},
                    {x:5, y:9, latex:"{/}Omega"}
                ]
            }
        ],
        init: function(id){
            var me = this;
            me.callback = function(){};
            me.$root = $(me.tpl).appendTo(document.body).hide();
            me.initContent();
            me.initEvent();

        },
        initContent: function(){
            var me = this,
                data = me.sourceData,
                $toolbar = me.$root.find('.formula-toolbar'),
                $content = me.$root.find('.formula-content');

            $.each(data, function(i, v){
                var $panel = $('<div class="formula-panel" id="formula-content-' + i + '"></div>');

                $toolbar.append('<div class="formula-tab" data-content-id="formula-content-' + i + '">' + v.name + '</div>');
                $content.append($panel);
                $.each(v.value, function(j, item){
                    $('<div class="formula-latex" data-latex="' + item.latex + '"></div>').css({
                        'background-position': '-' + (item.x*30) + 'px -' + (item.y*30) + 'px'
                    }).appendTo($panel);
                });
                $panel.append('<div class="formula-clearfix">');
            });
            $toolbar.children().eq(0).addClass('active');
            $content.children().eq(0).addClass('active');

        },
        initEvent: function(){
            var me = this;
            me.$root.find('.formula-tab').click(function(){
                var $tab = $(this),
                    $panel = me.$root.find('#' + $tab.attr('data-content-id'));
                me.$root.find('.formula-tab').removeClass('active');
                $tab.addClass('active');
                me.$root.find('.formula-panel').removeClass('active');
                $panel.addClass('active');
            });
            me.$root.find('.formula-latex').click(function(){
                var $latex = $(this),
                    latex = $latex.attr('data-latex');
                me.hide();
                me.callback(latex.replace('{/}', '\\'));
            });
            me.$root.find('.formula-cover').click(function(){
                me.hide();
            });
        },
        show: function(top, left){
            this.$root.css({
                top: top,
                left: left
            }).show();
        },
        hide: function(){
            this.$root.hide();
        },
        onSelectLatex: function(callback){
            this.callback = callback || function(){};
        }
    };

    var formula = window.formula = new Formula();
    $('.formula-pupop-btn').click(function(){
        formula.show();
    });

});