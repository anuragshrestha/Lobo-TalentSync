import { ChatMessage } from './ChatData';

export type EmployerChatThread = {
  id: string;
  name: string;
  title: string;
  avatarUrl: string;
  messages: ChatMessage[];
  unread?: number;
};

const now = Date.now();

export const employerThreads: EmployerChatThread[] = [
  {
    id: 'jane',
    name: 'Jane Doe',
    title: 'Software Engineer',
    avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    unread: 2,
    messages: [
      { id: 'j1', text: "Sounds great, I'm looking forward to it!", sender: 'them', ts: now - 1000 * 60 * 2 },
      { id: 'j0', text: 'Let’s schedule a call for tomorrow morning.', sender: 'me', ts: now - 1000 * 60 * 8 },
    ],
  },
  {
    id: 'john',
    name: 'John Smith',
    title: 'AI Engineer',
    avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    messages: [
      { id: 'jo1', text: 'Attached is my updated resume.', sender: 'them', ts: now - 1000 * 60 * 60 },
      { id: 'jo0', text: 'Thanks John, received — we will review shortly.', sender: 'me', ts: now - 1000 * 60 * 60 - 300000 },
    ],
  },
  {
    id: 'priya',
    name: 'Priya Patel',
    title: 'Backend Engineer',
    avatarUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
    messages: [
      { id: 'p1', text: 'Thank you for the opportunity!', sender: 'them', ts: now - 1000 * 60 * 60 * 24 },
      { id: 'p0', text: 'We enjoyed your interview — next steps coming soon.', sender: 'me', ts: now - 1000 * 60 * 60 * 28 },
    ],
  },
  {
    id: 'michael',
    name: 'Michael Chen',
    title: 'Cloud Engineer',
    avatarUrl: 'https://randomuser.me/api/portraits/men/60.jpg',
    messages: [
      { id: 'mc1', text: 'Yes, that time works for me.', sender: 'them', ts: now - 1000 * 60 * 60 * 48 },
      { id: 'mc0', text: 'Can you do Wednesday afternoon?', sender: 'me', ts: now - 1000 * 60 * 60 * 52 },
    ],
  },
];

