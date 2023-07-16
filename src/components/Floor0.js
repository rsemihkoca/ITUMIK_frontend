import Table from "./table"
import bookshelfFront from '../assets/icons/bookshelfLight.png'
import bookshelfSide from '../assets/icons/bookshelfSide.png'
import table from '../assets/icons/table.png'
import chair from '../assets/icons/freeChair.svg'
import clock from '../assets/gif/Saat.gif'

export const Floor0 = () => {
  return (
    <div className="floor mx-4 rounded-xl pt-6 sm:pt-8  min-w-[240vw] sm:min-w-[1200px] my-8 sm:my-0">
      <div className="flex justify-center gap-4 sm:gap-16">
        <img src={bookshelfFront} className="sm:w-20 w-16 col-span-1 col-start-1 col-end-1 row-span-4" />
        <img src={bookshelfFront} className="sm:w-20 w-16 col-span-1 col-start-1 col-end-1 row-span-4" />
        <img src={bookshelfFront} className="sm:w-20 w-16 col-span-1 col-start-1 col-end-1 row-span-4" />
        <img src={clock} className="sm:w-20 w-16 col-span-1 col-start-1 col-end-1 row-span-4" />
        <img src={bookshelfFront} className="sm:w-20 w-16 col-span-1 col-start-1 col-end-1 row-span-4" />
        <img src={bookshelfFront} className="sm:w-20 w-16 col-span-1 col-start-1 col-end-1 row-span-4" />
        <img src={bookshelfFront} className="sm:w-20 w-16 col-span-1 col-start-1 col-end-1 row-span-4" />
      </div>
      <div className="h-full px-4 grid grid-cols-11 grid-rows-4 pb-5  min-w-[200vw] sm:min-w-[1200px] ">
        {/* <div className="col-span-1 col-start-1 col-end-1 row-span-4 flex items-center">
          <img src={chair} className="h-[67px] mt-12" />
          <div className="relative">
            <img src={table} className="" />
            <img src={table} className="absolute top-12" />
          </div>
        </div> */}
        <Table className='' />
        <Table className='' />
        <Table className='' />
        <Table className='' />
        <Table className='' />
        <Table className='' />
        <div className="flex justify-around items-center row-span-3">
          <div className="flex-col h-full py-8 justify-start relative flex ">
            <img src={bookshelfSide} className=" sm:w-5 " />
            <img src={bookshelfSide} className=" translate-y-3/4 absolute sm:w-5 " />
          </div>
          <div className=" flex-col h-full py-8 justify-start relative flex">
            <img src={bookshelfSide} className=" sm:w-5" />
            <img src={bookshelfSide} className=" translate-y-3/4 absolute sm:w-5" />
          </div>
          <div className=" flex-col h-full py-8 justify-start relative hidden sm:flex">
            <img src={bookshelfSide} className=" sm:w-5" />
            <img src={bookshelfSide} className=" translate-y-3/4 absolute sm:w-5 " />
          </div>
        </div>
        <Table className='' />
        <Table className='' />
        <Table className='' />
        <Table className='' />
        <Table className='' />
        <Table className='' />
        <Table className='' />
        <Table className='' />
        <Table className='' />
        <Table className='' />
        <Table className='' />
        <Table className='' />
        <Table className='' />
        <Table className='' />
        <Table className=' col-start-2' />
        <Table className='' />
        <Table className='' />
        <Table className='' />
        <Table className='' />
        <Table className='' />
        <Table className='' />
        <Table className='' />
        <Table className='' />
        <Table doubleChair className='col-start-4' />
        <Table doubleChair className='' />
        <Table doubleChair className='' />
        <Table className='' />
        <Table className='' />
        <Table className='' />
        <Table className='' />
        <Table className='' />
      </div>
    </div>)
}