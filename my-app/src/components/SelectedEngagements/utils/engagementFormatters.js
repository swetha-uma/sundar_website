export function splitSectorLines(sector) {
  if (!sector) return []
  return sector.split(' — ').map((part) => part.trim())
}
