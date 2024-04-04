// // const { use } = require('../Router/SchoolRouter');
// const {v4:uuidv4} = require('uuid');
// const {Teacher,Book,Student} = require('../Module/SchoolModule');
// // const library = require('../Module/SchoolModule');
// // const Student = require('../Module/SchoolModule');


// //====================== Teacher code ============================================//


// exports.signup = async(req,res)=>{
//     try{
//         const{Name,
//             number,
//             Address,
//             exprence,
//             Emailid,
//             Password,
//             State,
//             classes,
//             Role,
//             city,
//             pincode,
//             token=uuidv4() }= req.body;
//             // const Token = uuidv4();
//         const model = await Teacher.create({Name,   
//             number,
//             Address,
//             exprence,
//             Emailid,
//             Password,
//             State,
//             classes,
//             Role,
//             city,
//             pincode,
//             token});
//         res.status(201).json(model);
//     }catch(error){  
//         res.status(500).json({error: error.message})
//     }
// }

// exports.login = async(req,res)=>{
//     try{
//         const{email, password} = req.body;
//         const model = await Teacher.findOne({email, password});
//         res.status(201).json(model);
//     }catch(error){
//         res.status(500).json({error: error.message})
//     }
// }

// exports.createItem = async(req,res)=>{
//     try{
//         const model = await Teacher.create(req.body);
//         res.status(201).json(model);
//     }catch(error){
//         res.status(500).json({error: error.message});
//     }
// }

// exports.getAllItemById = async(req,res)=>{
//     try{
//         const model = await Teacher.findById(req.params.id);
//         res.status(201).json(model);
//     }catch(error){
//         res.status(500).json({error: error.message});
//     }
// }

// exports.deleterItem = async(req,res)=>{
//     try{
//         const model = await Teacher.findByIdAndDelete(req.params.id);
//         res.status(201).send();
//     }catch(error){
//         res.status(500).json({error: error.message});
//     }
// }

// exports.updateItem = async(req,res)=>{
//     try{
//         const model = await Teacher.findByIdAndUpdate(req.params.id, req.body,{new:true});
//         res.status(201).json(model);
//     }catch(error){
//         res.status(500).json({error: error.message});
//     }
// }




// //======================================= Student code =============================================//


// exports.register = async(req,res)=>{
//     try{
//         const{StudentName,
//             FatherName,
//             MotherName,
//             StudentNumber,
//             StudentID,
//             Emailid,
//             ClassName,
//             BoardName,
//             Address ,
//             State,
//             FatherNumber,
//             MotherNumber,
//             Password,
//             CityName,
//             borrowedBooks,
//             token=uuidv4()}= req.body;
//         const model = await Student.create({StudentName,
//             FatherName,
//             MotherName,
//             StudentNumber,
//             StudentID,
//             Emailid,
//             ClassName,
//             BoardName,
//             Address ,
//             State,
//             FatherNumber,
//             MotherNumber,
//             Password,
//             CityName,
//             borrowedBooks,
//             token});
//         res.status(201).json(model);
//     }catch(error){  
//         res.status(500).json({error: error.message})
//     }
// }

// exports.login = async(req,res)=>{
//     try{
//         const{email, password} = req.body;
//         const model = await Student.findOne({email, password});
//         if(!item){
//             return res.status(401).json({error:"invalid email password"})
//         }
//         res.status(201).json(model);
//     }catch(error){
//         res.status(500).json({error: error.message})
//     }
// }

// exports.createItem = async(req,res)=>{
//     try{
//         const model = await Student.create(req.body);
//         res.status(201).json(model);
//     }catch(error){
//         res.status(500).json({error: error.message});
//     }
// }

// exports.getAllItemById = async(req,res)=>{
//     try{
//         const model = await Student.findById(req.params.id);
//         res.status(201).json(model);
//     }catch(error){
//         res.status(500).json({error: error.message});
//     }
// }

// exports.deleterItem = async(req,res)=>{
//     try{
//         const model = await Student.findByIdAndDelete(req.params.id);
//         res.status(201).send();
//     }catch(error){
//         res.status(500).json({error: error.message});
//     }
// }

// exports.updateItem = async(req,res)=>{
//     try{
//         const model = await Student.findByIdAndUpdate(req.params.id, req.body,{new:true});
//         res.status(201).json(model);
//     }catch(error){
//         res.status(500).json({error: error.message});
//     }
// }

// // ---------------book------------------
// exports.createItem = async(req,res)=>{
//         try{
//             const model = await Book.create(req.body);
//             res.status(201).json(model);
//         }catch(error){
//             res.status(500).json({error: error.message});
//         }
//     }
    
//     exports.getAllItemById = async(req,res)=>{
//         try{
//             const model = await Book.findById(req.params.id);
//             res.status(201).json(model);
//         }catch(error){
//             res.status(500).json({error: error.message});
//         }
//     }
    
//     exports.deleterItem = async(req,res)=>{
//         try{
//             const model = await Book.findByIdAndDelete(req.params.id);
//             res.status(201).send();
//         }catch(error){
//             res.status(500).json({error: error.message});
//         }
//     }
    
//     exports.updateItem = async(req,res)=>{
//         try{
//             const model = await Book.findByIdAndUpdate(req.params.id, req.body,{new:true});
//             res.status(201).json(model);
//         }catch(error){
//             res.status(500).json({error: error.message});
//         }
//     }



// // -------------------library----------------

// exports.signup = async(req,res)=>{
//     try{
//         const{BookName,BookTitle,Bookauthor,Bookprice,Bookstate, token=uuidv4() }= req.body;
//             // const Token = uuidv4();
//         const model = await library.create({BookName,BookTitle,Bookauthor,Bookprice,Bookstate,
//             token});
//         res.status(201).json(model);
//     }catch(error){  
//         res.status(500).json({error: error.message})
//     }
// }

// exports.login = async(req,res)=>{
//     try{
//         const{email, password} = req.body;
//         const model = await library.findOne({email, password});
//         res.status(201).json(model);
//     }catch(error){
//         res.status(500).json({error: error.message})
//     }
// }

// exports.createItem = async(req,res)=>{
//     try{
//         const model = await library.create(req.body);
//         res.status(201).json(model);
//     }catch(error){
//         res.status(500).json({error: error.message});
//     }
// }

// exports.getAllItemById = async(req,res)=>{
//     try{
//         const model = await library.findById(req.params.id);
//         res.status(201).json(model);
//     }catch(error){
//         res.status(500).json({error: error.message});
//     }
// }

// exports.deleterItem = async(req,res)=>{
//     try{
//         const model = await library.findByIdAndDelete(req.params.id);
//         res.status(201).send();
//     }catch(error){
//         res.status(500).json({error: error.message});
//     }
// }

// exports.updateItem = async(req,res)=>{
//     try{
//         const model = await library.findByIdAndUpdate(req.params.id, req.body,{new:true});
//         res.status(201).json(model);
//     }catch(error){
//         res.status(500).json({error: error.message});
//     }
// }


