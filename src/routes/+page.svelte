<script lang="ts">
	import { goto } from '$app/navigation';
	if (!localStorage.getItem('first_visit')) {
		goto('/welcome');
		localStorage.setItem('first_visit', 'visited');
	}
</script>

<h1>Hello</h1>
