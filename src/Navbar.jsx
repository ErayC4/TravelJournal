import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between py-4">

      <div className="flex items-center">
        <img
          className="w-8 h-8 object-cover object-center"
          src="https://www.zarla.com/images/zarla-t-1x1-2400x2400-20211124-jgy9cmryrcy7dxf3cvby.png?crop=1:1,smart&width=250&dpr=2"
        />
        <p className="">ravel Journal</p>
      </div>

      <div className="flex space-evenly gap-4 items-center">
        {/* Search Icon Button*/}
        <button alt="search-icon" id="dropdown">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            viewBox="0 0 16 16"
            className="w-5"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </button>

        {/* justify Icon Button*/}
        <button alt="justify-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            viewBox="0 0 16 16"
            className="w-5"
          >
            <path
              fill-rule="evenodd"
              d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
