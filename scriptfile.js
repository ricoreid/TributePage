$(document).ready(function() {
   // First photo
    $("#photo1").on({
       
        mouseenter: function() {
            $("#artistInfo1").css("display","inline-block");
            $("#artistInfo1").on("mouseenter", function(){
                $(this).css("display","inline-block");
                $(this).on("mouseleave", function(){
                    $("#artistInfo1").css("display","none");
                });
            });
        },
        
        mouseleave: function() {
            $("#artistInfo1").css("display","none");
        }
    });
    
    // Second photo
    $("#photo2").on({
       
        mouseenter: function() {
            $("#artistInfo2").css("display","inline-block");
            $("#artistInfo2").on("mouseenter", function(){
                $(this).css("display","inline-block");
                $(this).on("mouseleave", function(){
                    $("#artistInfo2").css("display","none");
                });
            });
        },
        
        mouseleave: function() {
            $("#artistInfo2").css("display","none");
        }
    });
    
    // Third photo
    $("#photo3").on({
       
        mouseenter: function() {
            $("#artistInfo3").css("display","inline-block");
            $("#artistInfo3").on("mouseenter", function(){
                $(this).css("display","inline-block");
                $(this).on("mouseleave", function(){
                    $("#artistInfo3").css("display","none");
                });
            });
        },
        
        mouseleave: function() {
            $("#artistInfo3").css("display","none");
        }
    });
    
    // Forth photo
    $("#photo4").on({
       
        mouseenter: function() {
            $("#artistInfo4").css("display","inline-block");
            $("#artistInfo4").on("mouseenter", function(){
                $(this).css("display","inline-block");
                $(this).on("mouseleave", function(){
                    $("#artistInfo4").css("display","none");
                });
            });
        },
        
        mouseleave: function() {
            $("#artistInfo4").css("display","none");
        }
    });
    
    // Fifth photo
    $("#photo5").on({
       
        mouseenter: function() {
            $("#artistInfo5").css("display","inline-block");
            $("#artistInfo5").on("mouseenter", function(){
                $(this).css("display","inline-block");
                $(this).on("mouseleave", function(){
                    $("#artistInfo5").css("display","none");
                });
            });
        },
        
        mouseleave: function() {
            $("#artistInfo5").css("display","none");
        }
    });
    // Sixth photo
    $("#photo6").on({
       
        mouseenter: function() {
            $("#artistInfo6").css("display","inline-block");
            $("#artistInfo6").on("mouseenter", function(){
                $(this).css("display","inline-block");
                $(this).on("mouseleave", function(){
                    $("#artistInfo6").css("display","none");
                });
            });
        },
        
        mouseleave: function() {
            $("#artistInfo6").css("display","none");
        }
    }); // end function for sixth photo
}); // End Document.ready