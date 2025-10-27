import { View, Image, Text, Dimensions } from 'react-native';
import { posts } from '../auth/utils/PostCard';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Post = {
  name: string;
  avatarUrl: string;
  statusText: string;
  photoUrl?: string;
  likes: number;
  comments: number;
  shares: number;
};

const screenWidth = Dimensions.get('window').width;

const HomePostCard = ({ post }: { post: Post }) => {
  return (
    <View
      style={{
        width: screenWidth,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#d0cacaff',
      }}
    >
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 8,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
          
          }}
        >
          <Image
            source={{ uri: post.avatarUrl }}
            style={{ width: 40, height: 40, borderRadius: 20 }}
          />
          <Text style={{ fontSize: 18, fontWeight: '600' }}>{post.name}</Text>
        </View>

        <Ionicons name="ellipsis-horizontal" size={18} color="#444" />
      </View>

      {/** status */}
      <Text
        style={{
          fontSize: 16,
          color: '#222',
          marginBottom: 10,
          paddingHorizontal: 2,
        }}
      >
        {post.statusText}
      </Text>
      {post.photoUrl && (
        <Image
          source={{ uri: post.photoUrl }}
          style={{
            width: '100%',
            height: 280,
            borderRadius: 10,
            marginBottom: 10,
          }}
          resizeMode='cover'
        />
      )}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 4,
          gap: 20
        }}
      >
        <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
          <Ionicons name="heart-outline" size={20} color="#444" />
          <Text style={{ color: '#444', fontSize: 13 }}>{post.likes}</Text>
        </View>
        <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
          <Ionicons name="chatbubble-outline"size={20} color='#444' />
          <Text>{post.comments}</Text>
        </View>
        <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
          <Ionicons name="arrow-redo-outline" size={20} color='#444' />
          <Text>{post.shares}</Text>
        </View>
      </View>
    </View>
  );
};

export default HomePostCard;
