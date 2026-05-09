// Local Business Schema Markup for All Seasons Foam & Services
// This provides structured data for search engines to understand the business

export default function LocalBusinessSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "All Seasons Foam Coatings & Services",
    "image": "https://www.allseasonsfoam.com/images/logo-all-seasons-foam.png",
    "description": "Professional foam coatings, secondary containment, and industrial painting services for the oil and gas industry. Serving the Permian Basin with 20+ years of experience.",
    "url": "https://www.allseasonsfoam.com",
    "telephone": "+18774207575",
    "email": "jdrager@allseasonsfoam.com",
    "priceRange": "$$",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "6316 S County Road 1185",
        "addressLocality": "Midland",
        "addressRegion": "TX",
        "postalCode": "79706",
        "addressCountry": "US"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "201 Railroad Ave",
        "addressLocality": "Sanger",
        "addressRegion": "TX",
        "postalCode": "76266",
        "addressCountry": "US"
      }
    ],
    "geo": [
      {
        "@type": "GeoCoordinates",
        "latitude": "31.9973",
        "longitude": "-102.0779"
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Midland",
        "containedIn": {
          "@type": "State",
          "name": "Texas"
        }
      },
      {
        "@type": "City",
        "name": "Odessa",
        "containedIn": {
          "@type": "State",
          "name": "Texas"
        }
      },
      {
        "@type": "City",
        "name": "Pecos",
        "containedIn": {
          "@type": "State",
          "name": "Texas"
        }
      },
      {
        "@type": "City",
        "name": "Andrews",
        "containedIn": {
          "@type": "State",
          "name": "Texas"
        }
      },
      {
        "@type": "City",
        "name": "Big Spring",
        "containedIn": {
          "@type": "State",
          "name": "Texas"
        }
      },
      {
        "@type": "Place",
        "name": "Permian Basin",
        "containedIn": {
          "@type": "State",
          "name": "Texas"
        }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Oil & Gas Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Secondary Containment Systems",
            "description": "SPCC and EPA compliant secondary containment systems for oil and gas operations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Protective Coatings",
            "description": "Polyurea, epoxy, and urethane protective coating systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Industrial Painting",
            "description": "Professional industrial painting for tanks, vessels, pipes, and equipment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Equipment Rentals",
            "description": "Rental equipment including drive-over containment, vacuum trailers, and safety restraints"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tank Coatings",
            "description": "Internal and external tank coating systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pipe & Valve Coatings",
            "description": "Protective coatings for pipes and valves in harsh environments"
          }
        }
      ]
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/AllSeasonsFoamInsulation/",
      "https://www.linkedin.com/company/all-seasons-foam-coatings-and-services",
      "https://youtu.be/Y2Fbiufr4xQ?si=sKTjLoxRS0OtDV0E"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "1"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}
