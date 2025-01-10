import type { PageServerLoad, Actions } from "./$types";

export const load: PageServerLoad = async ({ url, locals }) => {
  const supabase = locals.supabase;
  const folder = url.searchParams.get("folder") || "1";

  try {
    const { data: files, error: storageError } = await supabase.storage
      .from("porto")
      .list(`images/${folder}`);

    if (storageError) {
      console.error(`Error fetching files: ${storageError.message}`);
      return { PortofolioImages: [], folder, comments: [] };
    }

    const imageUrls = await Promise.all(
      files.map(async (file) => {
        const { data: publicUrlData } = await supabase.storage
          .from("porto")
          .getPublicUrl(`images/${folder}/${file.name}`);

        if (!publicUrlData) {
          console.error(`Error fetching public URL for file: ${file.name}`);
          return null;
        }

        return publicUrlData.publicUrl;
      })
    );

    const validImageUrls = imageUrls.filter((url) => url !== null);

    const { data: comments, error: commentsError } = await supabase
      .from("customer_comments")
      .select("id, komentar, nama_customer, keterangan_customer, likes")
      .order("id", { ascending: false });
    if (commentsError) {
      console.error("Error fetching comments:", commentsError.message);
    }

    return {
      PortofolioImages: validImageUrls,
      folder,
      comments: comments || [],
    };
  } catch (error) {
    console.error("Unexpected error:", error);
    return { PortofolioImages: [], folder, comments: [] };
  }
};
export const actions = {
  default: async ({ request, locals }) => {
    const supabase = locals.supabase;
    const formData = await request.formData();
    const id = formData.get('id');
    
    if (!id) {
      return {
        status: 400,
        body: { error: 'Invalid comment ID' },
      };
    }
    const { data: existingData, error: fetchError } = await supabase
      .from('customer_comments')
      .select('likes')
      .eq('id', id)
      .single();

    if (fetchError) {
      return {
        status: 500,
        body: { error: 'Failed to fetch current likes' },
      };
    }

    const currentLikes = existingData.likes || 0;
    const { error: updateError } = await supabase
      .from('customer_comments')
      .update({ likes: currentLikes + 1 })
      .eq('id', id);

    if (updateError) {
      return {
        status: 500,
        body: { error: 'Failed to add like' },
      };
    }

    return {
      status: 200,
      body: { success: true },
    };
  },
};
