<script lang="ts">
  import Swal from "sweetalert2";
  import ActionButton from '$lib/components/TestimoniActions.svelte';

  interface Comment {
    id: number;
    nama_customer: string;
    komentar: string;
    keterangan_customer: string;
  }

  export let data: { comments: Comment[] };

  let showFormCreate = false;
  let isUpdateFormVisible = false; 
  let currentComment: Comment | null = null;

  async function submitComment(event: SubmitEvent) {
    event.preventDefault(); // Prevent the default form submission behavior
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
        // POST request to the `create` action
        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
        });

        const result = await response.json();

        if (response.ok) {
            Swal.fire({
                title: "Success!",
                text: result.message || "Comment successfully added!",
                icon: "success",
                confirmButtonText: "OK",
            });

            form.reset(); // Reset the form after successful submission
            showFormCreate = false; // Close the form modal
        } else {
            // Show error alert
            Swal.fire({
                title: "Error!",
                text: result.message || "Failed to add comment.",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    } catch (error) {
        console.error("Submission error:", error);
        // Show general error alert
        Swal.fire({
            title: "Error!",
            text: "An unexpected error occurred. Please try again.",
            icon: "error",
            confirmButtonText: "OK",
        });
    }
}


  function handleUpdate(updatedComment: Comment) {
    const index = data.comments.findIndex(c => c.id === updatedComment.id);
    if (index !== -1) {
      data.comments[index] = updatedComment;
    }
  }

  function handleDelete(commentId: number) {
    data.comments = data.comments.filter(comment => comment.id !== commentId);
  }
</script>

<body class="h-screen flex justify-center">
  <div class="content w-full max-w-[90vw] sm:max-w-[1000px] max-h-[90vh] font-ubuntu">
    <div class="w-full h-[60px] mx-auto rounded-tl-2xl rounded-tr-2xl flex justify-between items-center">
      <h2 class="text-lg font-bold">Daftar Komentar</h2>
      <button
        class="bg-transparent text-black font-bold border-2 border-black py-2 px-3 rounded-full mt-2 hover:shadow-[4px_4px_0px_black] hover:-translate-x-1 hover:-translate-y-1 transition-all ease-in-out duration-300"
        on:click={() => { showFormCreate = !showFormCreate; }}
      >
        {showFormCreate ? "Cancel" : "Add Comment"}
      </button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
      {#if data.comments.length > 0}
        {#each data.comments as comment}
          <div
            class="border-2 border-black rounded-lg w-full sm:w-[300px] h-auto mx-auto p-4 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_10px_8px_black] relative"
          >
            <div class="flex flex-col justify-between h-full">
              <p class="text-center text-lg font-medium mb-2">
                "{comment.komentar}."
              </p>
              <div>
                <p class="text-center text-md font-medium">
                  {comment.nama_customer}
                </p>
                <p class="text-center text-sm text-gray-600">
                  {comment.keterangan_customer}
                </p>
              </div>
            </div>
          </div>
        {/each}
      {:else}
        <p>No comments available.</p>
      {/if}
    </div>

    {#if showFormCreate}
      <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div class="bg-white p-5 rounded-md shadow-lg w-11/12 sm:w-1/3 relative border-2 border-black">
          <button
            class="absolute top-2 right-2 text-red-500 bg-transparent text-2xl"
            on:click={() => (showFormCreate = false)}
          >
            &times;
          </button>
          <form method="POST" action="?/create" on:submit={submitComment}>
            <div>
              <label class="block mb-2 text-lg font-semibold" for="nama_customer">Nama Customer:</label>
              <input
                type="text"
                name="nama_customer"
                class="border-2 border-black p-2 w-full mb-4 rounded focus:shadow-[5px_5px_0px_black] focus:-translate-y-1 focus:-translate-x-1 transition-all duration-300 ease-in-out"
                required
              />
            </div>
            <div>
              <label class="block mb-2 text-lg font-semibold" for="komentar">Komentar:</label>
              <textarea
                name="komentar"
                class="border-2 border-black p-2 w-full mb-4 rounded focus:shadow-[5px_5px_0px_black] focus:-translate-y-1 focus:-translate-x-1 transition-all duration-300 ease-in-out"
                required
              ></textarea>
            </div>
            <div>
              <label class="block mb-2 text-lg font-semibold" for="keterangan_customer">Keterangan Customer:</label>
              <textarea
                name="keterangan_customer"
                class="border-2 border-black p-2 w-full mb-4 rounded focus:shadow-[5px_5px_0px_black] focus:-translate-y-1 focus:-translate-x-1 transition-all duration-300 ease-in-out"
              ></textarea>
            </div>
            <button
              type="submit"
              class="bg-green-300 border-2 border-black text-black font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
          
        </div>
      </div>
    {/if}
  </div>
</body>
