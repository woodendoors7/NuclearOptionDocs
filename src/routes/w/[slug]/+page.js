export const prerender = true;
export const csr = false;

export async function load({params, fetch}) {
    let slug = params.slug
    let article = await import(`../../../../static/pages/${slug}/index.md`)
    let indexMD = article.default
    let info = await article.metadata;
    return {indexMD, info, slug}
}
