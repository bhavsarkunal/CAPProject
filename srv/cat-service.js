const { func } = require("@sap/cds/lib/ql/cds-ql")
const { response } = require("express")

module.exports = function() {
    this.after("READ","IndianTeam", async (req, res) => {
        for (const item of req) {
            // console.log(item)
            item.NAME = "UNKNOWN"
        }
       return req
    })

}
