import axios from "axios";
import { library, icon, findIconDefinition, parse } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { IconList } from "src/app/models/interfaces";

library.add(fas, far, fab);

// const iconPrefix = "fas";
// const styleMap = { brands: "fab", regular: "far", solid: "fas" };

const fontAwesomeVersion = "6.2.1";
const jsonUrl = `https://raw.githubusercontent.com/FortAwesome/Font-Awesome/${fontAwesomeVersion}/metadata/icons.json`;
let parsedIconsNames: any = [];

// const x = parse.icon('weight-scale');
// console.log(x);

// let findIcon = findIconDefinition(x);
// let findIcon = findIconDefinition({ prefix: 'fas', iconName: 'coffee' });
// const iconObj = icon(findIcon, {transform: {size: 100}}).html;
// console.log(iconObj);


// const getAllIconNames = async() => {
//   const response = await fetch(jsonUrl);
//   const icons = await response.data;
//   console.log(icons);
// }

// getAllIconNames()

axios
  .get(jsonUrl)
  .then(function(response) {
    const icons: IconList = response.data;
    console.log(icons )

    for (let [iconName] of Object.entries(icons)) {
      parsedIconsNames.push(`${iconName}`);
    }

    // console.log(parsedIconsNames)

  })
  .catch(function(error) {
    console.log(error);
  });

  let iconObj = {};

  const generateRandomIcon = () => {
    const randomIcon =  parsedIconsNames[Math.floor(Math.random() * parsedIconsNames.length)];
    const parseIconFromLibrary = parse.icon(randomIcon);
    const findIcon = findIconDefinition(parseIconFromLibrary);
    iconObj = icon(findIcon, {transform: {size: 100}}).html;
    console.log(iconObj)
  }
export default iconObj;


    // for (let [iconName, iconData] of Object.entries(icons)) {
    //   console.log(iconName)
    //   for (let iconStyle of Object.values(iconData.styles)) {
    //     if(iconStyle === 'solid' || iconStyle === 'brands') {
    //       parsedIcons.push(`${iconName}`);
    //     }
    //   }
    // }
