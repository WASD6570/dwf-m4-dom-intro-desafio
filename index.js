const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function liEliminator(li) {
  for (let index = 0; index < li.length; index++) {
    li[index].remove();
  }
  li[0].remove();
  return li;
}

function liAdder(liCollection, ulList) {
  liCollection.forEach((element) => {
    const newLiEl = document.createElement("li");
    newLiEl.textContent = element.tema;
    newLiEl.setAttribute("class", element.class);
    ulList.appendChild(newLiEl);
  });
  return ulList;
}

function main() {
  const ulLi = document.querySelector(".lista");
  const oldLiEls = ulLi.getElementsByTagName("li");
  liEliminator(oldLiEls);
  liAdder(cosasQueAprendimos, ulLi);
  console.log(ulLi);
}

main();
