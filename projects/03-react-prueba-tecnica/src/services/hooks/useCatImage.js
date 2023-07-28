import { useEffect, useState } from "react"

const CAT_PREFIX_IMG_URL = "https://cataas.com"

export function useCatImage ({ fact }) {
	const [imgUrl, setImgUrl] = useState()

	useEffect(() => {
		if(!fact) return

		const threeFirstWords = fact.split(' ', 3).join(' ')
		console.log(threeFirstWords)

		fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
			.then(res => res.json())
			.then(response => {
				const { url } = response
				setImgUrl(url)
			})
	}, [fact])

	return { imgUrl: `${CAT_PREFIX_IMG_URL}${imgUrl}` }
} // { imgUrl: 'https://...' }
