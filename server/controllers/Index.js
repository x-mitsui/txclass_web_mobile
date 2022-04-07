// const navData = require('../configs/nav')
// const linkData = require('../configs/links')

// const { qr } = require('../configs/qr')

// const { getSliderData } = require('../services/Slider')
// const { getRecomCourseData } = require('../services/RecomCourse')
// const { getCollectionData } = require('../services/Collection')
// const { getStarTeacherData } = require('../services/Teacher')

class Index {
  getHomeData(req, res, next) {
    // ctx.body = {}
    console.log('11111:', 11111)
    next()
  }

  getListData(req, res, next) {
    // ctx.body = {}
    console.log('22222:', 22222)
    next()
  }
}

module.exports = new Index()
