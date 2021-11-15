$(function(){


    // // アイコンの画像を押したら一番上に戻る
    // $("#top").on("click",function(){
    //     $("body,html").animate({scrollTop: 0},500);
    // })
    
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
    
    
    
    // ↓一番外のものだから消しちゃダメ！
    })