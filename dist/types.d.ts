import Text from "./Text.js";
export type Font = {
    family: string | Array<string>;
    size: number;
};
export declare function isFont(x: any): x is Font;
export interface TextComponentStyle {
    color?: number;
    font?: Font;
    weight?: number;
    italic?: boolean;
    underlined?: boolean;
    strike?: boolean;
    obfuscated?: boolean;
}
export interface RawTextComponent<T> {
    type: string;
    content: T;
    style: TextComponentStyle;
}
export declare function isTextComponent<T>(raw: any): raw is RawTextComponent<T>;
export interface TextPrinter<T> {
    print(text: Text, location?: T): boolean;
    convert(text: Text): any;
}
