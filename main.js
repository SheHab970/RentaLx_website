let toogl_btn = document.getElementById("toggl");
let ul_Nav = document.getElementById("ul_nav");
let nav_Bar = document.getElementById("nav_bar");

toogl_btn.onclick = function(){
    
    if(toogl_btn.className == "ri-menu-3-line xx"){
        
        toogl_btn.className = "ri-close-fill";
    }
    else{
        toogl_btn.className = "ri-menu-3-line xx";
    }
    nav_Bar.classList.toggle("active");
}


let Upbottun = document.getElementById("UpBottum");
window.onscroll=function(){
    if(window.scrollY>700){
        Upbottun.classList.add("display");
    }
    else{
        Upbottun.classList.remove("display");
    }
        console.log(scrollY);
        
}
Upbottun.addEventListener("click",function(){
    window.scrollTo(0, 0);
});


