function ibg(){let e=document.querySelectorAll(".ibg");for(var t=0;t<e.length;t++)e[t].querySelector("img")&&(e[t].style.backgroundImage="url("+e[t].querySelector("img").getAttribute("src")+")",console.log(e))}ibg();let myMainSlider=new Swiper(".main__slider",{direction:"vertical",navigation:{nextEl:".slider-main__button-next",prevEl:".slider-main__button-prev"},pagination:{el:".swiper-pagination",renderBullet:function(e,t){return'<span class="'+t+'">'+(e+1)+"</span>"}},mousewheel:!0,loop:!0,effect:"fade",fadeEffect:{crossFade:!0}}),myContactSlider=new Swiper(".contact__slider",{navigation:{nextEl:".contact__button-next",prevEl:".contact__button-prev"}});function correctionOfSlideNumberBullet(){document.querySelectorAll(".slider-main .swiper-pagination .swiper-pagination-bullet").forEach((e=>{addNulltoNumber(e)}))}function addNulltoNumber(e){+e.innerText<10&&(e.innerText="0"+e.innerText)}function addNumberOfSlideToAttElement(e){const t=document.querySelectorAll(e);t.forEach(((e,l)=>{0===l?l<10?e.setAttribute("date-slide-aktive-number","0"+t.length-2):e.setAttribute("date-slide-aktive-number",t.length-2):l>0&&l<t.length-1?l<10?e.setAttribute("date-slide-aktive-number","0"+l):e.setAttribute("date-slide-aktive-number",l):e.setAttribute("date-slide-aktive-number","01")}))}function appEventProcOnSelectors(e,t){let l=document.querySelectorAll(e);for(let i=0;i<l.length;i++)l[i].addEventListener("click",t(i+1,e))}function addActiveClassNthChildElem(e,t){let l=".projects__content-box:nth-child("+e+")";$(document).ready((function(){$(l+" "+t).click((function(e){$(l+" .article__cross").addClass("active"),$(l+" .article__title").addClass("active"),$(l+" .article__text").addClass("active"),$(l+" .article__close").addClass("active"),$(l+" .article__more").addClass("active")}))}))}function removeActiveClassNthChildElem(e,t){let l=".projects__content-box:nth-child("+e+")";$(document).ready((function(){$(l+" "+t).click((function(e){$(l+" .article__cross").removeClass("active"),$(l+" .article__title").removeClass("active"),$(l+" .article__text").removeClass("active"),$(l+" .article__close").removeClass("active"),$(l+" .article__more").removeClass("active")}))}))}function addActiveClassNthChildElemBlog(e,t){let l=".blog__content-box:nth-child("+getNumberOfParentElem(e)+") .blog__article:nth-child("+getNumberOfChildElem(e)+")";$(document).ready((function(){$(l+" "+t).click((function(e){$(l+" .text-box__cross").addClass("active"),$(l+" .text-box__title").addClass("active"),$(l+" .text-box__artilce").addClass("active"),$(l+" .text-box__close").addClass("active"),$(l+" .text-box__more").addClass("active")}))}))}function removeActiveClassNthChildElemBlog(e,t){let l=".blog__content-box:nth-child("+getNumberOfParentElem(e)+") .blog__article:nth-child("+getNumberOfChildElem(e)+")";$(document).ready((function(){$(l+" "+t).click((function(e){$(l+" .text-box__cross").removeClass("active"),$(l+" .text-box__title").removeClass("active"),$(l+" .text-box__artilce").removeClass("active"),$(l+" .text-box__close").removeClass("active"),$(l+" .text-box__more").removeClass("active")}))}))}function isEven(e){return e%2==0}function getNumberOfParentElem(e){return isEven(e)?e/2:(e+1)/2}function getNumberOfChildElem(e){return isEven(e)?2:1}function addButon(e){let t=myContactSlider.activeIndex;myContactSlider.on("slideChange",(function(){t=myContactSlider.activeIndex,e(t)}))}function removClassIfEndSlaid(e){let t=document.querySelectorAll(".slider-contact__slide").length;console.log(+t-1),e==+t-1?document.querySelector(".contact__button-next").classList.add("active"):removeClassIfNull(".contact__button-next")}function addClassIfNoNull(e){e?document.querySelector(".contact__button-prev").classList.add("active"):removeClassIfNull(".contact__button-prev")}function removeClassIfNull(e){document.querySelector(e).classList.contains("active")&&document.querySelector(e).classList.remove("active")}$(document).ready((function(){$(".header__burger").click((function(e){$(".header__burger, .header__menu, .header").toggleClass("active")})),$(".slider-main__more").click((function(e){$(".slider-main__title, .slider-main__text, .slider-main__cross, .slider-main__close, .button, .slider-main__img").addClass("active"),myMainSlider.mousewheel.disable(),myMainSlider.navigation.destroy(),myMainSlider.detachEvents()})),$(".slider-main__close, .slider-main__cross").click((function(e){$(".slider-main__title, .slider-main__text, .slider-main__cross, .slider-main__close, .button, .slider-main__img").removeClass("active"),myMainSlider.mousewheel.enable(),myMainSlider.navigation.init(),myMainSlider.swiper.init()}))})),correctionOfSlideNumberBullet(),addNumberOfSlideToAttElement(".slider-main__title span:first-child"),appEventProcOnSelectors(".article__more",addActiveClassNthChildElem),appEventProcOnSelectors(".article__cross",removeActiveClassNthChildElem),appEventProcOnSelectors(".article__close",removeActiveClassNthChildElem),appEventProcOnSelectors(".text-box__more",addActiveClassNthChildElemBlog),appEventProcOnSelectors(".text-box__close",removeActiveClassNthChildElemBlog),appEventProcOnSelectors(".text-box__cross",removeActiveClassNthChildElemBlog),addButon(addClassIfNoNull),addButon(removClassIfEndSlaid);let imageUp=document.querySelectorAll(".paralax-up");new simpleParallax(imageUp,{orientation:"up",delay:1.6,transition:"cubic-bezier(0,0,0,1)"});let imageLeft=document.querySelectorAll(".paralax-left");new simpleParallax(imageLeft,{orientation:"left",delay:1.6,transition:"cubic-bezier(0,0,0,1)"});