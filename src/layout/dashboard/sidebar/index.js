import React from 'react'
import Sidebar from './Sidebar'

const SidebarContainer = ({ isCollapse, onCollapse }) => {
    return (
        <div id="bst-sidebar-wrapper">
            <Sidebar isCollapse={isCollapse} onCollapse={onCollapse} />
        </div>
    )
}

export default SidebarContainer