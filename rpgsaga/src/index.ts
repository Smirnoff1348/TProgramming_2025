import { HeroFactory } from "./factories/HeroFactory";
import { BattleService } from "./services/BattleService";

const heroes = HeroFactory.createRandomHeroes(4);
BattleService.tournament(heroes);