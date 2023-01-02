/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let domainName = [];
  let pronoun = ["my", "your"];
  let adj = ["lil", "ol", "huge"];
  let noun = ["dog", "cat"];
  let domain = [".com", ".net", ".io", ".gov"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          domainName.push("  " + pronoun[i] + adj[j] + noun[k] + domain[l]);
        }
      }
    }
  }
  console.log(domainName);

  // DIDN'T WORK WITH CODE BELOW!!!!

  // document.getElementById("domain.results").innerHTML = domainName;
  // console.log("Any string");
};
