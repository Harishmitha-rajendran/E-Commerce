// let contact=document.querySelector("#navbarSupportedContent > ul > li:nth-child(5) > a");
// function changescreen(){
//     if(window.innerWidth<700){
//         contact.href="#contact-mble";
//      }
//      else{
//         contact.href="#contact";
//      }
// }
// setTimeout(changescreen,1000);



var hairPanel=document.querySelector(".hair-panel");
var facePanel=document.querySelector(".face-panel");
var bodyPanel=document.querySelector(".body-panel");

var btnList=document.querySelectorAll(".panelbtn");
for (let btn of btnList){
    btn.addEventListener("click",function(){
        for( btn of btnList){
            btn.classList.remove("btn-active");
        }
        this.classList.add("btn-active");
        let currentBtn=this.id;
        if(currentBtn==="panel-btn-1")
        {
           hairPanel.style.display="block";
           facePanel.style.display="none";
           bodyPanel.style.display="none";
        }
        if(currentBtn==="panel-btn-2")
        {
           facePanel.style.display="block";
           hairPanel.style.display="none";
           bodyPanel.style.display="none";
        }
        if(currentBtn==="panel-btn-3")
        {
           bodyPanel.style.display="block";
           facePanel.style.display="none";
           hairPanel.style.display="none";
        }
    });
}

var divs=document.querySelectorAll(".panel-div");
for(let i of divs){
    i.addEventListener("click",function(){
       for(i of divs){
         i.firstElementChild.classList.remove("clr-active");
         i.lastElementChild.classList.remove("text-active");
       }
       this.firstElementChild.classList.add("clr-active");
       this.lastElementChild.classList.add("text-active");

    });
}


var cbe=document.querySelector(".cbe");
var c1=document.querySelector(".c1");
var c2=document.querySelector(".c2");

var cbee=document.querySelector(".cbee");
var c11=document.querySelector(".c11");
var c22=document.querySelector(".c22");

var btns=document.querySelectorAll(".mapbtn")

for(j of btns){
    j.addEventListener("click",function(){
       for(j of btns){
        j.classList.remove("map-active");
       }
       this.classList.add("map-active");
       let currentBtns=this.id;
       if(currentBtns==="map-btn-1")
        {
           cbe.style.display="block";
           c1.style.display="none";
           c2.style.display="none";
           cbee.style.display="block";
           c11.style.display="none";
           c22.style.display="none";
        }
        if(currentBtns==="map-btn-2")
        {
            cbe.style.display="none";
            c1.style.display="block";
            c2.style.display="none";
            cbee.style.display="none";
            c11.style.display="block";
            c22.style.display="none";
        }
        if(currentBtns==="map-btn-3")
        {
            cbe.style.display="none";
            c1.style.display="none";
            c2.style.display="block";
            cbee.style.display="none";
            c11.style.display="none";
            c22.style.display="block";
        }
    });
}


//reviews

const reviews=[
    {
        id:1,
        name:"Pritha Hari,Actress",
        img:"images/1.jpg",
        text:"My favourite product from Vilvah is the Goatmilk shampoo. I definitely have seen an improvement, and my hair feels fresh much softer. The best part is, it’s a gentle everyday shampoo for all kinds of hair types. Thank you Vilvah for creating such genuine healthy clinically approved products."
    },
    {
        id:2,
        name:"Aparna Bajpai, Yoga coach",
        img:"images/2.avif",
        text:"I really like their plastic free packaging and also adore their chemical free products. I know, I am not putting anything harmful on my face, body or hair. The feel of the products that I have tried, is completely organic & real and the results are naturally beautiful. Since I am a vegan and follow a cruelty free lifestyle, Vilvah comes as a solution to all my problems. I love the fact that their products are not tested on animals. Vilvah, for me would be No harm to the planet, to the animals, to our skin and ourselves."
    },
    {
        id:3,
        name:"Deepika, Blogger",
        img:"images/3.webp",
        text:"We come across lots of brands in social media but certain brands stand out because of their brand philosophy. Vilvah is one such brand which has not only a strong ethos, but result driven products. As an athlete, my favourites are their deo shots and toners. Can't do without it!! "
    }
]

const img=document.getElementById("review-img");
const author=document.getElementById("author");
const info=document.getElementById("info");

const nextbtn=document.querySelector("#review > div > div > button.next-btn");
const prevbtn=document.querySelector("#review > div > div > button.prev-btn");

let currentItem=0; // starting

window.addEventListener("DOMContentLoaded",function(){
    showPerson(currentItem);
});
prevbtn.addEventListener("click",function(){
    currentItem--;
    showPerson(currentItem);
});
nextbtn.addEventListener("click",function(){
    currentItem++;
    showPerson(currentItem);
});

function showPerson(person){
    const item=reviews[person];
    img.src=item.img;
    author.textContent=item.name;
    info.textContent=item.text;
}


