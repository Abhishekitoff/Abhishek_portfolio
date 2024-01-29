
function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

loco()

var tl = gsap.timeline();

function loder(){
    tl.from("#topHeading",{
        opacity:0,
        y:100,
        duration:1
    })
    .from(".revel",{
        opacity:0,
        x:400,
        duration:2
    })
    .to(".revel ,#topHeading",{
      opacity:0,
      y:-100
    })
    .to("#loder",{
        height:0,
        duration:1,
        ease:Circ.easeInOut
    }).to("#green",{
        height:"100%",
        top:0,
        duration:1,
        delay:-.8,
        ease:Circ.easeInOut
    }).to("#green",{
        height:"0%",
        duration:1,
        delay:-.5,
        ease:Circ.easeInOut
    })
}

loder();

function page1() {
    tl.from(".menu li", {
        opacity: 0,
        y: 100,
        duration: .5,
        stagger: .3,

    })
        .from(".home-content h1", {
            x: -600,
            opacity: 0,
            duration: 1,
            stagger: .5
        })
        .from("#btn button", {
            scale: 1.5,
            opacity: 0,
            duration: .4
        })
        .from("#para", {
            scale: 1.5,
            opacity: 0,
            duration: .5
        })
        .from("#arrow1 img",{
            opacity:0
        })
        .from("#arrow1 img", {
            y: 10,
            repeat: -1,
            duration: .7,
            yoyo: true, 
        })

}

page1()
gsap.to("#page2 #rightimg ",{
    opacity:1,
   
     scrollTrigger:{
         trigger:"#page2",
         scroller:"#main",
        //  markers:true,
         start:"top 80%",
         end:"top 80%",
         scrub:1
         
     }
 })



gsap.from("#page2 #rightimg ",{
   transform:"rotate(-10deg)",
  
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        end:"top 0%",
        scrub:5
        
    }
})


tl.to("#page3 h1",{
    transform:"translateX(-100%)",
    fontWeight:"100",
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        // markers:true,
        start:"top 0%",
        scrub:2, 
        pin:true,

    }
})


let img =document.querySelectorAll("#page5 #socials .social-media")

img.forEach( (elem) => {
    elem.addEventListener("mousemove",(det)=>{
       elem.querySelector(".hover").style.opacity=1;
       elem.querySelector(".hover").style.left=`${det.x}px`;
       
    })
    
    elem.addEventListener("mouseleave",(det)=>{
       elem.querySelector(".hover").style.opacity=0;
       
    })
});


gsap.to("#page6 img",{
    scale:1,
    duration:2,
    scrollTrigger:{
        trigger:"#page6 img",
        scroller:"#main",
        // markers:true,
        start:"top 90%",
        end:"top 20%",
        scrub:3
     
    }
})
gsap.from("#page6-head h1, #page6-btn button",{
    opacity:0,
    scrollTrigger:{
        trigger:"#page6-head h1, #page6-btn button",
        scroller:"#main",
        // markers:true,
        start:"top 90%",
        end:"top 20%",
        scrub:3
     
    }
})


