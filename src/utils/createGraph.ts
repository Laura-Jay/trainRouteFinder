/*
{
		"FROM_TIPLOC": "ABCWM",
		"TO_TIPLOC": "FERNHIL",
		"DISTANCE": "483",
		"ELECTRIC": "N",
		"PASSENGER_USE": "Y",
		"LINE_CODE": "U&D"
	} 
*/

interface IRoute { 
    FROM_TIPLOC: string,  //start
		TO_TIPLOC: string,  //end
		DISTANCE: string,
		ELECTRIC: string,
		PASSENGER_USE: string,
		LINE_CODE: string
}

interface IHashmap {
    [key: string]: any
}

interface INodes {
    [key: string]: number | string
}

export function createGraph(data: IRoute[]){
const hashmap: IHashmap = {};


// create list of keys, outer object = hashmap
for (const route of data){

    if (Object.hasOwnProperty.call(hashmap,route.FROM_TIPLOC)){
        console.log("already here!")
    } else {
        hashmap[route.FROM_TIPLOC] = {"a" : 0}
}
}

//create inner object
const keyArr = Object.keys(hashmap)

for (const key of keyArr){
    const adjNodes: INodes = {}
    for (const obj of data){
        if (obj.TO_TIPLOC === key){
            adjNodes[obj.FROM_TIPLOC] = parseInt(obj.DISTANCE)
        }
    }
    hashmap[key] = adjNodes
}
    
return hashmap
}
