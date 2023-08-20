import Banner from "@/components/Banner";
import { ProductProps } from "../../type";
import Product from "@/components/Products";


interface Props {
  productData:ProductProps
}

export default function Home({productData}: Props) {
 
  return (
    <>
    
    <main>
      <div className="max-w-screen-2xl mx-auto">
        <Banner/>
        <div className="relative md:-mt020 lgl:-mt-32 xl:-mt-60 z-20mb-10">
        <Product productData = {productData}/>

        </div>
      </div>
    </main>
   
    </>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const productData = await res.json();
  return { props: { productData } };
};
