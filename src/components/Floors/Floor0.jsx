import { Table } from "..";
import { bookshelfFront, bookshelfSide, clock } from "../../constants/Images";

const Floor0 = () => {
  return (
    <div className="floor mx-4 rounded-xl relative  min-w-[240vw] sm:min-w-[1200px] my-8 sm:my-0">
      <div className="w-full wall z-10 h-[70px] rounded-t-xl sm:h-[88px] absolute top-0 left-0"></div>
      <div className="z-20 pt-6 sm:pt-8 flex justify-center gap-4 sm:gap-16">
        <img
          src={bookshelfFront}
          className="sm:w-20 w-16 col-span-1 col-start-1 col-end-1 row-span-4 z-20"
        />
        <img
          src={bookshelfFront}
          className="sm:w-20 w-16 col-span-1 col-start-1 col-end-1 row-span-4 z-20"
        />
        <img
          src={bookshelfFront}
          className="sm:w-20 w-16 col-span-1 col-start-1 col-end-1 row-span-4 z-20"
        />
        <img
          src={clock}
          className="sm:w-20 w-16 col-span-1 col-start-1 col-end-1 row-span-4 z-20"
        />
        <img
          src={bookshelfFront}
          className="sm:w-20 w-16 col-span-1 col-start-1 col-end-1 row-span-4 z-20"
        />
        <img
          src={bookshelfFront}
          className="sm:w-20 w-16 col-span-1 col-start-1 col-end-1 row-span-4 z-20"
        />
        <img
          src={bookshelfFront}
          className="sm:w-20 w-16 col-span-1 col-start-1 col-end-1 row-span-4 z-20"
        />
      </div>
      <div className="h-full px-4 grid grid-cols-11 grid-rows-4 pb-5  min-w-[200vw] sm:min-w-[1200px] ">
        {/* <div className="col-span-1 col-start-1 col-end-1 row-span-4 flex items-center">
          <img src={chair} className="h-[67px] mt-12" />
          <div className="relative">
            <img src={table}  />
            <img src={table} className="absolute top-12" />
          </div>
        </div> */}
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <div className="flex justify-around items-center row-span-3">
          <div className="flex-col h-full py-8 justify-start relative flex">
            <img src={bookshelfSide} className="w-4 sm:w-5" />
            <img
              src={bookshelfSide}
              className="translate-y-3/4 absolute  w-4 sm:w-5"
            />
          </div>
          <div className="flex-col h-full py-8 justify-start relative flex">
            <img src={bookshelfSide} className="w-4 sm:w-5" />
            <img
              src={bookshelfSide}
              className="translate-y-3/4 absolute  w-4 sm:w-5"
            />
          </div>
          <div className="flex-col h-full py-8 justify-start relative hidden sm:flex">
            <img src={bookshelfSide} className="sm:w-5" />
            <img
              src={bookshelfSide}
              className="translate-y-3/4 absolute sm:w-5"
            />
          </div>
        </div>
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table className="col-start-2" />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table doubleChair className="col-start-4" />
        <Table doubleChair />
        <Table doubleChair />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
      </div>
    </div>
  );
};

export default Floor0;
