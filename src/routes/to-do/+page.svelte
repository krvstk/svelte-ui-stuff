<script>
    let newTask = '';
    let idCounter = 2;
    let finishedTasks = [{id: 1, name: 'Finished Task'}];
    let unfinishedTasks = [{id: 2, name: 'Unfinished Task'}];
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const dayNames = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    let today = new Date();
    let currentMonth = monthNames[today.getMonth()];
    let currentDay = `${dayNames[today.getDay()]}, ` + currentMonth + ` ${today.getDate()}`;

    function addTask() {
        if (newTask.trim() !== '') {
            unfinishedTasks = [...unfinishedTasks, {name: newTask, id: ++idCounter}];
            newTask = '';
        }
    }

    function markAsFinished(todo) {
        unfinishedTasks = unfinishedTasks.filter(task => task.id !== todo.id);
        finishedTasks = [...finishedTasks, todo];
    }

</script>


<main class="flex justify-center items-center bg-yellow-50 w-screen h-screen">
    <section class="flex flex-col shadow-md w-to-do-width h-min-to-do-height bg-white">
        <div class="flex flex-col justify-center items-center h-40">
            <h1 class="text-gray-600 py-3 text-4xl font-bold">{currentMonth}</h1>
            <h3 class="text-gray-400 text-lg font-semibold leading-snug">{currentDay}</h3>
        </div>
        <span class="block h-1 w-full bg-gray-100"></span>
        <div class="flex flex-col justify-between flex-grow">
            <div class="flex flex-col m-4">
                {#each finishedTasks as finishedT}
                    <div class="flex justify-between">
                        <span class="p-2 line-through text-gray-400">{finishedT.name}</span>
                        <img src="happy-face.svg" alt="Happy face"/>
                    </div>
                {/each}
                {#each unfinishedTasks as unfinishedT}
                    <div title="Click to mark as finished"
                         class="flex justify-between cursor-pointer" on:click={() => markAsFinished(unfinishedT)}>
                        <span class="p-2">{unfinishedT.name}</span>
                        <img src="neutral-face.svg" alt="Neutral face"/>
                    </div>
                {/each}
            </div>
            <div class="flex flex-col">
                <input
                        type="text"
                        bind:value={newTask}
                        placeholder="Add Task"
                        class="p-2 m-4 border border-gray-300"
                />
                <button on:click={addTask} class="relative top-4 self-center py-1 px-10 bg-green-500 rounded-3xl text-gray-50 p-2 hover:bg-green-600 active:bg-green-700">
                    <span class="font-bold">Add</span>
                </button>
            </div>
        </div>
    </section>
</main>
