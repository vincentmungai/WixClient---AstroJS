import { createClient, OAuthStrategy } from "@wix/sdk";
import { items } from "@wix/data";

const WixClient = createClient({
    modules: { items },
    auth: OAuthStrategy({
        clientId: import.meta.env.WIX_CLIENT_ID,  // Correct use in Vite-based apps
    }),
});

export default async function fetchArticles() {
    try {
        const query = WixClient.items.queryDataItems({
            dataCollectionId: "Import982",
        });
        const articles = await query.find();
        console.log('Fetched articles:', articles);
        return articles.items;
    } catch (error) {
        console.error('Error fetching articles:', error);
        return [];
    }
}
