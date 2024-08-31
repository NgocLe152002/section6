# section6
1. Mô tả ứng dụng:
Đây là một ứng dụng về món ăn (Meals App) sử dụng React Native và React Navigation. Ứng dụng cho phép người dùng xem danh sách các danh mục món ăn, danh sách món ăn trong mỗi danh mục, chi tiết của từng món ăn, và có khả năng đánh dấu món ăn yêu thích.
Cấu trúc Navigation:
Drawer Navigator: Là navigator cấp cao nhất, chứa Tab Navigator.
Tab Navigator: Chứa hai tab chính - "Meals" và "Favorites".
Stack Navigator: Nằm trong tab "Meals", quản lý luồng navigation giữa danh sách danh mục, danh sách món ăn, và chi tiết món ăn.
3. Các màn hình chính:
CategoriesScreen: Hiển thị danh sách các danh mục món ăn.
MealsOverviewScreen: Hiển thị danh sách món ăn trong một danh mục cụ thể.
MealDetailScreen: Hiển thị chi tiết của một món ăn.
FavoritesScreen: Hiển thị danh sách các món ăn yêu thích.
Nội dung bài học đã áp dụng:
Thiết lập và sử dụng React Navigation.
Sử dụng các loại navigator khác nhau (Drawer, Tab, Stack) và kết hợp chúng.
Truyền dữ liệu giữa các màn hình thông qua route params.
Sử dụng hooks như useNavigation và useRoute để xử lý navigation và lấy thông tin route.
Tùy chỉnh tiêu đề màn hình động dựa trên dữ liệu.
Sử dụng FlatList để hiển thị danh sách dữ liệu.
Styling các component và màn hình.
Sử dụng TypeScript để định nghĩa kiểu cho navigation params và props.
Tổ chức cấu trúc thư mục và file cho một ứng dụng React Native.
5. Các kỹ thuật React Native đã sử dụng:
Sử dụng các component cơ bản như View, Text, Image, ScrollView.
Sử dụng StyleSheet để định nghĩa styles.
Sử dụng hooks như useState và useEffect.
Xử lý sự kiện người dùng (ví dụ: onPress trên TouchableOpacity).
6. Cải tiến và tối ưu hóa:
Sử dụng TypeScript để tăng cường type safety.
Tổ chức code thành các component và function riêng biệt để tái sử dụng và dễ bảo trì.
Sử dụng các best practices trong việc cấu trúc navigation.
Ứng dụng này đã áp dụng nhiều khái niệm quan trọng trong phát triển ứng dụng di động với React Native, đặc biệt là trong việc xây dựng hệ thống navigation phức tạp và quản lý state giữa các màn hình.
