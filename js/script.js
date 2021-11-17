$(document).ready(function () {
  // Tab
  $('.wsp-navbar-vertical li > a').on('click', function () {
    $('.wsp-navbar-vertical').find('.active').removeClass('active')
    $(this).addClass('active')
    $('.wsp-navbar-vertical')
      .find('.wsp-submenu')
      .slideUp(500) /* close submenu */
    $(this).next('.wsp-submenu').slideDown(500) /*display submenu */
  })

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
