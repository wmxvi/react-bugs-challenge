import axios from "axios";

async function getSpaceships (){
	let newPromise = new Promise((resolve, reject)=>{
		axios.get('http://localhost:3001/spaceships').then((result)=>{
			resolve(result.data)
		});
	});

	return newPromise;
}

export { getSpaceships }