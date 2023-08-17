export const CheckDesc = async (path: string) => {
    return new Promise((resolve, reject) => {
        if (path.match(/<a\s.+?>.*?<\/a>/g)) {
            reject()
        }
    })
        .then(() => true)
        .catch(() => false)
}
