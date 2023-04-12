import Text from "./Text.js"
import { type TextPrinter } from "./types.js"

export class DOMTextPrinter implements TextPrinter<never> {

	print(text: Text): boolean {
		throw new Error("Method not implemented.")
	}

	convert(text: Text): void {
		throw new Error("Method not implemented.")
	}

}

export default DOMTextPrinter
