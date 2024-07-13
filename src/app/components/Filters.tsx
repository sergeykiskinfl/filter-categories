"use client";

import { Button, HStack } from "@chakra-ui/react";

export default function Filters({ categories }: { categories: string[] }) {
  const colors = ["green", "orange", "yellow", "teal", "blue", "red"];

  return (
    <HStack gap={4} marginBottom={10}>
      {categories.map((item, index) => {
        return (
          <Button key={item} colorScheme={colors[index]}>
            {item}
          </Button>
        );
      })}
    </HStack>
  );
}
