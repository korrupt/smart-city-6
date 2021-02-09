import { InjectionToken } from "@angular/core";


export const DRAWER_FILTER_TOKEN = new InjectionToken<IDrawerFilterToken>('DRAWER_FILTER_LIST');

export interface IDrawerFilterToken {
    search?: boolean;
    staticFilters?: IDrawerFilterList;
    selectFilters?: IDrawerFilterList;
}


export interface IDrawerFilter {
    name: string;
    displayName: string;
}

export type IDrawerFilterList = IDrawerFilter[];

// export interface DRAWER_FILTER_LIST {
//     removable: boolean;
//     name: string;
//     displayName: string;
// }