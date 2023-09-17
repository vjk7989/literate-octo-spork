import React from 'react';
import { Text, Container, Heading, Flex } from '@chakra-ui/react';
import { Meta } from '@layout/Meta';
import { Main } from '@templates/Main';
import { playgroundToolsList } from '@data/playground';
import { PlaygroundListComponent } from '@components/playground/PlaygroundListItem';

export default function Playgrounds() {
  return (
    <Main
      meta={
        <Meta
          title="Playgrounds | Boilerplate for ZK Dapps"
          description="Playground for EVM chains | Zk Block"
        />
      }
    >
      <Container maxW={'container.lg'} position="relative">
        <Heading
          as="h1"
          color="black"
          fontSize={['35px', '35px', '40px']}
          fontWeight={700}
          mb="20px"
          mt="20px"
        >
          Playgrounds
        </Heading>
        <Text
          fontSize={['15px', '15px', '17px']}
          color="gray.700"
          mb="15px"
        ></Text>
        <Flex justify="center">
          <PlaygroundListComponent items={playgroundToolsList} />
        </Flex>
      </Container>
    </Main>
  );
}
