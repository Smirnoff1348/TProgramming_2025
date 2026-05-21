import { Logger } from "./core/logger.js";
import { HeroFactory } from "./factories/HeroFactory.js";
import { BattleService } from "./services/BattleService.js";

const heroes = HeroFactory.createRandom(4);
BattleService.tournament(heroes, Logger);