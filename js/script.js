$(()=>{
    
    $(".menu a").click((e)=>{
        let btn = $(e.currentTarget).attr("href");
        let pos = $(btn).offset();
        console.log(pos);
        $("html, body").animate({scrollTop: pos.top}, 1000);
    })

    $("#go-top").click(()=>{
        $("html, body").animate({scrollTop: 0}, 1000);
    })

    $(window).scroll(function() {
        // console.log($(this).scrollTop());
        if ($(this).scrollTop()>200) {
            $("#go-top").stop().fadeIn('fast');
        } else {
            $("#go-top").stop().fadeOut('fast');
        }
    });

    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
        $(".navigation").toggleClass("show");
    });
});
$(".smoove").smoove({
    offset:200
})

// $(() =>{
//                     箭頭函數要傳參數
    //  $(".menu a").click(function (){
//         let btn = $(this).attr("href");
//         let pos = $(btn).offset();
//         console.log(pos);
//         $("html, body").animate({scrollTop: pos.top}, 1000);
//     })
// });
