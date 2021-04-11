const mongoose = require('mongoose');
const stockSchema  = mongoose.Schema({
      companyShortName:{
            type:String,
            default:null
      },
      ticker:{
            type:String,
            default:null
      },
      rank: {
            type:Number,
            default:null
      },
      surprisePercent:{
            type:Number,
            default:null
      },
})

module.exports = mongoose.model("Stock", stockSchema);