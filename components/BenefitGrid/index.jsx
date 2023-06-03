import styles from "./styles.module.css";

import {
  FaDollarSign,
  FaGlobeAmericas,
  FaRecycle,
  FaSmile,
  FaStar,
  FaTelegramPlane,
} from "react-icons/fa";

export const BenefitGrid = () => {
  return (
    <div className={styles.container}>
      <h2>Why buy a Bedrock Computer?</h2>
      <div className={styles.benefits_list}>
        <BenefitItem
          icon={<FaTelegramPlane />}
          benefit={"WE GUIDE YOU THROUGH THE PROCESS"}
          description={"Just contact us for help"}
        />
        <BenefitItem
          icon={<FaStar />}
          benefit={"GREAT REVIEWS"}
          description={"99% possitive reviews."}
        />
        <BenefitItem
          icon={<FaGlobeAmericas />}
          benefit={"AMAZING FOR THE PLANET"}
          description={"We upcycle >80% of our PC components"}
        />
        <BenefitItem
          icon={<FaDollarSign />}
          benefit={"HUGE SAVINGS"}
          description={
            "Rock Bottom Prices - you won't find better value elsewhere"
          }
        />
        <BenefitItem
          icon={<FaRecycle />}
          benefit={"AMAZING FOR THE PLANET"}
          description={"We upcycle >80% of our PC components"}
        />
        <BenefitItem
          icon={<FaSmile />}
          benefit={"PREMIUM AFTERCARE & SUPPORT"}
          description={"You'll be looked after."}
        />
      </div>
    </div>
  );
};

const BenefitItem = ({ icon, benefit, description }) => {
  return (
    <div className={styles.benefit}>
      <div>{icon}</div>

      <div>
        <h3>{benefit}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
