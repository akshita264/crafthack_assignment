/**
 * Below are the colors that are used in the app. The colors are defined in a way 
 * that allows for easy switching between light and dark modes.
 */

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    cardBackground: '#FFFFFF',
    border: '#EEEEEE',
    
    // Custom Status Colors for Order Tracking
    statusPending: '#FF9800',
    statusInProgress: '#2196F3',
    statusDelivered: '#4CAF50',
    statusText: '#FFFFFF',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    cardBackground: '#1E1E1E',
    border: '#333333',
    
    // Custom Status Colors for Order Tracking (slightly darker/muted for OLED)
    statusPending: '#FFA726',
    statusInProgress: '#42A5F5',
    statusDelivered: '#66BB6A',
    statusText: '#FFFFFF',
  },
};
