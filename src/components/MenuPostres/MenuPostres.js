<<<<<<< HEAD
import React, { useEffect, useState, } from "react";
=======
import React, { Fragment, useEffect, useState } from "react";
>>>>>>> be9621acdc0d9eacfc51c0f8a77fc746cc95af32
import './MenuPostres.css'
import Postres from './Postres'
import Cart from '../Cart'

const initialPostresOrder = []

function usePostres() {
    const [postres, setPostres] = useState([])
    useEffect(() => {
        fetch("json/postres.json")
            .then(response => response.json())
            .then(datos => {
                setPostres(datos)
            })
    }, [])
    return postres
}
//exporto esta fucnion, pero no va a ninguan parte???
export default function Datoscuatro() {
    const postres = usePostres()
<<<<<<< HEAD
    /* Para manejar click de cada opción */
    const [orderPostres, setOrderPostres] = useState([]);
    const handleClick = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        const orderName = e.target.name;
        const orderPrice = e.target.value;
        console.log(orderName);
        console.log(orderPrice);
        initialPostresOrder.push({ "name": orderName, "value": orderPrice });
        setOrderPostres(initialPostresOrder);
        console.log(orderPostres);
        console.log(initialPostresOrder)
    };

    //export default function Datoscuatro() {
    //  const postres = usePostres()
=======

    const [cart, setCart]= useState([])
    const arrayPostres =postres.filter(postre=> postre.Type === "Postres")
      console.log ( arrayPostres);
>>>>>>> be9621acdc0d9eacfc51c0f8a77fc746cc95af32

    return (
        <Fragment>
        <div className="contenedorDePostres">
<<<<<<< HEAD
            <table>
                <tr>
                    <th><button id="" type="button" className="btnMenuTituloDos">POSTRES</button></th>
                </tr>
                <tbody>
                    {postres.map(item => (
                        <tr key={item.type}>
                            <td><button id="" type="button" className="btnDetalleMenuDos"
                            onClick={handleClick} name={item.name} value={item.price}>{item.name}:${item.price}</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        <div className="pedidoBox">
            {orderPostres.map((item, type) => {
                return <div key={type}>
                    <p>{item.name}</p>
                    <p>{item.value}</p>
                </div>
            })}
        </div>
      </div >
   );
}

=======
       {/* <button id="" type="button" className="btnMenuTituloDos">POSTRES</button>*/}
            
        {arrayPostres.map((postrecillo) =>  (
            <Postres
            key={postrecillo.id}
            postrecillo={postrecillo}
            cart={cart}
            setCart={setCart}
            postres={postres}
            />
          ))}
        </div>
            </Fragment>


    )
};
>>>>>>> be9621acdc0d9eacfc51c0f8a77fc746cc95af32
