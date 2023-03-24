import { Governors } from "./governor.js"
import { facilityStock, miningCorp} from "./facilities.js"
import { getSelectedFacility } from "./database.js"

const facId = getSelectedFacility()
export const Exominer = () => {
    return `
    <h1>Solar System Mining Marketplace</h1>
        <article class="choices">
            <section>
                Choose a Governor ${Governors()}
            </section>
            <section>
                Select a Mining Facility ${miningCorp()}
            </section>
            <section class="mineMaterials">${if(facId.hasOwnProperty(facilityId)){
                facilityStock()}}</section>
        </article>`
}