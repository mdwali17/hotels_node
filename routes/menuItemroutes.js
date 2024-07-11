const express=require('express');
const router=express.Router();
const menuItem=require('./../models/menuItem');


router.post('/',async (req,res)=>{
    try{
        const data=req.body
        const newMenuItem= new menuItem(data);
        const response= await newMenuItem.save();
        console.log('dish item saved')
        res.status(200).json(response)
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'})
    }
})


router.get('/',async(req, res)=>{
    try{
    const data=await menuItem.find();
    console.log('item data fetched');
    res.status(500).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'})
    }
})
router.get('/:tastes',async(req,res)=>{
    try{
        const tastes=req.params.tastes;
        if (tastes=='sweet'|| tastes=='spicy'|| tastes=='sour') {
            const response=await menuItem.find({taste:tastes});
            console.log('item data fetched');
            res.status(500).json(response);
        }
        else{
            res.status(404).json({error:"invalid taste"})
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'})
    }
})
router.put('/:id',async(req,res)=>{
    try{
        const menuItemId=req.params.id;
        const menuItemUpdated=req.body;

        const response=await menuItem.findByIdAndUpdate(menuItemId,menuItemUpdated,{
            new:true,
            runValidators:true,
        })
        if(!response){
            return res.status(404).json({error:"menu-item not found"});
        }
        console.log("menu-item updated");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"internal server error"});
    }
})
router.delete('/:id',async(req,res)=>{
    try{
    const menuItemId=req.params.id;
    const response=await menuItem.findByIdAndDelete(menuItemId);
    if(!response){
        res.status(404).json({error:"menu-item not found"});
    }
    console.log("data deleted");
    res.status(200).json({message:"menu-item deleted successfully"});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});
    }
})

module.exports=router
