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
  FROM_TIPLOC: string;
  TO_TIPLOC: string;
  DISTANCE: string;
  ELECTRIC: string;
  PASSENGER_USE: string;
  LINE_CODE: string;
}

export function findStations(data: IRoute[]): string[] {
  const stations: string[] = [];
  for (const route of data) {
    if (!stations.includes(route.FROM_TIPLOC)) {
      stations.push(route.FROM_TIPLOC);
    }
  }
  return stations;
}
