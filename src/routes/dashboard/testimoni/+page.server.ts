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
    // Action for creating a new comment
    create: async ({ request, locals }) => {
        const supabase = locals.supabase;
        const formData = await request.formData();
        const nama_customer = formData.get('nama_customer') as string;
        const komentar = formData.get('komentar') as string;
        const keterangan_customer = formData.get('keterangan_customer') as string || '';

        if (!nama_customer || !komentar) {
            return { status: 400, body: { message: 'Name and comment are required' } };
        }

        const { data, error: insertError } = await supabase
            .from('customer_comments')
            .insert([{ nama_customer, komentar, keterangan_customer }]);

        if (insertError) {
            console.error('Error inserting comment:', insertError);
            return { status: 500, body: { message: 'Failed to add comment' } };
        }

        return { 
            status: 200, 
            body: { 
                message: 'Comment added successfully!', 
                comment: data?.[0] || null 
            } 
        };
    },

    // Action for updating a comment
    update: async ({ request, locals }) => {
        const supabase = locals.supabase;
        const formData = await request.formData();
        const id = formData.get('id') as string;
        const komentar = formData.get('komentar') as string;

        if (!id || !komentar) {
            return { status: 400, body: { message: 'ID and new comment are required' } };
        }

        const { data, error: updateError } = await supabase
            .from('customer_comments')
            .update({ komentar })
            .eq('id', id);

        if (updateError) {
            console.error('Error updating comment:', updateError);
            return { status: 500, body: { message: 'Failed to update comment' } };
        }

        return { 
            status: 200, 
            body: { 
                message: 'Comment updated successfully!', 
                comment: data?.[0] || null 
            } 
        };
    },

    // Action for deleting a comment
    delete: async ({ request, locals }) => {
        const supabase = locals.supabase;
        const formData = await request.formData();
        const id = formData.get('id') as string;

        if (!id) {
            return { status: 400, body: { message: 'ID is required' } };
        }

        const { error: deleteError } = await supabase
            .from('customer_comments')
            .delete()
            .eq('id', id);

        if (deleteError) {
            console.error('Error deleting comment:', deleteError);
            return { status: 500, body: { message: 'Failed to delete comment' } };
        }

        return { 
            status: 200, 
            body: { message: 'Comment deleted successfully!' } 
        };
    }
};
