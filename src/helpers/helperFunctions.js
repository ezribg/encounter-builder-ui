export const statAbbreviation = (statName) => {
    switch (statName) {
        case "strength":
            return "STR";
        case "dexterity":
            return "DEX";
        case "constitution":
            return "CON";
        case "intelligence":
            return "INT";
        case "wisdom":
            return "WIS";
        case "charisma":
            return "CHA";
        default:
            return statName;
    };
};