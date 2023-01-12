<script>
	import DeckListSmall from '@/Decks/DeckListSmall.svelte';
	import DeckRecents from '@/Decks/DeckRecents.svelte';
	import TitleBox from '@/Divs/TitleBox.svelte';
</script>

<TitleBox title="Recents">
	<DeckRecents />
</TitleBox>
<TitleBox title="Decks">
	<DeckListSmall />
</TitleBox>
