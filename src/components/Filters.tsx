"use client";

import { Button, HStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

// Фильтры по категориям
export default function Filters({ categories }: { categories: string[] }) {
  const colors = ["green", "orange", "yellow", "teal", "blue", "red"];

  const router = useRouter();

  const setCategory = (category: string) => {
    if (category) {
      router.push("?category=" + category);
    }
    if (!category) {
      router.push("/");
    }
  };

  return (
    <HStack gap={4} marginBottom={10}>
      <Button colorScheme="gray" onClick={() => setCategory("")}>
        All
      </Button>
      {categories.map((item, index) => {
        return (
          <Button
            key={item}
            colorScheme={colors[index]}
            onClick={() => setCategory(item)}
          >
            {item}
          </Button>
        );
      })}
    </HStack>
  );
}
