import { type Font, type RawTextComponent, isTextComponent, TextComponentStyle } from "./types.js"

export abstract class TextComponent<T> implements RawTextComponent<T>, TextComponentStyle {

	static fromYSON(raw: unknown) {
		if (!isTextComponent(raw)) return
		throw new Error(`TextComponent.fromYSON() for type ${raw.type} not implemented!`)
	}

	abstract readonly type: string

	private _content: T

	private _style: TextComponentStyle

	constructor(content: T, style?: TextComponentStyle) {
		this._content = content
		this._style = structuredClone(style) || {}
	}

	get content() {
		return this._content
	}

	set content(content: T) {
		this._content = content
	}

	get style() {
		return this._style
	}

	set style(style: TextComponentStyle) {
		this._style = style
	}

	get color() {
		return this._style.color
	}

	set color(color: number | undefined) {
		this._style.color = color
	}

	get font() {
		return this._style.font
	}

	set font(font: Font | undefined) {
		this._style.font = font
	}

	get weight() {
		return this._style.weight
	}

	set weight(weight: number | undefined) {
		if (weight != null) {
			if (weight < 0) throw new Error() // TODO: Scream
		}
		this.weight = weight
	}

	get italic() {
		return this._style.italic
	}

	set italic(italic: boolean | undefined) {
		this.italic = italic
	}

	get underlined() {
		return this._style.underlined
	}

	set underlined(underlined: boolean | undefined) {
		this._style.underlined = underlined
	}

	get strike() {
		return this._style.strike
	}

	set strike(strike: boolean | undefined) {
		this._style.strike = strike
	}

	get obfuscated() {
		return this._style.obfuscated
	}

	set obfuscated(obfuscated: boolean | undefined) {
		this._style.obfuscated = obfuscated
	}

	abstract getDisplayContent(): string

	abstract copy(): TextComponent<T>

	toJSON(): RawTextComponent<T> {
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
		}
	}

	toYSON() {
		return this.toJSON()
	}

	toString() {
		return `{${this.type};${this.content}}`
	}

}

export default TextComponent
