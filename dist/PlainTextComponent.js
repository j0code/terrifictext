import TextComponent from "./TextComponent.js";
import { isTextComponent } from "./types.js";
export class PlainTextComponent extends TextComponent {
    static fromYSON(raw) {
        if (!isTextComponent(raw))
            return;
        if (raw.type != "text" || typeof raw.content != "string")
            return;
        return new PlainTextComponent(raw.content, raw.style);
    }
    type = "text";
    constructor(text, style) {
        super(text, style);
    }
    getDisplayContent() {
        return this.content;
    }
    copy() {
        return new PlainTextComponent(this.content, structuredClone(this.style));
    }
}
export default PlainTextComponent;
