import React from "react";
import { IconSearch } from "../../../components/icons";

const Searchbar = () => {
  return (
    <div id="bst-search">
      <button
        type="button"
        className="btn-none btn-icon"
        data-bs-toggle="modal"
        aria-expanded="false"
        data-bs-target="#searchModal"
      >
        <IconSearch />
      </button>
    </div>
  );
};

export default Searchbar;
