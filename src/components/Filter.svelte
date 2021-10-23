<script>
	import FilterButton from './FilterButton.svelte';
	export let filterOptions = [];

	export let filter = 'none';
	const handleFilter = (category) => {
		filter = category.detail.text;
	};
</script>

<div class="container">
	filter:
	<FilterButton currentActive={filter} name="none" on:select={handleFilter} />
	{#each filterOptions as option}
		<FilterButton currentActive={filter} name={option} on:select={handleFilter} />
	{/each}
</div>

<style>
	.container {
		display: flex;
		/* 	justify-content: flex-end; */
	}
</style>
