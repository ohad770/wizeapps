export const siteUrl = "https://www.wizeapps.agency";

export const navigation = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    slug: "reservation-and-booking-automation",
    title: "Reservation and booking automation",
    summary:
      "Replace phone calls, missed WhatsApp messages, and manual confirmations with a booking flow that confirms, reminds, and updates people automatically.",
    bestFor:
      "Restaurants, clinics, beauty studios, consultants, and service businesses that lose time around scheduling.",
    deliverables: [
      "Booking request intake",
      "Confirmation and reminder messages",
      "Cancellation and rescheduling logic",
      "Staff notifications and status tracking",
    ],
  },
  {
    slug: "client-intake-systems",
    title: "Client intake systems",
    summary:
      "Turn scattered forms, calls, emails, and chats into one clear intake process that gathers the right details before work starts.",
    bestFor:
      "Small teams that need better qualification, cleaner handoff, and fewer back-and-forth messages.",
    deliverables: [
      "Structured intake forms",
      "Lead qualification rules",
      "Internal review queues",
      "Follow-up emails and task creation",
    ],
  },
  {
    slug: "mvp-builds",
    title: "Focused MVP builds",
    summary:
      "Build the smallest useful version of a product idea so founders can test the real workflow with real users before overbuilding.",
    bestFor:
      "Founders and operators who need a working product, not months of planning documents.",
    deliverables: [
      "Core user flow map",
      "Clickable product plus working backend",
      "Authentication and basic admin views",
      "Deployment and launch checklist",
    ],
  },
  {
    slug: "internal-operations-tools",
    title: "Internal operations tools",
    summary:
      "Move repeated work out of spreadsheets and chats into simple tools that help teams track, update, and act on the same source of truth.",
    bestFor:
      "Teams that have a process that works in theory but breaks when volume rises or people get busy.",
    deliverables: [
      "Custom dashboard or tracker",
      "Role-based workflows",
      "Automated notifications",
      "Exportable reports and handoff notes",
    ],
  },
];

export const caseStudies = [
  {
    slug: "restaurant-reservations",
    title: "How a restaurant can stop losing reservations during peak hours",
    industry: "Hospitality",
    problem:
      "Reservation calls arrived when the team was already serving guests. Staff had to answer the phone, write down details, confirm manually, and still handle no-shows.",
    approach:
      "We map the actual flow from booking request to arrival, then build a confirmation path that records the reservation, sends a reminder, and gives staff a simple view of the evening.",
    outcome:
      "The team spends less time on the phone, guests receive clearer confirmations, and cancellations are easier to catch before the table is lost.",
  },
  {
    slug: "clinic-reminders",
    title: "How a clinic can recover hours from appointment confirmations",
    industry: "Healthcare operations",
    problem:
      "Confirmations were handled one message at a time. The clinic had no consistent reminder schedule, so staff spent hours chasing replies and reshuffling calendars.",
    approach:
      "We create a patient reminder workflow that confirms the appointment, follows up before the visit, and flags cancellations or unanswered messages for the team.",
    outcome:
      "The clinic keeps the human touch where it matters, while the repeated reminder work runs in the background.",
  },
  {
    slug: "marketplace-mvp",
    title: "How a founder can test a marketplace idea before building too much",
    industry: "Startup MVP",
    problem:
      "The founder had a service marketplace idea with too many possible features and no clear first version. Building everything would have delayed the first user test.",
    approach:
      "We reduce the product to the core loop: a provider profile, a request flow, a match step, and a basic admin view to manage early activity.",
    outcome:
      "The founder can test demand with real users and make product decisions from usage rather than guesses.",
  },
];

type ResourceComparison = {
  tool: string;
  bestFor: string;
  strengths: string;
  tradeoffs: string;
};

type ResourceBullet = {
  label: string;
  text: string;
};

type ResourceSection = {
  heading: string;
  paragraphs: string[];
  bullets?: ResourceBullet[];
  comparison?: ResourceComparison[];
};

type Resource = {
  slug: string;
  title: string;
  description: string;
  readTime: string;
  sections: ResourceSection[];
};

