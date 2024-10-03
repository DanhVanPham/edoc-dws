import React from 'react'
import {
    IconArchive, IconBoxArrowRight, IconCurrency, IconFeather,
    IconFile, IconGear, IconHelp, IconHome, IconPerson,
    IconSquareHalf, IconStack, IconSuitcase, IconTask
} from '../../../components/icons'

const Sidebar = ({ isCollapse, onCollapse }) => {
    return (
        <div
            id={isCollapse ? "bst-sidebar-collapse" : 'bst-sidebar'}
            className={`${isCollapse ? 'w-7 sync-collapse' : 'w-210px'} toggle-sidebar collapse-horizontal show`}
        >
            <div className="h-0d5r"></div>
            <div className={isCollapse ? 'd-flex-center' : `d-flex align-items-center justify-content-between `}>
                <a href="/">
                    <div className='d-flex-center justify-content-between'>
                        {isCollapse && <img src="/images/logo-collapse.png" alt="logo.png" className="w-100" />}
                        {!isCollapse && <img src="/images/logo.png" alt="logo.png" className="w-80" />}
                    </div>
                </a>
                <button
                    className="btn-none btn-collapse"
                    data-bs-toggle="collapse"
                    data-bs-target=".toggle-sidebar"
                    onClick={onCollapse}
                >
                    <IconSquareHalf />
                </button>
            </div>
            <div className="h-1d25r"></div>
            <div className="group-board">
                <div className="board board-1">
                    {!isCollapse && <p className="board-title">Dashboards</p>}
                    <div className="h-0d5r"></div>
                    <ul className="board-single">
                        <li className="board-item active">
                            <a href="index.html" className="btn board-link"
                            >
                                <IconHome />
                                {!isCollapse && <span className="text-start ms-2">Home</span>}
                            </a>
                        </li>
                        <li className="board-item">
                            <a href="/" className="btn board-link"
                            >
                                <IconTask />
                                {!isCollapse && <span className="text-start ms-2">To-do List</span>}
                            </a>
                        </li>
                        <li className="board-item">
                            <a href="/" className="btn board-link">
                                <IconFile />
                                {!isCollapse && <span className="text-start ms-2">Approve Docs</span>}
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="h-0d5r"></div>
                <div className="board board-2">
                    {!isCollapse && <p className="board-title">Other</p>}
                    <ul className="board-collapse">
                        <li className="board-item">
                            <button
                                className="btn board-link btn-none"
                                data-bs-toggle="collapse"
                                data-bs-target="/bst-board-finance"
                                data-bs-placement="right"
                            >
                                <IconStack />
                                {!isCollapse && <span className="text-start ms-2">Finance</span>}
                            </button>
                            <ul
                                id="bst-board-finance"
                                className="board-collapse-items collapse"
                            >
                                <li className="board-item">
                                    <a href="finance.html" className="btn board-link"
                                    >
                                        <IconArchive />
                                        {!isCollapse && <span className="text-start ms-2">Page</span>}
                                    </a>
                                </li>
                                <li className="board-item">
                                    <a href="finance-create.html" className="btn board-link"
                                    >
                                        <IconArchive />
                                        {!isCollapse && <span className="text-start ms-2">Create</span>}
                                    </a>
                                </li>
                                <li className="board-item">
                                    <a href="finance-schedule.html" className="btn board-link"
                                    >
                                        <IconArchive />
                                        {!isCollapse && <span className="text-start ms-2">Schedule</span>}
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="board-item">
                            <button className="btn board-link btn-none">
                                <IconCurrency />
                                {!isCollapse && <span className="text-start ms-2">Accounting</span>}
                            </button>
                        </li>
                        <li className="board-item">
                            <button className="btn board-link btn-none">
                                <IconPerson />
                                {!isCollapse && <span className="text-start ms-2">HR</span>}
                            </button>
                        </li>
                        <li className="board-item">
                            <button className="btn board-link btn-none">
                                <IconSuitcase />
                                {!isCollapse && <span className="text-start ms-2">TA</span>}
                            </button>
                        </li>
                        <li className="board-item">
                            <button className="btn board-link btn-none">
                                <IconPerson />
                                {!isCollapse && <span className="text-start ms-2">Admin</span>}
                            </button>
                        </li>
                        <li className="board-item">
                            <button className="btn board-link btn-none">
                                <IconFeather />
                                {!isCollapse && <span className="text-start ms-2">Report</span>}
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="h-0d5r"></div>
                <div className="board board-3">
                    {!isCollapse && <p className="board-title">Settings</p>}
                    <ul className="board-collapse">
                        <li className="board-item">
                            <button className="btn board-link btn-none">
                                <IconGear />
                                {!isCollapse && <span className="text-start ms-2">System</span>}
                            </button>
                        </li>
                    </ul>
                    <ul className="board-single">
                        <li className="board-item">
                            <a href="search-result.html" className="btn board-link"
                            >
                                <IconHelp />
                                {!isCollapse && <span className="text-start ms-2">Help</span>}
                            </a>
                        </li>
                        <li className="board-item">
                            <a href="login.html" className="btn board-link"
                            >
                                <IconBoxArrowRight />
                                {!isCollapse && <span className="text-start ms-2">Login</span>}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar