import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Pressable } from 'react-native';
import { useChat } from './ChatContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type ChatStackParamList = {
  ChatInbox: undefined;
  ChatConversation: { threadId: string };
};

type Props = NativeStackScreenProps<ChatStackParamList, 'ChatInbox'>;

const ChatInbox = ({ navigation }: Props) => {
  const { threads } = useChat();

  const renderItem = ({ item }: any) => {
    const last = item.messages[item.messages.length - 1];
    return (
      <Pressable
        onPress={() => navigation.navigate('ChatConversation', { threadId: item.id })}
        style={styles.row}
      >
        <Image source={{ uri: item.logoUrl }} style={styles.avatar} />
        <View style={styles.rowText}>
          <Text style={styles.company}>{item.company}</Text>
          {!!last && (
            <Text style={styles.preview} numberOfLines={1}>
              {last.sender === 'me' ? 'You: ' : ''}
              {last.text}
            </Text>
          )}
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={threads}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={{ paddingVertical: 8 }}
      />
    </View>
  );
};

export default ChatInbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingTop: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  avatar: { width: 48, height: 48, borderRadius: 24, marginRight: 10, backgroundColor: '#eee' },
  rowText: { flex: 1 },
  company: { fontSize: 16, fontWeight: '600', color: '#111' },
  preview: { fontSize: 13, color: '#555', marginTop: 2 },
  separator: { height: 1, backgroundColor: '#ececec' },
});

