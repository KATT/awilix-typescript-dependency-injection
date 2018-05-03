import ITalk from './ITalk';

export interface ICow extends ITalk {}

export default (): ICow => ({
  greet: who => `moo ${who}`,
});
