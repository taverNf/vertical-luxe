const produtoJSON = sessionStorage.getItem('productSelected')
const produto = JSON.parse(produtoJSON) // Transforma a string dos detalhes de volta para um objeto

// Imagem do produto
const img = document.getElementById('productImg')
    img.src = produto.img


// Nome do produto
const productName = document.getElementById('productName')
    productName.textContent = produto.nome


// Preço do produto
const price = document.getElementById('price')
    const priceFormated = produto.price.toFixed(2)
    price.textContent = `R$ ${priceFormated} no pix`
const parcel = document.getElementById('parcel')
    const parcelPrice = priceFormated / 3
    parcel.textContent = `ou parcele em até 3x de ${parcelPrice.toFixed(2)} sem juros`


// Cor do produto
const productColor = document.getElementById('productColor')
    const colorString = produto.colorString
    productColor.innerHTML = `<b>Cor do produto: </b> ${colorString}`
const color = document.getElementById('color')
    color.style.backgroundColor = produto.color


// Tamanhos do produto
let sizeSelected
const sizeBase = [38, 39, 40, 41, 42, 43, 44]
for (let i = 0; i < sizeBase.length; i++){
    let size = document.createElement('span')
    size.className = 'size'
    size.textContent = sizeBase[i]

    if(produto.sizes.includes(sizeBase[i])){
        size.classList.add('contain')
        size.onclick = () => {
            // Seleciona todos elementos e remove a classe selecionada
            document.querySelectorAll('.contain.selected').forEach(item =>
                {item.classList.remove('selected')})

            sizeSelected = sizeBase[i]
            size.classList.add('selected')

            document.getElementById('productSize').innerHTML = `<b>Tamanho do produto: </b> ${sizeSelected}`
        }
    }

    const sizeGrid = document.getElementById('sizeGrid')
    sizeGrid.appendChild(size)
}


// Título do site
const nomeProduto = produto.nome
    document.title = `${nomeProduto} | Loja exemplo`



// Funções

function buy(){
    if (!sizeSelected){
        alert('Selecione um tamanho.')
    } else {
        alert(
            produto.nome + produto.price + produto.colorString + sizeSelected
        )
    }
}