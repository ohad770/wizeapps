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
  },
  {
    slug: "what-to-build-first-in-an-mvp",
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
        paragraphs: [
          "The real output of an MVP is not the software. It is evidence: do people understand the offer, where do they drop off, what do they email you asking for, which part of the promise do they actually value, and what are staff quietly doing by hand to keep things working? A first version that produces these answers in three weeks is worth far more than a polished build that takes six months to tell you the same thing.",
          "Plan the MVP with the next decision in mind. Before you start, write down what result would convince you to invest more, what result would make you change direction, and what result would tell you to stop. Deciding this in advance protects you from the most common trap in early products: building more because it is easier than admitting you have not yet proven the idea.",
        ],
      },
    ],
  },
  {
    slug: "manual-processes-that-should-not-stay-manual",
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
        paragraphs: [
          "Noticing these signals does not mean rushing to build. It means you have found a process worth examining closely. Start by writing down how the work actually flows today, where it slows down, and which steps are judgment versus handoff. That map alone often reveals quick fixes that need no software at all.",
          "Where a system does make sense, keep the first version small: target the single most painful signal, automate only the predictable steps, and leave the judgment with people. The aim is never to remove humans from the work — it is to stop spending them on the parts a system handles better, so their time goes to the parts only a person can do.",
        ],
      },
    ],
  },
  {
    slug: "how-to-prepare-for-a-software-build",
    title: "How to prepare for a software build without writing a spec",
    description:
      "The plain-language information that helps a build start quickly and accurately, even when you are not technical and have never commissioned software before.",
    readTime: "8 min read",
    sections: [
      {
        heading: "You do not need a spec — you need clarity",
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
  {
    slug: "how-much-does-a-small-business-app-cost",
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
  },
  {
    slug: "no-code-vs-custom-code",
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
  },
  {
    slug: "build-vs-buy-software",
    title: "Build vs. buy: when off-the-shelf software is the right call",
    description:
      "How to decide whether to use existing software or build your own — and why building should usually be your second choice, not your first.",
    readTime: "8 min read",
    sections: [
      {
        heading: "Building should be the exception, not the default",
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
        paragraphs: [
          "Building is justified when existing tools genuinely cannot do the job, or when the software itself is your advantage. If your workflow is unusual enough that every product forces awkward compromises, if you are stitching together five tools with manual copy-paste between them, or if the way you operate is a real competitive edge, custom software can be transformative rather than indulgent.",
          "The clearest case for building is when the software is the product — when what you sell is the application itself. In that situation, off-the-shelf tools cannot deliver your value, and owning the product is the whole point. Outside of that, building is usually about removing a specific, costly friction that no existing tool resolves, not about preferring something bespoke.",
        ],
      },
      {
        heading: "The path most businesses should take",
        paragraphs: [
          "In practice, the best answer is rarely pure build or pure buy. Most businesses are best served by buying mature tools for the solved problems and building only the thin layer that is genuinely specific to them — often a small system that connects existing tools together and automates the handoffs between them.",
          "Before commissioning any custom software, do a serious search for an existing product first, and try to live with it honestly. If a tool gets you 80% of the way, the remaining 20% may not be worth a custom build at all. And if you do build, aim to build the smallest piece that existing tools cannot provide, rather than recreating capabilities you could have rented. The goal is leverage, not ownership for its own sake.",
        ],
      },
    ],
  },
  {
    slug: "how-to-choose-a-developer-or-agency",
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
