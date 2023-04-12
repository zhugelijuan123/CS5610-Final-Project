import mongoose from "mongoose";
const usersSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email:String,
    dob:Date,
    location:String,
    bio:String,
    role: { type: String, required: true, default: "BUYER", enum: ["SELLER", "BUYER", "ADMIN"] },
    avatar:{type: String, default:"https://previews.123rf.com/images/cienpies/cienpies1111/cienpies111100002/11076086-human-head-shape-made-with-social-media-icons-set.jpg"},
    profilePic:{type: String, default:"https://www.reuters.com/resizer/S2QZTkoqSfT_OagpUN2LL5FX5j8=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/TXDGVXPBEVMY5PA2RHRF2EA25Y.jpg"},
    cart: [
        {
          type: {
            product_id: {
              type: Number,
              ref: "product",
              required: true,
              localField: "product_id",
              foreignField: "product_id",
              justOne: true,
            },
            count: {
              type: Number,
              required: true,
            },
          },
          required: false,
        },
    ],
    history: [
        {
          type: {
            product_id: {
              type: Number,
              ref: "product",
              required: true,
              localField: "product_id",
              foreignField: "product_id",
              justOne: true,
            },
            count: {
              type: Number,
              required: true,
            },
          },
          required: false,
        },
    ],
  },
  {
    collection: "users",
  }
);
export default usersSchema;
