const timetable = require('~/app/data.json')

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
    FROM_TIPLOC: string,
		TO_TIPLOC: string,
		DISTANCE: string,
		ELECTRIC: string,
		PASSENGER_USE: string,
		LINE_CODE: string
}

export function findRoute(start: string, end: string, data: IRoute[]){
 for (let route of data){
	 
 }
}

