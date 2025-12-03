export function getSchemaName(fullName: string): string {
  const parts = fullName.split(".")
  return parts.at(-1) + "Schema"
}
