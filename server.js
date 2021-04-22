// packages for production under dependencies 
const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');
const express =  require('express');
const chalk =  require('chalk');

// constructor classes
const employee =  require('./constr/employee');
const role = require('./constr/role');
const departement = require('./constr/department');

//* Arrays
let managerArray = [];
let roleArray = [];
let deptArray = [];
let employeeIDArray = [];
let employeeFirstNameArray = [];
let managerAndIDArray = [];
let roleAndIDArray = [];


//*Intro Inquirer Question
const introQ = [
	{
		type: 'rawlist',
		message: 'What Would You Like To Do?',
		name: 'queryInto',
		choices: [
			'View All Employees',
			'View All Employees By Department',
			'View All Employees By Manager',
			'Add Employee',
			'Remove Employee',
			'Update Employee Role',
			'Update Employee Manager',
			'View All Roles',
			'Add Role',
			'Remove Role',
			'View All Departments',
			'Add Department',
			'Remove Department',
			'View Total Utalized Budget Of A Department',
			'Exit Application',
		],
	},
];

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3360,
    user: 'root',
    password: 'password',
    database: 'e_track',
});