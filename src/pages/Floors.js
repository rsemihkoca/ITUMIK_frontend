import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { FloorsLayout, Table } from "../components/";

import {
  InformationDesk,
  Library,
  MobileLibrary,
  Window,
} from "../constants/Icons";

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
            src={InformationDesk}
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
            <img src={Library} className="hidden sm:block" alt="" />
            <img src={Library} className="hidden sm:block" alt="" />
            <img src={Library} className="hidden sm:block" alt="" />
            <img src={Library} className="hidden sm:block" alt="" />
            <img src={MobileLibrary} className="sm:hidden" alt="" />
            <img src={MobileLibrary} className="sm:hidden" alt="" />
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
            <img src={Window} alt="" />
            <p className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute">
              {t("window")}
            </p>
          </div>
        </div>
      )}
    </FloorsLayout>
  );
}
