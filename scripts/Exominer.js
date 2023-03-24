import { Governors } from "./governor.js"

export const Exominer = () => {
    return `
        <article class="choices">
            <section>
                ${Governors()}
            </section>
        </article>`
}