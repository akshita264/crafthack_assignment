# Order Tracking App

A professional cross-platform mobile application built with **React Native** and **Expo SDK**. This project features a modular architecture focusing on reusable UI components and robust state management.

---

## Getting Started

### Prerequisites
Before you begin, ensure you have the following installed:
* **Node.js** (LTS version)
* **npm** or **yarn**
* **Android Studio** (for Android Emulator) or **Xcode** (for iOS Simulator)
* **Expo Go** app on your physical device (optional)

### Installation
1. **Clone the repository:**
```bash
   git clone [https://github.com/akshita264/crafthack_assignment.git](https://github.com/akshita264/crafthack_assignment.git)
   cd crafthack_assignment
```
2. **Install Dependencies:**
```bash
   npm install 
```
3. **Set up Environment Variables:** Set up Environment Variables: Ensure your Android SDK path is correctly configured in your system environment variables (especially if using a non-standard drive like F:).

### Development
- To start the development server (Metro Bundler):
``` bash
   npx expo start
```
- Mobile Execution
* Android: Press a in the terminal to open the project in the Android Emulator.
* iOS: Press i to open in the iOS Simulator.
* Web: Press w to open in your browser.

- Note: If you encounter connection issues with the emulator (Error 10061), ensure your ADB server is running and use: adb reverse tcp:8081 tcp:8081

### Project Structure
- The project follows a modern Expo Router convention:
- /app: Contains the main application routes and navigation tabs.
- /components/ui: Atomic UI components like OrderCard and StatusBadge.
- /constants: Global theme colors and configuration files.
- /hooks: Custom React hooks (e.g., useColorScheme).
- /src/context: Context API providers for global state management (e.g., OrderContext).

### Technical Stack
- Framework: Expo
- Language: TypeScript
- Navigation: Expo Router (File-based routing)
- Styling: React Native StyleSheet / Lucide Icons