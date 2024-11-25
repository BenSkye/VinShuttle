// src/app/layout.tsx
import { Inter } from 'next/font/google';
import { ConfigProvider } from 'antd';
import theme from '@/styles/theme/antd';
import './globals.css';
import Header from '@/components/common/Header';

// Initialize Inter font
const inter = Inter({ subsets: ['latin'] });

// Metadata for the application
export const metadata = {
  title: 'VinShuttle',
  description: 'Smart transportation service for VinHomes residents',
};

// Root layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigProvider theme={theme}>
          <div className="min-h-screen flex flex-col">
            <Header /> {/* Đảm bảo Header được sử dụng ở đây */}
            <main className="flex-1">
              {children}
            </main>
          </div>
        </ConfigProvider>
      </body>
    </html>
  );
}