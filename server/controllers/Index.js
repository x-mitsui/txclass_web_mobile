const navData = require('../configs/nav')
const linkData = require('../configs/links')

// const { qr } = require('../configs/qr')

const { getSliderData } = require('../services/Slider')
const { getRecomCourseData } = require('../services/RecomCourse')
const { getCollectionData } = require('../services/Collection')
// const { getStarTeacherData } = require('../services/Teacher')

class Index {
  async getHomeData(req, res, next) {
    // const sliderData = await getSliderData()
    // const sliderData = await getRecomCourseData()
    const [sliderData, recomCourseData, collectionData] = await Promise.all([
      getSliderData(),
      getRecomCourseData(),
      getCollectionData(),
    ])

    res.end(
      JSON.stringify({
        sliderData,
        navData,
        linkData,
        recomCourseData,
        collectionData,
      })
    )
  }

  getListData(req, res, next) {
    // ctx.body = {}

    next()
  }
}

module.exports = new Index()
