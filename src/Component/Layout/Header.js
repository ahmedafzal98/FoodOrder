import React, { Fragment } from 'react'
import classes from '../Layout/Header.module.css'
import logo from '../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Ahmed's Meal</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={logo} alt='Meals' />
            </div>
        </Fragment>
    )
}
export default Header