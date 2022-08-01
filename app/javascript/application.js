// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"

// import "jquery"



// --------
  // Popovers
  // --------
  // Instantiate all popovers in a docs or StackBlitz page
  document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(popover => {
      new bootstrap.Popover(popover)
    })



      $("#btn1").click(function(){
          $(this).css('background-color', 'red');
          alert('Мир jQuery');
      });
