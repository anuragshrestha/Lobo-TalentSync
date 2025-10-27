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
};

export const jobs: Job[] = [
  {
    id: '1',
    title: 'iOS Developer (SwiftUI)',
    company: 'Mevlo',
    logoUrl: 'https://i.pravatar.cc/100?img=5',
    description:
      'We are looking for a passionate iOS developer to help build our next-generation mobile experiences using SwiftUI. You’ll collaborate closely with our design and backend teams to develop performant, elegant, and user-friendly interfaces. The ideal candidate is comfortable with API integration, modular code architecture, and continuous deployment pipelines. You’ll take ownership of key app features, write clean and testable code, and participate in regular code reviews. Join us to build delightful experiences that impact thousands of real estate investors across the country.',
    postedAt: '2025-10-23T18:22:00.000Z',
    location: 'Albuquerque, NM',
    employmentType: 'Full-time',
    numOfEmployees: '500-1000',
    minRequirements: [
      '2+ years iOS (Swift/SwiftUI)',
      'REST/GraphQL API integration',
      'Unit/UI testing (XCTest)',
      'CI/CD familiarity (Fastlane/GitHub Actions)',
    ],
  },
  {
    id: '2',
    title: 'Frontend Engineer (React)',
    company: 'Lobo TalentSync',
    logoUrl: 'https://i.pravatar.cc/100?img=7',
    description:
      'We are looking for a talented Frontend Engineer with strong experience in React and TypeScript to join our growing product team. You’ll be responsible for crafting responsive, accessible, and visually appealing user interfaces that help students and recruiters connect seamlessly. This role involves translating Figma designs into production-ready components and collaborating closely with designers and backend engineers. You will also focus on performance optimization and ensuring a smooth, scalable architecture. If you’re passionate about modern web technologies and elegant UI, we want to hear from you.',
    postedAt: '2025-10-25T09:12:00.000Z',
    location: 'Remote',
    employmentType: 'Full-time',
    numOfEmployees: '1000-2000',
    minRequirements: [
      '2+ years React + TypeScript',
      'State mgmt (Redux/Zustand/RTK)',
      'CSS-in-JS or Tailwind',
      'Accessibility & performance basics',
    ],
  },
  {
    id: '3',
    title: 'Backend Developer (Node.js)',
    company: 'InvestDoor',
    logoUrl: 'https://i.pravatar.cc/100?img=10',
    description:
      'We are seeking a Backend Developer to build and maintain scalable APIs using Node.js, Express, and PostgreSQL. You’ll work closely with frontend teams to ensure smooth communication between client and server, with a strong focus on data integrity and performance. Experience with authentication flows, caching, and AWS infrastructure will be a big plus. This position offers an opportunity to contribute to architecture decisions and design secure, maintainable systems. You’ll also help implement monitoring and testing strategies to ensure reliability across all deployments.',
    postedAt: '2025-10-24T15:40:00.000Z',
    location: 'Austin, TX',
    employmentType: 'Full-time',
    numOfEmployees: '500-1000',
    minRequirements: [
      '3+ years Node.js/Express',
      'SQL & PostgreSQL proficiency',
      'Auth/JWT and caching',
      'Docker basics',
    ],
  },
  {
    id: '4',
    title: 'Mobile App Designer (Figma)',
    company: 'UNM ESS Portal',
    logoUrl: 'https://i.pravatar.cc/100?img=11',
    description:
      'We are looking for a creative and detail-oriented Mobile App Designer to design intuitive and impactful mobile experiences for students. You’ll be responsible for building design systems, wireframes, and high-fidelity prototypes that align with brand guidelines. Collaboration with developers and UX researchers will be a daily part of your role. You’ll also participate in design critiques and user testing to continuously improve user flows. This position is ideal for someone who enjoys crafting polished UI and thoughtful UX for large student-facing applications.',
    postedAt: '2025-10-20T12:00:00.000Z',
    location: 'Albuquerque, NM',
    employmentType: 'Contract',
    numOfEmployees: '100-500',
    minRequirements: [
      'Strong Figma skills',
      'Design systems & variants',
      'Mobile HIG/Material basics',
      'Portfolio of shipped work',
    ],
  },
  {
    id: '5',
    title: 'Data Analyst (Python & SQL)',
    company: 'NASA Space Apps',
    logoUrl: 'https://i.pravatar.cc/100?img=12',
    description:
      'We are looking for a Data Analyst to support NASA’s environmental and satellite projects by uncovering insights from large datasets. You will clean, process, and analyze complex data using Python and SQL to help drive decision-making. Experience with data visualization and dashboard tools such as Tableau or Power BI is required. You’ll also collaborate with scientists and engineers to validate findings and ensure accuracy. This role offers a unique chance to contribute to sustainability initiatives with real-world impact on environmental monitoring.',
    postedAt: '2025-10-21T08:32:00.000Z',
    location: 'Remote',
    employmentType: 'Internship',
    numOfEmployees: '500-1000',
    minRequirements: [
      'Python (pandas, NumPy)',
      'SQL querying/joins',
      'Data viz (Tableau/Power BI/Matplotlib)',
      'Clear communication of findings',
    ],
  },
  {
    id: '6',
    title: 'Machine Learning Engineer',
    company: 'AirSense Labs',
    logoUrl: 'https://i.pravatar.cc/100?img=13',
    description:
      'AirSense Labs is looking for a Machine Learning Engineer to help build real-time air quality prediction models. You will design, train, and deploy scalable ML pipelines using TensorFlow or PyTorch. The ideal candidate has experience with cloud-based workflows, feature engineering, and data preprocessing. You’ll collaborate with cross-functional teams to integrate predictive insights into production systems. This is an exciting opportunity to apply ML skills toward solving real environmental challenges at scale.',
    postedAt: '2025-10-18T17:30:00.000Z',
    location: 'Seattle, WA',
    employmentType: 'Full-time',
    numOfEmployees: '3000-10000',
    minRequirements: [
      'ML frameworks (TensorFlow/PyTorch)',
      'Model training & evaluation',
      'Data pipelines (Airflow/Prefect)',
      'Cloud deployment (AWS/GCP/Azure)',
    ],
  },
  {
    id: '7',
    title: 'Software Engineer Intern',
    company: 'TechLeap',
    logoUrl: 'https://i.pravatar.cc/100?img=14',
    description:
      'TechLeap is seeking motivated software engineering interns eager to learn and grow. Over 12 weeks, you will work with mentors to build new features and fix bugs across both mobile and web platforms. You’ll get exposure to full-stack development, Agile workflows, and modern DevOps practices. Interns are encouraged to propose ideas and take ownership of projects. This internship provides a collaborative, supportive environment perfect for students preparing to launch their careers in tech.',
    postedAt: '2025-10-15T10:50:00.000Z',
    location: 'Denver, CO',
    employmentType: 'Internship',
    numOfEmployees: '50-100',
    minRequirements: [
      'CS fundamentals (DSA)',
      'Basic React or Node',
      'Git/GitHub workflows',
      'Eagerness to learn & iterate',
    ],
  },
  {
    id: '8',
    title: 'DevOps Engineer (AWS)',
    company: 'CloudBridge',
    logoUrl: 'https://i.pravatar.cc/100?img=15',
    description:
      'We are hiring a DevOps Engineer to manage and scale our cloud infrastructure across AWS. You’ll implement CI/CD pipelines, automate deployments, and monitor performance to ensure uptime and efficiency. This role requires strong knowledge of Docker, Kubernetes, and infrastructure-as-code tools. You will collaborate with engineering teams to streamline development workflows and improve system reliability. If you enjoy solving complex infrastructure challenges and optimizing workflows, this role is for you.',
    postedAt: '2025-10-22T19:45:00.000Z',
    location: 'Remote',
    employmentType: 'Full-time',
    numOfEmployees: '10000+',
    minRequirements: [
      'AWS (EC2, ECS/EKS, IAM)',
      'CI/CD (GitHub Actions/CircleCI)',
      'Containers (Docker)',
      'Infra as Code (Terraform/CloudFormation)',
    ],
  },
  {
    id: '9',
    title: 'Product Manager (Tech)',
    company: 'ByteStream',
    logoUrl: 'https://i.pravatar.cc/100?img=16',
    description:
      'We’re looking for a Product Manager to lead the strategy and execution of core product features. You’ll work cross-functionally with engineering, design, and marketing to define user needs and align product roadmaps. The ideal candidate has experience translating data insights into business decisions and thrives in fast-paced environments. You will be responsible for prioritizing initiatives, tracking KPIs, and ensuring successful product launches. If you’re a strategic thinker who enjoys delivering value to users, we’d love to meet you.',
    postedAt: '2025-10-26T07:15:00.000Z',
    location: 'San Francisco, CA',
    employmentType: 'Full-time',
    numOfEmployees: '10000+',
    minRequirements: [
      '2+ years PM experience',
      'Backlog/roadmap ownership',
      'User research & analytics',
      'Strong written communication',
    ],
  },
  {
    id: '10',
    title: 'UX Researcher',
    company: 'Luna Studios',
    logoUrl: 'https://i.pravatar.cc/100?img=17',
    description:
      'We are looking for a UX Researcher to help shape product design through user insights and data. You will plan and conduct usability studies, interviews, and surveys to understand user behaviors. The role involves synthesizing findings into actionable recommendations for design and development teams. You’ll collaborate closely with designers and PMs to validate design decisions and improve usability. If you have a passion for creating intuitive experiences backed by research, this is the role for you.',
    postedAt: '2025-10-23T11:00:00.000Z',
    location: 'Remote',
    employmentType: 'Contract',
    numOfEmployees: '500-1000',
    minRequirements: [
      'Research planning & methods',
      'Qual/quant synthesis',
      'Usability testing',
      'Clear reporting & storytelling',
    ],
  },
];