import React from "react";

// Import Icons
import FullChair from "../assets/icons/fullChair.svg";
import FreeChair from "../assets/icons/freeChair.svg";
import TableIcon from "../assets/icons/table.svg";

export default function Table({
  className = "",
  c1 = false,
  c2 = false,
  c3 = false,
  c4 = false,
  turn = false,
  doubleChair = false,
}) {
  return (
    <div
      className={`flex justify-center items-center p-1 ${
        turn && "rotate-90"
      } ${className}`}
    >
      {doubleChair ? (
        <>
          <div>
            <img
              src={c2 ? FullChair : FreeChair}
              alt="Top left chair"
              className="rotate-180"
            />
            <img
              src={c1 ? FullChair : FreeChair}
              alt="Top right chair"
              className="rotate-180"
            />
          </div>
          <div>
            <img width={35} src={TableIcon} alt="Table" />
          </div>
          <div>
            <img src={c3 ? FullChair : FreeChair} alt="Bottom left chair" />
            <img src={c4 ? FullChair : FreeChair} alt="Bottom right chair" />
          </div>
        </>
      ) : (
        <>
          <div>
            <img
              src={c1 ? FullChair : FreeChair}
              alt="Top right chair"
              className="rotate-180"
            />
          </div>
          <div className="px-2">
            <img className="rotate-90" width={22} src={TableIcon} alt="Table" />
          </div>
          <div>
            <img src={c2 ? FullChair : FreeChair} alt="Top left chair" />
          </div>
        </>
      )}
    </div>
  );
}
