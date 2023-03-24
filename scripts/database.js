 const database = {
   governors: [
     {
       id: 1,
       name: 'Shelby Dalton',
       active: true,
       colonyId: 2,
     },
     {
       id: 2,
       name: 'Lincoln Keesecker',
       active: false,
       colonyId: 3,
     },
     {
       id: 3,
       name: 'Sergey Mikhaylichenko',
       active: true,
       colonyId: 3,
     },
     {
       id: 4,
       name: 'Adam Schubert',
       active: true,
       colonyId: 1,
     },
     {
       id: 5,
       name: 'Josh Barton',
       active: true,
       colonyId: 4,
     },
     {
       id: 6,
       name: 'Caroline Madison',
       active: true,
       colonyId: 2,
     },
     {
       id: 7,
       name: 'Jeremy Myers',
       active: false,
       colonyId: 1,
     },
   ],
   minerals: [
     {
       id: 1,
       name: 'Copium',
     },
     {
       id: 2,
       name: 'Gold',
     },
     {
       id: 3,
       name: 'Iron',
     },
     {
       id: 4,
       name: 'Platinum',
     },
     {
       id: 5,
       name: 'Chromium',
     },
   ],
   colonies: [
     {
       id: 1,
       name: 'Gaia Prime',
     },
     {
       id: 2,
       name: "Hanny's Voorwerp",
     },
     {
       id: 3,
       name: 'Elysium Nox',
     },
     {
       id: 4,
       name: 'Fortuna Illume',
     },
   ],
   miningFacilities: [
     {
       id: 1,
       name: 'Avalon Mining',
       active: true,
     },
     {
       id: 2,
       name: 'Aurora Borealis Mining',
       active: true,
     },
     {
       id: 3,
       name: 'Dark Depths Corp',
       active: true,
     },
     {
       id: 4,
       name: 'Ether-Void Matter Corps ',
       active: true,
     },
   ],
   colonyMinerals: [
     {
       id: 1,
       coloniesId: 2,
       materialId: 3,
       mineralStock: 10,
     },
     {
       id: 2,
       coloniesId: 3,
       materialId: 5,
       mineralStock: 7,
     },
     {
       id: 3,
       coloniesId: 1,
       materialId: 2,
       mineralStock: 13,
     },
     {
       id: 4,
       coloniesId: 4,
       materialId: 1,
       mineralStock: 5,
     },
   ],
   minedMinerals: [
     {
       id: 1,
       miningFacilityId: 2,
       materialId: 3,
       mineralStock: 10,
     },
     {
       id: 2,
       miningFacilityId: 2,
       materialId: 5,
       mineralStock: 7,
     },
     {
       id: 3,
       miningFacilityId: 1,
       materialId: 2,
       mineralStock: 13,
     },
     {
       id: 4,
       miningFacilityId: 4,
       materialId: 1,
       mineralStock: 5,
     },
     {
       id: 5,
       miningFacilityId: 3,
       materialId: 4,
       mineralStock: 12,
     },
     {
       id: 6,
       miningFacilityId: 3,
       materialId: 3,
       mineralStock: 3,
     },
     {
       id: 7,
       miningFacilityId: 4,
       materialId: 5,
       mineralStock: 3,
     },
   ],
   governedFacility: {

   },
 }



export const getGovernors =()=>{
    return database.governors.map(governors =>({...governors}))
}
export const getColonies =()=>{
    return database.colonies.map(colonies =>({...colonies}))
}
export const getMinerals =()=>{
    return database.minerals.map(minerals =>({...minerals}))
}
export const getMiningFacilities =()=>{
    return database.miningFacilities.map(miningFacilities =>({...miningFacilities}))
}
export const getMinedMinerals =()=>{
    return database.minedMinerals.map(minedMinerals =>({...minedMinerals}))
}
export const getColonyMinerals =()=>{
    return database.colonyMinerals.map(colonyMinerals =>({...colonyMinerals}))
}



// const database = {
//     transientState: {}
// }

// export const setFacility = (facilityId) => {
//     database.transientState.selectedFacility = facilityId
//     document.dispatchEvent( new CustomEvent("stateChanged") )
// }

// export const getFacilities = () => {
//     return database.facilities.map(f => ({...f}))
// }

// export const purchaseMineral = () => {

//         // Broadcast custom event to entire documement so that the
//         // application can re-render and update state
//         document.dispatchEvent( new CustomEvent("stateChanged") )
//     }
// }
