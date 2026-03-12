export default function Head() {
  const siteUrl = "https://barwaaqoagri.com";
  const url = `${siteUrl}/services/programs`;
  const image = `${siteUrl}/images/hero_agriculture.png`;

  return (
    <>
      <title>Farmer Programs | Barwaaqo Agri Group</title>
      <meta name="description" content="Capacity-building workshops and outgrower programs that strengthen agricultural communities." />
      <link rel="canonical" href={url} />
      <meta property="og:title" content="Farmer Programs | Barwaaqo Agri Group" />
      <meta property="og:description" content="Grow with structured training and coordinated production programs." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
    </>
  );
}
