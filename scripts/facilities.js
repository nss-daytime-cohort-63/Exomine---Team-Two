import { SpaceCart } from "./cart.js"
import{ getMiningFacilities,getMinedMinerals, getMinerals } from "./database.js"
import { addMineralToCart } from "./database.js"

const facilities = getMiningFacilities()
const mainContainer = document.querySelector("#container")


export const miningCorp =()=>{
     let html = `
     <select class="facilities" id="facility">
    <option value="">Choose</option>
    ${facilities.map(
            (facility) => {
                 return `<option value="facility--${facility.id}">${facility.name}</option>`
                }
        ).join("")
    }
</select>`
return html

}


export const facilityStock =(facId)=>{
    const minerals =getMinerals()
    const facilityMinerals = getMinedMinerals()
    
    let html=""
     facilityMinerals.map(
        (facMined)=>{
            if(facId === facMined.miningFacilityId){
                minerals.map(
                    mineral=>{
                        if(mineral.id === facMined.materialId){
                        html += `<li class="materials"><div><input type="radio" id="material--${mineral.id}" name="materials" value="${facId}"><label>${facMined.mineralStock} tons of ${mineral.name}</label></div></li>`
                        }
                    }
                ).join("")
            } 
        }
     )
     //console.log(html)
     //mainHtml.innerHTML += html
     return html
}
//

//export const test = ()=>{
 document.addEventListener("change",(facilitySelected)=>{
    if(facilitySelected.target.id.startsWith("facility")){
        const [,facilityId] = facilitySelected.target.value.split("--") //split the value in the option to get the id of the facility
        console.log("event working")
        const mineMaterial = document.querySelector(".mineMaterials")
        mineMaterial.innerHTML = facilityStock(parseInt(facilityId))
        
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
       
            
        
    }

})
//}

// need eventlistener to target the material radio button
// document.addEventListener("click", (clickedMaterial)=>{
//     if(clickedMaterial.target.id.startsWith("material")){
//         const [,mineralId] = clickedMaterial.target.id.split("--")
//         console.log(mineralId)
//         const selectedMineral = document.querySelector(".cart")
//         selectedMineral.innerHTML = addMineralToCart(parseInt(mineralId))
//         mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
//     }
// })