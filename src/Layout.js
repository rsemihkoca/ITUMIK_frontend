import { useTranslation } from "react-i18next"
import TrFlag from './assets/images/tr-flag.png';
import EnFlag from './assets/images/en-flag.png';

export default function Layout() {
  const { t, i18n } = useTranslation()

  const changeLanguageHandler = (e) => {
    const languageValue = e
    i18n.changeLanguage(languageValue);
  }

  return (
    <div>
      <div>
        <div className="sm:container max-w-[95vw] mx-auto">
          <div className="text-white font-semibold">
           <button> {t('goBackButton')} </button>
          </div>
          <div className="justify-end flex items-center gap-x-2 mt-8">
            <span onClick={() => { changeLanguageHandler('tr') }} ><img width="50" src={TrFlag}></img></span>
            <span onClick={() => { changeLanguageHandler('en') }} ><img width="50" src={EnFlag}></img></span>
          </div>
          <div className="2xl:h-[95vh] flex 2xl:items-center">
            <button className="text-white py-3 px-6 bg-[#002855]/[0.5] font-semibold rounded-t-lg">{t('entrance')}</button>
            <button className="text-white py-3 px-6 bg-[#002855]/[0.5] font-semibold rounded-t-lg">{t('firstFloor')}</button>
            <button className="text-white py-3 px-6 bg-[#002855]/[0.5] font-semibold rounded-t-lg">{t('secondFloor')}</button>
            <button className="text-white py-3 px-6 bg-[#002855]/[0.5] font-semibold rounded-t-lg">{t('thirdFloor')}</button>
          </div>
            <div className="w-full rounded-tr-lg rounded-br-lg rounded-bl-lg bg-[#002855]/[0.5] pt-12 pb-16">
              
            </div>
        </div>
      </div>
    </div>
  )
}