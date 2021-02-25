<template>
	<ul class="list-group">
		<!-- Video List -->
		<!-- anytime we want to access any data, property or computed function from within a template, we call it exactly what it is and write out it's name -->
		<!-- {{
			videos.length
		}} -->
		<VideoListItem v-for="video in videos" :video="video" :key="video.etag"> </VideoListItem>
	</ul>
	<!-- v-for is the forEach loop -->
	<!-- v-bind:video defines the prop for VideoListIem (child) -->
	<!-- v-bind:video value must be the same as 'video' (singular item) in the v-for -->
	<!-- v-bind:key is the unique identifier from the API -->
</template>

<script>
	import VideoListItem from "./VideoListItem";
	export default {
		name: "VideoList",
		components: {
			// the component is the vue part we imported
			VideoListItem,
		},
		props: {
			// this is what we defined on VideoList in App.vue
			// we expect this to be an array of objects, a form of validation
			// could also just do ['videos'] <-- this lists out the videos
			videos: Array,
		},
	};
</script>

<style scoped></style>
