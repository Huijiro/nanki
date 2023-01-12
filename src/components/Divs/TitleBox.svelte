<script>
	export let title = 'DEFAULT';
</script>

<div class="p-5 w-full h-full">
	<h1 class="font-bold text-xl border-b-2">{title}</h1>
	<div class="p-3">
		<slot />
	</div>
</div>
