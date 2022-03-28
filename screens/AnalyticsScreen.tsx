import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useMood from '../hooks/useMood'
import { groupBy } from 'lodash'
import { VictoryPie } from 'victory-native'
import { theme } from '../theme'

const AnalyticsScreen = () => {
  const { moodList } = useMood()

  const data = Object.entries(groupBy(moodList, 'mood.emoji')).map(
    ([key, value]) => ({
      x: key,
      y: value.length,
    })
  )

  return (
    <View style={styles.screen}>
      <VictoryPie
        data={data}
        labelRadius={80}
        radius={150}
        innerRadius={50}
        colorScale={[
          theme.colorPurple,
          theme.colorLavender,
          theme.colorBlue,
          theme.colorGrey,
          theme.colorWhite,
        ]}
        style={{ labels: { fontSize: 30 } }}
      />
    </View>
  )
}

export default AnalyticsScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
