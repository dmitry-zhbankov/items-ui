import Constants from "./Constants";
import Item from "./Item";

const Repository = {
        getAllItems: function () {
            return fetch(Constants.serviceUrl,
                {method: "GET"})
                .then(res => res.json());
        },
        removeItemById: function (id: number) {
            return fetch(`${Constants.serviceUrl}/${id}`,
                {method: "DELETE"});
        },
        editItem: function (item: Item) {
            return fetch(Constants.serviceUrl,
                {
                    method: "PATCH",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(item)
                });
        },
        createItem: function (item: Item) {
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
;

export default Repository;