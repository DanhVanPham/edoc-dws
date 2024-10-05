import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const LinkItem = ({ item, isCollapse }) => {
  const [isShowSubItems, setShowSubItems] = useState(false);
  const [height, setHeight] = useState(0);
  const subItemRef = useRef(null);

  useEffect(() => {
    // Update the height whenever the visibility of sub-items changes
    if (isShowSubItems && subItemRef.current) {
      setHeight(subItemRef.current.scrollHeight); // Get the full height of the expanded element
    } else {
      setHeight(0); // Set to 0 when collapsed
    }
  }, [isShowSubItems]);

  const hasSubItems = !!item.subItems?.length;

  return (
    <li className={`board-item ${hasSubItems ? " board-collapse-items" : ""}`}>
      {hasSubItems ? (
        <>
          <button
            className={`btn board-link btn-none btn-group ${
              !isShowSubItems ? "collapsed" : ""
            }`}
            data-bs-toggle="collapse"
            data-bs-target={`#${item.collapseId}`}
            onClick={() => setShowSubItems((prev) => !prev)}
          >
            {item.icon}
            {!isCollapse && (
              <span className="text-start ms-2">{item.label}</span>
            )}
          </button>
          <ul
            id={item.collapseId}
            className={`ps-2  collapse ${!isShowSubItems && "show"}`}
            ref={subItemRef}
            style={{
              height: `${height}px`, // Animate based on height
              overflow: "hidden", // Hide content when collapsed
              transition: "height 0.3s ease-in-out", // Smooth transition
            }}
          >
            {item.subItems &&
              item.subItems.map((subItem, idx) => (
                <LinkItem key={idx} item={subItem} isCollapse={isCollapse} />
              ))}
          </ul>
        </>
      ) : (
        <Link to={item.link || "#"} className="btn board-link">
          {item.icon}
          {!isCollapse && <span className="text-start ms-2">{item.label}</span>}
        </Link>
      )}
    </li>
  );
};

export default LinkItem;
