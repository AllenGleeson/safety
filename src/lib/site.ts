export const site = {
  name: "Aperture Safety",
  legalName: "Aperture Safety Training",
  tagline: "Firearms competence starts with safety.",
  description:
    "One structured firearms safety course for adults who own, or intend to own, a firearm. Training only — we do not sell firearms or ammunition.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  coursesUrl:
    process.env.NEXT_PUBLIC_COURSES_URL ?? "https://learn.aperturesafety.com",
  email: "hello@aperturesafety.com",
  phone: "+1 (555) 014-2208",
  address: {
    line1: "1200 Rangeview Drive, Suite 4",
    line2: "Austin, TX 78704",
  },
  hours: "Monday–Saturday, 8:00–18:00 CT",
} as const;

export const course = {
  name: "Firearms Safety Essentials",
  eyebrow: "One course",
  duration: "Self-paced · about 3 hours",
  format: "Online on our training platform",
  outcome: "Certificate of completion",
  summary:
    "A single, instructor-written course covering the four rules, safe handling, range conduct, home storage, and transport — so you leave with one clear standard, not a pile of conflicting advice.",
} as const;

export const nav = [
  { href: "/#about", label: "About" },
  { href: "/#course", label: "The course" },
] as const;

export const courseModules = [
  {
    id: "rules",
    title: "The four rules",
    summary:
      "The standing handling rules, why they exist, and how to apply them every time a firearm is present.",
  },
  {
    id: "handling",
    title: "Safe handling",
    summary:
      "Picking up, putting down, clearing, and moving a firearm without rushing or improvising.",
  },
  {
    id: "range",
    title: "Range conduct",
    summary:
      "Lane commands, muzzle discipline, cease-fire procedure, and how to be a predictable shooter on the line.",
  },
  {
    id: "storage",
    title: "Home storage",
    summary:
      "Locks, safes, unauthorized access, and how adults talk about firearms at home without glamorizing them.",
  },
  {
    id: "transport",
    title: "Transport",
    summary:
      "Vehicle storage, legal awareness, and calm, lawful movement between home and the range.",
  },
] as const;

export const benefits = [
  {
    title: "One course, one standard",
    body: "You are not choosing between six programmes. Firearms Safety Essentials is the curriculum — complete it, then practise the same habits every time.",
  },
  {
    title: "Education, not a sales floor",
    body: "We teach safety. We do not sell firearms, ammunition, or accessories — so the lessons are never a pitch.",
  },
  {
    title: "Clear rules, not folklore",
    body: "The course is built around established handling rules, range procedure, and lawful ownership — not internet myth.",
  },
  {
    title: "A certificate you can stand behind",
    body: "Finish on the training platform and download a certificate of completion for your records, your range, or your employer.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "I wanted one course I could finish, not a catalogue. The standard is simple enough to remember on the line.",
    name: "Daniel R.",
    role: "First-time owner",
  },
  {
    quote:
      "We send new members through this before they shoot. Same briefing for everyone — fewer surprises on day one.",
    name: "Marisol K.",
    role: "Range operations manager",
  },
  {
    quote:
      "Storage and household language were the gaps I had. Completing the course gave me a checklist I actually use.",
    name: "Priya S.",
    role: "Parent and recreational shooter",
  },
] as const;

export const faqs = [
  {
    question: "Is this marksmanship training?",
    answer:
      "No. Firearms Safety Essentials is a safety course: handling rules, range conduct, storage, and transport. Accuracy is not the point — competence and discipline are.",
  },
  {
    question: "Do I need my own firearm?",
    answer:
      "No. The course is online and does not require you to own or handle a firearm. It prepares you for the range and for lawful ownership; it is not live-fire instruction.",
  },
  {
    question: "How do I start the course?",
    answer:
      "Use Start the course. That link opens our separate training platform, where you enrol, complete the modules, and download your certificate. This website is the introduction only.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. Completing Firearms Safety Essentials issues a certificate of completion from the training platform. Some ranges and employers accept it as induction evidence; always confirm their policy.",
  },
  {
    question: "Who is this for?",
    answer:
      "Adults (18+) who own a firearm, intend to own one, or live with one in the household and want a clear safety standard.",
  },
  {
    question: "Do you sell firearms or ammunition?",
    answer:
      "No. Aperture Safety is an education company. We teach the course; we do not run a gun counter.",
  },
  {
    question: "Does this replace licensing or legal advice?",
    answer:
      "No. Licensing, permits, and local law are set by your jurisdiction. The course teaches safety and general legal awareness. For a licence or a legal opinion, speak to the relevant authority or a qualified attorney.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most people finish in about three hours, at their own pace. You can pause and resume on the training platform.",
  },
] as const;

export const enquiryTopics = [
  "Question about the course",
  "Group or employer enrolment",
  "Access / technical help",
  "Something else",
] as const;
