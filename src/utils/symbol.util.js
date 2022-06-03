export const concatSymbols = symbols => {
    if (symbols instanceof Array) {
        const response = symbols.map(symbol => {
            if (typeof symbol === "symbol") return symbol.description
            if (typeof symbol === "string") return symbol
            return ""
        })

        return response.join("")
    }
    if (typeof symbols === "symbol") return symbols.description ?? ""

    if (typeof symbols === "string") return symbols

    return ""
}