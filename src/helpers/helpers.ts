/**
 * Groups all items in an array of objects `T` where the value of property `K` is the same
 * @param array Items to group
 * @param key Key of `T` to group by
 */
export function GroupBy<T, K extends keyof T>(array: T[], key: K) {
  const map = new Map<T[K], T[]>();
  array.forEach((item) => {
    const itemKey = item[key];
    if (!map.has(itemKey)) {
      map.set(itemKey, array.filter((i) => i[key] === item[key]));
    }
  });
  return map;
}

export function WordCapitalize(word: string | undefined) {
  if (!word) {
    return word;
  }
  return word[0].toUpperCase() + word.substr(1).toLowerCase();
}
