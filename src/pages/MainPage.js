import { useTranslation } from "react-i18next"
import { MainPageCard } from "../components/main-card";
import TrFlag from '../assets/images/tr-flag.png';
import EnFlag from '../assets/images/en-flag.png';
import ItuLogo from "../assets/images/itu-logo250-beyaz.png"

export default function MainPage() {
  const { t, i18n } = useTranslation()

  const changeLanguageHandler = (e) => {
    const languageValue = e
    i18n.changeLanguage(languageValue);
  }

  return (
    <div className="">
      <div className="max-h-screen">
        <div className="sm:container max-w-[95vw] mx-auto">
          <div className="justify-end flex items-center gap-x-2 mt-8">
            <span className="cursor-pointer" onClick={() => { changeLanguageHandler('tr') }} ><img width="50" src={TrFlag}></img></span>
            <span className="cursor-pointer" onClick={() => { changeLanguageHandler('en') }} ><img width="50" src={EnFlag}></img></span>
          </div>
          <div className="2xl:h-[95vh] flex 2xl:items-center">
            <div className="w-full rounded-2xl bg-[#002855]/[0.5] sm:pt-12 pb-16">
              <div className="hidden sm:flex flex-col items-center justify-center">
                <img className=" h-[65px] sm:h-[90px]" src={ItuLogo}></img>
              </div>
              <div className="text-center font-semibold text-2xl px-2 sm:text-3xl text-white mt-8 mb-12">
                <h1>{t('mainTitle')}</h1>
              </div>
              <div className="flex justify-center flex-wrap gap-y-8 sm:gap-y-4 items-center gap-x-10">
                <MainPageCard title={t('floor0')} percentage={90} floorId={0} />
                <MainPageCard title={t('floor1')} percentage={70} floorId={1} />
                <MainPageCard title={t('floor2')} percentage={50} floorId={2} />
                <MainPageCard title={t('floor3')} percentage={20} floorId={3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}