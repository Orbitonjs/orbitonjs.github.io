let IndexValue = `//Orbiton is Already imported by default. You dont need to import It
import {ClickMe} from "App.js"

console.log("hello")

`



let AppValue = `

export function ClickMe() {
  alert("You clicked Me")
}


`
export const FILES = [
  {
    id: 0,
    name: "App.js",
    type: "jsx",
    content: AppValue,
  },
  {
    id: 1,
    name: "index.js",
    type: "jsx",
    content: IndexValue,
  }
]
