import React, { Fragment, useEffect, useState } from "react";
import Picoteo from './Picoteo'
import Cart from '../Cart'
import './MenuCarta.css'

<<<<<<< HEAD
const initialOrder = []

//const Pedidos =()=>{

//}
function useMenu() {
   const [menu, setMenu] = useState([])
   useEffect(() => {
      fetch("json/picoteo.json")
         .then(response => response.json())
         .then(datos => {
            setMenu(datos)
         })
   }, [])
   return menu
=======
function usePicoteo() {
  const [picoteo, setPicoteo] = useState([])

  useEffect(() => {
    fetch("json/picoteo.json")
      .then(response => response.json())
      .then(datos => {
        setPicoteo(datos)
      })
  }, [])

  return picoteo
>>>>>>> be9621acdc0d9eacfc51c0f8a77fc746cc95af32
}

export default function Datos() {
<<<<<<< HEAD
   const menu = useMenu()
   //////////////////////////////////////////////
   /* Constante que se va a crear para manejar la orden  */
   //const [menu, setMenu] = useState([]);
   ///////////////////////////////////////////
   //////const [order, setOrder] = useState([]);
   /* Para manejar click de cada opción */
   // const [opciones, setOpciones] = useState([]);
   const [order, setOrder] = useState([]);
   const handleClick = (e) => {
      // console.log(e.target.name);
      // console.log(e.target.value);
      const orderName = e.target.name;
      const orderPrice = e.target.value;
      console.log(orderName);
      console.log(orderPrice);
      initialOrder.push({ "name": orderName, "value": orderPrice });
      setOrder(initialOrder + 1);
      console.log(order);
      console.log(initialOrder);


   };


   return (
=======
  const picoteo = usePicoteo()
  const [cart, setCart] = useState([])
  const arrayPicoteo = picoteo.filter(picot => picot.Type === "Picoteo")
  console.log(arrayPicoteo);
>>>>>>> be9621acdc0d9eacfc51c0f8a77fc746cc95af32

  return (
    <Fragment>
      <div className="contenedorDeMenu">
<<<<<<< HEAD
         <h1 className="TituloCarta"> Carta </h1>
         <table>
            <tr>
               <th><button id="" type="button" className="btnMenuTitulo">PICOTEO</button></th>
            </tr>
            <tbody>
               {menu.map(item => (

                  <tr key={item.type}>

                     <td><button id={item.id} className="btnDetalleMenu"
                        onClick={handleClick} name={item.name} value={item.price}
                     //{()=>

                     //console.log (item.name)
                     ///</td>//}
                     >{item.name}:${item.price}</button></td>

                  </tr>

               ))}

            </tbody>
         </table>


         <div className="pedidoBox">
            {initialOrder.map((item, type) => {
               return <div key={type}>
                  <p>{item.name}</p>
                  <p>{item.value}</p>
               </div>
            })}
         </div>

      </div>
   
   );
}
=======
        {/*<button id="" type="button" className="btnMenuTituloDos">PICOTEO</button>*/}
        {arrayPicoteo.map((picot) => (
          <Picoteo
            key={picot.id}
            picot={picot}
            cart={cart}
            setCart={setCart}
            picoteo={picoteo}
          />
        ))}

        {/*  <Cart 
           cart={cart} 
           setCart={setCart}
            />
         */}
      </div>
    </Fragment>
  )
};


//const initialOrder=[]
  // initialOrder.push({ "name": orderName, "value": orderPrice });
   //setOrder(initialOrder+1);
   //console.log(order);
   //console.log(initialOrder);
>>>>>>> be9621acdc0d9eacfc51c0f8a77fc746cc95af32
