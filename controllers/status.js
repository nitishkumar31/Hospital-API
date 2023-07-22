
const Report = require('../models/reports')

module.exports.filteredReports = async function(req,res)
{
    try {
        const reports = await Report.find({status:req.params.status})

        return res.status(200).json(
            {
                message: `List of Reports with status ${req.params.status}`,
                reports: reports
            })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                message: "Internal Server Error"
            }
        );
    }
    

}