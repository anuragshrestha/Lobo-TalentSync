import React, { createContext, useContext, useMemo, useState } from 'react';
import { ChatMessage } from '../../../utils/ChatData';
import { EmployerChatThread, employerThreads } from '../../../utils/EmployerChatData';

type EmployerChatContextType = {
  threads: EmployerChatThread[];
  getThread: (id: string) => EmployerChatThread | undefined;
  sendMessage: (id: string, text: string) => void;
};

const EmployerChatContext = createContext<EmployerChatContextType | undefined>(undefined);

export const EmployerChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [threads, setThreads] = useState<EmployerChatThread[]>(employerThreads);

  const value = useMemo<EmployerChatContextType>(() => ({
    threads,
    getThread: (id: string) => threads.find(t => t.id === id),
    sendMessage: (id: string, text: string) => {
      setThreads(prev =>
        prev.map(t =>
          t.id === id
            ? {
                ...t,
                messages: [
                  ...t.messages,
                  { id: `${id}-${Date.now()}`, text, sender: 'me' as ChatMessage['sender'], ts: Date.now() },
                ],
                unread: 0,
              }
            : t,
        ),
      );
    },
  }), [threads]);

  return <EmployerChatContext.Provider value={value}>{children}</EmployerChatContext.Provider>;
};

export const useEmployerChat = (): EmployerChatContextType => {
  const ctx = useContext(EmployerChatContext);
  if (!ctx) throw new Error('useEmployerChat must be used within EmployerChatProvider');
  return ctx;
};

