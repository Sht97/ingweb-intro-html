import {pangram, romanize, biciesto} from "./modules/functions.js"

const pangramText=document.getElementById("pangramText");
const pangramResult= document.getElementById("pangramResult")
const pangramBtn= document.getElementById("pangramBtn")
pangramBtn.onclick= function(){findPangram()};

const biciestoText=document.getElementById("biciesto");
const biciestoResult= document.getElementById("biciestoResult")
const biciestoBtn= document.getElementById("biciestoBtn")
biciestoBtn.onclick= function(){findBiciesto()};

const romanText=document.getElementById("romano");
const romanResult= document.getElementById("romanResult")
const romanBtn= document.getElementById("romanBtn")
romanBtn.onclick= function(){transformRoman()};

function findPangram(){
    const result=pangram(pangramText.value);
    if(result){
        pangramResult.innerHTML="Es un pangrama";
    }
    else {
        pangramResult.innerHTML="No es un pangrama";
    }
}

function findBiciesto(){
    const result = biciesto(biciestoText.value)
    if(result){
        biciestoResult.innerHTML="Es un año biciesto";
    }
    else {
        biciestoResult.innerHTML="No es un año biciesto";
    }
}

function transformRoman(){
    const result=romanize(romanText.value);
    romanResult.innerHTML= result;
}
