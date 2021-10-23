<script>
	export let posts = [];
</script>

<div class="grid-container">
	{#each posts as post}
		<div
			class="grid-item"
			style="
			background-image:url(/{post.metadata.img});
			"
		>
			<a href={post.slug}>
				<div class="text-container">
					<div>{post.metadata.dateString || '– / –'}</div>
					<div>
						{post.metadata.title}
					</div>
				</div>
			</a>
		</div>
	{/each}
</div>

<!-- linear-gradient(gray, black), -->
<style>
	.grid-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 350px));
		grid-gap: 2rem;
		margin-top: 2rem;
		width: 100%;
	}

	.grid-item {
		min-height: 30rem;
		padding: 1rem;
		/* box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.2); */
		color: #3a0ca3;
		background-size: cover;
		background-position: center;
		background-blend-mode: saturation;
	}

	a {
		font-weight: normal;
	}

	a:link {
		color: var(--main-theme-color);
	}
	a:visited {
		color: var(--main-theme-color);
	}
	a:hover {
		color: var(--main-theme-color);
	}
	a:active {
		color: var(--main-theme-color);
	}
	.text-container {
		background-color: white;
		padding: 1rem;
		margin-top: auto;
		line-height: 150%;
	}
	.text-container:hover {
		text-decoration-color: var(--main-theme-color);
		text-decoration: underline;
	}
</style>
