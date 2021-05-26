import ChatRoom from './Component/index.vue';

let chatRoom = {}

chatRoom.install = function (Vue) {
	Vue.component(ChatRoom.name, ChatRoom)
}

export default chatRoom
