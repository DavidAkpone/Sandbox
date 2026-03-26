export type Topic = {
  slug: string;
  name: string;
  description: string;
  threads: number;
  posts: number;
  lastActive: string;
  prompt: string;
  focus: string[];
  samplePosts: {
    author: string;
    title: string;
    body: string;
    timestamp: string;
  }[];
};

export const topics: Topic[] = [
  {
    slug: "hydraulic-systems",
    name: "Hydraulic Systems",
    description:
      "Discuss pumps, valves, work functions, pressure behavior, leakage diagnostics, and best practices for smooth machine performance.",
    threads: 24,
    posts: 138,
    lastActive: "Active today",
    prompt: "How do you approach slow boom response during cold starts?",
    focus: ["Pumps", "Valves", "Pressure checks", "Leak diagnostics"],
    samplePosts: [
      {
        author: "Lars M.",
        title: "Cold-start boom delay on wheel loader",
        body:
          "We saw a repeatable delay in first lift response below 5 C. The best clue turned out to be a suction-side restriction combined with thick oil during startup.",
        timestamp: "Today, 08:20",
      },
      {
        author: "Anna T.",
        title: "Best way to document pressure tests",
        body:
          "I am looking for a clean template for recording standby pressure, relief pressure, and function response before and after repair.",
        timestamp: "Yesterday, 16:45",
      },
    ],
  },
  {
    slug: "electrical-systems",
    name: "Electrical Systems",
    description:
      "Share insights about wiring, sensors, connectors, control units, fault tracing, and electrical reliability in the field.",
    threads: 31,
    posts: 192,
    lastActive: "2 hours ago",
    prompt: "What is your preferred workflow for intermittent CAN-related faults?",
    focus: ["Harnesses", "Connectors", "Sensors", "CAN communication"],
    samplePosts: [
      {
        author: "Mikael S.",
        title: "Intermittent sensor fault after washdown",
        body:
          "We traced this to moisture entering a connector that looked fine from the outside. Dielectric grease solved the repeat issue after pin cleanup.",
        timestamp: "Today, 10:05",
      },
      {
        author: "Rina P.",
        title: "CAN troubleshooting checklist",
        body:
          "Posting the sequence we use: verify voltage, check termination resistance, isolate branches, then compare live node traffic against known-good machines.",
        timestamp: "Tuesday, 14:10",
      },
    ],
  },
  {
    slug: "eats",
    name: "EATS",
    description:
      "A space for aftertreatment discussions including DEF, DPF, SCR, regeneration behavior, emissions troubleshooting, and service observations.",
    threads: 19,
    posts: 104,
    lastActive: "This morning",
    prompt: "Which early indicators usually point to a regeneration issue?",
    focus: ["DEF", "DPF", "SCR", "Regeneration"],
    samplePosts: [
      {
        author: "Jonas H.",
        title: "Frequent parked regeneration requests",
        body:
          "The operator reported more parked regens than normal. Soot loading trend plus duty cycle review helped us narrow it down much faster than chasing sensors first.",
        timestamp: "Today, 07:50",
      },
      {
        author: "Elin F.",
        title: "NOx sensor replacement follow-up checks",
        body:
          "After replacement we are confirming the adaptation process and checking the downstream readings over a full temperature sweep before closing the case.",
        timestamp: "Monday, 11:30",
      },
    ],
  },
  {
    slug: "electromobility",
    name: "Electromobility",
    description:
      "Explore battery systems, charging strategies, high-voltage safety, thermal management, and electric machine architecture.",
    threads: 15,
    posts: 87,
    lastActive: "Yesterday",
    prompt: "What topics should every technician know before working on high-voltage machines?",
    focus: ["Battery packs", "Charging", "HV safety", "Thermal control"],
    samplePosts: [
      {
        author: "David K.",
        title: "Pre-job checklist for HV service work",
        body:
          "We built a short checklist for lockout, PPE, proving dead, and documenting isolation points. It has helped standardize work across the team.",
        timestamp: "Yesterday, 15:10",
      },
      {
        author: "Sofia L.",
        title: "Cooling performance during fast charging",
        body:
          "Has anyone compared charge acceptance against coolant temperature on the compact electric line? We are seeing a pattern but need more field examples.",
        timestamp: "Sunday, 09:25",
      },
    ],
  },
  {
    slug: "powertrain-driveline",
    name: "Powertrain & Driveline",
    description:
      "Talk about engines, transmissions, axles, torque transfer, drivability, and how system interactions show up in diagnostics.",
    threads: 22,
    posts: 143,
    lastActive: "1 hour ago",
    prompt: "How do you separate transmission issues from engine-side performance losses?",
    focus: ["Engines", "Transmissions", "Axles", "Torque delivery"],
    samplePosts: [
      {
        author: "Peter N.",
        title: "Low travel force under load",
        body:
          "The machine felt weak uphill, but torque converter temperatures stayed normal. Engine boost data ended up telling the real story.",
        timestamp: "Today, 09:40",
      },
      {
        author: "Sara O.",
        title: "Shift quality after recent service",
        body:
          "Sharing a few checks we now do after oil and filter service to rule out level issues before we blame transmission calibration.",
        timestamp: "Wednesday, 13:15",
      },
    ],
  },
  {
    slug: "machine-control-software",
    name: "Machine Control Software",
    description:
      "Cover software behavior, calibration routines, machine parameters, HMI feedback, updates, and control logic questions.",
    threads: 17,
    posts: 96,
    lastActive: "Today",
    prompt: "Which calibration steps most often get overlooked after component replacement?",
    focus: ["Calibration", "Parameters", "HMI", "Updates"],
    samplePosts: [
      {
        author: "Oskar D.",
        title: "Calibration order after joystick replacement",
        body:
          "We had one case where repeating the sequence in the correct order fixed a drift complaint without changing any additional parts.",
        timestamp: "Today, 11:12",
      },
      {
        author: "Nina E.",
        title: "Version control for workshop updates",
        body:
          "Posting our simple note format for documenting machine software versions before and after update so handovers are clearer.",
        timestamp: "Tuesday, 17:00",
      },
    ],
  },
  {
    slug: "service-diagnostics",
    name: "Service & Diagnostics",
    description:
      "General troubleshooting, tools, case studies, workshop routines, service tips, and structured fault-finding across systems.",
    threads: 28,
    posts: 176,
    lastActive: "30 minutes ago",
    prompt: "What information do you always collect before opening a support case?",
    focus: ["Case studies", "Tools", "Root cause analysis", "Service routines"],
    samplePosts: [
      {
        author: "Emma R.",
        title: "Minimum data set before escalation",
        body:
          "We now require photos, fault codes, hours, software version, ambient conditions, and operator description before sending a case onward.",
        timestamp: "Today, 12:05",
      },
      {
        author: "Henrik B.",
        title: "Workshop habits that save time",
        body:
          "Small routine change: taking connector photos before disassembly has reduced rework and made remote support conversations much easier.",
        timestamp: "Thursday, 08:55",
      },
    ],
  },
];

export const adminDemoCredentials = {
  username: "admin",
  password: "volvo-demo",
};
