interface IAdjacentNodes {
  [key: string]: number;
}

interface IGraph {
  [key: string]: IAdjacentNodes;
}

interface IOutput {
  cost: number;
  path: string[];
}

export function findRoute(start: string, end: string, data: IGraph): IOutput {
  const Graph = require("node-dijkstra");

  const route = new Graph();

  for (const [key, value] of Object.entries(data)) {
    route.addNode(key, value);
  }

  return route.path(start, end, { cost: true });
}
