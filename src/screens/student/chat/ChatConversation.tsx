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
import { useChat } from './ChatContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type ChatStackParamList = {
  ChatInbox: undefined;
  ChatConversation: { threadId: string };
};

type Props = NativeStackScreenProps<ChatStackParamList, 'ChatConversation'>;

const ChatConversation = ({ route }: Props) => {
  const { threadId } = route.params;
  const { getThread, sendMessage } = useChat();
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
        <Text>Thread not found.</Text>
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
            <Text style={{ color: item.sender === 'me' ? '#fff' : '#111' }}>{item.text}</Text>
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

export default ChatConversation;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
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
    backgroundColor: '#F3F4F6',
    borderBottomLeftRadius: 4,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    minHeight: 40,
    maxHeight: 120,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#f7f7f8',
    borderRadius: 20,
    marginRight: 8,
  },
  sendBtn: {
    backgroundColor: '#2563EB',
    padding: 10,
    borderRadius: 20,
  },
});

