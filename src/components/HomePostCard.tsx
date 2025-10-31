import {
  View,
  Image,
  Text,
  Dimensions,
  ImageSourcePropType,
} from 'react-native';
import { posts } from '../auth/utils/PostCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useEffect } from 'react';

type Post = {
  name: string;
  // Remote avatar support
  avatarUrl?: string;
  // Local avatar support
  avatar?: ImageSourcePropType;
  statusText: string;
  hastag?: string;
  // Remote photo support
  photoUrl?: string;
  // Local photo support
  photo?: ImageSourcePropType;
  likes: number;
  comments: number;
  shares: number;
  time: string;
};

const screenWidth = Dimensions.get('window').width;

const HomePostCard = ({ post }: { post: Post }) => {
  const renderStatusText = (text: string) => {
    const parts = text.split(/(https?:\/\/[^\s]+)/g); // split text by URL
    return parts.map((part, index) =>
      part.match(/https?:\/\/[^\s]+/) ? (
        <Text key={index} style={{ color: '#1e80e9ff', fontWeight: 'bold' }}>
          {part}
        </Text>
      ) : (
        <Text key={index} style={{ color: '#222' }}>
          {part}
        </Text>
      ),
    );
  };

  const hastagText = (text: string) => {
    return <Text style={{ color: '#1e80e9ff', fontWeight: 'bold' }}>{text}</Text>;
  };

  const isLocalPhoto = !!post.photo;
  const localPhotoMeta = post.photo
    ? Image.resolveAssetSource(post.photo)
    : undefined;
  const photoAspectRatio = localPhotoMeta
    ? localPhotoMeta.width / localPhotoMeta.height
    : undefined;

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
          {(post.avatar || post.avatarUrl) && (
            <Image
              source={post.avatar ?? { uri: post.avatarUrl as string }}
              style={{ width: 40, height: 40, borderRadius: 20 }}
            />
          )}
          <View>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>{post.name}</Text>
            <Text style={{ fontSize: 12, fontWeight: '300' }}>{post.time}</Text>
          </View>
        </View>

        <Text style={{fontSize: 18, color: '#0d73dfff', fontWeight: '600', textAlign: 'center'}}>+ Follow</Text>
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
        {renderStatusText(post.statusText)}
      
      </Text>
      <Text  
       style={{
          fontSize: 16,
          color: '#222',
          marginBottom: 10,
          paddingHorizontal: 2,
        }}>
          {hastagText(post.hastag ?? '')}
      </Text>
      {(post.photo || post.photoUrl) && (
        <Image
          source={post.photo ?? { uri: post.photoUrl as string }}
          style={{
            width: '100%',
            height: isLocalPhoto ? undefined : 280,
            aspectRatio: isLocalPhoto ? photoAspectRatio : undefined,
            borderRadius: 10,
            marginBottom: 10,
          }}
          resizeMode={isLocalPhoto ? 'contain' : 'cover'}
        />
      )}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 4,
          gap: 20,
        }}
      >
        <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
          <Ionicons name="heart-outline" size={20} color="#444" />
          <Text style={{ color: '#444', fontSize: 13 }}>{post.likes}</Text>
        </View>
        <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
          <Ionicons name="chatbubble-outline" size={20} color="#444" />
          <Text>{post.comments}</Text>
        </View>
        <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
          <Ionicons name="arrow-redo-outline" size={20} color="#444" />
          <Text>{post.shares}</Text>
        </View>
      </View>
    </View>
  );
};

export default HomePostCard;
