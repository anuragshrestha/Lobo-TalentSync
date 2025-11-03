import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Pressable } from 'react-native';
import { useEmployerChat } from './EmployerChatContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type ChatStackParamList = {
  EmployerChatInbox: undefined;
  EmployerChatConversation: { threadId: string };
};

type Props = NativeStackScreenProps<ChatStackParamList, 'EmployerChatInbox'>;

const EmployerChatInbox = ({ navigation }: Props) => {
  const { threads } = useEmployerChat();

  const renderItem = ({ item }: any) => {
    const last = item.messages[item.messages.length - 1];
    const lastMe = [...item.messages].reverse().find((m: any) => m.sender === 'me');
    const lastThem = [...item.messages].reverse().find((m: any) => m.sender === 'them');
    return (
      <Pressable
        onPress={() => navigation.navigate('EmployerChatConversation', { threadId: item.id })}
        style={styles.row}
      >
        <Image source={{ uri: item.avatarUrl }} style={styles.avatar} />
        <View style={styles.rowText}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.title}>{item.title}</Text>
          {!!lastMe && (
            <Text style={styles.preview} numberOfLines={1}>
              You: {lastMe.text}
            </Text>
          )}
          {!!lastThem && (
            <Text style={styles.preview} numberOfLines={1}>
              {lastThem.text}
            </Text>
          )}
        </View>
        <View style={styles.metaRight}>
          <Text style={styles.timeLabel}>{formatRelativeTime(last?.ts)}</Text>
          {!!item.unread && <View style={styles.unreadBadge}><Text style={styles.unreadText}>{item.unread}</Text></View>}
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

export default EmployerChatInbox;

const formatRelativeTime = (ts?: number): string => {
  if (!ts) return '';
  const d = new Date(ts);
  const now = new Date();
  const diff = now.getTime() - d.getTime();
  const oneDay = 24 * 60 * 60 * 1000;
  if (diff < oneDay) {
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
  if (diff < 2 * oneDay) return 'Yesterday';
  const days = Math.floor(diff / oneDay);
  if (days < 7) return d.toLocaleDateString([], { weekday: 'long' });
  return d.toLocaleDateString();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    paddingHorizontal: 12,
    paddingTop: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  avatar: { width: 48, height: 48, borderRadius: 24, marginRight: 12, backgroundColor: '#14203A' },
  rowText: { flex: 1 },
  name: { fontSize: 16, fontWeight: '700', color: '#E2E8F0' },
  title: { fontSize: 13, color: '#9CA3AF', marginTop: 2 },
  preview: { fontSize: 13, color: '#CBD5E1', marginTop: 4 },
  metaRight: { alignItems: 'flex-end', gap: 8 },
  timeLabel: { color: '#94A3B8', fontSize: 12 },
  unreadBadge: {
    minWidth: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  unreadText: { color: '#fff', fontWeight: '800', fontSize: 12 },
  separator: { height: 1, backgroundColor: '#1E293B' },
});
