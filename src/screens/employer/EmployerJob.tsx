import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { jobs } from '../../utils/JobCard';

const DEFAULT_TEXT_COLOR = '#e9e6e6ff';

const timeSince = (iso: string) => {
  const now = new Date();
  const then = new Date(iso);
  const diffMs = Math.max(0, now.getTime() - then.getTime());
  const mins = Math.floor(diffMs / (1000 * 60));
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  const weeks = Math.floor(days / 7);
  return `${weeks}w ago`;
};

const EmployerJob = () => {
  const navigation = useNavigation<any>();
  const [query, setQuery] = useState('');
  const [tab, setTab] = useState<'Active' | 'Inactive'>('Active');

  const { activeJobs, inactiveJobs } = useMemo(() => {
    const active = jobs.filter(j => (j.status ?? 'Active') === 'Active');
    const inactive = jobs.filter(j => (j.status ?? 'Active') !== 'Active');
    return { activeJobs: active, inactiveJobs: inactive };
  }, []);

  const filtered = useMemo(() => {
    const pool = tab === 'Active' ? activeJobs : inactiveJobs;
    if (!query.trim()) return pool;
    const q = query.toLowerCase();
    return pool.filter(j =>
      j.title.toLowerCase().includes(q) ||
      j.company.toLowerCase().includes(q) ||
      (j.location || '').toLowerCase().includes(q)
    );
  }, [tab, query, activeJobs, inactiveJobs]);

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
      bounces={false}
      overScrollMode="never"
    >
        <View style={{ width: '100%' }}>
          {/* Header */}
          <View style={styles.headerRow}>
            <Ionicons name="menu-outline" size={22} color="white" />
            <Text style={styles.headerTitle}>My Job Postings</Text>
            <Pressable onPress={() => navigation.navigate('CreateNewJob')} hitSlop={8}>
              <Text style={styles.postNew}>Post New</Text>
            </Pressable>
          </View>
          {/* Search */}
          <View style={styles.searchBar}>
            <Ionicons name="search-outline" size={18} color="#9CA3AF" />
            <TextInput
              style={styles.searchInput}
              value={query}
              onChangeText={setQuery}
              placeholder="Search by job title"
              placeholderTextColor="#9CA3AF"
            />
          </View>
          {/* Filters */}
          <View style={styles.filtersRow}>
            <Pressable style={styles.filterPill}>
              <Ionicons name="funnel-outline" size={16} color="#CBD5E1" />
              <Text style={styles.filterText}>Date</Text>
              <Ionicons name="chevron-down" size={14} color="#CBD5E1" />
            </Pressable>
            <Pressable style={styles.filterPill}>
              <Ionicons name="location-outline" size={16} color="#CBD5E1" />
              <Text style={styles.filterText}>Location</Text>
              <Ionicons name="chevron-down" size={14} color="#CBD5E1" />
            </Pressable>
            <Pressable style={styles.filterPill}>
              <Ionicons name="funnel" size={16} color="#CBD5E1" />
              <Text style={styles.filterText}>Status</Text>
              <Ionicons name="chevron-down" size={14} color="#CBD5E1" />
            </Pressable>
          </View>

          {/* Tabs */}
          <View style={styles.tabsRow}>
            <Pressable style={styles.tabItem} onPress={() => setTab('Active')}>
              <Text style={[styles.tabText, tab === 'Active' ? styles.tabTextActive : undefined]}>
                Active ({activeJobs.length})
              </Text>
              {/* {tab === 'Active' && <View style={styles.tabUnderline} />} */}
            </Pressable>
            <Pressable style={styles.tabItem} onPress={() => setTab('Inactive')}>
              <Text style={[styles.tabText, tab === 'Inactive' ? styles.tabTextActive : undefined]}>
                Inactive ({inactiveJobs.length})
              </Text>
              {/* {tab === 'Inactive' && <View style={styles.tabUnderline} />} */}
            </Pressable>
          </View>

          {/* List */}
          <View style={{ marginTop: 6, gap: 12 }}>
            {filtered.map(j => (
              <Pressable
                key={j.id}
                style={({ pressed }) => [styles.card, pressed && { opacity: 0.9 }]}
                onPress={() => navigation.navigate('EmployerCandidates')}
              >
                <View style={styles.cardHeader}>
                  <Text style={styles.cardTitle} numberOfLines={1}>{j.title}</Text>
                  <View style={[styles.statusPill, j.status === 'Active' ? styles.activePill : j.status === 'Paused' ? styles.pausedPill : styles.inactivePill]}>
                    <View style={styles.statusDot} />
                    <Text style={styles.statusText}>{j.status || 'Active'}</Text>
                  </View>
                </View>
                <Text style={styles.cardSub} numberOfLines={1}>
                  {(j.location || '—')} • {(j.employmentType || '—')}
                </Text>
                <Text style={styles.applicantsText}>
                  {(j.applicants ?? 0)} Applicants
                </Text>
                <View style={styles.actionsRow}>
                  <Pressable style={styles.primaryBtn} onPress={() => navigation.navigate('EmployerCandidates')} hitSlop={8}>
                    <Text style={styles.primaryBtnText}>View Applicants</Text>
                  </Pressable>
                  <Pressable style={styles.secondaryBtn} onPress={() => navigation.navigate('CreateNewJob')} hitSlop={8}>
                    <Text style={styles.secondaryBtnText}>Edit</Text>
                  </Pressable>
                  <Pressable style={styles.iconBtn} hitSlop={8}>
                    <Ionicons name="ellipsis-vertical" size={16} color="#CBD5E1" />
                  </Pressable>
                </View>
              </Pressable>
            ))}
          </View>
        </View>
    </ScrollView>
  );
};

