import { createContainer, asFunction, Lifetime } from 'awilix';

import { IAggregate } from './lib/aggregate';

const container = createContainer();

container.loadModules([`${__dirname}/lib/**/!(*.spec|*.d|*.test).{js,ts}`], {
  resolverOptions: {
    lifetime: Lifetime.SINGLETON,
  },
});

console.log('Modules loaded:', Object.keys(container.registrations));

export interface ICradle {
  aggregate: IAggregate;
}

export default container.cradle as ICradle;
