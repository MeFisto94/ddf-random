<script lang="ts">
	import type { Nullable } from '../app';
	import { derive_cover_url } from '$lib';
	export let folge: Nullable<Folge> = undefined;
	$: cover = derive_cover_url(folge);
</script>

<div class="text-center rounded-2xl">
<h1 class="text-3xl font-bold text-sky-600 dark:text-sky-400 mb-5">Deine Folge: Die drei ??? {folge?.titel} ({folge?.nummer ?? 0})</h1>
{#if cover}
	<img class="rounded-2xl max-w-lg" src="{cover}" alt="Album Cover" style="margin: 0 auto"/>
{/if}
</div>
