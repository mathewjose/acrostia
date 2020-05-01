! function(e) {

    "use strict";

    var o = {

        

        



        smootScroll: function() {

            e.scrollIt({

                upKey: 38,

                downKey: 40,

                easing: "swing",

                scrollTime: 700,

                activeClass: "active",

                onPageChange: null,

                topOffset: -63

            })

        },

        bg_parallax: function() {

            e(".site_header > .page_cover").parallax("50%", -.5)

        },

        animated_progress: function() {

            e(".progress_bar > span").each(function() {

                var o = e(this),

                    i = e(this).data("percent");

                o.css({

                    transition: "width 3s"

                }), setTimeout(function() {

                    o.appear(function() {

                        o.css("width", i + "%")

                    })

                }, 500)

            })

        },

        testimonial: function() {

            e("#testimonial").owlCarousel({

                center: !1,

                items: 2,

                autoplay: !0,

                singleItem: !0,

                smartSpeed: 800,

                loop: !0,

                margin: 30,

                nav: !1,

                dots: !0,

                responsive: {

                    280: {

                        items: 1

                    },

                    800: {

                        items: 1

                    },

                    992: {

                        items: 2

                    },

                    1400: {

                        items: 2

                    }

                }

            })

        },

        fan_fact: function() {

            e(".counter").counterUp({

                delay: 10,

                time: 1e3

            })

        },

        grid_masonry: function() {

            if (e("#masonry").length > 0) {

                var o = e("#masonry");

                o.imagesLoaded(function() {

                    o.masonry({

                        itemSelector: ".grid"

                    })

                })

            }

        },

        portfolio_isotop: function() {


            var o = e(".portfolio_items_list");

            o.isotope({

                filter: "*",

                animationOptions: {

                    duration: 1e3,

                    easing: "linear",

                    queue: !1

                }

            }), e(".portfolio_work_nav > li a").on("click", function() {


                e(".portfolio_work_nav > li a").removeClass("active"), e(this).addClass("active");

                var i = e(this).attr("data-filter");

                return o.isotope({

                    filter: i,

                    animationOptions: {

                        duration: 1e3,

                        easing: "linear",

                        queue: !1

                    }

                }), !1

            })

        },

        magnific_popup: function() {

            e(".single_work .work_thumb").magnificPopup({

                type: "image",

                removalDelay: 300,

                mainClass: "mfp-with-zoom",

                gallery: {

                    enabled: !0

                },

                zoom: {

                    enabled: !0,

                    duration: 300,

                    easing: "ease-in",

                    opener: function(e) {

                        return e.is("img") ? e : e.find("img")

                    }

                }

            })

        },

        

        initializ: function() {

            o.smootScroll(), o.bg_parallax(), o.animated_progress(), o.testimonial(), o.fan_fact(), o.grid_masonry(), o.portfolio_isotop(), o.magnific_popup()

        }

    };

    e(function() {

        o.initializ()

    })



    $(document).ready(function () {

        $(".menu-icon").click(function () {

            $(".menu-open, .menu-close").addClass("active");

            $(".menu-push").addClass("menu-push-left");

            $(".bg-overlay").addClass("block-sec");

        });

        $(".close-nav, .bg-overlay").click(function () {

            $(".menu-close,.menu-open").removeClass("active");

            $(".menu-push").removeClass("menu-push-left");

            $(".bg-overlay").removeClass("block-sec");

        });

        $(".nav-link").click(function () {

            $(".menu-close,.menu-open").removeClass("active");

            $(".menu-push").removeClass("menu-push-left");

            $(".bg-overlay").removeClass("block-sec");

        });

    });







    $(window).scroll(function () {

        var scroll = $(window).scrollTop();



        if (scroll >= 300) {

            $(".menu-icon").addClass("nav-fix");

        } else {

            $(".menu-icon").removeClass("nav-fix");

        }

    });

    $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
            loop: false,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                    autoHeight: false
                }
            }
        })
    });







}(jQuery);