import mongoose from "mongoose";

const DailyPlanSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true,
    },
    repeatType:{
        type:Number,
        requird:true,
    },
    startDate:{
        type:Number,
        requird:true
    },
    endDate:{
        type:Number,
        requird:true
    },
    content:{
        type:String,
        required:true,
    },
    comment:{
        type:String,
        requird:true,
    },
    priority:{
        type:String,
        requird:true,
    }
},
{timestamps: true});

export default mongoose.model("dailyPlan",DailyPlan);