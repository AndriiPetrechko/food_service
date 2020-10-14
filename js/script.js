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

gsap.from("#onion_img", {
    opacity: 0, 
    rotation: 270, 
    duration: 2.5
});
gsap.from("#leaf", {
    opacity: 0, 
    rotation: -180, 
    duration: 2.5
});


