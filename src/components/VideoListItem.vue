<template>
	<li class="list-group-item media" @click="onVideoSelect">
		<!-- v-bind:src -->
		<!-- only need to add the computed function name -->
		<img class="mr-3" :src="thumbnailUrl" alt="" />
		<div class="media-body">
			<h5>{{ video.snippet.title }}</h5>
			<!-- {{ video.snippet.description }} -->
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
		methods: {
			// vue specific event -- as opposed to a native html event
			// specific to VideoListItem
			onVideoSelect() {
				// emit an event up to the parent
				// the event 'videoSelect'
				// and the prop 'video' passed in from the parent
				this.$emit("videoSelect", this.video);
			},
		},
	};
</script>

<style scoped>
	li {
		display: flex;
		background-color: #fff;
		transition: background-color 300ms ease;
		cursor: pointer;
	}
	li:hover {
		background-color: #eaeaea;
	}
</style>
