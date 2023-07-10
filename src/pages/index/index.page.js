import { IndexContent } from "./index.content";

export const handleRequest = async function (_) {
    try {
        const content = IndexContent();
        const html = fustak.html(content);

        return new Response(html, {
            status: 200
        });
    } catch (error) {
        return new Response(error.message, {
            status: 500
        });
    }
};
