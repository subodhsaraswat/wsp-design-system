
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
                <span class="wsp-link-text">Layout</span>
            </a>
            </li>
            <li class="wsp-nav-link">
            <a href="#">
                <span class="wsp-link-text">Content</span>
            </a>
            </li>
            <li class="wsp-nav-link wsp-has-dropdown">
            <a href="#">
                <span class="wsp-link-text">Forms</span>
            </a>
            <ul class="wsp-submenu">
                <li class="wsp-nav-link">
                    <a href="checkbox.html">Checkbox & Radio</a>
                </li>
                <li class="wsp-nav-link">
                    <a href="input.html">Input</a>
                </li>
                <li class="wsp-nav-link">
                    <a href="select.html">Select</a>
                </li>
                <li class="wsp-nav-link">
                    <a href="switch.html">Switch</a>
                </li>
                <li class="wsp-nav-link">
                    <a href="upload.html">Upload</a>
                </li>
            </ul>
            </li>
            <li class="wsp-nav-link wsp-has-dropdown">
            <a href="#">
                <span class="wsp-link-text">Components</span>
            </a>
            <ul class="wsp-submenu">
                <li class="wsp-nav-link">
                <a href="alert.html">Alert</a>
                </li>
                <li class="wsp-nav-link">
                <a href="avatar.html">Avatar</a>
                </li>
                <li class="wsp-nav-link">
                <a href="breadcrumb.html">Breadcrumbs</a>
                </li>
                <li class="wsp-nav-link">
                <a href="button.html">Button</a>
                </li>
                <li class="wsp-nav-link">
                <a href="card.html">Card</a>
                </li>

                <li class="wsp-nav-link">
                <a href="carousel.html">Carousel</a>
                </li>
                <li class="wsp-nav-link">
                <a href="collapse.html">Collapse</a>
                </li>
                <li class="wsp-nav-link">
                <a href="dropdown.html">Dropdown</a>
                </li>
                <li class="wsp-nav-link">
                <a href="flag.html">Flag</a>
                </li>
                <li class="wsp-nav-link">
                <a href="list-group.html">List Group</a>
                </li>
                <li class="wsp-nav-link">
                <a href="modal.html">Modal</a>
                </li>
                <li class="wsp-nav-link">
                <a href="navbar.html">Navbar</a>
                </li>
                <li class="wsp-nav-link">
                <a href="navigation.html">Navigation</a>
                </li>
                <li class="wsp-nav-link">
                <a href="pagination.html">Pagination</a>
                </li>
                <li class="wsp-nav-link">
                <a href="popover.html">Popover</a>
                </li>
                <li class="wsp-nav-link">
                <a href="progress.html">Progress</a>
                </li>
                <li class="wsp-nav-link">
                <a href="rating.html">Rating</a>
                </li>
                <li class="wsp-nav-link">
                <a href="stepper.html">Stepper</a>
                </li>
                <li class="wsp-nav-link">
                <a href="table.html">Table</a>
                </li>
                <li class="wsp-nav-link">
                <a href="tab.html">Tabs</a>
                </li>
                <li class="wsp-nav-link">
                <a href="timeline.html">Timeline</a>
                </li>
                <li class="wsp-nav-link">
                <a href="tooltip.html">Tooltip</a>
                </li>
                <li class="wsp-nav-link">
                <a href="tree.html">Tree</a>
                </li>
            </ul>
            </li>
            <li class="wsp-nav-link wsp-has-dropdown">
            <a href="#">
                <span class="wsp-link-text">Helpers</span>
            </a>
            <ul class="wsp-submenu">
                <li class="wsp-nav-link">
                <a href="label.html">Label</a>
                </li>
                <li class="wsp-nav-link">
                <a href="badge.html">Badge</a>
                </li>
                <li class="wsp-nav-link">
                <a href="drawer.html">Drawer</a>
                </li>
                <li class="wsp-nav-link">
                <a href="section-message.html">Section Message</a>
                </li>
                <li class="wsp-nav-link">
                <a href="skeleton.html">Skeleton</a>
                </li>
            </ul>
            </li>
            <li class="wsp-nav-link wsp-has-dropdown">
            <a href="#">
                <span class="wsp-link-text">Utilities</span>
            </a>
            <ul class="wsp-submenu">
                <li class="wsp-nav-link">
                <a href="borders.html">Borders</a>
                </li>
                <li class="wsp-nav-link">
                <a href="clearfix.html">Clearfix</a>
                </li>
                <li class="wsp-nav-link">
                <a href="colors.html">Colors</a>
                </li>
                <li class="wsp-nav-link">
                <a href="display.html">Display</a>
                </li>
                <li class="wsp-nav-link">
                <a href="flex.html">Flex</a>
                </li>
                <li class="wsp-nav-link">
                <a href="float.html">Float</a>
                </li>
                <li class="wsp-nav-link">
                <a href="position.html">Position</a>
                </li>
                <li class="wsp-nav-link">
                <a href="sizing.html">Sizing</a>
                </li>
                <li class="wsp-nav-link">
                <a href="spacing.html">Spacing</a>
                </li>
                <li class="wsp-nav-link">
                <a href="text.html">Text</a>
                </li>
                <li class="wsp-nav-link">
                <a href="vertical-align.html">Vertical-align</a>
                </li>
                <li class="wsp-nav-link">
                <a href="visibility.html">Visibility</a>
                </li>
            </ul>
            </li>
            <li class="wsp-nav-link">
            <a href="about.html">
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

