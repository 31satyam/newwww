import React from "react";

let m=[
  {name:"satyam",branch:"cse"},
  {name:"satyam1",branch:"cse1"},
  {name:"satyam2",branch:"cse2"},
  {name:"satyam3",branch:"cse3"},
];
export default function Demo22() {
return (
  <div>
      {
      m.map(
          (obj)=> {
             return( <p>Your name is {obj.name} and your branch is {obj.branch}.</p>)
          }
      )
  }
  </div>
)
}
