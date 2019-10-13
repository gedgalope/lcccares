import api from './api'
export default {
  getPostId(id){
    return api().get("wp/v2/post/" + id)
  },
  getRoomContent(){
    return api().get("wp/v2/posts/96")
  },
  getStaffContent(){
    return api().get("wp/v2/posts/108")
  },
  getBedroomContent(){
    return api().get("wp/v2/posts/90")
  },
  getKitchenContent(){
    return api().get("wp/v2/posts/102")
  },
  getClinicContent(){
    return api().get("wp/v2/posts/77")
  },
  getComfortContent(){
    return api().get("wp/v2/posts/84")
  },
  getVMG(){
    return api().get("wp/v2/posts/9")
  },
  getCompanyInfo(){
    return api().get("wp/v2/posts/21")
  }
}