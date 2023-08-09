declare module '*.module.scss' {
    type IClassNames = Record<string, string>;
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare module '*.png' {
    const value: any;
    export = value;
}

declare module '*.jpg' {
    const value: any;
    export = value;
}

declare const __IS_DEV__: boolean;
declare const __URL__: string;
declare const __API__: string;

declare type StateSchema = import('src/app/providers/store').StateSchema;
declare type AppDispatch = import('src/app/providers/store').AppDispatch;
declare type ThunkAction = import('src/app/providers/store').ThunkAction;

// declare type IResponse<T> = import('@/shared/api/types/response').IResponse<T>

// type DeepPartial<T> = T extends object ? {
// 	[P in keyof T]?: DeepPartial<T[P]>;
// } : T;
//
// type OptionalRecord<K extends keyof any, T> = {
// 	[P in K]?: T;
// };
