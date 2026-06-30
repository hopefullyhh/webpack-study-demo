import _ from "lodash";
import "./index.css";
import kon from "./k-on.jpg";
import print from "./print";

function component() {
  const element = document.createElement("h2");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = kon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());

print();
