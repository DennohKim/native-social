import { FlatList } from 'react-native';
import FeedPost from '../../components/feedPost/feedPost';
import posts from '../../assets/data/posts.json';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        renderItem={({ item }) => <FeedPost post={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
