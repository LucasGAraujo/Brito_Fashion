// Fixar no topo
const header=document.getElementsByTagName("header")[0];
const topHeader = header.offsetTop;
function ToHoldMenu(){
    if(window.pageYOffset >= topHeader){
        header.classList.add("fixarNoTopo")
    }else{
        header.classList.remove("fixarNoTopo")
    }
}
window.onscroll = function(){
    ToHoldMenu();
} 



function ScrollDown(){
    
    dez.addEventListener("click", () =>{
        window.scrollTo({
                top:900,
                behavior:"smooth"
            })
        })
    
    vinte.addEventListener("click", () =>{
        window.scrollTo({
                top:1900,
                behavior:"smooth"
            })
        })
    trinta.addEventListener("click", () =>{
        window.scrollTo({
                top:2900,
                behavior:"smooth"
            })
        })
        
    quatro.addEventListener("click", () =>{
        window.scrollTo({
                top:3900,
                behavior:"smooth"
            })
         })
        
    cinco.addEventListener("click", () =>{
        window.scrollTo({
             top:4900,
                behavior:"smooth"
            })
        })
                
    seis.addEventListener("click", () =>{
        window.scrollTo({
             top:5900,
                behavior:"smooth"
            })
         })
    }
ScrollDown();
var msg = window.document.getElementById("produtos")
function produtos(){
    msg.innerText("Olasahhsdahsdahadshsdah")
}