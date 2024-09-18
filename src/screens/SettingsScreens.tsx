import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, BackHandler } from 'react-native';

const SettingsScreen = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handleLogout = () => {
    Alert.alert(
      "Đăng xuất",
      "Bạn có chắc chắn muốn thoát ứng dụng?",
      [
        { text: "Hủy", style: "cancel" },
        {
          text: "Thoát",
          style: "destructive",
          onPress: () => BackHandler.exitApp(),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cài đặt</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Thoát</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-start', // Đặt tiêu đề lên đầu màn hình
    alignItems: 'center',
  },
  footer: {
    flex: 2,
    justifyContent: 'center', // Đặt nút thoát vào giữa màn hình
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#ff5c5c', // Màu nền nút
    paddingVertical: 12, // Tăng kích thước theo chiều dọc
    paddingHorizontal: 32, // Tăng kích thước theo chiều ngang
    borderRadius: 8, // Bo tròn góc
    elevation: 3, // Đổ bóng cho nút
  },
  logoutButtonText: {
    fontSize: 18, // Kích thước chữ
    color: '#ffffff', // Màu chữ
    fontWeight: 'bold', // Đậm chữ
  },
});

export default SettingsScreen;
