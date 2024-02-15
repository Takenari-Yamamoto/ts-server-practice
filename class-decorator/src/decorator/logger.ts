export function Logger(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  //   console.log("target::::", target);
  const originalMethod = descriptor.value;

  console.log(
    "target===>>>>> ",
    target,
    "propertyKey===>>>>>  ",
    propertyKey,
    "descriptor===>>>>>  ",
    descriptor
  );

  descriptor.value = function (...args: any[]) {
    console.log("args===>>>>> ", args);
    // console.log(`Calling ${propertyKey} with args: ${JSON.stringify(args)}`);
    const result = originalMethod.apply(this, args);
    // console.log(`Called ${propertyKey} returned: ${JSON.stringify(result)}`);
    return result;
  };

  return descriptor;
}
