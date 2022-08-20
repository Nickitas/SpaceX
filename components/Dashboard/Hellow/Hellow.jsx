import classes from './hellow.module.scss'

const Hellow = ({ data }) => {
    return (
        <div className={classes.hellow}>
            <div className={classes.title}>{ data[0] }</div>
            <p className={classes.subtitle}>{ data[1] }</p>
        </div>
    )
}

export default Hellow