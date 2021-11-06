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
    $(this).parents('.wsp-alert').fadeOut(300)
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

  $(document).on('click', '.wsp-modal', function(e) {
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
    console.log(`${targetElem}`)
    $(targetElem).addClass('toggle').toggle(500);
  })
  
})
