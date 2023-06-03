import Image from "next/image";
import styles from "./styles.module.css";

import { FaQuestionCircle, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <Image src={"/bedrock-hero-image.png"} width={800} height={420} />
      <div className={styles.content}>
        <h1>
          WE MAKE PC GAMING SIMPLE & AFFORDABLE, WITHOUT THE COMPROMISE ON
          PERFORMANCE.
        </h1>

        <p>
          You won&apos;t find better value or service elsewhere. Eco-friendly
          gaming without the compromise on power or peformance. We also offer
          Klarna/PayPal/Card/Local Collection. Take a look!
        </p>

        <div className={styles.inputGroup}>
          <Link href="/store">
            <button className="primary">
              <FaShoppingCart /> SHOP NOW
            </button>
          </Link>
          <Link href="/buying-guide">
            <button>
              <FaQuestionCircle /> BUYING GUIDE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
