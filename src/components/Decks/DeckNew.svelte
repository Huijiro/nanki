<script>
	import { goto } from '$app/navigation';
</script>

<div
	on:click={() => goto('/new')}
	on:keydown={() => goto('/new')}
	class="border-2 min-h-[360px] min-w-[270px] flex justify-center items-center hover:bg-ink dark:hover:bg-paper hover:text-paper dark:hover:text-ink cursor-pointer"
>
	<span class="-translate-y-4 text-9xl font-bold">+</span>
</div>
