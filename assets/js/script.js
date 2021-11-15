$(function(){


    // // アイコンの画像を押したら一番上に戻るアニメーション
    $(".hanaimg").on("click",function(){
        $("body,html").animate({scrollTop: 0},500);
    })

    // リンクを押したら動きをつけて移動する
    $(".nav_item a").on("click",function(event){
        event.preventDefault();
        var href = $(this).attr("href");
        console.log(href);
        var position = $(href).offset().top;
        $("body,html").animate({scrollTop: position-80},500);
        $("nav").slideUp(100);
        $(".hamburger").removeClass("on");
    
    })


    // スクロールしたら右から画像と説明文がスライドしてくる
    
    let windowheight = $(window).height();
    // ↑画面の高さを取得している。
    $(window).on("scroll",function(){
        let windowTop = $(window).scrollTop();
        // ↑画面の一番左上の場所を取得している
        $(".card").each(function(){
            let position = $(this).offset().top;
            // ↑要素（それぞれのoya）の左上の場所を取得している
            if(position < windowTop + windowheight){
                $(this).removeClass("hide");
                }else{
                $(this).addClass("hide");
                }
        })
    })

    // ハンバーガーを押したらバーがクロスする

    $('.hamburger').on("click",function(){
        $('nav').slideToggle();

        $(".hamburger").toggleClass("on");
    })
    
    // ページをリフレッシュしたらトップ画像が下からスライドしてくる
        $(".mainTitle").removeClass("up");
    
    
    // ↓一番外のものだから消しちゃダメ！
    })