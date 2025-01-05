<main class="m-2">
    <h1 class="py-3 text-4xl font-semibold">Test task solution by Yevhen Blyzniuk</h1>

    <section class="p-4">
        <h2 class="text-2xl font-semibold leading-snug">
            Development comments
        </h2>
        <article>
            <ul class="list-disc ml-8">
                <li>This project includes four routes (except /) for each assignment</li>
                <li>By clicking on each solution from the list - new tab will be opened</li>
                <li>No magic numbers or classes used, instead custom extensions were added to tailwind config</li>
                <li>Some extra stuff like pictures optimization, dynamic titles, tailwind config structure improvement,
                    3rd party lib for svg etc. were not implemented due to purpose of the whole assignment
                </li>
                <li>Turborepo was used</li>
            </ul>
        </article>
    </section>

    <section class="p-4">
        <h2 class="text-2xl font-semibold leading-snug">Solutions comments</h2>
        <ol class="list-decimal ml-8">
            <li>The preview image was a bit confusing. It didn't show what animation to be reproduced. Another
                strange
                behaviour I noticed - the cursor is clearly on inactive item, but there is no hovering effect over it.
                So I decided to separate existing effect of active item into two - active and hover, which is simple,
                but elegant
                in my humble opinion.
            </li>
            <li>I wasn't sure about the size of gradient with Bing logo. So I set the size of it myself.</li>
            <li>Responsiveness was added. The social network links and language selection are hidden on small screen.
                Such constant UI tools should be placed inside hamburger menu (which is not implemented), because the
                screen's size is limited and only vital data should be shown to the user.
            </li>
            <li>Basic functionality according to preview image, with out deleting, edit, responsiveness etc.</li>
        </ol>
    </section>

    <section class="p-4">
        <h2 class="text-2xl font-semibold leading-snug">Solutions</h2>
        <ol class="list-decimal ml-8">
            <li><a href="/hover" target="_blank"
                   class="text-blue-800 underline font-bold hover:text-blue-400">Navigation hover</a></li>
            <li><a href="/gradient" target="_blank"
                   class="text-blue-800 underline font-bold hover:text-blue-400">Gradient background
                logo</a></li>
            <li><a href="/website" target="_blank"
                   class="text-blue-800 underline font-bold hover:text-blue-400">Website</a></li>
            <li><a href="/to-do" target="_blank"
                   class="text-blue-800 underline font-bold hover:text-blue-400">To do application</a>
            </li>
        </ol>
    </section>

    <section class="p-4">
        <h2 class="text-2xl font-semibold leading-snug">Code</h2>
        <a href="https://github.com/krvstk/svelte-ui-stuff" class="text-blue-800
        underline text-3xl font-bold hover:text-blue-400">
            GitHub</a>
    </section>
</main>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.white);
    }
</style>
