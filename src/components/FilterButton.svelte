<script>
	import { createEventDispatcher } from 'svelte';
	export let name = '';
	export let currentActive = '';

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('select', {
			text: name
		});
	}
</script>

<button class={currentActive === name && 'active'} on:click={handleClick}>{name}</button>

<style>
	button {
		background: none;
		border: none;
		padding: 0;
		font-size: medium;
		cursor: pointer;
		margin-left: 1rem;
	}
	.active {
		text-decoration: underline;
	}
</style>
