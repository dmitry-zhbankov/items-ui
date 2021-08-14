import Constants from "./Constants";

const Repository = function () {
  return {
    getAllItems: function () {
      return fetch(Constants.serviceUrl,
        {method: 'Get'})
        .then(res => res.json());
    }
  }
}();

export default Repository;