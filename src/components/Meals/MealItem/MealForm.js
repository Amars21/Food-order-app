import Input from '../../UI/Input';
import classes from './MealForm.module.css';
import React,{useRef,useState} from 'react';

function MealForm(props){

    const amountRef=useRef();

    const[isValid, setIsValid]= useState(true);

    function SubmitHandler(event){
        event.preventDefault();
        const enteredAmount= amountRef.current.value;
        const enteredAmountasNumber= +enteredAmount;
        if(enteredAmount.trim().length===0 || enteredAmountasNumber<1 || enteredAmountasNumber>5){
            setIsValid(false);
            return;
        }
        props.onAddChart(enteredAmountasNumber);
    }
    return <form className={classes.form} onSubmit={SubmitHandler}>
        <Input label="Amount" ref={amountRef} input={{
            id:"amount"+ props.id,
            type:"number",
            min:"1",
            max:"5",
            step:"1",
            defaultValue:"1"
        }} />
        <button>Add</button>
        {!isValid && <p>Please enter valid amount</p>}
    </form>
}

export default MealForm;