<script>
	import DeckDisplay from './DeckDisplay.svelte';
</script>

<div class="flex flex-wrap gap-3">
	{#each Array(100) as _}
		<DeckDisplay />
	{/each}
</div>
