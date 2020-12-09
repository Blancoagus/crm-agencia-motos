// MODAL NUEVO VEHICULO

var btnModal = document.getElementById('btnModal'),
    btnModal2 = document.getElementById('btnModal2')


    var modal = document.getElementById('modal'),
        closeModal = document.getElementsByClassName('close')[0],
        body = document.getElementsByTagName('body')[0],
        modal2 = document.getElementById('modal2'),
        closeModal2 = document.getElementsByClassName('close2'),
        modalActive = true;

    btnModal.onclick = (e) => {
        e.preventDefault();
        modal.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    closeModal.onclick = () => {
        modal.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "100vh";
        body.style.overflow = "visible";
    }

    btnModal2.onclick = (e) => {
        modal2.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    closeModal2.onclick = () => {
        modal2.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "100vh";
        body.style.overflow = "visible";
    }

    window.onclick = function (e) {
        if (e.target == modal) {
            modal.style.display = "none";
            body.style.position = "inherit";
            body.style.height = "100vh";
            body.style.overflow = "visible"
        } else if (e.target == modal2){
            modal2.style.display = 'none';
            body.style.position = "inherit";
            body.style.height = "100vh";
            body.style.overflow = "visible"
        }

        if(e.target.classList[0] == closeModal2[0].classList[0]){
            modal2.style.display = "none";
            body.style.position = "inherit";
            body.style.height = "100vh";
            body.style.overflow = "visible";
        }


}


// MODULO REFACCIONES - NUEVO PROVEEDOR



var actualUrl = window.location.pathname


if (actualUrl == "/refacciones.html") {
    var addProvider = document.getElementById('addProvider'),
        formProvider = document.getElementsByClassName('group-provider')[0],
        closeProvider = document.getElementsByClassName('close-provider')[0]

    addProvider.onclick = () => {
        formProvider.style.display = "flex"
    }

    closeProvider.onclick = () => {
        formProvider.style.display = "none"
    }
}




// SELECCION DE FACTURA - SEGUIMIENTO COTIZACION - SEGUIMIENTO FACTURA





window.addEventListener('click', (e) => {
    var sellsActive = document.getElementsByClassName('active')[0]

    if (e.target != sellsActive) {
        var clickItem = e.target.className


        // MODULO CRM
        // MODULO ESTADISTICAS

        if (actualUrl == "/estadisticas.html") {
            if (clickItem == 'sells-item') {
                var clientStats = document.getElementsByClassName('client-stats')[0],
                    inventoryStats = document.getElementsByClassName('inventory-stats')[0],
                    sellsStats = document.getElementsByClassName('sells-stats')[0],
                    sellsStats2 = document.getElementsByClassName('sells-stats2')[0]


                sellsActive.classList.remove('active')
                sellsActive = e.target
                sellsActive.classList.add('active')

                if (sellsActive.innerText == 'Clientes') {
                    clientStats.style.display = 'block'
                    inventoryStats.style.display = 'none'
                    sellsStats.style.display = 'none'
                    sellsStats2.style.display = 'none'
                } else if (sellsActive.innerText == 'Inventario') {
                    clientStats.style.display = 'none'
                    inventoryStats.style.display = 'block'
                    sellsStats.style.display = 'none'
                    sellsStats2.style.display = 'none'
                } else if (sellsActive.innerText == 'Agentes') {
                    clientStats.style.display = 'none'
                    inventoryStats.style.display = 'none'
                    sellsStats.style.display = 'block'
                    sellsStats2.style.display = 'block'
                }
            }
        }



        // MODULO REFACCIONES - NUEVO PROVEEDOR


         if(clickItem === 'parts-item'){
             var containerParts = document.getElementsByClassName('parts-info-container')[0],
                 containerSells = document.getElementsByClassName('parts-sells-containter')[0],
                 containerStock = document.getElementsByClassName('parts-stock-containter')[0]

             sellsActive.classList.remove('active')
             sellsActive = e.target
             sellsActive.classList.add('active')

             

             if(sellsActive.innerText == "Repuestos" || sellsActive.innerText === 'Negociaciones'){
                 containerParts.style.display = "block"
                 containerSells.style.display = "none"
                 containerStock.style.display = "none"
             } else if(sellsActive.innerText == "Ventas" || sellsActive.innerText === 'Compañias') {
                 containerParts.style.display = "none"
                 containerSells.style.display = "block"
                 containerStock.style.display = "none"
             } else if(sellsActive.innerText == "Stock"){
                 containerParts.style.display = "none"
                 containerSells.style.display = "none"
                 containerStock.style.display = "block"
             }
         } 


        // MODULO VENTAS

      if (actualUrl == "/ventas.html") {

            if (clickItem === 'sells-item') {
                var quoteActive = document.getElementsByClassName('quote-info-container')[0],
                    billFollow = document.getElementsByClassName('bill-follow')[0],
                    billContent = document.getElementsByClassName('bills-info-container')[0]


                sellsActive.classList.remove('active')
                sellsActive = e.target
                sellsActive.classList.add('active')

                if (sellsActive.innerText === 'Facturas') {
                    billContent.style.display = "block"
                    quoteActive.style.display = "none"
                    billFollow.style.display = "none"
                } else if (sellsActive.innerText === 'Seguimiento de Cotizaciones') {
                    quoteActive.style.display = "block"
                    billFollow.style.display = 'none'
                    billContent.style.display = 'none'
                } else if (sellsActive.innerText === 'Seguimiento de Facturas') {
                    billFollow.style.display = "block"
                    billContent.style.display = "none"
                    quoteActive.style.display = "none"
                }
            }
        }
    }
}) 