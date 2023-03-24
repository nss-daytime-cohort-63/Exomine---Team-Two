import { Governors, ColonyMinerals, colonyTitle } from './governor.js'
import { miningCorp} from "./facilities.js"

export const Exominer = () => {
    return `
    <h1>Solar System Mining Marketplace</h1>
        <article class="choices">
            <section>
                Choose a Governor ${Governors()}
            </section>
            <section>
            ${colonyTitle()}
            </section>
            <section>
                ${ColonyMinerals()}
            </section>

            <section>
                Select a Mining Facility ${miningCorp()}
            </section>
            <section class="mineMaterials"></section>
        </article>`
}