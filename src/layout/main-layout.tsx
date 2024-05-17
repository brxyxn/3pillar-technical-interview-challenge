import { ReactNode } from "react";

interface IMainLayoutProps {
  children: ReactNode
}

export default function MainLayout({children}: IMainLayoutProps) {
  return (
    <>
      {children}
    </>
  )
}
