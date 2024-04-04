
const {v4:uuidv4} = require('uuid');
const  {library ,Book,transaction} = require('../Module/Librarymodel');


// book
exports.createAddBook = async(req,res)=>{
    try{
        const model = await Book.create(req.body);
        res.status(201).json(model);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}
exports.getbook = async (req, res) => {
    try {
      const model = await Book.find(req.params.id);
      res.status(200).json(model);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

exports.getAllAddBookById = async(req,res)=>{
    try{
        const model = await Book.findById(req.params.id);
        res.status(201).json(model);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

exports.deleterAddBook = async(req,res)=>{
    try{
        const model = await Book.findByIdAndDelete(req.params.id);
        res.status(201).send();
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

exports.updateAddBook = async(req,res)=>{
    try{
        const model = await Book.findByIdAndUpdate(req.params.id, req.body,{new:true});
        res.status(201).json(model);
    }catch(error){
        res.status(500).json({error: error.message});
    }

     
}



// -------------------library----------------

// exports.signup = async(req,res)=>{
// try{
//     const{BookName,BookTitle,Bookauthor,Bookprice,Bookstate, token=uuidv4() }= req.body;
//         // const Token = uuidv4();
//     const model = await library.create({BookName,BookTitle,Bookauthor,Bookprice,Bookstate,
//         token});
//     res.status(201).json(model);
// }catch(error){  
//     res.status(500).json({error: error.message})
// }
// }

// exports.login = async(req,res)=>{
// try{
//     const{email, password} = req.body;
//     const model = await library.findOne({email, password});
//     res.status(201).json(model);
// }catch(error){
//     res.status(500).json({error: error.message})
// }
// }

exports.createLibrary = async(req,res)=>{
try{
    const model = await library.create(req.body);
    res.status(201).json(model);
}catch(error){
    res.status(500).json({error: error.message});
}
}

exports.getAllLibraryById = async(req,res)=>{
try{
    const model = await library.findById(req.params.id);
    res.status(201).json(model);
}catch(error){
    res.status(500).json({error: error.message});
}
}

exports.deleterLibrary = async(req,res)=>{
try{
    const model = await library.findByIdAndDelete(req.params.id);
    res.status(201).send();
}catch(error){
    res.status(500).json({error: error.message});
}
}

exports.updateLibrary = async(req,res)=>{
try{
    const model = await library.findByIdAndUpdate(req.params.id, req.body,{new:true});
    res.status(201).json(model);
}catch(error){
    res.status(500).json({error: error.message});
}
}


// ------------------transaction--------------------------


exports.createtransaction = async(req,res)=>{
    try{
        const model = await transaction.create(req.body);
        res.status(201).json(model);
    }catch(error){
        res.status(500).json({error: error.message});
    }
    }
    
    exports.getAlltransactionById = async(req,res)=>{
    try{
        const model = await transaction.findById(req.params.id);
        res.status(201).json(model);
    }catch(error){
        res.status(500).json({error: error.message});
    }
    }
    
    exports.deletertransaction = async(req,res)=>{
    try{
        const model = await transaction.findByIdAndDelete(req.params.id);
        res.status(201).send();
    }catch(error){
        res.status(500).json({error: error.message});
    }
    }
    
    exports.updatetransaction = async(req,res)=>{
    try{
        const model = await transaction.findByIdAndUpdate(req.params.id, req.body,{new:true});
        res.status(201).json(model);
    }catch(error){
        res.status(500).json({error: error.message});
    }
    }
    