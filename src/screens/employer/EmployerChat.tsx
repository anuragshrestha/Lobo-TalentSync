import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EmployerChatInbox from './chat/EmployerChatInbox';
import EmployerChatConversation from './chat/EmployerChatConversation';
import { EmployerChatProvider, useEmployerChat } from './chat/EmployerChatContext';
import { Image, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type ChatStackParamList = {
  EmployerChatInbox: undefined;
  EmployerChatConversation: { threadId: string };
};

const Stack = createNativeStackNavigator<ChatStackParamList>();

const ConversationHeaderTitle = ({ threadId }: { threadId: string }) => {
  const { getThread } = useEmployerChat();
  const t = getThread(threadId);
  if (!t) return <Text style={{ color: '#E2E8F0' }}>Chat</Text>;
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image source={{ uri: t.avatarUrl }} style={{ width: 24, height: 24, borderRadius: 12, marginRight: 8 }} />
      <Text style={{ fontSize: 16, fontWeight: '600', color: '#E2E8F0' }}>{t.name}</Text>
    </View>
  );
};

const EmployerChat = () => {
  return (
    <EmployerChatProvider>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#0F172A' },
          headerTintColor: '#E2E8F0',
          headerTitleStyle: { color: '#E2E8F0' },
          headerShadowVisible: false,
          headerBackButtonDisplayMode: 'minimal',
        }}
      >
        <Stack.Screen
          name="EmployerChatInbox"
          component={EmployerChatInbox}
          options={{
            title: 'Messages',
            headerRight: () => (
              <View style={{ flexDirection: 'row', gap: 14 }}>
                <Ionicons name="search" size={20} color="#E2E8F0" />
                <Ionicons name="filter" size={20} color="#E2E8F0" />
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="EmployerChatConversation"
          component={EmployerChatConversation}
          options={({ route }) => ({
            headerTitle: () => <ConversationHeaderTitle threadId={route.params.threadId} />,
          })}
        />
      </Stack.Navigator>
    </EmployerChatProvider>
  );
};

export default EmployerChat;
