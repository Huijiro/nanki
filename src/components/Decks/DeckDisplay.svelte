<script lang="ts">
	export let deckInfo: DeckInfo = {
		name: 'TEST',
		createdAt: new Date('2000-01-01'),
		viewedAt: new Date()
	};
</script>

<div
	class="border-2 flex flex-col justify-between items-center min-h-[360px] min-w-[270px] hover:bg-ink dark:hover:bg-paper hover:text-paper dark:hover:text-ink cursor-pointer"
>
	<div class="h-full text-2xl font-bold flex justify-center items-center">
		<h2>{deckInfo.name}</h2>
	</div>
	<div class="p-2 w-full flex justify-between items-center">
		<p>{deckInfo.createdAt.toLocaleDateString()}</p>
		<p>{deckInfo.viewedAt.toLocaleDateString()}</p>
	</div>
</div>
