const resData = require("../data");

class Result {
    constructor(data) {
        this.id = data.id;
        this.category = data.category;
        this.title = data.title;
        this.link = data.link;
        this.description = data.description;
    }

    static get all() {
        const results = resData.map((result) => new Result(result));
        return results;
    }

    static getByCategory(searchQuery) {
        const filteredData = resData.filter((result) => result.category === searchQuery);
        return filteredData;
    }
}

module.exports = Result;
