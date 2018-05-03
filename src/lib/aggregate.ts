import { ICradle } from '../cradle';

export interface IAggregate {
  greet(who: string): string[];
}

export default ({ cat, cow, human }: ICradle): IAggregate => ({
  greet: who =>
    [cat, cow, human].map(target => {
      return target.greet(who);
    }),
});
