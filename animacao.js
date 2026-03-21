gsap.registerPlugin(ScrollTrigger);

gsap.fromTo("#home", {
    x: "-100%",
}, {
    x: "0",
    duration: 4,
    scrollTrigger: {
        trigger: "#home",
        start: "top 5%",
        toggleActions: "play reverse play reverse",
        markers: true
    }
});