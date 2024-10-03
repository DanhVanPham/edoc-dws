import React from "react";
import { IconProfile } from "../../../components/icons";

const ProfilePopover = () => {
  return (
    <div id="bst-profile">
      <button
        type="button"
        className="btn-none btn-icon dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-bs-auto-close="outside"
      >
        <IconProfile />
      </button>
      {/* <!-- Dropdown --> */}
      <ul className="dropdown-menu dropdown-menu-style1 dropdown-menu-hover-style1 dropdown-menu-sm dropdown-menu-end">
        <li>
          <a className="dropdown-item" href="/">
            <i className="bi bi-lock"></i>&nbsp;&nbsp;&nbsp;Change Password
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            data-bs-toggle="collapse"
            href="#collapseProfile"
            role="button"
            aria-expanded="false"
            aria-controls="collapseProfile"
          >
            <i className="bi bi-person"></i>&nbsp;&nbsp;&nbsp;Your Profile
          </a>
          <div className="collapse" id="collapseProfile">
            <div className="card card-body border-0 py-0 px-2">
              <ul className="list-group-none">
                <li>
                  <a href="/">Grade</a>
                </li>
                <li>
                  <a href="/">Your Boss</a>
                </li>
                <li>
                  <a href="/">Your Staff</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <a className="dropdown-item" href="/">
            <i className="bi bi-feather"></i>&nbsp;&nbsp;&nbsp;Your Activities
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" href="/">
            <i className="bi bi-box-arrow-right"></i>
            &nbsp;&nbsp;&nbsp;Log Out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProfilePopover;
