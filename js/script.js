$(document).ready(function () {
  // Sidebar
  var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
  $('.wsp-navbar-vertical .wsp-nav-link').click(function () {
    // Check to see the initial state of the element
    var isActive = $(this).hasClass('active');
    $(this).parents(".wsp-navbar-vertical").find('.wsp-nav-link').removeClass('active'); // Just remove class from all folder  
    isActive ? $(this).removeClass('active') : $(this).addClass('active')
  })
  $('.wsp-submenu a, .wsp-nav-link a').each(function() {
    if (this.href === path) {
     $(this).addClass('active');
     $(this).closest(".wsp-has-dropdown").addClass("active");
    }
   });


  // close Alert
  $('.wsp-close').on('click', function () {
    $elem = $(this);
    //close Alert
    if ($elem.parents('.wsp-alert').length) {
      $elem.parents('.wsp-alert').fadeOut(300)
    }
    //close Flag
    else if ($elem.parents('.wsp-flag').length) {
      $elem.parents('.wsp-flag').fadeOut(300)
    }
    //close Label
    else if ($elem.parents('.wsp-label').length) {
      $elem.parents('.wsp-label').fadeOut(300)
    }

  })

  // open Left Drawer
  $('#openLeftDrawer').click(function () {
    $('#leftDwawer').toggle(300)
    $(this).text(
      $(this).text() == 'Open Left Drawer'
        ? 'Close Left Drawer'
        : 'Open Left Drawer',
    )
  })
  $('#closeLeftDrawer').click(function () {
    $('#leftDwawer').hide(200)
    $('#openLeftDrawer').text(
      $('#openLeftDrawer').text() == 'Open Left Drawer'
        ? 'Close Left Drawer'
        : 'Open Left Drawer',
    )
  })
  // open Right Drawer
  $('#openRightDrawer').click(function () {
    $('#rightDwawer').toggle(300)
    $(this).text(
      $(this).text() == 'Open Right Drawer'
        ? 'Close Right Drawer'
        : 'Open Right Drawer',
    )
  })
  $('#closeRightDrawer').click(function () {
    $('#rightDwawer').hide(200)
    $('#openRightDrawer').text(
      $('#openRightDrawer').text() == 'Open Right Drawer'
        ? 'Close Right Drawer'
        : 'Open Right Drawer',
    )
  })

  //toggle menu
  $('#toogleMenu').click(function () {
    $('#sideBar').toggle(500)
    $('#mainContent').toggleClass('has-sidebar')
  })

  // Input Group focussed add class Focussed
  $('.wsp-input-group .wsp-form-control')
    .focus(function () {
      $(this).parent('.wsp-input-group').addClass('focused')
    })
    .blur(function () {
      $(this).parent('.wsp-input-group').removeClass('focused')
    })

  $('.wsp-input-group .wsp-form-control.is-valid')
    .parent('.wsp-input-group')
    .addClass('is-valid')
  $('.wsp-input-group .wsp-form-control.is-invalid')
    .parent('.wsp-input-group')
    .addClass('is-invalid')

  // Input Number with Spinner 
  $('[data-toggle="minus"]').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('[data-toggle="plus"]').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  // modal

  $('[data-toggle="modal"]').click(function () {
    var targetElem = $(this).attr('data-target')
    console.log(`${targetElem}`)
    $(targetElem).addClass('show').show()
    $(document.body).addClass('wsp-modal-open')
    var overlay = jQuery("<div class='wsp-modal-backdrop fade show'></div>")
    overlay.appendTo(document.body)
  })

  $('[data-dismiss="modal"]').click(function () {
    $(this).parents('.wsp-modal').removeClass('show').hide()
    $(document.body).removeClass('wsp-modal-open')
    $('.wsp-modal-backdrop').remove()
  })

  $(document).on('click', '.wsp-modal', function (e) {
    console.log('hi')
    var clicked = $(e.target) //get the element clicked
    console.log(clicked)
    if (clicked.is('.wsp-modal-dialog') || clicked.parents().is('.wsp-modal')) {
      return // click happened within the dialog, do nothing here
    } else {
      // click was outside the dialog, so close it
      $('.wsp-modal').removeClass('show').hide()
      $(document.body).removeClass('wsp-modal-open')
      $('.wsp-modal-backdrop').remove()
    }
  })

  // Collpase
  $('#wsp-toggle').click(function () {
    $('#collapse').toggle(300);
  })

  // Accordian
  $('[data-toggle="wsp-accordian"]').click(function () {
    var targetElem = $(this).attr('href')
    $(targetElem).addClass('toggle').toggle(500);
  })

  // Popover
  $('.open-popover').click(function () {
    $(this).next('.wsp-popover-content').fadeIn(300);

  });

  // Dropdown
  $(".wsp-dropdown-toggle").click(function () {
    $('.wsp-dropdown-menu').toggle(500);
  });

  // ------------  File upload BEGIN ------------
  $('[data-upload="uploadButton"]').on('change', function (event) {
    var files = event.target.files;
    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      $("<div class='wsp-file-value'><div class='wsp-file-value-text'><i class='wsp-icon wsp-icon-attach'></i>" + file.name + "</div><div class='wsp-file-remove' data-id='" + file.name + "' ><i class='wsp-icon wsp-icon-bin-o'></i></div></div>").insertAfter($(this).closest('#fileInput'));
    }
  });

  //Click to remove item
  $('body').on('click', '.wsp-file-remove', function () {
    $(this).parents('.wsp-file-value').remove();
  });
  // ------------ File upload END ------------ 


  // File Upload Drag & Drop
  document.querySelectorAll(".wsp-drop-zone__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".wsp-drop-zone");

    dropZoneElement.addEventListener("click", (e) => {
      inputElement.click();
    });

    inputElement.addEventListener("change", (e) => {
      if (inputElement.files.length) {
        updateThumbnail(dropZoneElement, inputElement.files[0]);
      }
    });

    dropZoneElement.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropZoneElement.classList.add("wsp-drop-zone--over");
    });

    ["dragleave", "dragend"].forEach((type) => {
      dropZoneElement.addEventListener(type, (e) => {
        dropZoneElement.classList.remove("wsp-drop-zone--over");
      });
    });

    dropZoneElement.addEventListener("drop", (e) => {
      e.preventDefault();

      if (e.dataTransfer.files.length) {
        inputElement.files = e.dataTransfer.files;
        updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
      }

      dropZoneElement.classList.remove("wsp-drop-zone--over");
    });
  });

  /**
   * Updates the thumbnail on a drop zone element.
   *
   * @param {HTMLElement} dropZoneElement
   * @param {File} file
   */
  function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".wsp-drop-zone__thumb");

    // First time - remove the prompt
    if (dropZoneElement.querySelector(".wsp-drop-zone__prompt")) {
      dropZoneElement.querySelector(".wsp-drop-zone__prompt").remove();
    }

    // First time - there is no thumbnail element, so lets create it
    if (!thumbnailElement) {
      thumbnailElement = document.createElement("div");
      thumbnailElement.classList.add("wsp-drop-zone__thumb");
      dropZoneElement.appendChild(thumbnailElement);
    }

    thumbnailElement.dataset.label = file.name;

    // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
      };
    } else {
      thumbnailElement.style.backgroundImage = null;
    }
  }

})

