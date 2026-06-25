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

export const resources = [
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
