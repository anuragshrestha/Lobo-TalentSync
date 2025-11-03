import React, { createContext, useContext, useMemo, useState } from 'react';
import { ChatMessage, ChatThread, initialThreads } from '../../../utils/ChatData';

type ChatContextType = {
  threads: ChatThread[];
  getThread: (id: string) => ChatThread | undefined;
  sendMessage: (threadId: string, text: string) => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [threads, setThreads] = useState<ChatThread[]>(initialThreads);

  const getThread = (id: string) => threads.find(t => t.id === id);

  const sendMessage = (threadId: string, text: string) => {
    setThreads(prev =>
      prev.map(t => {
        if (t.id !== threadId) return t;
        const newMsg: ChatMessage = {
          id: `${threadId}-${Date.now()}`,
          text,
          sender: 'me',
          ts: Date.now(),
        };
        return { ...t, messages: [...t.messages, newMsg] };
      }),
    );
  };

  const value = useMemo(() => ({ threads, getThread, sendMessage }), [threads]);

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useChat = (): ChatContextType => {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error('useChat must be used within ChatProvider');
  return ctx;
};

