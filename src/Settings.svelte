<script lang="ts">
    import { getCountdown } from "./state";

    const countDownTime = getCountdown()

    let timer = ""
    $: console.log(timer)

    const setCountdown = () => {
        console.log()
        if (timer != "") $countDownTime = new Date(timer).getTime()
    }

</script>
<div class="p-4 w-full justify-center">
    <label for="countdown">Set a countdown (date and time):</label>
    <input bind:value={timer} type="datetime-local" id="countdown" name="countdown">    
    <button class="mt-4 btn" on:click={setCountdown}> Set countdown</button>
</div>

<style>
    input[type="datetime-local"]{
        margin: auto;
    }
</style>
