<div class="sidebar">
	<h3 class="sidebar--menu">Servers</h3>

	<div class="sidebar__info">
		<div class="sidebar__info--socials">
			<img src="/discord.svg" width="32" alt="Discord Logo" draggable="false" />
			<img src="/github.svg" width="32" alt="Discord Logo" draggable="false" />
			<img src="/steam.svg" width="32" alt="Discord Logo" draggable="false" />
		</div>

		<div class="sidebar__info--contact">
			<p>Change Log</p>
			<p>Contact</p>
		</div>

		<p class="sidebar__info--version">0.0.1</p>
	</div>
</div>

<style>
	.sidebar {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: #0e2935;
		text-align: center;
		border-right: 2px solid #ae915d;
	}

	.sidebar--menu {
		margin-top: 24px;
	}

	.sidebar__info {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.sidebar__info--socials {
		display: flex;
		flex-direction: column;
		gap: 18px;
		margin-bottom: 24px;
	}

	.sidebar__info--contact p {
		margin: 0;
		margin-bottom: 6px;
		font-size: 14px;
	}

	.sidebar__info--version {
		font-size: 12px;
	}
</style>
