import { FaShoppingCart } from "react-icons/fa";
import { AiFillWindows } from "react-icons/ai";
import { BiCheckShield } from "react-icons/bi";
import { SiKlarna } from "react-icons/si";

import styles from "./styles.module.css";

const IconMap = {
  // change icons here
  windows: <AiFillWindows />,
  shopping: <FaShoppingCart />,
  guarentee: <BiCheckShield />,
  finance: <SiKlarna />,
};

export const StoreGuarentee = () => {
  return (
    <div className={styles["guarentee-list"]}>
      <GuarenteeIcon icon={IconMap.finance} text={"FINANCE AVAILABLE"} />
      <GuarenteeIcon icon={IconMap.windows} text={"OS INSTALLED"} />
      <GuarenteeIcon icon={IconMap.guarentee} text={"1 YEAR WARRANTY"} />
      <GuarenteeIcon icon={IconMap.shopping} text={"FAST FREE DELIVERY"} />
    </div>
  );
};

const GuarenteeIcon = ({ icon, text }) => {
  return (
    <div className={styles["guarentee-icon"]}>
      {icon}
      <p>{text}</p>
    </div>
  );
};
