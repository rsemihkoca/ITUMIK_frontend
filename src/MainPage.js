import { useTranslation } from "react-i18next"
import TrFlag from './assets/images/tr-flag.png';
import EnFlag from './assets/images/en-flag.png';
import ItuLogo from "./assets/images/itu-logo250-beyaz.png"
import { MainPageCard } from "./components/main-card";
export default function MainPage() {
  const { t, i18n } = useTranslation()

  const changeLanguageHandler = (e) => {
    const languageValue = e
    i18n.changeLanguage(languageValue);
  }

  return (
    <div className="">
      <div>
        <div className="sm:container max-w-[95vw] mx-auto">
          <div className="justify-end flex items-center gap-x-2 mt-8">
            <span onClick={() => { changeLanguageHandler('tr') }} ><img width="50" src={TrFlag}></img></span>
            <span onClick={() => { changeLanguageHandler('en') }} ><img width="50" src={EnFlag}></img></span>
          </div>
          <div className="2xl:h-[95vh] flex 2xl:items-center">
            <div className="w-full rounded-2xl bg-[#002855]/[0.5] pt-12 pb-16">
              <div className="flex flex-col items-center justify-center">
                <img className="h-[65px] sm:h-[90px]" src={ItuLogo}></img>
              </div>
              <div className="text-center font-semibold text-2xl px-2 sm:text-3xl text-white mt-8 mb-12">
                <h1>{t('mainTitle')}</h1>
              </div>
              <div className="flex justify-center flex-wrap gap-y-4 items-center gap-x-10">
                <MainPageCard title={t('mainCard1Title')} percentage={90} floorId={t('mainCard1FloorId')} />
                <MainPageCard title={t('mainCard1Title')} percentage={70} floorId={t('mainCard1FloorId')} />
                <MainPageCard title={t('mainCard1Title')} percentage={50} floorId={t('mainCard1FloorId')} />
                <MainPageCard title={t('mainCard1Title')} percentage={20} floorId={t('mainCard1FloorId')} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}