import React from 'react';
import { View, Text, StyleSheet, ScrollView, useColorScheme } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Colors } from '@/constants/colors';

export default function OrderDetailScreen() {
  const { orderData } = useLocalSearchParams();
  const order = JSON.parse(orderData as string);
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <Text style={[styles.label, { color: theme.icon }]}>Current Status</Text>
        <StatusBadge status={order.status} />
      </View>

      <View style={[styles.infoBox, { backgroundColor: theme.cardBackground, borderColor: theme.border }]}>
        <Text style={[styles.label, { color: theme.icon }]}>Order ID</Text>
        <Text style={[styles.value, { color: theme.text }]}>{order.id}</Text>
        
        <Text style={[styles.label, { color: theme.icon, marginTop: 20 }]}>Delivery Address</Text>
        <Text style={[styles.value, { color: theme.text }]}>{order.address}</Text>
      </View>

      <View style={[styles.infoBox, { backgroundColor: theme.cardBackground, borderColor: theme.border }]}>
        <Text style={[styles.label, { color: theme.icon }]}>Items Ordered</Text>
        {order.items.map((item: string, index: number) => (
          <Text key={index} style={[styles.itemText, { color: theme.text }]}>• {item}</Text>
        ))}
      </View>

      <View style={styles.priceContainer}>
        <Text style={[styles.totalLabel, { color: theme.icon }]}>Total Paid</Text>
        <Text style={[styles.totalValue, { color: theme.statusDelivered }]}>${order.amount.toFixed(2)}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  infoBox: { padding: 16, borderRadius: 12, marginBottom: 16, borderWidth: 1 },
  label: { fontSize: 11, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 0.5 },
  value: { fontSize: 17, marginTop: 4, fontWeight: '500' },
  itemText: { fontSize: 16, marginTop: 10 },
  priceContainer: { marginTop: 10, alignItems: 'center', paddingBottom: 40 },
  totalLabel: { fontSize: 16 },
  totalValue: { fontSize: 36, fontWeight: 'bold', marginTop: 5 },
});