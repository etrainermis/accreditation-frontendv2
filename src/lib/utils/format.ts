export function titleCase(value: string) {
  return value
    .split(/[\s-]/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
