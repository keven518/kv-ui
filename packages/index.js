import Btn from './button'
const install = (Vue) => {
  console.log('Vue: ', Vue)
  console.log('12344')
  Vue.component(Btn.name, Btn)
}
// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}


export default install
