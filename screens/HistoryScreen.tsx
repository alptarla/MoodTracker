import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import useMood from '../hooks/useMood'
import MoodItemRow from '../components/MoodItemRow'

const HistoryScreen = () => {
  const { moodList } = useMood()

  return (
    <ScrollView>
      {moodList.map((item) => (
        <MoodItemRow
          item={item}
          key={item.timestamp}
        />
      ))}
    </ScrollView>
  )
}

export default HistoryScreen

const styles = StyleSheet.create({})
