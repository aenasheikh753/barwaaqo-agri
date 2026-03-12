export default function Head() {
  const siteUrl = "https://barwaaqoagri.com";
  const url = `${siteUrl}/services`;
  const image = `${siteUrl}/images/hero_agriculture.png`;

  return (
    <>
      <title>Services | Barwaaqo Agri Group</title>
      <meta name="description" content="Explore seeds and inputs, farm advisory, irrigation development, and farmer programs offered by Barwaaqo Agri Group." />
      <link rel="canonical" href={url} />
      <meta property="og:title" content="Services | Barwaaqo Agri Group" />
      <meta property="og:description" content="High-quality inputs, agronomy, and irrigation services for productive farming." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
    </>
  );
}
