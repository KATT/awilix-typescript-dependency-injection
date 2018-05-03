import { IHuman } from './human';
import { ICow } from './cow';
import { ICat } from './cat';

export interface IAggregate {
  greet(who: string): string[];
}

export default (cat: ICat, cow: ICow, human: IHuman): IAggregate => ({
  greet: who =>
    [cat, cow, human].map(target => {
      return target.greet(who);
    }),
});
