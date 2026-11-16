// Turns "A new *kind* of firm" into safe HTML with the starred word in italics.
export function emphasise(text = '') {
  const safe = String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return safe.replace(/\*([^*]+)\*/g, '<em>$1</em>');
}
