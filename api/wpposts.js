import api from './api'
export default {
  getPostId(id){
    return api().get("wp/v2/post/" + id)
  },
  getRoomContent(){
    return api().get("wp/v2/posts/106")
  },
  getStaffContent(){
    return api().get("wp/v2/posts/104")
  },
  getBedroomContent(){
    return api().get("wp/v2/posts/102")
  },
  getKitchenContent(){
    return api().get("wp/v2/posts/98")
  },
  getClinicContent(){
    return api().get("wp/v2/posts/108")
  },
  getComfortContent(){
    return api().get("wp/v2/posts/100")
  }
}