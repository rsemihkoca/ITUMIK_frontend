import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

// Import Images
import { TRFlag, ENFlag } from "../constants/Images";

export default function FloorsLayout({ children }) {
  const handle = useParams();
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = (e) => {
    i18n.changeLanguage(e);
  };

  return (
    <div className="h-screen">
      <div className="max-h-screen">
        <div className="container mx-auto">
          <div className="flex justify-between items-center my-3">
            <Link to={"/"} className="text-secondar text-lg font-semibold">
              <button>
                {" "}
                {"<"} {t("goBackButton")}{" "}
              </button>
            </Link>
            <div className="justify-end flex items-center gap-x-2">
              <span
                className="cursor-pointer"
                onClick={() => {
                  changeLanguageHandler("tr");
                }}
              >
                <img width="50" src={TRFlag} alt="" />
              </span>
              <span
                onClick={() => {
                  changeLanguageHandler("en");
                }}
              >
                <img width="50" src={ENFlag} alt="" />
              </span>
            </div>
          </div>
          <div className="">
            <div className="flex items-center">
              <Link to={`/floors/0`}>
                <button
                  className={
                    "text-white py-3 hover:bg-secondary/[0.7] duration-300 px-6 font-semibold rounded-t-lg " +
                    (handle.id === "0"
                      ? " bg-secondary "
                      : "bg-secondary/[0.5]")
                  }
                >
                  {t("entrance")}
                </button>
              </Link>
              <Link to={`/floors/1`}>
                <button
                  className={
                    "text-white py-3 hover:bg-secondary/[0.7] duration-300 px-6 font-semibold rounded-t-lg " +
                    (handle.id === "1" ? " bg-secondary" : "bg-secondary/[0.5]")
                  }
                >
                  {t("firstFloor")}
                </button>
              </Link>
              <Link to={`/floors/2`}>
                <button
                  className={
                    "text-white py-3 hover:bg-secondary/[0.7] duration-300 px-6 font-semibold rounded-t-lg " +
                    (handle.id === "2" ? " bg-secondary" : "bg-secondary/[0.5]")
                  }
                >
                  {t("secondFloor")}
                </button>
              </Link>
              <Link to={`/floors/3`}>
                <button
                  className={
                    "text-white py-3 hover:bg-secondary/[0.7] duration-300 px-6 font-semibold rounded-t-lg " +
                    (handle.id === "3" ? " bg-secondary" : "bg-secondary/[0.5]")
                  }
                >
                  {t("thirdFloor")}
                </button>
              </Link>
            </div>
            <div className="rounded-tr-lg rounded-b-lg overflow-auto  bg-[#002855]/[0.5] sm:pt-12 sm:pb-16">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
