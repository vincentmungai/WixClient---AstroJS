import { createClient, OAuthStrategy}  from "@wix/sdk";
import { items } from "@wix/data";

const WixClient = createClient({
    modules: { items },
    auth: OAuthStrategy({
        clientId: import.meta.env.WIX_CLIENT_ID,
    }),
});

export default async function fetchArticles() {
    let query = WixClient.items.queryDataItems({
        dataCollectionId: "Import982",
    });

    const articles = await query.find();
    return articles.items;
}