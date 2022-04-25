import axios from 'axios';
import { BASE_URL } from '@env';
import DeviceInfo from 'react-native-device-info';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 1.5 * 60 * 1000,
  timeoutErrorMessage: 'timeout',
  headers: {
    'x-calling-system': 'NoteApp',
    'x-calling-system-os': DeviceInfo.getSystemName(),
    'x-calling-system-version': DeviceInfo.getVersion(),
    'x-calling-system-tablet': DeviceInfo.isTablet(),
  },
});

export default axiosInstance;
