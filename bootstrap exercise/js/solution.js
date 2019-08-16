$(function(){
    $(".header-nav").children("li").hover(function(){
        $(this).children("ul").stop().show();
    },function(){
        $(this).children("ul").stop().hide();
    })
    $(".nav-btn").children("span").click(function(){
        $("#mobile-menu").animate({"left":0},200);
        $(".bgc").css({"display":"block"});
    })
    $(".bgc").click(function(){
        $("#mobile-menu").animate({"left":"-300px"},200);
        $(this).css({"display":"none"});
    })
    // $("#mobile-menu").children("ul").children("li").children("a").children(".glyphicon-menu-left").click(function(){
    //     $(this).parent("a").next().slideDown(200);
    //     $(this).attr("class","glyphicon glyphicon-menu-down");
    // })
    // $("#mobile-menu").children("ul").children("li").children("a").children(".glyphicon glyphicon-menu-down").click(function(){
    //     console.log(1);
    //     $(this).parent("a").next().slideUp(200);
    //     $(this).attr("class","glyphicon glyphicon-menu-left"); 
    // })
    // var counter=0;
    // $("#mobile-menu").children("ul").children("li").click(function(){
    //     if(counter==0){
    //         $(this).children("ul").slideDown(200);
    //         counter=1;
    //         $(this).children("a").children("span").attr("class","glyphicon glyphicon-menu-down");
    //     }else if(counter==1){
    //         $(this).children("ul").slideUp(200);
    //         counter=0;
    //         $(this).children("a").children("span").attr("class","glyphicon glyphicon-menu-left");
    //     }
    // })
    $("#mobile-menu").children("ul").children("li").toggle(function(){
        $(this).children("ul").slideDown(200);
        $(this).children("a").children("span").attr("class","glyphicon glyphicon-menu-down");
    },function(){
        $(this).children("ul").slideUp(200);
        $(this).children("a").children("span").attr("class","glyphicon glyphicon-menu-left");
    })

    
    $(window).scroll(function(){
        var height=$(window).height()/2;
        var scrolltop=$(this).scrollTop();
        $("#zxkf").animate({"top":scrolltop+height},20);
        $("#tck").animate({"top":scrolltop+height},20);
    })
    $("#zxkf").click(function(){
        $("#tck").css({"display":"block"});
    })
    $(".title").children("a").click(function(){
        $("#tck").css({"display":"none"});
    })
    $(".hd").children("span").toggle(function(){
        $(".ly").children("form").css({"display":"block"});
        $(this).css({"background":"url(../img/nodeMin.png) no-repeat"});
    },function(){
        $(".ly").children("form").css({"display":"none"});
        $(this).css({"background":"url(../img/nodeMax.png) no-repeat"});
        $(".ly").css({"left":"1px","bottom":"1px"});
    })
    $(".zxzx").click(function(){
        var width=$(window).width()/2;
        var height=$(window).height()/2;
        $(".ly").children("form").css({"display":"block"});
        $(".hd").children("span").css({"background":"url(../img/nodeMin.png) no-repeat"});
        $(".ly").css({"left":width-120,"bottom":height-170});
    })
})