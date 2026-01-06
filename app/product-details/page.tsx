import Landing from "@/components/ui/Landing";
import Product from "@/components/layout/Product";
import Header from "@/components/layout/Header";
import Rating from "@/components/ui/Rating";
import Similar from "@/components/ui/Similar";
import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Product Details | Store",
  description: "View product details, price, reviews, and similar items.",
};




const ProductDetailsPage = () => {
  return (
    <section className="pt-0 py-10">
          <Header/>
          <Landing/>
          <Product/>
          <Rating/>
          <Similar/>
          <Footer />
    </section>
  )
};export default ProductDetailsPage;