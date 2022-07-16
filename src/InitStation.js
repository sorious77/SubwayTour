import StationInfo from "./StationInfo.json";
import { initStation } from "./Firebase";

const InitStation = async () => {
  console.log(StationInfo.DATA);

  await initStation(StationInfo.DATA);
};

export default InitStation;
