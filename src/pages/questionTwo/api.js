import axios from "axios";

async function getCardDetails (){
	let newPromise = new Promise((resolve, reject)=>{
		axios.get('http://localhost:3001/example').then((result) => {
			resolve(result.data)
		});
	});

	return newPromise;
}

export { getCardDetails }