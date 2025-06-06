import { createClient, ApiKeyStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";

export const wixClientServer = () => {
  const client = createClient({
    modules: {
      products,
      collections,
    },
    auth: ApiKeyStrategy({
      apiKey: process.env.WIX_API_KEY || "",
      accountId: process.env.WIX_ACCOUNT_ID || "",
    }),
  });
  return client;
};
