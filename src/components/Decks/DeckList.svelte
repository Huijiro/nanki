<script>
	import DeckDisplay from './DeckDisplay.svelte';
	import DeckNew from './DeckNew.svelte';
</script>

<div class="flex flex-wrap gap-3">
	{#each Array(10) as _}
		<DeckDisplay />
	{/each}
	<DeckNew />
</div>
