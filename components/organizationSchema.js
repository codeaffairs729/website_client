import React from 'react'

const OrganizationSchema = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Code Garage Tech',
        description:
          'Looking for reliable Custom Web Development Services in India & USA? Code Garage Tech is here! We offer scalable, robust, and quality services. Contact us now!',
        email: 'hr@codegaragetech.com',
        url: 'https:/codegaragetech.com',
        telephone: '+91 82889 83623',
        image: 'https://codegaragetech.com/logo/cgt_new_logo_alt.webp',
        address: {
          '@type': 'PostalAddress',
          streetAddress:
            'The Atrium at Quark City Lower Ground Floor, Zone-B, Plot No A45, Industrial Area, Phase 8B',
          addressLocality: 'SAS-Nagar, Mohali',
          addressRegion: 'Punjab',
          addressCountry: 'India',
          postalCode: '160059',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '52',
        },
        sameAs: [
          'https://www.facebook.com/codegaragetech/',
          'https://www.instagram.com/codegaragetech/',
          'https://mobile.twitter.com/codegaragetech',
          'https://in.linkedin.com/company/codegarage-tech',
        ],
      }),
    }}
  />
)

const WebsiteSchema = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Website',
        name: 'Code Garage Tech',
        description:
          'Looking for reliable Custom Web Development Services in India & USA? Code Garage Tech is here! We offer scalable, robust, and quality services. Contact us now!',
        url: 'https://codegaragetech.com',
        image: 'https://codegaragetech.com/logo/cgt_new_logo_alt.webp',
        sameAs: [
          'https://www.facebook.com/codegaragetech/',
          'https://www.instagram.com/codegaragetech/',
          'https://mobile.twitter.com/codegaragetech',
          'https://in.linkedin.com/company/codegarage-tech',
        ],
      }),
    }}
  />
)

const LocalBusinessSchema = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Code Garage Tech',
        description:
          'Looking for reliable Custom Web Development Services in India & USA? Code Garage Tech is here! We offer scalable, robust, and quality services. Contact us now!',
        email: 'hr@codegaragetech.com',
        url: 'https://codegaragetech.com',
        telephone: '+91 82889 83623',
        image: 'https://codegaragetech.com/logo/cgt_new_logo_alt.webp',
        address: {
          '@type': 'PostalAddress',
          streetAddress:
            'The Atrium at Quark City Lower Ground Floor, Zone-B, Plot No A45, Industrial Area, Phase 8B',
          addressLocality: 'SAS-Nagar, Mohali',
          addressRegion: 'Punjab',
          addressCountry: 'India',
          postalCode: '160059',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '52',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '30.711500',
          longitude: '76.706000',
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '17:00',
        },
        sameAs: [
          'https://www.facebook.com/codegaragetech/',
          'https://www.instagram.com/codegaragetech/',
          'https://mobile.twitter.com/codegaragetech',
          'https://in.linkedin.com/company/codegarage-tech',
        ],
      }),
    }}
  />
)
const WebServicesSchema = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Service',
        serviceType: 'Web Solutions',
        url: 'https://codegaragetech.com/services/web-services',
        description:
          'At Code Garage Tech, we offer full web development solutions, from initial planning to final delivery and third-party testing. Get in Touch with us now!',
        provider: {
          '@type': 'Organization',
          name: 'Code Garage Tech',
          description:
            'Looking for reliable Custom Web Development Services in India & USA? Code Garage Tech is here! We offer scalable, robust, and quality services. Contact us now!',
          email: 'hr@codegaragetech.com',
          url: 'https://codegaragetech.com',
          telephone: '+91 82889 83623',
          image: 'https://codegaragetech.com/logo/cgt_new_logo_alt.webp',
          address: {
            '@type': 'PostalAddress',
            streetAddress:
              'The Atrium at Quark City Lower Ground Floor, Zone-B, Plot No A45, Industrial Area, Phase 8B',
            addressLocality: 'SAS-Nagar, Mohali',
            addressRegion: 'Punjab',
            addressCountry: 'India',
            postalCode: '160059',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '52',
          },
        },
      }),
    }}
  />
)
const MobileServicesSchema = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Service',
        serviceType: 'Mobile Solutions',
        url: 'https://codegaragetech.com/services/mobile-solutions',
        description:
          'We offer reliable mobile solutions like Android App Development IOS App Development React Native Development Flutter Development. Contact us now',
        provider: {
          '@type': 'Organization',
          name: 'Code Garage Tech',
          description:
            'Looking for reliable Custom Web Development Services in India & USA? Code Garage Tech is here! We offer scalable, robust, and quality services. Contact us now!',
          email: 'hr@codegaragetech.com',
          url: 'https://codegaragetech.com',
          telephone: '+91 82889 83623',
          image: 'https://codegaragetech.com/logo/cgt_new_logo_alt.webp',
          address: {
            '@type': 'PostalAddress',
            streetAddress:
              'The Atrium at Quark City Lower Ground Floor, Zone-B, Plot No A45, Industrial Area, Phase 8B',
            addressLocality: 'SAS-Nagar, Mohali',
            addressRegion: 'Punjab',
            addressCountry: 'India',
            postalCode: '160059',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '52',
          },
        },
      }),
    }}
  />
)

