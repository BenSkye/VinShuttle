'use client'

import { useAuth } from '@/hooks/useAuth';
import { Button, Dropdown, Space } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { MenuProps } from 'antd';
import { UserOutlined, CarOutlined, HistoryOutlined, WalletOutlined, LogoutOutlined } from '@ant-design/icons';

export default function Header() {
    const { user, logout } = useAuth();
    const pathname = usePathname();

    // Menu items for logged-in users
    const userMenuItems: MenuProps['items'] = [
        {
            key: 'profile',
            label: <Link href="/profile">Profile</Link>,
            icon: <UserOutlined />,
        },
        {
            key: 'active-trips',
            label: <Link href="/trips/active">Active Trips</Link>,
            icon: <CarOutlined />,
        },
        {
            key: 'history',
            label: <Link href="/trips/history">History</Link>,
            icon: <HistoryOutlined />,
        },
        {
            key: 'payment',
            label: <Link href="/payment">Payment</Link>,
            icon: <WalletOutlined />,
        },
        {
            type: 'divider',
        },
        {
            key: 'logout',
            label: 'Logout',
            icon: <LogoutOutlined />,
            onClick: logout,
            danger: true,
        },
    ];

    // Navigation items based on auth state
    const navigationItems = user ? [
        { key: 'private', label: 'Private Rental', href: '/booking/private-rental' },
        { key: 'shared', label: 'Shared Ride', href: '/booking/shared-ride' },
    ] : [];

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <img src="/logo.svg" alt="VinShuttle" className="h-8 w-8" />
                        <span className="text-xl font-bold text-primary">VinShuttle</span>
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.key}
                                href={item.href}
                                className={`text-gray-600 hover:text-primary transition-colors ${pathname === item.href ? 'text-primary font-medium' : ''
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Auth Section */}
                    <div className="flex items-center space-x-4">
                        {user ? (
                            <Dropdown menu={{ items: userMenuItems }} trigger={['click']}>
                                <Space className="cursor-pointer">
                                    <div className="flex items-center space-x-2">
                                        <img
                                            src={user.avatar || '/default-avatar.png'}
                                            alt="avatar"
                                            className="h-8 w-8 rounded-full"
                                        />
                                        <span className="text-sm font-medium">{user.name}</span>
                                    </div>
                                </Space>
                            </Dropdown>
                        ) : (
                            <Space>
                                <Link href="/login">
                                    <Button type="default">Login</Button>
                                </Link>
                                <Link href="/register">
                                    <Button type="primary">Register</Button>
                                </Link>
                            </Space>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}