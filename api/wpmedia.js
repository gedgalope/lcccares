import api from './api'
export default {
  getMediaById(id){
    return api().get("wp/v2/media/" + id);
  },
  getCArouselMedia() {
    return api().get("wp/v2/media?parent=62")
  },
  getRoomMedia() {
    return api().get("wp/v2/media?parent=96")
  },

  getStaffMedia() {
    return api().get("wp/v2/media?parent=108")
  },

  getBedroomMedia() {
    return api().get("wp/v2/media?parent=90")
  },

  getKitchenMedia() {
    return api().get("wp/v2/media?parent=102")
  },

  getClinicMedia() {
    return api().get("wp/v2/media?parent=77")
  },
  getComfortMedia() {
    return api().get("wp/v2/media?parent=84")
  },
  getParallax(){
    return api().get("wp/v2/media?parent=59")
  },
  getMediaParent(id){
    return api().get("wp/v2/media?parent=" + id)
  },
  getGallery(){
    return api().get("wp/v2/media?parent=112&per_page=30")
  },
  getLogo(){
    return api().get("wp/v2/media?parent=134")
  }
}