import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom';

type INavLinkItem = {
    key: string;
    title: string;
    path?: string;
    icon?: IconProp;
    children?: Omit<INavLinkItem, 'children'>[];
};

declare module 'react-router-dom' {
    type RouteObject = (IndexRouteObject | NonIndexRouteObject) & {
        meta?: {
            auth: boolean;
            role: string;
        };
    };
}
