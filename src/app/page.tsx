import Image from "next/image";
import ProductCart from "../components/ProductCard";
import Filters from "../components/Filters";
import { Grid, GridItem } from "@chakra-ui/react";
import { getData } from "@/actions";

type Product = {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  images: string[];
};

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  //Запрос кешируется и не повторяется
  const data = await getData();

  const categories = Array.from(
    new Set([...data.products.map((item: Product) => item["category"])])
  );

  const selectedCategory = searchParams.category;

  let filteredProducts;

  if (selectedCategory) {
    filteredProducts = [...data.products].filter(
      (product: Product) => product.category === selectedCategory
    );
  } else {
    filteredProducts = [...data.products];
  }
  
  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-24">
      <Filters categories={categories} />
      <Grid
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={4}
      >
        {filteredProducts.map((product: Product) => {
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
