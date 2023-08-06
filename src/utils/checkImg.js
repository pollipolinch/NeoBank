class CheckImg {

    async isUrl(path) {

        return new Promise((resolve, reject) => {
            const img = document.createElement("img")
            img.src = path
            img.onload = resolve
            img.onerror = reject
            
        })
        .then(() => true)
        .catch(() => false)
	}
}

export const checkImg = new CheckImg()