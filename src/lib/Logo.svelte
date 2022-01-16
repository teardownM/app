<script>
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
</script>

<img
	src="/TeardownM.png"
	alt="TeardownM Logo"
	draggable="false"
	in:fly={{ y: 100, duration: 1500 }}
/>

<style>
	img {
		height: 100%;
		user-select: none;
	}
</style>
