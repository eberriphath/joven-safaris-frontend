function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": "https://www.jovensafaris.com/#organization",
    "name": "Joven Safaris",
    "url": "https://www.jovensafaris.com/",
    "description":
      "Joven Safaris creates unforgettable safari journeys, tours and luxury travel experiences across Kenya, East Africa, South Africa and beyond.",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Kenya"
      },
      {
        "@type": "Place",
        "name": "East Africa"
      },
      {
        "@type": "Country",
        "name": "South Africa"
      },
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.jovensafaris.com/#website",
    "name": "Joven Safaris",
    "url": "https://www.jovensafaris.com/",
    "publisher": {
      "@id": "https://www.jovensafaris.com/#organization"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
    </>
  );
}

export default StructuredData;