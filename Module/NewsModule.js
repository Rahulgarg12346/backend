const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
  title: {
    type: String,
    enum:['Mission', 'Vision', 'Focus']
  },
  content: {
    type: String,
    enum:['Mission', 'Vision', 'Focus']
  },
 

  
},
  { timestamps: true}
);

const Notice = mongoose.model('Notice', noticeSchema);
module.exports = Notice;