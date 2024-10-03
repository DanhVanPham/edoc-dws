import React from 'react'
import { Outlet } from 'react-router'

const MainContent = ({ isCollapse }) => {
    return (
        <main class={`bst-main ${isCollapse && 'sync-collapse'}`}>
            <Outlet />
        </main>
    )
}

export default MainContent