# terrifictext
Text done right.


## What is TerrificText?
In principle, TerrificText is a way to universally represent formatted text.<br>
For that, special [Components](#TextComponents), [Printers](#TextPrinters), and [Parsers](#Parsers) may be created.<br>
TerrificText includes some default Components and Printers as well as a convenient [builder](#TextBuilder).

## Install
### Node.js
```sh
> npm install terrifictext
```
```ts
import { ... } from "terrifictext"
```
### Browser
```ts
import { ... } from "https://j0code.github.io/terrifictext/main.mjs"
```

## TextComponents
Text components can be formatted and colored.

#### PlainTextComponent
`type: "text"`<br>
`content` is a string.<br>
Just some text.

#### TranslatedTextComponent
`type: "translate"`<br>
`content` is a string<br>
The key to a translatable text.<br>
Keys that can not be translated have to be shown as-is.

#### TimestampTextComponent
`type: "timestamp"`<br>
`content` is a number<br>
A unix timestamp that should be shown in textual representation.<br>
E.g. "April 12th, 2023", "Yesterday", or "in 2 minutes"

### Custom TextComponents
Those could be anything, including @user handles.<br>
To create a custom textcomponent, create a class that extends TextComponent.
```ts
import { TextComponent, type TextComponentStyle, isTextComponent } from "terrifictext"

export class DiscordUserMentionTextComponent extends TextComponent<string> {

	// see https://github.com/j0code/node-yson#parse
	static fromYSON(raw: unknown): DiscordUserMentionTextComponent | undefined {
		if (!isTextComponent<string>(raw)) return
		if (raw.type != "discorduser" || typeof raw.content != "string") return
		return new DiscordUserMentionTextComponent(raw.content, raw.style)
	}
	
	readonly type = "discorduser"

	// <@user-id>
	getDisplayContent(): string {
		return `<@${this.content}>`
	}

	copy() {
		return new DiscordUserMentionTextComponent(this.content, structuredClone(this.style))
	}
	
}
```

## TextPrinters
Printers are utilities that can convert a Text into an environment-specific format.<br>
This could be HTML-Elements, ANSI-Codes, ...<br>
Not all formatting might be available in every environment. In that case, the formatting is ignored.<br>
They provide two methods. `print()` and `convert`. See more [below](#custom-text-printers).

None of the included Printers currently support translated text components.

#### DevtoolsTextPrinter
⚠️ Do not use in node.js! Use [ANSITextPrinter](#ANSITextPrinter) instead.

Prints the Text into the devtools console using CSS.<br>
The `print()` method prints the text directly into the console with console.log().<br>
If you'd prefer to use console.error() or whatever, use `convert()` instead:
```ts
import { DevtoolsTextPrinter } from "terrifictext"
// ...
// convert() returns the arguments as an Array, so a spread operator (...) is needed.
console.error(...DevtoolsTextPrinter.convert(text))
```

#### DOMTextPrinter
⚠️ Do not use in node.js!

Converts the Text into HTML Elements.<br>
The `print()` method requires a `location` to be given.
That location has to be another HTMLElement, it's going to be the parent element.

#### ANSITextPrinter
⚠️ Do not use in the browser! Use [DevtoolsTextPrinter](#DevtoolsTextPrinter) instead.

Prints the Text into the Console / Terminal using ANSI/VT100 Format Codes.

### Custom Text Printers
```ts
import Text from "./Text.js"
import { type TextPrinter } from "terrifictext"

// TextPrinter<T> -> the T specifies the type of the second argument of print (location)
export const CustomTextPrinter: TextPrinter<never> = {

	// returns true if it failed to insert the Text at the specified location
	print(text: Text): boolean {
		const convertedText = this.convert(text)
		// ... (insert/print the text)
		return false
	},

	// return type is environment specific!
	convert(text: Text): string {
		const comps = text.getComponents()
		const convertedText = ""

		if (comps.length == 0) return []

		for (let comp of comps) {
			// do something
		}

		return convertedText
	}

}
```

## Parsers
You can construct Texts using Parsers, e.g. Markdown<br>
No Parsers are included in this package.

Theoretically, you could also make a MarkdownTextPrinter.

## TextBuilder
A convenient text builder to quickly generate Texts.<br>
Example:
```ts
import { TextBuilder } from "terrifictext"

const text = new TextBuilder()
	.color(0x5070ff).text("Hello").space()
	.color(0xff0000).italic().text("World")
	.default().color(0x00ff00).text("!").build()
DevtoolsTextPrinter.print(text)

console.log("%cHello %cWorld%c!", "color: #5070ff", "color: #ff0000; font-style: italic", "color: #00ff00")
```
This should print the exact same text twice:<br>
A blue "Hello", a red "World", and a lime "!".

## LICENSE and CONTRIBUTIONS
I haven't decided on a license yet.<br>
But feel free to use or edit the code however you want.<br>
Just make sure to credit me please (a link to this repo is sufficient).

### Contributions
You can (if you want) participate by reporting bugs, issues, forking the project, opening a pull request, ...<br>
I'm on Discord: @j0code#7360 (418109742183874560)<br>
Feel free to message me at any time if you have a question.