const DevOpsServicesSchema = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Service',
        serviceType: 'DevOps',
        url: 'https://codegaragetech.com/services/dev-ops',
        description:
          'Effective DevOps services like Automation CI/CD Cloud Engineering! We ensure swift on-boarding of apps by automating the end-to-end delivery - Code Garage Tech',
        provider: {
          '@type': 'Organization',
          name: 'Code Garage Tech',
          description:
            'Looking for reliable Custom Web Development Services in India & USA? Code Garage Tech is here! We offer scalable, robust, and quality services. Contact us now!',
          email: 'hr@codegaragetech.com',
          url: 'https://codegaragetech.com',
          telephone: '+91 82889 83623',
          image: 'https://codegaragetech.com/logo/cgt_new_logo_alt.webp',
          address: {
            '@type': 'PostalAddress',
            streetAddress:
              'The Atrium at Quark City Lower Ground Floor, Zone-B, Plot No A45, Industrial Area, Phase 8B',
            addressLocality: 'SAS-Nagar, Mohali',
            addressRegion: 'Punjab',
            addressCountry: 'India',
            postalCode: '160059',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '52',
          },
        },
      }),
    }}
  />
)
const UIUXServicesSchema = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Service',
        serviceType: 'UI/UX Designing',
        url: 'https://codegaragetech.com/services/ui-ux',
        description:
          'From research to design to development, we provide a full range of UI/UX design services to bring your ideas to life. Contact Code Garage Tech now!!',
        provider: {
          '@type': 'Organization',
          name: 'Code Garage Tech',
          description:
            'Looking for reliable Custom Web Development Services in India & USA? Code Garage Tech is here! We offer scalable, robust, and quality services. Contact us now!',
          email: 'hr@codegaragetech.com',
          url: 'https://codegaragetech.com',
          telephone: '+91 82889 83623',
          image: 'https://codegaragetech.com/logo/cgt_new_logo_alt.webp',
          address: {
            '@type': 'PostalAddress',
            streetAddress:
              'The Atrium at Quark City Lower Ground Floor, Zone-B, Plot No A45, Industrial Area, Phase 8B',
            addressLocality: 'SAS-Nagar, Mohali',
            addressRegion: 'Punjab',
            addressCountry: 'India',
            postalCode: '160059',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '52',
          },
        },
      }),
    }}
  />
)
const EcommerceServicesSchema = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Service',
        serviceType: 'E-commerce Solutions',
        url: 'https://codegaragetech.com/services/ecommerce-solutions',
        description:
          'We offer efficacious and reliable E-commerce Solutions that enhance your business visibility globally- Code Garage Tech. Contact Code Garage Tech now!',
        provider: {
          '@type': 'Organization',
          name: 'Code Garage Tech',
          description:
            'Looking for reliable Custom Web Development Services in India & USA? Code Garage Tech is here! We offer scalable, robust, and quality services. Contact us now!',
          email: 'hr@codegaragetech.com',
          url: 'https://codegaragetech.com',
          telephone: '+91 82889 83623',
          image: 'https://codegaragetech.com/logo/cgt_new_logo_alt.webp',
          address: {
            '@type': 'PostalAddress',
            streetAddress:
              'The Atrium at Quark City Lower Ground Floor, Zone-B, Plot No A45, Industrial Area, Phase 8B',
            addressLocality: 'SAS-Nagar, Mohali',
            addressRegion: 'Punjab',
            addressCountry: 'India',
            postalCode: '160059',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '52',
          },
        },
      }),
    }}
  />
)
const CMSServicesSchema = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Service',
        serviceType: 'Content Management System',
        url: 'https://codegaragetech.com/services/content-management-system',
        description:
          'We streamline your business website using appropriate content management services. CGT company has depth knowledge and expertise in offering CMS solutions.',
        provider: {
          '@type': 'Organization',
          name: 'Code Garage Tech',
          description:
            'Looking for reliable Custom Web Development Services in India & USA? Code Garage Tech is here! We offer scalable, robust, and quality services. Contact us now!',
          email: 'hr@codegaragetech.com',
          url: 'https://codegaragetech.com',
          telephone: '+91 82889 83623',
          image: 'https://codegaragetech.com/logo/cgt_new_logo_alt.webp',
          address: {
            '@type': 'PostalAddress',
            streetAddress:
              'The Atrium at Quark City Lower Ground Floor, Zone-B, Plot No A45, Industrial Area, Phase 8B',
            addressLocality: 'SAS-Nagar, Mohali',
            addressRegion: 'Punjab',
            addressCountry: 'India',
            postalCode: '160059',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '52',
          },
        },
      }),
    }}
  />
)
const CRMServicesSchema = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Service',
        serviceType: 'Customer Relationship Management',
        url: 'https://codegaragetech.com/services/customer-relationship-management',
        description:
          'We streamline your business website using appropriate content management services. CGT company has depth knowledge and expertise in offering CMS solutions.',
        provider: {
          '@type': 'Organization',
          name: 'Code Garage Tech',
          description:
            'Looking for reliable Custom Web Development Services in India & USA? Code Garage Tech is here! We offer scalable, robust, and quality services. Contact us now!',
          email: 'hr@codegaragetech.com',
          url: 'https://codegaragetech.com',
          telephone: '+91 82889 83623',
          image: 'https://codegaragetech.com/logo/cgt_new_logo_alt.webp',
          address: {
            '@type': 'PostalAddress',
            streetAddress:
              'The Atrium at Quark City Lower Ground Floor, Zone-B, Plot No A45, Industrial Area, Phase 8B',
            addressLocality: 'SAS-Nagar, Mohali',
            addressRegion: 'Punjab',
            addressCountry: 'India',
            postalCode: '160059',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '52',
          },
        },
      }),
    }}
  />
)
const DigitalMarketingServicesSchema = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Service',
        serviceType: 'Digital Marketing',
        url: 'https://codegaragetech.com/services/digital-marketing',
        description:
          'Code Garage Tech provides digital marketing services that make your business grow organically. Contact us today to grow your business. Contact us now!',
        provider: {
          '@type': 'Organization',
          name: 'Code Garage Tech',
          description:
            'Looking for reliable Custom Web Development Services in India & USA? Code Garage Tech is here! We offer scalable, robust, and quality services. Contact us now!',
          email: 'hr@codegaragetech.com',
          url: 'https://codegaragetech.com',
          telephone: '+91 82889 83623',
          image: 'https://codegaragetech.com/logo/cgt_new_logo_alt.webp',
          address: {
            '@type': 'PostalAddress',
            streetAddress:
              'The Atrium at Quark City Lower Ground Floor, Zone-B, Plot No A45, Industrial Area, Phase 8B',
            addressLocality: 'SAS-Nagar, Mohali',
            addressRegion: 'Punjab',
            addressCountry: 'India',
            postalCode: '160059',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '52',
          },
        },
      }),
    }}
  />
)
const DeploymentHostManagementServicesSchema = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Service',
        serviceType: 'Deployment and Host Management',
        url: 'https://codegaragetech.com/services/deployment-and-host-management',
        description:
          'Code Garage Tech’s software deployment tools help IT admins in deployment automation with flexibility and control over the Hosting management process.',
        provider: {
          '@type': 'Organization',
          name: 'Code Garage Tech',
          description:
            'Looking for reliable Custom Web Development Services in India & USA? Code Garage Tech is here! We offer scalable, robust, and quality services. Contact us now!',
          email: 'hr@codegaragetech.com',
          url: 'https://codegaragetech.com',
          telephone: '+91 82889 83623',
          image: 'https://codegaragetech.com/logo/cgt_new_logo_alt.webp',
          address: {
            '@type': 'PostalAddress',
            streetAddress:
              'The Atrium at Quark City Lower Ground Floor, Zone-B, Plot No A45, Industrial Area, Phase 8B',
            addressLocality: 'SAS-Nagar, Mohali',
            addressRegion: 'Punjab',
            addressCountry: 'India',
            postalCode: '160059',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '52',
          },
        },
      }),
    }}
  />
)
const StrapiServicesSchema = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Service',
        serviceType: 'Strapi',
        url: 'https://codegaragetech.com/services/strapi',
        description:
          'At Code Garage Tech, we create customized Strapi (CMS) as per your business interface. Our skilled team of Strapi developers create the best softwares for you.',
        provider: {
          '@type': 'Organization',
          name: 'Code Garage Tech',
          description:
            'Looking for reliable Custom Web Development Services in India & USA? Code Garage Tech is here! We offer scalable, robust, and quality services. Contact us now!',
          email: 'hr@codegaragetech.com',
          url: 'https://codegaragetech.com',
          telephone: '+91 82889 83623',
          image: 'https://codegaragetech.com/logo/cgt_new_logo_alt.webp',
          address: {
            '@type': 'PostalAddress',
            streetAddress:
              'The Atrium at Quark City Lower Ground Floor, Zone-B, Plot No A45, Industrial Area, Phase 8B',
            addressLocality: 'SAS-Nagar, Mohali',
            addressRegion: 'Punjab',
            addressCountry: 'India',
            postalCode: '160059',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '52',
          },
        },
      }),
    }}
  />
)
const ChatwootServicesSchema = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Service',
        serviceType: 'ChatWoot',
        url: 'https://codegaragetech.com/services/chatwoot',
        description:
          'Code Garage Tech provides a platform that helps you to engage with your customer in smooth conversational experiences with the assistance of ChatWoot.',
        provider: {
          '@type': 'Organization',
          name: 'Code Garage Tech',
          description:
            'Looking for reliable Custom Web Development Services in India & USA? Code Garage Tech is here! We offer scalable, robust, and quality services. Contact us now!',
          email: 'hr@codegaragetech.com',
          url: 'https://codegaragetech.com',
          telephone: '+91 82889 83623',
          image: 'https://codegaragetech.com/logo/cgt_new_logo_alt.webp',
          address: {
            '@type': 'PostalAddress',
            streetAddress:
              'The Atrium at Quark City Lower Ground Floor, Zone-B, Plot No A45, Industrial Area, Phase 8B',
            addressLocality: 'SAS-Nagar, Mohali',
            addressRegion: 'Punjab',
            addressCountry: 'India',
            postalCode: '160059',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '52',
          },
        },
      }),
    }}
  />
)
const AboutServicesSchema = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'AboutPage',
        url: 'https://codegaragetech.com/about-us',
        headline: 'About Us',
        image: {
          '@type': 'ImageObject',
          url: 'https://www.codegaragetech.com/logo/cgt_new_logo_alt.webp',
          width: 150,
          height: '144',
        },
        publisher: {
          '@type': 'Organization',
          '@id': 'https://codegaragetech.com/#organization',
          name: 'Code Garage Tech',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.codegaragetech.com/logo/cgt_new_logo_alt.webp',
            width: 150,
            height: 144,
          },
        },
        description:
          'Looking for reliable Custom Web Development Services in India & USA? Code Garage Tech is here! We offer scalable, robust, and quality services. Contact us now!',
      }),
    }}
  />
)
const CareerServicesSchema = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'http://schema.org/',
        '@type': 'ContactPage',
        name: 'Contact - Code Garage Tech',
        url: 'https://codegaragetech.com/contact',
        description:
          'Please fill out the contact form to get in touch with us for your Web and App development needs. Our sales representative will get back to you soon.',
        publisher: {
          '@type': 'organization',
          name: 'Code Garage Tech',
          url: 'https://codegaragetech.com/',
          image: 'https://www.codegaragetech.com/logo/cgt_new_logo_alt.webp',
          contactPoint: [
            {
              '@type': 'ContactPoint',
              telephone: '+91 82889 83623',
              email: 'hr@codegaragetech.com',
            },
          ],
          address: [
            {
              '@type': 'PostalAddress',
              streetAddress:
                'The Atrium at Quark City Lower Ground Floor, Zone-B, Plot No A45, Industrial Area, Phase 8B',
              addressLocality: 'SAS-Nagar, Mohali',
              addressRegion: 'Punjab',
              addressCountry: 'India',
              postalCode: '160059',
            },
          ],
        },
      }),
    }}
  />
)

export {
  OrganizationSchema,
  WebsiteSchema,
  LocalBusinessSchema,
  WebServicesSchema,
  MobileServicesSchema,
  DevOpsServicesSchema,
  UIUXServicesSchema,
  EcommerceServicesSchema,
  CMSServicesSchema,
  CRMServicesSchema,
  DigitalMarketingServicesSchema,
  DeploymentHostManagementServicesSchema,
  StrapiServicesSchema,
  ChatwootServicesSchema,
  AboutServicesSchema,
  CareerServicesSchema,
}
