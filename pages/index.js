import { BenefitGrid, Hero, Product } from "../components";
import styles from "../styles/Home.module.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae faucibus risus. Nulla accumsan volutpat urna, id ullamcorper elit ullamcorper et.",
  },
  {
    id: 2,
    name: "Jane Smith",
    testimonial: "Ut venenatis metus at bibendum venenatis. Integer rhoncus metus ut dui placerat pulvinar. Morbi id neque magna. Curabitur dapibus sem ut est venenatis, sit amet posuere elit malesuada.",
  }
];

export default function IndexPage() {
  return (
    <>
      <Hero />
      <BenefitGrid />

      <div className={"content-container"}>
        <div style={{ textAlign: "center", marginBottom: "12px" }}>
          <h2>Our best selling computers</h2>
          <p>
            You’ll get silky smooth performance on Warzone, GTA V and flight
            simulators for example. These PCs look and feel new, except they
            don’t harm the environment with manufacturing new electronics
          </p>
        </div>
        <HottestProducts />
        
        <section style={{textAlign: 'center'}}>
          <h2 style={{marginBottom: '6px'}}>Reviews from Real Customers</h2>
          <p style={{ marginBottom: '24px'}}>
            We pride ourselves with having exceptional reviews on all platforms such as Facebook, Trustpilot, Google and eBay. Customer care is at the forefront of the Bedrock Computers ethos.
          </p>
          
        <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        transitionTime={500}
        >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles['testimonials']}>
            <h3>{testimonial.name}</h3>
            <p>{testimonial.testimonial}</p>
          </div>
        ))}
      </Carousel>
        </section>
        
       
      </div>
    </>
  );
}

const HottestProducts = () => {
  return (
    <div className={styles.product_row}>
      <Product
        {...{
          image:
            "https://bedrock-computers.co.uk/wp-content/uploads/2023/04/DiamondLabels-600x800.jpg",
          name: "Some Random PC",
          price: 0,
        }}
      />
      <Product
        {...{
          image:
            "https://bedrock-computers.co.uk/wp-content/uploads/2023/04/DiamondLabels-600x800.jpg",
          name: "Some Random PC That's Better Than The Others",
          price: 1337,
        }}
      />
      <Product
        {...{
          image:
            "https://bedrock-computers.co.uk/wp-content/uploads/2023/04/DiamondLabels-600x800.jpg",
          name: "Some Random PC",
          price: 0,
        }}
      />
      <Product
        {...{
          image:
            "https://bedrock-computers.co.uk/wp-content/uploads/2023/04/DiamondLabels-600x800.jpg",
          name: "Some Random PC",
          price: 0,
        }}
      />
    </div>
  );
};
