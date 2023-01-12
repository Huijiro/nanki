<script lang="ts">
	export let deckInfo: DeckName = {
		name: 'TEST'
	};
</script>

<div
	class="border-2 flex flex-col justify-between items-center min-h-[270px] min-w-[180px] hover:bg-ink dark:hover:bg-paper hover:text-paper dark:hover:text-ink cursor-pointer"
>
	<div class="h-full text-2xl font-bold flex justify-center items-center">
		<h2>{deckInfo.name}</h2>
	</div>
</div>
