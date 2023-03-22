import {  facilityStock, miningCorp, } from "./facilities.js"//test 

let mainHtml = document.querySelector(".test")


const renderText =()=>{

    return `<div class="facilities"> choose a mining facility ${miningCorp()} </div>
    `
}

const renderAllHTML = () => {
    mainHtml.innerHTML = renderText()
}

renderAllHTML()

mainHtml.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()

})