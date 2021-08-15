import Constants from "./Constants";

const Repository = function () {
  return {
    getAllItems: function () {
      return fetch(Constants.serviceUrl,
        {method: "GET"})
        .then(res => res.json());
    },
    removeItemById: function (id) {
      return fetch(`${Constants.serviceUrl}/${id}`,
        {method: "DELETE"});
    },
    editItem: function (item) {
      return fetch(Constants.serviceUrl,
        {
          method: "PATCH",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(item)
        });
    },
    createItem: function (item) {
      return fetch(Constants.serviceUrl,
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(item)
        });
    },
  }
}();

export default Repository;