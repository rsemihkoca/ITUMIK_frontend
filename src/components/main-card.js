import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar"
import { t } from "i18next";

export const MainPageCard = ({ title, percentage, floorId }) => {
  const props = {
    percent: percentage, // is require
    colorSlice: (percentage>80 ? "#EC3919": percentage>60 ? "#FFA500" : "#00FF00"),
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
  return (
    <div className="rounded-2xl flex flex-col items-center bg-white/[0.2] py-7 gap-y-12 px-12">
      <div className="text-white font-bold text-2xl">
        <h3>{title}</h3>
      </div>
      <div className="">
        <CircularProgressBar {...props} />
      </div>
      <div>
        <button className="text-white py-2 px-4 bg-white/[0.2] font-semibold rounded-xl">{t('mainCardDetails')}</button>
      </div>
    </div>
  )

}