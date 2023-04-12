import TextBuilder from "./TextBuilder.js"
import TextComponent from "./TextComponent.js"

export class Text {

	protected components: Array<TextComponent<unknown>>

	constructor(components: Array<TextComponent<unknown>> = []) {
		this.components = components
	}

	getBuilder() {
		return new TextBuilder(this)
	}

	getComponents() {
		const comps: typeof this.components = []
		this.components.forEach(comp => comps.push(comp.copy()))
		return comps
	}

	toString() {
		let s = []
		for (let comp of this.components) {
			s.push(comp.toString())
		}
		return `Text(${this.components.length}) [${s.join(",")}]`
	}

	toJSON() {
		return {
			components: this.components
		}
	}

	toYSON() {
		return this.toJSON()
	}

}

export default Text
