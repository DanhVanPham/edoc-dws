import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="d-flex gap-0 align-items-center">
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
