import { Helmet } from "react-helmet-async";

function SEO({
  title,
  description,
  canonical,
  image = "/og-image.jpg",
}) {
  const siteName = "Joven Safaris";

  const fullTitle = title
    ? title
    : `${siteName} | Luxury African Safaris & Tours`;

  const canonicalUrl = canonical
    ? `https://www.jovensafaris.com${canonical}`
    : "https://www.jovensafaris.com/";

  const imageUrl = image.startsWith("http")
    ? image
    : `https://www.jovensafaris.com${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="robots"
        content="index, follow"
      />

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {/* Open Graph */}
      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:site_name"
        content={siteName}
      />

      <meta
        property="og:title"
        content={fullTitle}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      <meta
        property="og:image"
        content={imageUrl}
      />

      {/* Twitter / X */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={fullTitle}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={imageUrl}
      />
    </Helmet>
  );
}

export default SEO;