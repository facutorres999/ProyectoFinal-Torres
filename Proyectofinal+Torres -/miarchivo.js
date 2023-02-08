const contGrid = document.querySelector('.contGrid')
const tablaCarr = document.querySelector('.tablaCarr')


try {
    fetch("productos/elementos.json")
    .then(respuesta=>{
        return respuesta.json
    })
    .then(datos=>{
        let contador = 0 
        while(datos.length > contador){

            let producto = document.createElement('div')

            let imgCont = document.createElement('div')
            let img = document.createElement('img')

            let titulo = document.createElement('h2')

            let precio = document.createElement('p')

            let addCar = document.createElement('button')

            producto.setAttribute('class','producto')

            imgCont.setAttribute('class','imgCont')

            img.setAttribute('src', datos[contador].img)
            img.setAttribute('alt','one piece manga')

            contenido.setAttribute('class','contenido')

            titulo.setAttribute('class','titulo')
            precio.setAttribute('class','precio')

            titulo.innerHTML = datos[contador].nombre;
            precio.innerHTML = datos[contador].precio +"$";


            addCar.setAttribute('class','addCar')
            addCar.setAttribute('value', contador)
            addCar.innerHTML = 'Añadir al carrito'


            producto.appendChild(imgCont)
            imgCont.appendChild(img)
            producto.appendChild(contenido)
            contenido.appendChild(titulo)
            contenido.appendChild(precio)
            contenido.appendChild(addCar)


            contGrid.appendChild(producto)

            addCar.addEventListener('click' , (e) =>{
                const tdgGen = document.querySelectorAll('obtjst')

                if (tdgGen.length==0){
                    const tr = document.createElement('tr')
                    const tdUno = document.createElement('td')
                    const tdDos = document.createElement('td')

                    tdUno.setAttribute('class' , 'obtjst')

                    tdUno.innerHTML = datos[addCar.value].nombre
                    tdDos.innerHTML = datos[addCar.value].precio

                }

                tdgGen.forEach(elem, i =>{
                    if(elem.innerHTML==datos[addCar.value].nombre){
                        alert('El elemento se ha agregado al carrito')
                    }else{
                        tr.appendChild(tdUno)
                        tr.appendChild(tdDos)
                        tablaCarr.appendChild(tr);
                    }
                    
                })

                tr.appendChild(tdUno)
                tr.appendChild(tdDos)
                tablaCarr.appendChild(tr);
            });

            contador++;

        }

    }) 

} catch (error) {
    console.log(e);
}
