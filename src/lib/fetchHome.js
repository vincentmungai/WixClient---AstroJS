import { createClient, OAuthStrategy } from "@wix/sdk";
import { items } from "@wix/data";

const WixClient = createClient({
    modules: { items },
    auth: OAuthStrategy({
        clientId: import.meta.env.WIX_CLIENT_ID,  // Correct use in Vite-based apps
    }),
});

export default async function fetchHomeLayout() {
    try {
        const query = WixClient.items.queryDataItems({
            dataCollectionId: "HomePage",
        });
        const homeLayout = await query.find();
        console.log('Fetched Layout:', homeLayout);
        return homeLayout.items;
    } catch (error) {
        console.error('Error fetching Layout:', error);
        return [];
    }
}
