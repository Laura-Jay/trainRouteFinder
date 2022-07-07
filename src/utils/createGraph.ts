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
  FROM_TIPLOC: string; //start
  TO_TIPLOC: string; //end
  DISTANCE: string;
  ELECTRIC: string;
  PASSENGER_USE: string;
  LINE_CODE: string;
}

interface IHashmap {
  [key: string]: any;
}

interface INodes {
  [key: string]: number | string;
}

export function createGraph(data: IRoute[]): IHashmap {
  const hashmap: IHashmap = {};

  // create list of keys, outer object = hashmap
  for (const route of data) {
    if (!Object.hasOwnProperty.call(hashmap, route.FROM_TIPLOC)) {
      hashmap[route.FROM_TIPLOC] = { a: 0 };
    }
  }
  // tried adding that passanger_use must equal 'Y' however this leads to incorrect results on the first three tests that pass without this addition
  //create adjacency nodes object
  const keyArr = Object.keys(hashmap);

  for (const key of keyArr) {
    const adjNodes: INodes = {};
    for (const obj of data) {
      if (obj.TO_TIPLOC === key) {
        if (parseInt(obj.DISTANCE) > 0) {
          adjNodes[obj.FROM_TIPLOC] = parseInt(obj.DISTANCE);
        }
      }
    }
    hashmap[key] = adjNodes;
  }

  return hashmap;
}
