import api from './api'

export default{
  getAllTeamMem(){
    return api().get('wp/v2/posts?search=Team');
  }
}