export type Job = {
  id: string;
  title: string;
  company: string;
  logoUrl: string;
  description: string;
  location?: string;
  employmentType?: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  postedAt: string;
  numOfEmployees: string;
  minRequirements: [string, string, string, ...string[]];
  status?: 'Active' | 'Paused' | 'Inactive';
  applicants?: number;
};


export type AppliedJob = {
  id: string;
  title: string;
  company: string;
  logoUrl: string;
  location?: string;
  employmentType?: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  appliedAt: string;
  numOfEmployees: string;
};

export const jobs: Job[] = [
  {
    id: 'sandia-cyber-1',
    title: 'Cyber Security - New Grad',
    company: 'Sandia National Lab',
    logoUrl: 'https://logo.clearbit.com/sandia.gov',
    description:
      'Protect mission-critical systems by implementing secure coding practices, conducting vulnerability assessments, and automating security checks. Work with senior engineers to harden services, monitor threats, and document remediation steps.',
    postedAt: '2025-10-24T18:22:00.000Z',
    location: 'Albuquerque, NM',
    employmentType: 'Full-time',
    numOfEmployees: '10000+',
    status: 'Active',
    applicants: 42,
    minRequirements: [
      'Security, networks, or OS coursework',
      'Scripting in Python/Bash',
      'Linux and Git basics',
      'Familiarity with threat modeling',
    ],
  },
  {
    id: 'microsoft-se-1',
    title: 'Software Engineer',
    company: 'Microsoft',
    logoUrl: 'https://logo.clearbit.com/microsoft.com',
    description:
      'Design, build, and maintain reliable services and APIs. Collaborate with cross‑functional teams to deliver features end‑to‑end with strong testing, monitoring, and performance considerations in a cloud environment.',
    postedAt: '2025-10-20T12:00:00.000Z',
    location: 'Redmond, WA',
    employmentType: 'Full-time',
    numOfEmployees: '10000+',
    status: 'Active',
    applicants: 107,
    minRequirements: [
      'Strong coding skills (C#, Java, or Go)',
      'Distributed systems fundamentals',
      'REST/gRPC and cloud services',
      'Automated testing & CI/CD',
    ],
  },
  {
    id: 'intel-ai-1',
    title: 'AI Engineer',
    company: 'Intel',
    logoUrl: 'https://logo.clearbit.com/intel.com',
    description:
      'Build and optimize ML pipelines for training and inference. Implement model evaluation, quantization, and acceleration strategies while collaborating with platform teams to ship efficient, production‑ready AI solutions.',
    postedAt: '2025-10-25T15:40:00.000Z',
    location: 'Hillsboro, OR',
    employmentType: 'Full-time',
    numOfEmployees: '10000+',
    status: 'Paused',
    applicants: 23,
    minRequirements: [
      'Python + PyTorch/TensorFlow',
      'Data processing & evaluation',
      'Deployment (ONNX/OpenVINO) basics',
      'Performance profiling & optimization',
    ],
  },
  {
    id: 'apple-mobile-1',
    title: 'iOS App Developer',
    company: 'Apple',
    logoUrl: 'https://logo.clearbit.com/apple.com',
    description:
      'Develop high‑quality mobile features with Swift and SwiftUI. Collaborate with design to create polished experiences, ensure performance on‑device, and uphold accessibility, privacy, and testing best practices.',
    postedAt: '2025-10-23T11:00:00.000Z',
    location: 'Cupertino, CA',
    employmentType: 'Full-time',
    numOfEmployees: '10000+',
    status: 'Inactive',
    applicants: 12,
    minRequirements: [
      'Swift and iOS SDK proficiency',
      'UIKit/SwiftUI for UI development',
      'Unit/UI testing and debugging',
      'App performance & accessibility',
    ],
  },
  {
    id: 'amazon-pm-1',
    title: 'Software Engineering Intern',
    company: 'Amazon',
    logoUrl: 'https://logo.clearbit.com/amazon.com',
    description:
      'Own product vision and roadmap across cross‑functional teams. Drive data‑informed decisions and deliver customer‑obsessed solutions at scale.',
    postedAt: '2025-10-22T09:30:00.000Z',
    location: 'New York, NY',
    employmentType: 'Full-time',
    numOfEmployees: '10000+',
    status: 'Active',
    applicants: 107,
    minRequirements: [
      '5+ years product management',
      'A/B testing and analytics',
      'Agile delivery',
      'Stakeholder communication',
    ],
  },
  {
    id: 'google-ux-1',
    title: 'Web Developer Intern',
    company: 'Google',
    logoUrl: 'https://logo.clearbit.com/google.com',
    description:
      'Design end‑to‑end user experiences, prototypes, and collaborate with researchers and engineers to ship delightful products.',
    postedAt: '2025-10-26T14:10:00.000Z',
    location: 'San Francisco, CA',
    employmentType: 'Full-time',
    numOfEmployees: '10000+',
    status: 'Active',
    applicants: 42,
    minRequirements: [
      'UX portfolio of shipped work',
      'Figma/Sketch proficiency',
      'User research collaboration',
      'Interaction + visual design',
    ],
  },
  {
    id: 'meta-fe-1',
    title: 'Frontend Engineer',
    company: 'Meta',
    logoUrl: 'https://logo.clearbit.com/meta.com',
    description:
      'Build performant, accessible web experiences using React and TypeScript, partnering with product and design to iterate quickly.',
    postedAt: '2025-10-21T08:00:00.000Z',
    location: 'Menlo Park, CA',
    employmentType: 'Full-time',
    numOfEmployees: '10000+',
    status: 'Paused',
    applicants: 65,
    minRequirements: [
      'Strong React/TypeScript',
      'Web performance fundamentals',
      'Testing & accessibility',
      'CI/CD familiarity',
    ],
  },
  {
    id: 'netflix-ds-1',
    title: 'Data Scientist',
    company: 'Netflix',
    logoUrl: 'https://logo.clearbit.com/netflix.com',
    description:
      'Use experimentation and statistical modeling to inform product decisions and optimize member experience.',
    postedAt: '2025-10-19T10:25:00.000Z',
    location: 'Los Gatos, CA',
    employmentType: 'Full-time',
    numOfEmployees: '5000+',
    status: 'Inactive',
    applicants: 18,
    minRequirements: [
      'Statistics & experimentation',
      'Python/R and SQL',
      'Data storytelling',
      'Causal inference basics',
    ],
  },
  {
    id: 'openai-ml-1',
    title: 'ML Research Engineer',
    company: 'OpenAI',
    logoUrl: 'https://logo.clearbit.com/openai.com',
    description:
      'Prototype, train, and evaluate state‑of‑the‑art ML systems; collaborate to deploy safe and useful AI.',
    postedAt: '2025-10-27T16:45:00.000Z',
    location: 'Remote',
    employmentType: 'Contract',
    numOfEmployees: '1000+',
    status: 'Active',
    applicants: 89,
    minRequirements: [
      'Python + deep learning',
      'Experiment design & eval',
      'Distributed training basics',
      'Reading papers & prototyping',
    ],
  },
];


