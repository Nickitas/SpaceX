import { useState } from 'react'
import logo from '../../../public/img/logo.svg'
import { Menu, Close } from '../../svg.module'
import classes from './nav.module.scss'


const Nav = ({ data }) => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className={classes.nav}>
            <div className='container'>
                <div className={classes.row}>
                    <div className={classes.logo_box}>
                        <div className={classes.logo_box2}>
                            <img src={logo} alt='logo' />
                        </div>
                    </div>
                    <div className={classes.list}>
                        {
                            data.map((item, key) => { return (
                                <div key={key} className={classes.item}>
                                    { item.text }
                                </div>
                            )})
                        }
                    </div>

                    <div className={classes.menu_btn} onClick={() => setMenuOpen(e => !e)}>
                        { menuOpen ? <Close/> : <Menu/> }
                    </div>

                    <div className={`${classes.dropdown} ${menuOpen && classes.open}`}>
                        <div className='container'>
                            <div className={classes.col}>
                                {
                                    data.map((item, key) => <div key={key} className={classes.drop__item}>
                                        { item.text }
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Nav