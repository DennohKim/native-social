import { Text, View, Image } from 'react-native';
import colors from '../../theme/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { useState } from 'react';
import styles from './styles';
import Comments from '../comment/comments';
import { IPost } from '../../types/models';

interface IFeedPost {
post: IPost;
}

const FeedPost = ({ post }: IFeedPost) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>{post.user.username}</Text>
        <Entypo
          name='dots-three-horizontal'
          size={16}
          style={styles.threeDots}
        />
      </View>

      {/* Content */}
      <Image
        source={{
          uri: post.image,
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
          <Text style={styles.bold}>{post.nofLikes} others</Text>
        </Text>
        {/* Post Description */}
        <Text style={styles.text}>
          <Text style={styles.bold}>{post.user.username} </Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quis,
          libero quae modi illum cupiditate exercitationem reiciendis tempore
          voluptas. Ipsa vero ratione vel at totam aliquid ad veritatis numquam
          laboriosam.
        </Text>

        {/* Comments */}
        <Text style={styles.greyText}>
          View all {post.nofComments} Comments
        </Text>

        {post &&
          post?.comments.map((comment) => {
            return (
              <Comments comment={comment} key={comment.id}/>
            );
          })}

        {/* Posted Date */}
        <Text style={styles.greyText}>{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
