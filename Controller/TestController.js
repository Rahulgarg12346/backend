const Test = require('../Module/TextModule')

const createTest = async (req, res) => {
  try {
    const { Teachertest, TestName, Deadline } = req.body;
    const newTest = new Test({ Teachertest, TestName, Deadline });
    await newTest.save();
    res.status(201).json(newTest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const getAllTests = async (req, res) => {
  try {
    const tests = await Test.find();
    res.json(tests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllTestsbyid = async(req, res)=>{
    try{
        const gettest = await Test.findById(req.params.id);
        res.status(200).json(gettest);

    }
    catch (error) {
        res.status(500).json({ error: error.message });
      }
}


const updateTest = async (req, res) => {
  try {
    const { id } = req.params;
    const { Teachertest, TestName, Deadline } = req.body;
    const updatedTest = await Test.findByIdAndUpdate(id, { Teachertest, TestName, Deadline }, { new: true });
    res.json(updatedTest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTest = async (req, res) => {
  try {
    const { id } = req.params;
    await Test.findByIdAndDelete(id);
    res.json({ message: 'Test deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTest,
  getAllTests,
  getAllTestsbyid,
  updateTest,
  deleteTest
};
