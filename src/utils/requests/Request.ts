export const request = () => {
    const PostRequest = async (
        url: string,
        method: string,
        body: string,
        headers = { 'Content-Type': 'application/json' }
    ) => {
        try {
            const res = await fetch(url, { method, body, headers });
            console.log(res);
            if (!res.ok) {
                throw new Error('error');
            }
            return true;
        } catch (error) {
            throw error;
        }
    };
    return { PostRequest };
};
