import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatInbox from './chat/ChatInbox';
import ChatConversation from './chat/ChatConversation';
import { ChatProvider, useChat } from './chat/ChatContext';
import { Image, Text } from 'react-native';

type ChatStackParamList = {
  ChatInbox: undefined;
  ChatConversation: { threadId: string };
};

const Stack = createNativeStackNavigator<ChatStackParamList>();

const ConversationHeaderTitle = ({ threadId }: { threadId: string }) => {
  const { getThread } = useChat();
  const t = getThread(threadId);
  if (!t) return <Text>Chat</Text>;
  return (
    <>
      <Image source={{ uri: t.logoUrl }} style={{ width: 24, height: 24, borderRadius: 12, marginRight: 8 }} />
      <Text style={{ fontSize: 16, fontWeight: '600' }}>{t.company}</Text>
    </>
  );
};

const StudentChat = () => {
  return (
    <ChatProvider>
      <Stack.Navigator
        screenOptions={{  
          headerBackButtonDisplayMode: 'minimal',
        }}
      >
        <Stack.Screen name="ChatInbox" component={ChatInbox} options={{ title: 'Messages' }} />
        <Stack.Screen
          name="ChatConversation"
          component={ChatConversation}
          options={({ route }) => ({
            headerTitle: () => <ConversationHeaderTitle threadId={route.params.threadId} />,
          })}
        />
      </Stack.Navigator>
    </ChatProvider>
  );
};

export default StudentChat;
