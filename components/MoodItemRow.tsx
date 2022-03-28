import {
  LayoutAnimation,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React from 'react'
import { MoodOptionWithTimestamp } from '../types'
import format from 'date-fns/format'
import { theme } from '../theme'
import useMood from '../hooks/useMood'

interface Props {
  item: MoodOptionWithTimestamp
}

const MoodItemRow: React.FC<Props> = ({ item }) => {
  const { removeMood } = useMood()

  const handleRemove = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    removeMood(item)
  }

  return (
    <View style={styles.moodItem}>
      <View style={styles.iconAndDescription}>
        <Text style={styles.moodValue}>{item.mood.emoji}</Text>
        <Text style={styles.moodDescription}>{item.mood.description}</Text>
      </View>
      <Text style={styles.moodDate}>
        {format(new Date(item.timestamp), "dd MM, yyyy 'at' h:mmaaa")}
      </Text>
      <Pressable
        hitSlop={16}
        onPress={handleRemove}
      >
        <Text style={styles.removeText}>Delete</Text>
      </Pressable>
    </View>
  )
}

export default MoodItemRow

const styles = StyleSheet.create({
  moodItem: {
    backgroundColor: theme.colorWhite,
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconAndDescription: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moodValue: {
    textAlign: 'center',
    fontSize: 40,
    marginRight: 10,
  },
  moodDescription: {
    fontSize: 18,
    color: theme.colorPurple,
    fontFamily: theme.fontFamilyBold,
  },
  moodDate: {
    textAlign: 'center',
    fontFamily: theme.fontFamilyLight,
    color: theme.colorLavender,
  },
  removeText: {
    color: theme.colorBlue,
    fontFamily: theme.fontFamilyLight,
  },
})
