const Employee = require('../models/employee')

const employeeCtrl = {}



employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find()
    res.json(employees)
}
employeeCtrl.createEmployee = async (req, res) => {
    const newEmployee = new Employee(req.body)
    console.log(newEmployee)
    await newEmployee.save()
    res.send({ message: 'Employed Created'})
}
employeeCtrl.getEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id)
    // Otra forma sería:  await Employee.findOne({_id: req.params.id})
    res.send(employee);
}
employeeCtrl.editEmployee = async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Employee Updated'})
}
employeeCtrl.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id)
    res.json({status: 'Employee Deleted'})
    //res.send('delete employee')
}



module.exports = employeeCtrl