
//login
const loginUser=async (req,res)=>{

}

//register
// const registerUser=async (req,res)=>{
//     res.json({msg:"api working"})

// }
const registerUser = async (req, res) => {
    console.log("Register endpoint hit");
    res.json({ msg: "api working" });
  };

//route for admin
const adminLogin=async(req,res)=>{

}

export{loginUser,registerUser,adminLogin}