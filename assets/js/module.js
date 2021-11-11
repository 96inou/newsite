$(function(){


// アイコンの画像を押したら一番上に戻る
$("#top").on("click",function(){
    $("body,html").animate({scrollTop: 0},500);
})

// スクロールしたら右から画像と説明文がスライドしてくる
$(window).on("scroll",function(){
    let windowTop = $(window).scrollTop();
    let position = $(".nigaoe").offset().top;
    let windowheight = $(window).height();
    console.log(position);

if(position < windowTop + windowheight){
    $(".nigaoe,.setsumei").removeClass("hide");
}else{
    $(".nigaoe,.setsumei").addClass("hide");
}

})


})