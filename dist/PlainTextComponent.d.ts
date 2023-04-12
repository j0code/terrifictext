import TextComponent from "./TextComponent.js";
import { type TextComponentStyle } from "./types.js";
export declare class PlainTextComponent extends TextComponent<string> {
    static fromYSON(raw: unknown): PlainTextComponent | undefined;
    readonly type = "text";
    constructor(text: string, style?: TextComponentStyle);
    getDisplayContent(): string;
    copy(): PlainTextComponent;
}
export default PlainTextComponent;
