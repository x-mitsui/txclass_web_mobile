const URL = {
  TX_CLASS: '//ke.qq.com/course/',
  IMG_BASE: '//tximg.codemongo.com/',
  API_BASE_URL:
    process.env.NODE_ENV === 'production'
      ? // ? 'http://localhost:3008'
        'http://m.codemongo.com'
      : 'http://localhost:3008',
}

export { URL }
