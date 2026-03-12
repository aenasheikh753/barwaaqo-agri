export default function Head() {
  const siteUrl = "https://barwaaqoagri.com";
  const url = `${siteUrl}/about`;
  const image = `${siteUrl}/images/hero_agriculture.png`;

  return (
    <>
      <title>About | Barwaaqo Agri Group</title>
      <meta name="description" content="Learn about Barwaaqo Agri Group’s vision, mission, and expertise accelerating modern agriculture across Somalia and East Africa." />
      <link rel="canonical" href={url} />
      <meta property="og:title" content="About | Barwaaqo Agri Group" />
      <meta property="og:description" content="Learn about our foundations and expertise transforming agriculture in Somalia and East Africa." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
    </>
  );
}
