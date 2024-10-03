import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const LinkItem = ({ item, isCollapse }) => {
    const [isShowSubItems, setShowSubItems] = useState(false);

    return (
        <li className="board-item">
            {item.isCollapsible ? (
                <>
                    <button
                        className={`btn board-link btn-none ${!isShowSubItems && 'collapsed'}`}
                        data-bs-toggle="collapse"
                        data-bs-target={`#${item.collapseId}`}
                        onClick={() => setShowSubItems(prev => !prev)}
                    >
                        {item.icon}
                        {!isCollapse && <span className="text-start ms-2">{item.label}</span>}
                    </button>
                    <ul id={item.collapseId} className={`board-collapse-items collapse ${!isShowSubItems && 'show'}`}>
                        {item.subItems && item.subItems.map((subItem, idx) => (
                            <LinkItem key={idx} item={subItem} isCollapse={isCollapse} />
                        ))}
                    </ul>
                </>
            ) : (
                <Link to={item.link || '#'} className="btn board-link">
                    {item.icon}
                    {!isCollapse && <span className="text-start ms-2">{item.label}</span>}
                </Link>
            )}
        </li>
    );
};

export default LinkItem