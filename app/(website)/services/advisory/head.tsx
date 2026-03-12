export default function Head() {
  const siteUrl = "https://barwaaqoagri.com";
  const url = `${siteUrl}/services/advisory`;
  const image = `${siteUrl}/images/agronomy-img.jpg`;

  return (
    <>
      <title>Farm Advisory & Agronomy | Barwaaqo Agri Group</title>
      <meta name="description" content="On-field support, soil analysis, and crop management strategies to boost farm efficiency." />
      <link rel="canonical" href={url} />
      <meta property="og:title" content="Farm Advisory & Agronomy | Barwaaqo Agri Group" />
      <meta property="og:description" content="Partner with experts to optimize yields with data-driven agronomy." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
    </>
  );
}
