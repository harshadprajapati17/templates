/* eslint-disable no-undef */
var GSAP_LAB_CONFIG = {
    distance: 32,
    shortDistance: 18,
    baseDuration: 0.85,
    ease: 'power2.out'
};

function setupHeroAndMinds() {
    var heroSwiper = new Swiper('.swiper-container', {
        loop: true,
        speed: 900,
        effect: 'slide',
        autoplay: {
            delay: 5500,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        keyboard: {
            enabled: true
        }
    });
    window.heroSwiper = heroSwiper;

    var mindMissionSwiper = new Swiper('.mind-mission-swiper', {
        loop: false,
        speed: 800,
        slidesPerView: 1.2,
        spaceBetween: 16,
        keyboard: {
            enabled: true
        },
        breakpoints: {
            768: {
                slidesPerView: 1.6,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 2.2,
                spaceBetween: 22
            },
            1280: {
                slidesPerView: 2.5,
                spaceBetween: 24
            }
        }
    });
    window.mindMissionSwiper = mindMissionSwiper;
}

function initVariant1(cardEl) {
    var tl = gsap.from(cardEl, {
        opacity: 0,
        y: GSAP_LAB_CONFIG.distance,
        duration: GSAP_LAB_CONFIG.baseDuration,
        ease: GSAP_LAB_CONFIG.ease
    });

    var cta = cardEl.querySelector('.gsap-card-cta');
    if (cta) {
        cta.addEventListener('click', function () {
            tl.restart();
        });
    }
}

function initVariant2(cardEl) {
    var label = cardEl.querySelector('.gsap-card-label');
    var title = cardEl.querySelector('.gsap-card-title');
    var body = cardEl.querySelector('.gsap-card-body');
    var cta = cardEl.querySelector('.gsap-card-cta');

    var tl = gsap.timeline({
        defaults: {
            duration: 0.45,
            ease: GSAP_LAB_CONFIG.ease
        }
    });

    tl.from(cardEl, { opacity: 0, y: GSAP_LAB_CONFIG.shortDistance })
        .from(label, { opacity: 0, y: GSAP_LAB_CONFIG.shortDistance }, '-=0.2')
        .from(title, { opacity: 0, y: GSAP_LAB_CONFIG.shortDistance }, '-=0.15')
        .from(body, { opacity: 0, y: GSAP_LAB_CONFIG.shortDistance }, '-=0.1')
        .from(cta, { opacity: 0, y: GSAP_LAB_CONFIG.shortDistance }, '-=0.05');

    if (cta) {
        cta.addEventListener('click', function () {
            tl.restart();
        });
    }
}

function initVariant3(cardEl) {
    var tl = gsap.timeline();

    tl.fromTo(
        cardEl,
        {
            opacity: 0,
            scale: 1.06,
            filter: 'blur(16px)'
        },
        {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            duration: GSAP_LAB_CONFIG.baseDuration + 0.25,
            ease: 'power3.out'
        }
    );

    var cta = cardEl.querySelector('.gsap-card-cta');
    if (cta) {
        cta.addEventListener('click', function () {
            tl.restart();
        });
    }
}

function initVariant4(cardEl) {
    gsap.set(cardEl, {
        clipPath: 'inset(0 0 0 0)'
    });

    var fromClip = window.matchMedia('(max-width: 767px)').matches
        ? 'inset(100% 0 0 0)'
        : 'inset(0 100% 0 0)';

    var tl = gsap.fromTo(
        cardEl,
        {
            opacity: 0,
            clipPath: fromClip
        },
        {
            opacity: 1,
            clipPath: 'inset(0 0 0 0)',
            duration: GSAP_LAB_CONFIG.baseDuration + 0.15,
            ease: 'power2.out'
        }
    );

    var cta = cardEl.querySelector('.gsap-card-cta');
    if (cta) {
        cta.addEventListener('click', function () {
            tl.restart();
        });
    }
}

function initVariant5(cardEl) {
    if (typeof ScrollTrigger === 'undefined') return;

    var label = cardEl.querySelector('.gsap-card-label');
    var title = cardEl.querySelector('.gsap-card-title');
    var body = cardEl.querySelector('.gsap-card-body');

    var tl = gsap.timeline();

    tl.from(label, { y: GSAP_LAB_CONFIG.shortDistance, opacity: 0 })
        .from(title, { y: GSAP_LAB_CONFIG.distance, opacity: 0 }, 0)
        .from(body, { y: GSAP_LAB_CONFIG.distance * 1.4, opacity: 0 }, 0);

    ScrollTrigger.create({
        animation: tl,
        trigger: cardEl,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true
    });
}

function initVariant6(cardEl) {
    if (typeof ScrollTrigger === 'undefined') return;

    var innerTl = gsap.timeline();

    innerTl.from(cardEl, {
        x: -40,
        opacity: 0
    }).to(cardEl, {
        x: 40,
        opacity: 1
    });

    ScrollTrigger.create({
        animation: innerTl,
        trigger: cardEl,
        start: 'top 70%',
        end: '+=260',
        pin: true,
        scrub: true
    });
}

function initVariant7(cardEl) {
    if (typeof ScrollTrigger === 'undefined') return;

    gsap.fromTo(
        cardEl,
        {
            opacity: 0.2,
            scale: 0.94
        },
        {
            opacity: 1,
            scale: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: cardEl,
                start: 'top 85%',
                end: 'bottom 20%',
                scrub: true
            }
        }
    );
}

