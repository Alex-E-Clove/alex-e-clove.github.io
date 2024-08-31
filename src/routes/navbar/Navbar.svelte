<script>
	import Logo from './Logo.svelte';
	import ToggleButton from './ToggleButton.svelte';
</script>

<!-- ========== HEADER ========== -->
<header
	class="sticky inset-x-0 top-0 z-50 flex w-full flex-wrap text-sm md:flex-nowrap md:justify-start"
>
	<nav
		class="relative mx-2 mt-4 w-full max-w-2xl rounded-[2rem] border border-gray-200 bg-white py-2.5 md:mx-auto md:flex md:items-center md:justify-between md:px-4 md:py-0 dark:border-neutral-700 dark:bg-neutral-900"
	>
		<div class="flex items-center justify-between px-4 md:px-0">
			<Logo />
			<ToggleButton />
		</div>

		<div
			id="hs-navbar-header-floating"
			class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block"
			aria-labelledby="hs-navbar-header-floating-collapse"
		>
			<div
				class="mt-3 flex flex-col gap-2 py-2 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-3 md:py-0 md:ps-7"
			>
				<a
					class="border-s-2 border-gray-800 px-4 py-0.5 font-medium text-gray-800 focus:outline-none md:border-b-2 md:border-s-0 md:px-1 md:py-3 dark:border-neutral-200 dark:text-neutral-200"
					href="/"
					aria-current="page">Home</a
				>
				<a
					class="border-s-2 border-transparent px-4 py-0.5 text-gray-500 hover:text-gray-800 focus:outline-none md:border-b-2 md:border-s-0 md:px-1 md:py-3 dark:text-neutral-400 dark:hover:text-neutral-200"
					href="#Projects">Projects</a
				>
				<a
					class="border-s-2 border-transparent px-4 py-0.5 text-gray-500 hover:text-gray-800 focus:outline-none md:border-b-2 md:border-s-0 md:px-1 md:py-3 dark:text-neutral-400 dark:hover:text-neutral-200"
					href="#Work">Work</a
				>
				<a
					class="border-s-2 border-transparent px-4 py-0.5 text-gray-500 hover:text-gray-800 focus:outline-none md:border-b-2 md:border-s-0 md:px-1 md:py-3 dark:text-neutral-400 dark:hover:text-neutral-200"
					href="#Articles">Articles</a
				>
			</div>
		</div>
	</nav>
</header>
