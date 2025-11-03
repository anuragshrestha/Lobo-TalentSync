import React, { useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useEmployerChat } from './EmployerChatContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type ChatStackParamList = {
  EmployerChatInbox: undefined;
  EmployerChatConversation: { threadId: string };
};

type Props = NativeStackScreenProps<ChatStackParamList, 'EmployerChatConversation'>;

const EmployerChatConversation = ({ route }: Props) => {
  const { threadId } = route.params;
  const { getThread, sendMessage } = useEmployerChat();
  const thread = getThread(threadId);
  const [text, setText] = useState('');
  const listRef = useRef<FlatList>(null);

  const data = useMemo(() => thread?.messages ?? [], [thread]);

  const onSend = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    sendMessage(threadId, trimmed);
    setText('');
    requestAnimationFrame(() => listRef.current?.scrollToEnd({ animated: true }));
  };

  if (!thread) {
    return (
      <View style={[styles.container, { alignItems: 'center', justifyContent: 'center' }]}>
        <Text style={{ color: '#E2E8F0' }}>Thread not found.</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <FlatList
        ref={listRef}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.bubble,
              item.sender === 'me' ? styles.bubbleMe : styles.bubbleThem,
            ]}
          >
            <Text style={{ color: '#fff' }}>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={{ padding: 12 }}
        onContentSizeChange={() => listRef.current?.scrollToEnd({ animated: false })}
        onLayout={() => listRef.current?.scrollToEnd({ animated: false })}
      />
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          placeholderTextColor="#94A3B8"
          value={text}
          onChangeText={setText}
          multiline
        />
        <Pressable style={styles.sendBtn} onPress={onSend}>
          <Ionicons name="send" size={18} color="#fff" />
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

export default EmployerChatConversation;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A' },
  bubble: {
    maxWidth: '80%',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginVertical: 6,
  },
  bubbleMe: {
    alignSelf: 'flex-end',
    backgroundColor: '#2563EB',
    borderBottomRightRadius: 4,
  },
  bubbleThem: {
    alignSelf: 'flex-start',
    backgroundColor: '#2563EB',
    borderBottomLeftRadius: 4,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#1E293B',
    backgroundColor: '#0F172A',
  },
  input: {
    flex: 1,
    minHeight: 40,
    maxHeight: 120,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#0B1224',
    borderRadius: 20,
    marginRight: 8,
    color: '#E2E8F0',
  },
  sendBtn: {
    backgroundColor: '#2563EB',
    padding: 10,
    borderRadius: 20,
  },
});
