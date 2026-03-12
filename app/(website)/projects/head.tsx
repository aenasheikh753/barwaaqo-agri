export default function Head() {
  const siteUrl = "https://barwaaqoagri.com";
  const url = `${siteUrl}/projects`;
  const image = `${siteUrl}/images/hero_agriculture.png`;

  return (
    <>
      <title>Projects | Barwaaqo Agri Group</title>
      <meta name="description" content="Explore case studies, approaches, and projects delivering impact across Somalia and East Africa." />
      <link rel="canonical" href={url} />
      <meta property="og:title" content="Projects | Barwaaqo Agri Group" />
      <meta property="og:description" content="Our approach and project outcomes in modern agriculture." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
    </>
  );
}
