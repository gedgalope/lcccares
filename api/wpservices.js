import api from './api'

export default {
  getAllServices(){
    return api().get('wp/v2/posts?search=Services');
  }
}