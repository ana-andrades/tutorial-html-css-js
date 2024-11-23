function openModal(id){
    const modal = document.querySelector(id)
    modal.style.display = 'flex'
}

function closeModal(event, id){
    const modal = document.querySelector(id)

    if(event === null)
        return modal.style.display = 'none'

    if(event.target.className === 'modal')
        return modal.style.display = 'none'
}

function addTicker (event) {
    //previne o comportamento padrão de recarregar a página ou enviar para algum endereço (action)

    event.preventDefault()
    // event.target (form)
    
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

function showCardOptions(event){
    const cardOptions = event.target.querySelector('.card-options')
    cardOptions.style.display = 'flex'
}

function hideCardOptions(event){
    const cardOptions = event.target.querySelector('.card-options')
    cardOptions.style.display = 'none'
}

function removeCard(event) {
    //closest busca os ancestrais do elemento
    const cardTicker = event.target.closest('.card-ticker')

    cardTicker.remove()
}

function removeCard(event){
    // closest(...) busca nos acendentes um elemento
    const cardTicker = event.target.closest('.card-ticker')
    // .remove() deleta o elemento do html
    cardTicker.remove()
}

function editTicker(event){
    const cardTicker = event.target.closest('.card-ticker')
    
    const imgLogo = cardTicker.querySelector('header img')
    const urlLogo = imgLogo.getAttribute('src')
    document.querySelector('#eUrlLogo').value

    const nomeCompany = cardTicker.querySelector('header img')
    const  = .getAttribute('src')
    document.querySelector('#eUrlLogo').value

    openModal('#modal-edit-ticker')
}