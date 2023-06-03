import Link from "next/link";
import { FAQSection } from "../../components";
import styles from "../../styles/BuyingGuide.module.css";

const BuyingGuideIndex = () => {
  return (
    <div className={"content-container"}>
      <div className={styles.content}>
        <h2>PC Buying Guide</h2>
        <p>
          As you might expect, we are experts in all things computers & gaming
          related. We would like to share with you some of our knowledge we’ve
          learnt over the years in this industry. This should give you a better
          idea of what you’re buying.
        </p>
        <ul>
          <p>We will cover:</p>
          <li>Choosing the perfect PC for your needs</li>
          <li>Selecting options/upgrades that make a difference</li>
          <li>Upgrading your PC over time</li>
          <li>What a Gaming PC is made up of</li>
          <li>Jargon & FAQs</li>
        </ul>
      </div>

      <GuideGrid />
        <FAQSection />
     
        <div className={styles.contactInfo}>
          <h3>Or get expert advice and contact us directly</h3>
          <p>
            We’ll make your buying experience easy and simple. It’s free too!
          </p>
          <p>Phone: 123-456-7890</p>
          <p>Email: info@bedrockcomputers.com</p>
        </div>
      
    </div>
  );
};

const GuideGrid = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.gridItem}>
        <Link href="/buying-guide/choosing-perfect-pc">
          <a>
            <h2>Choosing the Perfect PC</h2>
            <p>Based on your budget, requirements, and games you play</p>
          </a>
        </Link>
      </div>
      <div className={styles.gridItem}>
        <Link href="/buying-guide/options-extra">
          <a>
            <h2>Options/Extras</h2>
            <p>We'll install upgrades that add to your experience</p>
          </a>
        </Link>
      </div>
      <div className={styles.gridItem}>
        <Link href="/buying-guide/pc-components">
          <a>
            <h2>PC Components</h2>
            <p>We'll do all the hard work, but it helps to know</p>
          </a>
        </Link>
      </div>
      <div className={styles.gridItem}>
        <Link href="/buying-guide/upgrading-your-pc">
          <a>
            <h2>Upgrading Your PC</h2>
            <p>How to improve your Bedrock PC down the line</p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default BuyingGuideIndex;
