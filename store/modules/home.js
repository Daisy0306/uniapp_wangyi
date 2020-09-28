import request from "../../utils/request.js";
import indexData from "../../utils/datas/index.json";
import {CHANGEINDEXDATA} from "../mutation-types.js";

const state = {
	indexData:{}
}

const mutations = {
	[CHANGEINDEXDATA](state,indexData){
		state.indexData = indexData;
	}
}

const actions = {
	async getIndexData({commit}){
		let result = await request("/getIndexData");
		// 引入json数据，如果发请求拿不到数据，就可以用备用的
		if(!result){
			result = indexData;
		}
		//console.log(result); // 测试是否拿到数据
		commit(CHANGEINDEXDATA,result)
	}
}

const getters = {
	
}

export default{
	state,
	mutations,
	actions,
	getters
}