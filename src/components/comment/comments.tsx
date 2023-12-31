import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../theme/colors';
import { IComment } from '../../types/models';

interface ICommentProps {
comment: IComment;
}

const Comments = ({comment}: ICommentProps) => {
  return (
    <View  style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={styles.bold}>{comment.user.username} </Text>
        {comment.comment}
      </Text>
      <AntDesign
        name='hearto'
        size={16}
        style={styles.icon}
        color={colors.black}
      />
    </View>
  );
}

export default Comments