'use client'

import { useState, useEffect, createContext, ReactNode } from "react";
import { createClient, OAuthStrategy, TokenRole, RefreshToken, WixClient } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import Cookies from "js-cookie";

export const WixClientReactContext = createContext<WixClient | null>(null);

export const WixClientContextProvider = ({ children }: { children: ReactNode }) => {
  const [wixClient, setWixClient] = useState<WixClient | null>(null);

  useEffect(() => {
    const refreshTokenValue = Cookies.get("refreshToken");
    if (!refreshTokenValue) {
      console.warn("No refresh token found, Wix client not created");
      setWixClient(null);
      return;
    }

    const refreshToken: RefreshToken = {
      value: refreshTokenValue,
      role: TokenRole.NONE,
    };

    try {
      const client = createClient({
        modules: { products, collections },
        auth: OAuthStrategy({
          clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID ?? "",
          tokens: {
            refreshToken,
            accessToken: { value: "", expiresAt: 0 },
          },
        }),
      });
      setWixClient(client);
    } catch (error) {
      console.error("Error creating Wix client:", error);
      setWixClient(null);
    }
  }, []);

  return (
    <WixClientReactContext.Provider value={wixClient}>
      {children}
    </WixClientReactContext.Provider>
  );
};
