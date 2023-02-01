import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {barStyles} from '../../utils/barStyles';

type Props = {
  statistics: Stat[];
};

export default function Stats({statistics}: Props) {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {statistics?.map((item, index) => (
        <View key={index} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>{item.stat.name}</Text>
          </View>
          <View style={styles.blockInfo}>
            <View style={styles.bgBar}>
              <View
                style={[styles.bar, barStyles(index, item.base_stat).style]}
              />
            </View>
            <Text style={styles.number}>{`${
              barStyles(index, item.base_stat).percentage
            }%`}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 80,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 10,
  },
  block: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  blockTitle: {
    width: '30%',
  },
  statName: {
    fontSize: 12,
    color: '#6b6b6b',
  },
  blockInfo: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    width: '12%',
    fontSize: 12,
  },
  bgBar: {
    backgroundColor: '#dedede',
    width: '88%',
    height: 5,
    borderRadius: 20,
    overflow: 'hidden',
  },
  bar: {
    height: 5,
    borderRadius: 20,
  },
});
