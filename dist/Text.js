import TextBuilder from "./TextBuilder.js";
export class Text {
    components;
    constructor(components = []) {
        this.components = components;
    }
    getBuilder() {
        return new TextBuilder(this);
    }
    getComponents() {
        const comps = [];
        this.components.forEach(comp => comps.push(comp.copy()));
        return comps;
    }
    toString() {
        let s = [];
        for (let comp of this.components) {
            s.push(comp.toString());
        }
        return `Text(${this.components.length}) [${s.join(",")}]`;
    }
    toJSON() {
        return {
            components: this.components
        };
    }
    toYSON() {
        return this.toJSON();
    }
}
export default Text;
