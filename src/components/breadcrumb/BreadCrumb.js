import React from "react";
import { Link } from "react-router-dom";
import { IconSquareHalf } from "../icons";

const BreadCrumb = ({ items, onCollapse }) => {
  return (
    <nav aria-label="breadcrumb" className="d-flex gap-3 align-items-center">
      <button
        className="btn-none"
        data-bs-toggle="collapse"
        data-bs-target=".toggle-sidebar"
        onClick={onCollapse}
      >
        <IconSquareHalf />
      </button>
      <ol className="breadcrumb">
        {items.map((item, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${item.isActive ? "active" : ""}`}
            aria-current={item.isActive ? "page" : undefined}
          >
            {item.isActive ? (
              item.label
            ) : (
              <Link to={item.link}>{item.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
