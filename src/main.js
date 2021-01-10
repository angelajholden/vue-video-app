import Vue from "vue";
import App from "./App";

// These functions do THE SAME THING

// new Vue({
// 	el: "#app",
// 	render: function(createElement) {
// 		return createElement(App);
// 	},
// });

new Vue({
	render: (h) => h(App), // es6 arrow function
}).$mount("#app");
