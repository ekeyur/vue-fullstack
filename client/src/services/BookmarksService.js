import Api from '@/services/Api'

export default {
  index (bookmark) {
    return Api().get('bookmarks', {
      params: bookmark
    })
  },
  post (params) {
    return Api().post('bookmarks', {
      params: params
    })
  },
  deleteBookmark (bookmarkId) {
    return Api().delete(`bookmarks/${bookmarkId}`)
  }
}
