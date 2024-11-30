<script lang="ts">
    import { createEventDispatcher } from 'svelte';
  
    export let nama_customer = "";
    export let komentar = "";
    export let keterangan_customer = "";
    export let submitLabel = "Update";
    export let id: number | null = null;
  
    const dispatch = createEventDispatcher();
  
    function handleSubmit(event: SubmitEvent) {
      event.preventDefault();
  
      if (id === null) {
        console.error('ID is null');
        return;
      }
  
      const formData = new FormData(event.target as HTMLFormElement);
      formData.append('_method', 'PUT');
      formData.append('id', id.toString()); 
  
      dispatch('submit', formData);
    }
  </script>
  
  <form on:submit|preventDefault={handleSubmit}>
    <div>
      <label class="block mb-2 text-lg font-semibold" for="nama_customer">Nama Customer:</label>
      <input
        type="text"
        name="nama_customer"
        class="border-2 border-black p-2 w-full mb-4 rounded focus:shadow-[5px_5px_0px_black] focus:-translate-y-1 focus:-translate-x-1 transition-all duration-300 ease-in-out"
        required
        bind:value={nama_customer}
      />
    </div>
    <div>
      <label class="block mb-2 text-lg font-semibold" for="komentar">Komentar:</label>
      <textarea
        name="komentar"
        class="border-2 border-black p-2 w-full mb-4 rounded focus:shadow-[5px_5px_0px_black] focus:-translate-y-1 focus:-translate-x-1 transition-all duration-300 ease-in-out"
        required
        bind:value={komentar}
      ></textarea>
    </div>
    <div>
      <label class="block mb-2 text-lg font-semibold" for="keterangan_customer">Keterangan Customer:</label>
      <textarea
        name="keterangan_customer"
        class="border-2 border-black p-2 w-full mb-4 rounded focus:shadow-[5px_5px_0px_black] focus:-translate-y-1 focus:-translate-x-1 transition-all duration-300 ease-in-out"
        bind:value={keterangan_customer}
      ></textarea>
    </div>
    <button
      type="submit"
      class="bg-green-300 border-2 border-black text-black font-bold py-2 px-4 rounded"
    >
      {submitLabel}
    </button>
  </form>
  