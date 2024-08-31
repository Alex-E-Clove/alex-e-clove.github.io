<script>
	import Navbar from './navbar/Navbar.svelte';
	import { afterNavigate } from '$app/navigation';

	import '../app.css';

	afterNavigate(() => {
		window.HSStaticMethods.autoInit();
	});
</script>

<Navbar />
<slot />

<style>
	:global(html) {
		@apply dark:bg-neutral-900;
	}
</style>
