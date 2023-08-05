import { fullChair, freeChair, table, tableSmall } from "../constants/Images";

// When rendering conditionals, you have to be careful that they are sorted logically.
// Ex. If table has 2 chairs renders first condition, otherwise table must have 4 chairs.

const Table = ({
  doubleChair = false,
  c1 = false,
  c2 = false,
  c3 = false,
  c4 = false,
  turn = false,
  className = "",
}) => {
  // For two chairs
  if (doubleChair)
    return (
      <>
        <div
          className={`flex justify-center items-center p-1 ${
            turn && "rotate-90"
          } ${className}`}
        >
          <div className="flex">
            <img
              className="translate-x-[30%]"
              src={c1 ? fullChair : freeChair}
              alt="Top right chair"
            />
          </div>
          <div className=" z-20">
            <img className="mt-2" src={tableSmall} alt="Table" />
          </div>
          <div className="flex">
            <img
              className="translate-x-[-30%] -scale-x-100 z-10 mirrorFreeChairBottom"
              src={c2 ? fullChair : freeChair}
              alt="Top left chair"
            />
          </div>
        </div>
      </>
    );

  // For four chairs
  return (
    <>
      <div
        className={`flex justify-center items-center p-1 ${
          turn && "rotate-90"
        } ${className}`}
      >
        <div className="flex flex-col ">
          <img
            className={`translate-y-6 ${
              c2 ? "translate-x-[0%]" : "translate-x-[40%]"
            }`}
            src={c2 ? fullChair : freeChair}
            alt="Top left chair"
          />
          <img
            className={`-translate-y-2 z-10 ${
              c1 ? "translate-x-[0%]" : "translate-x-[40%]"
            }`}
            src={c1 ? fullChair : freeChair}
            alt="Top right chair"
          />
        </div>
        <div className="mt-5 z-20">
          <img width={40} src={table} alt="Table" />
        </div>
        <div className="flex flex-col">
          <img
            className={`-scale-x-100 translate-y-6 ${
              c3 ? "translate-x-[0%]" : "-translate-x-[40%]"
            }`}
            src={c3 ? fullChair : freeChair}
            alt="Bottom left chair"
          />
          <img
            className={`-scale-x-100 -translate-y-2 z-10 ${
              c4 ? "translate-x-[0%]" : "-translate-x-[40%]"
            }`}
            src={c4 ? fullChair : freeChair}
            alt="Bottom right chair"
          />
        </div>
      </div>
    </>
  );
};

export default Table;
