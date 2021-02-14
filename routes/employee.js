const router = require('express').Router();
const Employee = require('../models/Employee');

router.get('/',async(req, res)=>{
    const employees =await Employee.find();
    console.log(employees)
    res.render('home',{employees})
})

router.post('/',(req, res)=>{
    const {firstname, lastname, empCode, salary, address} = req.body;
    const employee = new Employee({firstname, lastname, salary, empCode, address});
    employee.save();
    res.redirect('/');
})

router.get('/edit/:empId',async(req, res)=>{
    const employee =await Employee.findById(req.params.empId);
    if(!employee) res.status(404).send('Employee not found');
    res.render('editpage',{employee});
})

router.post('/edit/:empId',async(req, res)=>{
     const {firstname, lastname, empCode, salary, address} = req.body;
    const employee =await Employee.findById(req.params.empId);
    await employee.update({firstname, lastname, salary, empCode, address});
    console.log(employee)
    res.redirect('/');
})


router.get('/delete/:empId',async(req, res)=>{
    const employee =await Employee.findById(req.params.empId);
    await employee.remove();
    res.redirect('/');
})

module.exports = router;