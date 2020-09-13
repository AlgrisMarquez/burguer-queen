import React, { useEffect, useState, Fragment } from "react";
import './MenuPostres.css'

//estado del listado de los postres
function usePostres() {
    const [postres, setPostres] = useState([])
    useEffect(() => {
        fetch("json/dataTotal.json")
            .then(response => response.json())
            .then(datos => {
                setPostres(datos)
            })
    }, [])
  return postres
}
// estado de la orden de pedido mesero
//const [Pedidopostres, setPedidopostres] = useState ([])

export default function Datoscuatro() {
    const postres = usePostres()
 const arrayPostres =postres.filter(pos => pos.Type === "Postres")
  //console.log ( arrayEnsaladas);
    return (
        <div className="contenedorDePostres">
            <table>
                <tr>
                    <th><button id="" type="button" className="btnMenuTituloDos">POSTRES</button></th>
                </tr>
                <tbody>
<<<<<<< HEAD
                    <Fragment>
                    {postres.map(item => (
=======
                    {arrayPostres.map(item => (
>>>>>>> 19ded452b7cb104fa2058a6ec0ca04333b4062ed
                        <tr key={item.type}>
                            <td><button id="" type="button" className="btnDetalleMenuDos">{item.name}:${item.price}</button></td>
                        </tr>),
                        console.log (postres),
                        //console.log (setpedidopostres),
                         //postres={postres},
                         //Pedidopostres={pedidopostre}
                         //setPedidopostre={setPedidopostres}
                    )}
                   
                    </Fragment>
                    
                </tbody>
            </table>
        </div>
    )
};
