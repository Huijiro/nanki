<script>
	import DeckDisplaySmall from './DeckDisplaySmall.svelte';
</script>

<div class="flex flex-wrap gap-3">
	{#each Array(100) as _}
		<DeckDisplaySmall />
	{/each}
</div>
