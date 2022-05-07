import StationInfo from "./StationInfo.json";
import { initStation } from "./Firebase";

const filterLine = (line) => {
  if (line.length !== 4 || isNaN(parseInt(line.substring(0, 2)))) {
    return false;
  }

  return true;
};

const InitStation = async () => {
  const result = StationInfo.DATA.filter((station) => {
    return filterLine(station.line_num);
  });

  initStation(result);
};

export default InitStation;
