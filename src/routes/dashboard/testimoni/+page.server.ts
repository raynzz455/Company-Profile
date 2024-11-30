import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
  const supabase = locals.supabase;

  const { data, error } = await supabase
    .from('customer_comments')
    .select('id, nama_customer, komentar, keterangan_customer');

  if (error) {
    console.error('Error fetching comments:', error);
    return { comments: [] };
  }

  return { comments: data || [] };
};

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const supabase = locals.supabase;
    let formData: FormData;
    let method: string;
    let nama_customer: string | null;
    let komentar: string | null;
    let keterangan_customer: string;
    let id: string | null = null;

    const overrideMethod = request.headers.get('x-http-method-override');
    if (overrideMethod) {
      method = overrideMethod.toUpperCase();
    } else {
      method = request.method.toUpperCase();
    }

    if (request.headers.get('Content-Type') === 'application/json') {
      const requestData = await request.json();
      nama_customer = requestData.nama_customer;
      komentar = requestData.komentar;
      keterangan_customer = requestData.keterangan_customer || '';
      id = requestData.id;
    } else {
      formData = await request.formData();
      nama_customer = formData.get('nama_customer') as string | null;
      komentar = formData.get('komentar') as string | null;
      keterangan_customer = formData.get('keterangan_customer') as string || '';
      if (method === 'PUT') {
        id = formData.get('id') as string | null;
      }
    }

    if (!nama_customer || !komentar) {
      return {
        status: 400,
        body: { message: 'Nama customer dan komentar wajib diisi.' }
      };
    }

    try {
      if (method === 'PUT') {
        if (!id) {
          return {
            status: 400,
            body: { message: 'ID diperlukan untuk memperbarui komentar.' }
          };
        }

        const { data, error: updateError } = await supabase
          .from('customer_comments')
          .update({ nama_customer, komentar, keterangan_customer })
          .eq('id', id)
          .select();

        if (updateError) {
          console.error('Error updating comment:', updateError);
          return {
            status: 500,
            body: { message: 'Gagal memperbarui komentar.' }
          };
        }

        if (data.length === 0) {
          return {
            status: 404,
            body: { message: 'Komentar tidak ditemukan.' }
          };
        }

        return {
          status: 200,
          body: {
            message: 'Komentar berhasil diperbarui!',
            comment: data[0]
          }
        };
      }

      if (method === 'POST') {
        const { data, error: insertError } = await supabase
          .from('customer_comments')
          .insert([{ nama_customer, komentar, keterangan_customer }])
          .select();

        if (insertError) {
          console.error('Error inserting comment:', insertError);
          return {
            status: 500,
            body: { message: 'Gagal menambahkan komentar.' }
          };
        }

        return {
          status: 200,
          body: {
            message: 'Komentar berhasil ditambahkan!',
            comment: data[0]
          }
        };
      }

      return {
        status: 405,
        body: { message: 'Metode tidak didukung.' }
      };
    } catch (error) {
      console.error('Unexpected error:', error);
      return {
        status: 500,
        body: { message: 'Terjadi kesalahan pada server.' }
      };
    }
  }
};
