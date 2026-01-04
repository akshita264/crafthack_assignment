import React, { useContext } from 'react';
import { FlatList, View, ActivityIndicator, RefreshControl, StyleSheet, useColorScheme } from 'react-native';
import { useRouter } from 'expo-router';
import { OrderContext } from '@/src/context/OrderContext';
import { OrderCard } from '@/components/ui/OrderCard';
import { Colors } from '@/constants/colors';

export default function OrderListScreen() {
  const context = useContext(OrderContext);
  const router = useRouter();
  const colorScheme = useColorScheme() ?? 'light';

  if (!context) return null;
  const { orders, loading, fetchOrders } = context;

  if (loading && orders.length === 0) {
    return (
      <View style={[styles.center, { backgroundColor: Colors[colorScheme].background }]}>
        <ActivityIndicator size="large" color={Colors[colorScheme].tint} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: Colors[colorScheme].background }}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        refreshControl={
          <RefreshControl 
            refreshing={loading} 
            onRefresh={fetchOrders} 
            tintColor={Colors[colorScheme].tint} 
          />
        }
        renderItem={({ item }) => (
          <OrderCard 
            item={item} 
            onPress={() => router.push({
              pathname: '/details',
              params: { orderData: JSON.stringify(item) }
            })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});