import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBars, faBook } from '@fortawesome/free-solid-svg-icons';

export class NavLinkItem {
    key: string;
    title: string;
    path?: string;
    icon?: IconProp;
    children?: NavLinkItem[];
    constructor(item: NavLinkItem) {
        this.key = item.key;
        this.title = item.title;
        this.path = item.path;
        this.icon = item.icon;
        this.children = item.children?.map((x) => {
            if (x.children) delete x.children;
            x.key = item.key + '__' + x.key;
            return new NavLinkItem(x);
        });
    }
}

export const SIZE_BAR_DATA: NavLinkItem[] = [
    new NavLinkItem({
        key: 'book-management',
        title: 'Quản lý sách',
        icon: faBook,
        children: [
            new NavLinkItem({
                key: 'category-list',
                title: 'Danh sách thể loại',
                path: '/admin/book-management/category-list',
            }),
            new NavLinkItem({
                key: 'book-list',
                title: 'Danh sách sách',
                path: '/admin/book-management/book-list',
            }),
        ],
    }),
    new NavLinkItem({
        key: 'order-management',
        title: 'Quản lý đơn hàng',
        icon: faBars,
        children: [
            new NavLinkItem({
                key: 'order-list',
                title: 'Danh sách đơn hàng',
                path: '/admin/order-management/order-list',
            }),
        ],
    }),
];

console.log('SIZE_BAR_DATA', SIZE_BAR_DATA);
