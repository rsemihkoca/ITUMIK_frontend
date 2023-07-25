import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Floor0, FloorsLayout } from "../components";

const Floors = () => {
  // Hooks
  const params = useParams();

  // States
  const [floor, setFloor] = useState();

  // Effects
  useEffect(() => {
    setFloor(Number(params.id));
  }, [params.id]);

  return <FloorsLayout>{floor === 0 && <Floor0 />}</FloorsLayout>;
};

export default Floors;
