const toggleBtn = document.querySelector('#toggle-nav-sm')
const navSm = document.querySelector('#nav-sm')
const navSmOverlay = document.querySelector('#nav-sm-overlay')
const pfFilters = document.querySelectorAll('#pd-filters li button')

// -ml-64
toggleBtn.onclick = (e) => {
    showHideNav()
}

navSmOverlay.onclick = (e) => showHideNav()

const toggleEl = (el, cls) => {
    return el.classList.contains(cls) ? el.classList.remove(cls) : el.classList.add(cls)
}

const showHideNav = () => {
    // overlay
    toggleEl(navSmOverlay, 'hidden')
    // nav sm
    toggleEl(navSm, 'open')
}

pfFilters.forEach((filter) => {
    filter.onclick = (e) => {

        // remove active
        const active = document.querySelector('#pd-filters button.btn-full-pd-active')
        active.classList.remove('btn-full-pd-active')

        // add active
        const target = e.target
        target.classList.add('btn-full-pd-active')

        // remove each card

    }
})

// smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
    speed : 900,
    speedAsDuration : true,
    easing: 'easeInOutCubic',
    customEasing: function (time) {
    // return <your formulate with time as a multiplier>
    return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
}
})
