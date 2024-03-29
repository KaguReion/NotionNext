const CONFIG = {
  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2024-03-29', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '你好，欢迎来到 零音的星海杂波。', url: 'https://blog.kagureion.top' },
    { title: '点击这里在 GitHub 上来捕捉零音~', url: 'https://github.com/KaguReion' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '有朋自远方来',
  HEO_HERO_TITLE_2: '又赴远方',
  HEO_HERO_TITLE_3: 'Kagurazaka Reion',
  HEO_HERO_TITLE_4: 'Her Radiant Transcendence',
  HEO_HERO_TITLE_5: '由 Notion Next 驱动',
  HEO_HERO_TITLE_LINK: 'https:/blog.kagureion.top',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '个人随笔', url: '/tag/个人随笔' },
  HEO_HERO_CATEGORY_2: { title: '技术教程', url: '/tag/技术教程' },
  HEO_HERO_CATEGORY_3: { title: '数学物理', url: '/tag/数学物理' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: true, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  HERO_RECOMMEND_COVER: 'https://tuapi.eees.cc/api.php?category=dongman&type=302', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '你好！这里是',
    '🤔 一般通过高中生',
    '🎮 极度飞舞音游人',
    '💻 业余科技爱好者',
    '🍥 耀光星辰跨越者'
  ],
  HEO_INFO_CARD_URL: 'https://github.com/KaguReion', // 个人资料底部按钮链接

  // 用户技能图标
  HEO_GROUP_ICONS: [],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '在 X 上关注',
  HEO_SOCIAL_CARD_TITLE_2: '欢迎关注零音的 X 账号',
  HEO_SOCIAL_CARD_TITLE_3: '即将进入异世界——',
  HEO_SOCIAL_CARD_URL: 'https://twitter.com/KaguReion',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: true, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: true, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
