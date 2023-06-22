$(document).ready(function(){

    const certContainer = $('#certifications-container')
    const awardsContainer = $('#awards-container')
    const pdContainer = $('#pd-container')

    // display certificates
    displayCol(certContainer, certificates)
    displayCol(awardsContainer, awards)
    displayCol(pdContainer, projects_designs)

    // filter projects and designs
    $('.list').click(function(){
        const value = $(this).attr('data-filter')
        console.log(value)
        if(value == 'all'){
            $('.pd-card').show('500')
        }
        else{
            $('.pd-card').not('.' + value).hide('500')
            $('.pd-card').filter('.' + value).show('500')
        }
    })

    // nav lg menu add active class
    $('#nav-lg-menus li').click(function(){
        const target = $(this)
        const inActiveState = $('#nav-lg-menus li.menu-list-active').removeClass('menu-list-active')

        target.hasClass('menu-list-active') ? target.removeClass('menu-list-active') : target.addClass('menu-list-active')
    })

    // nav sm menu add active class
    $('#nav-sm-menus li').click(function(){
        const target = $(this)
        const inActiveState = $('#nav-sm-menus li.menu-list-sm-active').removeClass('menu-list-sm-active')

        target.hasClass('menu-list-sm-active') ? target.removeClass('menu-list-sm-active') : target.addClass('menu-list-sm-active')
    })

    // window scroll
    $(window).scroll(function(scroll){

        const navLg = $('#nav-lg')
        const body = $('body')

        let home = $('#main').innerHeight()
        let about = $('#about').innerHeight() + home
        let services = $('#services').innerHeight() + about
        let pd = $('#projects_designs').innerHeight() + services

        // add box shadow to nav once scroll triggers
        $("html").scrollTop() > 64 ? navLg.addClass('box-shadow') : navLg.removeClass('box-shadow')

        // home
        if($("html").scrollTop() < home){
            removeActiveClass()
            addClassWhenTriggered('home-menu-lg', 'menu-list-active')
            addClassWhenTriggered('home-menu-sm', 'menu-list-sm-active')
            // navLg.removeClass('box-shadow')
        }
        // about
        if($("html").scrollTop() > home){
            removeActiveClass()
            addClassWhenTriggered('about-menu-lg', 'menu-list-active')
            addClassWhenTriggered('about-menu-sm', 'menu-list-sm-active')
            // navLg.addClass('box-shadow')

        }
        // about
        if($("html").scrollTop() > about){
            removeActiveClass()
            addClassWhenTriggered('services-menu-lg', 'menu-list-active')
            addClassWhenTriggered('services-menu-sm', 'menu-list-sm-active')
        }
        // about
        if($("html").scrollTop() > services){
            removeActiveClass()
            addClassWhenTriggered('pd-menu-lg', 'menu-list-active')
            addClassWhenTriggered('pd-menu-sm', 'menu-list-sm-active')
        }
        // about
        if($("html").scrollTop() > pd){
            removeActiveClass()
            addClassWhenTriggered('ac-menu-lg', 'menu-list-active')
            addClassWhenTriggered('ac-menu-sm', 'menu-list-sm-active')
        }

    })

    // remove classes
    function removeActiveClass() {
        $('.menu-list-sm-active').removeClass('menu-list-sm-active')
        $('.menu-list-active').removeClass('menu-list-active')
    }

    // add class when scroll
    function addClassWhenTriggered(el, clss){
        return $(`#${el}`).addClass(clss)
    }

    // certification display
    function displayCol(container, array)
    {
        $.each(array, function(i, value){

            if (value.type == 'award')
            {
                container.append(`
                <!-- card -->
                    <li class="card">
                        <img src="../assets/awards/${value.src}.jpg" alt="" class="object-cover shrink-0">

                        <!-- text -->
                        <div class="mt-4">
                            <h3 class="text-base text-white capitalize">${value.title}</h3>
                        </div>

                    </li>
                `)
            }
            else if (value.type == 'pd')
            {
                container.append(`
                <!-- card -->
                <li class="pd-card card ${value.filter}">
                    <img src="../assets/projects_and_designs/${value.src}" alt="" class=" object-contain shrink-0">
                    <!-- text -->
                    <div class="mt-5">
                        <h4 class="text-[15px] lg:text-base text-white capitalize">${value.title}</h4>
                        <p class="text-white-opac-30 mt-2 text-justify text-[14px] leading-5">
                            ${value.subtitle}
                        </p>
                    </div>
                </li>
                `)
            }
            else 
            {
                container.append(`
                <!-- card -->
                    <li class="card relative">
                        <img src="../assets/certificates/${value}" alt="" class="object-cover shrink-0">
                    </li>
                `)

            }
        })
    }

})