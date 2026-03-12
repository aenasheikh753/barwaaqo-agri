export default function Head() {
  const siteUrl = "https://barwaaqoagri.com";
  const url = `${siteUrl}/contact`;
  const image = `${siteUrl}/images/hero_agriculture.png`;

  return (
    <>
      <title>Contact | Barwaaqo Agri Group</title>
      <meta name="description" content="Get in touch with Barwaaqo Agri Group for services, partnerships, or general inquiries." />
      <link rel="canonical" href={url} />
      <meta property="og:title" content="Contact | Barwaaqo Agri Group" />
      <meta property="og:description" content="Reach our team for support and collaboration." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
    </>
  );
}
