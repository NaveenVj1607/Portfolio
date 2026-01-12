// lib/data/portfolio_data.ts
// Refined, professional portfolio content (no “freelance / full-time ready” language)

export const portfolioData = {
  personal: {
    name: "Naveen Kumar",
    title: "Senior Flutter Developer | Mobile Tech Lead",
    location: "Chennai, India",
    email: "contact@naveen.dev",
    summary:
      "Senior Flutter Developer and Mobile Tech Lead with 6+ years of experience delivering high-quality mobile applications across Android and iOS. Currently leading the Custom Apps Team at Liven, designing and maintaining a unified Flutter architecture powering 20+ white-label hospitality applications. Strong focus on clean architecture, performance optimization, scalable modular systems, reliable integrations, and mentoring teams to ship production-grade software.",
    socials: {
      github: "https://github.com/NaveenVj1607",
      linkedin: "https://linkedin.com/in/naveenvj",
      twitter: "https://twitter.com/naveenvj",
    },
  },

  skills: {
    mobile: ["Flutter", "Dart", "Swift (iOS SDK)", "Android & iOS Store Publishing"],
    architecture: ["Clean Architecture", "BLoC", "Provider", "Riverpod", "MVVM"],
    backend: [
      "REST APIs",
      "GraphQL",
      "Firebase",
      "Bluetooth (BLE) Integrations",
      "Maps SDK",
      "Payment Gateway SDKs",
    ],
    tools: [
      "Git",
      "CI/CD Pipelines",
      "Play Console",
      "App Store Connect",
      "Xcode",
      "Android Studio",
      "Figma",
    ],
  },

  experience: [
    {
      company: "Liven",
      role: "Senior Flutter Developer | Lead – Custom Apps Team",
      period: "Jul 2024 – Present",
      description:
        "Leading the Custom Apps Team delivering hospitality and restaurant ordering applications at scale using a shared architecture and brand-level customization.",
      achievements: [
        "Architected a unified Flutter codebase supporting 20+ white-label applications with scalable customization",
        "Led technical design decisions, sprint planning, task allocation, and code reviews to ensure consistent delivery quality",
        "Improved performance and stability through architectural refactoring, profiling, and targeted optimizations",
        "Mentored engineers on clean architecture, state management patterns, and maintainable mobile engineering practices",
        "Reduced time-to-market for new brand launches by enabling reusable, modular features across apps",
      ],
    },
    {
      company: "Impacteers",
      role: "Senior Flutter Developer",
      period: "Aug 2023 – Jun 2024",
      description:
        "Developed scalable Flutter applications and reusable modules for multi-brand platforms, with a focus on maintainability and production stability.",
      achievements: [
        "Built and maintained reusable Flutter modules to accelerate feature delivery across products",
        "Improved codebase maintainability through refactoring and consistent architectural patterns",
        "Resolved production issues and strengthened stability through structured debugging and performance tuning",
      ],
    },
    {
      company: "Netrin Sports Technologies",
      role: "Senior Flutter Developer",
      period: "Oct 2021 – Aug 2023",
      description:
        "Lead mobile developer responsible for Flutter applications including Bluetooth hardware integration and end-to-end store publishing.",
      achievements: [
        "Led end-to-end Flutter development for production releases across Android and iOS",
        "Implemented robust Bluetooth Low Energy (BLE) integrations with custom hardware devices",
        "Managed App Store and Play Store publishing, releases, and version compliance workflows",
      ],
    },
    {
      company: "Tyche Payment Solutions",
      role: "iOS Developer",
      period: "Aug 2020 – Oct 2021",
      description:
        "Developed iOS and Flutter applications in fintech, including SDK development and integrations with third-party services.",
      achievements: [
        "Built iOS and Flutter applications supporting payments and financial workflows",
        "Developed payment gateway SDKs designed for reuse across multiple client applications",
        "Integrated GraphQL APIs, Maps SDK, and document verification services with secure, stable flows",
      ],
    },
    {
      company: "Bypro Technology",
      role: "iOS Developer",
      period: "Oct 2019 – Jul 2020",
      description:
        "Developed Swift-based iOS applications with REST integrations and App Store release support.",
      achievements: [
        "Delivered Swift-based features and modules aligned with iOS best practices",
        "Implemented REST API integrations and improved data handling reliability",
        "Supported App Store publishing and release readiness activities",
      ],
    },
    {
      company: "Xcel Solutions Corp",
      role: "iOS Developer",
      period: "Feb 2019 – Sep 2019",
      description:
        "Contributed Swift modules and API-driven features to iOS applications.",
      achievements: [
        "Developed Swift modules and integrated API-based features",
        "Collaborated with teams to ship incremental improvements and bug fixes",
      ],
    },
  ],

  projects: [
    {
      title: "The Grounds AU – Online Ordering (Android)",
      slug: "the-grounds-au-android",
      platform: "Android",
      role: "Senior Flutter Developer | Technical Lead",
      techStack: ["Flutter", "Dart", "Clean Architecture", "BLoC"],
      description:
        "High-traffic online ordering application for a hospitality brand, focused on fast discovery, ordering, and checkout.",
      problem:
        "Required a stable, scalable ordering experience that performs reliably during peak service hours.",
      solution:
        "Implemented a robust ordering flow with predictable state management, optimized rendering, and efficient data refresh patterns for menu and cart.",
      impact:
        "Improved ordering reliability and reduced friction in key purchase steps, resulting in a smoother customer experience during high demand.",
      link: "https://play.google.com/store/apps/details?id=com.abacus.newonlineorderingGrounds&hl=en_IN",
      image: "",
    },
    {
      title: "Happy Points (Android)",
      slug: "happy-points",
      platform: "Android",
      role: "Senior Flutter Developer",
      techStack: ["Flutter", "Dart", "Firebase", "REST APIs"],
      description:
        "Loyalty and rewards application enabling customers to earn and redeem benefits through a streamlined mobile experience.",
      problem:
        "Needed a clear, reliable rewards journey and accurate tracking aligned with business rules and customer expectations.",
      solution:
        "Built reward flows with consistent state management, clear UX patterns, and resilient API handling for balances and redemptions.",
      impact:
        "Enhanced rewards visibility and usability, supporting stronger customer engagement and repeat usage.",
      link: "https://play.google.com/store/apps/details?id=com.happypointsg&hl=en_IN",
      image: "",
    },
    {
      title: "Dumpling Chef (Android)",
      slug: "dumpling-chef",
      platform: "Android",
      role: "Senior Flutter Developer",
      techStack: ["Flutter", "Dart", "REST APIs"],
      description:
        "Restaurant ordering application tailored for a branded customer experience and efficient menu browsing.",
      problem:
        "Required a fast, brand-consistent ordering experience with intuitive navigation and reliable checkout.",
      solution:
        "Delivered a clean ordering flow with optimized UI performance and resilient network handling for real-world connectivity.",
      impact:
        "Supported consistent customer experience and operational readiness across venue usage.",
      link: "https://play.google.com/store/apps/details?id=co.abacus.dumplingchef",
      image: "",
    },
    {
      title: "KDS Lite (Android)",
      slug: "kds-lite",
      platform: "Android",
      role: "Senior Flutter Developer",
      techStack: ["Flutter", "Dart", "Real-time Sync"],
      description:
        "Lightweight Kitchen Display System designed for smaller venues and tablet-based kitchen workflows.",
      problem:
        "Needed a reliable, low-footprint KDS experience with real-time updates and clear kitchen visibility.",
      solution:
        "Optimized for tablet UX with real-time sync patterns, clear status transitions, and performance-focused rendering.",
      impact:
        "Improved kitchen visibility and order accuracy while reducing reliance on paper workflows.",
      link: "https://play.google.com/store/apps/details?id=co.abacus.kdslite",
      image: "",
    },
    {
      title: "Pocket BI (Android)",
      slug: "pocket-bi-android",
      platform: "Android",
      role: "Senior Flutter Developer",
      techStack: ["Flutter", "Dart", "REST APIs", "Data Visualization"],
      description:
        "Mobile business intelligence dashboard enabling operators to track KPIs, sales insights, and performance trends on the go.",
      problem:
        "Business owners needed quick, mobile-first visibility into key metrics without relying on desktop dashboards.",
      solution:
        "Built a KPI-driven dashboard with clear data presentation, efficient refresh, and responsive layouts for different devices.",
      impact:
        "Enabled faster, data-informed decisions and improved day-to-day operational visibility.",
      link: "https://play.google.com/store/apps/details?id=com.abacus.pocketbi",
      image: "",
    },
    {
      title: "Pocket BI (iOS)",
      slug: "pocket-bi-ios",
      platform: "iOS",
      role: "Senior Flutter Developer",
      techStack: ["Flutter", "Dart", "iOS", "Data Visualization"],
      description:
        "iOS version of the BI dashboard optimized for iPhone UX patterns and smooth data interaction.",
      problem:
        "Needed a polished iOS experience with consistent performance and native-feeling interactions.",
      solution:
        "Refined layouts and interactions for iOS, ensured stable data rendering, and improved perceived performance with smart loading patterns.",
      impact:
        "Expanded accessibility of analytics for iOS users with a consistent, high-quality experience.",
      link: "https://apps.apple.com/us/app/pocket-bi/id1577868891",
      image: "",
    },
    {
      title: "KDS Go (iOS)",
      slug: "kds-go",
      platform: "iOS",
      role: "Senior Flutter Developer",
      techStack: ["Flutter", "Dart", "iOS", "Performance Optimization"],
      description:
        "Kitchen Display System designed for fast-paced kitchen environments with clear order routing and status management.",
      problem:
        "Complex kitchen workflows required reliable rendering, low latency updates, and strong usability on iOS devices.",
      solution:
        "Built high-performance order surfaces with efficient state updates, predictable transitions, and robust edge-case handling.",
      impact:
        "Streamlined kitchen operations and improved throughput by keeping order handling clear and responsive.",
      link: "https://apps.apple.com/us/app/kds-go/id6448897151",
      image: "",
    },
    {
      title: "The Grounds AU (iOS)",
      slug: "the-grounds-au-ios",
      platform: "iOS",
      role: "Senior Flutter Developer",
      techStack: ["Flutter", "Dart", "iOS", "Clean Architecture"],
      description:
        "iOS ordering experience aligned with platform UX conventions while maintaining cross-platform consistency.",
      problem:
        "Needed consistent functionality across platforms without compromising iOS UX quality and performance expectations.",
      solution:
        "Ensured iOS-specific UI refinements and stability improvements while maintaining shared architecture and reusable components.",
      impact:
        "Delivered a smooth iOS experience and improved consistency across mobile platforms.",
      link: "https://apps.apple.com/us/app/the-grounds-au/id1440944345",
      image: "",
    },
    {
      title: "Enhance (Android)",
      slug: "enhance-netrin",
      platform: "Android",
      role: "Senior Flutter Developer",
      techStack: ["Flutter", "Dart", "Bluetooth (BLE)", "Device Integrations"],
      description:
        "Sports performance tracking application integrating mobile workflows with wearable or custom hardware sensors.",
      problem:
        "Required reliable BLE connectivity and stable real-time data transfer for accurate performance tracking.",
      solution:
        "Implemented robust BLE connection lifecycle handling, data ingestion, and resilient reconnection strategies for real-world usage.",
      impact:
        "Enabled accurate, real-time performance metric tracking with improved stability across device conditions.",
      link: "https://play.google.com/store/apps/details?id=tech.netrin.enhance",
      image: "",
    },
    {
      title: "Impacteers (Android)",
      slug: "impacteers",
      platform: "Android",
      role: "Senior Flutter Developer",
      techStack: ["Flutter", "Dart", "REST APIs"],
      description:
        "Social impact platform connecting users with initiatives and opportunities for engagement.",
      problem:
        "Needed a scalable mobile platform with clean navigation, consistent content delivery, and strong usability.",
      solution:
        "Implemented key user journeys, improved stability, and contributed reusable patterns across the codebase.",
      impact:
        "Improved overall experience and reliability, supporting higher engagement and repeat usage.",
      link: "https://play.google.com/store/apps/details?id=club.impacteers.impacteers&hl=en_IN",
      image: "",
    },

    // Additional projects you included (kept, refined tone).
    // Note: Keep these only if you have public proof or are comfortable showing them on your portfolio.
    {
      title: "BasisPay Merchant (Android)",
      slug: "basispay-merchant",
      platform: "Android",
      role: "Senior Flutter Developer",
      techStack: ["Flutter", "Dart", "Secure Storage", "REST APIs"],
      description:
        "Merchant application enabling QR payment operations, settlements, and transaction management.",
      problem:
        "Merchants needed a reliable mobile tool to manage payments and operational workflows securely.",
      solution:
        "Built streamlined merchant dashboards with secure session handling, clear transaction views, and robust API integration patterns.",
      impact:
        "Improved day-to-day payment operations through better visibility and smoother merchant workflows.",
      link: "https://play.google.com/store/apps/details?id=com.basispayqr.merchants&hl=en_IN",
      image: "",
    },
    {
      title: "CricDost (Android)",
      slug: "cricdost",
      platform: "Android",
      role: "Mobile Developer",
      techStack: ["Flutter", "Dart", "Realtime Updates", "REST APIs"],
      description:
        "Cricket scoring and community platform supporting matches, tournaments, and social engagement.",
      problem:
        "Needed a dependable scoring experience with clear match flows and community-centric features.",
      solution:
        "Implemented structured match flows, responsive UI patterns, and stable data updates for scoring scenarios.",
      impact:
        "Enabled faster, more consistent scoring and improved usability for community users.",
      link: "https://play.google.com/store/apps/details?id=com.xcelcorp.cricdost&hl=en_IN",
      image: "",
    },
    {
      title: "Cinch (Android)",
      slug: "cinch",
      platform: "Android",
      role: "Mobile Developer",
      techStack: ["Flutter", "Dart", "Maps SDK", "REST APIs"],
      description:
        "On-demand fuel delivery and vehicle services application designed for quick service discovery and booking.",
      problem:
        "Needed a location-aware booking flow with reliable real-time updates and smooth user experience.",
      solution:
        "Delivered map-based flows, improved UI responsiveness, and ensured stable API integration for booking and tracking.",
      impact:
        "Improved convenience for users through smoother service booking and more reliable app performance.",
      link: "https://play.google.com/store/apps/details?id=com.cinchfuel&hl=en_IN",
      image: "",
    },
    {
      title: "Cinch Partners (Android)",
      slug: "cinch-partners",
      platform: "Android",
      role: "Mobile Developer",
      techStack: ["Flutter", "Dart", "Maps SDK", "REST APIs"],
      description:
        "Partner-facing application for service providers to manage requests, routes, and operational workflows.",
      problem:
        "Partners required a reliable dispatch and task management tool for efficient deliveries and service operations.",
      solution:
        "Implemented workflow screens for request handling, navigation support, and robust state handling for operational tasks.",
      impact:
        "Improved partner efficiency and reduced operational friction through clearer task management.",
      link: "https://play.google.com/store/apps/details?id=com.cinchfuel.partners&hl=en_IN",
      image: "",
    },
  ],
} as const;
