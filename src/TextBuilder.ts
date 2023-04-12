import PlainTextComponent from "./PlainTextComponent.js"
import Text from "./Text.js"
import TextComponent from "./TextComponent.js"
import { type Font, type TextComponentStyle } from "./types.js"

export class TextBuilder extends Text {

	private style: TextComponentStyle

	constructor(base?: Text | TextComponent<any> | TextComponentStyle) {
		super()
		if (base instanceof Text) {
			// @ts-expect-error
			this.components = text.getComponents()
			this.style = this.components[this.components.length-1]
		} else {
			if (base instanceof TextComponent) this.components = [base]
			this.style = base || {}
		}
	}

	build() {
		return new Text(this.components)
	}

	space(length: number = 1) {
		const comp = new PlainTextComponent(" ".repeat(length))
		this.components.push(comp)
		return this
	}

	text(text: string) {
		const comp = new PlainTextComponent(text, this.style)
		this.components.push(comp)
		return this
	}

	default() {
		this.style = {}
		return this
	}

	setStyle(style: TextComponentStyle) {
		this.style = style
		return this
	}

	patchStyle(style: TextComponentStyle) {
		if ("color"      in style) this.style.color      = style.color
		if ("font"       in style) this.style.font       = style.font
		if ("weight"     in style) this.style.weight     = style.weight
		if ("italic"     in style) this.style.italic     = style.italic
		if ("underlined" in style) this.style.underlined = style.underlined
		if ("strike"     in style) this.style.strike     = style.strike
		if ("obfuscated" in style) this.style.obfuscated = style.obfuscated
		return this
	}

	color(color: number) {
		this.style.color = color
		return this
	}

	font(font: Font) {
		this.style.font = font
		return this
	}

	weight(weight: number) {
		this.style.weight = weight
		return this
	}

	italic(italic?: boolean) {
		this.style.italic = italic ?? true
		return this
	}

	underline(underlined?: boolean) {
		this.style.underlined = underlined ?? true
		return this
	}

	strike(strike?: boolean) {
		this.style.strike = strike ?? true
		return this
	}

	obfuscate(obfuscated?: boolean) {
		this.style.obfuscated = obfuscated ?? true
		return this
	}

}

export default TextBuilder
