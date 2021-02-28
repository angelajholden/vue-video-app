<template>
	<div v-if="video">
		<div class="embed-responsive embed-responsive-16by9">
			<iframe class="embed-responsive-item" :title="videoTitle" width="560" height="315" :src="videoUrl" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div>
		<div class="details">
			<h4>{{ video.snippet.title }}</h4>
			<p>{{ video.snippet.description }}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "VideoDetail",
		props: {
			video: Object,
		},
		computed: {
			videoUrl() {
				const { videoId } = this.video.id;
				return `https://www.youtube.com/embed/${videoId}`;
			},
			videoTitle() {
				return this.video.snippet.title;
			},
		},
	};
</script>

<style scoped>
	.details {
		margin-top: 10px;
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 4px;
	}
</style>
