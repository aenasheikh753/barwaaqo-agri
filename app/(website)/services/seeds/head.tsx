export default function Head() {
  const siteUrl = "https://barwaaqoagri.com";
  const url = `${siteUrl}/services/seeds`;
  const image = `${siteUrl}/images/agri1.jpg`;

  return (
    <>
      <title>Seeds & Inputs | Barwaaqo Agri Group</title>
      <meta name="description" content="Certified vegetable seeds, fertilizers, and crop protection tailored for Somali and East African conditions." />
      <link rel="canonical" href={url} />
      <meta property="og:title" content="Seeds & Inputs | Barwaaqo Agri Group" />
      <meta property="og:description" content="Request a catalog of certified seeds and essential agricultural inputs." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
    </>
  );
}
