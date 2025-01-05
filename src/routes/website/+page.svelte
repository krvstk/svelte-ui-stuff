<script>
    import {onMount, onDestroy} from 'svelte';
    import {browser} from '$app/environment';

    let isMenuVisible = false;

    function checkScreenSize() {
        isMenuVisible = window.innerWidth >= 650;
    }

    onMount(() => {
        checkScreenSize();
        if (browser) {
            window.addEventListener('resize', checkScreenSize);
        }
    });

    onDestroy(() => {
        if (browser) {
            window.removeEventListener('resize', checkScreenSize);
        }
    });
</script>

<main class="flex flex-col lg:flex-row w-screen h-screen">
    <section aria-label="Big background picture of the green dress"
             class="flex flex-col justify-start tracking-tight w-full h-full p-6 lg:p-10 bg-main-website-pic bg-center
             bg-cover md:basis-65%">
        <div class="flex items-start basis-35%">
            <div class="flex items-center gap-8">
                <div class="flex flex-col justify-between items-center w-3 h-3">
                    <div class="w-full h-0.5 bg-website-font-color-primary"></div>
                    <div class="w-full h-0.5 bg-website-font-color-primary"></div>
                    <div class="w-full h-0.5 bg-website-font-color-primary"></div>
                </div>
                {#if isMenuVisible}
                    <span class="text-website-font-color-primary">Menu</span>
                {/if}
            </div>
        </div>
        <div class="flex flex-col justify-between basis-65%">
            <div class="flex items-center justify-between pl-4">
            <span class="flex flex-col text-xs text-website-font-color-primary whitespace-pre-line">
                Spring
                Collection
                2025
            </span>
                <div class="flex flex-col md:flex-row items-center text-website-font-color-primary">
                    <span class="text-website-font-color-primary mr-2">Next</span>
                    <span class="relative top-0.5 h-16 w-1px md:h-1px md:w-16 bg-website-font-color-primary"></span>
                    <span class="text-website-font-color-primary ml-2">Previous</span>
                </div>
            </div>
            <div class="flex justify-between">
                <span class="flex flex-col font-garamond text-website-font-color-ternary text-catch-phrase-size
                leading-catch-phrase-lh md:text-catch-phrase-size-md md:leading-catch-phrase-lh-md
                lg:text-catch-phrase-size-lg lg:leading-catch-phrase-lh-lg whitespace-pre-line">
                Spring
                2025
            </span>
            </div>
            <div class="flex justify-center items-center sm:justify-between">
                {#if isMenuVisible}
                    <div class="flex gap-16">
                        <span class="text-website-font-color-ternary">FB</span>
                        <span class="text-website-font-color-ternary">PIN</span>
                        <span class="text-website-font-color-ternary">IG</span>
                    </div>
                {/if}
                <div class="flex gap-20">
                    <span class="w-1.5 h-1.5 bg-gray-50 opacity-50 rounded-full"></span>
                    <span class="w-1.5 h-1.5 bg-gray-50 opacity-50 rounded-full"></span>
                    <span class="w-2 h-2 bg-white rounded-full"></span>
                </div>
            </div>
        </div>
    </section>

    <section
            class="bg-amber-50 p-6 lg:p-10 flex-1 basis-35% grid grid-cols-12 grid-rows-6 lg:grid-cols-6
            lg:grid-rows-8 gap-6">
        {#if isMenuVisible}
            <div class="flex items-center lg:items-start col-start-11 col-end-13 row-start-1 row-end-2 lg:col-start-5
            lg:col-end-7 lg:row-start-1 lg:row-end-2">
                <div class="flex justify-end gap-10">
                    <span class="text-sm font-bold">ENG</span>
                    <span class="text-sm font-bold text-gray-300">FR</span>
                </div>
            </div>
        {/if}
        <div class="flex items-center lg:items-end justify-center col-start-1 col-end-13 row-start-1 row-end-2
        lg:col-start-6 lg:col-end-7 lg:row-start-2 lg:row-end-8 lg:vertical-lr">
            <span class="text-sm pr-2 lg:pr-0 lg:pb-6">Ref. 122333445</span>
            <span class="bg-black lg:right-3 relative h-1px w-16 lg:h-16 lg:w-1px"></span>
            <span class="text-sm pl-2 lg:pt-6">Viscose green dress</span>
        </div>
        <div aria-label="Small picture of second angle on the green dress"
             class="w-full h-full col-start-1 col-end-6 row-start-2 row-end-7 bg-no-repeat bg-center
             xl:bg-contain md:bg-cover lg:col-start-3 lg:col-end-6 lg:row-start-2
             lg:row-end-6 bg-detail-one-website-pic"></div>
        <div aria-label="Small picture of third angle on the green dress"
             class="w-full h-full col-start-6 col-end-11 row-start-2 row-end-7 bg-no-repeat bg-center xl:bg-contain
             md:bg-cover lg:col-start-1 lg:col-end-4 lg:row-start-6 lg:row-end-9 bg-detail-two-website-pic"></div>
        <div class="flex items-end col-start-10 col-end-13 row-start-5 row-end-7 lg:col-start-4 lg:col-end-7
        lg:row-start-8 lg:row-end-9">
            <button class="block h-full whitespace-pre-line text-center font-bold text-sm ml-6 md:ml-16
            lg:ml-6 w-full lg:h-75% border-black border-2 relative overflow-hidden group cursor-pointer">
                <span class="absolute w-64 h-0 bg-black transition-all duration-300 origin-center rotate-45
                -translate-x-20 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span class="relative text-black transition duration-300 group-hover:text-white ease">
                    SHOP NOW
                </span>
            </button>
        </div>
    </section>
</main>