import React from 'react';


import classes from './Header.module.css';

import mealsImage from '../../Assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

function Header(props){
    return(
         <div>
        <header className={classes.header}>
            <h1>React meals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
           <img src={mealsImage} alt="Image 1"/>
        </div>
    </div>
    );
};

export default Header;