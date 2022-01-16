<script lang="ts">
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabaseClient.js';

	import Header from '$lib/Header.svelte';
	import Sidebar from '$lib/Sidebar.svelte';

	type Server = {
		id: string;
		name: string;
		gamemode: string;
		version: string;
		created_at: string;
	};

	let serverList: Server[] = [];

	onMount(async () => {
		let { data: servers, error } = await supabase.from('servers').select('*');
		console.log(servers);
		servers && (serverList = servers);
	});
</script>

<main>
	<Header />
	<Sidebar />

	<div class="content">
		<div class="browser-headers">
			<h4>Name</h4>
			<h4>Players</h4>
			<h4>Map</h4>
			<h4>Ping</h4>
			<h4 />
		</div>

		{#each serverList as server}
			<div class="browser-server">
				<p>{server.name}</p>
				<p>0/0</p>
				<p>nil</p>
				<p>nil</p>
				<button>Join</button>
			</div>
		{/each}
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

	.content {
		padding: 12px 24px;
	}

	.browser-headers {
		display: grid;
		grid-template-rows: auto;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	}

	.browser-server {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	}

	button {
		border: 0;
		padding: 12px 14px;
		color: white;
		border-radius: 3px;
		background-color: #11b121;
		width: max-content;
		height: max-content;
		align-self: center;
		cursor: pointer;
		outline: 0;
	}

	button:active {
		background-color: #128f1e;
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
