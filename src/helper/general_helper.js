export function getBaseUrl () {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

    return BASE_URL
}

export function getLocaleDateString(dateString) {
    const date = new Date(dateString)
    const options = { year: 'numeric', month: 'long', day: 'numeric' }

    return date.toLocaleDateString('id-ID', options)
}