const tenis = [
    {
        nome: 'Nike',
        price: 599.90,
        img: 'img/img_example.webp'
    },
    {
        nome: 'Adidas',
        price: 649.90,
        img: 'img/img_example.webp'
    },
    {
        nome: 'Puma',
        price: 349.90,
        img: 'img/img_example.webp'
    },
    {
        nome: 'Asics',
        price: 549.90,
        img: 'img/img_example.webp'
    },
    {
        nome: 'New balance',
        price: 399.90,
        img: 'img/img_example.webp'
    },
    {
        nome: 'Olympikus',
        price: 499.90,
        img: 'img/img_example.webp'
    },
]

for (let i = 0; i < tenis.length; i++){
    let box = document.createElement('li')
    box.className = 'item-box'

    let img = document.createElement('img')
    img.className = 'item-img'
    img.src = tenis[i].img

    let nameBox = document.createElement('div')
    nameBox.classList = 'name-box'
    
    let nameTenis = document.createElement('h2')
    nameTenis.className = 'item-name'
    nameTenis.textContent = tenis[i].nome

    let price = document.createElement('h2')
    price.className = 'price'
    price.textContent = 'R$ ' + tenis[i].price.toFixed(2)

    let buyBtn = document.createElement('button')
    buyBtn.className = 'buy'
    buyBtn.textContent = 'Comprar'

    box.appendChild(img)
    nameBox.appendChild(nameTenis)
    nameBox.appendChild(price)
    box.appendChild(nameBox)
    box.appendChild(buyBtn)

    const list = document.getElementById('list')
    list.appendChild(box)
}