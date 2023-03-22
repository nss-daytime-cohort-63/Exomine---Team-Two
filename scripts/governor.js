import { getGovernors, setGovernor } from "./database.js"

const governors = getGovernors()

document.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id === "governor") {
            setGovernor(parseInt(clickEvent.target.value))
        }
    }
)

export const Governors = () => {
let html = `
    <select class="governors" id="governor">    
    <option value="">Choose<option>
    ${governors.map(
        (governor) => {
            return `<option value="governor--${governor.id}">${governor.name}</option>`
        }
    ).join("")
    }
    </select>`
    return html
}