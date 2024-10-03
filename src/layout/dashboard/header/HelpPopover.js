import React from "react";
import { IconHelp } from "../../../components/icons";

const HelpPopover = () => {
  return (
    <div id="bst-help">
      {/* <!-- Dropdown: Trigger --> */}
      <button
        type="button"
        className="btn-none btn-icon dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-bs-auto-close="outside"
      >
        <IconHelp />
      </button>
      {/* <!-- Dropdown --> */}
      <ul className="dropdown-menu dropdown-menu-style1 dropdown-menu-hover-style1 dropdown-menu-sm dropdown-menu-end">
        <li>
          <a className="dropdown-item" href="/">
            <i className="bi bi-life-preserver"></i>
            &nbsp;&nbsp;&nbsp;Help
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/">
            <i className="bi bi-feather"></i>&nbsp;&nbsp;&nbsp;Training
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            data-bs-toggle="collapse"
            href="/collapseNewReleased"
            role="button"
            aria-expanded="false"
            aria-controls="collapseNewReleased"
          >
            <i className="bi bi-person"></i>&nbsp;&nbsp;&nbsp;New Released
          </a>
          <div className="collapse" id="collapseNewReleased">
            <div className="card card-body border-0 py-0 px-2">
              <ul className="list-group-none">
                <li>
                  <a href="/">Item</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <a className="dropdown-item" href="/">
            New Features Instruction
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            data-bs-toggle="collapse"
            href="/collapseChangelog"
            role="button"
            aria-expanded="false"
            aria-controls="collapseChangelog"
          >
            Change log
          </a>
          <div className="collapse" id="collapseChangelog">
            <div className="card card-body border-0 py-0 px-2">
              <ul className="list-group-none">
                <li>
                  <a href="/">Item</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <a className="dropdown-item" href="/">
            Ver. *.* Date (mm/yy)
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/">
            <i className="bi bi-archive"></i>&nbsp;&nbsp;&nbsp;Send Feedback
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/">
            Report Issues
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/">
            Suggest An Idea
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/">
            Submit Question for Chatbot
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HelpPopover;
