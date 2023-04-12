import TextComponent from "./TextComponent.js"
import { type TextComponentStyle, isTextComponent } from "./types.js"

export class PlainTextComponent extends TextComponent<string> {

	static fromYSON(raw: unknown): PlainTextComponent | undefined {
		if (!isTextComponent<string>(raw)) return
		if (raw.type != "text" || typeof raw.content != "string") return
		return new PlainTextComponent(raw.content, raw.style)
	}
	
	readonly type = "text"

	constructor(text: string, style?: TextComponentStyle) {
		super(text, style)
	}

	getDisplayContent(): string {
		return this.content
	}

	copy() {
		return new PlainTextComponent(this.content, structuredClone(this.style))
	}
	
}

export default PlainTextComponent
