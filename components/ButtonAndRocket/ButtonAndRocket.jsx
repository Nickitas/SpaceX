import React from 'react'
import rocket from '../../../public/img/rocket.png'
import classes from './button_and_rocket.module.scss'

const Button = () => {
    return (
        <div className={classes.button_and_rocket}>
            <div className={classes.Button}>Начать путешествие</div>
            <div className={classes.line}></div>
            <img className={classes.rocket} src={rocket} />
        </div>
    )
}

export default Button