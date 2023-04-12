import Text from "./Text.js"
import { TextComponentStyle, isFont, type TextPrinter } from "./types.js"

export const DevtoolsTextPrinter: TextPrinter<never> = {

	print(text: Text): boolean {
		console.log(...this.convert(text))
		return true
	},

	convert(text: Text): string[] {
		const comps = text.getComponents()
		const template: string[] = []
		const styles:   string[] = []

		if (comps.length == 0) return []

		for (let comp of comps) {
			template.push(comp.getDisplayContent())
			styles.push(getCSSStyle(comp))
		}

		return ["%c" + template.join("%c"), ...styles]
	}

}

export default DevtoolsTextPrinter

function getCSSStyle(style: TextComponentStyle) {
	let s = ""
	const decorations: string[] = []
	let decorated: boolean = false

	if (style.color) s += `color: #${style.color.toString(16).padStart(6, "0")};`
	if (style.font && isFont(style.font)) {
		const fontFamily = typeof style.font.family == "string" ? [style.font.family] : style.font.family
		s += `font-family: ${style.font.family}; font-size: ${style.font.size}`
	}
	if (style.weight)  s += `font-weight: ${style.weight};`
	if (typeof style.italic     == "boolean") s += `font-style: ${style.italic ? "italic" : "normal"};`
	if (typeof style.underlined == "boolean") {
		decorated = true
		if (style.underlined) decorations.push("underline")
	}
	if (typeof style.strike == "boolean") {
		decorated = true
		if (style.strike) decorations.push("strike")
	}

	if (decorated) {
		if (decorations.length == 0) s += `text-decoration: none;`
		else s += `text-decoration: solid ${decorations.join(" ")};`
	}

	return s
}

function randomASCII(length: number) {
	const random = crypto.getRandomValues(new Uint8Array(length))
	let s = ""
	for (let c of random) {
		s += String.fromCharCode(32 + c % 95) // ' ' (0x20) to '~' (0x7E)
	}
	return s
}
