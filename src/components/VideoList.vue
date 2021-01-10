<template>
	<ul>
		<VideoListItem v-for="item in videos" :video="item" :key="item.etag"> </VideoListItem>
	</ul>
	<!-- v-for is the forEach loop -->
	<!-- v-bind:video defines the prop for VideoListIem (child); value must be the same as 'item' in the v-for -->
	<!-- v-bind:key is the unique identifier from the API -->
</template>

<script>
	import VideoListItem from "./VideoListItem";
	export default {
		name: "VideoList",
		components: {
			VideoListItem,
		},
		props: {
			videos: Array,
		},
	};
</script>

<style scoped></style>