$(document).mouseup(function (e) {
  var container = $(".wsp-popover-content");

  // if the target of the click isn't the container nor a descendant of the container
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    container.hide();
  }
});



// First let's set the colors of our sliders
const settings = {
  fill: '#5156BE',
  background: '#e9e9ef'
}

// First find all our sliders
const sliders = document.querySelectorAll('.range-slider');

// Iterate through that list of sliders
// ... this call goes through our array of sliders [slider1,slider2,slider3] and inserts them one-by-one into the code block below with the variable name (slider). We can then access each of wthem by calling slider
Array.prototype.forEach.call(sliders, (slider) => {
  // Look inside our slider for our input add an event listener
  //   ... the input inside addEventListener() is looking for the input action, we could change it to something like change
  slider.querySelector('input').addEventListener('input', (event) => {
    // 1. apply our value to the span
    slider.querySelector('span').innerHTML = event.target.value;
    // 2. apply our fill to the input
    applyFill(event.target);
  });
  // Don't wait for the listener, apply it now!
  applyFill(slider.querySelector('input'));

});

// This function applies the fill to our sliders by using a linear gradient background
function applyFill(slider) {
  // Let's turn our value into a percentage to figure out how far it is in between the min and max of our input
  const percentage = 100 * (slider.value - slider.min) / (slider.max - slider.min);
  // now we'll create a linear gradient that separates at the above point
  // Our background color will change here
  const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage + 0.1}%)`;
  slider.style.background = bg;
}


/* multiple range slider */
window.addEventListener('DOMContentLoaded', () => {
  var dualRange = document.querySelector(".dual-range");
  if (dualRange != null) {
    new dualRangeSlider(dualRange)
  }
})

/* Tree */
$.fn.extend({
  treed: function (o) {

    var openedClass = 'wsp-icon wsp-icon-folder-minus';
    var closedClass = 'wsp-icon wsp-icon-folder-plus';

    if (typeof o != 'undefined') {
      if (typeof o.openedClass != 'undefined') {
        openedClass = o.openedClass;
      }
      if (typeof o.closedClass != 'undefined') {
        closedClass = o.closedClass;
      }
    };

    //initialize each of the top levels
    var tree = $(this);
    tree.addClass("tree");
    tree.find('li').has("ul").each(function () {
      var branch = $(this); //li with children ul
      branch.prepend("<i class='" + closedClass + "'></i>");
      branch.addClass('branch');
      branch.on('click', function (e) {
        if (this == e.target) {
          var icon = $(this).children('i:first');
          icon.toggleClass(openedClass + " " + closedClass);
          $(this).children().children().toggle();
        }
      })
      branch.children().children().toggle();
    });
    //fire event from the dynamically added icon
    tree.find('.branch .indicator').each(function () {
      $(this).on('click', function () {
        $(this).closest('li').click();
      });
    });
    //fire event to open branch if the li contains an anchor instead of text
    tree.find('.branch>a, .branch>i').each(function () {
      $(this).on('click', function (e) {
        $(this).closest('li').click();
        e.preventDefault();
      });
    });
  }
});

//Initialization of treeviews
$('#wspTree').treed({ openedClass: 'wsp-icon wsp-icon-folder-minus', closedClass: 'wsp-icon wsp-icon-folder-plus' });






class dualRangeSlider {
  constructor(rangeElement) {
    this.range = rangeElement
    this.min = Number(rangeElement.dataset.min)
    this.max = Number(rangeElement.dataset.max)
    this.handles = [...this.range.querySelectorAll(".handle")]
    this.startPos = 0;
    this.activeHandle;

    this.handles.forEach(handle => {
      handle.addEventListener("mousedown", this.startMove.bind(this))
      handle.addEventListener("touchstart", this.startMoveTouch.bind(this))
    })

    window.addEventListener("mouseup", this.stopMove.bind(this))
    window.addEventListener("touchend", this.stopMove.bind(this))
    window.addEventListener("touchcancel", this.stopMove.bind(this))
    window.addEventListener("touchleave", this.stopMove.bind(this))

    const rangeRect = this.range.getBoundingClientRect();
    const handleRect = this.handles[0].getBoundingClientRect()
    this.range.style.setProperty("--x-1", "0px");
    this.range.style.setProperty("--x-2", rangeRect.width - handleRect.width / 2 + "px");
    this.handles[0].dataset.value = this.range.dataset.min;
    this.handles[1].dataset.value = this.range.dataset.max;
  }

  startMoveTouch(e) {
    const handleRect = e.target.getBoundingClientRect()
    this.startPos = e.touches[0].clientX - handleRect.x;
    this.activeHandle = e.target;
    this.moveTouchListener = this.moveTouch.bind(this)
    window.addEventListener("touchmove", this.moveTouchListener);
  }

  startMove(e) {
    this.startPos = e.offsetX;
    this.activeHandle = e.target;
    this.moveListener = this.move.bind(this)
    window.addEventListener("mousemove", this.moveListener);
  }

  moveTouch(e) {
    this.move({ clientX: e.touches[0].clientX })
  }

  move(e) {
    const isLeft = this.activeHandle.classList.contains("left")
    const property = isLeft ? "--x-1" : "--x-2";
    const parentRect = this.range.getBoundingClientRect();
    const handleRect = this.activeHandle.getBoundingClientRect();
    let newX = e.clientX - parentRect.x - this.startPos;
    if (isLeft) {
      const otherX = parseInt(this.range.style.getPropertyValue("--x-2"));
      newX = Math.min(newX, otherX - handleRect.width)
      newX = Math.max(newX, 0 - handleRect.width / 2)
    } else {
      const otherX = parseInt(this.range.style.getPropertyValue("--x-1"));
      newX = Math.max(newX, otherX + handleRect.width)
      newX = Math.min(newX, parentRect.width - handleRect.width / 2)
    }
    this.activeHandle.dataset.value = this.calcHandleValue((newX + handleRect.width / 2) / parentRect.width)
    this.range.style.setProperty(property, newX + "px");

  }

  calcHandleValue(percentage) {
    return Math.round(percentage * (this.max - this.min) + this.min)
  }

  stopMove() {
    window.removeEventListener("mousemove", this.moveListener);
    window.removeEventListener("touchmove", this.moveTouchListener);
  }

}

//Progress-bar

function increase() {
  // Change the variable to modify the speed of the number increasing from 0 to (ms)
  let SPEED = 40;
  // Retrieve the percentage value
  let limit = parseInt(document.getElementsByClassName("value").innerHTML, 10);

  for (let i = 0; i <= limit; i++) {
    setTimeout(function () {
      document.getElementsByClassName("value").innerHTML = i + "%";
    }, SPEED * i);
  }
}

//Dropdown

// function myFunction() {
//   document.getElementById("wsp-drop").classList.toggle("show");
// }

// // Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.wsp-dropdown-toggle')) {
//     let dropdowns = document.getElementsByClassName("wsp-dropdown-menu");
//     let i;
//     for (i = 0; i < dropdowns.length; i++) {
//       let openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

increase();


//Search List
function searchComponent() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("sideMenu");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
