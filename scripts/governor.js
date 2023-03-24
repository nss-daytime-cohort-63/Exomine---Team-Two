import {
  getGovernors,
  setGovernor,
  setColony,
  getColonies,
  getColonyMinerals,
  getGovernedFacility,
  getMinerals,
} from './database.js'

document.addEventListener('change', (governorSelected) => {
  if (governorSelected.target.id === 'governor') {
    const governors = getGovernors()
    const governorId = parseInt(governorSelected.target.value)
    // use find method to return the value of the first element
    const findGovernor = governors.find(
      (governor) => governor.id === governorId
    )
    if (findGovernor) {
      setColony(findGovernor.colonyId)
      setGovernor(governorId)
    }
  }
})

// function to create dropdown
export const Governors = () => {
  const governors = getGovernors()
  const holder = getGovernedFacility()

  let html = `<select class="governors" id="governor">
                <option value="">Choose</option>`

  const governorActive = governors.map((governor) => {
    // assign selection for dropdown
    if (governor.active === true) {
      // keep selected once name being chosen
      if (holder.selectedGovernor === governor.id) {
        return `<option value="${governor.id}" selected>${governor.name}</option>`
      } else {
        return `<option value="${governor.id}">${governor.name}</option>`
      }
    }
  })
  html += governorActive.join('')
  html += '</select>'
  return html
}

export const ColonyMinerals = () => {
  const colonyMinerals = getColonyMinerals()
  const minerals = getMinerals()
  const holder = getGovernedFacility()

  // set empty array and push later
  let colonyMineralArray = []

  // once looping we need to access the holder to get the colonyId
  for (const colonyMineral of colonyMinerals) {
    // compare holder colonyId to colonyMineral coloniesId
    if (colonyMineral.coloniesId === holder.colonyId) {
      colonyMineralArray.push(colonyMineral)
    }
  }

  let html = '<ul>'

  for (const colonyMineral of colonyMineralArray) {
    const findMineral = minerals.find(
      (mineral) => colonyMineral.materialId === mineral.id
    )
    html += `<li>${colonyMineral.mineralStock} tons of ${findMineral.name}</li>`
  }

  html += '</ul>'

  return html
}

// function changes the title once governor selected
export const colonyTitle = () => {
  const holder = getGovernedFacility()
  const colonies = getColonies()
  // governor is not selected display title
  if (!holder.colonyId) {
    return '<h2>Colony Minerals</h2>'
  } else {
    // iterate governors from database
    for (const colony of colonies) {
      // check if the governor id equal to selected governor
      if (colony.id === holder.colonyId) {
        return `<h2>${colony.name} Minerals</h2>`
      }
    }
  }
}
