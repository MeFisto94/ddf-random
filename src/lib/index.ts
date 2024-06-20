// place files you want to import through the `$lib` alias in this folder.
import type { Nullable } from '../app';

export function derive_cover_url(folge: Nullable<Folge>): Nullable<string> {
	if (!folge?.links) {
		return null;
	}

	const links = folge.links;
	return links.cover ?? links.cover_kosmos ?? links.cover_itunes;
}

export async function fetch_all_folgen(): Promise<Folge[]> {
	// CORS Problems require us to host Serie.json locally
	//const res = await fetch(`https://github.com/YourMJK/dreimetadaten/raw/ad1f06d7f23da2c0420d5b4492abc4a5a52f26f6/web/data/Serie.json`);
	//const res = await fetch(`http://dreimetadaten.de/data/Serie.json`);
	const res = await fetch(`Serie.json`);
	const json = await res.json();
	return json.serie;
}

export function get_random_element<T>(array: T[]): Nullable<T> {
	return array.length ? array[Math.floor(Math.random() * array.length)] : undefined;
}