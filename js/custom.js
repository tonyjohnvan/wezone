(function ($) {

    'use strict';

    jQuery(document).ready(function () {


        /*********************************************
         -    DEVICES DETECTING    -
         **********************************************/

        var isMobile = {
            Android: function () {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function () {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function () {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function () {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function () {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function () {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };

        if (isMobile.any()) {
            $('html').addClass('mobile');
        } else {
            $('html').addClass('no-mobile');
        }


        /*********************************************
         -    DEVICES VIEWPORT WIDTH    -
         **********************************************/

        var $windowWidth = {
            any: function () {
                return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            }
        };

        /*********************************************
         -    ADD SMOOTH SCROLL IN ONE PAGE    -
         **********************************************/

        function smoothWide() {

            var aScroll = $('.scrollTo'),
                navH = $('.WeZone-menu').height();

            //    smoothLink.bind('click', function (event) {


            aScroll.on("click", function (event) {
                var smoothLink = $(this).attr("href");
                event.preventDefault();

                $(smoothLink).velocity("scroll", {
                    duration: 800,
                    easing: [0.77, 0, 0.175, 1],
                    offset: -50
                });
            });

        }


        function smoothMobile() {

            var smoothLinkMini = $('.scrollToMini'),
                menuMobile = $('.WeZone-menu-mobile'),
                navMHeight = $('.mobile-wrap').height(),
                $button = $('.button-trigger');

            menuMobile.on('click', 'a', function (event) {
                var smoothLinkMini = $(this).attr('href');
                event.preventDefault();
                $button.removeClass('active');

                $(smoothLinkMini).velocity('scroll', {
                    duration: 800,
                    delay: 500,
                    easing: [0.77, 0, 0.175, 1],
                    //                offset: - (navMHeight)
                });
            });

        }


        /*********************************************
         -    HIDE MENU WHEN CLICK ON SMALL DEVICES    -
         **********************************************/

        function hideList() {
            var $menu = $('.mobile-wrap[data-one-page="true"]'),
                $menuItem = $('.WeZone-menu-mobile').children(),
                $canvasWidth = $(window).width();


            $menuItem.each(function () {

                $(this).children('a').on('click', function () {
                    $(this).parents('.mobile-wrap').slideUp(500);
                });

            });
        }

        /*********************************************
         -    SHOW HID MENU ON ONE PAGE    -
         **********************************************/

        function showHideMenu() {
            var $button = $('.button-trigger'),
                $WeZoneMobile = $('.mobile-wrap'),
                MQ = 992;
            //        $WeZoneMobile.hide();
            $(window).on('debouncedresize', function () {
                if ($windowWidth.any() > 992) {
                    $WeZoneMobile.hide();

                }
            });


            if ($WeZoneMobile.data('has-button') === true) {
                $button.on('click', function (event) {
                    $(this).parent().siblings('.mobile-wrap').stop(true, true).slideToggle(500);
                    $(this).toggleClass('active');
                    return false;
                    event.preventDefault();
                });
            }
        }

        /*********************************************
         -    SHRINK MENU    -
         **********************************************/


        function shrink() {
            $(window).on('scroll', function (e) {
                var distanceY = $(window).pageYOffset || $(document).scrollTop(),
                    $this = $('.nav-wrap'),
                    navOffset = $this.outerHeight(),
                    shrinkOn = ($this.data('set-offset')) ? $this.data('set-offset') : navOffset,
                    isShrink = $(".is-shrink");

                if (distanceY > shrinkOn) {
                    isShrink.addClass("smaller");

                } else {
                    isShrink.removeClass("smaller");
                }
            });
        }


        /*********************************************
         -    ADD BG TO MENU ON SCROLL    -
         **********************************************/

        function headerFill() {
            $(window).on('scroll', function (e) {

                var distanceY = $(window).pageYOffset || $(document).scrollTop(),
                    navWrap = $('.nav-wrap'),
                    navHeight = $('.nav-wrap').outerHeight();

                if (distanceY > navHeight && navWrap.data("is-fill") === true) {
                    navWrap.addClass('is-fill');
                } else {
                    navWrap.removeClass('is-fill');
                }

            });

        }


        /*********************************************
         -    REVOLUTION SLIDER    -
         **********************************************/

        function revSlider() {

            var tpj = jQuery;
            var revapi104;
            tpj(document).ready(function () {
                if (tpj("#rev_slider_104_1").length) {
                    if (tpj("#rev_slider_104_1").revolution == undefined) {
                        revslider_showDoubleJqueryError("#rev_slider_104_1");
                    } else {
                        revapi104 = tpj("#rev_slider_104_1").show().revolution({
                            sliderType: "standard",
                            jsFileLocation: "revolution/js/",
                            sliderLayout: "fullscreen",
                            dottedOverlay: "none",
                            delay: 9000,
                            navigation: {
                                keyboardNavigation: "off",
                                keyboard_direction: "horizontal",
                                mouseScrollNavigation: "off",
                                onHoverStop: "off",
                                touch: {
                                    touchenabled: "on",
                                    swipe_threshold: 75,
                                    swipe_min_touches: 1,
                                    swipe_direction: "horizontal",
                                    drag_block_vertical: false
                                }
                                ,
                                bullets: {
                                    enable: true,
                                    hide_onmobile: true,
                                    hide_under: 960,
                                    style: "zeus",
                                    hide_onleave: false,
                                    direction: "horizontal",
                                    h_align: "right",
                                    v_align: "bottom",
                                    h_offset: 80,
                                    v_offset: 50,
                                    space: 5,
                                    tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span><span class="tp-bullet-title">{{title}}</span>'
                                }
                            },
                            responsiveLevels: [1240, 1024, 778, 480],
                            gridwidth: [1240, 1024, 778, 480],
                            gridheight: [868, 768, 960, 720],
                            lazyType: "none",
                            parallax: {
                                type: "mouse",
                                origo: "slidercenter",
                                speed: 2000,
                                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
                                disable_onmobile: "on"
                            },
                            shadow: 0,
                            spinner: "off",
                            stopLoop: "on",
                            stopAfterLoops: 0,
                            stopAtSlide: 1,
                            shuffle: "off",
                            autoHeight: "off",
                            fullScreenAlignForce: "off",
                            fullScreenOffsetContainer: "",
                            fullScreenOffset: "60px",
                            disableProgressBar: "on",
                            hideThumbsOnMobile: "off",
                            hideSliderAtLimit: 0,
                            hideCaptionAtLimit: 0,
                            hideAllCaptionAtLilmit: 0,
                            debugMode: false,
                            fallbacks: {
                                simplifyAll: "off",
                                nextSlideOnWindowFocus: "off",
                                disableFocusListener: false,
                            }
                        });
                        var newCall = new Object(),
                            cslide;

                        newCall.callback = function () {
                            var proc = revapi104.revgetparallaxproc(),
                                fade = 1 + proc,
                                scale = 1 + (Math.abs(proc) / 10);

                            punchgs.TweenLite.set(revapi104.find('.slotholder, .rs-background-video-layer'), {
                                opacity: fade,
                                scale: scale
                            });
                        }
                        newCall.inmodule = "parallax";
                        newCall.atposition = "start";

                        revapi104.bind("revolution.slide.onloaded", function (e) {
                            revapi104.revaddcallback(newCall);
                        });
                    }
                }
            });
            /*ready*/


        }

        function revSliderCarousel() {
            var tpj = jQuery;

            var revapi16;
            tpj(document).ready(function () {
                if (tpj("#rev_slider_16_1").length) {
                    if (tpj("#rev_slider_16_1").revolution == undefined) {
                        revslider_showDoubleJqueryError("#rev_slider_16_1");
                    } else {
                        revapi16 = tpj("#rev_slider_16_1").show().revolution({
                            sliderType: "carousel",
                            jsFileLocation: "revolution/js/",
                            sliderLayout: "fullwidth",
                            dottedOverlay: "none",
                            delay: 9000,
                            navigation: {
                                keyboardNavigation: "off",
                                keyboard_direction: "horizontal",
                                mouseScrollNavigation: "off",
                                onHoverStop: "off",
                                tabs: {
                                    style: "zeus",
                                    enable: true,
                                    width: 150,
                                    height: 30,
                                    min_width: 100,
                                    wrapper_padding: 0,
                                    wrapper_color: "transparent",
                                    wrapper_opacity: "0",
                                    tmp: '<span class="tp-tab-title">{{title}}</span>',
                                    visibleAmount: 3,
                                    hide_onmobile: true,
                                    hide_under: 480,
                                    hide_onleave: false,
                                    hide_delay: 200,
                                    direction: "horizontal",
                                    span: true,
                                    position: "inner",
                                    space: 1,
                                    h_align: "center",
                                    v_align: "top",
                                    h_offset: 0,
                                    v_offset: 30
                                }
                            },
                            carousel: {
                                horizontal_align: "center",
                                vertical_align: "center",
                                fadeout: "on",
                                vary_fade: "on",
                                maxVisibleItems: 3,
                                infinity: "on",
                                space: 0,
                                stretch: "off"
                            },
                            responsiveLevels: [1240, 1024, 778, 480],
                            gridwidth: [800, 640, 480, 480],
                            gridheight: [720, 720, 480, 360],
                            lazyType: "none",
                            parallax: {
                                type: "scroll",
                                origo: "enterpoint",
                                speed: 400,
                                levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
                            },
                            shadow: 0,
                            spinner: "off",
                            stopLoop: "on",
                            stopAfterLoops: 0,
                            stopAtSlide: 1,
                            shuffle: "off",
                            autoHeight: "off",
                            disableProgressBar: "on",
                            hideThumbsOnMobile: "off",
                            hideSliderAtLimit: 0,
                            hideCaptionAtLimit: 0,
                            hideAllCaptionAtLilmit: 0,
                            debugMode: false,
                            fallbacks: {
                                simplifyAll: "off",
                                nextSlideOnWindowFocus: "off",
                                disableFocusListener: false,
                            }
                        });
                    }
                }
            });
            /*ready*/
        }

        /*********************************************
         -    BX SLIDER    -
         **********************************************/

        function regularSlider() {
            $('.bx-slider').each(function () {
                var $this = $(this),

                    $mode = $this.data('bx-mode'),
                    $autoPlay = $this.data('bx-auto-play'),
                    $autoDelay = $this.data('bx-delay'),
                    $autoHover = $this.data('bx-auto-hover'),
                    $speed = $this.data('bx-speed'),
                    $easing = (!$('body').hasClass('touchy')) ? $this.data('bx-easing') : null,
                    $captions = $this.data('bx-captions'),
                    $addVideo = $this.data('bx-video'),
                    $control = $this.data('bx-control'),
                    $prevSelector = $this.data('bx-prev-selector'),
                    $nextSelector = $this.data('bx-next-selector'),
                    $pager = $this.data('bx-pager'),
                    $height = $this.parent().height(),
                    $pauseAmount = $this.data('pause-amount'),
                    $pagerCustom = $this.data('bx-pager-custom'),
                    $maxSlide = $this.data('max-slide'),
                    $moveSlide = $this.data('move-slide'),
                    $slideMargin = $this.data('slide-margin'),
                    $slideWidth = function () {

                        if ($this.data('bx-carousel') === true && $(window).width() > 1200) {
                            var $w = $this.parent().width(),
                                columnNum = $maxSlide,
                                slideWidth = 0;
                            slideWidth = Math.floor($w / columnNum - $slideMargin);

                        } else {
                            slideWidth = $this.data('slide-width')
                        }

                        return slideWidth;

                    },

                    $buildPager = function (sliderpager) {
                        switch (sliderpager) {
                            case 0:
                                return '<i class="fa fa-flask fa-2x"></i>';
                            case 1:
                                return '<i class="fa fa-puzzle-piece fa-2x"></i>';
                            case 2:
                                return '<i class="fa fa-gears fa-2x"></i>';
                            case 3:
                                return '<i class="fa fa-magic fa-2x"></i>';
                            case 4:
                                return '<i class="fa fa-rocket fa-2x"></i>';
                        }
                    },
                    $mainBuildpager = ($this.data('build-pager') === 1) ? $buildPager : null;


                if ($('.bx-slider').length) {
                    $this.bxSlider({
                        adaptiveHeight: true,
                        mode: $mode,
                        auto: $autoPlay,
                        slideWidth: $slideWidth(),
                        minSlides: 1,
                        maxSlides: $maxSlide,
                        moveSlides: $moveSlide,
                        slideMargin: $slideMargin,
                        autoDelay: $autoDelay,
                        pause: $pauseAmount,
                        autoHover: $autoHover,
                        easing: $easing,
                        video: $addVideo,
                        controls: $control,
                        pager: $pager,
                        useCSS: false,
                        speed: $speed,
                        nextSelector: $nextSelector,
                        prevSelector: $prevSelector,
                        nextText: '<i class="ti-arrow-right"></i>',
                        prevText: '<i class="ti-arrow-left"></i>',
                        touchEnabled: true,
                        swipeThreshold: 50,
                        oneToOneTouch: true,
                        pagerCustom: $pagerCustom,
                        buildPager: $mainBuildpager,
                        onSliderLoad: function () {


                        }
                    }).animate({
                        'opacity': 1
                    }, 1300);
                }

            });

        }

        /*********************************************
         -    MASTER SLIDER Ajax    -
         **********************************************/

        function masterSliderAjax() {

            $('.master-slider-ajax').each(function () {
                var $this = $(this),
                    slider = new MasterSlider();

                if ($this.length) {

                    /* circletimer control */

                    slider.control(($this.data('control-circletimer') === true) ? 'circletimer' : false, {
                        color: $this.data('circletimer-color'),
                        stroke: $this.data('circletimer-strok'),
                        radius: $this.data('circletimer-radius'),
                        hideUnder: $this.data('circletimer-hideunder')
                    });

                    /* thumblist control */

                    slider.control(($this.data('control-thumblist') === true) ? 'thumblist' : false, {
                        autohide: ($this.data('thumbs-autohide')) ? true : false,
                        dir: $this.data('thumbs-dir'),
                        type: $this.data('thumbs-type'),
                        width: $this.data('thumbs-width'),
                        height: $this.data('thumbs-height'),
                        align: $this.data('thumbs-align'),
                        space: $this.data('thumbs-space'),
                        margin: $this.data('thumbs-margin'),
                        inset: $this.data('thumbs-inset'),
                        hideUnder: ($this.data('thumbs-hideunder')) ? $this.data('thumbs-hideunder') : 600
                    });

                    /* slideinfo control */

                    slider.control(($this.data('control-slideinfo') === true) ? 'slideinfo' : false, {
                        insertTo: $this,
                        autohide: $this.data('slideinfo-autohide'),
                        align: $this.data('slideinfo-align'),
                        size: $this.data('slideinfo-size'),
                        margin: $this.data('slideinfo-margin'),
                        hideUnder: $this.data('slideinfo-hideunder')

                    });

                    /* arrows control */

                    slider.control(($this.data('control-arrows') === true) ? 'arrows' : false, {
                        hideUnder: $this.data('arrows-hide'),
                        autohide: $this.data('arrows-autohide'),
                        insertTo: $this.data('insert-arrow-to')
                    });

                    /* bullets control */

                    slider.control(($this.data('control-bullets') === true) ? 'bullets' : false, {
                        dir: $this.data('bullets-dir'),
                        align: $this.data('bullets-align')
                    });

                    /* timebar control */

                    slider.control(($this.data('control-timebar') === true) ? 'timebar' : false, {
                        insertTo: $this,
                        color: $this.data('timebar-color'),
                        align: $this.data('timebar-align')
                    });

                    /* lightbox control */

                    slider.control(($this.data('control-lightbox') === true) ? 'lightbox' : false);

                    /* scrollbar control */

                    slider.control(($this.data('control-scrollbar') === true) ? 'scrollbar' : false, {
                        insertTo: $this,
                        dir: $this.data('scrollbar-dir'),
                        color: $this.data('scrollbar-color'),
                        width: $this.data('scrollbar-width'),
                        align: $this.data('scrollbar-align')
                    });


                    /* main setup */

                    slider.setup($this, {
                        width: $this.data('width'),
                        height: $this.data('height'),
                        preload: 'all',
                        autoplay: $this.data('autoplay'),
                        layout: $this.data('layout'),
                        fillMode: $this.data('fill-mode'),
                        view: $this.data('view'),
                        space: $this.data('space'),
                        loop: $this.data('loop'),
                        wheel: $this.data('wheel'),
                        keyboard: $this.data('keyboard'),
                        speed: $this.data('speed'),
                        fullscreenMargin: $this.data('full-screen-margin'),
                        autoHeight: $this.data('auto-height'),
                        shuffle: $this.data('shuffle'),
                        dir: $this.data('dir'),
                        overPause: $this.data('over-pause'),
                        instantStartLayers: ($this.data('instant-start-layers') === true) ? true : false,
                        filters: ($this.data('filter') === true) ? {
                            grayscale: 1,
                            contrast: 1.5
                        } : false,
                    });

                    if ($this.data('ms-gallery')) {
                        var gallery = new MSGallery('ms-gallery-1', slider);
                        gallery.setup({
                            autoplay: true
                        });
                    }


                    if ($this.data('ms-parallax')) {
                        MSScrollParallax.setup(slider, 50, 80, true);
                    }

                }

            });
        }


        /*********************************************
         -    CHECK FOR TOUCH    -
         **********************************************/

        function isTouchSupported() {
            var msTouchEnabled = window.navigator.msMaxTouchPoints;
            var generalTouchEnabled = "ontouchstart" in document.createElement("div");

            if (msTouchEnabled || generalTouchEnabled) {
                //        return true;
                $('body').addClass('touchy');
            } else {
                //       return false;
                $('body').addClass('no-touchy');
            }

        }


        /*********************************************
         -    NAV HIGH LIGHT    -
         **********************************************/

        function navHighLight() {

            var aChildren = $(".WeZone-menu li").children(); // find the a children of the list items
            var aArray = []; // create the empty aArray

            for (var i = 0; i < aChildren.length; i++) {
                var aChild = aChildren[i];
                var ahref = $(aChild).attr('href');
                aArray.push(ahref);

            } // this for loop fills the aArray with attribute href values


            $(window).scroll(function () {
                var windowPos = $(window).scrollTop() + 84; // get the offset of the window from the top of page
                var windowHeight = $(window).height(); // get the height of the window
                var docHeight = $(document).height();

//                for (var i = 0; i < aArray.length; i++) {
//                    var theID = aArray[i];
//                    var divPos = $(theID).offset().top; // get the offset of the div from the top of page
//                    var divHeight = $(theID).outerHeight(); // get the height of the div in question
//                    if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
//                        $("a[href='" + theID + "']").addClass("active");
//                    } else {
//                        $("a[href='" + theID + "']").removeClass("active");
//                    }
//                }

                if (windowPos + windowHeight == docHeight) {
                    if (!$(".WeZone-menu li:last-child a").hasClass("active")) {
                        var navActiveCurrent = $(".active").attr("href");
                        $("a[href='" + navActiveCurrent + "']").removeClass("active");
                        $(".WeZone-menu li:last-child a").addClass("active");
                    }
                }
            });


        }


        /*********************************************
         -    LIGHT BOX    -
         **********************************************/

        function standardLightBox() {
            $('.mag-popup').each(function () {

                var $this = $(this),
                    $type = $this.data('popup-type'),
                    $removalDelay = $this.data('popup-removal-delay'),
                    $galleryEnable = $this.data('popup-gallery-enable'),
                    $mainClass = $this.data('popup-main-class'),
                    $zoomEnable = $this.data('popup-zoom-enabled');

                if ($this.length) {
                    $this.find('a.mag-lightbox').magnificPopup({
                        // delegate: $this.data('popup-dlegate'),

                        type: $type,
                        fixedContentPos: false,
                        removalDelay: $removalDelay,
                        showCloseBtn: false,
                        mainClass: $mainClass,
                        tLoading: '',
                        midClick: true,
                        gallery: {
                            enabled: $galleryEnable,
                            navigateByImgClick: true,
                        },
                        zoom: {
                            enabled: $zoomEnable,
                            duration: 300
                        }

                    });
                }
            });
        }

        /*********************************************
         -    MM MENU    -
         **********************************************/

        if (typeof (Menu) == 'function') {
            var menu = new Menu;
        }


        /*********************************************
         -    STORY BG    -
         **********************************************/

        function storyBg() {
            $('.story-bg').each(function () {
                var $this = $(this);

                if ($this.length) {
                    $this.css({
                        'background-image': 'url(' + 'images/' + $this.data('story-bg') + '.jpg' + ')',
                        'background-position': $this.data('bg-position'),
                        'background-attachment': $this.data('bg-attachment'),
                        'background-repeat': $this.data('bg-repeat'),
                        'background-size': $this.data('bg-size')
                    })
                }
            });
        }

        /*********************************************
         -    COLOR BG    -
         **********************************************/

        function colorBg() {
            $('.color-bg').each(function () {
                var $this = $(this),
                    value = $this.data('color-bg');

                if ($this.length) {
                    $this.css({
                        'background-color': value,
                        'position': 'absolute',
                        'z-index': $this.data('color-zindex'),
                        'width': '100%',
                        'height': '100%',
                        'top': '0',
                        'opacity': $this.data('opacity')
                    });
                }
            })

        }

        /*********************************************
         -    COUNTER    -
         **********************************************/

        function counter() {
            if ($(".timer").length) {
                $(".timer").appear(function () {
                    $(this).countTo();
                }, {
                    accY: -150
                });
            }
        }


        /*********************************************
         -    BACK TO TOP    -
         **********************************************/

        function backToTop() {


            var offset = 220;
            var duration = 500;
            $(window).scroll(function () {
                if ($(this).scrollTop() > offset) {
                    $('.back-to-top').fadeIn(duration);
                } else {
                    $('.back-to-top').fadeOut(duration);
                }
            });


            if ($('.back-to-top').length) {
                $('.back-to-top').click(function (event) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: 0
                    }, duration, 'easeOutCubic');
                    return false;
                });
            }
        }


        /*********************************************
         -    ANIMAION LOADER    -
         **********************************************/

        function animationLoader() {


            if (!$('body').hasClass('no-animate')) {

                if ($(".animsition-overlay").length) {

                    $(".animsition-overlay").animsition({

                        inClass: 'overlay-slide-in-top',
                        outClass: 'overlay-slide-out-top',
                        inDuration: 1000,
                        outDuration: 800,
                        //    linkElement           :   '.animsition-link',
                        linkElement: 'a:not([target="_blank"]):not([href^=#]):not([href^="ajax"]):not([class*="mag-popup"]):not([class*="ajax"]):not([class*="showhide"]):not([href^="javascript"]):not([class^="bx"]):not([class^="standard-popup"]):not([class*="mag-lightbox"]):not([data-popup]):not([class*="header-video__play-trigger"])',
                        loading: true,
                        loadingParentElement: 'body', //animsition wrapper element 
                        loadingClass: 'animsition-loading',
                        unSupportCss: ['animation-duration',
                            '-webkit-animation-duration',
                            '-o-animation-duration'
                        ],
                        //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
                        //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".

                        //    overlay               :   true,

                        //    overlayClass          :   'animsition-overlay-slide',
                        //    overlayParentElement  :   'body'
                    });
                }

            } else {
                $('body').find('.animsition, .animsition-overlay').removeClass('animsition, animsition-overlay');
            }

        }


        /*********************************************
         -    PROGRESS BAR    -
         **********************************************/

        function porgressBar() {
            if ($('.is-bars').length) {
                $('.is-bars').appear(function () {
                    var $elm = $(this),
                        $w = $elm.data('width'),
                        $h = $elm.data('height');

                    $elm.animate({
                        'width': $w + '%',
                        'height': $h + '%',
                    }, 1500, 'easeOutCubic');

                }, {
                    accY: -150
                });
            }
        }


        /*********************************************
         -    ANIMATED    -
         **********************************************/

        function animated() {

            if (!isMobile.any() && $('.animated').length) {
                $('.animated').appear(function () {

                    var elem = $(this);
                    var animation = elem.data('animation');
                    var animationPercent = elem.data('percent');
                    var animationDelay = elem.data('animation-delay');

                    if (!elem.hasClass('visible')) {
                        elem.css({
                            'width': animationPercent + '%',
                        });
                        if (animationDelay) {
                            setTimeout(function () {
                                elem.addClass(animation + ' visible');
                            }, animationDelay);
                        } else {
                            elem.addClass(animation + ' visible');
                        }
                    }
                }, {
                    accY: -150
                });
            } else {
                $('.animated').css('visibility', 'visible');
            }


        }

        /*********************************************
         -    FADE OUT OPACITY    -
         **********************************************/

        function fadeOutOpacity() {
            var scrollPos = $(window).scrollTop(),
                elementOut = $('.opacity-out'),
                elementHeight = elementOut.outerHeight();
            if (elementOut.length) {
                elementOut.css({
                    'opacity': 1 - (scrollPos / elementHeight),
                });
            }
        }


        $(window).scroll(function () {
            fadeOutOpacity();

        });

        /*********************************************
         -    YOUTUBE PLAYER    -
         **********************************************/

        function ytPlayer() {
            if ($('.yt_player').length) {
                $(".yt_player").YTPlayer();
            }
        }

        /*********************************************
         -    FULL BLOCK    -
         **********************************************/

        function fullBlock() {
            $('.full_block').each(function () {
                var $this = $(this),
                    vw = $windowWidth.any(),
                    vh = $(window).height();
                if ($this.length) {
                    $this.css({
                        'width': vw,
                        'height': vh,
                        'position': 'relative',
                        'overflow': 'hidden'
                    })
                }
                if ($('body').hasClass('boxed')) {
                    $this.css({
                        'width': $('body').outerWidth()
                    })
                }

            });
        }


        /*********************************************
         -    MASTER SLIDER MAIN    -
         **********************************************/

        function masterSliderMain() {

            $('.master-slider').each(function () {
                var $this = $(this),
                    slider = new MasterSlider();

                if ($this.length) {

                    /* circletimer control */

                    slider.control(($this.data('control-circletimer') === true) ? 'circletimer' : false, {
                        color: $this.data('circletimer-color'),
                        stroke: $this.data('circletimer-strok'),
                        radius: $this.data('circletimer-radius'),
                        hideUnder: $this.data('circletimer-hideunder')
                    });

                    /* thumblist control */

                    slider.control(($this.data('control-thumblist') === true) ? 'thumblist' : false, {
                        autohide: ($this.data('thumbs-autohide')) ? true : false,
                        dir: $this.data('thumbs-dir'),
                        type: $this.data('thumbs-type'),
                        width: $this.data('thumbs-width'),
                        height: $this.data('thumbs-height'),
                        align: $this.data('thumbs-align'),
                        space: $this.data('thumbs-space'),
                        margin: $this.data('thumbs-margin'),
                        inset: $this.data('thumbs-inset'),
                        hideUnder: ($this.data('thumbs-hideunder')) ? $this.data('thumbs-hideunder') : 600
                    });

                    /* slideinfo control */

                    slider.control(($this.data('control-slideinfo') === true) ? 'slideinfo' : false, {
                        insertTo: $this,
                        autohide: $this.data('slideinfo-autohide'),
                        align: $this.data('slideinfo-align'),
                        size: $this.data('slideinfo-size'),
                        margin: $this.data('slideinfo-margin'),
                        hideUnder: $this.data('slideinfo-hideunder')

                    });

                    /* arrows control */

                    slider.control(($this.data('control-arrows') === true) ? 'arrows' : false, {
                        hideUnder: $this.data('arrows-hide'),
                        autohide: $this.data('arrows-autohide'),
                        insertTo: $this.data('insert-arrow-to')
                    });

                    /* bullets control */

                    slider.control(($this.data('control-bullets') === true) ? 'bullets' : false, {
                        dir: $this.data('bullets-dir'),
                        align: $this.data('bullets-align')
                    });

                    /* timebar control */

                    slider.control(($this.data('control-timebar') === true) ? 'timebar' : false, {
                        insertTo: $this,
                        color: $this.data('timebar-color'),
                        align: $this.data('timebar-align')
                    });

                    /* lightbox control */

                    slider.control(($this.data('control-lightbox') === true) ? 'lightbox' : false);

                    /* scrollbar control */

                    slider.control(($this.data('control-scrollbar') === true) ? 'scrollbar' : false, {
                        insertTo: $this,
                        dir: $this.data('scrollbar-dir'),
                        color: $this.data('scrollbar-color'),
                        width: $this.data('scrollbar-width'),
                        align: $this.data('scrollbar-align')
                    });


                    /* main setup */

                    slider.setup($this, {
                        width: $this.data('width'),
                        height: $this.data('height'),
                        preload: 'all',
                        autoplay: $this.data('autoplay'),
                        layout: $this.data('layout'),
                        fillMode: $this.data('fill-mode'),
                        view: $this.data('view'),
                        space: $this.data('space'),
                        loop: $this.data('loop'),
                        wheel: $this.data('wheel'),
                        keyboard: $this.data('keyboard'),
                        speed: $this.data('speed'),
                        fullscreenMargin: $this.data('full-screen-margin'),
                        autoHeight: $this.data('auto-height'),
                        shuffle: $this.data('shuffle'),
                        dir: $this.data('dir'),
                        overPause: $this.data('over-pause'),
                        instantStartLayers: ($this.data('instant-start-layers') === true) ? true : false,
                        filters: ($this.data('filter') === true) ? {
                            grayscale: 1,
                            contrast: 1.5
                        } : false,
                    });

                    if ($this.data('ms-gallery')) {
                        var gallery = new MSGallery('ms-gallery-1', slider);
                        gallery.setup({
                            autoplay: true
                        });
                    }


                    if ($this.data('ms-parallax')) {
                        MSScrollParallax.setup(slider, 50, 80, true);
                    }

                }

            });
        }

        /*********************************************
         -    HEADER VIDEO -
         **********************************************/

        function headerVideo() {
            if ($('.header-video').length) {
                $('.header-video').each(function (i, elem) {
                    headerVideo = new HeaderVideo({
                        element: elem,
                        media: '.header-video__media',
                        playTrigger: '.header-video__play-trigger',
                        closeTrigger: '.header-video__close-trigger'
                    });
                });
            }
        }

        smoothWide();
        smoothMobile();
        hideList();
        showHideMenu();
        shrink();
        headerFill();
        revSlider();
        revSliderCarousel();
        isTouchSupported();
        regularSlider();
        navHighLight();
        standardLightBox();
        colorBg();
        counter();
        storyBg();
        backToTop();
        animationLoader();
        porgressBar();
        ytPlayer();
        fullBlock();
        masterSliderMain();
        animated();
        headerVideo();

        $(window).on('debouncedresize', function () {
            fullBlock();
        });

        jQuery(".grid-container").on('updateSinglePageStart.cbp', function () {
            standardLightBox();
            masterSliderAjax();
            storyBg();
        });


    });

    jQuery('.scrollbar-macosx').scrollbar();

})(window.jQuery);


/*
 * debouncedresize: special jQuery event that happens once after a window resize
 *
 * latest version and complete README available on Github:
 * https://github.com/louisremi/jquery-smartresize
 *
 * Copyright 2012 @louis_remi
 * Licensed under the MIT license.
 *
 * This saved you an hour of work? 
 * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
 */
(function ($) {

    var $event = $.event,
        $special,
        resizeTimeout;

    $special = $event.special.debouncedresize = {
        setup: function () {
            $(this).on("resize", $special.handler);
        },
        teardown: function () {
            $(this).off("resize", $special.handler);
        },
        handler: function (event, execAsap) {
            // Save the context
            var context = this,
                args = arguments,
                dispatch = function () {
                    // set correct event type
                    event.type = "debouncedresize";
                    $event.dispatch.apply(context, args);
                };

            if (resizeTimeout) {
                clearTimeout(resizeTimeout);
            }

            execAsap ?
                dispatch() :
                resizeTimeout = setTimeout(dispatch, $special.threshold);
        },
        threshold: 150
    };

})(jQuery);
