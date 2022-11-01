

var tl = gsap.timeline();

tl
    .from(".line1",{
        x:-3000,
       duration:2.5,
    })
    .from(".line2",{
        y:-3000,
       duration:2.2,
       delay:-2
    })
    .from(".line3",{
        y:-3000,
        duration:2.4,
        delay:-1.8
    })
    .from(".line4",{
        y:-3000,
        duration:2.3,
        delay:-1.5
    })
    var num = document.querySelector(".loader h1 span")

    setTimeout(function(){
        document.querySelector(".loader").style.top = "-110%"
    },4000)
    var grow = 0
    setInterval(function(){
            if(grow<=100){
            num.innerHTML = grow++
        }else{
            grow = 100
        }
        },28)


        tl
        .from(".line1p1",{
            x:-3000,
           duration:2,
        })
        .from(".line2p1",{
            y:-5000,
           duration:2.5,
           delay:-2
        })
        .from(".line3p1",{
            y:-5000,
            duration:2.5,
            delay:-2
        })
        .from(".line4p1",{
            y:-5000,
            duration:2.5,
            delay:-2
        })
        .from(".navleft",{
            y:-100,
        })
        .from(".navmid",{
            y:-100,
        })
        
        .from(".navright",{
            y:-100,
        })
        .from(".menu",{
            x:-100
        })
        .from(".bg1",{
            x:2000
        })
        .from(".heading",{
            x:2000
        })
        .from(".heading2",{
            x:2000,
            duration:1,
            delay:-1
        })
        .from(".bottom2p1",{
            opacity:0
        })



let left8a=document.querySelector(".left8a")
let left8am=document.querySelector(".left8am")

left8a.addEventListener("mouseover",function(){
    left8am.style.display="initial";
})

left8a.addEventListener("mouseleave",function(){
    left8am.style.display="none"
})


let left8b=document.querySelector(".left8b")
let left8bm=document.querySelector(".left8bm")

left8b.addEventListener("mouseover",function(){
    left8bm.style.display="initial";
})

left8b.addEventListener("mouseleave",function(){
    left8bm.style.display="none"
})

let left8c=document.querySelector(".left8c")
let left8cm=document.querySelector(".left8cm")

left8c.addEventListener("mouseover",function(){
    left8cm.style.display="initial";
})

left8c.addEventListener("mouseleave",function(){
    left8cm.style.display="none"
})


let left8d=document.querySelector(".left8d")
let left8dm=document.querySelector(".left8dm")

left8d.addEventListener("mouseover",function(){
    left8dm.style.display="initial";
})

left8d.addEventListener("mouseleave",function(){
    left8dm.style.display="none"
})


let left8e=document.querySelector(".left8e")
let left8em=document.querySelector(".left8em")

left8e.addEventListener("mouseover",function(){
    left8em.style.display="initial";
})

left8e.addEventListener("mouseleave",function(){
    left8em.style.display="none"
})














const scroll = new LocomotiveScroll({
    el: document.querySelector(".page1"),
    smooth: true
});

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".page1"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".page1" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".page1", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".page1").style.transform ? "transform" : "fixed"
});

tl.from(".purple p", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
  .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
  .to(".purple", {backgroundColor: "#28a92b"}, 0);



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

