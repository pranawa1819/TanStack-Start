export function formatDate(ms: number | string | Date | undefined, format: string = 'YYYY/MM/DD'): string {
  if (!ms && ms !== 0) return '';

  const date = new Date(ms);
  if (isNaN(date.getTime())) {
    console.warn('Invalid date passed to formatDate:', ms);
    return '';
  }

  if (format.toUpperCase() === 'ISO') {
    return date.toISOString();
  }

  const map: Record<string, string | number> = {
    YYYY: date.getFullYear(),
    MMMM: date.toLocaleString('en-US', { month: 'long' }),
    MMM: date.toLocaleString('en-US', { month: 'short' }),
    MM: String(date.getMonth() + 1).padStart(2, '0'),
    DD: String(date.getDate()).padStart(2, '0'),
    HH: String(date.getHours()).padStart(2, '0'),
    mm: String(date.getMinutes()).padStart(2, '0'),
    ss: String(date.getSeconds()).padStart(2, '0'),
  };

  return format.replace(/YYYY|MMMM|MMM|MM|DD|HH|mm|ss/g, (token) => String(map[token]));
}
