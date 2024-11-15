function openModal(){
    const modal = document.querySelector('.modal')
    modal.style.display = 'flex'
}

function closeModal(event){
    const modal = document.querySelector('.modal')

    if(event === undefined)
        return modal.style.display = 'none'

    if(event.target.className === 'modal')
        return modal.style.display = 'none'
}

function addTicker (event) {
    //previne comportamento padrão da pag
    event.preventDefault()

const cardList = document.querySelector('#card-list')

    const urlLogo = event.target.urlLogo.value
    const nameCompany = event.target.nameCompany.value
    const ticker = event.target.ticker.value
    const quantity = event.target.quantity.value
    const closedValue = event.target.closedValue.value

    cardList.innerHTML += `
    <div class="card-ticker">
       <header>
        <img src="${urlLogo}">
        <h4>${nameCompany}</h4>
        <span>${ticker}</span>
       </header>
       <main>
        <p>Valor: <span style="color: #1ebd1e">150,00 <span>▲▼</span></span></p>
       </main>
       <footer>
        <p>Quantidade: <span>${quantity}</span></p>
        <p>Posição: <span>${closedValue}</span></p>
      </footer>
    </div>`
    closeModal()
    event.target.reset()
}