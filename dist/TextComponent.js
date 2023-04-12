import { isTextComponent } from "./types.js";
export class TextComponent {
    static fromYSON(raw) {
        if (!isTextComponent(raw))
            return;
        throw new Error(`TextComponent.fromYSON() for type ${raw.type} not implemented!`);
    }
    _content;
    _style;
    constructor(content, style) {
        this._content = content;
        this._style = structuredClone(style) || {};
    }
    get content() {
        return this._content;
    }
    set content(content) {
        this._content = content;
    }
    get style() {
        return this._style;
    }
    set style(style) {
        this._style = style;
    }
    get color() {
        return this._style.color;
    }
    set color(color) {
        this._style.color = color;
    }
    get font() {
        return this._style.font;
    }
    set font(font) {
        this._style.font = font;
    }
    get weight() {
        return this._style.weight;
    }
    set weight(weight) {
        if (weight != null) {
            if (weight < 0)
                throw new Error(); // TODO: Scream
        }
        this.weight = weight;
    }
    get italic() {
        return this._style.italic;
    }
    set italic(italic) {
        this.italic = italic;
    }
    get underlined() {
        return this._style.underlined;
    }
    set underlined(underlined) {
        this._style.underlined = underlined;
    }
    get strike() {
        return this._style.strike;
    }
    set strike(strike) {
        this._style.strike = strike;
    }
    get obfuscated() {
        return this._style.obfuscated;
    }
    set obfuscated(obfuscated) {
        this._style.obfuscated = obfuscated;
    }
    toJSON() {
        return {
            type: this.type,
            content: this.content,
            style: {
                color: this.color,
                font: this.font,
                weight: this.weight,
                italic: this.italic,
                underlined: this.underlined,
                strike: this.strike,
                obfuscated: this.obfuscated
            }
        };
    }
    toYSON() {
        return this.toJSON();
    }
    toString() {
        return `{${this.type};${this.content}}`;
    }
}
export default TextComponent;
