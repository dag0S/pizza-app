import { Await, useLoaderData } from "react-router-dom";
import { Product } from "../../interfaces/product.interface";
import { Suspense } from "react";

const Product = () => {
  const data = useLoaderData() as { data: Product };

  return (
    <>
      <Suspense fallback={"Загружаю..."}>
        <Await resolve={data.data}>
          {({ data }: { data: Product }) => <>Продукт - {data.name}</>}
        </Await>
      </Suspense>
    </>
  );
};

export default Product;
