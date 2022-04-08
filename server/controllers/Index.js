// const navData = require('../configs/nav')
// const linkData = require('../configs/links')

// const { qr } = require('../configs/qr')

const { getSliderData } = require('../services/Slider')
// const { getRecomCourseData } = require('../services/RecomCourse')
// const { getCollectionData } = require('../services/Collection')
// const { getStarTeacherData } = require('../services/Teacher')

class Index {
  async getHomeData(req, res, next) {
    console.log('arguments', arguments)
    const sliderData = await getSliderData()
    // console.log('11111:', sliderData)
    res.end(JSON.stringify(sliderData))
  }

  getListData(req, res, next) {
    // ctx.body = {}

    next()
  }
}

module.exports = new Index()
