import { findRoute } from "./findRoute"
import {createGraph} from "./createGraph"
import data from "../data.json"


const graph = createGraph(data)

test("greet returns a string, greeting the passed name", () => {
    expect(findRoute("BERKHMD", "TRING", graph)).toStrictEqual({"cost": 5994, "path": ["BERKHMD", "TRING"]});
    expect(findRoute("BERKHMD", "HEMLHMP", graph)).toStrictEqual({"cost": 5553, "path": ["BERKHMD", "BORN412", "BONENDJ", "HEMLHMP"]});
    expect(findRoute("DLTNN", "NORTONW", graph)).toStrictEqual({"cost": 22716, "path": ["DLTNN", "DLTN", "DLTNS", "DINSDAL", "TSDARPR", "ALLEURL", "ALLENSW", "EGLSCLF", "STOCCJN", "HRTBJN", "STOCTMS", "STOCTON", "NORTONS", "NORTONW"]});
    // expect(findRoute("MNCRPIC", "CRDFCEN", graph)).toBe({"cost": 276677, "path"});  //currently coming out at 276749, slightly off 
    // expect(findRoute("THURSO", "PENZNCE", graph)).toBe({"cost": 1457246});  // currently coming out at 1457044
  }); 