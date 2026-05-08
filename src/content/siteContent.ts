import headshotImage from "../assets/images/headshot.jfif";
import type { NavItem, ServiceOffer, SpeakingTopic, StatItem } from "./types";

export const siteTitle = "Israel Philips";

export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Speaking", to: "/speaking" },
  { label: "Consulting", to: "/consulting" },
];

export const rotatingRoles = [
  "Founder",
  "Speaker",
  "AI Specialist",
  "Software Engineer",
];

export const homeStats: StatItem[] = [
  { value: "6+ years", label: "Building products and AI-enabled systems" },
  { value: "Global market", label: "Based in Nigeria, building for teams everywhere" },
  { value: "Founder mindset", label: "Engineering with business outcomes in view" },
];

export const authorityPillars = [
  "Co-founder at Prymshare",
  "Multiple pitch-competition wins",
  "National and international product experience",
  "Practical AI integration for real business use",
];

export const aboutNarrative = [
  "I am Israel Philips, a software engineer and AI developer based in Nigeria, building for a global market.",
  "Over the years, I have worked with national and international companies, shipping scalable software across the stack. That experience sharpened my focus around one core belief: AI becomes powerful when it is practical, not performative.",
  "That belief led me to build a WhatsApp-native AI agent that helps business owners, freelancers, and professionals manage cashflow, generate invoices with payment links, log transactions, and pull financial reports by simply chatting.",
  "I am also a co-founder at Prymshare, and I have won multiple pitch competitions. That gives me a useful perspective on both sides of the table: building the product and building the business around it.",
];

export const speakingTopics: SpeakingTopic[] = [
  {
    title: "Practical AI for real businesses",
    description:
      "How founders and teams can stop chasing the buzzword cycle and start using AI where it genuinely saves time, improves decisions, and removes operational drag.",
    audience: "Founders, business leaders, startup teams",
  },
  {
    title: "Building AI products from Africa for the world",
    description:
      "A grounded talk about building useful products in African markets while aiming at global relevance, quality, and ambition.",
    audience: "Startup communities, product events, student and developer audiences",
  },
  {
    title: "From software engineer to product-minded builder",
    description:
      "What changes when you stop thinking only about code and start designing systems around trust, adoption, and business outcomes.",
    audience: "Engineers, product builders, early founders",
  },
];

export const speakingOutcomes = [
  "Clearer understanding of where AI is useful right now",
  "Practical framing teams can apply immediately after the session",
  "Honest builder insight from someone working at the intersection of engineering and business",
];

export const serviceOffers: ServiceOffer[] = [
  {
    title: "One-on-one AI strategy consultation",
    description:
      "For founders, operators, and professionals who want practical advice on where AI fits their workflow, product, or business model.",
    outcomes: [
      "Identify the highest-value AI opportunities in your workflow",
      "Clarify what should be automated, assisted, or left alone",
      "Leave with a simpler plan instead of more AI noise",
    ],
  },
  {
    title: "AI integration advisory for teams",
    description:
      "For companies that want AI implemented thoughtfully across product, operations, or customer-facing flows.",
    outcomes: [
      "Translate AI ideas into useful product or process changes",
      "Avoid overbuilding features that do not create real value",
      "Move toward AI adoption with stronger product judgment",
    ],
  },
  {
    title: "Technical founder support",
    description:
      "For early builders who need a partner that understands both delivery and business positioning while they shape a product.",
    outcomes: [
      "Sharpen the story behind the product",
      "Prioritize what actually matters in v1",
      "Build with more confidence around product and execution decisions",
    ],
  },
];

export const consultingSteps = [
  "You book a session through Calendly.",
  "We get clear on the business, workflow, or product problem.",
  "I help simplify the path forward with practical next steps.",
];

export const audienceGroups = [
  "Founders trying to use AI without turning their product into a gimmick",
  "Businesses that want process clarity before tool sprawl",
  "Teams that need an engineer who also understands why the business side matters",
];

export const images = {
  headshot: headshotImage,
};

export const expertSeoDescription =
  "Founder, speaker, AI specialist, and software engineer Israel Philips helps teams use AI practically and build stronger products.";
