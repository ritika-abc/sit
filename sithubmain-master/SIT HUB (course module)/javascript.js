// $(document).ready(function() {


//     $(window).scroll(function() {    
//         var scroll = $(window).scrollTop();
    
//          //>=, not <=
//         if (scroll >= 60) {
//             //clearHeader, not clearheader - caps H
//             $(".navbar").addClass("bg-light");
//         } else {
//           $(".navbar").removeClass("bg-light");
//         }
//     })

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();

        if(scroll >= 60){
            $("#normal").addClass("bg-light");
        }
        else{
            $("#normal").removeClass("bg-light");
        }
    })
});


// stats script

$(document).ready(function() {
    checkDisplay();
  
  $(window).on('resize scroll', function() {
    checkDisplay();
  });
});

function checkDisplay(){
  $('.prg-count').each(function() {
      var $this = $(this);
      if ($this.isOnScreen()) {
        var countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 4000,
          easing: 'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        });
      }
    });
}

// ============== on scroll navbar

window.addEventListener("scroll", function(){
  var navbar = document.querySelector("#normal");
  navbar.classList.toggle("sticky", window.scrollY > 750);
});