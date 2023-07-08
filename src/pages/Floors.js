import { useParams } from "react-router-dom"
import FloorsLayout from "../components/FloorLayout"
import { useEffect, useState } from "react"
import Table from "../components/table"
import bookshelfFront from '../assets/icons/bookshelt-front.png'
import library from '../assets/icons/bookshelf.png'
import table from '../assets/icons/table.png'
import chair from '../assets/icons/freeChair.svg'
import { useTranslation } from "react-i18next"
import mobileLibrary from '../assets/icons/mobileLibrary.svg'
export const Floors = () => {

  const params = useParams()
  const [floor, setFloor] = useState()
  useEffect(() => {
    setFloor(Number(params.id))
  }, [params.id])
  const { t } = useTranslation()

  return (
    <FloorsLayout>
      {floor === 0 &&
        <div className="floor mx-4 rounded-xl pt-8  min-w-[200vw] sm:min-w-[1200px] my-8 sm:my-0">
          <div className="flex justify-center gap-16">
            <img width={66} src={bookshelfFront} className="col-span-1 col-start-1 col-end-1 row-span-4" />
            <img width={66} src={bookshelfFront} className="col-span-1 col-start-1 col-end-1 row-span-4" />
            <img width={66} src={bookshelfFront} className="col-span-1 col-start-1 col-end-1 row-span-4" />
            <img width={66} src={bookshelfFront} className="col-span-1 col-start-1 col-end-1 row-span-4" />
            <img width={66} src={bookshelfFront} className="col-span-1 col-start-1 col-end-1 row-span-4" />
            <img width={66} src={bookshelfFront} className="col-span-1 col-start-1 col-end-1 row-span-4" />
          </div>
          <div className="h-full px-4 grid grid-cols-12 grid-rows-5  min-w-[200vw] sm:min-w-[1200px] ">
            <div className="col-span-1 col-start-1 col-end-1 row-span-4 flex items-center">
              <img src={chair} className="h-[67px] mt-12" />
              <div className="relative">
                <img src={table} className="" />
                <img src={table} className="absolute top-12" />
              </div>
            </div>
            <Table className='' />
            <Table className='' />
            <Table className='' />
            <Table className='' />
            <Table className='' />
            <Table className='' />
            <div className="flex justify-around items-center row-span-4">
              <img src={library} className="hidden h-28 sm:block" />
              <img src={library} className="hidden h-28 sm:block" />
              <img src={library} className=" h-28 sm:block" />
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
            <Table className=' col-start-3' />
            <Table className='' />
            <Table className='' />
            <Table className='' />
            <Table className='' />
            <Table className='' />
            <Table className='' />
            <Table className='' />
            <Table className='' />
            <Table className='col-start-9' />
            <Table className='' />
            <Table className='' />
            <Table className='' />
            <Table doubleChair className=' col-start-5' />
            <Table doubleChair className='' />
            <Table doubleChair className='' />
            <Table className='' />
            {/* <div className="col-span-12 relative row-span-1 my-auto mx-auto">
              <img src={window} className="" />
              <p className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute">{t('window')}</p>
            </div> */}
          </div>
        </div>
      }
    </FloorsLayout>
  )

}