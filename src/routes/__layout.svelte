<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet" />
</svelte:head>

<div id="page-container">
	<div class="nav-container">
		<ul class="nav-list">
			<li class="nav-item">
				<a href="/">home</a>
			</li>
			<li class="nav-item">
				<a href="/about">about</a>
			</li>
		</ul>
	</div>

	<div class="container">
		<slot />
	</div>

	<div class="footer-container">Copyright © 2021 XXX. All Rights Reserved</div>
</div>

<style>
	:global(body, html) {
		padding: 0;
		margin: 0;
	}

	:blobal(:root) {
		--main-theme-color: #3a0ca3;
	}

	:global(body) {
		font-family: Inter, sans-serif;
	}

	:global(a) {
		text-decoration: none;
		font-weight: bold;
	}

	:global(p) {
		line-height: 2rem;
	}

	:global(.text-container) {
		max-width: 700px;
	}

	#page-container {
		display: grid;
		grid-template-rows: auto 1fr auto;
		width: 100vw;
		min-height: 100vh;
	}
	.nav-container {
		width: 100%;
		background: black;
		box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.2);
		border-bottom: 1px solid black;
		margin: 0;
		color: white;
	}

	.nav-list {
		width: 100%;
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: flex-end;
		list-style: none;
		align-items: center;
	}

	.nav-item {
		margin-right: 1rem;
		display: block;
		padding: 1rem;
	}

	.nav-item a {
		color: white;
	}

	.nav-item:first-child {
		margin-right: auto;
		margin-left: 1rem;
	}
	.container {
		margin: 0;
		padding: 2rem;
	}

	.footer-container {
		background: black;
		/* box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.05); */
		color: white;
		padding: 1rem;
		font-size: x-small;
	}
</style>
