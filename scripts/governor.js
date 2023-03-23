import {
  getGovernors,
  setGovernor,
  setColony,
  getColonies,
  getColonyMinerals,
  getGovernedFacility,
  getMinerals,
} from './database.js'

document.addEventListener('change', (event) => {
  if (event.target.id === 'governor') {
    const governors = getGovernors()
    const governorId = parseInt(event.target.value)
    const findGovernor = governors.find(
      (governor) => governor.id === governorId
    )
    if (!findGovernor) {
      return
    } else {
    //   setColony(findGovernor.colonyId)
      setGovernor(governorId)
    }
  }
})

export const Governors = () => {
  const governors = getGovernors()
  const state = getGovernedFacility()

  let html = `
    <select class="governors" id="governor">    
    <option value="">Choose</option>`

  const governorActive = governors.map((governor) => {
    if (governor.active) {
        if (state.selectedGovernor === governor.id) {
          return `<option value="governor--${governor.id}">${governor.name}</option>`
        } else {
          return `<option value="${governor.id}">${governor.name}</option>`
        }
    }
  })
  html += governorActive.join('')
  html += `</select>`
  return html
}

export const colonyStock = () => {
  const state = getGovernedFacility()

  let html = '<h2>Colony Minerals'

  html += ''
  return html
}

