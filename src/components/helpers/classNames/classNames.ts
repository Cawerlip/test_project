type TMods = Record<string, string | boolean>

export const classNames = (cls: string, mods: TMods , additional: string[] ):string => {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
    .filter(([cn, value]) => Boolean(value))
    .map(([cn]) => cn )
  ].join(' ');
}