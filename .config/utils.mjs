import * as fs from "fs"
import * as path from "path"

export function getPages(dir) {
  const pages = []
  const initDir = fs.readdirSync(dir, {
    encoding: "utf-8",
    withFileTypes: true
  })
  for (const item of initDir) {
    if (item.isFile()) {
      const win32Path = path.join(dir, item.name)
      const UnixPath = win32Path.replace(/\\/g, "/")
      pages.push(UnixPath)
    } else {
      const innerPages = getPages(path.join(dir, item.name))
      pages.push(...innerPages)
    }
  }
  return pages
}
/**
* @param {Array<string>} pages -
*/

export function createSiteMap(pages) {
  let Tag = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"><url><loc>https://orbiton.js.org/</loc><changefreq>weekly</changefreq><priority>0.5</priority></url>`

  for (const page of pages) {
    let pathName
    const lastWord = page.slice(page.length - 5)
    if (lastWord === "index") {
      pathName = page.slice(0, page.length - 5)
    } else {
      pathName = page
    }
    const url = `<url><loc>https://orbiton.js.org/${pathName}</loc><changefreq>weekly</changefreq><priority>0.5</priority></url>`
    Tag = Tag + url
  }
  Tag = Tag + "</urlset >"
  return Tag
}
