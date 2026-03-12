export default function Head() {
  const siteUrl = "https://barwaaqoagri.com";
  const url = `${siteUrl}/partners`;
  const image = `${siteUrl}/images/hero_agriculture.png`;

  return (
    <>
      <title>Partners | Barwaaqo Agri Group</title>
      <meta name="description" content="Partner with Barwaaqo Agri Group to expand high-quality inputs and agricultural solutions across East Africa." />
      <link rel="canonical" href={url} />
      <meta property="og:title" content="Partners | Barwaaqo Agri Group" />
      <meta property="og:description" content="Explore partnership benefits and opportunities." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
    </>
  );
}
