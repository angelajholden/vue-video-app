<template>
	<div>
		<input @input="onInput" />
	</div>
</template>

<script>
	export default {
		name: "SearchBar",
		methods: {
			onInput: function(event) {
				// console.log(event.target.value);
				// child > parent communicates by 'emitting' an event
				// 'termChange' is a name we made up; semantic
				this.$emit("termChange", event.target.value);
			},
		},
	};
</script>

<style scoped>
	input {
		width: 75%;
	}
	div {
		text-align: center;
		margin: 20px;
	}
</style>
