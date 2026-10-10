/**
 * BINARY BRAINS COUNCIL OF INTELLECTS (BBCI)
 * Official Organizational Data
 */

export const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80";
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
  foundedYear: "2026",
  status: "Global Non-Profit Intellectual & Research Council",
  
  brandColors: {
    indigo: {
      name: "Deep Indigo",
      hex: "#2E2F81",
      rgb: "46, 47, 129",
      symbolism: "Represents the binary '1's, foundational authority, and structural precision",
    },
    teal: {
      name: "Slate Teal",
      hex: "#4F6D78",
      rgb: "79, 109, 120",
      symbolism: "Represents the analytical, empirical, and structured left hemisphere",
    },
    magenta: {
      name: "Magenta",
      hex: "#EE4A7F",
      rgb: "238, 74, 127",
      symbolism: "Represents the creative, interconnected, and visionary right hemisphere",
    },
  },

  vision: "To build a thriving, self-sustaining global community where intellectuals from diverse fields unite, collaborate, and innovate for the advancement of knowledge and society.",

  mission: "To cultivate an international ecosystem where researchers, engineers, and scholars across disciplines collaborate on frontier projects, peer-reviewed research, and technological innovation—generating a lasting body of shared intellectual work.",

  objectives: [
    {
      id: 1,
      title: "Global Intellectual Network",
      description: "Connecting exceptional thinkers, scientists, and engineers worldwide across geographical and disciplinary boundaries.",
      icon: "FiGlobe"
    },
    {
      id: 2,
      title: "Collaborative Research Labs",
      description: "Undertaking frontier research and engineering projects both within autonomous BBCI working groups and with external partner institutions.",
      icon: "FiCpu"
    },
    {
      id: 3,
      title: "Symposiums & Colloquia",
      description: "Hosting weekly global deliberations, monthly in-person research symposiums, technical workshops, and annual innovation fests.",
      icon: "FiCalendar"
    },
    {
      id: 4,
      title: "Scholarly Publications",
      description: "Publishing peer-reviewed research papers, technical reports, and foundational white papers in recognized international venues.",
      icon: "FiBookOpen"
    },
    {
      id: 5,
      title: "Patents & Deep-Tech Innovation",
      description: "Translating theoretical breakthroughs into functional prototypes, open-source frameworks, and protected intellectual property.",
      icon: "FiZap"
    },
    {
      id: 6,
      title: "Creator-First IP Equity",
      description: "Empowering innovators with a transparent 70/30 royalty model that guarantees joint attribution and rewards original creators.",
      icon: "FiAward"
    }
  ],

  areasOfWork: [
    {
      id: "ai-cognitive",
      title: "Artificial Intelligence & Cognitive Systems",
      desc: "Neural-symbolic architectures, machine reasoning, foundation models, and human-centered autonomous intelligence.",
      icon: "FiCpu",
      symbol: "0101"
    },
    {
      id: "distributed-systems",
      title: "Systems Engineering & Distributed Computing",
      desc: "High-performance computing, resilient peer-to-peer networks, cryptographic security, and scalable cloud infrastructure.",
      icon: "FiDatabase",
      symbol: "SYS"
    },
    {
      id: "computational-science",
      title: "Computational Sciences & Applied Mathematics",
      desc: "Algorithmic modeling, complex dynamical systems, network theory, optimization, and formal verification.",
      icon: "FiCode",
      symbol: "f(x)"
    },
    {
      id: "robotics-hardware",
      title: "Robotics, Autonomous Systems & Edge Hardware",
      desc: "Swarm robotics, embedded micro-systems, sensor fusion, IoT telemetry, and next-generation hardware prototyping.",
      icon: "FiZap",
      symbol: "HW"
    },
    {
      id: "bio-frontier",
      title: "Bioinformatics & Frontier Sciences",
      desc: "Computational genomics, multi-omics analysis, climate modeling, and data-driven scientific discovery.",
      icon: "FiActivity",
      symbol: "BIO"
    },
    {
      id: "interdisciplinary",
      title: "Interdisciplinary Innovation & Knowledge Transfer",
      desc: "Bridging analytical engineering with creative synthesis, scientific publishing, and global technical education.",
      icon: "FiLayers",
      symbol: "NET"
    },
  ],

  principles: [
    {
      title: "Independent & Non-Partisan",
      desc: "BBCI operates strictly as a non-profit, non-political, and non-religious organization dedicated purely to scientific and intellectual advancement."
    },
    {
      title: "Meritocracy & Intellectual Rigor",
      desc: "Admission, leadership, and project fellowship are grounded exclusively in intellectual curiosity, technical capability, and scholarly integrity."
    },
    {
      title: "Open Inquiry & Interdisciplinary Respect",
      desc: "We foster an environment of rigorous peer review, constructive discourse, and mutual respect across all scientific and creative disciplines."
    },
    {
      title: "Global Representation & Excellence",
      desc: "Members representing BBCI at international conferences, hackathons, and olympiads uphold the highest standards of research ethics."
    },
    {
      title: "Transparency & Ethical Stewardship",
      desc: "Full transparency in research attribution, peer review, and institutional resource allocation ensures enduring trust."
    },
    {
      title: "Shared Legacy & Co-Attribution",
      desc: "Every discovery and invention advances both the individual researcher's career and the collective scientific heritage of the Council."
    }
  ],

  membership: {
    eligibility: "Membership in the Binary Brains Council of Intellects is open to researchers, engineers, scholars, and university innovators worldwide who demonstrate exceptional intellectual curiosity, technical capability, and commitment to collaborative discovery.",
    categories: [
      {
        name: "Founding Fellows",
        badge: "Charter Leadership",
        details: "The eight founding council members who established BBCI's institutional vision, research architecture, and global governance.",
      },
      {
        name: "General Council Members",
        badge: "Core Membership",
        details: "Admitted researchers, engineers, students, and scholars participating in colloquia, symposiums, and council-wide initiatives.",
      },
      {
        name: "Research & Project Fellows",
        badge: "Lab Contributors",
        details: "Members actively assigned to specialized BBCI research groups, co-authoring publications, and building technical prototypes.",
      }
    ],
    fees: {
      registration: "BDT 500",
      registrationNote: "One-time institutional onboarding and registration fee upon admission.",
      monthly: "BDT 300",
      monthlyNote: "Monthly contribution supporting research compute, symposiums, and lab grants.",
      constitutionalNote: "100% of member contributions are reinvested into research projects, publication support, and technical programs."
    },
    rights: [
      "Participate in weekly global colloquia, monthly research symposiums, and annual innovation fests.",
      "Propose, lead, or join interdisciplinary research and engineering project groups.",
      "Receive 70% creator royalty equity and guaranteed co-attribution on all patented or commercialized innovations.",
      "Access council research mentorship, peer-review networks, and publication support.",
      "Represent BBCI at international hackathons, academic conferences, and technical competitions.",
      "Advance into Regional Leadership, Project Lead, and Executive Committee roles."
    ],
    obligations: [
      "Uphold the highest standards of scientific integrity, original research, and ethical collaboration.",
      "Contribute actively to assigned research tracks, working groups, or scholarly reviews.",
      "Maintain active standing through regular participation and timely institutional dues.",
      "Foster an inclusive, respectful, and intellectually rigorous environment for all fellow members."
    ]
  },

  ipPolicy: {
    jointCredit: "All research papers, software frameworks, and inventions developed within BBCI labs carry joint attribution—crediting the individual authors and inventors alongside the Binary Brains Council of Intellects.",
    royaltyDistribution: {
      creatorsShare: "70%",
      creatorsDesc: "Directly awarded to the researchers, engineers, and creators who built the work.",
      councilShare: "30%",
      councilDesc: "Reinvested into the BBCI Research Endowment to fund future lab grants and student innovations.",
    },
    ownership: "BBCI's creator-first IP framework ensures researchers retain primary financial benefit while leveraging the institutional backing and patent support of an international council."
  }
};
