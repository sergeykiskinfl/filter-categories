import {
  Card,  
  CardBody,  
  Stack,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";

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
    <Card maxW="sm" minH="lg">
      <CardBody>
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={imageSrc}
          alt={title}
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
