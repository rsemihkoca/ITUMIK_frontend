import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { t } from "i18next";

export default function FloorHealth({ children }) {
  const handle = useParams()
  console.log(handle.id);
  return (
    <div className="h-screen">
      <div className="max-h-screen">
        <div className="container mx-auto px-5">
          <div className="flex justify-between items-center my-3">
            <Link to={'/'} className="text-secondar text-lg font-semibold">
              <button> {'<'}{' '}{t('goBackButton')}</button>
            </Link>
          </div>
          <div className="flex flex-col h-full">
              <h1 className="text-white text-2xl px-3 py-5 font-semibold rounded-t-lg">Sensors</h1>
            <div className="flex items-center">
                <Link to={`/healthPage/0`}>
                    <button className={"text-white py-3 hover:bg-secondary/[0.7] duration-300 px-6 font-semibold rounded-tl-lg " + (handle.id === '0' ? ' bg-secondary ' : 'bg-secondary/[0.5]')}>Entrance</button>
                </Link>
                <Link to={`/healthPage/1`}>
                    <button className={"text-white py-3 hover:bg-secondary/[0.7] duration-300 px-6 font-semibold " + (handle.id === '1' ? ' bg-secondary' : 'bg-secondary/[0.5]')}>First Floor</button>
                </Link>
                <Link to={`/healthPage/2`}>
                    <button className={"text-white py-3 hover:bg-secondary/[0.7] duration-300 px-6 font-semibold " + (handle.id === '2' ? ' bg-secondary' : 'bg-secondary/[0.5]')}>Second Floor</button>
                </Link>
                <Link to={`/healthPage/3`}>
                    <button className={"text-white py-3 hover:bg-secondary/[0.7] duration-300 px-6 font-semibold rounded-tr-lg " + (handle.id === '3' ? ' bg-secondary' : 'bg-secondary/[0.5]')}>Third Floor</button>
                </Link>
            </div>
            <hr className="max-w-[502px]"/>
            <div className="overflow-auto  bg-[#002855]/[0.5] sm:pt-12 sm:pb-16 max-w-[700px] flex-grow">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}