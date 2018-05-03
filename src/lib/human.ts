import ITalk from './ITalk';

export interface IHuman extends ITalk {}

export default ({}): IHuman => ({
  greet: who => `hello ${who}`,
});
