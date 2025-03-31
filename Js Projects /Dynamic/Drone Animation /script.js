// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
});

// GSAP Animations
gsap.from(".hero h1", { opacity: 0, y: 50, duration: 1 });
gsap.from(".hero p", { opacity: 0, y: 50, duration: 1.2 });
gsap.to(".drone-animation", {
    scrollTrigger: {
        trigger: ".journey",
        start: "top center",
        end: "bottom center",
        scrub: true,
    },
    x: 500,
});
