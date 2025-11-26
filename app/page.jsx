import Image from "next/image";
import Hero from "./Component/Hero/Hero";
import LatestProducts from "./Component/LatestProducts/LatestProducts";
import Features from "./Features/Features";
import Categories from "./Category/Category";



export default function Home() {
  return (
    <div className="">
     
      <Hero></Hero>
      <LatestProducts></LatestProducts>
      <Features></Features>
      <Categories></Categories>

      
    </div>
  );
}