function initVariant8(cardEl) {
    if (typeof ScrollTrigger === 'undefined') return;

    var pieces = [
        cardEl.querySelector('.gsap-card-label'),
        cardEl.querySelector('.gsap-card-title'),
        cardEl.querySelector('.gsap-card-body'),
        cardEl.querySelector('.gsap-card-cta')
    ].filter(Boolean);

    var tl = gsap.timeline({
        defaults: {
            opacity: 0,
            y: GSAP_LAB_CONFIG.shortDistance
        }
    });

    pieces.forEach(function (el) {
        tl.from(el, {}, '+=0.1');
    });

    ScrollTrigger.create({
        animation: tl,
        trigger: cardEl,
        start: 'top 80%',
        end: 'bottom 15%',
        scrub: true
    });
}

function initVariant9(cardEl) {
    if (typeof ScrollTrigger === 'undefined') return;

    var introTl = gsap.from(cardEl, {
        opacity: 0,
        y: GSAP_LAB_CONFIG.distance,
        duration: GSAP_LAB_CONFIG.baseDuration,
        ease: GSAP_LAB_CONFIG.ease
    });

    var refineTl = gsap.to(cardEl, {
        borderColor: 'rgba(255, 255, 255, 0.4)',
        boxShadow: '0 26px 70px rgba(0, 0, 0, 0.7)',
        scrollTrigger: {
            trigger: cardEl,
            start: 'top 80%',
            end: 'bottom 30%',
            scrub: true
        }
    });

    var cta = cardEl.querySelector('.gsap-card-cta');
    if (cta) {
        cta.addEventListener('click', function () {
            introTl.restart();
            refineTl.scrollTrigger.refresh();
        });
    }
}

function initVariant10(cardEl, index) {
    if (typeof ScrollTrigger === 'undefined') return;

    var direction = index % 2 === 0 ? -1 : 1;
    var fromX = 40 * direction;

    gsap.from(cardEl, {
        x: fromX,
        opacity: 0,
        duration: GSAP_LAB_CONFIG.baseDuration,
        ease: GSAP_LAB_CONFIG.ease,
        scrollTrigger: {
            trigger: cardEl,
            start: 'top 85%',
            end: 'bottom 30%',
            toggleActions: 'play reverse play reverse'
        }
    });
}

function setupGSAPLab() {
    if (typeof gsap === 'undefined') {
        return;
    }

    if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    var cards = document.querySelectorAll('.gsap-card');
    if (!cards.length) {
        return;
    }

    cards.forEach(function (cardEl, idx) {
        var variant = cardEl.getAttribute('data-variant');
        switch (variant) {
        case '1':
            initVariant1(cardEl);
            break;
        case '2':
            initVariant2(cardEl);
            break;
        case '3':
            initVariant3(cardEl);
            break;
        case '4':
            initVariant4(cardEl);
            break;
        case '5':
            initVariant5(cardEl);
            break;
        case '6':
            initVariant6(cardEl);
            break;
        case '7':
            initVariant7(cardEl);
            break;
        case '8':
            initVariant8(cardEl);
            break;
        case '9':
            initVariant9(cardEl);
            break;
        case '10':
            initVariant10(cardEl, idx);
            break;
        default:
            break;
        }
    });
}

