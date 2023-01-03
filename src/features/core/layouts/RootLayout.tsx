import React from "react";
import { AppBar } from "src/features/core/layouts/AppBar";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <AppBar />
      <div className="flex py-3 px-6 text-black items-center justify-center">
        {children}
      </div>
    </>
  );
};
