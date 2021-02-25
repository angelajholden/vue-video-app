<template>
	<!-- Can only have one root element -->
	<div class="container">
		<!-- <div>Hi There!</div> -->
		<!-- '@termChange' is the event the SearchBar emits -->
		<!-- 'onTermChange' is the method/function we create below -->
		<SearchBar @termChange="onTermChange"></SearchBar>
		<!-- v-bind:videos is the 'prop' we pass down to the VideoList -->
		<!-- The 'prop' is EQUAL to the data property (videos) that it wants to share with VideoList -->
		<VideoList :videos="videos"></VideoList>
		<!-- we can access the videos in our data property -->
		<!-- {{ videos.length }} -->
	</div>
</template>

<script>
	import axios from "axios";
	import SearchBar from "./components/SearchBar";
	import VideoList from "./components/VideoList";

	// Restricted to http://localhost:8080/
	const API_KEY = "AIzaSyDO868EEyszBFeheekYYLBN2wKcYdFepIA";

	export default {
		name: "App",
		components: {
			SearchBar,
			VideoList,
		},
		// same as 'data: function()'
		data() {
			// store list of videos on 'data' in the App
			// initialize videos as empty array
			return { videos: [] };
		},
		methods: {
			// this is our function
			// searchTerm is the string the user enters into the input
			onTermChange(searchTerm) {
				// console.log(searchTerm);
				axios
					.get("https://www.googleapis.com/youtube/v3/search", {
						params: {
							key: API_KEY,
							type: "video",
							part: "snippet",
							q: searchTerm,
						},
					})
					.then((response) => {
						// console.log(response);
						this.videos = response.data.items;
					});
			},
		},
	};
</script>
