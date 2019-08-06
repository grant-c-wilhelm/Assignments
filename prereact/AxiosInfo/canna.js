const request = axios.get('https://strainapi.evanbusse.com/fpybzHl/strains/search/all')
request.then(function (response) {
    const giantStrainDataObject = parseData(response.data);
    getTheNames(giantStrainDataObject)
    getTheRace(giantStrainDataObject)

})

function getTheRace(giantStrainDataObject){
    giantStrainDataObject.map(strainRace=>{
        const onlyStrainRace = strainRace.race
        const onlyStrainId = `${strainRace.id}. `
        appendToDomRace(onlyStrainRace, onlyStrainId)
    })
}

function getTheNames(giantStrainDataObject,){
    giantStrainDataObject.map((strainNames)=>{
        const onlyStrainNames = strainNames.name
        const onlyStrainId = `${strainNames.id}. `

        //const onlyStrainId = strainNames.id + '.'+' '
        
        appendToDomNames(onlyStrainNames, onlyStrainId)
    })
}

function parseData(obj) {
    const output = []
    for (let key in obj) {
        obj[key].name = key
        output.push(obj[key])
    }
    return output
}

function appendToDomNames(dataToAppend, ...stuff ) {
    const newNode = document.createElement('span');
    newNode.setAttribute('class',"strain-names")
    document.create
    newNode.textContent = stuff+dataToAppend;
    document.getElementById('names').appendChild(newNode)
}
function appendToDomRace(dataToAppend, ...stuff) {
    const newNode = document.createElement('span');
    newNode.setAttribute('class',"strain-race")
    document.create
    newNode.textContent = stuff + dataToAppend;
    document.getElementById('races').appendChild(newNode)
}

