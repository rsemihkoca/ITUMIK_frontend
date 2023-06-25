import { useParams } from "react-router-dom"
import FloorsLayout from "../components/FloorLayout"
import { useEffect, useState } from "react"
import Table from "../components/table"
import danisma from '../assets/icons/danisma.svg'
import library from '../assets/icons/library.svg'
import window from '../assets/icons/window.svg'
import { useTranslation } from "react-i18next"
import mobileLibrary from '../assets/icons/mobileLibrary.svg'
export const Floors = () => {

  const params = useParams()
  const [floor, setFloor] = useState()
  useEffect(() => {
    setFloor(Number(params.id))
  }, [params.id])
  const {t} = useTranslation()

  return (
    <FloorsLayout>
      {floor === 0 &&
        <div className="h-full px-4 grid grid-cols-12 grid-rows-6 min-w-[1200px] py-4">
          <img src={danisma} className="col-span-1 col-start-1 col-end-1 row-span-4" />
          <Table className=' col-start-3'  />
          <Table className=''  />
          <Table className=''  />
          <Table className=''  />
          <Table className=''  />
          <div className="flex justify-between row-span-4">
            <img src={library} className="hidden sm:block" />
            <img src={library} className="hidden sm:block" />
            <img src={library} className="hidden sm:block" />
            <img src={library} className="hidden sm:block" />
            <img src={mobileLibrary} className="sm:hidden" />
            <img src={mobileLibrary} className="sm:hidden" />
          </div>
          <Table className=''  />
          <Table className=''  />
          <Table className=''  />
          <Table className=''  />
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
          <div className="col-span-12 relative row-span-1 my-auto mx-auto">
            <img src={window} className="" />
            <p className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute">{t('window')}</p>
          </div>
        </div>
      }
    </FloorsLayout>
  )

}