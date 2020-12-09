window.addEventListener('click', (e) => {

    // MENU CON CAMBIO DE FOCUS Y PINTANDO DOCUMENTOS

    if (document.getElementById('dinamicMenu')) {
        var menuDinamic = document.getElementById('dinamicMenu'),
            menuLength = menuDinamic.childElementCount,
            itemActive = document.getElementsByClassName('active')[0],
            li = document.getElementsByTagName('li')[0]

            if (e.target != itemActive && e.target.tagName == 'LI') {

                itemActive.classList.remove('active')
                itemActive = e.target
                itemActive.classList.add('active')

                if(menuLength ==4){
                    var containerDinamic1 = document.getElementsByClassName('container-dinamic-1')[0],
                    containerDinamic2 = document.getElementsByClassName('container-dinamic-2')[0],
                    containerDinamic3 = document.getElementsByClassName('container-dinamic-3')[0],
                    containerDinamic4 = document.getElementsByClassName('container-dinamic-4')[0]

                    if(itemActive.id == containerDinamic1.id){
                        containerDinamic1.style.display = 'block'
                        containerDinamic2.style.display = 'none'
                        containerDinamic3.style.display = 'none'
                        containerDinamic4.style.display = 'none'
                    } else if (itemActive.id == containerDinamic2.id){
                        containerDinamic1.style.display = 'none'
                        containerDinamic2.style.display = 'block'
                        containerDinamic3.style.display = 'none'
                        containerDinamic4.style.display = 'none'
                    } else if(itemActive.id == containerDinamic3.id){
                        containerDinamic1.style.display = 'none'
                        containerDinamic2.style.display = 'none'
                        containerDinamic3.style.display = 'block'
                        containerDinamic4.style.display = 'none'
                    } else{
                        containerDinamic1.style.display = 'none'
                        containerDinamic2.style.display = 'none'
                        containerDinamic3.style.display = 'none'
                        containerDinamic4.style.display = 'block'
                    }

                }else if(menuLength == 3){
                    var containerDinamic1 = document.getElementsByClassName('container-dinamic-1')[0],
                    containerDinamic2 = document.getElementsByClassName('container-dinamic-2')[0],
                    containerDinamic3 = document.getElementsByClassName('container-dinamic-3')[0]

                    if(itemActive.id == containerDinamic1.id){
                        containerDinamic1.style.display = 'block'
                        containerDinamic2.style.display = 'none'
                        containerDinamic3.style.display = 'none'
                    } else if (itemActive.id == containerDinamic2.id){
                        containerDinamic1.style.display = 'none'
                        containerDinamic2.style.display = 'block'
                        containerDinamic3.style.display = 'none'
                    } else{
                        containerDinamic1.style.display = 'none'
                        containerDinamic2.style.display = 'none'
                        containerDinamic3.style.display = 'block'
                    }
                } else if (menuLength == 2){
                    var containerDinamic1 = document.getElementsByClassName('container-dinamic-1')[0],
                    containerDinamic2 = document.getElementsByClassName('container-dinamic-2')[0],
                    containerDinamic3 = document.getElementsByClassName('container-dinamic-3')[0]

                    if(itemActive.id == containerDinamic1.id){
                        containerDinamic1.style.display = 'block'
                        containerDinamic2.style.display = 'none'
                    } else {
                        containerDinamic1.style.display = 'none'
                        containerDinamic2.style.display = 'block'
                    } 

                }
                
               
                
                    if(itemActive.innerText == 'Compañias'){
                        containerDinamic1.style.display = 'block'
                        containerDinamic2.style.display = 'none'
                        containerDinamic3.style.display = 'none'

                    }else if (itemActive.innerText === 'Clientes'){
                        containerDinamic1.style.display = 'none'
                        containerDinamic2.style.display = 'block'
                        containerDinamic3.style.display = 'none'
                    } else if(itemActive.innerText == 'Contactos'){
                        containerDinamic1.style.display = 'none'
                        containerDinamic2.style.display = 'none'
                        containerDinamic3.style.display = 'block'
                    }
    
    
            } // FIN E.TARGET
    
     
    } // FIN DE DINAMIC MENU

    

    if(document.getElementsByClassName('modal').length != 0){
        var modals = document.getElementsByClassName('modal').length,
            openModal = false
        

        if (modals == 1){
            var btnModal = document.getElementById('btnModal'),
                closeModal = document.getElementById('closeModal'),
                body = document.getElementsByTagName('body')[0],
                modalContainer = document.getElementById('modalContainer1')
                
        } else if(modals == 2) {
            var btnModal = document.getElementById('btnModal'),
                btnModal2 = document.getElementById('btnModal2'),
                closeModal = document.getElementById('closeModal'),
                closeModal2 = document.getElementById('closeModal2'),
                body = document.getElementsByTagName('body')[0],
                modalContainer = document.getElementById('modalContainer1'),
                modalContainer2 = document.getElementById('modalContainer2')
        }


        if(e.target == btnModal){
            e.preventDefault()
            modalContainer.style.display = "block"
            body.style.position = "static"
            body.style.height = '100%'
            body.style.overflow = "hidden"            
        } elsen

        if(e.target == closeModal || e.target == closeModal2 || e.target == modalContainer1 || e.target == modalContainer2){
            modalContainer1.style.display = "none"
            body.style.position = "inherit"
            body.style.height = "inherit"
            body.style.overflow = "visible"
        }


    } else {
        console.log('no hay modales')
    }


    
    
})