const CollectionModel = require('../db/models/collection')
const { getCollectionCourseData } = require('./Course')
class CollectionService {
  async getCollectionData() {
    let result = await CollectionModel.findAll({
      where: { status: 1 },
      attributes: {
        exclude: ['cid', 'posterUrl', 'createdAt', 'updatedAt'],
      },
      raw: true,
    })
    const promiseArr = result.map(async (item, index) => {
      const ids = item.courseIdList.split(',').map((item) => Number(item))
      const collectionsData = await getCollectionCourseData(ids)
      // console.log('collectionsData:', collectionsData)
      item.courseDataList = collectionsData
      return item
    })
    // async返回的为包裹结果的Promise对象
    result = await Promise.all(promiseArr)

    return result
  }
}
// let p = function () {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("1")
//     })
//   })
// }
// async function foo(){
//   return await p();
// }
// foo().then(res=>console.log(res))

module.exports = new CollectionService()
