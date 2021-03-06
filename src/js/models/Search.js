import axios from "axios";
import { key, proxy } from "../config";

export default class Search {
	constructor(query) {
		this.query = query;
	}

	// ! Every async method return a Promise<>
	async getResults() {
		try {
			const res = await axios(
				`${proxy}http://food2fork.com/api/search/?key=${key}&q=${
					this.query
				}`
			);
			this.result = res.data.recipes;
		} catch (error) {
			console.error(error);
		}
	}
}
