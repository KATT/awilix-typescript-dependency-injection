import { createContainer, asFunction, Lifetime } from 'awilix';

const container = createContainer();

container.loadModules([`${__dirname}/lib/**/!(*.spec|*.d|*.test).{js,ts}`], {
  resolverOptions: {
    lifetime: Lifetime.SINGLETON,
    injectionMode: 'CLASSIC',
  },
});

console.log('Modules loaded:', Object.keys(container.registrations));

export default container.cradle;
