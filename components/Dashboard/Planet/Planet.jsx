import classes from './planet.module.scss'

const Planet = () => {
    return (
        <>
            <div className={classes.highlight}></div>
            <div className={classes.planet}></div>
            <div className={classes.glow}></div>
            <div className={classes.sun}></div>
        </>
    )
}

export default Planet