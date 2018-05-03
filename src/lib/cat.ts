import ITalk from './ITalk';

export interface ICat extends ITalk {}

export default (): ICat => ({
  greet: who => `meow ${who}`,
});
