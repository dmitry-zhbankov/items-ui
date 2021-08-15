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
    },
    editItem: function (item) {
      return fetch(Constants.serviceUrl,
        {method: 'Patch',
        body:JSON.stringify(item)});
    },
    createItem: function (item) {
      return fetch(Constants.serviceUrl,
        {method: 'Post',
        body:JSON.stringify(item)});
    },
  }
}();

export default Repository;