import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'to-do-list',
  webDir: 'dist/ToDoList',
  server: {
    androidScheme: 'https'
  }
};

export default config;
