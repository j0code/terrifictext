import Text from "./Text.js";
import { type TextPrinter } from "./types.js";
export declare class DOMTextPrinter implements TextPrinter<never> {
    print(text: Text): boolean;
    convert(text: Text): void;
}
export default DOMTextPrinter;
