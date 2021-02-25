<template>
	<li class="list-group-item media">
		<!-- v-bind:src -->
		<!-- only need to add the computed function name -->
		<img class="mr-3" :src="thumbnailUrl" alt="" />
		<div class="media-body">
			<h5>{{ video.snippet.title }}</h5>
			{{ video.snippet.description }}
		</div>
	</li>
</template>

<script>
	export default {
		name: "VideoListItem",
		props: {
			video: Object,
		},
		computed: {
			// computed property from the API
			thumbnailUrl() {
				return this.video.snippet.thumbnails.default.url;
			},
		},
	};
</script>

<style scoped>
	li {
		display: flex;
	}
</style>
