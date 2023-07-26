import { useEffect, useState } from "react"
import './App.css'
import { useCatImage } from "./services/hooks/useCatImage"
import { useCatFact } from "./services/hooks/useCatFact"

export function App () {
	const { fact, refreshFact } = useCatFact()
	const { imgUrl } = useCatImage({ fact })

	const handleClick = async () => { 
		refreshFact()
	}

    return (
        <main>
            <h1>App de Gatitos</h1>

			<button onClick={handleClick}>Get new fact</button>

            {fact && <p>{fact}</p>}
            {imgUrl && <img src={imgUrl} alt={`Image extracted using the first three words for ${fact}`}/>}
        </main>
    )
}