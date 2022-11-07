<script lang="ts">
  import Todo from "./Todo.svelte";
  import { nanoid } from "nanoid"; //Used to generates a random unique id
  import { getTodos } from "./state";

  const todos = getTodos();

  const keyDown = (event) => {
    if (event.key === "Enter") {
      todos.push({ id: nanoid(), completed: false, description: inputValue });
      inputValue = "";
    }
  };

  let inputValue = "";
</script>

<input bind:value={inputValue} on:keydown={keyDown} />

{#each $todos.reverse() as todo (todo.id)}
  <Todo todo={todos.getById(todo.id)} />
{/each}

<style>
  /*Use normal css if you don't want to use Tailwindcss and/or DaisyUI */

  input {
    @apply input input-primary text-base-content input-lg w-full my-4 scale-95;
  }

  p {
    @apply p-4 m-3 bg-primary text-primary-content  rounded-xl;
  }
</style>