function setupScrollIdeas() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    var sections = document.querySelectorAll('.scroll-idea[data-scroll-idea]');
    if (!sections.length) {
        return;
    }

    sections.forEach(function (sectionEl) {
        var id = sectionEl.getAttribute('data-scroll-idea');
        switch (id) {
        case '01':
            initScrollIdea01(sectionEl);
            break;
        case '02':
            initScrollIdea02(sectionEl);
            break;
        case '03':
            initScrollIdea03(sectionEl);
            break;
        case '04':
            initScrollIdea04(sectionEl);
            break;
        case '05':
            initScrollIdea05(sectionEl);
            break;
        case '06':
            initScrollIdea06(sectionEl);
            break;
        case '07':
            initScrollIdea07(sectionEl);
            break;
        case '08':
            initScrollIdea08(sectionEl);
            break;
        case '09':
            initScrollIdea09(sectionEl);
            break;
        case '10':
            initScrollIdea10(sectionEl);
            break;
        default:
            break;
        }
    });
}

function initScrollIdea01(sectionEl) {
    var items = sectionEl.querySelectorAll('.scroll-idea-list-item');
    if (!items.length) return;

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: sectionEl,
            start: 'top 80%',
            end: 'bottom 35%',
            scrub: true
        }
    });

    tl.from(items, {
        opacity: 0,
        y: GSAP_LAB_CONFIG.shortDistance,
        stagger: 0.12
    });
}

function initScrollIdea02(sectionEl) {
    var cards = sectionEl.querySelectorAll('.scroll-idea-card');
    if (!cards.length) return;

    gsap.from(cards, {
        opacity: 0,
        y: GSAP_LAB_CONFIG.distance,
        stagger: 0.18,
        ease: 'none',
        scrollTrigger: {
            trigger: sectionEl,
            start: 'top 80%',
            end: 'bottom 30%',
            scrub: true
        }
    });
}

function initScrollIdea03(sectionEl) {
    var fill = sectionEl.querySelector('.scroll-idea-progress-fill');
    var steps = sectionEl.querySelectorAll('.scroll-idea-step');
    if (!fill) return;

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: sectionEl,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true
        }
    });

    tl.fromTo(
        fill,
        { scaleY: 0 },
        { scaleY: 1, ease: 'none' }
    );

    if (steps.length) {
        tl.from(
            steps,
            {
                opacity: 0,
                y: GSAP_LAB_CONFIG.shortDistance,
                stagger: 0.16
            },
            0
        );
    }
}

function initScrollIdea04(sectionEl) {
    var bgLayer = sectionEl.querySelector('.scroll-idea-parallax-layer--background');
    var fgLayer = sectionEl.querySelector('.scroll-idea-parallax-layer--foreground');
    if (!bgLayer || !fgLayer) return;

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: sectionEl,
            start: 'top 85%',
            end: 'bottom 15%',
            scrub: true
        }
    });

    tl.fromTo(
        bgLayer,
        { y: -30 },
        { y: 30, ease: 'none' }
    ).fromTo(
        fgLayer,
        { y: 25 },
        { y: -25, ease: 'none' },
        0
    );
}

function initScrollIdea05(sectionEl) {
    var pinColumn = sectionEl.querySelector('.scroll-idea-pin-column');
    var scrollColumn = sectionEl.querySelector('.scroll-idea-scroll-column');

    if (!pinColumn || !scrollColumn) return;

    if (window.matchMedia('(max-width: 767px)').matches) {
        gsap.from(scrollColumn.children, {
            opacity: 0,
            y: GSAP_LAB_CONFIG.shortDistance,
            stagger: 0.18,
            scrollTrigger: {
                trigger: sectionEl,
                start: 'top 85%',
                end: 'bottom 25%',
                scrub: true
            }
        });
        return;
    }

    var items = scrollColumn.children;
    var totalHeight = scrollColumn.scrollHeight - sectionEl.clientHeight;
    if (totalHeight < 0) {
        totalHeight = scrollColumn.scrollHeight * 0.8;
    }

    ScrollTrigger.create({
        trigger: sectionEl,
        start: 'top top+=80',
        end: function () {
            return '+=' + totalHeight;
        },
        pin: pinColumn,
        scrub: true,
        invalidateOnRefresh: true
    });

    gsap.from(items, {
        opacity: 0,
        y: GSAP_LAB_CONFIG.shortDistance,
        stagger: 0.2,
        scrollTrigger: {
            trigger: sectionEl,
            start: 'top 75%',
            end: function () {
                return '+=' + scrollColumn.scrollHeight;
            },
            scrub: true,
            invalidateOnRefresh: true
        }
    });
}

