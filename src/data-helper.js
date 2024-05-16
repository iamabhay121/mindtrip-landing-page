import Data from "./Data.json";

export function dataHelper() {
  return Data;
}

export function getImgPath(imgPath) {
  console.log("imgPath", imgPath);
  return process.env.PUBLIC_URL + imgPath;
}
