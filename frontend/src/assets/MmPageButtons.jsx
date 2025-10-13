import React from "react";
import { Link } from "react-router-dom";

function MmPageButtons() {
  return (
    <div className="flex flex-col items-center justify-center w-screen pt-14">
      <ul className="w-screen flex flex-row item-center justify-center gap-5 capitalize py-4 text-[#2c2f29]">
        <li>
          <Link to="/" className="text-base hover:underline focus:underline">
            LIST
          </Link>
        </li>
        <li>
          <Link
            to="/mangaTracker"
            className="text-base hover:underline focus:underline"
          >
            TRACKER
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MmPageButtons;
