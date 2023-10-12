import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from './src/theme/colors';
import font from './src/theme/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.post}>
          {/* Header */}
          <View style={styles.header}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1499083773823-5000fa2b23e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1902&q=80',
              }}
              style={styles.userAvatar}
            />
            <Text style={styles.userName}>ManLikeChizaa</Text>
            <Entypo
              name='dots-three-horizontal'
              size={16}
              style={styles.threeDots}
            />
          </View>

          {/* Content */}
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1621544402532-78c290378588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
            }}
            style={styles.image}
          />

          {/* Footer */}
          <View style={styles.footer}>
            <View style={styles.iconContainer}>
              <AntDesign
                name='hearto'
                size={24}
                style={styles.icon}
                color={colors.black}
              />
              <Ionicons
                name='chatbubble-outline'
                size={24}
                style={styles.icon}
                color={colors.black}
              />
              <Feather
                name='send'
                size={24}
                style={styles.icon}
                color={colors.black}
              />
              <Feather
                name='bookmark'
                size={24}
                style={{ marginLeft: 'auto' }}
                color={colors.black}
              />
            </View>
            <Text style={styles.text}>
              Liked by <Text style={styles.bold}>Chizaa</Text> and{' '}
              <Text style={styles.bold}>66 others</Text>
            </Text>
            {/* Post Description */}
            <Text style={styles.text}>
              <Text style={styles.bold}>ManLikeGrauchi </Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              quis, libero quae modi illum cupiditate exercitationem reiciendis
              tempore voluptas. Ipsa vero ratione vel at totam aliquid ad
              veritatis numquam laboriosam.
            </Text>

            {/* Comments */}
            <Text>View all 16 Comments</Text>
            <View style={styles.comment}>
              <Text style={styles.commentText}>
                <Text style={styles.bold}>ManLikeGrauchi </Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                quis, libero quae modi illum cupiditate exercitationem.
              </Text>
              <AntDesign
                name='hearto'
                size={16}
                style={styles.icon}
                color={colors.black}
              />
            </View>

            {/* Posted Date */}
            <Text>19 December, 2021</Text>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  post: {},
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: font.weight.bold,
    color: colors.black,
  },
  threeDots: {
    marginLeft: 'auto',
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  footer: {
    padding: 10,
  },
  text: {
	color: colors.black,
	lineHeight: 18
  },
  bold: {
	fontWeight: font.weight.bold,
  },
  comment: {
	flexDirection: 'row',
	alignItems: 'center',
  },
  commentText: {
	flex: 1,
	color: colors.black,
	lineHeight: 18,

  }

});