export const resources: Resource[] = [
  {
    slug: "booking-automation-checklist",
    title: "A practical checklist before automating bookings",
    description:
      "What to decide before replacing phone calls and manual appointment confirmations with a booking system.",
    readTime: "5 min read",
    sections: [
      {
        heading: "Start with the real decision points",
        paragraphs: [
          "Booking automation fails when it only copies the current mess into software. Before choosing tools, write down the moments where a person currently makes a decision: accepting a booking, asking for more details, moving a time, taking a deposit, or marking someone as a no-show.",
          "Those decision points become the logic of the system. Once they are clear, the build is smaller and the business keeps control of the exceptions.",
        ],
      },
      {
        heading: "Define what should happen without staff involvement",
        paragraphs: [
          "A good booking flow should handle the predictable steps automatically: confirmation, calendar entry, reminder, cancellation link, and a staff alert when something needs attention.",
          "The goal is not to remove people from the relationship. The goal is to stop using people for repetitive reminders when they could be helping customers.",
        ],
      },
      {
        heading: "Keep the first version narrow",
        paragraphs: [
          "The first version should usually cover one location, one service category, and one reminder pattern. After the team trusts the workflow, it is easier to add deposits, waitlists, recurring appointments, or reporting.",
        ],
      },
    ],
  },
  {
    slug: "what-to-build-first-in-an-mvp",
    title: "What to build first in an MVP",
    description:
      "A founder-friendly way to decide which product features should exist on day one and which should wait.",
    readTime: "6 min read",
    sections: [
      {
        heading: "Find the smallest proof loop",
        paragraphs: [
          "An MVP is not a cheaper version of the final product. It is the smallest working loop that proves a user can reach the outcome you promised.",
          "For a marketplace, that loop might be request, match, response. For a clinic tool, it might be book, remind, confirm. For an internal operations app, it might be submit, review, complete.",
        ],
      },
      {
        heading: "Avoid features that only make the product look complete",
        paragraphs: [
          "Dashboards, settings, roles, analytics, and polished admin tools can be useful, but they often arrive too early. If a feature does not help a user complete the core loop, it is usually a second version feature.",
          "The first release should be easy to explain, easy to test, and easy to change after real feedback.",
        ],
      },
      {
        heading: "Build for learning speed",
        paragraphs: [
          "The best first product creates evidence. It tells you whether people understand the offer, where they drop off, what staff need to manage manually, and which part of the promise users value most.",
        ],
      },
    ],
  },
  {
    slug: "manual-processes-that-should-not-stay-manual",
    title: "Manual processes that should not stay manual",
    description:
      "Signals that a spreadsheet, phone call, or chat-based workflow is ready to become a small system.",
    readTime: "4 min read",
    sections: [
      {
        heading: "The work repeats with only small variations",
        paragraphs: [
          "If your team handles the same type of request every day and only changes a few details, the process is a strong candidate for automation. Common examples include intake forms, follow-up reminders, internal approvals, and status updates.",
        ],
      },
      {
        heading: "Mistakes come from handoff, not judgment",
        paragraphs: [
          "Some work needs human judgment. But many operational mistakes happen because details move through too many hands: a name copied incorrectly, a call missed, a file sent late, or a status forgotten.",
          "A small system can preserve human judgment while removing fragile handoff steps.",
        ],
      },
      {
        heading: "People ask for the same update repeatedly",
        paragraphs: [
          "When clients, staff, or managers keep asking for status, the process needs visibility. A simple tracker or notification flow often saves more time than a large software project.",
        ],
      },
    ],
  },
  {
    slug: "how-to-prepare-for-a-software-build",
    title: "How to prepare for a software build without writing a spec",
    description:
      "The plain-language information that helps a build start quickly even when you are not technical.",
    readTime: "5 min read",
    sections: [
      {
        heading: "Describe the problem in normal words",
        paragraphs: [
          "You do not need to arrive with technical requirements. Start with what is currently painful: who is involved, what they do, what gets delayed, and what happens when something goes wrong.",
        ],
      },
      {
        heading: "Bring examples from real work",
        paragraphs: [
          "Screenshots, message templates, forms, spreadsheets, and sample emails are often more useful than a formal spec. They show the real workflow and expose details that are easy to miss in conversation.",
        ],
      },
      {
        heading: "Name the outcome, not just the feature",
        paragraphs: [
          "Instead of saying you need a dashboard, explain what decision the dashboard should help someone make. Instead of asking for reminders, explain which behavior should change after the reminder is sent.",
        ],
      },
    ],
  },
  {
    slug: "best-tools-for-building-websites",
    title: "Which tools should you use to build a website?",
    description:
      "A practical comparison of Next.js, Astro, WordPress, Webflow, Shopify, and simple site builders for business websites.",
    readTime: "10 min read",
    sections: [
      {
        heading: "Start with the job of the website",
        paragraphs: [
          "The best website tool is not the newest framework or the tool with the prettiest templates. It is the tool that matches the job the website must do every week. A service business usually needs trust, clear offers, fast pages, contact paths, and enough useful content to answer common questions. A software product may need authentication, dashboards, integrations, and a backend. An online store needs product management, checkout, shipping, taxes, and inventory flows.",
          "Before choosing a platform, define the main job: publish content, sell products, collect leads, book appointments, show a portfolio, or run a custom web app. That one decision narrows the field more than any trend report.",
        ],
        bullets: [
          {
            label: "Marketing website",
            text: "Choose for speed, editing, SEO structure, and clean landing pages.",
          },
          {
            label: "Content website",
            text: "Choose for publishing workflow, categories, search, and long-term maintenance.",
          },
          {
            label: "Web application",
            text: "Choose for custom logic, authentication, data models, APIs, and deployment control.",
          },
          {
            label: "Online store",
            text: "Choose for checkout, product catalog, payments, fulfillment, and store operations.",
          },
        ],
      },
      {
        heading: "The main website tools compared",
        paragraphs: [
          "A business can build a good website with several different tool families. The difference is not only design. The real difference is who controls the code, how easy it is to publish content, how much custom logic the site can support, and who will maintain it after launch.",
        ],
        comparison: [
          {
            tool: "Next.js",
            bestFor:
              "Custom business websites, SaaS marketing sites, dashboards, booking flows, portals, and full-stack web apps.",
            strengths:
              "Strong React ecosystem, flexible routing, server rendering, API routes, excellent deployment options, and room to grow from a simple site into a real product.",
            tradeoffs:
              "Requires engineering skill. Content editing usually needs a CMS or developer workflow unless an admin layer is built.",
          },
          {
            tool: "Astro",
            bestFor:
              "Fast content-heavy sites, blogs, documentation, portfolios, and marketing sites with limited app-like behavior.",
            strengths:
              "Great performance defaults, low client-side JavaScript, simple content structure, and good fit for pages where reading speed matters more than complex interaction.",
            tradeoffs:
              "Less natural for highly interactive dashboards or complex authenticated applications compared with a full React app framework.",
          },
          {
            tool: "WordPress",
            bestFor:
              "Blogs, content sites, local business sites, editorial publishing, and teams that need a familiar admin panel.",
            strengths:
              "Mature CMS, huge plugin ecosystem, many themes, easy publishing, and many editors already know it.",
            tradeoffs:
              "Plugins and themes can create maintenance, security, and performance issues if nobody owns updates carefully.",
          },
          {
            tool: "Webflow",
            bestFor:
              "Designed marketing sites, landing pages, portfolios, and teams where non-developers need visual control.",
            strengths:
              "Visual design workflow, hosted CMS, fast iteration for marketing teams, and less custom code for layout work.",
            tradeoffs:
              "Custom backend logic, complex workflows, and deep product behavior can become awkward or require external services.",
          },
          {
            tool: "Shopify",
            bestFor:
              "Ecommerce sites where checkout, catalog, discounts, payments, and fulfillment are central.",
            strengths:
              "Strong commerce operations out of the box, app ecosystem, payment flow, inventory tools, and store management.",
            tradeoffs:
              "Not the best fit for a non-commerce website or a highly custom SaaS product unless commerce is the main use case.",
          },
          {
            tool: "Wix or Squarespace",
            bestFor:
              "Simple brochure sites, personal brands, small portfolios, and fast launches with low technical ownership.",
            strengths:
              "Templates, hosting, basic SEO settings, and easy editing in one place.",
            tradeoffs:
              "Less flexible for custom workflows, unusual designs, advanced SEO structure, or long-term product expansion.",
          },
        ],
      },
      {
        heading: "How to choose for a real business",
        paragraphs: [
          "For a service business that wants leads and credibility, the safest choice is often a custom Next.js site or a visual platform like Webflow. Next.js is stronger when the site also needs booking logic, forms that connect to internal tools, CRM integrations, or future product features. Webflow is attractive when design control and marketing edits matter more than custom workflows.",
          "For a content-heavy site, WordPress and Astro solve different versions of the same problem. WordPress is good when editors need a dashboard and plugin ecosystem. Astro is good when the team prefers a developer-controlled content workflow and very fast static pages. For a store, Shopify should be considered first unless the commerce requirements are unusual.",
        ],
        bullets: [
          {
            label: "Choose Next.js when",
            text: "the website is also part of a product, lead workflow, booking system, dashboard, or automation project.",
          },
          {
            label: "Choose Astro when",
            text: "the site is mostly content and performance matters more than complex logged-in features.",
          },
          {
            label: "Choose WordPress when",
            text: "publishing content from an admin panel is the main day-to-day job.",
          },
          {
            label: "Choose Webflow when",
            text: "design iteration and marketing ownership are more important than custom backend logic.",
          },
          {
            label: "Choose Shopify when",
            text: "selling products is the core business process, not a side feature.",
          },
        ],
      },
      {
        heading: "Common mistakes when choosing a website stack",
        paragraphs: [
          "The first mistake is choosing a tool because a template looks close to the desired design. Templates are useful, but they do not answer questions about SEO structure, content workflow, integrations, performance, analytics, or maintenance.",
          "The second mistake is using a no-code builder for a custom business process that really needs logic. It can work at first, but as exceptions appear the site becomes a collection of workarounds. The opposite mistake is also common: using a custom framework for a simple website that only needs five pages and an editor.",
          "A good decision is boring in the best way. It should make the first version easy to launch and the next version possible without rebuilding from scratch.",
        ],
      },
      {
        heading: "Practical recommendation",
        paragraphs: [
          "If the goal is a professional service website with strong SEO foundations, useful content, and room for automation, a custom Next.js site is usually a strong choice. It allows the site to start as marketing content and grow into booking tools, client portals, lead qualification, or internal dashboards without changing platforms.",
          "If the site will mostly publish articles, guides, or documentation and does not need complex app behavior, Astro or WordPress can be simpler. If the business needs a visual marketing team workflow, Webflow is worth considering. If the business sells products online, Shopify should be the baseline comparison.",
        ],
      },
    ],
  },
  {
    slug: "best-tools-for-building-apps",
    title: "Which tools should you use to build an app?",
    description:
      "A practical comparison of Expo, React Native, Flutter, native iOS and Android, PWAs, and no-code app builders.",
    readTime: "11 min read",
    sections: [
      {
        heading: "The first question is what kind of app you need",
        paragraphs: [
          "Many teams say they need an app when they really need one of three things: a mobile-friendly web app, a native app in the app stores, or an internal tool that works well on phones. Each path has a different cost, timeline, maintenance model, and user experience.",
          "A customer app that relies on push notifications, camera access, offline use, payments, or app store discovery may justify a native or cross-platform app. A business workflow that mainly needs forms, dashboards, approvals, and notifications may be better as a responsive web app or PWA. The cheapest app is not always the best app, but the most native app is not always necessary either.",
        ],
        bullets: [
          {
            label: "Public consumer app",
            text: "Consider app store expectations, onboarding, notifications, performance, and platform polish.",
          },
          {
            label: "Business workflow app",
            text: "Consider admin tools, permissions, data accuracy, and whether staff can use it from the browser.",
          },
          {
            label: "MVP",
            text: "Optimize for learning speed and avoid paying for native complexity before the core flow is proven.",
          },
          {
            label: "Internal app",
            text: "A responsive web app or no-code tool may be enough if users are known and distribution is controlled.",
          },
        ],
      },
      {
        heading: "The main app development options compared",
        paragraphs: [
          "There is no universal winner. The strongest choice depends on whether the team values one shared codebase, native feel, fast iteration, custom platform features, or low-cost validation.",
        ],
        comparison: [
          {
            tool: "Expo with React Native",
            bestFor:
              "Cross-platform MVPs, business apps, customer apps, and teams that already know React or TypeScript.",
            strengths:
              "One JavaScript or TypeScript codebase for iOS, Android, and often web; strong tooling; easier setup; useful native modules; good path to app store builds.",
            tradeoffs:
              "Deep native customization can still require native knowledge, config plugins, or custom development builds.",
          },
          {
            tool: "React Native without Expo",
            bestFor:
              "Apps that need more direct control over native projects while still sharing much of the UI and business logic.",
            strengths:
              "Cross-platform development with closer access to iOS and Android native folders and more control over native dependencies.",
            tradeoffs:
              "More setup and maintenance work. Teams must manage more of the native project structure themselves.",
          },
          {
            tool: "Flutter",
            bestFor:
              "Polished cross-platform apps, custom UI, apps where consistent design across platforms matters, and teams comfortable with Dart.",
            strengths:
              "Single codebase, strong UI toolkit, predictable rendering, good performance profile, and broad platform support.",
            tradeoffs:
              "Uses Dart rather than JavaScript or Swift/Kotlin. Apps may need extra care to feel perfectly native on each platform.",
          },
          {
            tool: "SwiftUI for iOS",
            bestFor:
              "iPhone, iPad, Apple Watch, Mac, or Apple ecosystem apps where platform quality and Apple-specific features matter.",
            strengths:
              "Best access to Apple platform capabilities, strong native feel, excellent performance potential, and first-class Apple tooling.",
            tradeoffs:
              "iOS-focused. Android requires a separate app, team, and codebase unless the product is Apple-only.",
          },
          {
            tool: "Kotlin and Jetpack Compose for Android",
            bestFor:
              "Android-first products, device-specific Android work, and apps that need deep integration with Android platform APIs.",
            strengths:
              "First-class Android development path, native performance, strong platform access, and modern declarative UI.",
            tradeoffs:
              "Android-focused. iOS requires a separate build unless the team uses a shared multiplatform strategy.",
          },
          {
            tool: "Progressive Web App",
            bestFor:
              "App-like browser experiences, internal tools, booking systems, dashboards, and products that need fast distribution.",
            strengths:
              "No app store approval, one web deployment, works across devices, and can be cheaper to build and maintain.",
            tradeoffs:
              "Native feature support, push behavior, offline capability, and app store presence may be limited compared with native apps.",
          },
          {
            tool: "No-code or low-code app builders",
            bestFor:
              "Prototypes, internal workflows, simple directories, small operational apps, and quick validation.",
            strengths:
              "Fast setup, lower initial cost, built-in hosting, and easier changes for non-developers.",
            tradeoffs:
              "Custom logic, performance, data ownership, design control, and long-term flexibility can become limiting.",
          },
        ],
      },
      {
        heading: "When cross-platform is the right choice",
        paragraphs: [
          "Cross-platform tools are strongest when the app has mostly shared screens and shared logic across iOS and Android. Booking apps, marketplace MVPs, customer portals, habit trackers, event apps, and internal field tools often fit this pattern. A shared codebase can reduce launch time and make future product changes easier.",
          "Expo with React Native is often the practical default for small teams that already use React or TypeScript. Flutter is a strong alternative when the team wants a highly controlled UI and is comfortable adopting Dart. Both can produce serious production apps, but both still need thoughtful architecture, testing, and release management.",
        ],
        bullets: [
          {
            label: "Good cross-platform fit",
            text: "same core experience on iOS and Android, moderate native integrations, and a need to launch quickly.",
          },
          {
            label: "Weak cross-platform fit",
            text: "heavy platform-specific UI, uncommon hardware access, advanced background work, or OS-specific behavior.",
          },
        ],
      },
      {
        heading: "When native is worth the extra cost",
        paragraphs: [
          "Native iOS and native Android development make sense when platform quality is central to the product. Examples include health apps, camera-heavy apps, advanced media tools, device integrations, highly polished consumer apps, and products where users expect platform-specific behavior.",
          "The tradeoff is straightforward: native development gives more control and deeper platform alignment, but usually costs more because each platform needs its own implementation and specialized expertise. For some products that cost is justified. For many early products, it is wiser to validate the core workflow before committing to two native builds.",
        ],
      },
      {
        heading: "Practical recommendation",
        paragraphs: [
          "For most early-stage customer apps and business apps, start by testing whether a responsive web app or PWA can deliver the outcome. If the app needs app store distribution, push notifications, camera access, or a more native feel, Expo with React Native is often the fastest serious path for a small team. Flutter is also strong when the team wants a custom visual experience and accepts Dart.",
          "Choose native SwiftUI or native Android only when platform-specific quality is a product requirement, not just a preference. Choose no-code when the goal is validation or internal workflow speed, and be honest about when the prototype has outgrown the tool.",
        ],
      },
    ],
  },
];

export const publicPaths = [
  "/",
  "/about",
  "/services",
  "/case-studies",
  "/resources",
  ...resources.map((resource) => `/resources/${resource.slug}`),
  "/contact",
  "/privacy",
  "/terms",
  "/ads.txt",
];
