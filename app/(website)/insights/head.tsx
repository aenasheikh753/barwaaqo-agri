export default function Head() {
  const siteUrl = "https://barwaaqoagri.com";
  const url = `${siteUrl}/insights`;
  const image = `${siteUrl}/images/hero_agriculture.png`;

  return (
    <>
      <title>Insights | Barwaaqo Agri Group</title>
      <meta name="description" content="Guides and analysis on seeds, irrigation, and agronomy for the Somali context." />
      <link rel="canonical" href={url} />
      <meta property="og:title" content="Insights | Barwaaqo Agri Group" />
      <meta property="og:description" content="Knowledge hub for modern farming practices." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
    </>
  );
}
