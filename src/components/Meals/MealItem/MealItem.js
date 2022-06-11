import MealForm from './MealForm';
import classes from './MealItem.module.css'
import CartContext from '../../../store/cart-context';
import React,{useContext} from 'react';


function MealItem(props){
    const price=`$${props.price.toFixed(2)}`;

    const Cart=useContext(CartContext);

    function CartHandler (amount){
        Cart.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        })


    }
    return <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealForm onAddChart={CartHandler}/>
        </div>
    </li>
}

export default MealItem;