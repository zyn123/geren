//$(function(){
//    var num=0;
//    var t=setInterval(move,1000);
//    var move=function(){
//        num++;
//        if(num==$(".mb_bgimage").length-1){
//            //$(".mb_bgimage").animate({display:"none"},function(){
//                $(".mb_bgimage")[0].show($("chulai"));
//            //});
//            num=0;
//        }else{
//            $(".mb_bgimage").addClass(".chulai",)
//        }
//
//    };
//})
$(function(){
    var num=0;
    setInterval(function(){
        $(".mb_bgimage").hide();
        var el=$(".mb_bgimage")[num];
        $(el).show();
        num++;
        if(num==$(".mb_bgimage").length){
            num=0;
        }
    },4000)
})