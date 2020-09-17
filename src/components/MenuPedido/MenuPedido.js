import React from "react";
import './MenuPedido.css';
//import unpedido from '../MenuCarta/MenuCarta';

//console.log(unpedido)

<<<<<<< HEAD

=======
>>>>>>> be9621acdc0d9eacfc51c0f8a77fc746cc95af32
function MenuPedido() {
    const [nombre, setNombre] = React.useState('')
    const [nombresPintar, setnombresPintar] = React.useState([])
    //const[nombreProducto,setnombreProducto]=React.useState([])
    //const [menu, setMenu] = React.useState([])

    const agregarNombre = e => {
        e.preventDefault()
        console.log(nombre)
        /*vamos a agregar if para cuando no haya nombre*/
        if (!nombre.trim()) {
            console.log('Elemento Vacio')
            return
        }
        console.log(nombre)
        setnombresPintar([
            ...nombresPintar,
            { nombreCliente: nombre }
        ])
<<<<<<< HEAD
=======

>>>>>>> be9621acdc0d9eacfc51c0f8a77fc746cc95af32
        /*una vez que el nombre se haya ingresado le pasamos el string vacio para que limpie*/
        setNombre('')
        //setMenu('')
    }

    return (
        <React.Fragment>
            <div className="ContenedorDePedido">
                <h1 className="TituloPedido">Pedido</h1>
                <hr></hr>
<<<<<<< HEAD
=======


>>>>>>> be9621acdc0d9eacfc51c0f8a77fc746cc95af32
                <div>
                    <form onSubmit={agregarNombre} >
                        <input type="text"
                            className="nombreCliente"
                            placeholder="Nombre del Cliente"
                            onChange={e => setNombre(e.target.value)}
<<<<<<< HEAD
                            value={nombre}>
                        </input>
                        <button id="pedidococina" type="submit" className="buttonPedido">Enviar Pedido</button>
                    </form>
                </div>
                <h2 className="NombreCodigoMesero">Codigo Mesero</h2>
                <h2 className="NumeroDePedido">Numero de Pedido</h2>
                <h1 className="TituloProductos">Productos</h1>
                <ul>{
                        nombresPintar.map(item => (
                            <li key={item.nombreCliente}>
                                <span>{item.nombreCliente}</span>

=======
                            value={nombre}
                        >

                        </input>

                        <button id="pedidococina" type="submit" className="buttonPedido">Ingresar nombre</button>

                    </form>
                </div>
                <h2 className="NombreCodigoMesero">Codigo Mesero: M-001</h2>
                <h2 className="NumeroDePedido">Numero de Pedido: P-001</h2>






                <ul>
                    {
                        nombresPintar.map(item => (
                            <li key={item.nombreCliente}>
                                <span>{item.nombreCliente}</span>

>>>>>>> be9621acdc0d9eacfc51c0f8a77fc746cc95af32
                            </li>
                        ))
                    }
                </ul>
                <div className="pedidomenu">
                    <button id="pedidococina" type="submit" className="buttonPedido">Enviar Pedido</button>
                </div>
<<<<<<< HEAD
            </div>
        </React.Fragment>
    );
}
=======
                <div>
                <h1 className="TituloProductos">Productos</h1>
                </div>

            </div>

        </React.Fragment>

    );
}

>>>>>>> be9621acdc0d9eacfc51c0f8a77fc746cc95af32
export default MenuPedido;