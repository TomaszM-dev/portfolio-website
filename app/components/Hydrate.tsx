"use client";
import { ReactNode, useEffect, useState } from "react";

import React from "react";
import LoadingAnimation from "./LoadingAnimation";

const Hydrate = ({ children }: { children: ReactNode }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  // wait till next js completes
  useEffect(() => {
    setTimeout(() => {
      setIsHydrated(true);
    }, 2500);
  }, []);
  return <>{isHydrated ? <>{children}</> : <LoadingAnimation />}</>;
};

export default Hydrate;
