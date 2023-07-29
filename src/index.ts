export function sum(a: number, b: number) {
  return a + b
}

export function template(str: string, ...args: (string | number)[]) {
  return str.replace(/{(\d+)}/g, (match: string, key: string) => {
    const index = Number(key)
    if (Number.isNaN(index))
      return match

    return args[index] as string
  })
}
