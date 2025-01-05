<script>
    let selectedItem = "branding";

    const menuItems = [
        {key: "animation", label: "Animation"},
        {key: "branding", label: "Branding"},
        {key: "illustration", label: "Illustration"},
    ];
</script>

<nav class="bg-hover-gradient">
    <ul class="flex gap-10 justify-center p-10">
        {#each menuItems as item}
            <li class="relative">
                <a href="#" on:click={() => selectedItem = item.key}
                   class="{selectedItem === item.key ? 'text-white' : 'text-gray-500'}
                            relative block w-fit text-xl font-roboto rounded-full
                            after:block after:absolute after:h-1
                            after:w-1/2 after:bg-white after:rounded-full
                            after:left-1/2 after:transform after:-translate-x-1/2
                            after:top-10 after:scale-x-0 after:hover:scale-x-100
                            after:transition after:duration-300 after:origin-center">
                    {item.label}
                </a>
            </li>
        {/each}
    </ul>
</nav>
