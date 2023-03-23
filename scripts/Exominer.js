import { Governors, colonyStock } from './governor.js'

export const Exominer = () => {
    return `
    <h1>Solar System Mining Marketplace</h1>
        <article class="choices">
            <section>
                Choose a Governor ${Governors()}
            </section>
            <section class="colonyMinerals">
            ${colonyStock()}
            </section>
        </article>`
}