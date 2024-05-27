import "reflect-metadata";

class DependencyContainer {
  private static dependencies = new Map<string, any>();

  static register(token: string, instance: any) {
    DependencyContainer.dependencies.set(token, instance);
  }

  static resolve<T>(token: string): T {
    const dependency = DependencyContainer.dependencies.get(token);
    if (dependency === undefined) {
      throw new Error(`Dependency not found: ${token}`);
    }
    return dependency;
  }
}

export function Inject(token: string) {
  return function (
    target: any,
    propertyKey: string | symbol,
    parameterIndex: number
  ) {
    const existingInjectedDependencies =
      Reflect.getOwnMetadata("injectedDependencies", target) || [];
    existingInjectedDependencies.push({ parameterIndex, token });
    Reflect.defineMetadata(
      "injectedDependencies",
      existingInjectedDependencies,
      target
    );
  };
}

export function Injectable(constructor: new (...args: any[]) => any) {
  const originalConstructor = constructor;
  function newConstructor(...args: any[]) {
    const injectedDependencies =
      Reflect.getOwnMetadata("injectedDependencies", originalConstructor) || [];
    const resolvedDependencies = injectedDependencies.map((dep: any) =>
      DependencyContainer.resolve(dep.token)
    );
    return new originalConstructor(...resolvedDependencies);
  }

  newConstructor.prototype = originalConstructor.prototype;

  return newConstructor as any;
}
