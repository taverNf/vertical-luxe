const produtoJSON = sessionStorage.getItem('productSelected')
const produto = JSON.parse(produtoJSON) // Transforma a string dos detalhes de volta para um objeto

const img = document.getElementById('productImg')
img.src = produto.img

const productName = document.getElementById('productName')
productName.textContent = produto.nome

const price = document.getElementById('price')
const priceFormated = produto.price.toFixed(2)
price.textContent = `R$ ${priceFormated} no pix`
const parcel = document.getElementById('parcel')
const parcelPrice = priceFormated / 3
parcel.textContent = `ou parcele em até 3x de ${parcelPrice.toFixed(2)} sem juros`

const productColor = document.getElementById('productColor')
const colorString = produto.colorString
productColor.innerHTML = `<b>Cor do produto: </b> ${colorString}`
const color = document.getElementById('color')
color.style.backgroundColor = produto.color

for (let i = 0; i < produto.sizes.length; i++){
    let size = document.createElement('span')
    size.className = 'size'
    size.textContent = produto.sizes[i]

    const sizeGrid = document.getElementById('sizeGrid')
    sizeGrid.appendChild(size)
}

const nomeProduto = produto.nome
document.title = `${nomeProduto} | Loja exemplo`