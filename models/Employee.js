const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  firstname:{
    type:String,
    required:true
  },
  lastname:{
    type:String,
    required:true
  },
  empCode:{
    type:String,
    required:true
  },
  salary:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true
  },
},{timeStamps:true});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;