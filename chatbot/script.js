$(document).ready(function(){
    var user1ans1 = document.querySelector(".user1ans1");
    user1ans1.addEventListener("click",function(){
        setTimeout(function(){
            $("#loader1").hide(); 
            $("#bot2").show();
            $("#user2").show();
        },500);
        $("#loader1").show();
    })
    var btnsub = document.querySelector("#btnsub");
    btnsub.addEventListener("click",function(e){
        e.preventDefault();
        setTimeout(function(){
            $("#loader2").hide(); $("#loader2").hide();
            $("#bot3").show();
            $("#user3").show();
        },500);
        $("#loader2").show();
        $("#loader2").show();
    })

    var thankyou = document.querySelector(".thankyou");
    thankyou.addEventListener("click",function(){
        swal("Congratulations", "We will connect shortly.", "success");      
    })    
})