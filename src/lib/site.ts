export const site = {
  name: "Aperture Safety",
  legalName: "Barron Sports",
  description:
    "A structured firearms safety course for adults who own, or intend to own, a firearm.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  coursesUrl:
    process.env.NEXT_PUBLIC_COURSES_URL ?? "https://learn.aperturesafety.com",
  email: "gary@barronsports.ie",
  phone: "+353 87 744 1042",
  address: {
    name: "Barron Sports",
    line1: "Newpark, Ennis, Co. Clare, Ireland",
    eircode: "V95 XPK8",
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
