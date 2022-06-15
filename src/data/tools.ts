import { ToolsType } from '@types';

export const allTools: ToolsType[] = [
  {
    id: 1,
    category: 'Security',
    name: 'Slither',
    description:
      'Slither is a solidity static analysis framework. It runs a suite of vulnerability detectors, prints visual information about contract details, and provides an API to easily write custom analyses. ',
    tags: '',
    languages: 'solidity',
    github: 'https://github.com/crytic/slither',
    website: '',
    twitter: '',
  },
  {
    id: 2,
    category: 'Security',
    name: 'MythX',
    description:
      'It is the premier security analysis service for Ethereum smart contracts. Used to avoid costly errors and make Ethereum a more secure and trustworthy platform.',
    tags: '',
    languages: 'solidity',
    github: '',
    website: 'https://mythx.io/',
    twitter: '',
  },
  {
    id: 3,
    category: 'Security',
    name: 'Mythril',
    description:
      'Mythril is a security analysis tool for EVM bytecode. It detects security vulnerabilities in smart contracts built for Ethereum, Hedera, and other EVM-compatible blockchains. It uses symbolic execution, SMT solving and taint analysis to detect a variety of security vulnerabilities.',
    tags: '',
    languages: 'solidity',
    github: 'https://github.com/ConsenSys/mythril',
    website: '',
    twitter: '',
  },
  {
    id: 4,
    category: 'Security',
    name: 'Echidna',
    description:
      ', Echidna is a Haskell program designed for fuzzing/property-based testing of Ethereum smarts contracts.',
    tags: '',
    languages: 'solidity',
    github: 'https://github.com/crytic/echidna',
    website: '',
    twitter: '',
  },
  {
    id: 5,
    category: 'Security',
    name: 'Manticore',
    description:
      'Manticore is a symbolic execution tool for analysis of smart contracts and binaries.',
    tags: '',
    languages: 'solidity',
    github: '',
    website: '',
    twitter: '',
  },
  {
    id: 6,
    category: 'zk',
    name: 'snarkjs',
    description:
      'This is a JavaScript and Pure Web Assembly implementation of zkSNARK and PLONK schemes. It uses the Groth16 Protocol (3 point only and 3 pairings) and PLONK.',
    tags: 'snarks, zk, groth16, plonk',
    languages: 'javascript',
    github: 'https://github.com/iden3/snarkjs',
    website: '',
    twitter: '',
  },
  {
    id: 7,
    category: 'zk',
    name: 'circomlib',
    description: 'This repository contains a library of circuit templates.',
    tags: 'circom, zk, circuit',
    languages: 'circom',
    github: 'https://github.com/iden3/circomlib',
    website: '',
    twitter: '',
  },
  {
    id: 8,
    category: 'zk',
    name: 'circom',
    description:
      'It is domain-specific language for defining arithmetic circuits that can be used to generate zk proofs. The compiler generates a R1CS file with a set of associated constraints and a program to compute a valid assignment to all wires of the circuit.',
    tags: 'snarks, circom, groth, plonk',
    languages: 'circom',
    github: 'https://github.com/iden3/circom',
    website: 'https://iden3.io/circom',
    twitter: '',
  },
  {
    id: 9,
    category: 'zk',
    name: 'wasmsnark',
    description:
      'A fast zkSnark proof and verifier and proof generator written in native Web Assembly. This module generates highly optimized Web Assembly modules for the low level cryptographic primitives.',
    tags: 'snarks',
    languages: 'javascript, wasm',
    github: 'https://github.com/iden3/wasmsnark',
    website: '',
    twitter: '',
  },
  {
    id: 10,
    category: 'zk',
    name: 'go-iden3-crypto',
    description:
      'Go implementation of some cryptographic primitives (that fit inside the SNARK field) used in iden3.',
    tags: 'snarks',
    languages: 'go',
    github: 'https://github.com/iden3/go-iden3-crypto',
    website: '',
    twitter: '',
  },
  {
    id: 11,
    category: 'zk',
    name: 'Prover Server',
    description:
      'Prover Server is a REST API wrapper & golang binding for snarkjs\n.',
    tags: 'snarks, snarkjs',
    languages: 'go, javascript',
    github: 'https://github.com/iden3/prover-server',
    website: '',
    twitter: '',
  },
  {
    id: 12,
    category: 'zk',
    name: 'ffjavascript',
    description: 'Finite field library in javascript.',
    tags: 'finitefield, cryptography',
    languages: 'javascript',
    github: 'https://github.com/iden3/ffjavascript',
    website: '',
    twitter: '',
  },
  {
    id: 13,
    category: 'zk',
    name: 'merkletree-proof',
    description:
      'Merkletree proof generation/validation based on reverse hash service',
    tags: 'merkletree',
    languages: 'go',
    github: 'https://github.com/iden3/merkletree-proof',
    website: '',
    twitter: '',
  },
  {
    id: 14,
    category: 'zk',
    name: 'circom tester',
    description: 'Tool for testing circom circuits.',
    tags: 'circom, testing',
    languages: 'javascript, circom',
    github: 'https://github.com/iden3/circom_tester',
    website: '',
    twitter: '',
  },
  {
    id: 15,
    category: 'zk',
    name: 'Mina zkApp cli',
    description:
      'The Mina zkApp CLI allows you to scaffold, write, test, & deploy zkApps ("zero-knowledge apps") for Mina Protocol using recommended best practices.',
    tags: 'mina',
    languages: 'javascript, typescript',
    github: 'https://github.com/o1-labs/zkapp-cli/',
    website: '',
    twitter: '',
  },
  {
    id: 16,
    category: 'zk',
    name: 'SnarkyJS',
    description:
      'A typeScript framework for writing zero-knowledge proof-based smart contracts, which is included by default in projects created using Mina zkApp CLI.',
    tags: 'mina, snarks',
    languages: 'javascript, typescript',
    github: '',
    website: 'https://docs.minaprotocol.com/en/zkapps/snarkyjs-reference',
    twitter: '',
  },
  {
    id: 17,
    category: 'zk',
    name: 'Cairo',
    description:
      'Cairo is the first production-grade platform for generating validity proofs for general computation. Cairo is a programming language for writing provable programs.',
    tags: 'starknet, cairo, starks',
    languages: 'cairo',
    github: 'https://github.com/starkware-libs/cairo-lang',
    website: 'https://cairo-lang.org/docs/',
    twitter: '',
  },
  {
    id: 18,
    category: 'zk',
    name: 'Semaphore',
    description:
      'A privacy gadget for creating anonymous proof of membership on Ethereum.',
    tags: 'snarks, semaphore, appliedZk, javascript, typescript,circom, snarkjs',
    languages: 'javascript, typescript, circom',
    github: 'https://github.com/semaphore-protocol/semaphore',
    website: '',
    twitter: '',
  },
  {
    id: 19,
    category: 'zk',
    name: 'ZK protocols',
    description:
      'Client library for generating and verifying Semaphore & RLN ZK proofs.',
    tags: 'snarks, semaphore, appliedZk, javascript, typescript,circom, snarkjs',
    languages: 'javascript, typescript',
    github: 'https://github.com/appliedzkp/zk-kit/tree/main/packages/protocols',
    website: '',
    twitter: '',
  },
  {
    id: 20,
    category: 'zk',
    name: 'ZK identities',
    description:
      'Library for managing identities for Semaphore and RLN protocols.',
    tags: 'snarks, semaphore, appliedZk, javascript, typescript,circom, snarkjs',
    languages: 'javascript, typescript',
    github: 'https://github.com/appliedzkp/zk-kit/tree/main/packages/identity',
    website: '',
    twitter: '',
  },
  {
    id: 21,
    category: 'zk',
    name: 'ZK Kit',
    description:
      'A monorepo of reusable JS libraries for zero-knowledge technologies.',
    tags: 'snarks, semaphore, appliedZk, javascript, typescript,circom, snarkjs, rust',
    languages: 'javascript, typescript',
    github: 'https://github.com/appliedzkp/zk-kit',
    website: '',
    twitter: '',
  },
  {
    id: 22,
    category: 'zk',
    name: 'Minimal Anti-Collusion Infrastructure',
    description: '',
    tags: 'maci',
    languages: '',
    github: 'https://github.com/appliedzkp/maci',
    website: '',
    twitter: '',
  },
  {
    id: 23,
    category: 'zk',
    name: "Aztec's SDK",
    description:
      "Aztec's SDK is the gateway for developers to access the Aztec network. The SDK lets end users benefit from low gas fees and privacy on Ethereum. The SDK connects to our ZkRollup service and can be integrated with one line of code.",
    tags: 'aztec, zkrollups',
    languages: 'javascript',
    github: '',
    website:
      'https://developers.aztec.network/#/A%20Private%20Layer%202/Initialize%20the%20SDK',
    twitter: '',
  },
  {
    id: 24,
    category: 'zk',
    name: 'Noir',
    description:
      'ZK-SNARK programming language by Aztec, support fully programmable privacy-preserving smart contracts.',
    tags: 'noir, aztec',
    languages: 'noir',
    github: 'https://noir-lang.github.io/book/index.html',
    website: 'https://noir-lang.github.io/book/index.html',
    twitter: '',
  },
  {
    id: 25,
    category: 'zk',
    name: 'zkblock',
    description: 'zk dapp bolierplate and tools to develop zk dapps.',
    tags: 'snarks, semaphore, appliedZk, javascript, typescript,circom, snarkjs, rust',
    languages: 'javascript, typescript',
    github: 'https://github.com/heypran/zk-block',
    website: 'https://zkblock.app',
    twitter: '',
  },
  {
    id: 26,
    category: 'zk',
    name: 'Lurk',
    description:
      'Lurk is an in-development programming language for Turing-complete recursive SNARKs.',
    tags: 'snarks, filecoin',
    languages: 'snarks, rust',
    github: 'https://github.com/lurk-lang',
    website:
      'https://filecoin.io/blog/posts/introducing-lurk-a-programming-language-for-recursive-zk-snarks/',
    twitter: '',
  },
];
