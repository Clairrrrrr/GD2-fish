window.onload = function(){
    var width = window.innerWidth;
    var height = window.innerHeight;

    console.log("This file is connected");

    function growBubble(){
        $(this).css("font-size", "300px");
    }

    $(".bubble").click(growBubble);

    function inflateFish(){
        $('.pufferfish').attr('src', 'images/p-fish-2.png');
    }

    $('.pufferfish').click(inflateFish);

    function swimAway(){
        var bottomPos = Math.random() * height;
        var leftPos = Math.random() * width;
        $('.clownfish').css('bottom', bottomPos);
        $('.clownfish').css('left', leftPos);
    }

    $('.clownfish').hover(swimAway);

    // setInterval(swimAway, 1000);

    var blue = 205;
    var red = 0;
    var green = 0;

    function swimDeeper(){
        $('body').css('background', 'rgb('+red+', '+green+', '+blue+')');
        blue = Math.random() * 255;
        red = Math.random() * 255;
        green = Math.random() * 255;
    }

    // $(window).scroll(swimDeeper);


    function dance(event){
        if (event.key == 'q'){
        $('.starfish').attr('src','images/starfish2.png');
        }else if(event.key == 'w'){
            $('.starfish').attr('src','images/starfish3.png');
        }else if(event.key == 'e'){
            $('.starfish').attr('src','images/starfish1.png');
        }
    }
    $(window).keypress(dance);

    function showBox(){
        $('.infor-window').toggleClass('hidden');
    }
    $('.info-buttom').click(showBox);
    $('.info-window').click(showBox);
    
    function windowScrolled(){
        var scrollAmount = $(window).scrollTop();
        if(scrollAmount > 150){
            inflateFish();
        }

    }
    $(window).scroll(windowScrolled);
}

