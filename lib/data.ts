export const profile = {
  name: "Ayush Mathur",
  title: "Software Engineering Intern",
  nextTitle: "Software Engineer",
  tagline:
    "Building secure, scalable systems at the edge of AI, blockchain, and distributed software.",
  location: "Bengaluru, India",
  education: "B.E. Computer Science — RV College of Engineering",
  current: { company: "SAP", role: "Software Engineering Intern", until: "6 Jul 2026" },
  next: { company: "New Relic", role: "Software Engineer", from: "Aug 2026" },
  links: {
    github: "#",
    linkedin: "https://www.linkedin.com/in/amrvce/",
    email: "mathurkayush90@gmail.com",
    businessEmail: "ayush.mathur@sap.com",
    resume: "#",
  },
};

export const stats = [
  { label: "Years Coding", value: 2, suffix: "", decimal: false },
  { label: "Projects Shipped", value: 3, suffix: "", decimal: false },
  { label: "Hackathon Win", value: 1, suffix: "", decimal: false },
  { label: "CGPA", value: 8.66, suffix: "/10", decimal: true },
];

export const internship = {
  company: "SAP",
  role: "Software Engineering Intern",
  period: "12 Jan 2026 — 6 Jul 2026",
  location: "Bengaluru, India",
  description: "",
  bullets: [
    "Built a production-grade enterprise data pipeline in Python (Flask, pandas, SQLAlchemy) that calculates partner competency and specialization scores across SAP's global partner network.",
    "System evaluates partner organizations on certifications, project experience, and solution expertise — assigning competency levels (Essential, Advanced, Expert) across domains like SAP Business Data Cloud, AI, and Solution Architecture.",
    "Designed and implemented an automated data quality monitoring system that detects anomalies in pipeline output and sends real-time structured alerts to Microsoft Teams via OAuth2 and Adaptive Cards.",
    "Investigated and resolved a critical production failure caused by bulk database insert crashes due to NULL values in required columns.",
    "Collaborated on a multi-module calculation engine involving complex SQL queries, DataFrame transformations, and write-back to SAP HANA Cloud.",
    "Worked within an Agile CI/CD environment using Git and Honeycomb pipelines for automated testing and deployment to Cloud Foundry.",
  ],
  tags: ["Python", "Flask", "pandas", "SQLAlchemy", "SAP HANA Cloud", "OAuth2", "Cloud Foundry", "CI/CD"],
};

export const hobbies: { name: string; description: string }[] = [
  {
    name: "Gym",
    description: "Consistent gym sessions — good for discipline, energy, and mental clarity.",
  },
  {
    name: "Cooking",
    description: "Enjoy experimenting in the kitchen. Usually something quick, usually decent.",
  },
  {
    name: "Travelling",
    description: "Love exploring new places — different cultures, food, and perspectives reset the mind.",
  },
  {
    name: "Tech",
    description: "I genuinely feel cool when building things with tech. Not ironic at all.",
  },
];

export const projects: {
  name: string;
  tagline: string;
  brief: string;
  tech: string[];
  github?: string;
  demo?: string;
  accent: string;
}[] = [
  {
    name: "Smart Chair",
    tagline: "AI Posture Detection System",
    brief:
      "Real-time posture correction system using computer vision and IoT — detects 17 body keypoints at 30fps and delivers haptic feedback via embedded hardware.",
    tech: ["Python", "OpenCV", "PyTorch", "Raspberry Pi", "MQTT", "FastAPI"],
    github: "#",
    accent: "#6d6de8",
  },
  {
    name: "Campus Hall Management",
    tagline: "College Hostel Management System",
    brief:
      "Web application for managing campus hostel operations — room allotments, student records, maintenance requests, and fee tracking for college administration.",
    tech: ["Python", "Flask", "SQLAlchemy", "PostgreSQL", "React", "REST API"],
    github: "#",
    accent: "#6d6de8",
  },
  {
    name: "Secure US",
    tagline: "Threat Detection & Security Tooling",
    brief:
      "Unified security operations platform — aggregates logs, runs ML-based anomaly detection, and surfaces threats through a single-pane SOC dashboard with MITRE ATT&CK integration.",
    tech: ["Python", "FastAPI", "Elasticsearch", "Scikit-learn", "Redis", "Kafka"],
    github: "#",
    accent: "#6d6de8",
  },
];
