export const site = {
  name: "Aperture Safety",
  legalName: "Aperture Safety Training",
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
