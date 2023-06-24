import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar"
import { t } from "i18next";
import { Link } from "react-router-dom";

export const MainPageCard = ({ title, percentage, floorId }) => {
  const props = {
    percent: percentage, // is require
    colorSlice: (percentage > 80 ? "#EC3919" : percentage > 60 ? "#FFA500" : "#00FF00"),
    fontColor: "#fff",
    fontSize: "1.2rem",
    colorCircle: '#738DB5',
    fontWeight: 400,
    size: 200,
    stroke: 15,
    strokeBottom: 15,
    speed: 60,
    cut: 0.001,
    rotation: -90,
    unit: "%",
    textPosition: "0.35em",
    animationOff: false,
    strokeDasharray: "10,1",
    inverse: false,
    round: true,
  };
  const mobileProps = {
    percent: percentage, // is require
    colorSlice: (percentage > 80 ? "#EC3919" : percentage > 60 ? "#FFA500" : "#00FF00"),
    fontColor: "#fff",
    fontSize: "1.2rem",
    colorCircle: '#738DB5',
    fontWeight: 400,
    size: 130,
    stroke: 15,
    strokeBottom: 15,
    speed: 60,
    cut: 0.001,
    rotation: -90,
    unit: "%",
    textPosition: "0.35em",
    animationOff: false,
    strokeDasharray: "10,1",
    inverse: false,
    round: true,
  };
  return (
    // TODO: route eklenecek
    <div onClick={()=>{}} className="rounded-2xl flex justify-between w-[90%] sm:w-auto sm:flex-col items-center bg-[#002855]/[0.5] sm:bg-white/[0.2] py-7 gap-y-4 sm:gap-y-12 px-8 sm:px-12">
      <div className="text-white font-bold text-xl sm:text-2xl">
        <h3>{title}</h3>
      </div>
      <div className="hidden sm:block">
        <CircularProgressBar {...props} />
      </div>
      <div className="sm:hidden">
        <CircularProgressBar {...mobileProps} />
      </div>
      <div className="hidden sm:block">
        <button className="text-white py-2 px-4 bg-white/[0.2] font-semibold rounded-xl">{t('mainCardDetails')}</button>
      </div>
    </div>
  )
}