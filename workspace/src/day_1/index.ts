import "./styles.css";

import { input } from "./input";
const mock = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;
const output = input.split("\n").reduce((acc, v) => {
  const digs = v.match(/\d/g);
  return acc + Number(digs[0] + digs[digs.length - 1]);
}, 0);

document.getElementById("app").innerHTML = `
<h1>First day!</h1>
<div>
  ${output}
</div>`;
