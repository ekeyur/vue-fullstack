const { Bookmark } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const {songId, userId} = req.query
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      res.send(bookmark)
    } catch (err) {
      res.status(400).send({
        error: 'An error has occured while trying to fetch the bookmark'
      })
    }
  },
  async post (req, res) {
    try {
      const songId = req.body.songId
      const userId = req.user

      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      if (bookmark) {
        return res.status(400).send({
          error: 'you already have this set as a bookmark'
        })
      }
      const newBookmark = await Bookmark.create({
        SongId: songId,
        UserId: userId
      })
      res.send(newBookmark)
    } catch (err) {
      res.status(400).send({
        error: 'An error has occured while trying to create the bookmark'
      })
    }
  },
  async deleteBookmark (req, res) {
    try {
      const {bookmarkId} = req.params
      const bookmark = await Bookmark.findById(bookmarkId)
      await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      res.status(400).send({
        error: 'An error has occured while trying to delte the bookmark'
      })
    }
  }
}