export const AppliedJobs: AppliedJob[] = [
  {
    id: 'intel-ai-1',
    title: 'AI Engineer',
    company: 'Intel',
    logoUrl: 'https://logo.clearbit.com/intel.com',
    appliedAt: 'Applied recently',
    location: 'Hillsboro, OR',
    employmentType: 'Full-time',
    numOfEmployees: '10000+',
  },
  {
    id: 'microsoft-se-1',
    title: 'Software Engineer',
    company: 'Microsoft',
    logoUrl: 'https://logo.clearbit.com/microsoft.com',
    appliedAt: 'Applied recently',
    location: 'Redmond, WA',
    employmentType: 'Full-time',
    numOfEmployees: '10000+',
  },
  {
    id: 'sandia-cyber-1',
    title: 'Software Engineer',
    company: 'Sandia National Lab',
    logoUrl: 'https://logo.clearbit.com/sandia.gov',
    appliedAt: 'Applied 10 hours ago',
    location: 'Albuquerque, NM',
    employmentType: 'Internship',
    numOfEmployees: '10000+',
  },
  {
    id: 'lockheed-se-1',
    title: 'Software Engineer',
    company: 'Lockheed Martin',
    logoUrl: 'https://logo.clearbit.com/lockheedmartin.com',
    appliedAt: 'Applied 1 day ago',
    location: 'Fort Worth, TX',
    employmentType: 'Full-time',
    numOfEmployees: '10000+',
  },
  {
    id: 'apple-mobile-1',
    title: 'Mobile App Developer',
    company: 'Apple',
    logoUrl: 'https://logo.clearbit.com/apple.com',
    appliedAt: 'Applied 1 day ago',
    location: 'Cupertino, CA',
    employmentType: 'Full-time',
    numOfEmployees: '10000+',
  },
];
