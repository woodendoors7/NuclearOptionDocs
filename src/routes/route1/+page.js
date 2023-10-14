export const prerender = true;



export async function load() {
    let random = Math.random();
    return {random}
}