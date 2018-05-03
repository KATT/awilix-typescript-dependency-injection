import { createContainer, asFunction, Lifetime } from 'awilix';

import { IAggregate } from './lib/aggregate';
import { ICat } from './lib/cat';
import { IHuman } from './lib/human';
import { ICow } from './lib/cow';

const container = createContainer();

container.loadModules([`${__dirname}/lib/**/!(*.spec|*.d|*.test).{js,ts}`], {
  resolverOptions: {
    lifetime: Lifetime.SINGLETON,
  },
});

console.log('Modules loaded:', Object.keys(container.registrations));

export interface ICradle {
  cat: ICat;
  human: IHuman;
  cow: ICow;
  aggregate: IAggregate;
}

export default container.cradle as ICradle;
