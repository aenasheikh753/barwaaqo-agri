export default function Head() {
  const siteUrl = "https://barwaaqoagri.com";
  const url = `${siteUrl}/services/irrigation`;
  const image = `${siteUrl}/images/project-1.png`;

  return (
    <>
      <title>Irrigation & Farm Development | Barwaaqo Agri Group</title>
      <meta name="description" content="Design and implementation of efficient drip and sprinkler irrigation systems and modern farm infrastructure." />
      <link rel="canonical" href={url} />
      <meta property="og:title" content="Irrigation & Farm Development | Barwaaqo Agri Group" />
      <meta property="og:description" content="Efficient water management for consistent crop growth." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
    </>
  );
}
