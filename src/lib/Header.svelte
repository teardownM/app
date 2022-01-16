<script lang="ts">
	import Logo from '$lib/Logo.svelte';
</script>

<div class="logo">
	<Logo />
</div>

<div class="header">
	<h2>TeardownM</h2>
</div>

<style>
	.logo {
		display: flex;
		justify-content: center;
		background-color: #0e2935;
	}

	.header {
		display: flex;
		align-items: center;
		background-color: #0e2935;
		height: 100%;
		border-bottom: 2px solid #ae915d;
	}
</style>
