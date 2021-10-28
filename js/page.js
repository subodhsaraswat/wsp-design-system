// function Copy to clipboard
function copyToClipboard(element) {
    var $this = $(element);
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    //$(this).text("Copied")
    $temp.remove();

    $this.parent('.code').find(".copy-clipboard").text('Copied!').delay(1500).queue(function( next ){
        $(this).text('Copy'); 
        next();
    });
  }
