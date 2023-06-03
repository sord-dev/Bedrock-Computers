import { Layout } from "../components";
import { ProductProvider } from "../contexts/products";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ProductProvider>
        <Component {...pageProps} />
      </ProductProvider>
    </Layout>
  );
}
