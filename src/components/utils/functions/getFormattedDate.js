const dateFormatter = new Intl.DateTimeFormat(['ru'])

export function getFormattedDate(date) {
    if (!date) return ''
    return dateFormatter.format(new Date(date))
}