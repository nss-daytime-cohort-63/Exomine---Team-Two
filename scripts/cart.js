// GIVEN: a user wants to make a purchase
// WHEN: when they select a mineral from the facility
// THEN: the selection will display in the space cart above a purchase button

import { getCart } from "./database"
import { addMineralToCart } from "./database"

// export const SpaceCart = () => {
//     const orders = getCart()
//     let html = "<ul>"

//     const listItems = orders.map(addMineralToCart)

//     html += listItems.join("")
//     html += "</ul>"

//     return html
// }

