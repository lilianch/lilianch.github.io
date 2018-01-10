/* 
 Created on : Jul 4, 2017, 12:43:10 AM
 Author     : Atta-Ur-Rehman Shah (http://attacomsian.com)
 */
$(function () {

    //init wow effects
    new WOW().init();
    
     var tofix1_height = $('#long').position().top; //Reserve the original height
            var right=document.getElementById('fix').style.height;
            
            var old_right=parseInt($('#long').css('right'));  //字串轉換成整數函數
            console.log(old_right);

           
            $(window).scroll(function() {
                var height = $(window).height();
                var window_width = $(window).width();
                var scroll = $(window).scrollTop();
                //console.log(scroll);
                
                var new_right = old_right+(scroll / height * window_width)*2; //最後的1.5可以調整，改變鼻子變長的速度XDD
                
                $('#long').css({
                    'right': new_right
                });
                
                $('#rectangle').css({
                    'right': new_right
                });

            });
    $('.story').waypoint(function () {
        var t = $(this.element).attr("id");
        console.log(t);
        //t=parseInt(t);
        var selected = '#'+'stroyimg' ;
        $(selected).attr(
            "src", "img/"+t+".png"
        );
    }, {
        offset: '30%', // middle of the page
        //triggerOnce: true // just my preference...
    });

    
    
    
});

var counter=1;

function animationClick(element, animation){
    element = $(element);
    element.click(
        function() {
            element.animate({src: "img/overtime"+((counter+1)%3+1)+".png"});
            counter++;
//            element.removeClass();
//            element.addClass('animated fadeIn');        
//            //wait for animation to finish before removing classes
//            window.setTimeout( function(){
//                element.removeClass('animated fadeIn');
//            }, 2000);         
//  
        });
}

