export const navigation: NavGroup[] = [
  {
    label: "Overview",
    items: [
      {
        title: "Introduction",
        href: "/docs/introduction",
        description: "High-level overview of the Ledger API and its purpose.",
      },
      {
        title: "Architecture",
        href: "/docs/architecture",
        description: "Layered design, service boundaries, and data flow.",
      },
      {
        title: "Financial Integrity",
        href: "/docs/integrity",
        description: "Currency handling, immutability, and transactional safety.",
      },
    ],
  },
  {
    label: "Core Concepts",
    items: [
      {
        title: "Accounts",
        href: "/docs/accounts",
        description: "Account model and balance derivation logic.",
      },
      {
        title: "Transactions",
        href: "/docs/transactions",
        description: "Posting entries, validation, and atomic operations.",
      },
    ],
  },
  {
    label: "API Reference",
    items: [
      {
        title: "Authentication",
        href: "/docs/authentication",
        description: "JWT handling and request protection.",
      },
      {
        title: "Endpoints",
        href: "/docs/endpoints",
        description: "Available routes and example requests.",
      },
    ],
  },
];