function initScrollIdea06(sectionEl) {
    var panels = sectionEl.querySelectorAll('.scroll-idea-panel');
    if (!panels.length) return;

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: sectionEl,
            start: 'top 80%',
            end: 'bottom 10%',
            scrub: true
        }
    });

    panels.forEach(function (panel, idx) {
        tl.fromTo(
            panel,
            { opacity: idx === 0 ? 1 : 0.25, y: 30 },
            { opacity: 1, y: 0 },
            idx
        );
    });
}

function initScrollIdea07(sectionEl) {
    var frame = sectionEl.querySelector('.scroll-idea-image-frame');
    var mask = sectionEl.querySelector('.scroll-idea-image-mask');
    if (!frame || !mask) return;

    gsap.set(mask, { clipPath: 'inset(0 0 0 0)' });

    gsap.to(mask, {
        clipPath: 'inset(100% 0 0 0)',
        ease: 'none',
        scrollTrigger: {
            trigger: sectionEl,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true
        }
    });
}

function initScrollIdea08(sectionEl) {
    var metricEl = sectionEl.querySelector('.scroll-idea-metric-value');
    if (!metricEl) return;

    var target = parseInt(metricEl.getAttribute('data-scroll-idea-metric-target'), 10);
    if (isNaN(target)) {
        target = 0;
    }

    var obj = { value: 0 };

    ScrollTrigger.create({
        trigger: sectionEl,
        start: 'top 80%',
        end: 'bottom 60%',
        onEnter: function () {
            gsap.to(obj, {
                value: target,
                duration: GSAP_LAB_CONFIG.baseDuration + 0.35,
                ease: GSAP_LAB_CONFIG.ease,
                onUpdate: function () {
                    metricEl.textContent = Math.round(obj.value);
                }
            });
        },
        once: true
    });

    gsap.from(sectionEl.querySelector('.scroll-idea-metric'), {
        opacity: 0,
        y: GSAP_LAB_CONFIG.shortDistance,
        scrollTrigger: {
            trigger: sectionEl,
            start: 'top 85%',
            end: 'bottom 60%',
            scrub: true
        }
    });
}

function initScrollIdea09(sectionEl) {
    var track = sectionEl.querySelector('.scroll-idea-horizontal-track');
    var viewport = sectionEl.querySelector('.scroll-idea-horizontal-viewport');
    if (!track || !viewport) return;

    var distance = function () {
        var extra = track.scrollWidth - viewport.clientWidth;
        return extra > 0 ? -extra : 0;
    };

    gsap.fromTo(
        track,
        { x: 0 },
        {
            x: distance,
            ease: 'none',
            scrollTrigger: {
                trigger: sectionEl,
                start: 'top 80%',
                end: 'bottom 10%',
                scrub: true,
                invalidateOnRefresh: true
            }
        }
    );
}

function initScrollIdea10(sectionEl) {
    var back = sectionEl.querySelector('.scroll-idea-depth-card--back');
    var mid = sectionEl.querySelector('.scroll-idea-depth-card--mid');
    var front = sectionEl.querySelector('.scroll-idea-depth-card--front');
    if (!back || !mid || !front) return;

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: sectionEl,
            start: 'top 85%',
            end: 'bottom 20%',
            scrub: true
        }
    });

    tl.fromTo(
        back,
        { y: 20, scale: 0.96, opacity: 0.55 },
        { y: 0, scale: 1, opacity: 0.7, ease: 'none' }
    )
        .fromTo(
            mid,
            { y: 30, scale: 0.97, opacity: 0.7 },
            { y: 0, scale: 1, opacity: 0.9, ease: 'none' },
            0
        )
        .fromTo(
            front,
            { y: 40, scale: 0.98, opacity: 0.8 },
            { y: 0, scale: 1, opacity: 1, ease: 'none' },
            0
        );
}

document.addEventListener('DOMContentLoaded', function () {
    setupHeroAndMinds();
    setupGSAPLab();
    setupScrollIdeas();
});
/* eslint-enable no-undef */
