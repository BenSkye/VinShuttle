import { Inter } from 'next/font/google';
import { ConfigProvider } from 'antd';
import theme from '@/styles/theme/antd';
import './globals.css';

// Initialize Inter font
const inter = Inter({ subsets: ['greek'] });

// Metadata for the application
export const metadata = {
  title: 'VinShuttle - Smart Intra-Area Transportation Portal',
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
          {/* You might want to add providers here (Redux, Auth, etc.) */}
          <main className="min-h-screen">
            {children}
          </main>
        </ConfigProvider>
      </body>
    </html>
  );
}