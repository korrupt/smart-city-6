import { InjectionToken } from "@angular/core";


export const DRAWER_FILTER_TOKEN = new InjectionToken<IDrawerFilter[]>('DRAWER_FILTER_LIST');

export type IDrawerFilter = IDrawerFilterIncludes | IDrawerFilterExact;

export interface IDrawerFilterBase {
    id: string;
    label: string;
    property: string;
}

export interface IDrawerFilterIncludes extends IDrawerFilterBase {
    type: 'includes'
}

export interface IDrawerFilterExact extends IDrawerFilterBase {
    type: 'exact';
    value: string;
}

// export type IDRawerFIlterState<T = IDrawerFilterExact[]> = {}




// export interface IDrawerFilterIncludes

export type IDrawerFilterToken = IDrawerFilter[]; 

// export interface IDrawerFilterToken {
    // search?: boolean;
    // staticFilters?: IDrawerFilterList;
    // selectFilters?: IDrawerFilterList;
// }


// export interface IDrawerFilter {
//     name: string;
//     displayName: string;
// }

// export type IDrawerFilterList = IDrawerFilter[];

// export interface DRAWER_FILTER_LIST {
//     removable: boolean;
//     name: string;
//     displayName: string;
// }