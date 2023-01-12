<script>
	import TitleBox from '@/Divs/TitleBox.svelte';
</script>

<TitleBox title="Recents">
	<div class="flex flex-wrap overflow-auto gap-3">
		{#each Array(5) as _}
			<div class="deckExample" />
		{/each}
	</div>
</TitleBox>
<TitleBox title="Decks">
	<div class="flex flex-wrap gap-3">
		{#each Array(20) as _}
			<div class="deckExample" />
		{/each}
	</div>
</TitleBox>

<style>
	.deckExample {
		content: '';
		height: 240px;
		width: 180px;
		background-color: red;
	}
</style>
