import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { IconContext } from "react-icons";

import {
  FaFacebook,
  FaInstagram,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Bedrock Computers</title>
        <link rel="icon" type="image/svg" href="/bedrock-small.svg" />
      </Head>

      <div>
        <header>
          <div className={"container"}>
            <Link href={"/"}>
              <Image src={"/bedrock-computers.png"} width={285} height={64} />
            </Link>

            <nav>
              <Link href={"/"}>Home</Link>
              <Link href={"/store"}>Store</Link>
              <Link href={"/buying-guide"}>PC Buying Guide</Link>
              <Link href={"/contact"}>Contact Us</Link>
            </nav>

            <div className={"nav-controls"}>
              <input type="text" />
              <FaShoppingCart />
              <FaUser />
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer>
          <div className="content-container">
            <div className={"footerSection"}>
              <h3>Contact Us</h3>
              <p>123 Example Street</p>
              <p>City, State, ZIP</p>
              <p>Phone: 123-456-7890</p>
            </div>

            <div className={"footerSection"}>
              <h3>Newsletter</h3>
              <p>Subscribe to our newsletter for updates</p>
              <form>
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>

            <div className={"footerSection"}>
              <h3>Sitemap</h3>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/store">Store</Link>
                </li>
                <li>
                  <Link href="/buying-guide">PC Buying Guide</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className={"footerSection"}>
              <h3>Follow Us</h3>
              <div className={"socialIcons"}>
                <IconContext.Provider value={{ size: "2em" }}>
                  <a
                    href="https://www.facebook.com/BedrockComputers"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://www.instagram.com/bedrock.computers"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </IconContext.Provider>
              </div>
            </div>

            <div className={"footerSection"}>
              <p>&copy; {new Date().getFullYear()} Bedrock Computers Limited</p>
              <p>All rights reserved</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
