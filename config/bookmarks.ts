export interface Bookmark {
    id: string
    title: string
    description: string
    imageUrl: string
    url: string
}

export interface BookmarkCategory {
    name: string
    bookmarks: Bookmark[]
}

export const categories: BookmarkCategory[] = [
    // #########################################################

    /* ###############################################################################################################################################################################################################*/
]
