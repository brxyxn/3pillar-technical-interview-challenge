"use client"

import { ChakraBaseProvider, } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IProvidersProps {
  children: ReactNode;
}


export default function Providers({children}: IProvidersProps) {
  return (
    <ChakraBaseProvider>
      {children}
    </ChakraBaseProvider>
  )
}
