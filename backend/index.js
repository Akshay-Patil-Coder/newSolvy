const express= require('express');
const cors = require('cors');
const User=require('./model/UserDb');
const Tickets=require('./model/TicketsDb');
const Head = require('./model/HeadDb');
const Department=require('./model/DepartmentDb');
const Category=require('./model/CategoryDb');
const generateToken= require('./config/genrateToken');
const app=express();
const connectDb=require('./config/db')

connectDb();

const corsOptions={
    origin:"http://localhost:4200",
    methods:"GET,POST,PUT,DELETE,HEAD,PATCH",
    credentials:true,
};
app.use(cors(corsOptions))
app.use(express.json())

//Users Api Started...
app.post('/loginUser',async(req,resp)=>{
    try {
        let token;
        let result = await User.findOne({email:req.body.email}).populate('department','name')
        // console.log(req.body.email,req.body.password)
        if(result.password == req.body.password){
            resp.status(201).json({
                response:true,
                _id: result._id,
                fullname:result.name,
                mobileNo:result.mobileNo,
                department:result.department.name,
                email: result.email,
                gender:result.gender,
                token: generateToken(result._id),
                name:"employee",
              });
        }
    } catch (error) {
        resp.status(400);
        // throw new Error("User Cannot Found");
    }
        
    });

app.post('/createUsers',async(req,resp)=>{
    try {
        const {name,email,password,confirmPassword,mobileNo,gender,department}=req.body;
const useravailable = await User.findOne({email:email});
if(useravailable){
    resp.send('User Is Already Available')
}
if(password == confirmPassword){
        const createUsers= await new User(req.body);
        const ok = await createUsers.save();
        resp.json(ok);
    }
    } catch (error) {
        resp.send(error);
    }

});

app.get('/getUsers',async(req,resp)=>{
try {

let users = await User.find().populate("department","name");
resp.json(users);
    
} catch (error) {
    resp.send({message:"something error"})
}
});
app.get('/getUsersByidforUpdate/:_id',async(req,resp)=>{
  try {
  
  let users = await User.findOne({_id:req.params._id});
  resp.send(users);
      
  } catch (error) {
      resp.send({message:"something error"})
  }
  });

app.post('/searchUsers',async (req,resp)=>{
    const regex = new RegExp(req.body.search, 'i');
        const item = await User.find({
            $or: [
                { name: { $regex: regex } },
                { email: { $regex: regex } },
                { department: { $regex: regex } },
            ]
        }).populate("department","name");
        resp.json(item);
});
app.put('/updateUser',async(req,resp)=>{
  if(req.body.password == req.body.confirmPassword){
    let update = await User.updateOne({_id:req.body._id},
        {$set:
            {
                name:req.body.name,
                email:req.body.email,
                gender:req.body.gender,
                mobileNo:req.body.mobileNo,
                department:req.body.department,
                password:req.body.password,
                confirmPassword:req.body.confirmPassword,
            }
        }
    );
    resp.send(update);
  }
});
app.delete('/deleteUser/:_id',async(req,resp)=>{
    console.log(req.params._id)
    const Delete = await User.deleteOne({_id:req.params._id});
    resp.json(Delete);
});

//Head api started...
app.post('/createHead',async(req,resp)=>{
    const newAdmin = await new Head(req.body)
    const ok = await newAdmin.save();
    resp.send(ok);
});
app.post('/loginHead',async(req,resp)=>{
try {
    let token;
    let result = await Head.findOne({email:req.body.email});
    // console.log(req.body.email,req.body.password)
    if(result.password == req.body.password){
        resp.status(201).json({
            response:true,
            _id: result._id,
            email: result.email,
            token: generateToken(result._id),
            name:"admin",
          });
    }
} catch (error) {
    resp.status(400);
    // throw new Error("User Cannot Found");
}
    
});
//Department api started...

app.post('/createDepartment',async(req,resp)=>{
    try {
        const Depart = await new Department(req.body)
        const ok = await Depart.save();
        resp.send(ok);
        
    } catch (error) {
        resp.send("i think it is already present")
    }
    
});
app.get('/getDepartments',async(req,resp)=>{
    const departments = await Department.find();
    resp.send(departments);
});
app.get('/getDepartmentsForUpdate/:id',async(req,resp)=>{
  const departments = await Department.findOne({_id:req.params.id});
  resp.send(departments);
});

app.put('/DepartmentsForUpdate',async(req,resp)=>{
  const departments = await Department.updateOne({_id:req.body._id},{$set:{name:req.body.name}});
  resp.send(departments);
});

app.delete('/deleteDepartment/:_id',async(req,resp)=>{
    const Delete = await Department.deleteOne({_id:req.params._id});
    resp.send(Delete)
});


