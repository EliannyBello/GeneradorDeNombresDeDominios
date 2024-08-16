
let pronoun = ["the", "our", "us", "that"];
let adj = ["great", "big", "cute", "little"];
let noun = ["jogger", "racoon", "Bigger"];
let dominio = [".com", ".es", ".net", ".us"];

const nombreDominios = () => {
  for (let i = 0; i < pronoun.length; i++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let d = 0; d < dominio.length; d++) {
          console.log(pronoun[i] + adj[a] + noun[n] + dominio[d]);
        }
      }
    }
  }
};

nombreDominios();
