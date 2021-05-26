import Magnifier from './Component/test.vue';

let TestModel = {}

TestModel.install = function (Vue) {
	Vue.component(Magnifier.name, Magnifier);
}

export default TestModel

