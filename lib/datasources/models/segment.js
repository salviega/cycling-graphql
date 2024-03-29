const moogose = require('mongoose')

const schema = new moogose.Schema({
  segmentName: {
    type: String,
    required: true
  },
  cyclists: [
    {
      ref: 'Cyclist',
      type: moogose.Schema.Types.ObjectId
    }
  ]
})

module.exports = moogose.model('Segment', schema)
