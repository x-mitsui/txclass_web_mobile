const router = require('koa-router')()
const IndexController = require('../controllers/Index')

router.get('/get_home_data', IndexController.getHomeData)
router.get('/get_list_Data', IndexController.getListData)

module.exports = router
