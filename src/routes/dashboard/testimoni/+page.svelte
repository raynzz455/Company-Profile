<script lang="ts">
  import Swal from "sweetalert2";
  import ActionButton from "$lib/components/TestimoniActions.svelte";
  import CommentForm from "$lib/components/CommentForm.svelte";

  interface Comment {
    id: number;
    nama_customer: string;
    komentar: string;
    keterangan_customer: string;
  }

  export let data: { comments: Comment[] };

  let showCreateForm = false;
  let editingComment: Comment | null = null;

  async function submitComment(event: SubmitEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const response = await fetch("/dashboard/testimoni", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      
      showCreateForm = false;
      Swal.fire({
        title: "Success!",
        text: "Comment successfully posted!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      const errorData = await response.json();
      Swal.fire({
        title: "Error!",
        text: errorData.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  }
  async function updateComment(event: CustomEvent) {
    const formData = event.detail as FormData;
    const response = await fetch("/dashboard/testimoni", {
      method: "POST",
      headers: { "x-http-method-override": "PUT" },
      body: formData,
    });

    if (response.ok) {
    
      editingComment = null;
      Swal.fire({
        title: "Updated!",
        text: "Comment successfully updated!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      const errorData = await response.json();
      Swal.fire({
        title: "Error!",
        text: errorData.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  }

  async function deleteComment(commentId: number) {
    const formData = new FormData();
    formData.append("id", commentId.toString());
    const response = await fetch("/dashboard/testimoni", {
      method: "POST",
      headers: { "x-http-method-override": "DELETE" },
      body: formData,
    });

    if (response.ok) {
      // const updatedData = await fetch("/dashboard/testimoni");
      // const result = await updatedData.json();
      // data.comments = result.comments;

      Swal.fire({
        title: "Deleted!",
        text: "Comment successfully deleted!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      const errorData = await response.json();
      Swal.fire({
        title: "Error!",
        text: errorData.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  }

  function handleUpdate(comment: Comment) {
    editingComment = { ...comment };
  }

  function handleDelete(commentId: number) {
    deleteComment(commentId);
  }

  function closeUpdateForm() {
    editingComment = null;
  }
</script>

<!-- <body class="h-screen flex justify-center"> -->
  <div
    class="content w-full max-w-[90vw] sm:max-w-[1000px] max-h-[90vh] font-ubuntu mx-auto"
  >
    <div
      class="w-full h-[60px] mx-auto rounded-tl-2xl rounded-tr-2xl flex justify-between items-center"
    >
      <h2 class="text-lg font-bold">Daftar Komentar</h2>
      <button
        class="bg-transparent text-black font-bold border-2 border-black py-2 px-3 rounded-full mt-2 hover:shadow-[4px_4px_0px_black] hover:-translate-x-1 hover:-translate-y-1 transition-all ease-in-out duration-300"
        on:click={() => {
          showCreateForm = !showCreateForm;
        }}
      >
        {showCreateForm ? "Cancel" : "Add Comment"}
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
            <ActionButton
              handleUpdate={() => handleUpdate(comment)}
              handleDelete={() => handleDelete(comment.id)}
            />
          </div>
        {/each}
      {:else}
        <p>No comments available.</p>
      {/if}
    </div>

    {#if showCreateForm}
      <div
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      >
        <div
          class="bg-white p-5 rounded-md shadow-lg w-11/12 sm:w-1/3 relative border-2 border-black"
        >
          <button
            class="absolute top-2 right-2 text-red-500 bg-transparent text-2xl"
            on:click={() => {
              showCreateForm = false;
            }}
          >
            &times;
          </button>
          <form on:submit|preventDefault={submitComment}>
            <div>
              <label
                class="block mb-2 text-lg font-semibold"
                for="nama_customer">Nama Customer:</label
              >
              <input
                type="text"
                name="nama_customer"
                class="border-2 border-black p-2 w-full mb-4 rounded focus:shadow-[5px_5px_0px_black] focus:-translate-y-1 focus:-translate-x-1 transition-all duration-300 ease-in-out"
                required
              />
            </div>
            <div>
              <label class="block mb-2 text-lg font-semibold" for="komentar"
                >Komentar:</label
              >
              <textarea
                name="komentar"
                class="border-2 border-black p-2 w-full mb-4 rounded focus:shadow-[5px_5px_0px_black] focus:-translate-y-1 focus:-translate-x-1 transition-all duration-300 ease-in-out"
                required
              ></textarea>
            </div>
            <div>
              <label
                class="block mb-2 text-lg font-semibold"
                for="keterangan_customer">Keterangan Customer:</label
              >
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

    {#if editingComment}
      <div
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      >
        <div
          class="bg-white p-5 rounded-md shadow-lg w-11/12 sm:w-1/3 relative border-2 border-black"
        >
          <button
            class="absolute top-2 right-2 text-red-500 bg-transparent text-2xl"
            on:click={closeUpdateForm}
          >
            &times;
          </button>
          <CommentForm
            nama_customer={editingComment.nama_customer}
            komentar={editingComment.komentar}
            keterangan_customer={editingComment.keterangan_customer}
            submitLabel="Update"
            id={editingComment.id}
            on:submit={updateComment}
          />
        </div>
      </div>
    {/if}
  </div>
<!-- </body> -->
