
const axios = require('axios');
const _ = require('lodash')


class CorezoidSdk {
  constructor(host) {
    if (!_.isString(host)) {
       throw new Error('invalid host');
    }

    this.host = host;
  }

  async getScheme(obj_id, obj_type) {
	const { data } = await axios.post(this.host, {"ops":[{"type":"get", "obj":"obj_scheme", obj_id, obj_type}]})
	return data      
  }
}



module.exports = CorezoidSdk;
