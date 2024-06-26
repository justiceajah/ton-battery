"use-client";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <ThemeProvider
        enableSystem={true}
        attribute="class"
        defaultTheme="dark"
        themes={["light", "dark"]}
      
      >
        <div className="">

        {children}
        </div>
      </ThemeProvider>
    </NextUIProvider>
  );
};

export default Providers;
