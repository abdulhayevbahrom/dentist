import tishDavolesh from "../components/sevicesPages/servicesImgs/tish davolash.png";
import tishOrnatish from "../components/sevicesPages/servicesImgs/tish ornatish .png";
import tishPratez from "../components/sevicesPages/servicesImgs/tish paratezi.png";
import tishSugurish from "../components/sevicesPages/servicesImgs/tish sugurish.png";
import tishTogirlash from "../components/sevicesPages/servicesImgs/tish togirlash.png";
import tishTozalash from "../components/sevicesPages/servicesImgs/tish tozalash.png";
import tishUstigaOrnatish from "../components/sevicesPages/servicesImgs/tish ustiga ornatish.png";
import tishYamash from "../components/sevicesPages/servicesImgs/tish yamash.png";

const toothData = [
  {
    type: "Tooth",
    toothImg: tishDavolesh,
    toothTitle: "Tish davolash",
  },
  {
    type: "Tooth",
    toothImg: tishOrnatish,
    toothTitle: "Tish o'rnatish",
  },
  {
    type: "Tooth",
    toothImg: tishPratez,
    toothTitle: "Tish pratezi",
  },
  {
    type: "Tooth",
    toothImg: tishSugurish,
    toothTitle: "Tish sug'urish",
  },
  {
    type: "Tooth",
    toothImg: tishTogirlash,
    toothTitle: "Tish to'g'irlash",
  },
  {
    type: "Tooth",
    toothImg: tishTozalash,
    toothTitle: "Tish tozalash",
  },
  {
    type: "Tooth",
    toothImg: tishUstigaOrnatish,
    toothTitle: "Tish ustiga o'rnatish",
  },
  {
    type: "Tooth",
    toothImg: tishYamash,
    toothTitle: "Tish yamash",
  },
];

const toothIdData = (id) => {
  return id.map((i, index) => (i ? { ...i, id: index } : i));
};

let toothDAta = toothIdData(toothData);

export default toothDAta;
