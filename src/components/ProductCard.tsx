import { Card, CardBody, Stack, Heading, Text } from "@chakra-ui/react";

import Image from "next/image";

type Props = {
  title: string;
  category: string;
  price: number;
  description: string;
  imageSrc: string;
};

export default function ProductCart({
  title,
  category,
  price,
  description,
  imageSrc,
}: Props) {
  return (
    <Card w="sm" minH="lg">
      <CardBody>
        <Image
          src={imageSrc}
          width={200}
          height={200}
          priority={true}
          alt="Picture of the author"
          style={{margin: "auto", height: 200, width: 200 }}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>Category: {category}</Text>
          <Text>{description}</Text>
          <Text color="blue.600" fontSize="2xl">
            ${price}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}
