import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import React,{useContext} from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';


function Cart(props){

    const Cartctx=useContext(CartContext);
    const TotalAmount= `$${Cartctx.totalAmount.toFixed(2)}`;
    const hasItems= Cartctx.items.length >0 ;

    function CartRemoveHandler(id){}

    function CartAddHandler(item){}

    const cartitems= <ul> { Cartctx.items.map(item=> (
         <CartItem 
         key={item.id} 
         name={item.name} 
         amount={item.amount} 
         price={item.price} 
         onRemove={CartRemoveHandler.bind(null, item.id)} 
         onAdd={CartAddHandler.bind(null,item)} />
    ))}
         </ul>

    return <Modal onClose={props.onClose}>
        {cartitems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{TotalAmount}</span>
        </div> 
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
         {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
}

export default Cart;