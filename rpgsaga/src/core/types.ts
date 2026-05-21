export enum HeroType {
    Knight = "Рыцарь",
    Archer = "Лучник",
    Mage = "Маг"
}

export interface AbilityResult {
    damage: number;
    skipOpponentTurn: boolean;
}