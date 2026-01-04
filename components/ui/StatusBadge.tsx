import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '@/constants/colors';

interface Props {
  status: 'Pending' | 'In Progress' | 'Delivered';
}

export function StatusBadge({ status }: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const themeColors = Colors[colorScheme];

  const getStatusConfig = () => {
    switch (status) {
      case 'Delivered':
        return { bg: themeColors.statusDelivered, label: 'Delivered' };
      case 'In Progress':
        return { bg: themeColors.statusInProgress, label: 'In Progress' };
      case 'Pending':
        return { bg: themeColors.statusPending, label: 'Pending' };
      default:
        return { bg: themeColors.icon, label: status };
    }
  };

  const config = getStatusConfig();

  return (
    <View style={[styles.badge, { backgroundColor: config.bg }]}>
      <Text style={[styles.text, { color: themeColors.statusText }]}>
        {config.label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});