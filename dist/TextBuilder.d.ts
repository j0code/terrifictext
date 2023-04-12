import Text from "./Text.js";
import TextComponent from "./TextComponent.js";
import { type Font, type TextComponentStyle } from "./types.js";
export declare class TextBuilder extends Text {
    private style;
    constructor(base?: Text | TextComponent<any> | TextComponentStyle);
    build(): Text;
    space(length?: number): this;
    text(text: string): this;
    default(): this;
    setStyle(style: TextComponentStyle): this;
    patchStyle(style: TextComponentStyle): this;
    color(color: number): this;
    font(font: Font): this;
    weight(weight: number): this;
    italic(italic?: boolean): this;
    underline(underlined?: boolean): this;
    strike(strike?: boolean): this;
    obfuscate(obfuscated?: boolean): this;
}
export default TextBuilder;