export default EmployerJob;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  container: {
    flexGrow: 1,
    padding: 10,
    paddingBottom: 120,
    width: '100%',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: DEFAULT_TEXT_COLOR,
  },
  postNew: {
    color: '#37a8f3ff',
    fontWeight: '700',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#0B1224',
    borderWidth: 1,
    borderColor: '#1E293B',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 8,
  },
  searchInput: {
    flex: 1,
    color: '#E5E7EB',
    fontSize: 14,
  },
  filtersRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
  },
  filterPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#111827',
    borderWidth: 1,
    borderColor: '#1E293B',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  filterText: {
    color: '#E5E7EB',
    fontSize: 13,
    fontWeight: '600',
  },
  tabsRow: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'flex-end',
    marginTop: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#1E293B',
    paddingBottom: 6,
  },
  tabItem: {
    paddingBottom: 6,
  },
  tabText: {
    color: '#9CA3AF',
    fontWeight: '600',
    fontSize: 14,
  },
  tabTextActive: {
    color: '#37a8f3ff',
  },
  tabUnderline: {
    height: 2,
    backgroundColor: '#37a8f3ff',
    marginTop: 6,
    borderRadius: 2,
  },
  card: {
    padding: 14,
    borderRadius: 16,
    backgroundColor: '#0B0F1A',
    borderWidth: 1,
    borderColor: '#1E293B',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  statusPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 999,
  },
  activePill: {
    backgroundColor: '#052E1C',
  },
  pausedPill: {
    backgroundColor: '#3b240a',
  },
  inactivePill: {
    backgroundColor: '#2b2b2b',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#34D399',
  },
  statusText: {
    color: '#D1FAE5',
    fontWeight: '700',
    fontSize: 12,
  },
  cardSub: {
    color: '#cbd5e1',
    fontSize: 14,
    marginTop: 6,
  },
  applicantsText: {
    color: '#E2E8F0',
    fontWeight: '700',
    marginTop: 10,
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
  },
  primaryBtn: {
    backgroundColor: '#3B82F6',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  primaryBtnText: {
    color: '#fff',
    fontWeight: '700',
  },
  secondaryBtn: {
    backgroundColor: '#111827',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1F2937',
  },
  secondaryBtnText: {
    color: '#E5E7EB',
    fontWeight: '700',
  },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111827',
    borderWidth: 1,
    borderColor: '#1F2937',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#10B981',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
});
