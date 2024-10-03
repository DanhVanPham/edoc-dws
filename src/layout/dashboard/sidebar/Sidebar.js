import React from 'react'
import { IconSquareHalf } from '../../../components/icons'
import { menuItems } from './constant'
import LinkItem from './LinkItem'
import { Link } from 'react-router-dom'

export default function Sidebar({ isCollapse, onCollapse }) {
    return (
        <div id="bst-sidebar-wrapper">
            <div
                id={isCollapse ? "bst-sidebar-collapse" : 'bst-sidebar'}
                className={`${isCollapse ? 'w-7 sync-collapse' : 'w-210px'} toggle-sidebar collapse-horizontal show`}
            >
                <div className="h-0d5r"></div>
                <div className={isCollapse ? 'd-flex-center' : `d-flex align-items-center justify-content-between `}>
                    <Link to="/">
                        <div className='d-flex-center justify-content-between'>
                            {isCollapse && <img src="/images/logo-collapse.png" alt="logo.png" className="w-100" />}
                            {!isCollapse && <img src="/images/logo.png" alt="logo.png" className="w-80" />}
                        </div>
                    </Link>
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
                    {menuItems.map((board, index) => (
                        <div key={index} className={`board board-${index + 1}`}>
                            {!isCollapse && <p className="board-title">{board.title}</p>}
                            <div className="h-0d5r"></div>
                            <ul className={board.isSingle ? 'board-single' : 'board-collapse'}>
                                {board.items.map((item, idx) => (
                                    <LinkItem key={idx} item={item} isCollapse={isCollapse} />
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
