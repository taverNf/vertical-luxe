const tenis = [
  {
    nome: "Nike",
    price: 599.9,
    colorString: "Branco",
    color: "#eee",
    sizes: [41, 43],
    img: "img/img_example.webp",
  },
  {
    nome: "Adidas",
    price: 499.9,
    colorString: "Preto",
    color: "#000000",
    sizes: [38, 40, 42],
    img: "img/img_example.webp",
  },
  {
    nome: "Puma",
    price: 389.5,
    colorString: "Azul",
    color: "#0000FF",
    sizes: [39, 41, 44],
    img: "img/img_example.webp",
  },
  {
    nome: "Vans",
    price: 429.99,
    colorString: "Vermelho",
    color: "#FF0000",
    sizes: [38, 42, 45],
    img: "img/img_example.webp",
  },
  {
    nome: "Converse",
    price: 379.9,
    colorString: "Cinza",
    color: "#808080",
    sizes: [40, 43],
    img: "img/img_example.webp",
  },
  {
    nome: "Asics",
    price: 549.0,
    colorString: "Verde",
    color: "#008000",
    sizes: [39, 41, 44, 45],
    img: "img/img_example.webp",
  },
  {
    nome: "New Balance",
    price: 469.99,
    colorString: "Amarelo",
    color: "#FFFF00",
    sizes: [38, 40, 42, 44],
    img: "img/img_example.webp",
  },
  {
    nome: "Fila",
    price: 359.9,
    colorString: "Roxo",
    color: "#800080",
    sizes: [39, 41, 43],
    img: "img/img_example.webp",
  },
  {
    nome: "Reebok",
    price: 419.0,
    colorString: "Laranja",
    color: "#FFA500",
    sizes: [38, 40, 42, 45],
    img: "img/img_example.webp",
  },
];

for (let i = 0; i < tenis.length; i++) {
  let box = document.createElement("li");
  let img = document.createElement("img");
  let nameBox = document.createElement("div");
  let nameTenis = document.createElement("h2");
  let price = document.createElement("h2");
  let buyBtn = document.createElement("button");

  box.className = "item-box";
  img.className = "item-img";
  img.src = tenis[i].img;
  nameBox.classList = "name-box";
  nameTenis.className = "item-name";
  nameTenis.textContent = tenis[i].nome;
  price.className = "price";
  price.textContent = "R$ " + tenis[i].price.toFixed(2);
  buyBtn.className = "buy";
  buyBtn.textContent = "Comprar";
  buyBtn.onclick = () => {
    sessionStorage.setItem("productSelected", JSON.stringify(tenisSelecionado)); // Transforma o objeto em string e guarda na sessionStorage
    window.open("product_page.html");
  };

  box.appendChild(img);
  nameBox.appendChild(nameTenis);
  nameBox.appendChild(price);
  box.appendChild(nameBox);
  box.appendChild(buyBtn);

  const list = document.getElementById("list");
  list.appendChild(box);

  let tenisSelecionado = tenis[i];
}
