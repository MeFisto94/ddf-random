<script lang="ts">
	import Folge from "./folge.svelte";
	import { fetch_all_folgen, get_random_element } from '$lib';
	const folgen_promise = fetch_all_folgen();

	async function get_next_folge() {
		return get_random_element(await folgen_promise);
	}
	let folge_promise = get_next_folge();
</script>

<!-- This is just for the background color -->
<div class="bg-sky-50 dark:bg-sky-950 h-full min-h-screen" style="margin: 0 auto">
	<div class="justify-center items-center mx-20 dark:bg-sky-950 text-center" style="margin: 0em auto;">
			{#await folge_promise}
				<h3 class="dark:text-sky-600 text-sky-800 text-3xl">Lade alle Folgen...</h3>
			{:then folge}
				<button class="bg-sky-600 dark:bg-sky-500 rounded p-1 text-2xl hover:dark:bg-sky-300 hover:bg-sky-700 mb-8 mt-4 ml-4 mr-4"
				on:click={async () => {folge_promise = get_next_folge()}}>
					Noch eine Folge!
				</button>
				<Folge folge="{folge}" />
			{:catch error}
				<h3 class="text-red-600 text-2xl">Fehler beim Laden: {error.message}</h3>
			{/await}
		<p class="text text-sky-600 dark:text-sky-500 text-center mt-2 mb-2">
			&copy; 2024 by MeFisto94. Datensatz basierend auf <a class="underline text-sky-900 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300" href="http://dreimetadaten.de" target="_blank">dreimetadaten.de</a>.
		</p>
	</div>
</div>