app.post('/createParentCategory', async (req, res) => {
  try {
    const { parentCategory, department, childCategory } = req.body; 
 
    const categoryData = {
      department,
      parentCategory,
    };

    const newCategory = new Category(categoryData);
    const savedCategory = await newCategory.save();

    const pcategory = await Category.findOne({parentCategory: parentCategory });

    const result = await pcategory.addingCategory(childCategory); 

    res.status(201).json(result);
  } catch (error) {
    console.error('Error creating parent category:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/createChildCategory', async (req, res) => {
    try {

      const { parentCategory,childCategory,department } = req.body;
      
     if (!parentCategory || !childCategory) {
        return res.status(400).send('Category name and child category name are required');
      }
      
      const parentCategoryies = await Category.findOne({parentCategory: parentCategory });
      if (!parentCategoryies) {
        return res.status(404).send('Parent category not found');
      }
      const result = await parentCategoryies.addingCategory(childCategory);
      res.status(200).json(result); 
      
    } catch (error) {
      console.error('Error creating child category:', error);
      res.status(500).send('Server error'); 
    }
  });
  
  app.get('/getCategories',async(req,resp)=>{
    try {
        let users = await Category.find().populate("department","name");
        resp.json(users);
    } catch (error) {
        resp.send(error)
    }
  })
  app.get('/getCategoriesById/:_id',async(req,resp)=>{
    try {
        let users = await Category.findOne({department:req.params._id}).populate("department","name");
        users=[users];
        resp.json(users);
    } catch (error) {
        resp.send(error)
    }
  })
  app.get('/getChildCategories/:_id',async(req,resp)=>{
    try {
        let users = await Category.findOne({parentCategory:req.params._id}).populate("department","name");
        users=[users];
        resp.json(users);
    } catch (error) {
        resp.send(error)
    }
  })
  app.get('/ParentCategoriesForUpdate/:_id',async(req,resp)=>{
    try {
        let users = await Category.findOne({_id:req.params._id});
        resp.send(users);
    } catch (error) {
        resp.send(error)
    }
  })
  app.put('/NowUpdateParentCategory',async(req,resp)=>{
    const departments = await Category.updateOne({_id:req.body.oldParentCategory},{$set:{parentCategory:req.body.parentCategory,department:req.body.department}});
    resp.send(departments);
  });

  app.delete('/deleteCategories/:_id',async(req,resp)=>{
    try {
        const Deletecat= await Category.deleteOne({_id:req.params._id});
        resp.send(Deletecat);
    } catch (error) {
        resp.send(error);
    }
  });

  app.post('/deleteChildCategory', async (req, res) => {
    try {
      const { parentCategory, childCategory } = req.body;
      if (!parentCategory || !childCategory) {
        return res.status(400).send('Category name and child category name are required');
      }
      const parentCategoryiess = await Category.findOne({ parentCategory: parentCategory });
      if (!parentCategoryiess) {
        return res.status(404).send('Parent category not found');
      }
  
      const childCategoryIndex = parentCategoryiess.childCategory.findIndex(child => child.name === childCategory);
      if (childCategory === -1) {
        return res.status(404).send('Child category not found');
      }
  
      parentCategoryiess.childCategory.splice(childCategory, 1);
  
      const result = await parentCategoryiess.save();
      res.status(200).json(result); 
      
    } catch (error) {
      console.error('Error deleting child category:', error);
      res.status(500).send('Server error');
    }
  });
  
  //Tickets api started...
  app.post('/createTickets',async(req,resp)=>{
    try {
        const {createdBy,Department,ParentCategory,ChildCategory,Description,AssignedTo}=req.body;
    const Ticket = await new Tickets(req.body);
   const result= await Ticket.save();
   resp.json(result);
    } catch (error) {
        resp.send(error)
    }
    
  });
  app.get('/getTickets',async(req,resp)=>{
    let Ticket = await Tickets.find().populate('createdBy',"-password").populate("AssignedTo","-password")
    resp.json(Ticket)
  })
  app.get('/getTicketsById/:_id',async(req,resp)=>{
    let Ticket = await Tickets.find({createdBy:req.params._id}).populate('createdBy',"-password").populate("AssignedTo","-password")
    resp.json(Ticket)
  })
  app.get('/getTicketsByIdForAssigned/:_id',async(req,resp)=>{
    let Ticket = await Tickets.find({AssignedTo:req.params._id}).populate('createdBy',"-password").populate("AssignedTo","-password")
    resp.json(Ticket)
  })

  app.delete('/deleteTickets/:_id',async(req,resp)=>{
    console.log(req.params._id)
    const DeleteTickets = await Tickets.deleteOne({_id:req.params._id});
    
    resp.send(DeleteTickets);
  }),
  app.put('/updateStatusOfTicket',async(req,resp)=>{
  const updateStatus=await Tickets.updateOne({_id:req.body._id},{
    $set:{status:req.body.status}
  });
  resp.send(updateStatus);
  });
  app.post('/findstatus',async(req,resp)=>{
    const Data = await Tickets.find({status:req.body.status}).populate('createdBy',"-password").populate("AssignedTo","-password");
    resp.json(Data)

  })

app.listen(3000);


