import type { EndpointOutput } from '@sveltejs/kit';
import { parse } from 'path';
export async function get(): Promise<EndpointOutput> {
	const raw = await import.meta.globEager('./*.svx');

	const posts = Object.keys(raw).map((elem) => {
		const { metadata } = raw[elem];
		console.log(metadata);

		const name = parse(elem).name;
		const dateFrag = name.split('-')[0];

		const month = dateFrag.slice(2);
		const year = dateFrag.slice(0, 2);
		const dateString = [month, ' – ', year].join('');

		metadata.dateString = dateString;
		metadata.date = parseInt(dateFrag) || -1;

		const post = { slug: `articles/${name}`, metadata };
		return post;
	});
	const postsSorted = posts.sort((a, b) => a.metadata.date - b.metadata.date).reverse();
	/* list.forEach((elem) => console.log(elem.metadata)); */
	/* const posts = Object.keys(list).map((elem) => basename(elem)); */
	return { body: JSON.stringify(postsSorted), status: 200 };
}
