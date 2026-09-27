export type SocialKey = "github" | "twitter" | "facebook" | "instagram";

export type Member = {
  fullName: string;
  discord?: string;
  about: string;
  links: Partial<Record<SocialKey, string>>;
};

/**
 * Ported from the legacy dev-circle-np.github.io site (members/members.js).
 * To add yourself, append an entry here and open a pull request.
 * Entries are exposed sorted in ascending order by member name.
 */
const unsortedMembers: Member[] = [
  {
    fullName: "Prashant Shahi",
    discord: "CB567#2925",
    about: "Platform/SRE · Infrastructure · Observability · Distributed Systems",
    links: {
      github: "prashant-shahi",
      twitter: "c0degeas",
    },
  },
  {
    fullName: "Puncoz Nepal",
    discord: "puncoz#7209",
    about: "Full Stack Software Engineer | NodeJS | PHP | AI | ML",
    links: {
      github: "puncoz",
      twitter: "PuncozNepal",
      facebook: "puncoz",
    },
  },
  {
    fullName: "Ramesh Syangtan",
    discord: "rameshsyn#6074",
    about: "I am teacher, developer & student from Suryabinayak, Bhaktapur.",
    links: {
      github: "rameshsyn",
      twitter: "ramesh_syn",
      facebook: "rameshsyn",
    },
  },
  {
    fullName: "Ashish A",
    discord: "ashish#2010",
    about: "Product • AI • Infrastructure",
    links: {
      github: "axispx",
      twitter: "axispx",
    },
  },
  {
    fullName: "Sandeep Pokhrel",
    discord: "sandeep pokhrel",
    about: "I am a front-end developer",
    links: {
      github: "sananddev",
      twitter: "Sandeep60837075",
      facebook: "sandeep.pokhrel.7",
    },
  },
  {
    fullName: "Bibek Lamsal",
    discord: "bibek",
    about: "I am a Data Analyst and a budding Software Engineer.",
    links: {
      github: "bibek94",
      twitter: "Bibek21516111",
      facebook: "bibek.lamsal.94",
    },
  },
  {
    fullName: "Nirmal Rijal",
    discord: "nirmalrizal#8173",
    about: "Craze for Machine Learning and Data Science :)",
    links: {
      github: "nirmalrizal53",
      twitter: "nirmalrizal",
      facebook: "nirmal.rijal.16",
    },
  },
  {
    fullName: "Manish Marahatta",
    discord: "manishmarahatta#6214",
    about: "developer, emacs and open source addict, craze for AI",
    links: {
      github: "manishmarahatta",
      twitter: "mmarahatta",
      facebook: "mmarahatta",
    },
  },
  {
    fullName: "sademban",
    discord: "0x6675636b20796f75",
    about: "Enthusiast",
    links: {
      github: "sademban",
      twitter: "madbios9",
      facebook: "Theodore Twombly",
    },
  },
  {
    fullName: "Amit Chaudhary",
    discord: "amitness#3292",
    about: "I love playing with data.",
    links: {
      github: "amitness",
      facebook: "amitify",
    },
  },
  {
    fullName: "Rajan Bhattarai",
    discord: "cdrrazan#3388",
    about: "ROR, Atom and Open Source Promoter",
    links: {
      github: "cdrrazan",
      twitter: "cdrrazan",
      facebook: "cdrrazan",
    },
  },
  {
    fullName: "Animesh Risal",
    discord: "TenToasts#8794",
    about: "Machine Learning, NLP, open education",
    links: {
      github: "toastypixels",
      twitter: "TenToasts",
      facebook: "TenToasts",
    },
  },
  {
    fullName: "Sabin Nepal",
    discord: "neymarsabin#2179",
    about: "I am a CSIT student and I like to collaborate.",
    links: {
      github: "neymarsabin",
    },
  },
  {
    fullName: "Pradip Khadka",
    discord: "pradyp.me#2193",
    about: "Developer, EDM Lover, Lifelong Learner",
    links: {
      github: "coderpradp",
      twitter: "pradpkhadka",
      facebook: "iampradp",
    },
  },
  {
    fullName: "Pratik Chaudhary",
    discord: "AbsoluteZero#0296",
    about: "Hacks FP",
    links: {
      github: "AbsoluteZero273",
      twitter: "CodeZero273",
    },
  },
  {
    fullName: "Sujan Rijal",
    discord: "Sujanrijal16#8997",
    about: "IT student and here to contribute for new experience.",
    links: {
      github: "Sujanrijal16",
    },
  },
  {
    fullName: "Kiran Shahi",
    discord: "Kiran Shahi#0366",
    about: "Student | Developer | .NET",
    links: {
      github: "kiranshahi",
      twitter: "itskirans",
      facebook: "itskirans",
    },
  },
  {
    fullName: "Pramesh Bajracharya",
    discord: "pe.messh#5758",
    about: "Computer Science Engineer | Tech Enthusiast",
    links: {
      github: "Suzal3579",
      twitter: "suzal33",
      facebook: "pe.messh",
      instagram: "pe.messh",
    },
  },
  {
    fullName: "Jenish Shrestha",
    discord: "jenish1231#4002",
    about: "Student",
    links: {
      github: "jenish1231",
    },
  },
  {
    fullName: "Ankit Chhetri",
    discord: "bhukampa#2489",
    about: "Developer | Student | Snake Charmer",
    links: {
      github: "ankitch",
      twitter: "ankit_cheetri",
    },
  },
  {
    fullName: "Nischal Lal Shrestha",
    discord: "Nischal#8165",
    about: "Programmer | Inventor | Django | Python | Learner",
    links: {
      github: "theonlyNischal",
      twitter: "theonlyNischal",
      facebook: "theonlyNischal",
    },
  },
  {
    fullName: "Bishal Thapa",
    discord: "thebsaal#0147",
    about: "Developer | Designer | Mentor | Learner",
    links: {
      github: "thebsaal",
      twitter: "thebsaal",
      facebook: "thebsaal",
    },
  },
  {
    fullName: "Ashish Tiwari",
    discord: "megamindAT",
    about: "Antarctica is melting!",
    links: {
      github: "megamind98",
      twitter: "megamindAT",
      facebook: "megamindAT",
    },
  },
  {
    fullName: "Subesh Bhandari",
    discord: "Subeshb1#3437",
    about: "Programmer/Student",
    links: {
      github: "subeshb1",
      twitter: "subeshb1",
    },
  },
  {
    fullName: "Prabin Parajuli",
    discord: "prabin-parajuli#8986",
    about: "Loves Binary world.",
    links: {
      github: "prabinzz",
      twitter: "prabinparajuli",
      facebook: "pra.bin.35",
    },
  },
  {
    fullName: "Bibek Dhakal",
    discord: "bibekdhakal",
    about: "Organizer at GDG Kathmandu, Building & Scaling Tech Products, Loves UI/UX",
    links: {
      github: "bibekdhkl",
      twitter: "bibekdhkl",
      facebook: "bibekdhkl",
    },
  },
];

/** Members sorted in ascending order by name (case-insensitive). */
export const members: Member[] = [...unsortedMembers].sort((a, b) =>
  a.fullName.localeCompare(b.fullName, "en", { sensitivity: "base" }),
);
