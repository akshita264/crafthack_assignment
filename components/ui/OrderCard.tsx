import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, useColorScheme } from 'react-native';
import { StatusBadge } from './StatusBadge';
import { Colors } from '@/constants/colors';
import { OrderItem } from '@/src/context/OrderContext';

interface Props {
  item: OrderItem;
  onPress: () => void;
}

export function OrderCard({ item, onPress }: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];

  return (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor: theme.cardBackground, borderColor: theme.border }]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View>
        <Text style={[styles.id, { color: theme.text }]}>{item.id}</Text>
        <Text style={[styles.date, { color: theme.icon }]}>{item.date}</Text>
      </View>
      <View style={styles.rightSide}>
        <Text style={[styles.amount, { color: theme.text }]}>${item.amount.toFixed(2)}</Text>
        <StatusBadge status={item.status} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 12,
    borderWidth: 1,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  id: { fontSize: 16, fontWeight: 'bold' },
  date: { marginTop: 4, fontSize: 13 },
  amount: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  rightSide: { alignItems: 'flex-end' },
});