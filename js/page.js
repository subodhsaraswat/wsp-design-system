
class MySidebar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="wsp-search-wrap">
            <div class="wsp-input-group">
                <div class="wsp-input-group-prepend">
                    <span class="wsp-input-group-text" id="basic-addon1">
                    <i class="wsp-icon wsp-icon-search-o"></i>
                    </span>
                </div>
                <input type="text" id="searchInput" class="wsp-form-control" onkeyup="searchComponent()" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1">
            </div>
        </div>
        <ul class="wsp-navbar-vertical" id="sideMenu">
            <li class="wsp-nav-link">
            <a href="#">
                <span class="wsp-link-text">Getting started</span>
            </a>
            </li>
            <li class="wsp-nav-link">
            <a href="#">
                <span class="wsp-link-text">Customize</span>
                <span class="dropdown-icon">
                <i class="wsp-icon wsp-icon-right-o"></i>
                </span>
            </a>
            </li>
            <li class="wsp-nav-link">
            <a href="#">
                <span class="wsp-link-text">Layout</span>
                <span class="dropdown-icon">
                <i class="wsp-icon wsp-icon-right-o"></i>
                </span>
            </a>
            </li>
            <li class="wsp-nav-link">
            <a href="#">
                <span class="wsp-link-text">Content</span>
                <span class="dropdown-icon">
                <i class="wsp-icon wsp-icon-right-o"></i>
                </span>
            </a>
            <ul class="wsp-submenu">
                <li class="wsp-submenu-link">
                <a href="table.html">Table</a>
                </li>
            </ul>
            </li>
            <li class="wsp-nav-link">
            <a href="#">
                <span class="wsp-link-text">Forms</span>
                <span class="dropdown-icon">
                <i class="wsp-icon wsp-icon-right-o"></i>
                </span>
            </a>
            <ul class="wsp-submenu">
                <li class="wsp-submenu-link">
                    <a href="input.html">Input</a>
                </li>
                <li class="wsp-submenu-link">
                    <a href="select.html">Select</a>
                </li>
                <li class="wsp-submenu-link">
                    <a href="checkbox.html">Checkbox & Radio</a>
                </li>
                <li class="wsp-submenu-link">
                    <a href="switch.html">Switch</a>
                </li>
            </ul>
            </li>
            <li class="wsp-nav-link">
            <a href="#">
                <span class="wsp-link-text">Components</span>
                <span class="dropdown-icon">
                <i class="wsp-icon wsp-icon-right-o"></i>
                </span>
            </a>
            <ul class="wsp-submenu">
                <li class="wsp-submenu-link">
                <a href="alert.html">Alert</a>
                </li>
                <li class="wsp-submenu-link">
                <a href="button.html">Button</a>
                </li>
                <li class="wsp-submenu-link">
                <a href="collapse.html">Collapse</a>
                </li>
                <li class="wsp-submenu-link">
                <a href="flag.html">Flag</a>
                </li>
                <li class="wsp-submenu-link">
                <a href="list-group.html">List Group</a>
                </li>
                <li class="wsp-submenu-link">
                <a href="tab.html">Tabs</a>
                </li>
                <li class="wsp-submenu-link">
                <a href="navbar.html">Navbar</a>
                </li>
                <li class="wsp-submenu-link">
                <a href="avatar.html">Avatar</a>
                </li>
                <li class="wsp-submenu-link">
                <a href="modal.html">Modal</a>
                </li>
                <li class="wsp-submenu-link">
                <a href="rating.html">Rating</a>
                </li>
                <li class="wsp-submenu-link">
                <a href="tooltip.html">Tooltip</a>
                </li>
                <li class="wsp-submenu-link">
                <a href="popover.html">Popover</a>
                </li>
                <li class="wsp-submenu-link">
                <a href="pagination.html">Pagination</a>
                </li>
                <li class="wsp-submenu-link">
                <a href="timeline.html">Timeline</a>
                </li>
                <li class="wsp-submenu-link">
                <a href="stepper.html">Stepper</a>
                </li>
                <li class="wsp-submenu-link">
                <a href="tree.html">Tree</a>
                </li>
                <li class="wsp-submenu-link">
                <a href="progress.html">Progress</a>
                </li>
            </ul>
            </li>
            <li class="wsp-nav-link">
            <a href="#">
                <span class="wsp-link-text">Helpers</span>
                <span class="dropdown-icon">
                <i class="wsp-icon wsp-icon-right-o"></i>
                </span>
            </a>
            <ul class="wsp-submenu">
                <li class="wsp-submenu-link">
                <a href="label.html">Label</a>
                </li>
                <li class="wsp-submenu-link">
                <a href="badge.html">Badge</a>
                </li>
                <li class="wsp-submenu-link">
                <a href="drawer.html">Drawer</a>
                </li>
                <li class="wsp-submenu-link">
                <a href="section-message.html">Section Message</a>
                </li>
                <li class="wsp-submenu-link">
                <a href="skeleton.html">Skeleton</a>
                </li>
            </ul>
            </li>
            <li class="wsp-nav-link">
            <a href="#">
                <span class="wsp-link-text">Utilities</span>
                <span class="dropdown-icon">
                <i class="wsp-icon wsp-icon-right-o"></i>
                </span>
            </a>
            </li>
            <li class="wsp-nav-link">
            <a href="#">
                <span class="wsp-link-text">Extend</span>
                <span class="dropdown-icon">
                <i class="wsp-icon wsp-icon-right-o"></i>
                </span>
            </a>
            </li>
            <li class="wsp-nav-link">
            <a href="#">
                <span class="wsp-link-text">About</span>
            </a>
            </li>
        </ul>
        `
    }
}

customElements.define('my-sidebar', MySidebar);

$(function () {
    $('.code .language-html').wrap('<div class="code-section"></div>');
});



//   function copyToClipboard(element) {
//     var $this = $(element);
//     var $temp = $("<input>");
//     $("body").append($temp);
//     $temp.val($(element).text()).select();
//     document.execCommand("copy");
//     //$(this).text("Copied")
//     $temp.remove();

//     $this.parent('.code').find(".copy-clipboard").text('Copied!').delay(1500).queue(function( next ){
//         $(this).text('Copy'); 
//         next();
//     });

// }

// function Copy to clipboard
function copyToClipboard(element) {
    
    window.getSelection().removeAllRanges();
    let range = document.createRange();
    range.selectNode(typeof element === 'string' ? document.getElementById(element) : element);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    $(element).parents('.code').find(".copy-clipboard").text('Copied!').delay(1500).queue(function (next) {
        $(this).text('Copy');
        next();
    });
}

 //Card Read More
 function myFunction() {
    var dots = document.getElementById("wsp-dots");
    var moreText = document.getElementById("wsp-more");
    var btnText = document.getElementById("wsp-read-more");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

