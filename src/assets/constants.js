import metroid from "../assets/img/metroid.png";
import reddead from "../assets/img/reddead.png";
import devil from "../assets/img/devil.png";
import deadspace from "../assets/img/deadspace.png";
import resident from "../assets/img/resident.png";

import {
  SiAndroid,
  SiIos,
  SiNintendo,
  SiPcgamingwiki,
  SiPlaystation,
  SiXbox,
} from "react-icons/si";

export const icons = {
  nintendo: `SiNintendo`,
  Xbox: "<SiXbox />",
  playstation: "<SiPlaystation />",
  pc: "<SiPcgamingwiki />",
  ios: "<SiIos />",
  android: "<SiAndroid />",
};

export const styles = {
  icons: "text-white mr-2 transition-colors",
};

export const bgHomeImages = [
  {
    id: 1,
    image: metroid,
  },
  {
    id: 2,
    image: reddead,
  },
  {
    id: 3,
    image: devil,
  },
  {
    id: 4,
    image: deadspace,
  },
  {
    id: 5,
    image: resident,
  },
];
