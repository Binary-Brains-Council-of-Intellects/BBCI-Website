/**
 * BINARY BRAINS COUNCIL OF INTELLECTS (BBCI)
 * Official Organizational Data Source of Truth
 * Source: BBCI Official Constitution (Ref No: BBCI/2026/OFFICIAL/1 | Date: 02 October 2026)
 */

export const PLACEHOLDER_IMAGE = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFhudypvyZZICQL3fV0B9pa3wA81FTMEU62jqosetlv_jUBdcNAb58Laiz&s=10";
export const LOCAL_PLACEHOLDER_IMAGE = "/placeholder.jpg";

export const BBCI_ORG = {
  name: "Binary Brains Council of Intellects",
  shortName: "Binary Brains",
  acronym: "BBCI",
  tagline: "A Global Council Connecting Intellects",
  officialWebsite: "www.binarybrains-bbci.com",
  officialDomain: "https://www.binarybrains-bbci.com",
  officialEmail: "binarybrains.bbci@gmail.com",
  socialHandles: {
    primary: "@binarybrains-bbci",
    secondary: "@binarybrains.bbci",
  },
  referenceNo: "BBCI/2026/OFFICIAL/1",
  constitutionDate: "02 October 2026",
  status: "Voluntary, Non-profit, Non-political, Non-religious Intellectual Council",
  
  brandColors: {
    indigo: {
      name: "Deep Indigo",
      hex: "#2E2F81",
      rgb: "46, 47, 129",
      symbolism: "Represents the '1's, authority, and structural discipline",
    },
    teal: {
      name: "Slate Teal",
      hex: "#4F6D78",
      rgb: "79, 109, 120",
      symbolism: "Represents the analytical / structured left brain",
    },
    magenta: {
      name: "Magenta",
      hex: "#EE4A7F",
      rgb: "238, 74, 127",
      symbolism: "Represents the creative / networked right brain",
    },
  },

  vision: "To build a thriving, self-sustaining global community where intellectuals from diverse fields unite, collaborate, and innovate for the advancement of knowledge and society.",

  mission: "To ultimately create a group where intellectuals of different fields will collaborate on projects, research, and other activities, thereby generating a lasting body of shared intellectual work.",

  objectives: [
    {
      id: 1,
      title: "Connect Intellectual Minds",
      description: "To connect intellectual minds worldwide, regardless of geography, background, or discipline.",
      icon: "Globe"
    },
    {
      id: 2,
      title: "Collaborative Projects",
      description: "To undertake projects both individually within the group and collaboratively with external laboratories, organizations, and industries.",
      icon: "Cpu"
    },
    {
      id: 3,
      title: "Structured Programs",
      description: "To organize and hold Weekly, Monthly, and Yearly programs for its members to foster continuous growth.",
      icon: "Calendar"
    },
    {
      id: 4,
      title: "Research & Publications",
      description: "To publish rigorous research papers under the Council's name in recognized academic and technical venues.",
      icon: "BookOpen"
    },
    {
      id: 5,
      title: "Innovation & Patents",
      description: "To develop projects and pursue patents arising from the Council's collaborative and interdisciplinary work.",
      icon: "Lightbulb"
    },
  ],

  areasOfWork: [
    {
      title: "Technology",
      desc: "Architecting software, systems, algorithmic frameworks, and experimental computational tools.",
      symbol: "0101"
    },
    {
      title: "Scientific Research",
      desc: "Pursuing empirical and theoretical inquiry across disciplinary intersections and scientific frontiers.",
      symbol: "λ/dx"
    },
    {
      title: "Interdisciplinary Collaboration",
      desc: "Bridging analytical rigor and creative synthesis between engineering, sciences, arts, and humanities.",
      symbol: "⋈"
    },
    {
      title: "Innovation & Patents",
      desc: "Translating theoretical solutions into intellectual property, functional prototypes, and practical inventions.",
      symbol: "℗"
    },
    {
      title: "Publications",
      desc: "Documenting peer-reviewed discoveries, technical reports, white papers, and constitutional archives.",
      symbol: "§"
    },
    {
      title: "Knowledge Exchange",
      desc: "Conducting weekly deliberations, monthly symposiums, advanced workshops, and international competitions.",
      symbol: "↔"
    },
  ],

  principles: [
    {
      title: "Non-profit, Non-political, Non-religious",
      desc: "BBCI operates strictly for intellectual advancement. It shall never affiliate with any political movement or religious bias."
    },
    {
      title: "Intellectual Curiosity & Merit",
      desc: "Members must demonstrate intellectualism, curiosity, and good faith when joining and throughout their membership."
    },
    {
      title: "Respect & Professional Courtesy",
      desc: "Members treat one another with fairness, respect, dignity, and professional courtesy at all times."
    },
    {
      title: "Responsible Representation",
      desc: "Members representing BBCI in fests, competitions, or public platforms must uphold its dignity and act strictly within approved mandates."
    },
    {
      title: "Conflict of Interest Disclosure",
      desc: "Any conflict of interest shall be disclosed promptly to the President or General Secretary to ensure complete institutional integrity."
    },
    {
      title: "Constitutional Governance",
      desc: "All activities, appointments, and fiscal allocations conform strictly to the supreme authority of the BBCI Official Constitution."
    }
  ],

  membership: {
    eligibility: "Membership is open to any individual who demonstrates genuine intellectual curiosity, capability, and commitment at the time of joining. The Council reserves the right to assess prospective members through an application, interview, or evaluation process determined by the Executive Committee from time to time.",
    categories: [
      {
        name: "Founding Members",
        details: "The eight individuals who established the Council and who retain supreme governance authority.",
      },
      {
        name: "General Members",
        details: "All individuals formally admitted to the Council following registration, evaluation, and regular dues payment.",
      },
      {
        name: "Project Members",
        details: "General or Founding Members actively assigned to a specific research, technology, or innovation project group.",
      }
    ],
    fees: {
      registration: "BDT 500",
      registrationNote: "One-time registration fee at the time of joining.",
      monthly: "BDT 300",
      monthlyNote: "Recurring monthly membership fee starting the month following registration.",
      constitutionalNote: "Fee amounts are established pursuant to the BBCI Constitution and may be revised solely through constitutional amendment."
    },
    rights: [
      "Participate in the general activities, meetings, and programs of the Council.",
      "Propose, join, and contribute to project groups, subject to Council project policy.",
      "Be considered for Committee, Regional, and Project Leadership positions.",
      "Receive fair, respectful, and non-discriminatory treatment from all members and officers.",
      "Raise concerns or grievances directly to the President or General Secretary.",
      "Be considered for representing the Council in external fests, competitions, and hackathons."
    ],
    obligations: [
      "Abide by this Constitution and all duly adopted rules and decisions of the Council.",
      "Pay registration and monthly membership dues in a timely manner.",
      "Conduct themselves with honesty, professionalism, and mutual respect.",
      "Fulfil responsibilities undertaken within project groups, regional roles, or committee duties."
    ]
  },

  ipPolicy: {
    jointCredit: "All projects and papers produced under the Council's auspices shall be published in, and shall carry, the name of BBCI jointly and inseparably alongside the names of the actual creators, authors, or inventors. The Council's name shall never be omitted nor substituted.",
    royaltyDistribution: {
      creatorsShare: "70%",
      creatorsDesc: "Distributed among the actual creators and contributors of the intellectual work.",
      councilShare: "30%",
      councilDesc: "Retained by BBCI for institutional sustainment, future project funding, and council grants.",
    },
    ownership: "Subject to the royalty-sharing arrangement, BBCI holds joint ownership and royalty rights, together with the actual creators, in all such projects, publications, and patents."
  }
};
