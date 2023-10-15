export const prerender = true;
export const csr = false;


export async function load({params, fetch}) {
    let random = params.slug + Math.random()
    let slug = params.slug
    let indexMD = await fetch(`/pages/${slug}/index.md`)
    let info = await fetch(`/pages/${slug}/info.json`)
    info = await info.json()
    indexMD = await indexMD.text()


    return {random, indexMD, info, slug }
}