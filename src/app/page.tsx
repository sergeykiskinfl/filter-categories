import Image from "next/image";
import ProductCart from "./components/ProductCard";
import Filters from "./components/Filters";
import { Grid, GridItem } from "@chakra-ui/react";

type Product = {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  images: string[];
};

async function getData() {
  const res = await fetch(
    "https://dummyjson.com/products?limit=9&skip=10&select=id,title,category,price,description,images"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  const categories = Array.from(
    new Set([...data.products.map((item: Product) => item["category"])])
  );

  // console.log("data", data);

  console.log("categories", categories);

  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-24">
      <Filters categories={categories} />
      <Grid
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={4}
      >
        {[...data.products].map((product: Product) => {
          const { id, title, category, price, description, images } = product;

          return (
            <GridItem key={id}>
              <ProductCart
                title={title}
                category={category}
                price={price}
                description={description}
                imageSrc={images[0]}
              />
            </GridItem>
          );
        })}
      </Grid>
    </main>
  );
}
