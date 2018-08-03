const isFunc = property => (typeof (property) === 'function');
const isObject = property => (typeof (property) === 'object' && property !== null);
const handleAsyncFunc = async (target, property, args) =>
  (args ? await target[property](...args) : await target[property]());

export { isFunc, handleAsyncFunc };
