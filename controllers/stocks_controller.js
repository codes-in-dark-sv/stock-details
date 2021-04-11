const Stocks = require("../models/stock_model");


module.exports.get_all_stocks = async (req, res) => {
   
    await Stocks.find({} , (err, result)=>{
        if(err)
            return res.status(404).json(err)
        else
           return  res.status(200).json({msg:"success", result:result})
    })
}


module.exports.add_stock = async(req, res) => {
    const {
      companyShortName,
      ticker,
      rank,
      surprisePercent,
    } = req.body;
    const addStocks = new Stocks({
      companyShortName:companyShortName,
      ticker:ticker,
      rank:rank,
      surprisePercent:surprisePercent,
    })
    await addStocks.save((err, result) => {
        if(err){
          return res.status(400).json({
          error: err
          })
        } 
        else{
          return res.status(200).json({msg:"success"})
        }})
}



module.exports.delete_stock = async(req, res) => {
    await Stocks.deleteOne({rank:req.params.id},(err, result)=>{
        if(err)
            res.status(404).json({msg:"error"})
        else{
            res.status(200).json({msg:"success"})
          }
    })
}

