<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
</script>

<main>
	<Header />
	<Sidebar />

	<div>
		<div class="browser-headers">
			<h4>Name</h4>
			<h4>Players</h4>
			<h4>Map</h4>
			<h4>Ping</h4>
		</div>

		<div class="browser-servers">asd</div>
	</div>
</main>

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	:global(body) {
		margin: 0;
		padding: 0;
	}

	main {
		display: grid;
		grid-template-rows: 80px 1fr;
		grid-template-columns: 132px 1fr;
		background-color: #485d67;
		height: 100vh;
		color: white;
		animation: fade 1s;
	}

	.browser-headers {
		display: grid;
		grid-template-rows: auto;
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}

	.browser-servers {
		display: grid;
		grid-template-rows: auto;
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}

	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
