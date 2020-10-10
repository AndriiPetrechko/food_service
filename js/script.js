gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

gsap.from("#p4_img1", {
    scrollTrigger: {
        trigger: "#p4_img1",
        toggleActions: "restart"
    },
    opacity: 0, 
    x: -300, 
    duration: 2
});

gsap.from("#p4_img2", {
    scrollTrigger: {
        trigger: "#p4_img2",
        toggleActions: "restart"
    },
    opacity: 0, 
    x: 300, 
    duration: 1.5
});
