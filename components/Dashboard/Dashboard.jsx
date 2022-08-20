import Hellow from './Hellow/Hellow'
import Planet from './Planet/Planet'
import Benefits from './Benefits/Benefits'
import { hellowText, benefitsText } from '../../staticsData'
import classes from './dashboard.module.scss'

const Dashboard = () => {
    return (
        <section className={classes.dashboard}>
            <div className='container'>
                <div className={classes.row}>
                    <Hellow data={hellowText} />
                    <Planet />
                    <Benefits data={benefitsText} />
                </div>
            </div>
        </section>
    )
}

export default Dashboard