import { Governors } from "./governor.js"
import { miningCorp} from "./facilities.js"

export const Exominer = () => {
    return `
    <div class="container">
    <h1 class="header">Solar System Mining Marketplace</h1>
        <article class="choices">
            <section class="governor">
                Choose a Governor ${Governors()}
            </section>
            <section class="facility">
                Select a Mining Facility ${miningCorp()}
            </section>
            <div class="mineralsContainer">
            <h3 class="mineralsHeader">Facility Minerals</h3>
            <section class="mineMaterials"></section>
            </div>
        </article>
    </div>`
}