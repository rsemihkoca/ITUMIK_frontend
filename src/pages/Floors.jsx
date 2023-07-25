import { useParams } from "react-router-dom";
import FloorsLayout from "../components/FloorLayout";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Floor0 } from "../components/Floor0";

export const Floors = () => {
  const params = useParams();
  const [floor, setFloor] = useState();

  useEffect(() => {
    setFloor(Number(params.id));
  }, [params.id]);

  const { t } = useTranslation();

  return <FloorsLayout>{floor === 0 && <Floor0 />}</FloorsLayout>;
};

export default Floors;
