<script>
	import { goto } from '$app/navigation';
</script>

<main
	class="flex flex-col gap-20 justify-center items-center h-screen w-screen"
	on:click={() => goto('/')}
	on:keydown={() => goto('/')}
>
	<section class="flex flex-col items-end">
		<h1 class="text-8xl">Welcome to Nanki</h1>
		<h2 class="text-4xl">the flashcard app in the web.</h2>
	</section>
</main>
