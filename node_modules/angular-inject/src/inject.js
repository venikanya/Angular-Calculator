export function inject(modules) {
  return function (target) {
    class tempClass extends target {
      constructor(...injectedValues) {
        super(...injectedValues);
        for (var i = 0; i < modules.length; i++) {
          this[modules[i]] = injectedValues[i];
        }
      }
    }
    tempClass.$inject = modules;
    return tempClass;
  }
}
