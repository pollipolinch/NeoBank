class CheckDesc {

    async isDesc(path) {

        return new Promise((resolve, reject) => {
            if (path.match(/<a\s.+?>.*?<\/a>/g)) {
               reject()
              }
            resolve()
        })
        .then(() => true)
        .catch(() => false)
	}
}

export const checkDesc = new CheckDesc()