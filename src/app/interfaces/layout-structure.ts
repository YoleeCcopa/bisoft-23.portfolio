export interface NavItem {
    icon: string;
    label: string;
    route?: string;
    subItems?: NavItem[];
};

export interface SidenavToogle {
    screenWidth: number;
    collapsed: boolean;
};