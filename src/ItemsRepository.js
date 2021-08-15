import Constants from "./Constants";

const Repository = function () {
  return {
    getAllItems: function () {
      return fetch(Constants.serviceUrl,
        {method: 'Get'})
        .then(res => res.json());
    },
    removeItemById: function (id) {
      return fetch(`${Constants.serviceUrl}/${id}`,
        {method: 'Delete'});
    }
  }
}();

export default Repository;