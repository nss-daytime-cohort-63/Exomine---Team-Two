import { Governors } from "./governor.js"
import { miningCorp } from "./facilities.js"
import { SpaceCart } from "./cart.js"

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
            <div class="cart">
        <h1 class="title">Space Cart</h1>
        <aside class="cart">${SpaceCart()}</aside>
        <button id="orderButton">Purchase Minerals</button>
    </div>
        </article>

    </div>`
}