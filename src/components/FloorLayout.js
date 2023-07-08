import { useTranslation } from "react-i18next"
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TrFlag from '../assets/images/tr-flag.png';
import EnFlag from '../assets/images/en-flag.png';
import Carousel from "nuka-carousel"
import { IoIosArrowBack } from "react-icons/io";

export default function FloorsLayout({ children }) {
  const { t, i18n } = useTranslation()
  const navgate = useNavigate()
  const changeLanguageHandler = (e) => {
    const languageValue = e
    i18n.changeLanguage(languageValue);
  }
  const handle = useParams()
  const [slideIndex, setSlideIndex] = useState(handle.id ? handle.id : 0)

  useEffect(() => {
    navgate(`/floors/${slideIndex}`)
  }, [slideIndex])

  return (
    <div className="h-screen text-white">
      <div className="max-h-screen">
        <div className="container mx-auto">
          <div className="flex justify-center sm:justify-between items-center  bg-[#002855] sm:bg-transparent py-3 px-2 relative">
            <Link to={'/'} className="sm:text-secondary text-lg font-semibold flex items-center gap-x-1  absolute sm:static left-2 top-1/2 -translate-y-1/2 sm:translate-y-0">
              <div className="text-white sm:text-secondary"><IoIosArrowBack /></div>
              <button className="sm:block hidden" >{t('goBackButton')} </button>
            </Link>
            <div className="sm:hidden overflow-hidden relative py-2"
            >
              <div
                style={{ boxShadow: '4px 0px 12px 10px rgba(0, 40, 85 , 0.5)', }}
                className="h-full w-1 bg-[#002855]/[0.5] absolute left-0 top-0 z-20 ">
              </div>
              <div
                style={{ boxShadow: '-4px 0px 12px 10px rgba(0, 40, 85 , 0.5)', }}
                className="h-full w-1 bg-[#002855]/[0.5] absolute right-0 top-0 z-20 ">
              </div>
              <Carousel
                afterSlide={currentIndex => { setSlideIndex(currentIndex) }}
                style={{ width: '100%', margin: '0 auto', }}
                heightMode="max"
                cellAlign="center"
                slideIndex={slideIndex}
                renderCenterLeftControls={null}
                renderCenterRightControls={null}
                renderBottomCenterControls={null}
                slidesToShow={2}
              >
                <p onClick={() => { setSlideIndex(0) }} className={"text-center duration-300 px-2 pointer-events-auto "}>
                  {t('entrance')}
                </p>
                <p onClick={() => { setSlideIndex(1) }} className={"text-center duration-300 px-2  pointer-events-auto "}>
                  {t('firstFloor')}
                </p>
                <p onClick={() => { setSlideIndex(2) }} className={"text-center duration-300 px-2  pointer-events-auto "}>
                  {t('secondFloor')}
                </p>
                <p onClick={() => { setSlideIndex(3) }} className={"text-center duration-300 px-2  pointer-events-auto "}>
                  {t('thirdFloor')}
                </p>
              </Carousel>
            </div>
            <div className="justify-end sm:flex items-center gap-x-2 hidden">
              <span onClick={() => { changeLanguageHandler('tr') }} ><img alt="tr" width="50" src={TrFlag}></img></span>
              <span onClick={() => { changeLanguageHandler('en') }} ><img alt="en" width="50" src={EnFlag}></img></span>
            </div>
          </div>
          <div className="">
            <div className="hidden sm:flex items-center ">
              <Link to={`/floors/0`}>
                <button className={"text-white py-3 hover:bg-secondary/[0.7] duration-300 px-6 font-semibold rounded-t-lg " + (handle.id === '0' ? ' bg-secondary ' : 'bg-secondary/[0.5]')}>{t('entrance')}</button>
              </Link>
              <Link to={`/floors/1`}>
                <button className={"text-white py-3 hover:bg-secondary/[0.7] duration-300 px-6 font-semibold rounded-t-lg " + (handle.id === '1' ? ' bg-secondary' : 'bg-secondary/[0.5]')}>{t('firstFloor')}</button>
              </Link>
              <Link to={`/floors/2`}>
                <button className={"text-white py-3 hover:bg-secondary/[0.7] duration-300 px-6 font-semibold rounded-t-lg " + (handle.id === '2' ? ' bg-secondary' : 'bg-secondary/[0.5]')}>{t('secondFloor')}</button>
              </Link>
              <Link to={`/floors/3`}>
                <button className={"text-white py-3 hover:bg-secondary/[0.7] duration-300 px-6 font-semibold rounded-t-lg " + (handle.id === '3' ? ' bg-secondary' : 'bg-secondary/[0.5]')}>{t('thirdFloor')}</button>
              </Link>
            </div>
            <div className="sm:rounded-tr-lg sm:rounded-b-lg overflow-auto  bg-[#002855]/[0.5] sm:pt-8 sm:pb-8">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}