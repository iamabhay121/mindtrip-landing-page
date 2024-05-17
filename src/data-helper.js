import Data from "./Data.json";

export function dataHelper() {
  return Data;
}

export function getImgPath(imgPath) {
  console.log("imgPath", imgPath);
  return "/static/media/" + imgPath;
}
