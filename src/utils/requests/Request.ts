export const request = () => {
  const PostMail = async (
    url: string,
    method: string,
    body: string | null,
    headers = { "Content-Type": "application/json" }
  ) => {
    try {
      const res = await fetch(url, { method, body, headers });
      // if (!res.ok) {
      //   throw new Error("error");
      // }
      return true;
    } catch (error) {
      throw error;
    }
  };
  const PostApplication = async (
    url: string,
    method: string,
    body: string | null,
    headers = { "Content-Type": "application/json" }
  ) => {
    try {
      const res = await fetch(url, { method, body, headers });
      if (!res.ok) {
        throw new Error("error");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  return { PostMail, PostApplication };
};
