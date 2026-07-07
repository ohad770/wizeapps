export const siteUrl = "https://www.wizeapps.agency";

export const author = {
  name: "Ohad Mayrom",
  role: "Founder, WizeApps",
  bio: "Ohad Mayrom is the founder of WizeApps, where he designs and builds booking systems, client intake flows, internal operations tools, and MVPs for small businesses and early-stage founders. He writes plain-language guides to help non-technical owners commission software with confidence.",
  url: `${siteUrl}/about`,
  linkedin: "https://www.linkedin.com/in/ohad-mayrom-124125/",
};

export const navigation = [
  { href: "/resources", label: "Resources" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/about", label: "About" },
  { href: "/he", label: "עברית" },
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

export const realProjects = [
  {
    slug: "mincha-alarm",
    title: "Mincha Alarm",
    url: "https://mincha-alarm.com/",
    detailHref: "/case-studies/mincha-alarm",
    screenshot: "/case-studies/mincha-alarm.webp",
    industry: "Consumer web app",
    timeline: "Built in about 1 month",
    problem:
      "Mincha (the afternoon prayer) has a window that shifts every day with sunset, and it is different in every city. Without checking a calendar daily, people miss the window without realizing it.",
    approach:
      "We built a location-aware web app that calculates the correct mincha window for wherever the user is and sends an automatic reminder before it closes, with no manual setup per day.",
    outcome:
      "The tool is live and handles the calculation and reminder automatically, so users do not have to look up times themselves. A focused scope like this — one calculation, one reminder, no accounts — is what kept it to about a month.",
    builtWith: ["Vite", "React", "Base44", "GPS-based zmanim", "Push reminder UX"],
    teardown: {
      intro: [
        "Mincha Alarm was intentionally smaller than a typical religious calendar app. The first version did not try to become a full siddur, calendar, community platform, or settings-heavy utility. It focused on one daily outcome: help a person know when mincha is relevant in their current location and remind them before they miss it.",
        "That narrow scope made the product useful quickly, but it also exposed the real technical challenge: the app had to explain a time-sensitive calculation clearly enough that non-technical users would trust it.",
      ],
      decisions: [
        {
          label: "Location first, account later",
          text: "The key input is the user's location, not a user profile. The experience asks for location permission because the zman changes by city and travel matters more than account history.",
        },
        {
          label: "Zmanim explained in plain language",
          text: "The public page explains that times are based on GPS, sunrise, sunset, and solar noon rather than hiding the logic behind a vague 'smart reminder' claim.",
        },
        {
          label: "Multilingual from the landing page",
          text: "The app includes Hebrew, English, French, Russian, Spanish, and Yiddish copy paths, with direction changes for RTL languages.",
        },
        {
          label: "Auto language detection",
          text: "A Base44 function detects language and stores lightweight page-visit context, so the landing page can start closer to the visitor's language without asking them first.",
        },
      ],
      whatShipped: [
        "A public landing page with multilingual messaging.",
        "A phone-style notification preview showing the two important reminder moments.",
        "FAQ content around calculation method, offline behavior after setup, and halachic method support.",
        "Admin views for FAQ and contact-message handling.",
      ],
      trickyParts: [
        "The product has to earn trust before the user installs anything. That made the explanation of GPS-based zmanim part of the product, not just marketing copy.",
        "RTL and LTR languages needed to share the same page without text alignment, ordering, and font choices making one language feel like an afterthought.",
        "The landing page had to communicate a technical calculation without overwhelming a user who only wants a reliable reminder.",
      ],
      nextTime: [
        "Add a small public demo that lets a visitor choose a city and preview today's mincha window before installing.",
        "Separate the calculation explanation into a dedicated article for people searching around zmanim, GPS, and travel questions.",
        "Track which FAQ questions get clicked most often so the product copy can answer real hesitation, not guessed hesitation.",
      ],
    },
  },
  {
    slug: "domino-ranana",
    title: "Domino's Pizza Ra'anana — online ordering",
    url: "https://domino-rn.co.il/",
    detailHref: "/case-studies/domino-ranana",
    screenshot: "/case-studies/domino-ranana.webp",
    industry: "Food and delivery",
    timeline: "Built in about 2 months",
    testimonial: {
      quote:
        "We've been running on this site for more than five years, and the order volume through it is strong. The biggest change was about two years ago, when we connected the site directly to the register — orders come straight in, no retyping. It's very convenient.",
      author: "Eran Atra",
      role: "Owner, Pizza Domino Ra'anana",
    },
    problem:
      "A local Domino's branch needed a fast, direct ordering experience — full menu, current deals, and delivery — without relying only on phone orders or a generic third-party app.",
    approach:
      "We built a branded ordering site: browsable menu, active promotions, and a delivery checkout flow, deployed as the branch's own web presence.",
    outcome:
      "The branch has a live ordering channel it fully owns, separate from marketplace apps and their fees and constraints. The menu, promotions, and checkout flow took about 2 months end to end.",
    builtWith: ["Vite", "React", "Base44", "Cardcom", "Aviv POS", "Admin order tools"],
    teardown: {
      intro: [
        "The Domino Ra'anana build looks like a menu site from the outside, but the real work is operational. A pizza order touches product availability, deals, toppings, delivery zones, payment status, customer messages, admin visibility, and the point-of-sale flow.",
        "The important product decision was to treat checkout as the center of the system, not as the final screen after the design was finished.",
      ],
      decisions: [
        {
          label: "Menu, deals, and products share one cart",
          text: "The menu combines active products and active deals, with deals shown first. Both paths write structured cart items so checkout can calculate totals consistently.",
        },
        {
          label: "Local cart state keeps ordering fast",
          text: "Cart, delivery method, selected delivery zone, payment method, and checkout form fields are persisted in localStorage to reduce accidental loss during the order flow.",
        },
        {
          label: "Admin operations are part of the build",
          text: "The project includes management screens for products, deals, categories, pizza sizes, beverages, sauces, delivery zones, site settings, and orders.",
        },
        {
          label: "Payment and POS are treated separately",
          text: "Credit-card orders create a pending order and Cardcom payment URL first; successful payment updates the order and then runs post-order handling, including email and Aviv POS delivery.",
        },
      ],
      whatShipped: [
        "Public menu with search, category filtering, products, deals, and configurable add-ons.",
        "Cart and checkout flow for delivery or pickup.",
        "Cardcom payment iframe path for card payments and a cash-order path.",
        "Customer and admin email templates with full order details.",
        "Aviv POS order handoff and test pages for payment/POS validation.",
      ],
      trickyParts: [
        "Deals are not just discounted products. A deal can contain multiple products and its own selectable options, so the cart had to preserve deal structure instead of flattening everything too early.",
        "Payment success is asynchronous. The site must handle an order that exists before payment is completed, then update status, send messages, clear the cart, and send to POS only after success.",
        "Delivery zones have operational rules — delivery cost and minimum order amount — that affect checkout eligibility, not just display.",
      ],
      nextTime: [
        "Move more checkout validation into shared pure functions so pricing, minimums, and delivery rules can be tested without rendering the full checkout page.",
        "Add an internal event timeline per order, so staff can see payment, email, and POS handoff status in one place.",
        "Add a lightweight abandoned-cart follow-up only if the branch sees enough dropped orders to justify it.",
      ],
    },
  },
  {
    slug: "djob-agency",
    title: "Djob — recruitment platform",
    url: "https://djob.agency/",
    detailHref: "/case-studies/djob-agency",
    screenshot: "/case-studies/djob-agency.webp",
    industry: "Recruitment",
    timeline: "Built in about 6 months",
    relatedResource: {
      href: "/resources/ai-matching-without-ml-team",
      label: "Technical deep-dive",
      title: "How the matching layer actually works",
      text: "Structured statements, embeddings, score gates, and snapshot tables — the full architecture behind the matching you see in this build.",
    },
    problem:
      "Matching candidates to open roles usually means juggling job boards, spreadsheets, and email threads with no single place to track who applied to what.",
    approach:
      "We built an end-to-end recruitment platform: candidates browse and apply to open positions, and the process is tracked in one system instead of scattered inboxes.",
    outcome:
      "The platform is live at djob.agency, giving candidates a real place to find open roles and apply directly. Covering both the candidate and employer sides of the workflow took about 6 months, reflecting the wider scope of a two-sided platform.",
    builtWith: [
      "Vite",
      "React",
      "Base44",
      "Postgres",
      "OpenAI embeddings",
      "Snapshot matching",
    ],
    teardown: {
      intro: [
        "Djob is the kind of project where the public website is only the visible edge. The harder product is the admin and matching layer behind it: jobs, candidates, applications, CV-derived statements, embeddings, score gates, snapshot tables, and workflows for contacting matched people.",
        "That is why the timeline was closer to six months. A two-sided platform is not one user flow; it is two user flows plus the operating system that connects them.",
      ],
      decisions: [
        {
          label: "Quick apply and full candidate records coexist",
          text: "The public job card supports quick apply without a CV, while the modal still tries to find or create a candidate record so the admin side does not lose the applicant in a disconnected application table.",
        },
        {
          label: "Embeddings are built from structured statements",
          text: "Jobs and candidates are synced into statement-part tables and embedding tables, rather than embedding one large unstructured blob per record.",
        },
        {
          label: "Matching uses gates, not only one score",
          text: "The matching service computes title score, required score, optional score, time gates, pass/fail reasons, and final totals so the UI can explain why a match passed or failed.",
        },
        {
          label: "Snapshot tables keep the UI usable",
          text: "Candidate and job match views read from snapshot tables for ranked results instead of recalculating every match live every time a recruiter opens a page.",
        },
      ],
      whatShipped: [
        "Public job board with job cards, categories, regions, dates, external links, and quick apply.",
        "Candidate creation, job creation, and admin editing flows.",
        "Candidate-to-job and job-to-candidate matching views.",
        "OpenAI embedding service using text-embedding-3-small.",
        "Daily rebuild scripts and snapshot tables for match results.",
        "Controls for email/WhatsApp follow-up tracking on matched roles.",
      ],
      trickyParts: [
        "A single match score is not enough in recruiting. A candidate can be semantically close to a role but fail a hard requirement or time requirement, so the system needed visible gates and reasons.",
        "The first matching implementation had to evolve into a snapshot model because recruiter screens need fast, repeatable rankings.",
        "Job and candidate data comes from different shapes and levels of completeness, so the sync layer has to validate, normalize, and rebuild safely.",
      ],
      nextTime: [
        "Expose a plain-English explanation of match reasons on more screens so recruiters can trust the ranking without opening debug views.",
        "Move more of the threshold configuration into admin settings once enough real usage shows which defaults are too strict or too loose.",
        "Add analytics around which matches are emailed, WhatsApped, ignored, or converted so the matching model can be tuned from outcomes, not just scores.",
      ],
    },
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
      "The team spends less time on the phone, guests receive clearer confirmations, and cancellations are easier to catch before the table is lost. In a scenario like this, no-show rates typically drop from the 12-15% range down toward 5-6% once a reminder and one-tap cancel link are in place.",
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
      "The clinic keeps the human touch where it matters, while the repeated reminder work runs in the background. In a clinic of this size, that pattern usually frees up somewhere around 2-3 hours of staff time per day that used to go into manual confirmations.",
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
      "The founder can test demand with real users and make product decisions from usage rather than guesses. A loop this narrow usually ships in 3-4 weeks instead of the 4-6 months a fuller feature list would have taken.",
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
  diagramId?: string;
  interactiveToolId?: string;
  relatedCaseStudy?: {
    href: string;
    label: string;
    title: string;
    text: string;
  };
};

type ResourceFaq = {
  question: string;
  answer: string;
};

type Resource = {
  slug: string;
  title: string;
  description: string;
  readTime: string;
  datePublished: string;
  dateModified: string;
  sections: ResourceSection[];
  faq?: ResourceFaq[];
};

export const resources: Resource[] = [
  {
    slug: "booking-automation-checklist",
    datePublished: "2026-06-25",
    dateModified: "2026-07-06",
    title: "A practical checklist before automating bookings",
    description:
      "What to decide before replacing phone calls and manual appointment confirmations with a booking system — and how to keep the first version small enough to actually launch.",
    readTime: "8 min read",
    sections: [
      {
        heading: "Why most booking automation projects disappoint",
        paragraphs: [
          "Most booking tools fail for the same reason: they automate the booking form but ignore everything that happens around it. The form is the easy part. The hard part is the messy human layer — the customer who replies \"can we do an hour later?\", the staff member who already promised that slot in person, the deposit that needs refunding, the regular who always books by phone and refuses to use a link.",
          "When a system copies the current mess into software without rethinking it, you end up paying for a tool that staff quietly route around. The phone keeps ringing, the spreadsheet stays open in another tab, and nobody trusts the calendar. The checklist below is designed to surface those edge cases before you build, so the system handles real life and not just the happy path.",
        ],
      },
      {
        heading: "Map the real decision points first",
        paragraphs: [
          "Before choosing any tool, write down every moment where a person currently makes a judgment call. These decision points are the actual logic of your business, and they are usually invisible until you list them. A booking is not one action — it is a chain of small decisions, and each one is a place where automation either helps or gets in the way.",
          "Once these are written down, most teams discover that 80% of bookings follow the same simple path and only 20% need a human. That ratio is the whole opportunity: automate the 80%, route the 20% to a person with full context.",
        ],
        bullets: [
          {
            label: "Accepting a request",
            text: "Is every request auto-accepted, or do some need approval (new customers, large groups, specific services)?",
          },
          {
            label: "Asking for more detail",
            text: "What information must you collect before a booking is useful — party size, reason for visit, address, vehicle, file upload?",
          },
          {
            label: "Moving or cancelling",
            text: "Who is allowed to reschedule, how late, and what happens to a deposit when they do?",
          },
          {
            label: "Handling no-shows",
            text: "How is a no-show recorded, and does it change anything for that customer next time?",
          },
        ],
      },
      {
        heading: "Decide what runs without any staff involvement",
        diagramId: "booking-flow",
        paragraphs: [
          "A good booking flow should handle the predictable steps on its own: confirming the slot, writing it to the calendar, sending a reminder before the appointment, offering a self-service cancellation or reschedule link, and alerting a staff member only when something genuinely needs a human.",
          "The goal is not to remove people from the relationship. It is to stop spending people on repetitive reminders when they could be helping customers in front of them. A useful test: for each step, ask \"if this happened at 2am with nobody watching, would the right thing still happen?\" If yes, automate it. If no, that step is a decision point that belongs to a person.",
        ],
      },
      {
        heading: "Plan the reminder rhythm carefully",
        paragraphs: [
          "Reminders are where booking automation earns its keep — and where it most often annoys people. Too few reminders and no-shows stay high. Too many and customers feel spammed and start ignoring all of them. The right rhythm depends on how far in advance people book and how costly a no-show is.",
          "As a starting point, an immediate confirmation plus one reminder 24 hours before the appointment covers most service businesses. Add a second, shorter reminder a few hours before only if no-shows remain a real problem. Always give people a one-tap way to cancel inside the reminder — a cancelled slot you can refill is far better than a silent no-show.",
        ],
      },
      {
        heading: "Keep the first version deliberately narrow",
        paragraphs: [
          "The fastest way to never launch is to try to support every service, location, and special case at once. The first version should usually cover one location, one category of service, and one reminder pattern. Run it for a few weeks, watch where staff still step in, and let that evidence decide what to build next.",
          "Once the team trusts the core workflow, expansion is easy and low-risk: deposits and payments, waitlists for popular times, recurring appointments, multi-staff scheduling, and reporting on no-show rates. Adding these later — once you know they matter — is far cheaper than guessing up front and maintaining features nobody uses.",
        ],
      },
      {
        heading: "A quick pre-build checklist",
        paragraphs: [
          "If you can answer the questions below in plain language, you are ready to brief a developer or evaluate a booking tool. If you cannot, the gaps you find are exactly the conversations worth having before any money is spent.",
        ],
        bullets: [
          {
            label: "Who and what",
            text: "Which services and which staff or locations does version one cover?",
          },
          {
            label: "The happy path",
            text: "What is the exact sequence from request to confirmed appointment with no human involved?",
          },
          {
            label: "The exceptions",
            text: "Which situations must be handed to a person, and how do they get notified with full context?",
          },
          {
            label: "The money",
            text: "Are deposits or payments involved, and what are the refund and cancellation rules?",
          },
          {
            label: "Success",
            text: "What number should improve — no-show rate, phone time, double-bookings — so you can tell if it worked?",
          },
        ],
      },
    ],
    faq: [
      {
        question: "Do I have to stop taking bookings by phone?",
        answer:
          "No. The phone can stay as a channel — the important change is that phone bookings get recorded into the same system as online ones, so reminders, cancellations, and the staff view all work from one source of truth instead of a notebook next to the till.",
      },
      {
        question: "How much can reminders realistically reduce no-shows?",
        answer:
          "It varies by industry and how far ahead people book, which is why the checklist asks you to measure your current no-show rate first. A confirmation plus a 24-hour reminder with a one-tap cancel link is the pattern that moves the number for most service businesses — but the honest answer comes from comparing your own before and after.",
      },
      {
        question: "Should the first version take deposits?",
        answer:
          "Only if no-shows are genuinely expensive for you. Deposits reduce no-shows but add friction, refund rules, and payment edge cases to version one. Many businesses launch reminders first, measure for a month, and add deposits only for the slots or services where no-shows still hurt.",
      },
    ],
  },
  {
    slug: "what-to-build-first-in-an-mvp",
    datePublished: "2026-06-25",
    dateModified: "2026-07-06",
    title: "What to build first in an MVP",
    description:
      "A founder-friendly way to decide which product features should exist on day one, which should wait, and how to tell the difference before you spend a budget.",
    readTime: "9 min read",
    sections: [
      {
        heading: "An MVP is a question, not a small product",
        paragraphs: [
          "The phrase \"minimum viable product\" has been stretched so far that it now means almost nothing. To some founders it means a cheap version of the full idea. To others it means an unfinished, embarrassing prototype. Both readings lead to wasted money, because both treat the MVP as a smaller version of the destination instead of the fastest way to learn whether the destination is worth reaching.",
          "A more useful definition: an MVP is the smallest thing you can build that answers your riskiest question with real behavior. Every idea rests on an assumption that, if wrong, makes the rest pointless — people will pay for this, providers will show up, patients will actually use the link. The job of the first build is to test that assumption with real users as quickly and cheaply as honesty allows.",
        ],
      },
      {
        heading: "Find the smallest proof loop",
        diagramId: "mvp-loop",
        relatedCaseStudy: {
          href: "/case-studies/mincha-alarm",
          label: "Real build example",
          title: "How Mincha Alarm stayed small enough to ship quickly",
          text: "A focused product loop — location, zman calculation, reminder — kept the first version useful without turning it into a full calendar app.",
        },
        paragraphs: [
          "Most products have one core loop — the repeating sequence that delivers the value you promised. If users can complete that loop and get the outcome, the idea has a pulse. If they cannot, no amount of polish elsewhere will save it. So the first thing to build is that loop, end to end, and almost nothing else.",
          "The loop is usually three or four steps. For a marketplace it might be request, match, respond. For a clinic tool it might be book, remind, confirm. For an internal operations app it might be submit, review, complete. Write your loop as a single sentence. If you cannot, the product is not yet clear enough to build, and that clarity is the cheapest thing to fix.",
        ],
        bullets: [
          {
            label: "Marketplace",
            text: "A provider can list a service, a customer can request it, and the two can connect. Skip ratings, payments, and search filters at first.",
          },
          {
            label: "Booking or clinic tool",
            text: "A customer can book, receive a reminder, and confirm. Skip multi-staff calendars and reporting until the loop is trusted.",
          },
          {
            label: "Internal operations app",
            text: "A request can be submitted, reviewed, and marked complete. Skip dashboards and permissions until volume demands them.",
          },
        ],
      },
      {
        heading: "Cut features that only make the product look finished",
        paragraphs: [
          "Some features exist to deliver value. Others exist to make the product feel complete — and those are the ones that quietly consume an MVP budget. Settings pages, role management, analytics dashboards, onboarding tours, and admin panels all feel necessary, but they rarely answer your riskiest question. They make the product look like a real company built it, which is a poor use of money you do not yet know is justified.",
          "A simple test for any proposed feature: does it help a user get through the core loop for the first time? If yes, it might belong in version one. If it only helps after someone is already a happy, regular user, it is almost always a version-two feature. The first release should be easy to explain in a sentence, easy to put in front of a stranger, and easy to change the week after you learn something.",
        ],
      },
      {
        heading: "Decide what you will fake or do by hand",
        paragraphs: [
          "The cheapest features in an MVP are the ones you do not build at all. Many steps that look like they need software can be handled manually behind the scenes while you learn. If matches in your marketplace can be made by a human reading requests for the first month, you save weeks of engineering and learn exactly what a future algorithm would need to do.",
          "This is sometimes called a concierge approach: the user sees a smooth experience, while a person does the hard part by hand. It feels unscalable because it is — and that is the point. You are buying information, not scale. Once you understand the rules a human applies, automating them is straightforward. Automating rules you have not yet discovered is how budgets disappear.",
        ],
      },
      {
        heading: "Build for learning speed, then decide",
        interactiveToolId: "scope-calculator",
        paragraphs: [
          "The real output of an MVP is not the software. It is evidence: do people understand the offer, where do they drop off, what do they email you asking for, which part of the promise do they actually value, and what are staff quietly doing by hand to keep things working? A first version that produces these answers in three weeks is worth far more than a polished build that takes six months to tell you the same thing.",
          "Plan the MVP with the next decision in mind. Before you start, write down what result would convince you to invest more, what result would make you change direction, and what result would tell you to stop. Deciding this in advance protects you from the most common trap in early products: building more because it is easier than admitting you have not yet proven the idea.",
        ],
      },
    ],
    faq: [
      {
        question: "How long should an MVP take to build?",
        answer:
          "If the core loop is genuinely narrow, a few weeks is a realistic target for most business ideas. When an MVP estimate stretches to many months, that is usually a sign the scope still contains version-two features — go back to the loop and cut again.",
      },
      {
        question: "Does an MVP need professional design?",
        answer:
          "It needs to be clear, not beautiful. Users forgive plain screens; they do not forgive confusion about what to do next. Spend design effort on the core loop's first-time experience and use standard components for everything else.",
      },
      {
        question: "What if nobody uses the MVP?",
        answer:
          "That is a result, not a failure of the build. It tells you the offer, the audience, or the channel is wrong before you spent a full product budget finding out. Talk to the people who tried it and stopped — their reasons are the most valuable output the MVP can produce.",
      },
    ],
  },
  {
    slug: "manual-processes-that-should-not-stay-manual",
    datePublished: "2026-06-25",
    dateModified: "2026-07-06",
    title: "Manual processes that should not stay manual",
    description:
      "How to spot when a spreadsheet, phone call, or chat-based workflow has quietly outgrown itself and is ready to become a small, focused system.",
    readTime: "8 min read",
    sections: [
      {
        heading: "Manual is fine — until it isn't",
        paragraphs: [
          "There is nothing wrong with running a process by hand. A spreadsheet, a shared inbox, and a group chat will carry a small business surprisingly far, and replacing them too early is its own kind of waste. The problem is that manual processes rarely announce when they have outgrown themselves. They degrade quietly: a few more customers, a new staff member, one busy season, and suddenly the same workflow that felt nimble is costing hours and dropping details.",
          "The signals below are the ones worth watching. None of them means you need a large software project. Most point toward a small, focused system that removes the fragile parts of a workflow while leaving the human judgment exactly where it belongs.",
        ],
      },
      {
        heading: "Signal 1: the work repeats with only small variations",
        paragraphs: [
          "If your team handles the same type of request every day and only a few details change, the process is a strong candidate for a system. Repetition with low variation is the clearest sign that software can help, because the rules are stable enough to encode. The more a task feels like \"the same thing again with a different name on it,\" the more time a system will give back.",
          "Common examples include intake forms that get retyped into another tool, follow-up reminders sent one at a time, internal approvals that wait in someone's inbox, and status updates copied between a chat and a spreadsheet. Each of these is predictable, and predictable work is exactly what a small system is good at.",
        ],
      },
      {
        heading: "Signal 2: mistakes come from handoffs, not judgment",
        paragraphs: [
          "It is worth separating two kinds of work. Some steps need a person's judgment — deciding whether to take on a client, how to handle an unhappy customer, what a quote should be. Those steps should stay human. But many operational mistakes have nothing to do with judgment. They happen in the gaps between people: a name copied incorrectly, a call that was never returned, a file sent to the wrong address, a status that someone forgot to update.",
          "When you look at recent errors and most of them are handoff failures rather than bad decisions, that is a strong signal. A small system can preserve every bit of human judgment while removing the fragile relay race between inboxes, tabs, and memory. The people keep deciding; the software stops the details from falling through the cracks.",
        ],
      },
      {
        heading: "Signal 3: people keep asking for the same status",
        paragraphs: [
          "Pay attention to the questions that get asked over and over: \"did that get done?\", \"where is my order?\", \"has the client replied?\", \"who is handling this?\" When clients, staff, or managers repeatedly ask for status, the process is missing visibility, and answering those questions is itself a hidden tax on the team.",
          "This is often the cheapest problem to solve and the one with the biggest felt improvement. A simple shared tracker or an automatic notification when something changes can eliminate a whole category of interruptions. You do not need a dashboard with charts — you need the current state of things to be visible without anyone having to ask.",
        ],
      },
      {
        heading: "Signal 4: the process only works when one person is there",
        paragraphs: [
          "If a workflow quietly depends on one person who \"just knows how it works,\" the business carries a real risk. When that person is on holiday, off sick, or leaves, the process stalls or breaks. Knowledge living only in someone's head is a sign the process is ready to be written down — and writing it down is usually the first step toward a system.",
          "A small system encodes that knowledge so it does not walk out the door. It also makes training new staff far faster, because the workflow guides them instead of relying on a long apprenticeship beside the one person who understands it.",
        ],
      },
      {
        heading: "What to do with the signals",
        diagramId: "manual-vs-system",
        interactiveToolId: "automation-score",
        paragraphs: [
          "Noticing these signals does not mean rushing to build. It means you have found a process worth examining closely. Start by writing down how the work actually flows today, where it slows down, and which steps are judgment versus handoff. That map alone often reveals quick fixes that need no software at all.",
          "Where a system does make sense, keep the first version small: target the single most painful signal, automate only the predictable steps, and leave the judgment with people. The aim is never to remove humans from the work — it is to stop spending them on the parts a system handles better, so their time goes to the parts only a person can do.",
        ],
      },
    ],
    faq: [
      {
        question: "Which process should I automate first?",
        answer:
          "The one showing the strongest signal from this guide — usually the workflow with the most handoff mistakes or the most repeated status questions. Picking the most painful process first also makes adoption easier, because the team feels the relief immediately.",
      },
      {
        question: "Will automating a process make my team feel replaced?",
        answer:
          "Not if the system targets handoffs rather than judgment. In practice teams adopt these tools fastest when the first thing automated is the part they complain about — retyping, chasing status, sending the same reminder. The decisions stay with people.",
      },
      {
        question: "Is a spreadsheet ever the right long-term answer?",
        answer:
          "Yes. If volume is low, one person owns the data, and mistakes are rare and cheap, a well-kept spreadsheet is a perfectly good system. The signals in this guide matter precisely because they mark the point where that stops being true.",
      },
    ],
  },
  {
    slug: "how-to-prepare-for-a-software-build",
    datePublished: "2026-06-25",
    dateModified: "2026-07-06",
    title: "How to prepare for a software build without writing a spec",
    description:
      "The plain-language information that helps a build start quickly and accurately, even when you are not technical and have never commissioned software before.",
    readTime: "8 min read",
    sections: [
      {
        heading: "You do not need a spec — you need clarity",
        diagramId: "prep-flow",
        paragraphs: [
          "Many business owners delay a software project because they think they need a formal specification first: a long document full of requirements, screens, and technical terms. They do not. A heavy spec written by someone who is not technical often does more harm than good, because it locks in guesses about how the software should work before anyone has thought hard about the problem.",
          "What a good build actually needs from you is clarity about the problem, not a design for the solution. If you can explain what is painful today, show real examples, and describe what a better outcome looks like, a capable team can turn that into the right product. This guide covers exactly what to bring, in plain language, so the work can start quickly and accurately.",
        ],
      },
      {
        heading: "Describe the problem in normal words",
        paragraphs: [
          "Start with what is currently painful, told as a story rather than a list of features. Who is involved, what do they do, where does the work slow down, and what happens when something goes wrong? Resist the urge to translate this into technical requests — \"we need a dashboard\" hides the real problem, while \"the manager spends every Monday morning chasing numbers from three people\" reveals it.",
          "A simple way to do this is to walk through a recent real example from start to finish. Pick one actual customer, order, or request from last week and narrate everything that happened to it: who touched it, what they did, how long each step took, and where it got stuck. One concrete story exposes more useful detail than pages of abstract requirements.",
        ],
      },
      {
        heading: "Bring examples from real work",
        paragraphs: [
          "Artifacts from how you work today are often more valuable than any document you could write specially for the project. They show the real workflow and expose details that are easy to forget in conversation — the awkward field everyone hates, the copy-paste step between two tools, the message everyone sends slightly differently.",
          "Gather whatever you already have. None of it needs to be tidy; the messiness is informative.",
        ],
        bullets: [
          {
            label: "Screenshots and spreadsheets",
            text: "The actual tabs, files, and tools the team uses now, including the messy ones.",
          },
          {
            label: "Message and email templates",
            text: "What you send to customers and each other, so the system can match your real tone and steps.",
          },
          {
            label: "Forms and documents",
            text: "Any intake forms, checklists, or paperwork that capture the information you rely on.",
          },
          {
            label: "Examples of things going wrong",
            text: "A booking that was lost, a duplicate order, a missed follow-up — these reveal the edge cases that matter most.",
          },
        ],
      },
      {
        heading: "Name the outcome, not just the feature",
        paragraphs: [
          "When you do describe what you want, anchor it to the change you expect rather than the mechanism. Instead of \"we need a dashboard,\" say \"the manager should be able to see which jobs are behind without asking anyone.\" Instead of \"send reminders,\" say \"fewer customers should miss appointments.\" The outcome tells the team what success looks like and leaves room for them to find the simplest way to get there.",
          "This matters because the obvious feature is often not the best solution. A team that understands the outcome might solve the problem with something smaller, cheaper, or more reliable than the feature you first imagined. Stating outcomes also gives you a clear way to judge the result later: you can check whether the number you cared about actually moved.",
        ],
      },
      {
        heading: "Know your constraints and your non-negotiables",
        paragraphs: [
          "A few practical facts help a project start on solid ground. What tools must the new system work alongside — your calendar, accounting software, CRM, or payment provider? Are there rules you cannot break around privacy, data, or how customers are contacted? Is there a real deadline, like a busy season, that shapes what version one must include?",
          "It also helps to separate what is essential from what is merely nice. If you can mark which parts of the workflow are non-negotiable and which are flexible, the team can protect what matters while simplifying everything else. Constraints are not obstacles to a build — knowing them early is what prevents expensive surprises later.",
        ],
      },
      {
        heading: "Decide how you will judge the first version",
        paragraphs: [
          "Before anything is built, agree on what a successful first version would let you stop doing manually, or what number it should improve. This single decision keeps a project focused and honest. It prevents scope from drifting, gives everyone the same definition of done, and makes the eventual result easy to evaluate without arguments.",
          "You do not need metrics dashboards for this. A plain sentence is enough: \"if this works, we stop spending Monday mornings chasing status,\" or \"if this works, no-shows drop noticeably within a month.\" Arrive with the problem, the examples, the outcomes, the constraints, and this measure of success, and you are far better prepared than most clients who show up with a thick spec.",
        ],
      },
    ],
    faq: [
      {
        question: "How much time should I spend preparing?",
        answer:
          "A few focused hours is usually enough: one hour narrating a real recent example from start to finish, one hour gathering screenshots, templates, and forms, and one hour writing down outcomes and constraints. That preparation routinely saves weeks of back-and-forth later.",
      },
      {
        question: "What if I don't know what is technically possible?",
        answer:
          "You do not need to. Describe the outcome you want in plain words and let the team propose the mechanism. Guessing at technical solutions before the conversation usually anchors the project on the wrong feature.",
      },
      {
        question: "Should I sign an NDA before sharing my workflow?",
        answer:
          "For most operational workflows the risk of sharing is low and the cost of secrecy is high — vague briefs produce vague quotes. If the idea itself is genuinely novel, a simple mutual NDA is a reasonable ask and any serious builder will sign one.",
      },
    ],
  },
  {
    slug: "best-tools-for-building-websites",
    datePublished: "2026-06-25",
    dateModified: "2026-07-06",
    title: "Which tools should you use to build a website?",
    description:
      "A practical comparison of Next.js, Astro, WordPress, Webflow, Shopify, and simple site builders for business websites.",
    readTime: "10 min read",
    sections: [
      {
        heading: "Start with the job of the website",
        diagramId: "website-tool-ladder",
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
        relatedCaseStudy: {
          href: "/case-studies/domino-ranana",
          label: "Real build example",
          title: "How Domino Ra'anana became more than a menu page",
          text: "The ordering site needed checkout, delivery rules, payment state, admin tools, and POS handoff — the kind of workflow that changes the website stack decision.",
        },
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
    faq: [
      {
        question: "Can I switch platforms later if I choose wrong?",
        answer:
          "Content usually ports; structure and integrations usually do not. Moving a five-page brochure site is a small job, but moving a site with booking logic, CMS collections, or SEO history is a real project. That asymmetry is why the choice deserves an hour of honest thought up front.",
      },
      {
        question: "Is WordPress outdated in 2026?",
        answer:
          "No. It still runs a huge share of the web and remains a sensible choice when editors need a familiar admin panel and a plugin ecosystem. The real question is whether someone will own updates and security — an unmaintained WordPress site ages badly, while a maintained one keeps working for years.",
      },
      {
        question: "Which platform is best for SEO?",
        answer:
          "None of them wins by brand name. Search engines reward fast pages, clear structure, useful content, and working technical basics — sitemaps, canonical URLs, and sensible headings. Every platform in this comparison can achieve that; some just require more discipline than others.",
      },
    ],
  },
  {
    slug: "best-tools-for-building-apps",
    datePublished: "2026-06-25",
    dateModified: "2026-07-06",
    title: "Which tools should you use to build an app?",
    description:
      "A practical comparison of Expo, React Native, Flutter, native iOS and Android, PWAs, and no-code app builders.",
    readTime: "11 min read",
    sections: [
      {
        heading: "The first question is what kind of app you need",
        diagramId: "app-path",
        relatedCaseStudy: {
          href: "/case-studies/mincha-alarm",
          label: "Real build example",
          title: "Why Mincha Alarm started as a focused web app",
          text: "The important job was a reliable location-based reminder, so the first version did not need two native apps before the core behavior was proven.",
        },
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
    faq: [
      {
        question: "How much cheaper is a web app than a native app?",
        answer:
          "Often meaningfully cheaper, because there is one codebase, one deployment, and no app store review cycle. The saving disappears if the product genuinely needs native capabilities — then a PWA becomes a detour rather than a shortcut. The kind-of-app question in this guide exists to catch that early.",
      },
      {
        question: "Can I start with a web app and go native later?",
        answer:
          "Yes, and it is a common path. The backend, data model, and business logic usually carry over; the client is what gets rebuilt. Starting on the web lets you validate the workflow before paying for platform polish.",
      },
      {
        question: "How long does app store approval take?",
        answer:
          "Typically days, not weeks, for a well-behaved app — but plan for a rejection or two on the first submission, especially around privacy declarations, sign-in rules, and payment policies. Build the review cycle into the launch timeline instead of discovering it at the end.",
      },
    ],
  },
  {
    slug: "how-much-does-a-small-business-app-cost",
    datePublished: "2026-06-25",
    dateModified: "2026-07-06",
    title: "How much does it cost to build a small business app?",
    description:
      "An honest breakdown of what drives software pricing, why quotes vary so widely, and how to get more product for the same budget.",
    readTime: "9 min read",
    sections: [
      {
        heading: "Why \"how much does an app cost\" has no single answer",
        paragraphs: [
          "Asking what an app costs is a bit like asking what a building costs. A garden shed and an office tower are both buildings, and the honest answer is always \"it depends on what you need and who builds it.\" Software is the same. The same idea can cost a few thousand or a few hundred thousand depending on scope, quality, and who does the work, which is why a vague brief produces wildly different quotes.",
          "That uncertainty is uncomfortable, but it is also useful information. When quotes for the \"same\" project vary by 5x, it usually means the project was not actually defined the same way by each person. The most reliable way to control cost is not to hunt for the cheapest quote — it is to define the problem tightly enough that everyone is pricing the same thing.",
        ],
      },
      {
        heading: "What actually drives the price",
        diagramId: "cost-drivers",
        relatedCaseStudy: {
          href: "/case-studies/domino-ranana",
          label: "Real build example",
          title: "Why an ordering site scope grows around operations",
          text: "Domino Ra'anana shows how delivery zones, payments, cart rules, admin screens, and POS integration drive build effort more than page count.",
        },
        paragraphs: [
          "Software pricing is mostly a function of how much needs to be designed, built, and tested, and how much risk and uncertainty surrounds it. A handful of factors explain most of the difference between a small invoice and a large one.",
        ],
        bullets: [
          {
            label: "Scope and number of features",
            text: "Each distinct feature adds design, build, testing, and edge cases. Fewer, sharper features cost far less than a long wishlist.",
          },
          {
            label: "Custom logic and integrations",
            text: "Connecting to payments, calendars, CRMs, or other systems adds work — especially when those systems are messy or poorly documented.",
          },
          {
            label: "Users and roles",
            text: "An app with one type of user is much simpler than one with admins, staff, and customers who each see different things.",
          },
          {
            label: "Design polish",
            text: "A clean, functional interface is affordable. Highly custom, branded, animated experiences cost meaningfully more.",
          },
          {
            label: "Who builds it",
            text: "A freelancer, a small studio, and a large agency price the same work very differently — and carry different risks.",
          },
        ],
      },
      {
        heading: "Rough ways projects get priced",
        paragraphs: [
          "Most software work is sold in one of three ways, and understanding them helps you read a quote. Fixed price means an agreed amount for an agreed scope; it gives certainty but punishes change, so it rewards a very clear brief. Time and materials means you pay for the hours worked; it is flexible and honest about uncertainty but requires trust and good communication. A fixed-scope sprint sits between the two: a focused effort to deliver one defined outcome in a set window.",
          "For a first version, a focused fixed-scope build is often the best fit for a small business. It caps your risk, forces a clear definition of done, and produces something real you can react to before committing more. Open-ended hourly arrangements can be excellent with the right team, but they are unforgiving when the scope was never pinned down.",
        ],
      },
      {
        heading: "How to get more product for the same money",
        paragraphs: [
          "The biggest savings in software almost never come from negotiating a lower rate. They come from building less. Every feature you defer is design, code, and testing you do not pay for, and most first versions are far larger than they need to be. Cutting scope to the genuine core is the highest-leverage cost decision you can make.",
          "A few habits consistently stretch a budget. Define the single core workflow and build only that first. Reuse proven platforms for solved problems like payments, authentication, and email instead of building them. Accept a clean, standard design over a bespoke one for version one. And handle rare edge cases manually at the start rather than paying to automate situations that might happen twice a year.",
        ],
      },
      {
        heading: "Questions to ask before accepting any quote",
        paragraphs: [
          "A quote is only meaningful if you understand what is and is not included. Before you sign anything, make sure the answers to these questions are clear and in writing. Vague answers here are the single most common cause of projects that run over budget.",
        ],
        bullets: [
          {
            label: "What exactly is included?",
            text: "Which features, which user types, and what is explicitly out of scope for this price?",
          },
          {
            label: "What happens when something changes?",
            text: "How are new requests handled and priced once the work is underway?",
          },
          {
            label: "Who owns the code and accounts?",
            text: "Will you own the source code, domains, and service accounts, or are you renting access?",
          },
          {
            label: "What does support cost after launch?",
            text: "Hosting, fixes, and changes continue after delivery — understand the ongoing cost, not just the build.",
          },
        ],
      },
      {
        heading: "A realistic way to think about budget",
        paragraphs: [
          "Rather than starting with \"how much does an app cost,\" start with \"how much is this problem worth solving, and what is the smallest version that would prove it?\" If a workflow wastes ten hours a week, a system that recovers most of that time pays for itself quickly, and that math should guide the budget more than any market average.",
          "Set aside a portion of your budget for after launch, too. Software is not finished when it ships; the first version teaches you what to change, and the most valuable improvements often come from real use. A team that delivers a lean first version and helps you iterate will usually give you a better outcome than one that spends the entire budget trying to predict everything up front.",
        ],
      },
    ],
    faq: [
      {
        question: "Why do quotes for the same project differ so much?",
        answer:
          "Because each builder silently filled the gaps in the brief differently — one priced a form, another priced a platform. Wildly different quotes are a signal to tighten the definition of version one, not to pick the cheapest number.",
      },
      {
        question: "Is a cheaper freelancer always the riskier option?",
        answer:
          "Not always, but the risks are different: continuity and availability rather than competence. A capable freelancer with a small, well-defined scope and clear code ownership can be excellent value. The risk grows when the project is large, long, or business-critical and depends on one person staying available.",
      },
      {
        question: "What ongoing costs should I expect after launch?",
        answer:
          "Hosting and third-party services (often modest monthly amounts), plus a budget for fixes and small changes as real use reveals what to improve. A practical planning habit is to reserve a meaningful slice of the build budget — many teams use 15–25% per year — for post-launch iteration.",
      },
    ],
  },
  {
    slug: "no-code-vs-custom-code",
    datePublished: "2026-06-25",
    dateModified: "2026-07-06",
    title: "No-code vs. custom code: which should you choose?",
    description:
      "A clear-headed comparison of no-code tools and custom development, with the honest trade-offs each side rarely admits.",
    readTime: "9 min read",
    sections: [
      {
        heading: "Both sides oversell themselves",
        paragraphs: [
          "The no-code world promises that anyone can build powerful software without a developer. The custom-code world implies that serious products must be built from scratch. Both claims are marketing, and both lead businesses astray. The honest position is that no-code and custom code are different tools for different jobs, and the right choice depends entirely on what you are building and how far you intend to take it.",
          "Choosing well saves enormous time and money. Choosing badly is expensive in a specific, painful way: you build something on the wrong foundation, outgrow it, and then pay twice — once to build it and again to rebuild it properly. This guide is meant to help you avoid that second bill.",
        ],
      },
      {
        heading: "What no-code is genuinely great at",
        paragraphs: [
          "No-code tools — platforms for building apps, automations, forms, and internal tools without writing code — are excellent when speed and self-sufficiency matter more than control. They let a non-technical person assemble a working tool in days, change it without waiting on a developer, and prove an idea before investing real money. For internal workflows, simple customer-facing tools, and early validation, that is often exactly what a business needs.",
          "If your goal is to test whether people want something, replace a spreadsheet, or automate a handful of repetitive steps, no-code is frequently the smart, cheap, fast answer. Reaching for custom development in those situations can be over-engineering — spending months building what a configurable tool could deliver in a week.",
        ],
      },
      {
        heading: "Where no-code starts to hurt",
        paragraphs: [
          "No-code's strengths become weaknesses as a product grows. Because you are working inside someone else's platform, you are limited to what that platform allows. Unusual logic, deep integrations, fine-grained performance, large data volumes, and very specific user experiences are where no-code tools tend to creak, and the workarounds can become more fragile and confusing than real code.",
          "There are also quieter risks. You are dependent on the platform's pricing, uptime, and roadmap; if they raise prices or remove a feature, you have limited recourse. Costs that look cheap at small scale can rise sharply as usage grows. And moving off a no-code tool later is rarely simple, because you usually cannot take the underlying build with you. None of this makes no-code wrong — it makes it important to know when you are approaching its edges.",
        ],
      },
      {
        heading: "What custom code buys you",
        paragraphs: [
          "Custom development means building the software itself rather than configuring a platform. It costs more time and skill up front, and it requires someone to maintain it. In exchange, you get control and ownership: the product can do exactly what you need, integrate with anything, scale as far as the architecture allows, and evolve in any direction without asking permission from a platform.",
          "Custom code earns its cost when the software is central to the business rather than a convenience around the edges. If the product is the thing you sell, if it handles meaningful scale or sensitive data, if it needs a distinctive experience, or if it must connect deeply to other systems, custom development is usually the foundation that holds up over years instead of months.",
        ],
      },
      {
        heading: "A simple way to decide",
        diagramId: "no-code-vs-custom",
        paragraphs: [
          "Instead of debating the tools in the abstract, ask what role the software plays. If it is a supporting workflow or an experiment, lean no-code. If it is core to how the business makes money and will grow with you, lean custom. The questions below usually settle it quickly.",
        ],
        bullets: [
          {
            label: "Lean no-code when",
            text: "you need it soon, the logic is fairly standard, the audience is small or internal, and you are still validating the idea.",
          },
          {
            label: "Lean custom when",
            text: "the product is central to the business, needs unusual logic or deep integrations, must scale, or has to feel uniquely yours.",
          },
          {
            label: "Consider a hybrid when",
            text: "you want to validate fast with no-code now while planning a custom build for the parts you already know will need it.",
          },
        ],
      },
      {
        heading: "The hybrid path most businesses miss",
        paragraphs: [
          "The choice is not always permanent or all-or-nothing. A common and sensible path is to start with no-code to validate demand and learn how the workflow really behaves, then rebuild the proven core as custom software once you understand it well. The no-code version becomes a detailed, working specification — far more useful than any document — for the custom build that follows.",
          "The mistake to avoid is drifting into a heavy no-code build for something you already know will need custom code, simply because no-code felt easier to start. If the destination clearly requires ownership, scale, or unusual logic, it is often cheaper to begin building the right foundation than to construct an elaborate temporary version you will dismantle. Decide based on where the product is going, not only on what is quickest today.",
        ],
      },
    ],
    faq: [
      {
        question: "Is no-code secure enough for customer data?",
        answer:
          "The major platforms invest seriously in security, often more than a small custom build would. The real questions are about your configuration — who has access, what is shared publicly by default — and about compliance: if your industry has specific data-residency or privacy requirements, check the platform can actually meet them before building.",
      },
      {
        question: "How do I know I'm outgrowing a no-code tool?",
        answer:
          "The workarounds tell you. When new features take longer to configure than they would to code, when the platform's pricing tier jumps because of your usage, or when you maintain a document explaining the tricks that keep it working — the tool is now costing more than code would.",
      },
      {
        question: "Can no-code and custom code work together?",
        answer:
          "Yes, and hybrids are often the best value: a custom core where the business logic is unusual, connected to no-code tools for the standard parts like forms, dashboards, or notifications. You pay for code only where code earns it.",
      },
    ],
  },
  {
    slug: "build-vs-buy-software",
    datePublished: "2026-06-25",
    dateModified: "2026-07-06",
    title: "Build vs. buy: when off-the-shelf software is the right call",
    description:
      "How to decide whether to use existing software or build your own — and why building should usually be your second choice, not your first.",
    readTime: "8 min read",
    sections: [
      {
        heading: "Building should be the exception, not the default",
        diagramId: "buy-default",
        paragraphs: [
          "It is tempting to assume your business is unique enough to need its own software. Sometimes that is true. Far more often, the problem you are facing has already been solved well by an existing product, and building your own version means paying to recreate something you could rent for a fraction of the cost and effort.",
          "A good rule of thumb: buy by default, and build only when buying genuinely fails you. Custom software is powerful, but it carries a cost most people underestimate — not just to build, but to maintain, fix, secure, and improve forever. Existing products spread those costs across thousands of customers. Yours would carry them alone.",
        ],
      },
      {
        heading: "The hidden costs of building",
        paragraphs: [
          "The build price is only the beginning. Software you own is software you must keep alive. It needs hosting, updates, bug fixes, security patches, and changes as your business and the world around it shift. A feature that took two weeks to build can generate small maintenance demands for years, and those demands do not stop when the original developer moves on.",
          "There is also opportunity cost. Time and money spent rebuilding a solved problem — invoicing, scheduling, email marketing, accounting — is time and money not spent on the thing that actually makes your business distinctive. Off-the-shelf tools let you skip the solved problems and focus your limited resources where they create real advantage.",
        ],
      },
      {
        heading: "When buying is clearly the right call",
        paragraphs: [
          "For common, well-understood business needs, an existing product is almost always the better choice. These are problems thousands of businesses share, which means mature tools already handle the edge cases you have not even thought of yet, backed by support teams and continuous improvement you do not have to fund.",
        ],
        bullets: [
          {
            label: "Standard business functions",
            text: "Accounting, payroll, email, calendars, and document storage are solved problems — buy them.",
          },
          {
            label: "Common operations",
            text: "Invoicing, basic scheduling, CRM, and email marketing have excellent affordable tools already.",
          },
          {
            label: "Anything regulated or risky",
            text: "Payments and identity are areas where mature, compliant providers are far safer than a custom build.",
          },
          {
            label: "Things that are not your edge",
            text: "If a capability does not differentiate you from competitors, it is a candidate to buy, not build.",
          },
        ],
      },
      {
        heading: "When building actually makes sense",
        relatedCaseStudy: {
          href: "/case-studies/djob-agency",
          label: "Real build example",
          title: "Why Djob justified a custom platform",
          text: "Recruiting needed two user flows, admin operations, embeddings, gates, and match snapshots — a real example of software being the product, not a generic back-office tool.",
        },
        paragraphs: [
          "Building is justified when existing tools genuinely cannot do the job, or when the software itself is your advantage. If your workflow is unusual enough that every product forces awkward compromises, if you are stitching together five tools with manual copy-paste between them, or if the way you operate is a real competitive edge, custom software can be transformative rather than indulgent.",
          "The clearest case for building is when the software is the product — when what you sell is the application itself. In that situation, off-the-shelf tools cannot deliver your value, and owning the product is the whole point. Outside of that, building is usually about removing a specific, costly friction that no existing tool resolves, not about preferring something bespoke.",
        ],
      },
      {
        heading: "The path most businesses should take",
        interactiveToolId: "build-vs-buy",
        paragraphs: [
          "In practice, the best answer is rarely pure build or pure buy. Most businesses are best served by buying mature tools for the solved problems and building only the thin layer that is genuinely specific to them — often a small system that connects existing tools together and automates the handoffs between them.",
          "Before commissioning any custom software, do a serious search for an existing product first, and try to live with it honestly. If a tool gets you 80% of the way, the remaining 20% may not be worth a custom build at all. And if you do build, aim to build the smallest piece that existing tools cannot provide, rather than recreating capabilities you could have rented. The goal is leverage, not ownership for its own sake.",
        ],
      },
    ],
    faq: [
      {
        question: "How do I find the existing tools worth trying?",
        answer:
          "Ask businesses like yours what they use, search for your workflow plus the word 'software', and look at what integrates with the tools you already run. A day of research and two or three free trials is cheap compared with commissioning a build for a solved problem.",
      },
      {
        question: "What if an off-the-shelf tool does 80% of what I need?",
        answer:
          "Live with it honestly for a month before deciding the missing 20% justifies a build. Often the gap turns out to be a habit, not a requirement — and when it is real, a small connector or add-on around the tool is usually far cheaper than replacing it.",
      },
      {
        question: "When is building clearly the right choice?",
        answer:
          "When the software is the product you sell, or when the way you operate is a genuine competitive edge that generic tools flatten. Outside those cases, build only the thin layer no existing tool provides — usually the glue between systems, not the systems themselves.",
      },
    ],
  },
  {
    slug: "how-to-choose-a-developer-or-agency",
    datePublished: "2026-06-25",
    dateModified: "2026-07-06",
    title: "How to choose a developer or agency without being technical",
    description:
      "A practical guide to evaluating who builds your software when you cannot judge the code yourself — and the warning signs that matter most.",
    readTime: "9 min read",
    sections: [
      {
        heading: "You can judge the work without reading the code",
        paragraphs: [
          "Hiring someone to build software when you are not technical feels like buying a car with the hood welded shut. You cannot inspect the engine, so it is natural to fall back on price or a slick portfolio. But the things that most determine whether a software project succeeds are things you can absolutely judge: how clearly someone communicates, how they think about your problem, and how they handle uncertainty and disagreement.",
          "In fact, the best signal is rarely technical brilliance. It is whether the person or team understands your business problem and is willing to push back on bad ideas. A brilliant developer who builds exactly the wrong thing helps no one. This guide focuses on what you can actually assess.",
        ],
      },
      {
        heading: "Freelancer, studio, or agency?",
        diagramId: "builder-tiers",
        paragraphs: [
          "The three common options each have a personality. A freelancer is usually the most affordable and personal, but carries a key-person risk: if they get sick, busy, or disappear, your project stalls. A small studio brings a tight team and broader skills with more continuity, at a higher cost. A large agency offers scale, process, and reliability, but often at premium prices and with more layers between you and the people doing the work.",
          "There is no universally right answer — only a right fit for your project's size and risk. A small internal tool may be perfect for a trusted freelancer, while a product your business will depend on for years may justify a studio or agency with more resilience. What matters most is matching the level of risk you are taking to the stability of who you hire.",
        ],
      },
      {
        heading: "What to look for when evaluating someone",
        paragraphs: [
          "Across all three options, the positive signals are remarkably consistent. They have little to do with the specific technologies someone uses and everything to do with how they engage with your problem and how they have served clients like you before.",
        ],
        bullets: [
          {
            label: "They ask about the problem first",
            text: "Good builders dig into your business and goals before talking solutions or technology.",
          },
          {
            label: "They explain things in plain language",
            text: "If someone cannot explain their approach without jargon, working with them will be frustrating throughout.",
          },
          {
            label: "They push back when appropriate",
            text: "Someone who agrees to everything you ask is selling compliance, not expertise. You want honest disagreement.",
          },
          {
            label: "They have relevant, reachable references",
            text: "Past clients with similar projects — whom you can actually talk to — are worth more than any portfolio screenshot.",
          },
        ],
      },
      {
        heading: "Warning signs worth taking seriously",
        paragraphs: [
          "Some red flags reliably predict trouble, and most are visible before any money changes hands. Be cautious with anyone who quotes a firm price without understanding your problem, since that price is a guess that will be defended later at your expense. Be wary of communication that is already slow or unclear during the sales conversation, when someone is supposedly trying to win your business.",
          "Other warning signs include reluctance to let you own the code, accounts, or domains; pressure to commit quickly; promises that sound too good, too cheap, or too fast; and an unwillingness to start small. If a builder resists a modest first phase and insists on a large up-front commitment, that is a risk transfer onto you, not a sign of confidence.",
        ],
      },
      {
        heading: "Protect yourself with how you structure the work",
        paragraphs: [
          "The smartest protection for a non-technical client is not a perfect contract — it is structuring the engagement to limit risk. Start with a small, well-defined first phase that produces something real. A modest initial project tells you more about how someone works than any interview, and it caps your exposure if the fit is wrong.",
          "Make a few things explicit in writing before you begin: that you will own the source code, domains, and service accounts; how changes are handled and priced; and what support looks like after launch. Insist on regular, understandable check-ins where you can see progress, not just hear that things are going well. A builder who welcomes these terms is showing you the most important quality of all — that they expect to earn your trust by being accountable.",
        ],
      },
    ],
    faq: [
      {
        question: "How should I check references?",
        answer:
          "Ask for two or three past clients with projects similar in size to yours, and actually call them. Ask what went wrong during the project and how the builder handled it — every project hits problems, and the handling is the signal. A builder who cannot produce reachable references is telling you something.",
      },
      {
        question: "Should the first engagement be fixed price or hourly?",
        answer:
          "For a first engagement with someone new, a small fixed-scope phase is usually the safest structure: it caps your exposure, forces a clear definition of done, and shows you how they work. Move to more flexible arrangements once trust is established.",
      },
      {
        question: "What must be in writing before work starts?",
        answer:
          "Four things at minimum: that you own the source code, domains, and service accounts; exactly what version one includes and excludes; how change requests are priced; and what support costs after launch. None of this requires legal language — a plain email both sides confirm is far better than nothing.",
      },
    ],
  },
  {
    slug: "software-maintenance-after-launch",
    datePublished: "2026-07-06",
    dateModified: "2026-07-06",
    title: "What it really takes to keep software running after launch",
    description:
      "Launch is the halfway point, not the finish line. A plain-language guide to hosting, updates, monitoring, and the maintenance budget nobody mentions in the sales conversation.",
    readTime: "9 min read",
    sections: [
      {
        heading: "Launch is the halfway point",
        paragraphs: [
          "Most conversations about commissioning software end at the launch date, as if the story finishes when the product goes live. In reality, launch is when the software starts existing in the world — and the world keeps changing around it. Browsers update, phone operating systems update, the services your app connects to change their rules, security researchers find new classes of problems, and your own business changes what it needs.",
          "None of this means software is fragile or that maintenance is a scam. It means software is more like a vehicle than a sculpture: it works for years, but only if someone checks the oil. This guide explains what that checking actually involves for a small business system, what it costs, and how to avoid the two classic failure modes — paying for maintenance that never happens, and paying nothing until something breaks expensively.",
        ],
      },
      {
        heading: "The four kinds of after-launch work",
        diagramId: "maintenance-cycle",
        paragraphs: [
          "The word \"maintenance\" hides four different activities with different urgency and cost profiles. Separating them makes every conversation with a developer or agency clearer, because you can ask which of the four a support agreement actually covers.",
        ],
        bullets: [
          {
            label: "Keeping the lights on",
            text: "Hosting, domains, SSL certificates, email delivery, and backups. Mostly automatic, mostly cheap, but someone must own the accounts and notice when a card expires or a renewal fails.",
          },
          {
            label: "Staying current",
            text: "Updating the frameworks, libraries, and platform versions the software is built on. Skipping this feels free for a year or two, then presents a large bill all at once when an old version stops being supported.",
          },
          {
            label: "Fixing what breaks",
            text: "Bugs found in real use, integrations that change on the other end, and edge cases the first version never met. This work is unpredictable by nature, which is why it suits a retainer or hourly arrangement rather than a fixed list.",
          },
          {
            label: "Improving what works",
            text: "Small changes real usage reveals: a field nobody fills in, a report everyone exports weekly, a step users keep asking about. This is the highest-value category — it is how a decent first version becomes a tool the team relies on.",
          },
        ],
      },
      {
        heading: "What neglect actually looks like",
        paragraphs: [
          "Unmaintained software rarely fails on day one. It decays in a specific sequence. First, small annoyances appear — an integration hiccups, a page loads slower, an email lands in spam. Then a dependency somewhere announces its end of life, and the cost of every future change quietly doubles because updates must happen before anything else can. Finally something visible breaks — payments, logins, the booking form — and the fix is urgent, expensive, and performed under pressure by whoever is available rather than whoever is best.",
          "The pattern to notice: the total cost of neglect is almost always higher than the cost of steady upkeep, but it arrives later and all at once, which makes it easy to choose by accident. Businesses that budget a small ongoing amount — and actually spend it — almost never experience the emergency version of this story.",
        ],
      },
      {
        heading: "A sensible maintenance budget",
        paragraphs: [
          "A widely used planning figure for software upkeep is 15–25% of the original build cost per year, covering updates, fixes, and small improvements. A simple internal tool with few integrations sits at the low end or below it; a customer-facing system with payments, messaging, and third-party connections sits higher because more of the outside world can change underneath it.",
          "Structure matters as much as the amount. For most small systems, the practical options are: a modest monthly retainer that includes updates and a few hours of changes; a pay-as-you-go arrangement with an agreed response time; or scheduled check-ups — a half-day every quarter where someone updates dependencies, reviews errors, and flags risks. The wrong option is the default one: nobody responsible, nothing scheduled, and a plan that amounts to hoping.",
        ],
      },
      {
        heading: "Questions to settle before launch, not after",
        paragraphs: [
          "The cheapest time to arrange after-launch care is while the builder still knows the project intimately. A handful of questions, answered in writing before the final invoice, prevent most of the painful scenarios.",
        ],
        bullets: [
          {
            label: "Who owns what",
            text: "Confirm you control the hosting account, domain, source code repository, and every third-party service — not just that you 'can have access if needed'.",
          },
          {
            label: "Who watches for errors",
            text: "Is there error monitoring, and does anyone receive the alerts? Software that fails silently fails longest.",
          },
          {
            label: "What backups exist",
            text: "What is backed up, how often, and — the question everyone skips — has a restore ever been tested?",
          },
          {
            label: "What support costs",
            text: "Response times, hourly rates or retainer terms, and what counts as an emergency. Agreeing this calmly beats negotiating it during an outage.",
          },
          {
            label: "What handover looks like",
            text: "If you ever change developers, what would the next person need? A short written overview of the system is cheap insurance.",
          },
        ],
      },
      {
        heading: "The upside nobody advertises",
        paragraphs: [
          "Maintenance sounds like pure cost, but the improvement category is where small systems quietly compound. The businesses that get the most from custom software are rarely the ones that built the most ambitious first version — they are the ones that made twenty small, cheap changes over two years, each one guided by real use. A field removed here, a reminder reworded there, one report automated: individually trivial, together transformative.",
          "Treat the months after launch as part of the project. Keep a running list of frictions the team notices, batch them into small change requests, and spend the improvement budget on what the list proves matters. That habit — not the size of the original build — is what separates software that gets adopted from software that gets abandoned.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I maintain the software myself without a developer?",
        answer:
          "You can and should own the accounts, monitor that things work, and keep the friction list. The technical categories — dependency updates, bug fixes, security patches — need someone who can read the code. The workable split for most small businesses: you own the watching, a developer owns the fixing, on a retainer or scheduled check-up basis.",
      },
      {
        question: "My developer disappeared. How bad is it?",
        answer:
          "Usually recoverable, and faster than rebuilding. If you own the code repository and the accounts, a new developer can take over most small systems after a short review. If you do not own them, that recovery starts with regaining access — which is exactly why ownership belongs in writing before the first launch.",
      },
      {
        question: "Does no-code software escape maintenance?",
        answer:
          "It trades one kind for another. The platform handles servers, updates, and security — genuinely valuable — but you still own integrations that break when connected services change, workflows that drift from how the business works, and price or feature changes the platform makes. Less maintenance, not none.",
      },
    ],
  },
  {
    slug: "how-to-run-a-software-pilot",
    datePublished: "2026-07-06",
    dateModified: "2026-07-06",
    title: "How to pilot new software without disrupting your team",
    description:
      "A step-by-step way to test a new system with real work and real people for a few weeks — and get a clear keep-or-kill answer instead of a stalled rollout.",
    readTime: "9 min read",
    sections: [
      {
        heading: "Why rollouts fail and pilots work",
        paragraphs: [
          "The classic failed rollout looks like this: a tool is chosen, everyone is told to use it from Monday, the old spreadsheet stays open 'just in case', and six weeks later the team has quietly returned to the old way while the subscription keeps billing. The failure is rarely the tool. It is the rollout — all-at-once adoption gives nobody room to find problems while they are still cheap to fix.",
          "A pilot inverts this. A small slice of real work moves to the new system for a fixed period, with a named owner and a written definition of success. At the end there is a decision: expand, adjust, or stop. The stakes stay low, the feedback is real because the work is real, and — critically — stopping is a legitimate outcome rather than an admission of failure. Teams that know they can say no give far more honest feedback than teams told the decision is already made.",
        ],
      },
      {
        heading: "Design the slice carefully",
        paragraphs: [
          "The most important pilot decision is what slice of work to move. Too small or too artificial, and the pilot proves nothing — a test with fake data and one enthusiastic volunteer always succeeds. Too large, and you have done a risky rollout and called it a pilot.",
          "A good slice is real, bounded, and representative: real customers or real jobs, a natural boundary that limits blast radius, and enough variety to meet the awkward cases. For a booking system, that might be one location or one service category. For an intake tool, every new client for three weeks. For an internal tracker, one team's active jobs. If the slice cannot hit at least a handful of the messy exceptions — the reschedules, the partial payments, the customer who replies by phone — widen it until it can.",
        ],
        bullets: [
          {
            label: "Real",
            text: "Live work with real consequences, not a sandbox. Sandboxes are for training, not for deciding.",
          },
          {
            label: "Bounded",
            text: "A natural limit — one location, one team, one service — so problems stay small and reversible.",
          },
          {
            label: "Representative",
            text: "Enough volume and variety to surface the exceptions, because the exceptions are what kill tools after rollout.",
          },
        ],
      },
      {
        heading: "Write the success criteria before day one",
        paragraphs: [
          "A pilot without written success criteria produces a feeling, not a decision — and the loudest voice in the room becomes the verdict. Before the pilot starts, write down two or three measurable outcomes and collect their current values. If nobody knows the current no-show rate or how long intake takes today, measuring that baseline is the first week of the pilot.",
          "Good criteria are boring and specific: intake time per client drops from twenty minutes to under ten; double-bookings hit zero for the pilot slice; the team stops using the old spreadsheet for pilot jobs without being reminded. That last kind — a behavior, not a number — is often the most telling. People route around tools they distrust, so voluntary adoption is the strongest signal a pilot can produce.",
        ],
      },
      {
        heading: "Run it: two roles and a weekly rhythm",
        paragraphs: [
          "A pilot needs two named people. The owner is someone on the team who runs the pilot day to day, collects friction, and has the authority to pause it if something threatens real customers. The fixer is whoever can change the system quickly — a developer, the vendor, or whoever configured the tool. The single biggest predictor of a useful pilot is the speed of the loop between these two: friction reported on Tuesday and fixed by Thursday builds trust; friction that sits for three weeks teaches the team the tool cannot be influenced, and they stop reporting.",
          "Keep the ceremony light. A shared friction list anyone can add to, a fifteen-minute weekly review of what was added and what was fixed, and a rule that during the pilot, pilot work happens only in the new system — running both systems in parallel for the same jobs doubles the work and guarantees resentment. Expect week one to be slower than the old way. Note it, tell the team it is expected, and measure the trend rather than the first impression.",
        ],
      },
      {
        heading: "Decide like you said you would",
        diagramId: "pilot-decision",
        paragraphs: [
          "At the end of the period, hold the decision meeting the pilot was pointed at. Three outcomes are on the table. Expand: the criteria were met, so widen the slice — the next location, the next team — reusing the same pilot discipline at each step. Adjust: the idea works but something specific does not; fix that one thing and extend the pilot briefly. Stop: the criteria were not met and the fixes are not small. Stopping after three weeks and a modest cost is a success of the process — the same discovery after a full rollout would have cost ten times more.",
          "Whatever the outcome, write down three sentences: what was tested, what happened, what was decided. This tiny document is disproportionately valuable — it stops the same tool being re-proposed next year on enthusiasm alone, and it turns each pilot into organizational memory instead of a forgotten experiment.",
        ],
      },
    ],
    faq: [
      {
        question: "How long should a pilot run?",
        answer:
          "Long enough to cover a few full cycles of the workflow, including the exceptions — for most operational tools that is two to four weeks. Shorter tests measure first impressions, not fit. If a tool needs three months to show value, that is worth knowing, but structure it as staged pilots with checkpoints rather than one long leap of faith.",
      },
      {
        question: "Should we pilot two competing tools at once?",
        answer:
          "Sequentially, not simultaneously. Splitting the team across two tools halves the signal from each and doubles the confusion. Pick the likelier candidate, pilot it properly, and keep the runner-up as the next pilot if the first one stops.",
      },
      {
        question: "What if the team resists using the new system at all?",
        answer:
          "Treat resistance as data. It usually means the tool adds work for the people using it while the benefit lands elsewhere — the classic reason systems die after rollout. Ask what the tool costs them per task, fix that if you can, and if you cannot, the pilot has answered the question honestly.",
      },
    ],
  },
  {
    slug: "ai-features-for-small-business-software",
    datePublished: "2026-07-06",
    dateModified: "2026-07-06",
    title: "Where AI actually helps in small business software",
    description:
      "Past the hype: the specific jobs where AI features earn their cost in operational tools, the places they cause quiet damage, and how to add them safely.",
    readTime: "10 min read",
    sections: [
      {
        heading: "Skip the hype in both directions",
        paragraphs: [
          "Small businesses currently hear two stories about AI. One says every tool must have it or the business is falling behind. The other says it is all hype and hallucinations. Both are lazy. The accurate picture is narrower and more useful: AI is now genuinely good at a specific family of tasks — reading, summarizing, drafting, extracting, and classifying messy human language — and still unreliable as an unsupervised decision-maker.",
          "That distinction does most of the work in deciding where AI belongs in an operational tool. The question is never \"should our software use AI?\" It is \"which steps in our workflow involve a person reading something messy and turning it into something structured — and what happens if that step is occasionally wrong?\" Where errors are cheap and reviewable, AI is often a bargain. Where errors are expensive and invisible, it is a liability wearing a feature's clothes.",
        ],
      },
      {
        heading: "The jobs where AI earns its keep",
        paragraphs: [
          "In the systems WizeApps builds — intake flows, booking systems, internal trackers — the same handful of AI applications keep proving worthwhile, because they sit at the messy boundary between human language and structured data.",
        ],
        bullets: [
          {
            label: "Structuring incoming requests",
            text: "A customer writes three paragraphs by email or WhatsApp; AI extracts the service, the urgency, the contact details, and drops a structured request into the queue. The person still decides — they just stop retyping.",
          },
          {
            label: "Drafting replies and follow-ups",
            text: "First drafts of quotes, confirmations, and answers to common questions, written in your tone, edited by a human before sending. Cuts response time dramatically without removing the human from the conversation.",
          },
          {
            label: "Summarizing history",
            text: "Before a call, a three-line summary of a client's past bookings, issues, and preferences — assembled from notes nobody has time to reread. Cheap to generate, immediately felt.",
          },
          {
            label: "Categorizing and routing",
            text: "Tagging inbound messages as booking, complaint, invoice question, or spam, and routing them to the right person. Classification is one of the most reliable things current models do.",
          },
          {
            label: "Search that understands meaning",
            text: "Finding 'the client who complained about the delivery gate code' in your own notes, without remembering the exact words used at the time.",
          },
        ],
      },
      {
        heading: "Where AI quietly causes damage",
        paragraphs: [
          "The failures worth worrying about are not the obvious ones. Nobody lets a chatbot sign contracts. The damage comes from plausible-looking output entering records unreviewed: an extracted phone number with two digits swapped, a summary stating a customer confirmed when they asked a question, a confident answer about a policy that does not exist. Each error is small; the cost is that the team stops trusting the data, and a system nobody trusts is worse than no system.",
          "Three placements deserve particular caution. Customer-facing AI with no human review — an assistant that misquotes a price to one customer costs more trust than it saves in staff time. Compliance-adjacent language — anything touching health, legal, or financial claims needs a person who is accountable for the words. And silent automation — AI that acts without leaving a visible trace of what it did and why, which turns every small error into a mystery hunt.",
        ],
      },
      {
        heading: "The pattern that works: draft, don't decide",
        diagramId: "draft-dont-decide",
        paragraphs: [
          "Almost every safe, high-value AI feature in operational software follows one pattern: the AI produces a draft — an extraction, a summary, a suggested reply, a proposed category — and a person confirms it with one glance and one click. The person stays accountable; the AI removes the typing and the searching. Review takes seconds; the work it replaces took minutes. That gap is the entire business case, and it is usually enough.",
          "The pattern has a second virtue: it generates its own evidence. Because people confirm or correct each draft, you learn the real accuracy rate on your data within weeks. Where corrections are rare, you can consider automating that step fully, with spot checks. Where corrections are common, the AI stays a drafting assistant — still useful, honestly scoped. Compare that with launching full automation on faith and discovering the error rate from angry customers.",
        ],
      },
      {
        heading: "Adding AI to a system you already have",
        paragraphs: [
          "AI features are usually additions to a workflow, not replacements for one. If you already have a booking system or an intake flow, the practical path is to identify the single most annoying reading-or-writing step, add one draft-don't-decide feature there, and measure corrections for a month. The integration is typically an API call to a model provider from your existing backend — for most small systems this is days of work, not months.",
          "Two cost notes worth knowing. Model usage is priced per amount of text processed, and for operational volumes — hundreds of requests a day, not millions — the monthly bill is usually a rounding error next to the staff time saved; a pilot answers this with your real numbers. And ask where your data goes: reputable providers offer terms under which your customers' messages are not used to train their models. That belongs in your privacy policy either way.",
        ],
      },
      {
        heading: "Questions that separate signal from sales pitch",
        paragraphs: [
          "When a vendor or developer proposes an AI feature, a few questions cut through the label to the substance. They are the same questions this guide has been circling, compressed into a checklist you can use in a meeting.",
        ],
        bullets: [
          {
            label: "What exactly does it read, and what does it produce?",
            text: "A concrete answer — 'it reads inbound emails and produces a structured request' — is a feature. 'It leverages AI to optimize your workflow' is a brochure.",
          },
          {
            label: "Who reviews the output?",
            text: "If the answer is nobody, ask what a wrong output costs and how you would notice it happened.",
          },
          {
            label: "What is the correction rate on our data?",
            text: "Nobody knows before a pilot. A vendor claiming certainty without one is guessing on your behalf.",
          },
          {
            label: "What happens without the AI?",
            text: "Good designs degrade to the manual path when the model is down or wrong. If the workflow collapses without it, the dependency deserves more thought.",
          },
        ],
      },
    ],
    faq: [
      {
        question: "Is AI too expensive for a small business tool?",
        answer:
          "Usually the opposite: at small-business volumes, model usage costs are typically small compared to the staff time the feature saves. The costs that matter are the build cost of the feature and the review time — which is why starting with one narrow feature and measuring is the sensible path.",
      },
      {
        question: "Can we just use a general chatbot instead of building anything?",
        answer:
          "For drafting emails and answering general questions, yes — and many teams should start there. A built-in feature earns its cost when the AI needs your data (booking history, client notes, service rules) and needs to write results back into your system rather than into a chat window someone copies from.",
      },
      {
        question: "Do we need to tell customers we use AI?",
        answer:
          "If AI talks to customers directly, disclose it — pretending a bot is a person is a trust risk and, in some places, a regulatory one. For internal drafting where a human reviews and sends, disclosure is not generally expected, but your privacy policy should reflect any customer data shared with a model provider.",
      },
    ],
  },
  {
    slug: "software-project-glossary",
    datePublished: "2026-07-06",
    dateModified: "2026-07-06",
    title: "A plain-language glossary for software projects",
    description:
      "The terms you will actually hear in proposals, quotes, and check-in meetings — explained in one breath each, with what they mean for your money and your decisions.",
    readTime: "12 min read",
    sections: [
      {
        heading: "Why this glossary exists",
        paragraphs: [
          "Every field has jargon, but software jargon has a particular cost: it appears in documents you are asked to approve and invoices you are asked to pay. Nodding through a term you half-understand in a kickoff meeting is how scope disputes are born three months later.",
          "This glossary covers the terms that actually appear in proposals, quotes, and progress meetings for small business software projects. Each entry gives the plain meaning first, then — where it matters — what the term implies for your budget or your decisions. It is deliberately opinionated about that second part, because the definition is rarely the thing that bites.",
        ],
      },
      {
        heading: "The shape of the product",
        paragraphs: [
          "These terms describe what kind of thing is being built. They matter because they set expectations about cost, timeline, and what 'done' looks like.",
        ],
        bullets: [
          {
            label: "MVP (minimum viable product)",
            text: "The smallest version of a product that can test the core idea with real users. Budget implication: an MVP that takes six months is not an MVP; the word is doing marketing work in that sentence.",
          },
          {
            label: "Prototype",
            text: "A demonstration of an idea — often clickable screens with nothing real behind them. Useful for alignment; not a head start on the build. Do not pay for a prototype expecting version one minus polish.",
          },
          {
            label: "Web app",
            text: "Software used in a browser, no installation. Usually the cheapest serious option and the easiest to update for everyone at once.",
          },
          {
            label: "Native app",
            text: "Software installed from an app store, built specifically for iPhone or Android. Best access to notifications, camera, and offline use; typically the costliest path because each platform is its own build.",
          },
          {
            label: "PWA (progressive web app)",
            text: "A web app that behaves somewhat like an installed app — home screen icon, some offline ability. A middle path worth asking about before committing to native.",
          },
          {
            label: "CMS (content management system)",
            text: "The admin panel through which non-developers edit website content. If your team will update text or images, the words 'includes a CMS' — or their absence — belong in the quote.",
          },
        ],
      },
      {
        heading: "The parts you can't see",
        paragraphs: [
          "Most of a software budget goes to things that never appear on screen. These are the terms for them.",
        ],
        bullets: [
          {
            label: "Frontend",
            text: "Everything the user sees and clicks. When people praise how software 'looks', they mean the frontend.",
          },
          {
            label: "Backend",
            text: "The logic and storage behind the screens — where bookings are saved, rules are enforced, and reminders are triggered. Usually the majority of the work, and invisible in a demo.",
          },
          {
            label: "Database",
            text: "Where the data lives: customers, bookings, jobs, messages. The key question for you is not which database, but who can access it and how it is backed up.",
          },
          {
            label: "API (application programming interface)",
            text: "The doorway one system offers another. 'It has an API' means other software can connect to it; 'we'll use their API' means your system will depend on someone else's doorway staying open.",
          },
          {
            label: "Integration",
            text: "Connecting your system to another — calendar, payments, accounting, WhatsApp. Each integration is real work and a real ongoing dependency; a quote that lists features but not integrations is incomplete.",
          },
          {
            label: "Hosting / the cloud",
            text: "The rented computers your software runs on. A modest monthly cost that continues forever, in an account you — not your developer — should own.",
          },
        ],
      },
      {
        heading: "The words in the quote",
        paragraphs: [
          "These are the commercial terms — the ones that decide who pays when reality diverges from the plan.",
        ],
        bullets: [
          {
            label: "Scope",
            text: "The agreed list of what is included. The single most important word in the project: almost every dispute is a scope dispute wearing a costume.",
          },
          {
            label: "Scope creep",
            text: "The gradual expansion of that list through small, reasonable-sounding additions. Not villainy — entropy. Managed by having a written scope and a named process for changes.",
          },
          {
            label: "Change request",
            text: "The formal name for 'can we also add…' after work has started. Healthy projects expect them and price them openly; unhealthy projects absorb them silently until the relationship snaps.",
          },
          {
            label: "Fixed price vs. time and materials",
            text: "Fixed price buys certainty and punishes change; time and materials buys flexibility and requires trust. For a first engagement, a small fixed-scope phase is usually the safest structure.",
          },
          {
            label: "Milestone",
            text: "A defined checkpoint, usually tied to payment. Good milestones are demonstrable ('booking flow works end to end'), not calendrical ('end of March').",
          },
          {
            label: "Retainer",
            text: "A monthly fee reserving ongoing time for fixes and small changes after launch. The alternative is paying emergency rates for attention when something breaks.",
          },
        ],
      },
      {
        heading: "The words in the check-in meeting",
        paragraphs: [
          "Terms you will hear while the work is underway — knowing them lets you follow a progress update without pretending.",
        ],
        bullets: [
          {
            label: "Sprint",
            text: "A short, fixed work cycle, commonly two weeks, ending with something reviewable. If you are shown nothing at the end of a sprint, ask why — the whole point is a steady rhythm of visible progress.",
          },
          {
            label: "Staging",
            text: "A private copy of the system where changes are tried before going live. 'It's on staging' means 'you can test it; customers can't see it yet'.",
          },
          {
            label: "Production",
            text: "The live system real customers use. 'Deployed to production' means the change is now real.",
          },
          {
            label: "Bug vs. feature request",
            text: "A bug is the software failing to do what was agreed; a feature request is asking it to do something new. The line matters because fixing bugs is usually included and new features usually are not — disagreements here are really scope disagreements.",
          },
          {
            label: "Technical debt",
            text: "Shortcuts taken to ship faster that make future changes slower until paid down. Some debt is rational; unmentioned debt is the kind that surprises you in next year's quotes.",
          },
          {
            label: "QA (quality assurance)",
            text: "Systematic testing before release. If a quote contains no testing time at all, the testing will happen anyway — performed by your customers.",
          },
        ],
      },
      {
        heading: "How to use jargon you don't know",
        paragraphs: [
          "No glossary is complete, and new terms arrive constantly. The durable skill is not memorizing definitions — it is the habit of asking, in the meeting, \"what does that mean for this project, in plain words?\" Any builder worth hiring answers that question happily and concretely. Evasive or condescending answers to plain questions are among the most reliable early warnings you will ever get.",
          "It may help to know the dynamic runs both ways: good developers prefer clients who ask. A client who understands what staging is, why scope is written down, and what a change request costs is easier to serve well. Asking plain questions does not mark you as naive — it marks you as the kind of client whose project tends to go smoothly.",
        ],
      },
    ],
    faq: [
      {
        question: "Do I need to learn technical terms before hiring a developer?",
        answer:
          "No — you need enough to follow the money and the decisions, which is roughly the contents of this page. Deep technical vocabulary is the builder's job. Your job is refusing to approve sentences you do not understand.",
      },
      {
        question: "A proposal is full of terms not on this page. Bad sign?",
        answer:
          "Not necessarily — some projects genuinely need specialized language. The test is what happens when you ask for plain-language translation. A good builder provides it without friction; a proposal that stays foggy after questions is foggy on purpose or foggy in the author's own head. Both are warnings.",
      },
      {
        question: "What is the single most important term here?",
        answer:
          "Scope. Nearly every software dispute — budget, timeline, disappointment — is at bottom a disagreement about what was included. A written scope, plus a named process for changing it, prevents more pain than any other habit on this page.",
      },
    ],
  },
  {
    slug: "ai-matching-without-ml-team",
    datePublished: "2026-07-07",
    dateModified: "2026-07-07",
    title: "How to build AI-powered matching without an ML team",
    description:
      "The real architecture behind a two-sided matching product — structured statements, embeddings, score gates, and snapshot tables — written from an actual build, not a tutorial.",
    readTime: "10 min read",
    sections: [
      {
        heading: "Matching is not a search bar with extra steps",
        paragraphs: [
          "The instinct when building any two-sided matching product — candidates and jobs, providers and requests, buyers and listings — is to treat it like search: index everything, embed everything, return the closest vectors. This works for a demo and falls apart in production, because matching has a requirement search does not: someone has to trust the result enough to act on it. A recruiter emailing a mismatched candidate, or a customer routed to the wrong provider, costs more than a search result that scrolls past unread.",
          "This is the architecture we actually built for a two-sided recruitment platform, matching candidates to open roles. None of it needed a machine learning team, a labeled training set, or a model we trained ourselves. It needed a few structural decisions made early, before any embedding was generated.",
        ],
      },
      {
        heading: "Structured statements beat one big blob",
        diagramId: "matching-architecture",
        paragraphs: [
          "The obvious approach is to take a job description or a CV, embed the whole thing as one block of text, and compare vectors. It works badly, because a single embedding averages everything together — seniority, location, tone, formatting noise — into one point in space, and two very different postings can land suspiciously close just because they share generic phrasing.",
          "Instead, jobs and candidates are synced into statement-part tables first: title, required skills, optional skills, seniority, location, and a few other fields, each broken out as its own short statement. Each part gets its own embedding, generated with OpenAI's text-embedding-3-small. Comparing part-to-part instead of blob-to-blob is what makes the matches explainable later — you can point at exactly which part matched well and which did not, instead of shrugging at a single opaque similarity score.",
        ],
      },
      {
        heading: "A similarity score is not a verdict — use gates",
        paragraphs: [
          "The second mistake is trusting a single cosine similarity number as the final answer. A candidate can be semantically close to a role — same industry, similar language, overlapping vocabulary — and still fail a hard requirement: wrong seniority, wrong location, missing a required certification, or simply not available in the role's time window.",
          "The matching service in this build computes several scores rather than one: a title score, a required-skills score, an optional-skills score, and a set of time gates, then combines them into pass/fail reasons alongside the final ranking. When a match is shown to a recruiter, the system can say why it passed or failed, not just how close the vectors were. That single change — gates plus reasons, not just a score — is what turns a similarity search into something a recruiter is willing to act on.",
        ],
      },
      {
        heading: "Recompute-on-view does not survive real usage",
        paragraphs: [
          "The first version of any matching feature usually recalculates matches live, every time someone opens a screen: fetch candidates, fetch jobs, embed anything new, score everything, sort, render. It feels fine with ten records in a demo and falls over the moment a recruiter has real volume — every page load turns into a full scoring pass across the dataset.",
          "The fix was a snapshot model: a daily rebuild job walks new and changed jobs and candidates, computes scores, and writes the results into snapshot tables. Candidate and job match views then just read from those tables — fast, repeatable, and consistent within a day, at the cost of matches not being instantly live to the second. For recruiting, where nobody expects a response within seconds anyway, that trade is an easy one. For a use case with tighter real-time expectations, the same pattern still works — the rebuild just needs to run more often, or trigger on write instead of on a schedule.",
        ],
      },
      {
        heading: "What data quality actually breaks",
        paragraphs: [
          "Job and candidate data rarely arrive in the same shape. A job posting might be a clean structured form; a candidate might be a CV PDF, a pasted LinkedIn summary, or three sentences typed into a quick-apply box. The sync layer that turns raw input into statement parts has to validate, normalize, and safely rebuild — silently skipping a malformed record is worse than failing loudly, because a candidate who never gets matched looks identical to a candidate with no good matches.",
          "In practice, most of the ongoing engineering effort in a system like this goes here, not into the embedding or scoring logic. The embeddings and gates were built once and rarely change. The normalization layer keeps needing small fixes as new, slightly-different input shapes show up — a CV with no clear job title line, a posting with the seniority buried in the free-text description instead of a field. Budget for that maintenance up front instead of treating the matching logic as the finish line.",
        ],
      },
      {
        heading: "What we would tell a small team starting this today",
        paragraphs: [
          "You do not need a vector database, a training pipeline, or an ML hire to ship a first version of this. A Postgres table with an embedding column, a straightforward cosine similarity query, and a scheduled rebuild script cover a real amount of scale before anything more specialized is justified. Start with the structural decisions — structured statements over blobs, gates over a bare score, snapshots over recompute-on-view — because those are expensive to retrofit later and cheap to get right from day one.",
          "The embedding API cost itself is rarely the constraint at small-to-medium scale; a few thousand records re-embedded occasionally is a rounding error next to engineering time. The real cost is the normalization layer described above, and the discipline to keep showing users *why* a match happened rather than just *that* it happened.",
        ],
        relatedCaseStudy: {
          href: "/case-studies/djob-agency",
          label: "Real build example",
          title: "See the full Djob build teardown",
          text: "This architecture is the matching layer from a real, live two-sided recruitment platform — decisions, what shipped, and what we'd improve next time.",
        },
      },
    ],
    faq: [
      {
        question: "Do I need a dedicated vector database?",
        answer:
          "Not at small-to-medium scale. Postgres with an embedding column and a similarity query handles a real amount of volume before a dedicated vector database earns its added operational complexity. Move to one only once query latency or dataset size actually demands it, not in anticipation of scale you don't have yet.",
      },
      {
        question: "How much do the embeddings cost to run?",
        answer:
          "At the volumes most small platforms deal with — thousands, not millions, of records — embedding cost is typically a small fraction of infrastructure spend, closer to a rounding error than a budget line. Re-embedding only changed records, not the whole dataset, keeps it that way.",
      },
      {
        question: "Can this pattern work outside of recruiting?",
        answer:
          "Yes — the same shape applies to any two-sided matching problem: providers and service requests, listings and buyers, mentors and mentees. The specific fields in the structured statements change; the pattern of statements-then-embeddings-then-gates-then-snapshots does not.",
      },
    ],
  },
];

export const publicPaths = [
  "/",
  "/he",
  "/about",
  "/services",
  ...services.map((service) => `/services/${service.slug}`),
  "/case-studies",
  ...realProjects.map((project) => project.detailHref),
  "/resources",
  ...resources.map((resource) => `/resources/${resource.slug}`),
  "/contact",
  "/privacy",
  "/terms",
  "/ads.txt",
];
