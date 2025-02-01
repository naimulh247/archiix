import type { FileItem, NavItem, RecentActivity, StorageStats, UserProfile } from '$lib/types';

export const mockFiles: FileItem[] = [
	{
		id: 1,
		type: 'folder',
		name: 'Documents',
		size: '120 MB',
		lastModified: '2025-01-15',
		items: 24
	},
	{ id: 2, type: 'folder', name: 'Images', size: '2.4 GB', lastModified: '2025-01-20', items: 156 },
	{ id: 3, type: 'file', name: 'Project Report.pdf', size: '2.5 MB', lastModified: '2025-01-30' },
	{ id: 4, type: 'file', name: 'Budget.xlsx', size: '1.8 MB', lastModified: '2025-01-28' },
	{ id: 5, type: 'folder', name: 'Videos', size: '4.2 GB', lastModified: '2025-01-25', items: 8 }
];

export const mockNavItems: NavItem[] = [
	{ icon: 'home', label: 'Home', isActive: true, href: '/' },
	{ icon: 'folder', label: 'My Files', href: '/files' },
	{ icon: 'star', label: 'Starred', href: '/starred' },
	{ icon: 'clock', label: 'Recent', href: '/recent' },
	{ icon: 'share', label: 'Shared with me', href: '/shared' },
	{ icon: 'cloud', label: 'Cloud storage', href: '/cloud' }
];

export const mockStorageStats: StorageStats = {
	used: 15.2,
	total: 20,
	categories: [
		{ label: 'Documents', size: '7.2 GB', color: 'bg-blue-500' },
		{ label: 'Images', size: '4.8 GB', color: 'bg-purple-500' },
		{ label: 'Videos', size: '3.2 GB', color: 'bg-pink-500' }
	]
};

export const mockUser: UserProfile = {
	name: 'John Doe',
	email: 'john@archiix.com',
	initials: 'JD',
	isOnline: true
};

export const mockRecentActivity: RecentActivity[] = [
	{ action: 'Uploaded', file: 'Project Report.pdf', time: '2 hours ago' },
	{ action: 'Shared', file: 'Design Assets', time: '4 hours ago' },
	{ action: 'Downloaded', file: 'Budget.xlsx', time: 'Yesterday' }
];
