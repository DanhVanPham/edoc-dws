import React from "react";
import { IconNotification } from "../../../components/icons";

const NotificationPopover = () => {
  return (
    <div id="bst-notifications">
      <button
        type="button"
        className="btn-none btn-icon dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-bs-auto-close="outside"
      >
        <IconNotification />
      </button>
      {/* <!-- Dropdown --> */}
      <div className="dropdown-menu dropdown-menu-style1 dropdown-menu-sm dropdown-menu-end">
        {/* <!-- header --> */}
        <div className="header">
          <p className="poppins-semibold display-9 leading-16">Notifications</p>

          <div className="dropdown">
            <button
              className="btn-none dropdown-toggle show"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="true"
            >
              <i className="bi bi-three-dots"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-sm dropdown-menu-end dropdown-submenu-style1">
              <li>
                <a className="dropdown-item" href="#">
                  Silent mode
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Mark all as read
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item text-danger" href="#">
                  Delete all read
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- body --> */}
        <ul className="list-group-none list-group-style2">
          <li>
            <a className="dropdown-item unread" href="#">
              <span className="highlight">Mr X</span> wants to edit
              <span className="highlight">Form Budget Transfer</span>
              <span className="checktime d-block mt-1">5 min ago</span>
            </a>
          </li>
          <li>
            <a className="dropdown-item unread" href="#">
              <span className="highlight">Tuan Viet</span> wants to edit
              <span className="highlight">Form Budget ...</span>
              <span className="checktime d-block mt-1">1 hour ago</span>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <span className="highlight">Huy Nguyen</span> completed
              <span className="highlight">Create New Form</span>
              <span className="checktime d-block mt-1">1:12pm</span>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <span className="highlight">Pham Tran</span> added you in
              <span className="highlight">Event Open Gra...</span>
              <span className="checktime d-block mt-1">10:45pm</span>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <span className="highlight">Pham Tran</span> added you in
              <span className="highlight">Event Open Gra...</span>
              <span className="checktime d-block mt-1">10:45pm</span>
            </a>
          </li>
        </ul>
        {/* <!-- footer --> */}
        <div className="text-center">
          <a href="notification.html">View all</a>
        </div>
      </div>
    </div>
  );
};

export default NotificationPopover;
