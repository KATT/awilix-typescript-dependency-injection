import { IAggregate } from './lib/aggregate';
import cradle from './cradle';

const echo = (cradle.aggregate as IAggregate).greet('KATT');

console.log(echo);
