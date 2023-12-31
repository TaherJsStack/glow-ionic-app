
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.glow.up.app.starter',
  appName: 'glow-up',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  "plugins": {
    "Storage": {
      "version": "^1.2.5"
    }
  }
};

export default config;
