export function isFont(x) {
    if (!x || typeof x != "object")
        return false;
    if (!("family" in x) || !("size" in x))
        return false;
    if (typeof x.family != "string" && x.family instanceof Array)
        return false;
    if (typeof x.size != "number")
        return false;
    return true;
}
export function isTextComponent(raw) {
    if (!("type" in raw))
        return false;
    if (!("content" in raw))
        return false;
    if ("color" in raw && typeof raw.color != "number")
        return false;
    if ("font" in raw && !isFont(raw.font))
        return false;
    if ("weight" in raw && typeof raw.weight != "number")
        return false;
    if ("italic" in raw && typeof raw.italic != "boolean")
        return false;
    if ("underlined" in raw && typeof raw.underlined != "boolean")
        return false;
    if ("strike" in raw && typeof raw.strike != "boolean")
        return false;
    if ("obfuscated" in raw && typeof raw.obfuscated != "boolean")
        return false;
    return true;
}
