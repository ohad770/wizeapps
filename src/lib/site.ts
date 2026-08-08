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

type ServiceBullet = {
  label: string;
  text: string;
};

type ServiceSection = {
  heading: string;
  paragraphs: string[];
  bullets?: ServiceBullet[];
  bulletsHeading?: string;
  image?: SectionImage;
};

type ServiceWorkedExample = {
  heading: string;
  context: string;
  steps?: ServiceBullet[];
  result?: string;
};

type ServiceFaq = {
  question: string;
  answer: string;
};

type Service = {
  slug: string;
  title: string;
  summary: string;
  bestFor: string;
  deliverables: string[];
  sections?: ServiceSection[];
  workedExample?: ServiceWorkedExample;
  relatedProject?: {
    href: string;
    label: string;
    title: string;
    text: string;
  };
  faq?: ServiceFaq[];
};

export const services: Service[] = [
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
    sections: [
      {
        heading: "What the system has to get right before it sends anything",
        paragraphs: [
          "The first job is to write a booking down in one place, in a shape the rest of the system can act on: who, which service, which slot, which staff member or location, and how to reach them. The confirmation, the reminder, the reschedule link and the staff day view all read from that one record. If the record is incomplete, or lives in two places, no amount of messaging automation fixes it.",
          "That is also why the phone does not have to go away. A booking taken at the counter or on a call gets entered into the same record as an online one, which is what makes the calendar worth trusting. A system that only knows about its own online bookings is the one staff quietly route around, and then you are paying for software and still keeping a notebook.",
        ],
      },
      {
        heading: "The decisions that actually shape the build",
        paragraphs: [
          "Most of the build time goes into rules that are obvious to your staff and invisible to a developer until somebody writes them down. On the Domino Ra'anana ordering site, which took about two months and has been in daily use for more than five years, the rules that mattered were not visual at all.",
        ],
        bulletsHeading: "Where the real work sits",
        bullets: [
          {
            label: "Who is allowed to hold a slot",
            text: "Is every request accepted automatically, or do new customers, large groups, or particular services need a person to approve them first?",
          },
          {
            label: "Eligibility, not just display",
            text: "Domino's delivery zones each carry a delivery cost and a minimum order amount. Those are checkout rules: they decide whether an order can be placed at all, not just what the page shows.",
          },
          {
            label: "The order of operations around money",
            text: "A card order there creates a pending order and a Cardcom payment URL first. Only after payment succeeds does the order update, the emails go out, and the order reach the Aviv POS. Getting that sequence wrong is how you end up with paid orders nobody sees, or unpaid orders in the kitchen.",
          },
          {
            label: "Changes and cancellations",
            text: "How late can a customer move a booking, who can override that, and what happens to a deposit when they do? These are business decisions, and they have to be made before they can be coded.",
          },
        ],
      },
      {
        heading: "Reminders are a scheduling problem, not a messaging problem",
        paragraphs: [
          "Sending one message is easy. Sending the right message to the right person at the right minute, every day, without a queue somebody has to babysit, is the part worth designing. Mincha Time does this in production: a Firebase Cloud Function runs once a minute and looks for a Firestore document at the bucket for the current time, keyed hour_minute, so 13:47 is the document 13_47. If that document is not there, the run does nothing and costs almost nothing.",
          "Two more choices keep it cheap. Users are grouped by rounded latitude and longitude, so the Hebcal zmanim API is called once per location per day instead of once per user. And each run writes tomorrow's bucket for that group after it finishes today's send, so the schedule advances itself one day at a time rather than precomputing a calendar that might need invalidating.",
          "Booking reminders need the same discipline plus the opt-outs. Mincha Time checks two independent flags before every send, a permanent disable and a same-day snooze. A booking reminder needs the equivalent: somebody who has already confirmed, already cancelled, or asked to be left alone should not get the day-before nudge.",
        ],
      },
      {
        heading: "Which language the message goes out in",
        paragraphs: [
          "This matters more than it sounds and it is cheap to get right at the start. Mincha Time sends notification copy in six languages — Hebrew, English, Russian, Spanish, French and Yiddish — chosen from a per-user language field and stored as plain lookup objects rather than through an i18n library. The mechanism is not clever: know the language when the person signs up, then send every outbound message through the same lookup.",
          "For a booking flow aimed at customers in Israel that usually means Hebrew and English, which also means right-to-left layout in the customer-facing screens and in anything you send them. Retrofitting that later touches every template and every screen at once, so it belongs in the first version even if only one language is switched on at launch.",
        ],
      },
      {
        heading: "What version one deliberately leaves out",
        paragraphs: [
          "The fastest way to never launch is to try to cover every service, location and exception at once. A first version usually covers one location, one group of services, one reminder pattern and one payment path. Deposits, waitlists, recurring appointments, multi-staff calendars and no-show reporting are all easier to add once you can see which of them your bookings actually need.",
          "Leaving something out is not the same as ignoring it. Domino's checkout calculates pricing and delivery rules in one place, which is why adding a zone or a new deal is a small change instead of a rewrite. The parts still worth improving are written down in that case study, including moving more checkout validation into shared functions that can be tested without rendering the whole checkout page.",
        ],
      },
      {
        heading: "How long a build like this takes",
        paragraphs: [
          "The honest anchor is the Domino build: about two months for a public menu with search and category filtering, deals that carry their own selectable options, a cart, delivery and pickup checkout, card payment through Cardcom, a separate cash path, customer and admin emails with full order details, the POS handoff, and the admin screens behind all of it.",
          "A booking flow that stops before payments and before an external system handoff is a smaller job than that. Adding either one moves it back toward that shape. For contrast, Mincha Time's first version, including the minute-resolution reminder engine described above, was about a month, because it had one calculation, one reminder and no payment step. Scope is what moves the date.",
        ],
      },
    ],
    workedExample: {
      heading: "Worked example: an ordering flow end to end",
      context:
        "From outside, the Domino Ra'anana site is a menu. The build is the checkout. Here is the path an order takes, and where a person is still involved.",
      steps: [
        {
          label: "Browse and build the cart",
          text: "Active products and active deals share one cart, with deals shown first. Both write structured cart items so totals are calculated the same way. Cart, delivery method, chosen zone, payment method and checkout form fields persist in localStorage so a customer does not lose the order by reloading.",
        },
        {
          label: "Apply the zone rules",
          text: "The selected delivery zone sets the delivery cost and the minimum order amount, and those decide whether checkout can continue at all.",
        },
        {
          label: "Take the payment",
          text: "A card order creates a pending order plus a Cardcom payment URL. Cash orders take a separate path that skips this step entirely.",
        },
        {
          label: "Confirm, then hand off",
          text: "On payment success the order status updates, customer and admin emails go out with the full order, the cart clears, and the order is delivered to the Aviv POS.",
        },
      ],
      result:
        "The branch owns an ordering channel instead of renting one from a marketplace app, and orders reach the register without anyone retyping them. Owner Eran Atra has been running it for more than five years.",
    },
    relatedProject: {
      href: "/case-studies/domino-ranana",
      label: "Real build",
      title: "Domino Ra'anana: ordering, payment, and the POS handoff",
      text: "The full teardown, including the parts that were harder than they look: deal structure in the cart, asynchronous payment status, and delivery-zone rules that gate checkout.",
    },
    faq: [
      {
        question: "Can we keep taking bookings by phone?",
        answer:
          "Yes, and most businesses should for a while. The change is where a phone booking ends up: staff enter it into the same record as the online ones, so reminders, cancellations and the day view are complete. A system that only knows about its own online bookings is the one people work around.",
      },
      {
        question: "Do we have to replace the software we already use?",
        answer:
          "Not usually. The Domino site keeps its own order records and hands each paid order to the Aviv POS, so the branch kept the register it already had. Owning the customer-facing flow and handing off to the existing system of record is normally cheaper and far less disruptive than replacing something your team already trusts.",
      },
      {
        question: "How do we keep reminders from annoying people?",
        answer:
          "Give people more than one way out and check it before every send. Mincha Time uses two independent flags, a permanent disable and a same-day snooze, so somebody can quiet one day without unsubscribing forever. Booking reminders also need a one-tap cancel, because a cancelled slot you can refill is more useful than a silent no-show.",
      },
      {
        question: "What happens if a confirmation message fails to send?",
        answer:
          "The booking is written first and messaging is a separate step, so a failed send never loses the appointment. The staff view is where it surfaces: if a customer has no confirmation, somebody can see that and call. Payment-linked flows need the same care in the other direction, which is why Domino only sends an order onward after the payment result comes back.",
      },
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
    sections: [
      {
        heading: "Intake is a data-shape decision, not a form-design decision",
        paragraphs: [
          "Any intake form is easy to build and easy to get wrong. What decides whether it was worth building is what you intend to do with the answers: sort them, route them, compare them, match them against something else, or simply read them. One free-text box collects everything and supports none of that. Separate fields collect less and can be acted on.",
          "So the first conversation is about the decisions the intake has to support. Who should handle this? Is it in scope for us? Which questions can we stop asking on the first call? Each answer becomes a field with a small set of allowed values, and everything that does not serve a decision goes into one optional notes box at the end.",
        ],
      },
      {
        heading: "Djob is the long version of this argument",
        paragraphs: [
          "Djob is a two-sided recruiting workspace that took about six months, and intake quality is the whole product. Candidates and jobs are not stored as one blob of text each. They are synced into statement-part tables, and OpenAI's text-embedding-3-small runs over those structured statements rather than over a CV as a single document.",
          "That choice is what makes the result explainable. Cosine similarity gives a closeness score, and a score on its own is not a decision, because a candidate can read as close to a role and still fail a hard requirement. So the matching service computes a title score, a required score, an optional score and time gates, and it keeps the pass or fail reason. A recruiter can see why something matched, not only that it did.",
          "The last piece is performance. Match views read from snapshot tables rebuilt daily instead of recalculating every candidate against every job when a page opens. Same intake data, precomputed once. Djob is live at djob.agency with public plans starting at $29/month.",
        ],
      },
      {
        heading: "Short form, complete record",
        paragraphs: [
          "There is a real tension in intake: the shorter the form, the more people finish it, and the less you know when you follow up. Djob handles it by not treating the two as the same object. The public job card supports a quick apply with no CV, but the modal still tries to find or create a full candidate record, so an applicant does not end up stranded in a disconnected applications table.",
          "The same approach works for a service business. Ask a handful of things on the public form, and let the internal record carry the rest of the detail your team fills in as the conversation goes on. Enriching a record after first contact is normal. Losing the enquiry because the form demanded a budget on the first screen is avoidable.",
        ],
        bulletsHeading: "What a review queue needs to be trusted",
        bullets: [
          {
            label: "One list, in the order it should be worked",
            text: "Everything that arrived, showing only the fields that decide who picks it up next.",
          },
          {
            label: "A state you can see",
            text: "New, waiting on the client, qualified, declined. A state that exists only in somebody's head will not be trusted by anybody else.",
          },
          {
            label: "A reason attached to every rejection",
            text: "Djob keeps pass and fail reasons on every match for exactly this purpose. Rejections without reasons make it impossible to tell whether your rules are too strict.",
          },
          {
            label: "Follow-up that does not rely on memory",
            text: "Djob tracks whether a matched role was emailed or sent over WhatsApp, so two people do not chase the same person twice.",
          },
        ],
      },
      {
        heading: "What the first version leaves out",
        paragraphs: [
          "Version one is usually one form, one set of routing rules, one review queue and one follow-up message. What waits: dashboards nobody has a question for yet, an integration for every channel enquiries currently arrive through, and automated replies that need judgment to be correct.",
          "Djob is a fair warning about the cost of getting the shape wrong. Its matching layer had to be reworked into the snapshot model because recruiter screens needed fast, repeatable rankings. That kind of change is cheap when the intake data is already structured into separate statements, and expensive when everything was stored as prose.",
        ],
      },
      {
        heading: "How long this takes",
        paragraphs: [
          "A single intake flow — form, qualification rules, internal routing, a review queue, a follow-up email — is a much smaller job than Djob, which took about six months because it covered two audiences plus the matching and admin layer between them. It is closer in size to Mincha Time's first version, about a month, when the rules are already clear on day one.",
          "The variable is almost never the form. It is how many exceptions the routing has to respect, and how many other systems the qualified enquiry has to land in.",
        ],
      },
    ],
    workedExample: {
      heading: "Worked example: intake that has to be machine-readable",
      context:
        "Djob's intake exists so that a recruiter can be handed a ranked, explained shortlist instead of a folder of CVs. That requirement reaches all the way back into the form.",
      steps: [
        {
          label: "Capture statements, not paragraphs",
          text: "Job and candidate information is synced into statement-part tables so each requirement and each claim is a separate row that can be scored on its own.",
        },
        {
          label: "Embed the structured parts",
          text: "text-embedding-3-small runs over those statements. Embedding one large blob per record would have made the closeness score impossible to explain afterwards.",
        },
        {
          label: "Gate the score with business rules",
          text: "Title, required and optional scores plus time gates produce a pass or fail with a reason, so semantic closeness cannot overrule a hard requirement.",
        },
        {
          label: "Precompute what the screens read",
          text: "Ranked results live in snapshot tables rebuilt daily, so opening a match view is a read rather than a recalculation.",
        },
        {
          label: "Keep the follow-up state on the record",
          text: "Djob tracks whether a matched role was emailed or sent over WhatsApp, so the record, rather than somebody's memory, is what says a person has already been contacted.",
        },
      ],
      result:
        "Two different audiences work from the same intake data: candidates applying, and recruiters reviewing a shortlist that can explain itself. Covering both sides is what made this a six-month build rather than a one-month one.",
    },
    relatedProject: {
      href: "/case-studies/djob-agency",
      label: "Real build",
      title: "Djob: structured intake, gated matching, snapshot tables",
      text: "The full teardown of the recruiting workspace, including why one match score was never enough and how the sync layer normalises records that arrive in different shapes.",
    },
    faq: [
      {
        question: "How short should the public form be?",
        answer:
          "Short enough that a serious enquiry finishes it in one sitting, structured enough that whoever picks it up knows why it reached them. A useful test: if a field does not change who handles the lead, what you quote, or whether you take the work at all, it can wait for the first conversation.",
      },
      {
        question: "Do we need AI in our intake?",
        answer:
          "Only if you need to compare or rank things at a volume a person cannot. Djob needed it because matching many candidates against many roles by hand is not realistic. A business that receives a handful of enquiries a day gets far more out of clean fields and firm routing rules than out of a model.",
      },
      {
        question: "Most of our leads arrive on WhatsApp and by phone. Does that break this?",
        answer:
          "No, it changes what the first version is for. The form defines the shape of the record, and enquiries that arrive elsewhere get entered into the same record, by staff at first. Automating a specific channel is worth doing once you can see how much of your real volume comes through it.",
      },
      {
        question: "Can the intake write into the tools we already use?",
        answer:
          "Usually. Handing data to an external system is ordinary work: the Domino build sends each paid order to the Aviv POS after Cardcom confirms the payment. What matters is whether the target system has a documented way in, and what should happen when it is briefly unavailable. That second question is the one most plans skip.",
      },
      {
        question: "Is this a CRM?",
        answer:
          "No. It is the front door to whatever you already use to track work. Intake ends at the point where a qualified enquiry becomes a job, a client, or a decline. If your team likes its current CRM, the intake should hand over to it and stop there.",
      },
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
    sections: [
      {
        heading: "An MVP is the smallest version of the loop that can be used for real",
        paragraphs: [
          "A useful first version is not a cheaper copy of the finished product. It is the shortest path through the thing that has to work — the sequence a user repeats to get the value you promised — built well enough that real people can use it without being coached through it.",
          "Writing that loop as a single sentence is the first deliverable, and it is where most scope arguments get settled. Mincha Time's loop was: know where the user is, calculate today's window, remind them before it closes. Everything else a prayer-time app could be — a full siddur, a calendar, community features, a settings-heavy utility — was left out on purpose. That decision is why the first version took about a month.",
        ],
      },
      {
        heading: "Mincha Time: what one month bought",
        image: {
          src: "/case-studies/mincha-time-home.png",
          alt: "The Mincha Time landing page, offering the app for Android and iPhone with a phone mockup showing the current time",
          caption:
            "Mincha Time, live. The first usable version took about a month and did one thing: work out the right time for wherever you are, and tell you before it passes. Everything visible here follows from that one loop.",
          width: 1600,
          height: 1111,
        },
        paragraphs: [
          "The visible half is a landing page with multilingual messaging and a phone-style preview of the two reminder moments. The other half is a scheduled notification engine that has to fire the right message, in the right language, at the right minute, every day, for every location, built on Firebase Cloud Functions, Firestore and Firebase Cloud Messaging, with zmanim from the Hebcal API.",
          "Six languages — Hebrew, English, Russian, Spanish, French and Yiddish — live in a plain translations map keyed by a per-user language field, with no i18n library. A monthly cleanup job removes tokens and records for users inactive more than thirty days. Neither is impressive engineering. Both are much cheaper to include on day one than to retrofit later.",
        ],
        bulletsHeading: "Cheap architecture choices that still hold up",
        bullets: [
          {
            label: "The schedule is data, not infrastructure",
            text: "A function runs every minute and checks whether a Firestore document exists for the current time bucket, keyed hour_minute. No queue service, no per-user cron job, nothing extra to operate.",
          },
          {
            label: "Call the expensive thing once",
            text: "Users are grouped by rounded latitude and longitude, so the Hebcal API is called once per location per day rather than once per user.",
          },
          {
            label: "Let each run schedule the next one",
            text: "After today's send for a location, the same run fetches tomorrow's times and writes tomorrow's bucket. The system moves forward one day at a time instead of precomputing a calendar it might have to throw away.",
          },
          {
            label: "Two independent ways to stop",
            text: "A permanent disable and a same-day snooze, both checked before every send. For anything that sends messages, opt-outs are not a version-two feature.",
          },
        ],
      },
      {
        heading: "Where the shortcuts are, and why they were still the right call",
        paragraphs: [
          "Being specific about the seams is part of the work. In Mincha Time the next day's time bucket needs a UTC offset, and that offset is parsed out of the Hebcal response string. It works, and it is the kind of manual parsing that would have to become a proper timezone library if Hebcal ever changed the response format. The per-minute run also fires whether or not anything is due, which is cheap at this scale and is the first thing that would change if the user base grew by an order of magnitude.",
          "Both are written down in the case study rather than hidden. Knowing where a shortcut is means it can be replaced deliberately, when traffic or the roadmap calls for it, instead of being discovered during an outage.",
        ],
      },
      {
        heading: "How long an MVP takes, using builds you can go and look at",
        paragraphs: [
          "Three real durations, all shipped and live. Mincha Time, about one month: one calculation, one reminder, no payment step. Domino Ra'anana, about two months: a public menu, deals with their own options, cart and checkout, card payment through Cardcom, a cash path, customer and admin emails, admin screens and the Aviv POS handoff. Djob, about six months: a two-sided recruiting workspace with embeddings, gated matching, snapshot tables and admin flows on both sides.",
          "None of those is a quote for your project, and none of them is a rate card. They are the shape of the answer. One integration and one user flow is a month-sized problem. Money plus an external system of record is a two-month-sized problem. Two audiences who need different things out of the same data is a six-month-sized problem. If an estimate you are reading sits far off that scale, the useful question is what it contains that Domino's checkout did not.",
        ],
      },
      {
        heading: "What launch day is actually for",
        paragraphs: [
          "The point of shipping early is evidence: which step people abandon, which message they ignore, which feature nobody opens. That is why a first build includes enough admin visibility to operate it — you cannot learn from a product you cannot watch. The list of what to build next comes out of that, and it is usually shorter, and different, from the list you started with.",
        ],
      },
    ],
    workedExample: {
      heading: "Worked example: a first version that had to run unattended",
      context:
        "Mincha Time could not be a clickable prototype, because the whole promise happens when the user is not looking at the app. That constraint decided the scope of the first month.",
      steps: [
        {
          label: "Decide what the product refuses to be",
          text: "Not a siddur, not a calendar, not a community platform. One daily outcome: help somebody know when mincha is relevant where they are, and remind them before it passes.",
        },
        {
          label: "Build the loop, including the unattended half",
          text: "Location, zmanim from Hebcal, and a minute-resolution scheduled send covering both location-group reminders and personal reminder times.",
        },
        {
          label: "Add only the operational necessities",
          text: "Two opt-outs, six languages as lookup objects, and a monthly cleanup for users inactive more than thirty days.",
        },
        {
          label: "Write the known tradeoffs down",
          text: "The offset parsing and the always-on per-minute check are recorded as the first things to revisit, so growth does not turn them into surprises.",
        },
      ],
      result:
        "A live product doing one job reliably, delivered in about a month, with the next round of work already identified rather than guessed at.",
    },
    relatedProject: {
      href: "/case-studies/mincha-time",
      label: "Real build",
      title: "Mincha Time: the one-month first version, in full",
      text: "What shipped, which architecture decisions kept it small, the parts that were tricky, and what would be done differently next time.",
    },
    faq: [
      {
        question: "We already have a no-code prototype. Is that enough?",
        answer:
          "It is often enough to prove people are interested, and not enough to run a business on. Mincha Time and the Domino site both use Base44 alongside their own React front ends, and Mincha adds Firebase Cloud Functions for the scheduled work. The line to watch is whether the next thing you need is a screen or a process that runs when nobody is looking. Prototypes are good at screens.",
      },
      {
        question: "Does an MVP get thrown away once it works?",
        answer:
          "Not necessarily, and it is worth building as though it will not be. The Domino ordering site has been in daily use for more than five years, and the direct connection to the register was added later, after the site had proven itself. A first version that was scoped tightly and written clearly is usually the cheapest thing to extend.",
      },
      {
        question: "What if the MVP shows the idea does not work?",
        answer:
          "Then it did its job at the cheapest point in the project, and it usually points at the nearby problem that is the real one. Finding that out at the scale of a one-month build is the entire reason for keeping the scope tight.",
      },
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
    sections: [
      {
        heading: "The tool exists so the process stops living in one person's head",
        paragraphs: [
          "Most internal processes work fine until two things happen together: volume rises, and the person who holds the process in their head is busy. What breaks is rarely the decision-making. It is the handoff — a step done twice, a step skipped, a status nobody can see without asking somebody.",
          "So an internal tool gets judged on unglamorous questions. Is this the one place the state lives? Can a manager see status without interrupting anybody? Can a new employee follow it without a tutorial? Does it stop people keeping a private spreadsheet on the side? If the answer to the last one is no, the tool is not finished yet.",
        ],
      },
      {
        heading: "Admin screens are most of the build",
        image: {
          src: "/case-studies/domino-products.png",
          alt: "Product management screen listing menu items with photo, category, size, price, a toppings flag and an availability switch",
          caption:
            "One of the management screens behind a live ordering site. Every row is something the team changes without a developer: the price, the size, whether toppings apply, whether the item is available at all, and the code that ties it to the till.",
          width: 1600,
          height: 711,
        },
        paragraphs: [
          "This is easy to underestimate, because the admin side is invisible from outside. The Domino Ra'anana project, about two months in total, shipped management screens for products, deals, categories, pizza sizes, beverages, sauces, delivery zones, site settings and orders. That list is the operational reality of a pizza branch, and every entry is something staff need to change themselves without calling a developer.",
          "The design question inside each screen is which rules the tool enforces and which it leaves to a person. Delivery zones carry a delivery cost and a minimum order amount, so the tool enforces them at checkout. Deals can contain several products with their own selectable options, so the data model has to preserve that structure instead of flattening a deal into a discounted line item — otherwise the admin screen quietly loses the ability to express real promotions.",
        ],
      },
      {
        heading: "Handoffs to systems you do not control",
        paragraphs: [
          "The most valuable part of an internal tool is often the point where it hands work to something else. On the Domino build a card order creates a pending order and a Cardcom payment URL, and only a successful payment triggers the rest: the status update, the customer and admin emails, and delivery of the order to the Aviv POS. Orders arrive at the register without anybody retyping them, which the owner, Eran Atra, describes as the biggest change the site has had.",
          "Every handoff needs three answers before it is built: what proves the other system accepted the work, what happens when it does not, and who finds out. Skipping the second and third is how an integration looks finished in a demo and generates phone calls in production.",
        ],
        bulletsHeading: "The parts teams forget to ask for",
        bullets: [
          {
            label: "Roles that match how people actually work",
            text: "Not a permissions matrix for its own sake. Just enough separation that the person taking orders and the person changing prices are not looking at the same screen.",
          },
          {
            label: "Exports",
            text: "Somebody will need the data in a spreadsheet whatever the tool does. Planning for that is what keeps the spreadsheet from becoming a second system of record.",
          },
          {
            label: "A record of what happened",
            text: "Domino's own list of next steps includes an internal event timeline per order, so staff can see payment, email and POS handoff status in one place. Nearly every operations tool wants this eventually.",
          },
          {
            label: "An obvious way to correct a mistake",
            text: "Somebody will enter the wrong thing. The tool needs a correction path a normal user can find, and it should record that a correction happened instead of silently overwriting the original.",
          },
          {
            label: "One painful slice first",
            text: "Version one should cover a single workflow properly. Covering the whole department is what version two is for, once the team has shown you which slice hurt most.",
          },
        ],
      },
      {
        heading: "What version one leaves out",
        paragraphs: [
          "Reporting is the usual candidate: dashboards built before anybody has a question to ask of them tend to go unread. So are notifications for events nobody acts on, and permission schemes with more roles than the team has people.",
          "The Domino project's own next steps are a good example of restraint. Pull the checkout rules into shared pure functions, so pricing, minimums and zone eligibility can be tested without rendering a page. Add the per-order event timeline. Add abandoned-cart follow-up only if the branch turns out to lose enough orders to justify it. That last condition is the part most feature lists are missing.",
        ],
      },
      {
        heading: "How long this takes",
        paragraphs: [
          "Domino's two months covered both sides: the public ordering flow and the admin and integration work behind it. A purely internal tool — one workflow, one team, a tracker with roles, notifications and exports — is a narrower job than that, because there is no customer-facing surface to design and no payment provider in the path.",
          "What pushes it back toward two months is integration. Every external system the tool has to read from or write into is real work, and the POS handoff was one of the more demanding parts of that build. It is worth pricing the integrations separately in your own head before you judge whether an estimate is high.",
        ],
      },
    ],
    workedExample: {
      heading: "Worked example: the operations half of a live ordering site",
      context:
        "Customers see a menu. The branch sees a set of screens and an integration that decide whether the day runs smoothly.",
      steps: [
        {
          label: "Give staff the levers",
          text: "Products, deals, categories, pizza sizes, beverages, sauces, delivery zones, site settings and orders are all editable in the admin screens, so day-to-day changes never wait on a developer.",
        },
        {
          label: "Encode the rules that must not be remembered",
          text: "Delivery cost and minimum order per zone are enforced during checkout rather than written on a note by the phone.",
        },
        {
          label: "Sequence the money and the kitchen correctly",
          text: "Pending order, Cardcom payment, then status update, emails, cart clear, and POS delivery. Nothing reaches the register before the payment result does.",
        },
        {
          label: "Keep test paths for the risky edges",
          text: "The project includes test pages for payment and POS validation, because those are the two places where a silent failure costs a real order.",
        },
      ],
      result:
        "Staff run the branch from the tool instead of around it, and the register receives orders directly. The whole build, public side included, took about two months.",
    },
    relatedProject: {
      href: "/case-studies/domino-ranana",
      label: "Real build",
      title: "Domino Ra'anana: the admin and integration work behind the menu",
      text: "Deal structure that survives the cart, asynchronous payment status, delivery-zone rules that gate checkout, and the order handoff to the Aviv POS.",
    },
    faq: [
      {
        question: "Our process lives in a spreadsheet. Why change it?",
        answer:
          "Do not change it if it still works. Spreadsheets fail on three specific things: two people editing at once, a rule that has to be enforced rather than remembered, and a status somebody outside the sheet needs to see. If none of those is hurting yet, a tool is premature.",
      },
      {
        question: "How do we get staff to actually use it?",
        answer:
          "Build a slice where the tool removes work instead of adding a reporting duty. The Domino admin screens get used because they are the only way to change products, deals, sizes and zones — the tool sits on a path staff already had to walk. Anything that is only useful to a manager tends to get filled in badly.",
      },
      {
        question: "Can it connect to our POS, accounting, or supplier system?",
        answer:
          "Often, and it is worth checking before scoping anything else. Cardcom and the Aviv POS both have a defined way in, which is what made the Domino handoff practical. When a system has no documented interface, the honest options are a manual step, a scheduled export, or a different plan — and which one you are in should not be a mid-build surprise.",
      },
      {
        question: "Who maintains it when our rules change?",
        answer:
          "Rules that change often should be data your team edits, not code. That is why Domino has screens for zones, prices, sizes and deals rather than a developer editing a config file every time a promotion changes. Genuinely structural changes, like a new workflow or a new integration, are change requests, and they stay small when the first version was scoped and written cleanly.",
      },
    ],
  },
  {
    slug: "mobile-sdk-development",
    title: "Mobile SDK development",
    summary:
      "Build and maintain libraries other developers embed: native Android and iOS targets, the React Native, Flutter and Unity wrappers around them, and release builds verified from the packaged artifact.",
    bestFor:
      "Product and engineering teams who distribute functionality to other companies' apps, and anyone whose SDK works in debug and breaks in a customer's release build.",
    deliverables: [
      "Native Android and iOS library targets",
      "React Native, Flutter or Unity wrapper layer",
      "Consumer keep rules and release-build verification",
      "Sample apps, integration guide and a support matrix",
    ],
    sections: [
      {
        heading: "An SDK is judged by what the host app is allowed to assume",
        paragraphs: [
          "An app owns its process. It decides when it starts, which thread does what, how much it logs, and what happens when it crashes. An SDK owns none of that. Somebody else's app initializes your code, on a thread of their choosing, possibly before their first screen exists, next to other SDKs, compiled with their build settings, their minimum OS version, their dependency versions and their release configuration.",
          "That changes what the deliverable is. The public surface becomes the product: a small number of entry points that are safe to call early, safe to call twice, and documented as to which thread they expect and what they do when they fail. An SDK that throws from an initializer takes the host app down with it, and the crash report lands on their desk with your class names in it. Their user blames them.",
          "The second thing an integrator inherits is your dependency list. Every library you pull in is a library you force on them, at a version that has to coexist with whatever they already use. Gradle resolves a version conflict by taking the highest request, so a transitive dependency you bumped casually can change the behaviour of code you have never seen. Keeping the footprint small is a compatibility decision, not a style preference.",
        ],
      },
      {
        heading: "Where we do this, and for whom",
        paragraphs: [
          "This is not a capability described in the abstract. We work with IntentIQ, an ad-tech company, as a contract engineering team on exactly this work: mobile SDK development across native Android and iOS and the React Native, Flutter and Unity wrappers on top of them, alongside identity and secure-signals integration into the Google advertising stack.",
          "What is inside their SDK is theirs, and none of it appears on this site. What the engagement produces that we can publish is the practice around it — the ordering constraints, the keep rules, the per-platform differences, and the habit of checking a release build against the packaged artifact instead of the source tree. Everything on this page comes out of doing that work rather than reading about it.",
        ],
      },
      {
        heading: "Per-platform reality, and why the wrapper is where it breaks",
        paragraphs: [
          "Native Android and iOS are one problem. React Native, Flutter and Unity add a wrapper layer, and the wrapper is where most breakage happens, because its whole job is forwarding calls one way and callbacks the other way while preserving things the underlying SDK cares about: which thread it is on, which lifecycle object it is attached to, and whether a callback fires once or twice.",
          "None of those survive a naive bridge. A promise resolved twice crashes some runtimes and silently does nothing on others. A callback delivered on a background thread reaches code that then touches a view, which is a main-thread-only operation on both platforms. An object identity that the native SDK uses to correlate a request with its result gets recreated across the bridge and the correlation is lost. These are not exotic bugs; they are the default outcome of writing the wrapper by hand and testing it once on the happy path.",
        ],
        bulletsHeading: "What each target actually requires",
        bullets: [
          {
            label: "Android",
            text: "A Kotlin or Java library published as an .aar, shipping its own keep rules through consumerProguardFiles so the host does not have to paste anything into their configuration. Your minimum SDK version and your dependency versions become constraints on every app that embeds you.",
          },
          {
            label: "iOS",
            text: "An XCFramework consumed through Swift Package Manager or CocoaPods, with the simulator and device slices that customers expect. A binary Swift framework needs library evolution enabled to stay usable across compiler versions, and Apple's privacy manifest and signature requirements for third-party SDKs apply to you rather than to the app that embeds you.",
          },
          {
            label: "React Native",
            text: "A native module plus typed JavaScript definitions, an autolinking-friendly package and a podspec. Module methods do not run on the main thread by default, so anything that creates or attaches a view has to be dispatched there deliberately, and event emitters have to survive a reload during development.",
          },
          {
            label: "Flutter",
            text: "A Dart facade over per-platform implementations, communicating through method and event channels. Native views need a platform view, channel errors have to be mapped into Dart exceptions rather than silently returning null, and every value crossing the channel has to be a type the codec can carry.",
          },
          {
            label: "Unity",
            text: "A C# API over an Android plugin and an iOS plugin. Callbacks from Android come back through a proxy object, activity references have to be fetched from the player rather than cached, and Unity controls its own Gradle template and minification settings, so keep rules have to be delivered there too.",
          },
        ],
      },
      {
        heading: "The release build is a different product from the debug build",
        paragraphs: [
          "On Android, release builds run R8, which shrinks, renames and optimizes based on what it can prove is reachable. Anything resolved by name at runtime is invisible to that analysis: a class named in a string, an adapter looked up reflectively, an entry point referenced from a manifest or a configuration file, a field name a serializer expects. The code compiles. The debug build works. The release build fails, or worse, quietly does nothing.",
          "Keep rules are the fix, and reading the source cannot tell you whether yours are correct. A rule is a pattern; whether it matched the classes you meant is a property of the output, not of the rule. This is the single most common reason an SDK behaves differently at a customer's site than in your own project, because the customer builds release and you build debug all day.",
          "An SDK also has to carry its own rules rather than documenting them. Rules in an integration guide get pasted once and never updated, so a customer on an old copy of your instructions is running last year's configuration against this year's library. Shipping them with the artifact makes the correct configuration the default one.",
        ],
      },
      {
        heading: "Verify from the artifact, not from the source",
        paragraphs: [
          "Unit tests structurally cannot catch this class of problem. They run against compiled classes in a test configuration, not against the shrunk, renamed bundle that ships. A class can pass every test and then be absent from the artifact a customer installs. The same gap covers packaging: a resource that did not get bundled, a slice missing from a framework, a transitive dependency that resolved locally because of a project path reference and does not exist for anyone consuming the published version.",
          "So the verification that matters is mechanical and physical. Build the thing you will publish, consume it the way a customer will, look inside it, and then run it.",
        ],
        bulletsHeading: "The checks that actually catch packaging failures",
        bullets: [
          {
            label: "Depend on it by version, not by path",
            text: "Publish a release candidate and have the sample app resolve it as a normal dependency. A local project reference hides exactly the packaging mistakes you are looking for.",
          },
          {
            label: "Build with shrinking on",
            text: "The host sample app's release variant, minification enabled, your consumer rules in effect. This is the configuration your customers use and the one most SDK teams never build.",
          },
          {
            label: "List what is in the bundle",
            text: "Inspect the packages and classes in the dex output and confirm that everything resolved by name at runtime still exists under that name. Keep the R8 mapping file for the release, because it is also what lets you retrace a stack trace a customer sends you six months later.",
          },
          {
            label: "Inspect the framework, not the build log",
            text: "On iOS, check the architectures and the symbols present in the built binary. A successful build is not evidence that the symbol an integrator links against is exported.",
          },
          {
            label: "Exercise every entry point on a device",
            text: "A reflective lookup fails at the moment it runs and not before, so the release artifact has to be executed, not just produced.",
          },
        ],
      },
      {
        heading: "Versioning is a promise to people who will not read the changelog",
        paragraphs: [
          "Host apps upgrade an SDK during a sprint that is about something else. That is the situation your version numbers have to survive. Semantic versioning honestly applied, deprecation before removal, and one short migration note per breaking change cover most of it. Removing a method in a minor version is the fastest way to be pinned to an old release forever.",
          "The subtler breaking change is a dependency bump. If your library requires a newer version of a third-party SDK, you have changed the host app's build whether or not your own API moved, and if their code depends on the older behaviour, your minor upgrade broke them. Compile against the oldest version you claim to support, test against the newest, and say in writing which range you actually cover.",
          "That statement of coverage is worth maintaining as a table: minimum OS versions, minimum React Native, Flutter or Unity versions, and which versions of any SDK you integrate with. Most support conversations are really requests for that table.",
        ],
      },
      {
        heading: "App Store and Google Play mechanics land on you anyway",
        paragraphs: [
          "An SDK does not ship to a store, but every one of its customers does, so store requirements become your requirements one step removed. Anything your library declares gets merged into the host's manifest, including permissions, which means a permission you added for an optional feature is a permission somebody now has to justify in a review or a data-safety declaration. Apple's privacy manifest and signing rules for third-party SDKs sit in the same category: they are conditions on your artifact that the app developer cannot satisfy on your behalf.",
          "Platform deadlines also arrive as your problem, because a target API level requirement or a new declaration form reaches the app first and the app cannot move until its SDKs have. Being ahead of that is a large part of what makes an SDK pleasant to depend on.",
          "The last piece is documentation and samples, which are part of the product rather than an afterthought. A working sample app per platform, resolved from the published artifact, is simultaneously the integration guide, the regression test and the reproduction case a support conversation starts from.",
        ],
      },
    ],
    workedExample: {
      heading: "Worked example: the pass that proves a release build is intact",
      context:
        "This is the sequence we run before an SDK version goes out, because it is the only one that catches shrinking and packaging problems. None of these steps can be replaced by reviewing code or by adding tests.",
      steps: [
        {
          label: "Publish a release candidate first",
          text: "The artifact under test is the published one. Sample apps resolve it by version like any other dependency, so anything that was only working because of a local project reference fails here, where it is cheap.",
        },
        {
          label: "Build the host app for release",
          text: "Minification on, the library's consumer rules in effect, mapping file saved. This is the build configuration a customer ships and the one a debug-only test cycle never produces.",
        },
        {
          label: "Look inside the bundle",
          text: "Enumerate what survived and confirm that every class resolved by name at runtime is present under that name, not renamed and not removed.",
        },
        {
          label: "Run the built artifact and touch everything",
          text: "Install the release build on a device and exercise each public entry point, including the failure paths, because a missing class announces itself only when the lookup happens.",
        },
        {
          label: "Repeat per wrapper",
          text: "The React Native, Flutter and Unity samples are separate builds with separate configuration and separate minification settings. The one nobody rebuilt is reliably the one that breaks in the field.",
        },
      ],
      result:
        "The failure this prevents is the expensive one: a customer's release build crashing or silently doing nothing while your own build and your test suite are both green, and the report arriving days later with an obfuscated stack trace attached.",
    },
    faq: [
      {
        question: "Can you work on the SDK we already have?",
        answer:
          "That is the usual starting point, and the first pass is normally not a code review. It is building the artifacts and reproducing the reported failure in a release build, because a defect that only appears after shrinking or packaging cannot be found by reading the source that produced it.",
      },
      {
        question: "Do we need all three wrappers?",
        answer:
          "No, and each one you add is a surface you maintain forever: its own sample app, its own release, its own set of host framework versions to support. Native Android and iOS first, then whichever wrapper your integrators actually ask for. A wrapper published and then left behind the native library is worse than not having it.",
      },
      {
        question: "Why can't tests cover the release-build problem?",
        answer:
          "Because tests run before the step that causes it. Shrinking and renaming happen when the shippable artifact is assembled, and a test suite exercises classes that have not been through that. A green suite and a broken release build are entirely compatible states, which is why verification has to read the artifact.",
      },
      {
        question: "How is this priced?",
        answer:
          "Build work is priced at $5,000 to $10,000 per estimated month of work, positioned in that range by complexity. Work after release, including per-version verification passes and support for a new host framework version, is billed at $85 to $165 per hour for hours actually worked. There is no standing retainer.",
      },
    ],
  },
  {
    slug: "ad-monetization-integration",
    title: "Ad monetization and ad server integration",
    summary:
      "Integrate Google Ad Manager, AdMob, IMA and GMA as the separate systems they are: correct initialization order, identity and signal enrichment at every request site, and verification against real ad requests.",
    bestFor:
      "Apps and publishers whose ad stack is technically live but under-delivering, and teams adding video, identity or signal enrichment to an integration that already exists.",
    deliverables: [
      "Documented initialization and consent ordering, in code",
      "A single request path with enrichment applied everywhere",
      "A verification pass against captured real ad requests",
      "Per-platform integration notes and a failure-mode runbook",
    ],
    sections: [
      {
        heading: "Four systems that get talked about as one",
        paragraphs: [
          "Google Ad Manager, AdMob, IMA for video and GMA for mobile display are routinely discussed as a single interchangeable thing. They are not. Each has its own initialization order, its own request shape and its own failure modes, and treating them as one is the usual source of an integration that appears to work and earns less than it should.",
          "The mobile display SDK serves both AdMob and Ad Manager, which is exactly why the confusion persists. The request objects are not the same: an Ad Manager request carries custom key-value targeting and publisher-supplied signals that an AdMob request has nowhere to put, and the two use different ad unit identifier formats. Code written for one and pointed at the other compiles, requests ads, renders ads, and drops the targeting on the floor.",
          "Video is a different model again. IMA requests against an ad tag rather than an ad unit, gets back a VAST or VMAP response, and has to be wired into your content player: an ads loader, an ads manager, a display container over the video surface, and a scheduler that pauses content, plays the break, and returns control. Its failures look nothing like display failures, and none of them resemble a null pointer.",
        ],
        bulletsHeading: "Where each one goes wrong first",
        bullets: [
          {
            label: "Google Ad Manager",
            text: "Targeting that never arrives, usually because it was set on the wrong request type or set after the request object was already built. The ad still fills, so nothing looks wrong from inside the app.",
          },
          {
            label: "AdMob",
            text: "Being treated as Ad Manager with a different account. Ad unit formats, targeting support and reporting granularity differ, and a migration done as a configuration change leaves capabilities silently switched off.",
          },
          {
            label: "IMA",
            text: "Player and ad lifecycle mistakes: an empty VAST response handled as a crash instead of a skipped break, content that never resumes, progress not reported so mid-roll breaks never trigger.",
          },
          {
            label: "GMA",
            text: "Requests fired before initialization completes. The initialization callback reports per-adapter readiness for a reason, and ignoring it means the first requests of the session go out against a partially ready stack.",
          },
        ],
      },
      {
        heading: "Where this experience comes from",
        paragraphs: [
          "We work with IntentIQ, an ad-tech company, as a contract engineering team on identity and secure-signals integration into the Google advertising stack, alongside the mobile SDK work that carries it. That engagement is where the specifics on this page were learned: which of Google Ad Manager, AdMob, IMA and GMA behaves differently from the others, what the initialization order actually has to be, and how an enrichment failure manages to leave no trace anywhere.",
          "Their implementation stays theirs and none of it is published here. The transferable part is the practice, and that is what you would be hiring: an engineer who has had to prove, from captured requests rather than from a code review, that the parameter he believes is being sent is the parameter the ad server received.",
        ],
      },
      {
        heading: "Ordering: the mistake that costs money and reports nothing",
        paragraphs: [
          "Identity and signal enrichment has an ordering constraint that nothing in the toolchain enforces. The adapter or signal collector has to be registered and ready before the ads SDK initializes, and its readiness has to be awaited. Get that wrong and the first ad request of the session goes out unenriched. No exception is thrown. No log line appears. An ad is returned and displayed. The only symptom is that the session earned less than it should have.",
          "This matters more than a normal bug because of which request is affected. The first request of a session is often the app-open or first-screen placement, which is frequently the most valuable one, and it is precisely the request that a warm-up race condition loses. QA cannot see it: an ad appeared, the screen looked right, the tester moves on.",
          "Consent sits in the same sequence and is subject to the same trap. A consent decision collected after the ads SDK has already initialized and requested did not apply to those requests. On iOS, the tracking permission prompt is part of this ordering too. So the initialization path deserves to be written down as an explicit sequence and reviewed as one, rather than distributed across whichever lifecycle callbacks were convenient.",
          "Awaiting readiness means awaiting it. A timer that waits a second and hopes is not a fix; it is the same bug with worse reproducibility, and it will behave differently on a cold start, on a slow network and on a low-end device. If requests can arrive before the stack is ready, queue them and flush the queue when the completion callback fires.",
        ],
      },
      {
        heading: "Every ad-request site, not the ones you remember",
        paragraphs: [
          "Enrichment has to be applied at every place the app requests an ad. Real apps accumulate request sites faster than anyone tracks: a banner in a list, an interstitial between two screens, a rewarded placement inside a game loop, a native unit in a feed, a pre-roll in the video player, and a second copy of one of those added behind a feature flag last quarter. Missing one degrades that placement quietly and permanently.",
          "Nothing in the logs points at it, because there is no error. The request was well-formed and the ad server answered. This is why the durable fix is structural rather than diligent: one function builds every ad request, applies targeting and signals there, and is the only place a request object is constructed. Then coverage is a question you can answer by searching the codebase instead of by remembering.",
        ],
        bulletsHeading: "Keeping coverage from drifting back",
        bullets: [
          {
            label: "One request builder",
            text: "Every placement gets its request from the same code path. Constructing a raw request anywhere else becomes the thing code review looks for, which is a much easier rule to hold than remembering to add three parameters.",
          },
          {
            label: "A maintained placement inventory",
            text: "Every ad unit and ad tag, per platform, with the screen it appears on. This list is also what makes ad server reporting comparable to what the app believes it is doing.",
          },
          {
            label: "Check both sides of the bridge",
            text: "React Native, Flutter and Unity apps frequently have a second request path in native code, added for one placement that the wrapper did not support. It is enriched separately or not at all.",
          },
          {
            label: "Cold start as its own test case",
            text: "The first request after a launch is a different scenario from the fifth. Treating them as one case is what lets the ordering bug live.",
          },
        ],
      },
      {
        heading: "Verification means real requests, captured and read",
        paragraphs: [
          "There is no unit test for whether the ad server received the parameter you think you sent. A test can assert that your code put a value into an object. It cannot tell you that the value left the device, survived the SDK, and arrived. Between the assertion and the ad server there is a request builder, an SDK version, a mediation layer, a consent state and a network, all of which can drop a field without complaining.",
          "So verification is empirical. Make real ad requests. Capture them. Read them. The SDK's own inspector and test device configuration cover the client side; a proxy shows what actually went out; for video, the ad tag response is the artifact to read, since an empty response and a broken player look identical from the couch. On the receiving side, the ad server's own reporting and diagnostics are what confirm arrival, which means this work needs somebody with access to that account, not only to the codebase.",
          "Confirm the negatives as well. A placement showing nothing can be a no-fill, an error, or a request that was never made, and those three have completely different fixes while looking the same to a user staring at an empty rectangle. Distinguishing them is most of an audit.",
        ],
      },
      {
        heading: "How this work gets scoped",
        paragraphs: [
          "It usually starts with an audit rather than a rewrite, because reading the code tells you what somebody intended and only the requests tell you what happens. That pass produces three things: the actual initialization sequence, the real list of request sites per platform, and a set of captured requests showing what each placement sends. Then the fixes are small and specific, and they can be verified the same way they were found.",
          "The multiplier is platforms. The same integration on Android, iOS and a cross-platform wrapper is three integrations with three sets of failure modes, and the Android side inherits the release-build problem: ad SDKs and mediation adapters get resolved by class name, so shrinking without correct keep rules produces an integration that works in debug and fails in the build you publish. That verification belongs to the same job.",
          "Audit and fix work of this kind normally sits in hourly work at $85 to $165 per hour for hours actually worked. A full integration across platforms is scoped as a build instead, at $5,000 to $10,000 per estimated month of work, positioned in the range by how many platforms and placements are in scope.",
        ],
      },
    ],
    workedExample: {
      heading: "Worked example: the order of operations for an enriched request",
      context:
        "Almost every silently under-delivering integration has one of these steps in the wrong place. The sequence is short, which is what makes it easy to get wrong and easy to fix once it is written down.",
      steps: [
        {
          label: "Resolve consent before anything requests",
          text: "The consent state has to exist before the first ad request, because a decision recorded afterwards did not apply to requests that already went out.",
        },
        {
          label: "Register the collector or adapter before initializing",
          text: "Registration happens before the ads SDK initializes, not on the first screen that shows an ad. After initialization is too late for the requests already in flight.",
        },
        {
          label: "Await readiness on the callback, not on a timer",
          text: "Use the initialization completion signal, hold ad requests until it fires, then flush them. A fixed delay is the same race with a different disguise.",
        },
        {
          label: "Build every request through one path",
          text: "A single builder sets targeting and signals for every placement, so adding a placement cannot mean adding an unenriched one.",
        },
        {
          label: "Cold start, capture, read",
          text: "Launch from cold, capture the first request, and confirm the enrichment is on that one rather than only on the third. Then repeat per platform and per wrapper.",
        },
      ],
      result:
        "What this closes is the failure no dashboard reports, no exception surfaces and no test detects: a request that went out looking perfectly healthy and was worth less than it should have been.",
    },
    faq: [
      {
        question: "Our ads work. Why would we audit them?",
        answer:
          "Because working and enriched are different states, and only one of them is visible. An ad rendering proves a request was made and filled. It says nothing about whether the request carried the targeting and signals you configured, and the case where it does not is not an error condition anywhere in the stack.",
      },
      {
        question: "Can you tell from our code whether the integration is correct?",
        answer:
          "Only partly, and that is not a limitation we can engineer around. Reading the code shows the intended sequence and finds request sites. Whether the parameters survive the SDK, the mediation layer and the consent state is a property of the requests that leave the device, so real requests have to be captured and read.",
      },
      {
        question: "Is moving from AdMob to Ad Manager a configuration change?",
        answer:
          "No. The identifier formats differ, the request types differ, and custom key-value targeting has nowhere to live on an AdMob request. A migration done purely in configuration typically ends up serving ads correctly with the targeting quietly absent, which is the hardest version of this problem to notice.",
      },
      {
        question: "We are on React Native, Flutter or Unity. Does that change the work?",
        answer:
          "It adds the layer where most breakage happens. The wrapper has to forward calls and callbacks that the underlying SDK expects, including main-thread requirements for anything that creates an ad view. It is also common to find a native request path added alongside the wrapper for one placement, which is then enriched separately or not at all.",
      },
      {
        question: "Do you work on the ad server side too, or only the app?",
        answer:
          "The app side is the engineering work. The ad server side is where arrival gets confirmed, so the verification pass needs somebody with account access working alongside us, whether that is your ad ops person or your network contact. An integration verified only from inside the app is half verified.",
      },
      {
        question: "What about mediation adapters?",
        answer:
          "They are versioned artifacts of their own and have to match the SDK version they are used with, which makes an SDK upgrade a coordinated change rather than a single bump. The initialization callback reports readiness per adapter, and on Android each adapter is resolved by name, so they need keep rules in the release build like any other reflective lookup.",
      },
    ],
  },
  {
    slug: "ai-feature-integration",
    title: "AI features inside existing products",
    summary:
      "Add an AI feature to a product that already has users: embeddings and ranking where they help, plain business rules where they must decide, and cost and latency handled as design constraints.",
    bestFor:
      "Teams with a live product and a real matching, ranking, drafting or classification problem, who need the result to be explainable to the people using it.",
    deliverables: [
      "One scoped AI feature inside the product you already run",
      "A retrieval or scoring layer with the rules that gate it",
      "Precomputed or cached read path with measured cost",
      "A correction path, a fallback, and a way to review wrong answers",
    ],
    sections: [
      {
        heading: "The existing product is the constraint",
        paragraphs: [
          "Adding AI to something already in use is mostly not a model problem. The model is a hosted API call. The problem is that there are users with expectations, screens that are currently fast and should stay fast, a database with a shape, and a support process that will receive the complaints when an answer is wrong. A greenfield demo has none of those and is therefore not evidence about anything.",
          "The first question is narrow and it decides the rest of the design: which decision is this feature allowed to make? A feature that drafts something a person confirms can be wrong occasionally at almost no cost. A feature that decides something and acts on it turns every wrong answer into an incident that somebody has to discover, explain and undo. Those two need different architectures, and the second one needs a much better reason to exist.",
        ],
      },
      {
        heading: "Djob, where this is already running",
        image: {
          src: "/case-studies/djob-demo-jobs.png",
          alt: "The public job board on the Djob demo, showing role cards with location, category, employment type and salary range",
          caption:
            "The public board on Djob's demo environment. The AI work sits behind this surface: candidates and roles are broken into structured statements, embedded, scored for similarity and then gated by business rules before anything reaches a screen like this one.",
          width: 1600,
          height: 1111,
        },
        paragraphs: [
          "Djob is a two-sided recruiting SaaS built over about six months on PostgreSQL and Base44, live at djob.agency with public plans starting at $29/month. Its matching layer is the AI feature, and three decisions inside it are the ones worth reusing anywhere.",
          "The first is what gets embedded. Candidate and job records are not stored as one document each and embedded as a blob. They are broken into structured statement parts, and OpenAI's text-embedding-3-small runs over those parts. Embedding a whole CV gives you one number and no way to say what it was responding to. Embedding separate statements gives you something you can point at when a recruiter asks why a candidate surfaced.",
          "The second is that similarity does not decide. Cosine similarity produces a closeness score, and a score is an input to a decision, not the decision itself, because a candidate can read as extremely close to a role and still fail a hard requirement. So plain pass or fail business rules sit around the score, and the reason is kept with the result. A rule written in code can be read, argued with and changed by whoever owns the business logic. A threshold buried in a prompt cannot.",
          "The third is where the work happens. Match views read from snapshot tables rebuilt daily rather than recomputing every candidate against every job when a page opens. Same inputs, same outputs, computed once on a schedule instead of once per view, which is what makes the screen a database read.",
          "One more thing worth copying is how the models are split. Two different jobs get two different models: text-embedding-3-small handles similarity, and a separate path on gpt-4o-mini handles the analysis and drafting work — reading a record and producing prose a human then reviews. Keeping them apart is deliberate. Similarity has to be cheap, stable and comparable across records, which is exactly what a small embedding model is for. Drafting has to read as language, which embeddings cannot do at all. Teams that reach for one general-purpose chat model to do both end up paying chat prices for a numeric comparison and getting a score they cannot reproduce next week.",
        ],
        bulletsHeading: "The three decisions, stated generally",
        bullets: [
          {
            label: "Structure the input before embedding it",
            text: "Separate fields and separate statements survive scoring individually. One blob of text produces one opaque number, and no amount of prompt work afterwards recovers the detail you flattened away.",
          },
          {
            label: "Gate the score with rules that a human wrote",
            text: "Semantic closeness should never be able to overrule a hard requirement. Keep the pass or fail reason attached to the result, because a rejection with no reason makes it impossible to tell whether your rules are simply too strict.",
          },
          {
            label: "Precompute what the screens read",
            text: "Move the expensive computation off the request path and onto a schedule. Opening the view becomes a read, which also means the feature keeps working when the model provider does not.",
          },
        ],
      },
      {
        heading: "Let the model draft, let rules decide",
        paragraphs: [
          "This is the pattern that makes AI features safe to leave switched on in a product with paying users. The model does the part it is genuinely better at: reading unstructured input, finding candidates, proposing text, spotting similarity. Deterministic code does the part that has to be correct and defensible: eligibility, thresholds, ordering, permissions, anything with a number attached that somebody will be held to.",
          "It also changes how the feature appears in the interface. Output presented as a suggestion, in a draft state, with an obvious way to accept, edit or discard it, sets expectations honestly and gives you a stream of corrections to learn from. Output presented as an authoritative answer invites the user to trust it exactly as much as it does not deserve.",
          "One more piece belongs in the first version: a path where the feature declines. Returning nothing, or returning the plain rules-based result, is nearly always better than producing a confident answer built from too little signal. Products that cannot say they have nothing are the ones that generate the support tickets.",
        ],
      },
      {
        heading: "What to do when the model is wrong",
        paragraphs: [
          "It will be wrong, and the plan for that is a feature, not an operational afterthought. Four things cover most of it. Log enough to reproduce: the input, the output, and which model, prompt version and embedding version produced it, so a complaint three weeks later is investigable rather than a shrug. Bound what a wrong answer can touch: draft states, confirmation steps, and limits on what the feature is allowed to write.",
          "Then give the product a correction path that a normal user can find, and record that a correction happened instead of silently overwriting the original. Corrections are the most valuable data the feature produces, and a system that discards them can only be improved by guesswork.",
          "The fourth is unglamorous and gets skipped: a rebuild you can actually run. Changing an embedding model, a prompt or a scoring rule invalidates everything precomputed under the old one, and mixed-vintage data is a genuinely nasty class of bug because it looks like intermittent model flakiness. A scheduled snapshot rebuild, as in Djob's daily job, means the answer to that is running it again rather than writing a migration under pressure.",
        ],
      },
      {
        heading: "Cost and latency are design inputs, not tuning",
        paragraphs: [
          "Two numbers should exist before anything is built: what one use of the feature costs, and how many times a day it will happen. Multiply them and the design either survives or it does not, and finding out at that point is free. Prototypes that were abandoned as too expensive were usually not expensive because of the model. They called it on the read path, once per page view, per user, forever.",
          "The fixes are architectural. Embed on write rather than on read, so the cost is paid once per record instead of once per view. Precompute rankings on a schedule. Cache aggressively where inputs have not changed. Use the smallest model that actually separates your data, which for Djob's structured statements is text-embedding-3-small rather than anything larger.",
          "Latency deserves the same treatment, because it lands on somebody doing their job. A screen backed by a snapshot table is a database read. A screen that calls a model when it opens is a network round trip plus a model wait, sitting on the critical path of a recruiter working through a list. And since the provider will eventually be slow or unavailable, the feature needs a defined behaviour for that: serve the last good snapshot, or fall back to the rules-only result, rather than showing a spinner and blocking the work.",
        ],
      },
    ],
    relatedProject: {
      href: "/case-studies/djob-agency",
      label: "Real build",
      title: "Djob: embeddings over structured statements, gated by rules",
      text: "The full teardown of the recruiting workspace: why one similarity score was never enough, how pass and fail reasons are kept, and why the ranked results live in snapshot tables rebuilt daily.",
    },
    faq: [
      {
        question: "Do we need to train or host our own model?",
        answer:
          "Almost never for this kind of feature. A hosted embedding or generation API plus your own data, your own rules and your own precomputation is the shape that works, and it is the shape Djob uses. The differentiating work is in how you structure the inputs and what you do with the score, not in the model.",
      },
      {
        question: "Our data is messy. Does that rule this out?",
        answer:
          "No, it identifies where the work is. Djob's records arrive in different shapes and get normalised into statement parts before anything is embedded, and that structuring is a large part of the six months it took. It is also the part that keeps paying off, because structured inputs can be scored, filtered and explained individually.",
      },
      {
        question: "How do we know the AI version is better than what we have now?",
        answer:
          "By deciding what better means before building it, which usually means writing down the current behaviour and a comparison you can actually run. If the honest answer is that nobody can tell the difference on your volume, that is worth discovering early. Clean fields and firm rules beat a model for a product handling a handful of records a day.",
      },
      {
        question: "Can this be added without rewriting the product?",
        answer:
          "Usually, and it should be. The feature sits beside what exists: new tables for the computed results, a scheduled job to fill them, and one or two screens reading from them. Precomputation helps here too, since a snapshot table is an addition rather than a change to the paths your users already depend on.",
      },
      {
        question: "What does it cost to build and to run?",
        answer:
          "Build work is priced at $5,000 to $10,000 per estimated month of work, positioned in that range by complexity, and work after launch is $85 to $165 per hour for hours actually worked. The running cost is your provider bill, and the architecture decides it: embedding on write and precomputing on a schedule is the difference between a bill that tracks your data volume and one that tracks your page views.",
      },
    ],
  },
];

export const realProjects = [
  {
    slug: "mincha-time",
    title: "Mincha Time",
    url: "https://mincha-time.com/",
    detailHref: "/case-studies/mincha-time",
    screenshot: "/case-studies/mincha-time.webp",
    industry: "Consumer web app",
    timeline: "Built in about 1 month",
    relatedResource: {
      href: "/resources/scheduling-notifications-without-a-queue",
      label: "Technical deep-dive",
      title: "How the notification scheduler actually works",
      text: "No task queue, no per-user cron — just time-bucketed Firestore documents and a function that reschedules itself one day at a time.",
    },
    problem:
      "Mincha (the afternoon prayer) has a window that shifts every day with sunset, and it is different in every city. Without checking a calendar daily, people miss the window without realizing it.",
    approach:
      "We built a location-aware web app that calculates the correct mincha window for wherever the user is and sends an automatic reminder before it closes, with no manual setup per day.",
    outcome:
      "The tool is live and handles the calculation and reminder automatically, so users do not have to look up times themselves. A focused scope like this — one calculation, one reminder, no accounts — is what kept it to about a month.",
    builtWith: [
      "Vite",
      "React",
      "Base44",
      "Firebase Cloud Functions",
      "Firestore",
      "Firebase Cloud Messaging",
      "Hebcal zmanim API",
    ],
    teardown: {
      intro: [
        "Mincha Time was intentionally smaller than a typical religious calendar app. The first version did not try to become a full siddur, calendar, community platform, or settings-heavy utility. It focused on one daily outcome: help a person know when mincha is relevant in their current location and remind them before they miss it.",
        "The landing page is the visible half. The other half is a scheduled notification engine that has to fire the right message, in the right language, at the right minute, every day, for every location — without a dedicated task queue.",
      ],
      decisions: [
        {
          label: "Firestore documents as the schedule, not a queue",
          text: "A Cloud Function runs every minute and checks whether a document exists at the path for the current time, grouped by location and notification type. No external queue or scheduler service — the current minute is just a document lookup.",
        },
        {
          label: "Group by location, not by user",
          text: "Users near the same coordinates share a notification group, so the zmanim calculation and the Hebcal API call happen once per location per day, not once per user. Personal, self-set reminder times run through a separate, simpler path.",
        },
        {
          label: "Each run schedules the next day",
          text: "After sending today's notifications for a location and type, the same function call fetches tomorrow's zmanim from Hebcal and writes forward to tomorrow's time-bucket document. The system advances itself one day at a time instead of precomputing a calendar in advance.",
        },
        {
          label: "Six languages as plain lookup objects",
          text: "Hebrew, English, Russian, Spanish, French, and Yiddish notification copy live in a simple translations map, keyed by a per-user language field — no i18n library, just small pure functions per language.",
        },
      ],
      whatShipped: [
        "A public landing page with multilingual messaging.",
        "A phone-style notification preview showing the two important reminder moments.",
        "A minute-resolution scheduled notification engine (Firebase Cloud Functions + Firestore + FCM) covering both location-based group reminders and personal reminder times.",
        "A monthly cleanup job that removes tokens and records for users inactive more than 30 days.",
        "FAQ content around calculation method, offline behavior after setup, and halachic method support.",
      ],
      trickyParts: [
        "Timezone handling for the next day's time-bucket comes from parsing the UTC offset out of the Hebcal API's response string — it works, but it is the kind of manual parsing that would need to become more robust if Hebcal ever changed its response format.",
        "The scheduler runs every minute regardless of whether anything is due, which is simple and cheap at this scale but is the first thing that would need to change if the user base grew by an order of magnitude.",
        "Two separate opt-out flags — a permanent disable and a same-day snooze — both have to be checked before every send, and both needed to be easy for a non-technical user to set from the app.",
      ],
      nextTime: [
        "Move the offset parsing to a proper timezone library instead of slicing the API response string, now that the pattern has proven itself in production.",
        "Batch the per-minute check across locations more efficiently as the number of distinct location groups grows.",
        "Add a small public demo that lets a visitor choose a city and preview today's mincha window before installing.",
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
    relatedResource: {
      href: "/resources/delivery-zone-rules-at-checkout",
      label: "Technical deep-dive",
      title: "How the delivery-zone rules gate checkout",
      text: "Each zone carries its own delivery cost and minimum order amount, and those two values decide whether an address can complete an order before any payment is created.",
    },
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
        "A separate analysis path on gpt-4o-mini, used for drafting and summarising rather than for scoring matches.",
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
      "The team spends less time on the phone, guests receive clearer confirmations, and cancellations are easier to catch before the table is lost. We have not measured no-show rates for a restaurant, so we will not quote a figure. What a reminder and a one-tap cancel link actually change is that a guest who cannot come now has an easy way to say so, and the table becomes refillable instead of quietly staying empty.",
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
      "The clinic keeps the human touch where it matters, while the repeated reminder work runs in the background. We have no measured time saving to report for a clinic, so we will not invent one. The concrete change is that confirmations stop depending on someone remembering to send them, and the only cases that still reach a person are the ones where a patient did not reply or asked to move the visit.",
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
      "The founder can test demand with real users and make product decisions from usage rather than guesses. For a sense of scale from work we have actually shipped rather than a projection: Mincha Time's first usable version took about a month, while Djob — a two-sided matching platform with a far wider scope — took about six months.",
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

type SectionImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

type ResourceSection = {
  heading: string;
  paragraphs: string[];
  bullets?: ResourceBullet[];
  comparison?: ResourceComparison[];
  diagramId?: string;
  interactiveToolId?: string;
  image?: SectionImage;
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
    dateModified: "2026-06-25",
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
        relatedCaseStudy: {
          href: "/case-studies/mincha-time",
          label: "Real build example",
          title: "How Mincha Time sends each user a reminder at their own minute",
          text: "The reminder rhythm above is not theory — Mincha Time runs it in production, scheduling per-user reminders with Firestore time buckets and a once-a-minute check instead of a heavy queue.",
        },
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
    dateModified: "2026-06-25",
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
          href: "/case-studies/mincha-time",
          label: "Real build example",
          title: "How Mincha Time stayed small enough to ship quickly",
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
    dateModified: "2026-06-25",
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
        relatedCaseStudy: {
          href: "/case-studies/domino-ranana",
          label: "Real build example",
          title: "How Domino Ra'anana moved phone orders into a system",
          text: "Orders that arrived by phone all day showed every signal on this list. The ordering site that replaced them — menu, cart, delivery rules, POS handoff — has been running for over five years.",
        },
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
    dateModified: "2026-06-25",
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
        relatedCaseStudy: {
          href: "/case-studies/domino-ranana",
          label: "Real build example",
          title: "How Domino Ra'anana's build started from real orders",
          text: "The build was scoped from how orders actually arrived at the restaurant — menu, cart, delivery zones, payment, kitchen handoff — not from a feature list. That is what a good brief looks like in practice.",
        },
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
    dateModified: "2026-06-25",
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
    dateModified: "2026-06-25",
    title: "Which tools should you use to build an app?",
    description:
      "A practical comparison of Expo, React Native, Flutter, native iOS and Android, PWAs, and no-code app builders.",
    readTime: "11 min read",
    sections: [
      {
        heading: "The first question is what kind of app you need",
        diagramId: "app-path",
        relatedCaseStudy: {
          href: "/case-studies/mincha-time",
          label: "Real build example",
          title: "Why Mincha Time started as a focused web app",
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
      {
        question: "What does WizeApps itself build with?",
        answer:
          "The three live projects on this site run on Vite and React over Base44. Mincha Time's reminder engine is Firebase Cloud Functions, Firestore and FCM; Djob's matching sits on PostgreSQL. Not because those are the best tools for every job — because they are tools we can ship and maintain quickly, which is the real tool question this guide keeps coming back to.",
      },
    ],
  },
  {
    slug: "how-much-does-a-small-business-app-cost",
    datePublished: "2026-06-25",
    dateModified: "2026-08-04",
    title: "How much does it cost to build a small business app?",
    description:
      "Our actual pricing in numbers — $5,000 to $10,000 per estimated month of work — with what three real builds cost, what drives the range, and how to get more product for the same budget.",
    readTime: "12 min read",
    sections: [
      {
        heading: "Why \"how much does an app cost\" has no single answer",
        paragraphs: [
          "Asking what an app costs is a bit like asking what a building costs. A garden shed and an office tower are both buildings, and the honest answer is always \"it depends on what you need and who builds it.\" Software is the same. The same idea can cost a few thousand or a few hundred thousand depending on scope, quality, and who does the work, which is why a vague brief produces wildly different quotes.",
          "That uncertainty is uncomfortable, but it is also useful information. When quotes for the \"same\" project vary by 5x, it usually means the project was not actually defined the same way by each person. The most reliable way to control cost is not to hunt for the cheapest quote — it is to define the problem tightly enough that everyone is pricing the same thing.",
        ],
      },
      {
        heading: "What we charge, in actual numbers",
        paragraphs: [
          "Most articles on this question stop at \"it depends,\" so here is our own pricing, plainly. We estimate how many months of work a build needs, and each estimated month of work costs between $5,000 and $10,000. Where a project sits in that range depends on its complexity: a single, well-understood workflow sits near the bottom, while heavy business logic, payment handling, or an integration with a system we do not control pushes it toward the top.",
          "\"A month of work\" means a month of building, not a month on the calendar. It is the unit we estimate in because it is the one that actually tracks effort — a feature list can look short and still take three months once its rules are written down.",
        ],
        bullets: [
          {
            label: "About one month — $5,000 to $10,000",
            text: "One focused loop, end to end. Mincha Time's first usable version was this size: location, prayer-time calculation, reminder delivery, in six languages.",
          },
          {
            label: "About two months — $10,000 to $20,000",
            text: "A real transactional flow with money and an outside system in it. Domino Ra'anana was this size: menu, cart rules, delivery-zone eligibility, Cardcom payments, and a handoff into the Aviv POS.",
          },
          {
            label: "About six months — $30,000 to $60,000",
            text: "A platform with several user types and a non-trivial engine behind it. Djob was this size: two-sided matching over embeddings, business-rule gating, and precomputed daily snapshots.",
          },
        ],
      },
      {
        heading: "The estimate is the uncertain part, not the rate",
        paragraphs: [
          "Notice where the risk actually sits. The rate is fixed and knowable. What moves a budget is the number of months, and that number moves for one reason: the scope was not pinned down before anyone estimated it. This is why we spend the first conversations mapping the current process rather than quoting from a feature list — a wrong month-count is a far more expensive mistake than a wrong rate.",
          "It also means the lever in your hands is scope, not negotiation. Cutting a version-one feature that would have added a month saves between $5,000 and $10,000. No amount of haggling over a rate comes close to that.",
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
          "For the record, this is where we sit: we quote a fixed price for a defined version one, derived from the monthly figure above, and we bill hourly only for post-launch work, where the volume genuinely is unpredictable. You should expect any builder to tell you plainly which of the three models they are using before you see a number.",
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
          "Rather than starting with \"how much does an app cost,\" start with \"how much is this problem worth solving, and what is the smallest version that would prove it?\" Put our numbers into that question and it gets concrete: if the smallest useful version is a one-month build, you are deciding whether the problem is worth $5,000 to $10,000 to solve — not whether software in general is affordable.",
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
          "Two separate things. First, hosting and third-party services, which are usually modest monthly amounts billed directly to you by the providers. Second, changes and fixes: we bill post-launch work hourly at $85 to $165 per hour, for hours actually worked, rather than a standing monthly fee — most months are quiet, and you should not pay for a retainer that goes unused.",
      },
    ],
  },
  {
    slug: "no-code-vs-custom-code",
    datePublished: "2026-06-25",
    dateModified: "2026-06-25",
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
        relatedCaseStudy: {
          href: "/case-studies/domino-ranana",
          label: "Real build example",
          title: "A hybrid build that has run for five years",
          text: "Domino Ra'anana pairs a platform foundation with custom code where it matters — Cardcom payments, delivery-zone rules, and a handoff to the Aviv POS. Exactly the hybrid path this section describes.",
        },
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
      {
        question: "What has WizeApps actually shipped this way?",
        answer:
          "All three live projects on this site are hybrids in exactly this sense. The Domino Ra'anana ordering site runs on Base44 with custom code where the platform stopped being enough — the payment ordering around Cardcom and the handoff to the branch's POS. Djob pairs the same platform with a separate PostgreSQL matching layer. The platform carries the standard parts; code carries the logic that makes each business different.",
      },
    ],
  },
  {
    slug: "build-vs-buy-software",
    datePublished: "2026-06-25",
    dateModified: "2026-06-25",
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
    dateModified: "2026-06-25",
    title: "How to choose a developer or agency without being technical",
    description:
      "A practical guide to evaluating who builds your software when you cannot judge the code yourself — and the warning signs that matter most.",
    readTime: "9 min read",
    sections: [
      {
        heading: "You can judge the work without reading the code",
        relatedCaseStudy: {
          href: "/case-studies",
          label: "See the work",
          title: "Three real builds, documented as teardowns",
          text: "This is what judging the work looks like in practice: each case study walks through the problem, the approach, and what shipped — the same questions you should ask anyone you evaluate.",
        },
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
    dateModified: "2026-08-04",
    title: "What it really takes to keep software running after launch",
    description:
      "Launch is the halfway point, not the finish line. A plain-language guide to hosting, updates, monitoring, and the maintenance budget nobody mentions in the sales conversation.",
    readTime: "9 min read",
    sections: [
      {
        heading: "Launch is the halfway point",
        relatedCaseStudy: {
          href: "/case-studies/domino-ranana",
          label: "Real build example",
          title: "A site that has kept taking orders for five-plus years",
          text: "Domino Ra'anana launched in about two months and has stayed in daily use for over five years — because payments, delivery rules, and the POS handoff kept getting small, unglamorous maintenance.",
        },
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
          "Rather than quote a percentage of the build, here is what we actually charge: post-launch work is billed hourly, at $85 to $165 per hour, for hours genuinely worked. A simple internal tool with few integrations may need almost none for months at a stretch. A customer-facing system with payments, messaging, and third-party connections needs more, because more of the outside world can change underneath it — a payment provider updates an API, an operating system changes how notifications behave, a dependency ships a security fix.",
          "Structure matters as much as the amount, and we deliberately do not sell a standing monthly retainer for small systems: most months are quiet, and you should not pay for hours nobody used. The practical options are a pay-as-you-go arrangement with an agreed response time, or scheduled check-ups — a half-day every quarter where someone updates dependencies, reviews errors, and flags risks. The wrong option is the default one: nobody responsible, nothing scheduled, and a plan that amounts to hoping.",
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
        relatedCaseStudy: {
          href: "/case-studies/mincha-time",
          label: "Real build example",
          title: "How Mincha Time stayed small enough to ship in a month",
          text: "The first version did one loop — location, zman calculation, reminder — and shipped in about a month. That deliberately narrow slice is what made the pilot readable: it either reminded people on time or it didn't.",
        },
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
        relatedCaseStudy: {
          href: "/case-studies/djob-agency",
          label: "Real build example",
          title: "AI matching in production without an ML team",
          text: "Djob ranks candidate-job matches with off-the-shelf embeddings (OpenAI text-embedding-3-small) gated by plain business rules — the AI drafts the match, the rules decide. No ML team involved.",
        },
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
            text: "The smallest version of a product that can test the core idea with real users. Budget implication: an MVP that takes six months is not an MVP; the word is doing marketing work in that sentence. For scale from our own work: Mincha Time's first usable version — location, prayer-time calculation, reminder — took about a month.",
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
            text: "Where the data lives: customers, bookings, jobs, messages. The key question for you is not which database, but who can access it and how it is backed up. Djob runs on PostgreSQL and Mincha Time on Firestore — the choice follows the access pattern, not fashion.",
          },
          {
            label: "API (application programming interface)",
            text: "The doorway one system offers another. 'It has an API' means other software can connect to it; 'we'll use their API' means your system will depend on someone else's doorway staying open. Mincha Time depends on the Hebcal zmanim API this way, which is why it calls Hebcal once per location per day and stores the answer rather than asking on every screen load.",
          },
          {
            label: "Integration",
            text: "Connecting your system to another — calendar, payments, accounting, WhatsApp. Each integration is real work and a real ongoing dependency; a quote that lists features but not integrations is incomplete. Domino Ra'anana has two that carry real weight: Cardcom for card payments, and a handoff into the Aviv POS so nobody retypes an order at the register.",
          },
          {
            label: "Hosting / the cloud",
            text: "The rented computers your software runs on. A modest monthly cost that continues forever, in an account you — not your developer — should own.",
          },
        ],
      },
      {
        heading: "The words in the quote",
        relatedCaseStudy: {
          href: "/case-studies/djob-agency",
          label: "These words on a real build",
          title: "Where scope, integrations and technical debt showed up in Djob",
          text: "Djob is the clearest place to see this vocabulary attached to something real: about six months of scope, a PostgreSQL database, an embeddings API it depends on, and a deliberate decision to precompute matches daily rather than pay the cost of recomputing them on every view.",
        },
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
  {
    slug: "scheduling-notifications-without-a-queue",
    datePublished: "2026-07-07",
    dateModified: "2026-07-07",
    title: "How to schedule per-user notifications without a task queue",
    description:
      "The real architecture behind a location-aware, multilingual notification system that fires at the right minute every day — no task queue, no per-user cron job.",
    readTime: "9 min read",
    sections: [
      {
        heading: "The problem with 'just add a cron job'",
        paragraphs: [
          "A notification that has to fire at a different time for every user, every day, looks simple until the time itself is the hard part. This is a reminder system for halachic prayer times — the exact minute shifts daily with sunset, and sunset is different in every city. A naive version sets one cron job per user per day, which means creating and tearing down thousands of scheduled jobs continuously. That does not scale and is painful to debug when one job silently fails to get created.",
          "The system actually running in production for this does something simpler: a single scheduled function runs every minute, and the question it answers is not \"who do I need to notify right now\" computed live, but \"does a document already exist for this exact minute.\" The scheduling problem gets pushed into data instead of into infrastructure.",
        ],
      },
      {
        heading: "Firestore documents as the schedule",
        diagramId: "scheduler-loop",
        paragraphs: [
          "Notification groups are stored as Firestore documents keyed by time, in the shape hour_minute — for example 13_47. A function on a one-minute cron reads the current UTC time, builds that same key, and checks whether a document exists at that path for each active location and notification type. If nothing exists, the function does almost no work and exits. If something exists, it reads the tokens attached to that document and sends.",
          "This turns scheduling into a lookup instead of a live computation. There is no queue product to operate, no per-job bookkeeping, and adding a new location or notification type is just a matter of writing a new document at the right time key — the polling function does not need to know about it in advance.",
        ],
      },
      {
        heading: "Group by location, not by person",
        paragraphs: [
          "The naive version of this computes each user's prayer time individually, which means calling an external zmanim API once per user, every day. Instead, users are grouped by rounded latitude and longitude into a shared location bucket. The external API — Hebcal's zmanim endpoint — gets called once per unique location per day, not once per person, and every user in that location subscribes to the same time-bucket document.",
          "This is the same idea as caching, but framed as a scheduling decision rather than a performance afterthought: the expensive external call happens at the coarsest level that is still correct, and everything downstream reads from the cheap, shared result.",
        ],
      },
      {
        heading: "Each run schedules its own future",
        paragraphs: [
          "After sending today's notifications for a location and type, the same function call immediately fetches tomorrow's time from the zmanim API and writes a new document at tomorrow's time-bucket key. There is no separate nightly batch job that precomputes a week or a month of schedules in advance — the system advances itself exactly one day at a time, and only for the combinations that were actually active today.",
          "The tradeoff is honest: this system cannot tell you next Tuesday's schedule right now, because it has not been computed yet. For a daily reminder product, that limitation never matters. For a use case where users need to see a future schedule in advance, the same pattern would need a small adjustment — precompute a few days ahead instead of one.",
        ],
      },
      {
        heading: "Two independent opt-out flags",
        paragraphs: [
          "Every send checks two separate flags on the user's token record: a permanent disable and a same-day snooze. Keeping them independent — rather than one combined \"notifications on/off\" toggle — makes a common case easy: a user who wants to skip just today without losing their setup entirely. Both flags are checked in the same place, right before a message goes out, so there is exactly one point in the code where an opt-out can be missed, not several scattered checks that could drift out of sync.",
        ],
      },
      {
        heading: "What this pattern is good for, and what it isn't",
        paragraphs: [
          "This approach earns its simplicity from a specific shape of problem: notifications keyed by a predictable, discrete time slot, at a scale where a once-a-minute poll across active documents is cheap. It is a poor fit for sub-minute precision, for schedules that need to be visible far in advance, or for volumes where per-minute polling itself becomes the bottleneck — at that point a real task queue or a managed scheduler product starts earning its operational cost.",
          "For most small and mid-size products with daily or per-slot reminders — appointment reminders, daily digests, recurring check-ins — the time-bucketed document pattern is less infrastructure, fewer moving parts to operate, and easier for one person to fully understand than standing up a dedicated queue.",
        ],
        relatedCaseStudy: {
          href: "/case-studies/mincha-time",
          label: "Real build example",
          title: "See the full Mincha Time build teardown",
          text: "This scheduling engine is the backend behind a real, live multilingual reminder product — decisions, what shipped, and what we'd improve next time.",
        },
      },
    ],
    faq: [
      {
        question: "Why not just use Cloud Tasks or a real queue product?",
        answer:
          "You can, and at higher volume or with more complex scheduling needs, you should. For a scheduled-time notification with a predictable slot, a managed queue adds an operational dependency without solving a problem the document-lookup pattern doesn't already solve more simply. Reach for a queue when you need retries with backoff, priority ordering, or per-job observability that a simple existence check can't give you.",
      },
      {
        question: "Does polling every minute waste resources?",
        answer:
          "At small-to-medium scale, a once-a-minute function that mostly does nothing is cheap on any serverless platform's free or low usage tiers. It becomes worth reconsidering once the number of active locations or notification types is large enough that the per-minute check itself takes meaningful time or cost — a scaling question, not a correctness one.",
      },
      {
        question: "How do you handle a user who changes location mid-day?",
        answer:
          "The location grouping is read fresh each time a schedule is written forward, so a user who moves gets regrouped into whichever location bucket they belong to the next time their notification type is recalculated — normally the next day's write. It is not instantaneous, which is an acceptable tradeoff for a daily reminder product.",
      },
    ],
  },
  {
    slug: "delivery-zone-rules-at-checkout",
    datePublished: "2026-08-04",
    dateModified: "2026-08-04",
    title: "Do we deliver there, and is the order big enough?",
    description:
      "The delivery-zone rules behind a pizza ordering site that has been live for more than five years: how one cost and one minimum per zone decide whether an address can check out at all.",
    readTime: "10 min read",
    sections: [
      {
        heading: "The rule that decides whether an order can happen",
        paragraphs: [
          "Domino Ra'anana has taken orders through the site we built for it for more than five years. It took about two months to build, and the owner, Eran Atra, changes the menu, the deals and the delivery areas himself. Customers notice the menu. The piece that decides whether an order is possible at all is much smaller and never gets looked at: a list of delivery zones, each one carrying its own delivery cost and its own minimum order amount.",
          "Those two values per zone are not labels on a checkout screen. They are a gate. Given an address and a cart, they answer one question — can this order be completed as a delivery, or not. Get it wrong and you are not showing a slightly inaccurate fee. You are taking money for an order the branch cannot fill.",
        ],
      },
      {
        heading: "\"We deliver to these areas\" is not yet a rule",
        paragraphs: [
          "Every delivery business already has this rule. It just lives in people. The driver knows which streets are too far to be worth it. Whoever answers the phone knows that a small order to the far end of town does not pay for the drive, and says so politely. None of that survives the move to a website, because on a website there is nobody on the line to make the call.",
          "So the rule has to be written down as data before anyone writes code. In practice that means being specific about four things per zone. Vagueness in any one of them turns into either a checkout that blocks orders you wanted, or a kitchen that receives orders it cannot serve.",
        ],
        bullets: [
          {
            label: "The boundary",
            text: "Which addresses count as being in this zone, described in terms a customer would recognise — a neighbourhood, a street list, a nearby village. If your own staff argue about an address, the software will have the same argument.",
          },
          {
            label: "The delivery cost",
            text: "What delivery to this zone costs. It does not have to be the same number everywhere, and once zones exist there is no reason for it to be.",
          },
          {
            label: "The order minimum",
            text: "The smallest cart you are willing to send there. Farther zones usually carry a higher one, because the drive costs the same whether the bag holds one item or six.",
          },
          {
            label: "The fallback",
            text: "What happens to an address that is in none of your zones. Silence is the worst available answer. Pickup, a phone number, or a plain \"we don't deliver there yet\" are all better than a checkout button that quietly refuses to work.",
          },
        ],
      },
      {
        heading: "Enforce it before the payment page, not after",
        paragraphs: [
          "The order flow on the Domino site runs in a fixed sequence. A pending order is created first. The customer is sent to Cardcom to pay. Only after payment succeeds does the order get its status update, the confirmation email, and the handoff into the Aviv POS at the branch so nobody retypes it at the register.",
          "That sequence is exactly why the zone rules have to be settled early. Every step after Cardcom is expensive to undo. A refund is a support conversation and a payment fee. An order that has already reached the POS has been seen by the kitchen. You cannot fix that order afterwards — you can only refund it and phone the customer. So eligibility, meaning is this address in a zone and does the cart clear that zone's minimum, has to be decided before the pending order is created.",
          "The site also takes cash orders, which skip Cardcom entirely. That path is shorter, and it is the one people forget when they attach the eligibility check to the payment step: a cash order still lands in the POS and still commits a driver. Two ways to place an order means the zone rule has to sit somewhere both of them pass through, rather than in the card flow because that is where it happened to get written first.",
          "It follows that the check cannot live only in the checkout screen. Whatever code creates the pending order is the last honest place to ask the question, and it should ask it there too, even if the button that leads to it was already disabled.",
        ],
        relatedCaseStudy: {
          href: "/case-studies/domino-ranana",
          label: "Real build example",
          title: "See the full Domino Ra'anana build teardown",
          text: "The zone rules described here are one part of a live ordering site: menu, deals, cart, Cardcom payment, the Aviv POS handoff, and the admin screens behind all of it.",
        },
      },
      {
        heading: "Three ways to charge for delivery",
        paragraphs: [
          "A zone list with a cost and a minimum attached to each zone is one option out of three, and choosing between them is a business decision more than a technical one. What changes between them is where the ongoing work sits: in deciding boundaries, in an external service, or in absorbing costs quietly.",
        ],
        comparison: [
          {
            tool: "One flat fee everywhere",
            bestFor:
              "A small, tight radius where every delivery costs roughly the same to make.",
            strengths:
              "Nothing to maintain, and every customer understands it immediately. No boundaries to argue about.",
            tradeoffs:
              "Near customers subsidise far ones, and there is no natural place to hang an order minimum — so small far-away orders keep arriving.",
          },
          {
            tool: "A zone list, each zone with its own cost and minimum",
            bestFor:
              "A branch with a known catchment area and different economics at the edges. This is what Domino Ra'anana runs.",
            strengths:
              "Two numbers per zone express the whole rule, and each zone can be adjusted without touching the others. Nothing external to call, nothing to go down.",
            tradeoffs:
              "Someone has to decide where the lines are, and addresses sitting on a line still need a human answer.",
          },
          {
            tool: "Distance or drive-time pricing",
            bestFor:
              "A wide service area, or couriers whose cost genuinely scales with the trip.",
            strengths:
              "The fee tracks the real cost of the delivery instead of approximating it.",
            tradeoffs:
              "Needs geocoding and a routing service, which means a per-lookup cost, a failure path when the lookup does not answer, and a price the customer cannot predict before entering an address.",
          },
        ],
      },
      {
        heading: "Tell the customer the number while they can still act on it",
        paragraphs: [
          "A blocked checkout is only infuriating when it arrives as a surprise at the end. The useful moment is earlier. Once a delivery zone is selected, the cart can show that zone's delivery cost and how far the order still is from the minimum. Now the customer has two reasonable moves — add something, or switch to pickup — instead of one dead end.",
          "One detail matters more than it sounds. Hold on to that state. On the Domino site the cart, the delivery method, the selected zone, the payment method and the checkout form fields are all persisted in localStorage. People order food on a phone while doing something else, and they do reload the page mid-order. Losing the bag and the zone at that point loses the order.",
          "Then there is the address that sits right on a line. Someone is always just outside a zone, and no set of boundaries removes that case. The phone is the answer there — the branch can take the order and charge whatever it thinks is fair. What the site should not do is guess on the customer's behalf, either by quietly stretching a zone or by acting as though the address does not exist. Show which zone was matched, show that zone's cost and minimum, and keep a way to reach a person visible.",
        ],
      },
      {
        heading: "The admin screen is the actual feature",
        image: {
          src: "/case-studies/domino-delivery-zones.png",
          alt: "Delivery-zone admin screen showing two zones, each with its own delivery cost and estimated arrival window",
          caption:
            "The live delivery-zone screen. Each zone is a row the owner edits: its own delivery cost, its own arrival window, its own minimum order, and an active switch. Turning a zone off closes checkout for those addresses without a deploy.",
          width: 1600,
          height: 711,
        },
        paragraphs: [
          "Zone rules change. Fuel gets more expensive, a new neighbourhood fills in, a courier arrangement shifts. The build includes management screens for products, deals, categories, pizza sizes, beverages, sauces, delivery zones, site settings and orders, so a delivery cost or a minimum is a field the owner edits in a form.",
          "The alternative is worth pricing out honestly. Our post-launch work is billed hourly, $85 to $165 per hour, for hours actually worked, and we do not sell a standing monthly retainer for a small system like this. Even at the bottom of that range, a hard-coded delivery fee makes every adjustment a paid ticket, a deploy and a wait. Over a site that has been in daily use for more than five years, that is the difference between a number the owner controls and a number he has to book time to change. If you are sizing a build like this, our guide to what a small business app costs lists the ranges we actually quote, and the guide to software maintenance after launch covers what that hourly work usually goes on.",
        ],
        relatedCaseStudy: {
          href: "/resources/how-much-does-a-small-business-app-cost",
          label: "Related guide",
          title: "What a build like this costs",
          text: "The published ranges behind the numbers above — per estimated month of work for the build, hourly for everything after launch.",
        },
      },
      {
        heading: "The hours nobody should be typing in every week",
        image: {
          src: "/case-studies/domino-opening-hours.png",
          alt: "Opening-hours settings showing automatic Saturday-night opening derived from Hebcal and a Friday closing time that differs between winter and summer clock",
          caption:
            "Opening hours are derived, not stored. The screen shows the Shabbat-end time it read, the opening time it worked out from it, a link back to the source, and which clock — winter or summer — is deciding Friday's closing this week.",
          width: 1600,
          height: 522,
        },
        paragraphs: [
          "Two settings on that same admin deserve singling out, because they are the ones a manual system gets wrong most often, and they are not really about delivery at all — they are about when the shop is open. Friday closing and Saturday-night opening move every single week, so the system computes them rather than storing them.",
          "Opening is defined as a fixed number of minutes after Shabbat ends in Ra'anana, resolved from the Hebcal API. The screen shows the owner both the Shabbat-end time it read and the opening time it derived, with a link back to the source, so the number is checkable rather than something to be trusted blindly. Friday closing is defined twice — one time under winter clock, another under summer clock — and the screen states plainly which one is in force this week. That last line matters more than it looks. The bug this design prevents is a shop that closes an hour late twice a year, on exactly the two weekends nobody thinks to check.",
          "There is a detail here worth borrowing. Hebcal is the same API behind Mincha Time's prayer-time reminders, another build documented on this site. In one product it decides when to send a notification; in the other it decides when a pizza shop starts taking delivery orders. The engineering is nearly identical — call the source once per location per day, store the answer, derive the local rule from it — and only the business meaning changes. A date-and-time source that a business depends on is worth wrapping once and reusing, rather than re-deriving in every product that needs it.",
        ],
      },
      {
        heading: "What we would build differently now",
        paragraphs: [
          "The rule works, but it lives in an awkward place. Most of the zone logic is enforced inside the checkout page, which is the hardest part of the app to test — to confirm that a minimum behaves correctly you have to render the whole checkout and drive it by hand. Starting again, pricing, minimums and delivery rules would go into shared pure functions that can be tested on their own, with the checkout page calling them.",
          "The second change is visibility. Payment, the confirmation email and the POS handoff each happen at their own moment, and when one of them fails the evidence is spread across three places. A per-order event timeline staff can open — payment result, email sent, POS accepted — would make a bad evening explainable while it is still going on.",
        ],
      },
      {
        heading: "This is not really about pizza",
        paragraphs: [
          "Any business whose service depends on where the customer is has the same rule hiding inside it. A mobile repair service has a travel radius and a smallest job worth driving to. A caterer has a delivery area and an order floor. A clinic has appointment types it will only do at certain locations. In each case somebody currently makes the call by feel, and the automation only works once that call is written down: a list of areas, and per area, what it costs and what the smallest acceptable job is.",
          "The booking and order flows we build follow the same shape as this checkout. Settle eligibility before anything irreversible happens, and put the numbers where the owner can change them without calling a developer. If you can name your areas and, for each one, state the delivery cost and the smallest order you will send, you already have the rule written. The remaining work is a form and a check in the right place.",
        ],
        relatedCaseStudy: {
          href: "/services/reservation-and-booking-automation",
          label: "Related service",
          title: "The same pattern applied to bookings",
          text: "Rules settled before the irreversible step, exceptions routed to a person, and the numbers kept in screens the owner controls.",
        },
      },
    ],
    faq: [
      {
        question: "Can't we just charge one delivery fee for everywhere?",
        answer:
          "You can, and for a tight radius it is the right call. The problem appears as the area grows: near customers subsidise far ones, and a flat fee gives you nowhere natural to attach a minimum. Zones are what let the far edge of the map carry both a higher fee and a higher floor without changing anything for the customers next door.",
      },
      {
        question: "Should the minimum count the delivery fee or only the food?",
        answer:
          "Pick one and make sure the site and the staff give the same answer. Most businesses mean the food total, because that is what they are judging as worth the drive. Whichever you choose, the number shown while the customer is shopping has to be measured the same way as the number the checkout enforces. The mismatch, not the rule, is what generates support calls.",
      },
      {
        question: "What should happen when an address is not in any zone?",
        answer:
          "Say so plainly and offer whatever alternative you actually have. On the Domino site, pickup is a full path through the same cart, so an address outside the delivery zones does not have to be the end of the order. The failure mode to avoid is a checkout that refuses to continue without explaining why.",
      },
      {
        question: "Who should be able to change the zones?",
        answer:
          "The owner, or whoever runs operations, through an admin screen and without a developer in the loop. That is how it works at Domino Ra'anana: delivery zones sit alongside products, deals and site settings in the management screens. Anything that changes with the seasons should not need a deploy.",
      },
      {
        question: "How long does this part take to build?",
        answer:
          "It is rarely a project of its own. The whole Domino ordering site — menu, deals, cart, checkout, Cardcom payment, the POS handoff and the admin screens — took about two months, which at our published rate of $5,000 to $10,000 per estimated month of work puts it in the $10,000 to $20,000 range. The zone rules are a small slice of that. The slow part is agreeing on the boundaries and the numbers, and that work is yours rather than a developer's.",
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
