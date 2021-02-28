# video-browser

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# Course Notes & Exercises

## https://github.com/vuejs/vue-cli

    npm install -g @vue/cli
    vue create project_name
    > default (babel, eslint)
    cd project_name
    npm run serve

-   Communicate from parent > child by passing 'props'
-   Communicate from child > parent by emitting 'events'

## Project Solutions

```js
const vm = new Vue({
	el: "#root",
	data() {
		return { count: 0 };
	},
	methods: {
		increment() {
			return this.count++;
		},
		decrement() {
			return this.count--;
		},
	},
	template: `
    <div>
        Current count: {{ count }}
        <div>
            <button @click="decrement">-</button>
            <button @click="increment">+</button>
        </div>
    </div>
`,
});
```

```js
const vm = new Vue({
	el: "#root",
	data() {
		return { menu: false };
	},
	methods: {
		openMenu() {
			return (this.menu = true);
		},
		closeMenu() {
			return (this.menu = false);
		},
	},
	template: `
    <div>
        <a v-if="!menu" @click="openMenu" class='dropdown-button btn' href='#'>Open</a>
        
        <ul v-else="menu" @click="closeMenu" class='dropdown-content'>
          <li><a href="#!">one</a></li>
          <li><a href="#!">two</a></li>
          <li class="divider"></li>
          <li><a href="#!">three</a></li>
        </ul>
    </div>
`,
});
```
