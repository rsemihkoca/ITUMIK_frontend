import { QueryClient, useQuery } from "@tanstack/react-query";

import {
  Duvar,
  Manzara,
  Bitki,
  Sutun1,
  Sutun2,
  Sutun3,
  Sutun4,
  Kitaplik,
} from "../../../constants/Images";

import { Table } from "../../";
import { data } from "../../../constants/Mock";

import styles from "./Floor0.module.css";

const Floor0 = () => {
  // // Fetch Floor Info
  // const queryClient = new QueryClient();
  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["repoData"],
  //   queryFn: async () =>
  //     await fetch("http://35.233.62.213:32277/get_floor/?floor=Floor00").then(
  //       async (res) => await res.json()
  //     ),
  // });

  // if (isLoading) return "Loading...";

  // if (error) console.log("Hata: ", error);

  console.log("Data: ", data);

  return (
    <div className={styles.container}>
      <div className={styles.wall_container}>
        <img className={styles.wall} src={Duvar} alt="" />
        <img className={styles.bg_image} src={Manzara} alt="" />
      </div>
      <div className={styles.floor_container}>
        <div className={styles.elements_container}>
          <img src={Bitki} className={styles.plant} alt="" />
          <img src={Sutun1} className={styles.column} id={styles.col1} alt="" />
          <img src={Sutun2} className={styles.column} id={styles.col2} alt="" />
          <img src={Kitaplik} className={styles.bookshelf} alt="" />
          <img src={Sutun3} className={styles.column} id={styles.col3} alt="" />
          <img src={Sutun4} className={styles.column} id={styles.col4} alt="" />
        </div>
        <div className={styles.tables_container}>
          <div className={styles.tables_row}>
            <Table className={styles.srt1} data={data && data[0]} />
            <Table className={styles.srt2} data={data && data[1]} />
            <Table data={data && data[2]} />
            <Table className={styles.srt4} />
            <Table />
            <Table />
            <Table className={styles.srt7} />
            <Table />
            <Table />
          </div>
          <div className={styles.tables_row}>
            <Table className={styles.srt1} data={data && data[9]} />
            <Table className={styles.srt2} data={data && data[10]} />
            <Table data={data && data[11]} />
            <Table className={styles.srt4} />
            <Table />
            <Table />
            <Table className={styles.srt7} />
            <Table />
            <Table />
          </div>
          <div className={styles.tables_row}>
            <Table className={styles.srt1} />
            <Table className={styles.srt2} />
            <Table />
            <Table className={styles.srt4} />
            <Table />
            <Table />
            <Table className={styles.srt7} />
            <Table />
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Floor0;
