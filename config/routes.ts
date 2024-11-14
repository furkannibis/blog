export const Routes = {
    Home: '',
    Articles: '/articles',
    Blogs: '/blogs',
    Contact: '/contacts',
    Projects: '/projects',
    Bookmarks: '/bookmarks',
    About: '/about',
    Gallery: '/gallery',
    Categories: (category: string) => `/projects/${category}`,
    Project: (slug: string) => `/projects/${slug}`,
    LocalBlogPost: (slug: string) => `/blogs/${slug}`,
    SubstackBlogPost: (slug: string) => `/posts/${slug}`
}