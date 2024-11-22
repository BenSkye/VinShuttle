import type { ThemeConfig } from 'antd';

export const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: '#1890ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#f5222d',
    colorInfo: '#1890ff',
    borderRadius: 6,
    wireframe: false,
  },
  components: {
    Button: {
      borderRadius: 4,
      controlHeight: 40,
    },
    Input: {
      controlHeight: 40,
      borderRadius: 4,
    },
    Select: {
      controlHeight: 40,
      borderRadius: 4,
    },
    Card: {
      borderRadius: 8,
    },
    Modal: {
      borderRadius: 8,
    },
  },
};

export default theme;