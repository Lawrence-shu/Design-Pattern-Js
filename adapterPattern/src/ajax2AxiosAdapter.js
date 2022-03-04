/* 适配器 */
function ajax2AxiosAdapter(ajaxOptions) {
  return axios({
      url: ajaxOptions.url,
      method: ajaxOptions.type,
      responseType: ajaxOptions.dataType,
      data: ajaxOptions.data
  })
    .then(ajaxOptions.success)
    .catch(ajaxOptions.error)
}
/* 经过适配器包装 */
$.ajax = function(options) {
  return ajax2AxiosAdapter(options)
}
$.ajax({
  url: '/demo-url',
  type: 'POST',
  dataType: 'json',
  data: {
      name: '张三',
      id: '2345'
  },
  success: function(data) {
      console.log('访问成功！')
  },
  error: function(err) {
      console.err('访问失败～')
  }
})