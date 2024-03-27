export function getFormattedDate(date: Date) {
    return `${date.getFullYear()}, ${date.toLocaleString('default', { month: 'short' })} ${date.getDay()}`
}
