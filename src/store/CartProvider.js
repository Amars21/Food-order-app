import CartContext from "./cart-context";
import React,{useReducer} from "react";

const DefaultState={
    items:[],
    totalAmount:0
}

function CartReducer(state, action){
    if(action.type==="ADD"){
        const UpdatedItems= state.items.concat(action.item);
        const UpdatePrice= state.totalAmount + action.item.price* action.item.amount;
        return {
            items:UpdatedItems,
            totalAmount:UpdatePrice
        };
    }

    return DefaultState;
}

function CartProvider(props){

   const[cartState, dispatchAction] = useReducer(CartReducer, DefaultState);

    function addItemHandler(item){
        dispatchAction({type:"ADD", item:item})
    }
    function removeItemHandler(id){
        dispatchAction({type:"REMOVE", id:id})
    }

    const cartContext={
        items:cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    return <CartContext.Provider value={cartContext}>
    {props.children}
    </CartContext.Provider>
}

export default CartProvider