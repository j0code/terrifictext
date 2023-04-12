import TextBuilder from "./TextBuilder.js";
import TextComponent from "./TextComponent.js";
export declare class Text {
    protected components: Array<TextComponent<unknown>>;
    constructor(components?: Array<TextComponent<unknown>>);
    getBuilder(): TextBuilder;
    getComponents(): TextComponent<unknown>[];
    toString(): string;
    toJSON(): {
        components: TextComponent<unknown>[];
    };
    toYSON(): {
        components: TextComponent<unknown>[];
    };
}
export default Text;
