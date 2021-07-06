const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const client = require("contentful").createClient({
  space: space,
  accessToken: accessToken,
});

export async function fetchPosts() {
  const entries = await client.getEntries({ content_type: "blogPost" });
  if (entries.items) return entries.items;

  console.log(`Error getting Entries for ${contentType.name}.`);
}

export async function fetchBlogPost(slug) {
  const entries = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": slug,
  });
  if (entries.items[0]) return entries.items[0];

  console.log(`Error getting folio piece`);
}
