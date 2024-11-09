import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, locals }) => {
  const supabase = locals.supabase;
  const folder = url.searchParams.get('folder') || '1';

  try {
    const { data: files, error: storageError } = await supabase.storage
      .from('porto')
      .list(`images/${folder}`);

    if (storageError) {
      console.error(`Error fetching files: ${storageError.message}`);
      return { PortofolioImages: [], folder, comments: [] };
    }

    const imageUrls = await Promise.all(
      files.map(async (file) => {
        const { data: publicUrlData } = await supabase.storage
          .from('porto')
          .getPublicUrl(`images/${folder}/${file.name}`);

        if (!publicUrlData) {
          console.error(`Error fetching public URL for file: ${file.name}`);
          return null;
        }

        return publicUrlData.publicUrl;
      })
    );

    const validImageUrls = imageUrls.filter(url => url !== null);

    const { data: comments, error: commentsError } = await supabase
      .from('customer_comments')
      .select('komentar, nama_customer, keterangan_customer')
      .order('id', { ascending: false });
    if (commentsError) {
      console.error('Error fetching comments:', commentsError.message);
    }

    return {
      PortofolioImages: validImageUrls,
      folder,
      comments: comments || [],
    };
  } catch (error) {
    console.error('Unexpected error:', error);
    return { PortofolioImages: [], folder, comments: [] };
  }
};
