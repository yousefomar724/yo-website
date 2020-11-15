// Slider
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad:function() {
            $('#autoWidth').removeClass('cS-hidden');       
        }
    });
});

// Mobile Nav
const mobileNav = document.querySelector(".mobile-nav"),
    menuIcon = document.querySelector(".menu-icon"),
    mobileMenuItems = document.querySelectorAll(".menu-items-mobile li");

menuIcon.addEventListener("click", ()=>{
    mobileNav.classList.toggle("active");
});

// Remove Nav After click on links
mobileMenuItems.forEach(i =>{
    i.addEventListener("click", ()=>{
        mobileNav.classList.remove("active");
    });
});


// Active Class
const addActiveClass = (entries, observer) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting && entry.intersectionRatio >= 0.3){
                //console.log(entry.target);

                let currentActive = document.querySelector(".desktop-nav a.active");

                if(currentActive){
                    currentActive.classList.remove("active");
                }

                let newActive = document.querySelector(`.desktop-nav a[href="#${entry.target.getAttribute("id")}"]`);

                newActive.classList.add("active");
            };
        });
    };

const sections = document.querySelectorAll("section");

const options = {
    threshold: 0.7,
};

const observer = new IntersectionObserver(addActiveClass, options);

sections.forEach((section) => {
    observer.observe(section);
});

