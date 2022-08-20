import classes from './Benefits.module.scss'

const Card = ({ card }) => {
    return (
        <div className={classes.card}>
            <p>{card.txt1}</p>
            <h2>{card.num}</h2>
            <p>{card.txt2}</p>
        </div>
    )
}

const Benefits = ({ data }) => {
    return (
        <div className={classes.benefits}>
            <div className={classes.wrapper}>
                {
                    data.map((card, key) => <Card key={key} card={card} />)
                }
            </div>
        </div>
    )
}

export default Benefits