export type ChatMessage = {
  id: string;
  text: string;
  sender: 'me' | 'them';
  ts: number; // epoch ms
};

export type ChatThread = {
  id: string;
  company: string;
  logoUrl: string;
  messages: ChatMessage[];
};

const now = Date.now();

export const initialThreads: ChatThread[] = [
  {
    id: 'sandia',
    company: 'Sandia National Lab',
    logoUrl: 'https://logo.clearbit.com/sandia.gov',
    messages: [
      { id: 's1', text: 'Hi, I’m interested in the Cyber Security role posted recently.', sender: 'me', ts: now - 1000 * 60 * 60 * 4 },
      { id: 's2', text: 'Thanks for reaching out! Are you available for a quick screening this week?', sender: 'them', ts: now - 1000 * 60 * 60 * 4 + 60000 },
      { id: 's3', text: 'Yes, I’m free Thursday afternoon. I have coursework in security and Python scripting.', sender: 'me', ts: now - 1000 * 60 * 60 * 3 },
      { id: 's4', text: 'Great. Please share a brief on projects related to threat modeling.', sender: 'them', ts: now - 1000 * 60 * 60 * 3 + 60000 },
    ],
  },
  {
    id: 'microsoft',
    company: 'Microsoft',
    logoUrl: 'https://logo.clearbit.com/microsoft.com',
    messages: [
      { id: 'm1', text: 'Hello! I’m applying for the Software Engineer position on Azure.', sender: 'me', ts: now - 1000 * 60 * 60 * 6 },
      { id: 'm2', text: 'Hi there — do you have experience with distributed systems or cloud services?', sender: 'them', ts: now - 1000 * 60 * 60 * 6 + 300000 },
      { id: 'm3', text: 'Yes, I built a service with REST and queues, and deployed on Azure App Service.', sender: 'me', ts: now - 1000 * 60 * 60 * 5 },
      { id: 'm4', text: 'Nice! Let’s schedule a technical interview. I’ll send slots shortly.', sender: 'them', ts: now - 1000 * 60 * 60 * 5 + 600000 },
    ],
  },
  {
    id: 'intel',
    company: 'Intel',
    logoUrl: 'https://logo.clearbit.com/intel.com',
    messages: [
      { id: 'i1', text: 'Hi! I’m curious about AI Engineer openings focusing on inference optimization.', sender: 'me', ts: now - 1000 * 60 * 60 * 8 },
      { id: 'i2', text: 'We’re hiring for model optimization with OpenVINO and ONNX. Do you have relevant projects?', sender: 'them', ts: now - 1000 * 60 * 60 * 8 + 120000 },
      { id: 'i3', text: 'Yes, a project converting PyTorch models to ONNX and benchmarking latency.', sender: 'me', ts: now - 1000 * 60 * 60 * 7 },
      { id: 'i4', text: 'Perfect. Please share a short write‑up and we’ll proceed.', sender: 'them', ts: now - 1000 * 60 * 60 * 7 + 120000 },
    ],
  },
  {
    id: 'apple',
    company: 'Apple',
    logoUrl: 'https://logo.clearbit.com/apple.com',
    messages: [
      { id: 'a1', text: 'Hi Apple team, I’m exploring Mobile App Developer roles.', sender: 'me', ts: now - 1000 * 60 * 60 * 12 },
      { id: 'a2', text: 'Thanks! Do you have SwiftUI experience and performance profiling on iOS?', sender: 'them', ts: now - 1000 * 60 * 60 * 12 + 180000 },
      { id: 'a3', text: 'Yes, I’ve shipped a SwiftUI app with async image caching and instruments profiling.', sender: 'me', ts: now - 1000 * 60 * 60 * 11 },
      { id: 'a4', text: 'Great to hear. Please attach your portfolio when you can.', sender: 'them', ts: now - 1000 * 60 * 60 * 11 + 300000 },
    ],
  },
  {
    id: 'losAlamos',
    company: 'Los Alamos',
    logoUrl: 'https://logo.clearbit.com/lanl.gov',
    messages: [
      { id: 'l1', text: 'Hello! I’m interested in opportunities and networking at Los Alamos.', sender: 'me', ts: now - 1000 * 60 * 60 * 20 },
      { id: 'l2', text: 'Hi! We often have roles in HPC and research support. What’s your background?', sender: 'them', ts: now - 1000 * 60 * 60 * 20 + 240000 },
      { id: 'l3', text: 'I’ve done C++/Python work and parallel programming basics in school projects.', sender: 'me', ts: now - 1000 * 60 * 60 * 19 },
      { id: 'l4', text: 'Sounds good. Keep an eye on openings and feel free to follow up.', sender: 'them', ts: now - 1000 * 60 * 60 * 19 + 180000 },
    ],
  },
];

