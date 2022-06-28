function createPopup(e) {
    const urlConfig = e.getAttribute('data-iframe-url') ? e.getAttribute('data-iframe-url') : 'https://lz.finance'
    const titleConfig = e.getAttribute('data-popup-title') ? e.getAttribute('data-popup-title') : 'LaunchZone - Swap'
    const body = document.getElementsByTagName('body')[0]

    const iframe = document.createElement('iframe')
    iframe.src = urlConfig;
    iframe.className = "lz-swap-popup__iframe";

    const buttonClose = document.createElement('span')
    buttonClose.id = "lz-swap-popup__btn-close"

    const lzIcon = createLzLogo()

    const label = document.createElement('span')
    label.className = 'lz-swap-popup__title'
    label.innerText = titleConfig

    const header = document.createElement('div')
    header.id = 'lz-swap-popup__header'

    const lzPopup = document.createElement('div')
    lzPopup.id = 'lz-swap-popup'

    header.appendChild(lzIcon)
    header.appendChild(label)
    header.appendChild(buttonClose)
    lzPopup.appendChild(header)
    lzPopup.appendChild(iframe)
    body.appendChild(lzPopup)

    buttonClose.addEventListener('click', function () {
        lzPopup.remove()
    })

    dragElement(lzPopup);
}

/**
 * create lz logo like this svg code
 *
 * <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
 * <path d="M14.1797 20.1041L20.0721 14.206L14.1778 8.3079L12.0096 10.4752L15.7317 14.206L12.0067 17.9377L14.1797 20.1041ZM9.7906 15.7178L3.89826 9.81974L9.79251 3.91974L11.9579 6.09085L8.23188 9.82261L11.9569 13.5544L9.7906 15.7178ZM0.941558 7.34051C2.09687 4.59858 4.22964 2.38364 6.92595 1.12554C9.62227 -0.132567 12.6898 -0.344103 15.5333 0.531982C18.3768 1.40807 20.7934 3.30929 22.3142 5.86668C23.8349 8.42407 24.3513 11.4552 23.7632 14.3719C23.1751 17.2886 21.5244 19.8828 19.1314 21.651C16.7384 23.4193 13.7739 24.2354 10.8131 23.9411C7.8523 23.6468 5.10642 22.2631 3.10834 20.0584C1.11026 17.8537 0.00248758 14.9854 8.15349e-06 12.01C-0.00179422 10.4062 0.318381 8.81831 0.941558 7.34051ZM21.9657 12.01C21.964 10.0361 21.3771 8.10705 20.2792 6.46666C19.1814 4.82626 17.6218 3.54819 15.7977 2.794C13.9736 2.03981 11.9668 1.84336 10.0311 2.22949C8.09532 2.61562 6.31751 3.56698 4.92237 4.96333C3.52723 6.35967 2.5774 8.1383 2.19294 10.0744C1.80848 12.0105 2.00666 14.0171 2.76242 15.8405C3.51818 17.664 4.7976 19.2224 6.43894 20.3189C8.08028 21.4153 10.0098 22.0006 11.9837 22.0006C14.6313 21.9963 17.169 20.942 19.0403 19.0691C20.9116 17.1962 21.9637 14.6575 21.9657 12.01Z" fill="url(#paint0_linear_2240_22305)"/>
 * <defs>
 * <linearGradient id="paint0_linear_2240_22305" x1="4.27526" y1="22.0099" x2="24.0105" y2="2.27464" gradientUnits="userSpaceOnUse">
 * <stop stop-color="#328B31"/>
 * <stop offset="0.130208" stop-color="#3F942F"/>
 * <stop offset="1" stop-color="#96CF24"/>
 * </linearGradient>
 * </defs>
 * </svg>
 */
function createLzLogo() {
    const svgns = 'http://www.w3.org/2000/svg';

    const svg = document.createElementNS(svgns, 'svg');
    const defs = document.createElementNS(svgns, 'defs');
    const gradient = document.createElementNS(svgns, 'linearGradient');
    const path = document.createElementNS(svgns, 'path');

    // an array of stop information for the `<linearGradient>`.
    const stops = [
        {
            color: "#328B31",
            offset: "0%"
        },{
            color: "#3F942F",
            offset: "13.0208%"
        },
        {
            color: "#96CF24",
            offset: "100%"
        }
    ];

    /**
     * Parse the array of stop information and append a `<stop>` element for each
     * stop to `<linearGradient>`.
     */
    stops.forEach(stop => {
        const el = document.createElementNS(svgns, 'stop');
        el.setAttribute('offset', stop.offset);
        el.setAttribute('stop-color', stop.color);

        gradient.appendChild(el);
    });

    gradient.id = 'lz-logo-gradient';
    gradient.setAttribute('x1', '4.27526');
    gradient.setAttribute('x2', '22.0099');
    gradient.setAttribute('y1', '24.0105');
    gradient.setAttribute('y2', '2.27464');
    defs.appendChild(gradient);

    // set up the `<path>` element.
    path.setAttribute('fill', 'url(#lz-logo-gradient)');
    path.setAttribute('d', 'M14.1797 20.1041L20.0721 14.206L14.1778 8.3079L12.0096 10.4752L15.7317 14.206L12.0067 17.9377L14.1797 20.1041ZM9.7906 15.7178L3.89826 9.81974L9.79251 3.91974L11.9579 6.09085L8.23188 9.82261L11.9569 13.5544L9.7906 15.7178ZM0.941558 7.34051C2.09687 4.59858 4.22964 2.38364 6.92595 1.12554C9.62227 -0.132567 12.6898 -0.344103 15.5333 0.531982C18.3768 1.40807 20.7934 3.30929 22.3142 5.86668C23.8349 8.42407 24.3513 11.4552 23.7632 14.3719C23.1751 17.2886 21.5244 19.8828 19.1314 21.651C16.7384 23.4193 13.7739 24.2354 10.8131 23.9411C7.8523 23.6468 5.10642 22.2631 3.10834 20.0584C1.11026 17.8537 0.00248758 14.9854 8.15349e-06 12.01C-0.00179422 10.4062 0.318381 8.81831 0.941558 7.34051ZM21.9657 12.01C21.964 10.0361 21.3771 8.10705 20.2792 6.46666C19.1814 4.82626 17.6218 3.54819 15.7977 2.794C13.9736 2.03981 11.9668 1.84336 10.0311 2.22949C8.09532 2.61562 6.31751 3.56698 4.92237 4.96333C3.52723 6.35967 2.5774 8.1383 2.19294 10.0744C1.80848 12.0105 2.00666 14.0171 2.76242 15.8405C3.51818 17.664 4.7976 19.2224 6.43894 20.3189C8.08028 21.4153 10.0098 22.0006 11.9837 22.0006C14.6313 21.9963 17.169 20.942 19.0403 19.0691C20.9116 17.1962 21.9637 14.6575 21.9657 12.01Z');

    svg.setAttribute('width', '24');
    svg.setAttribute('height', '24')

    svg.appendChild(defs);
    svg.appendChild(path);

    return svg
}

//Make the DIV element draggagle:
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "__header")) {
        document.getElementById(elmnt.id + "__header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
window.createPopup = createPopup
