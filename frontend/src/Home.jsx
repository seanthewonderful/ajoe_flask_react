import { useState, useEffect } from "react"
import axios from 'axios'

const Home = () => {
	const [data, setData] = useState("")

	const getData = async () => {
		await axios.get("http://localhost:5000/members")
			.then(res => {
				setData(res.data.message)
				console.log(res.data)
			})
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<div>
			{data}
		</div>
	)
}

export default Home