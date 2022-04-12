const navData = require('../configs/nav')
const linkData = require('../configs/links')

// const { qr } = require('../configs/qr')

const { getSliderData } = require('../services/Slider')
const { getRecomCourseData } = require('../services/RecomCourse')
const { getCollectionData } = require('../services/Collection')
const { getStarTeacherData } = require('../services/Teacher')
const { getCourseTabData } = require('../services/CourseTab')

class Index {
  async getHomeData(req, res, next) {
    const [sliderData, recomCourseData, collectionData, teacherData] =
      await Promise.all([
        getSliderData(),
        getRecomCourseData(),
        getCollectionData(),
        getStarTeacherData(),
      ])

    res.end(
      JSON.stringify({
        sliderData,
        navData,
        linkData,
        recomCourseData,
        collectionData,
        teacherData,
      })
    )
  }

  async getListData(req, res, next) {
    const courseTabData = await getCourseTabData()

    res.end(
      JSON.stringify({
        courseTabData,
      })
    )
  }
}

module.exports = new Index()
