import { Button } from "bootstrap";
import React from "react";
import ItemCount from "../../pages/home/ItemDetailContainer/ItemCount/ItemCount";


import { BiCartAdd } from "react-icons/bi" ; 


export const CartWidget =()=>{
    const onAdd= (quantity)=>{
        console.log('comprastes ${quantity} unidades');
        }
    return (
        <div>
    <button>
        < BiCartAdd></BiCartAdd>
        <p>0</p>
    </button>
    
{/*<ItemCount initial ={0} StockDeFilms={6} onAdd={onAdd} />*/}


        </div>

    
    );
}

export default CartWidget ;