import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import FloorsLayout from "../components/FloorLayout";
import Table from "../components/Table";

import danisma from "../assets/icons/danisma.svg";
import library from "../assets/icons/library.svg";
import window from "../assets/icons/window.svg";
import mobileLibrary from "../assets/icons/mobileLibrary.svg";

export default function Floors() {
  const params = useParams();
  const [floor, setFloor] = useState();
  useEffect(() => {
    setFloor(Number(params.id));
  }, [params.id]);
  const { t } = useTranslation();

  return (
    <FloorsLayout>
      {floor === 0 && (
        <div className="h-full px-4 grid grid-cols-12 grid-rows-6 min-w-[1200px] py-4">
          <img
            src={danisma}
            className="col-span-1 col-start-1 col-end-1 row-span-4"
            alt=""
          />
          <Table />
          <Table />
          <Table />
          <Table />
          <Table />
          <Table />
          <div className="flex justify-between row-span-4">
            <img src={library} className="hidden sm:block" alt="" />
            <img src={library} className="hidden sm:block" alt="" />
            <img src={library} className="hidden sm:block" alt="" />
            <img src={library} className="hidden sm:block" alt="" />
            <img src={mobileLibrary} className="sm:hidden" alt="" />
            <img src={mobileLibrary} className="sm:hidden" alt="" />
          </div>
          <Table />
          <Table />
          <Table />
          <Table />
          <Table />
          <Table />
          <Table />
          <Table />
          <Table />
          <Table />
          <Table />
          <Table />
          <Table />
          <Table />
          <Table className="col-start-3" />
          <Table />
          <Table />
          <Table />
          <Table />
          <Table />
          <Table />
          <Table />
          <Table />
          <Table className="col-start-9" />
          <Table />
          <Table />
          <Table />
          <Table doubleChair className="col-start-5" />
          <Table doubleChair />
          <Table doubleChair />
          <Table />
          <div className="col-span-12 relative row-span-1 my-auto mx-auto">
            <img src={window} alt="" />
            <p className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute">
              {t("window")}
            </p>
          </div>
        </div>
      )}
    </FloorsLayout>
  );
}
