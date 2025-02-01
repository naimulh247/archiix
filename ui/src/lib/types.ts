export type FileType = 'file' | 'folder';

export interface FileItem {
	id: number;
	type: FileType;
	name: string;
	size: string;
	lastModified: string;
	items?: number; // For folders
}

export interface NavItem {
	icon: string;
	label: string;
	isActive?: boolean;
	href: string;
}

export interface StorageCategory {
	label: string;
	size: string;
	color: string;
}

export interface RecentActivity {
	action: string;
	file: string;
	time: string;
}

export interface StorageStats {
	used: number;
	total: number;
	categories: StorageCategory[];
}

export interface UserProfile {
	name: string;
	email: string;
	avatar?: string;
	initials: string;
	isOnline: boolean;
}
