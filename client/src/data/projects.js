/**
 * BINARY BRAINS COUNCIL OF INTELLECTS (BBCI)
 * Research Labs & Innovation Projects Register
 */

import { LOCAL_PLACEHOLDER_IMAGE } from './organization';

export const PROJECT_GOVERNANCE = {
  rule1: "Focused Autonomy: Each research group operates as a dedicated unit focused on a singular frontier challenge at a time.",
  rule2: "Interdisciplinary Synthesis: Teams combine analytical systems engineering with creative domain research.",
  rule3: "Peer-Reviewed Milestones: Proposals, technical architectures, and experimental results undergo structured council peer review.",
  rule4: "Creator-First IP Equity: 70% of all licensing and patent royalties go directly to the contributing researchers and inventors.",
  rule5: "Joint Attribution: All papers, codebases, and patents carry inseparable joint credit between the creators and BBCI.",
  rule6: "Open Collaboration: Lab tracks welcome both internal BBCI fellows and external institutional research partners.",
};

export const PROJECT_CATEGORIES = [
  "All Disciplines",
  "Artificial Intelligence & Systems",
  "Distributed Networks",
  "Computational Biology",
  "Open Hardware & Robotics",
  "Applied Mathematics"
];

export const PROJECTS_DATA = [
  {
    id: "proj-neurosync",
    title: "NeuroSync: Hybrid Symbolic-Neural Reasoning Architecture",
    projectGroup: "BBCI Cognitive & AI Systems Lab",
    category: "Artificial Intelligence & Systems",
    status: "Active Research Track",
    projectLeader: "AI & Cognitive Division",
    description: "Developing an interpretable machine intelligence framework that unifies structured logical inference (analytical left-brain modeling) with deep neural representation learning (creative right-brain synthesis) for high-stakes scientific decision support.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=80",
    fallbackImage: LOCAL_PLACEHOLDER_IMAGE,
    disciplines: ["Neural-Symbolic AI", "Machine Reasoning", "Deep Learning", "Interpretability"]
  },
  {
    id: "proj-meshnet",
    title: "BBCI MeshNet: Decentralized Scientific Compute & Data Protocol",
    projectGroup: "BBCI Distributed Systems Working Group",
    category: "Distributed Networks",
    status: "Prototype Development",
    projectLeader: "Systems & Network Division",
    description: "An open-source distributed network protocol engineered for low-latency academic dataset replication, peer-to-peer collaborative compute verification, and fault-tolerant communication across global research nodes.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    fallbackImage: LOCAL_PLACEHOLDER_IMAGE,
    disciplines: ["Distributed Systems", "Peer-to-Peer Networks", "Fault Tolerance", "Cloud Architecture"]
  },
  {
    id: "proj-biocompute",
    title: "BioGraph: Multi-Scale Biological Network & Sequence Inference",
    projectGroup: "BBCI Computational Biology Initiative",
    category: "Computational Biology",
    status: "Active Research Track",
    projectLeader: "Bioinformatics Lab",
    description: "High-throughput algorithmic pipelines leveraging message-passing graph neural networks to model protein-protein interaction topologies, genomic regulatory motifs, and structural biomarkers.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80",
    fallbackImage: LOCAL_PLACEHOLDER_IMAGE,
    disciplines: ["Bioinformatics", "Graph Neural Networks", "Computational Genomics", "Biomarkers"]
  },
  {
    id: "proj-swarmbot",
    title: "SwarmCore: Autonomous Micro-Robotics & Cooperative Navigation",
    projectGroup: "BBCI Robotics & Embedded Systems Lab",
    category: "Open Hardware & Robotics",
    status: "Hardware Testbed",
    projectLeader: "Autonomous Systems Group",
    description: "Designing modular, low-power autonomous robotic agents capable of GPS-denied localization, decentralized swarm coordination, and real-time spatial mapping in unstructured environments.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80",
    fallbackImage: LOCAL_PLACEHOLDER_IMAGE,
    disciplines: ["Swarm Robotics", "Embedded C/Rust", "Sensor Fusion", "Edge AI"]
  },
  {
    id: "proj-veriproof",
    title: "VeriCite: Cryptographic Provenance for Collaborative Research",
    projectGroup: "BBCI Applied Mathematics & Security Group",
    category: "Applied Mathematics",
    status: "Active Development",
    projectLeader: "Formal Methods & Crypto Lab",
    description: "Applying zero-knowledge proofs and cryptographic merkle trees to establish verifiable timestamps, reproducible dataset lineage, and transparent multi-author attribution for scientific manuscripts.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80",
    fallbackImage: LOCAL_PLACEHOLDER_IMAGE,
    disciplines: ["Cryptography", "Zero-Knowledge Proofs", "Applied Mathematics", "Data Provenance"]
  },
  {
    id: "proj-ecosense",
    title: "EcoSense: Spatio-Temporal Climate & Hydrological Forecasting",
    projectGroup: "BBCI Environmental & Earth Informatics Group",
    category: "Artificial Intelligence & Systems",
    status: "Collaborative Initiative",
    projectLeader: "Earth & Climate Informatics",
    description: "Fusing multi-spectral satellite remote sensing with ground IoT telemetry and spatio-temporal transformer models to forecast urban microclimates, flood dynamics, and ecological shifts.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
    fallbackImage: LOCAL_PLACEHOLDER_IMAGE,
    disciplines: ["Climate Informatics", "Spatio-Temporal AI", "Remote Sensing", "IoT Telemetry"]
  }
];

export const PLACEHOLDER_PROJECT_TEMPLATE = PROJECTS_DATA[0];
