import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.causality.app',
  appName: 'Compound Interest Calculator',
  webDir: 'dist/compound-calculator',
  server: {
    androidScheme: 'https',
  },
};

export default config;
