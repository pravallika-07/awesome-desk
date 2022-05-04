$(document).ready(function(){

    $('.first-text').on('mouseover',function(){
        $('#first-card').addClass("show");
    })
    $('.first-text').on('mouseout',function(){
        $('#first-card').removeClass("show");
    })

    $('.second-text').on('mouseover',function(){
        $('#second-card').addClass("show");
    })
    $('.second-text').on('mouseout',function(){
        $('#second-card').removeClass("show");
    })


    $('.third-text').on('mouseover',function(){
        $('#third-card').addClass("show");
    })
    $('.third-text').on('mouseout',function(){
        $('#third-card').removeClass("show");
    })

    $('.fourth-text').on('mouseover',function(){
        $('#fourth-card').addClass("show");
    })
    $('.fourth-text').on('mouseout',function(){
        $('#fourth-card').removeClass("show");
    })

    
})