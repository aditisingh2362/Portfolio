import React, { useState } from 'react';
import styles from './SideBar.module.css';

function SideBar(props) {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className={open? styles.sideDrawerOpen: styles.sideDrawer}>
                <h1>Hello, I'm sliding!</h1>
            </div>

        </div>
    );
}

export default SideBar;