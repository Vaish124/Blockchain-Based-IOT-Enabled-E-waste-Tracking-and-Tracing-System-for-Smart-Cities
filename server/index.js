import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());
import User from "./models/user.js";
import Order from "./models/order.js";
import Product from "./models/product.js";
import Consumerproduct from "./models/recycling.js";
import CreateProduct from "./models/createProduct.js";
import Certificate from "./models/certificate.js";

// user signup
app.post("/signup", async (req, res) => {
  const { firstname, email, mobile, address, password, roll } =
    req.body;

  const newUser = new User({
    firstname,
    email,
    mobile,
    address,
    password,
    roll,
  });

  try {
    const saveUser = await newUser.save();
    return res.json({
      data: saveUser,
      success: true,
      message: "successfully created signup",
    });
  } catch (e) {
    return res.json({
      message: e.message,
    });
  }
});

app.get("/", async (req, res) => {
  const alluser = await User.find();
  res.json({
    data: alluser,
    message: "feached all user",
  });
});

// user login
app.post("/login", async (req, res) => {
  const { email, password, roll } = req.body;

  const user = await User.findOne({ email, password }).select(
    "email name roll"
  );

  if (user == null) {
    return res.json({
      success: false,
      message: "Login failed..!",
    });
  }

  res.json({
    success: true,
    data: user,
    message: "Login successfully..!",
  });
});


app.post("/products", async (req, res) => {
  const { name, price, productImg, description } = req.body;

  const newProduct = new Product({
    name,
    price,
    productImg,
    description,
  });

  try {
    const savedProduct = await newProduct.save();

    return res.json({
      data: savedProduct,
      success: true,
      message: "product added",
    });
  } catch (e) {
    return res.json({
      message: e.message,
    });
  }
});

// get all products
app.get("/products", async (req, res) => {
  const products = await Product.find();

  res.json({
    success: true,
    data: products,
    message: "all fetched successfuly",
  });
});

//get data by id

app.get("/products/:_id", async (req, res) => {
  const { _id } = req.params;

  const findOneProduct = await Product.findOne({ _id: _id });

  res.json({
    data: findOneProduct,
    message: "fetch product successfully",
  });
});

//delete api
app.delete("/products/:_id", async (req, res) => {
  const { _id } = req.params;

  await Product.deleteOne({ _id: _id });

  res.json({
    success: true,
    message: "product delete successfully",
  });
});

// //search product by name
app.get("/product/search", async (req, res) => {
  const { q } = req.query;

  const searchProduct = await Product.find({
    name: { $regex: q, $options: "i" },
  });

  return res.json({
    success: true,
    data: searchProduct,
    message: "search successfully",
  });
});

// update product by id

app.put("/products/:_id", async (req, res) => {
  const { _id } = req.params;

  const { name, price, productImg, description } = req.body;

  await Product.updateOne(
    { _id: _id },
    {
      $set: {
        name,
        price,
        productImg,
        description,
      },
    }
  );

  const newupdatedProduct = await Product.findById(_id);

  res.json({
    data: newupdatedProduct,
    message: "updated product successfully",
  });
});

app.post("/orders", async (req, res) => {
  const { user, product, quantity, shipping_address, delivery_charges } =
    req.body;

  const OrderProduct = new Order({
    user,
    product,
    quantity,
    shipping_address,
    delivery_charges,
  });

  try {
    const savedOrderProduct = await OrderProduct.save();

    res.json({
      data: savedOrderProduct,
      success: true,
      message: "Congratulation  your order has been placed",
    });
  } catch (e) {
    res.json({
      message: e.message,
    });
  }
});

//GET //all order

app.get("/orders", async (req, res) => {
  const findAllOrders = await Order.find().populate("user product");

  // findAllOrders.forEach((order)=>{

  //     order.user.password=undefined
  // })

  res.json({
    data: findAllOrders,
    message: "successfully fetch all order",
  });
});

//delete ordere

app.delete("/orders/_id", async (req, res) => {
  const { id } = req.params;

  await Order.deleteOne({ id: id });

  res.json({
    success: true,
    data: {},
    message: `succesfully deleted order ${id}`,
  });
});

// GET :order/user/:id

app.get("/orders/user/:id", async (req, res) => {
  const { id } = req.params;

  const orderUserId = await Order.find({ user: id }).populate("user product");

  // remove password from all the order
  //  orderUserId.forEach((order)=>{

  //    if(order){
  //     order.user.password= undefined
  //    }
  //  })

  res.json({
    success: true,
    data: orderUserId,
    message: "find product succesfully",
  });
});

// PATHCH: order/status/:id

app.patch("/orders/status/:id", async (req, res) => {
  const { id } = req.params;

  const { status } = req.body;

  await Order.updateOne({ _id: id }, { $set: { status: status } });

  res.json({
    status: true,
    message: "Order status update successfully///",
  });
});

app.post("/api/v1/consumerproducts", async (req, res) => {
  const {
    name,
    consumerproductprice,
    consumerproductimg,
    consumerproductquantity,
    consumerproductDescription,
  } = req.body;

  const newProduct = new Consumerproduct({
    name,
    consumerproductimg,
    consumerproductprice,
    consumerproductquantity,
    consumerproductDescription,
  });

  try {
    const savedProduct = await newProduct.save();

    return res.json({
      data: savedProduct,
      success: true,
      message: "product added",
    });
  } catch (e) {
    return res.json({
      message: e.message,
    });
  }
});

app.get("/api/v1/consumerproducts", async (req, res) => {
  const products = await Consumerproduct.find();

  res.json({
    success: true,
    data: products,
    message: "all fetched successfuly",
  });
});

app.post("/api/v1/consumerproducts", async (req, res) => {
  const { name, price, productImg, quantity } = req.body;

  const newProduct = new Consumerproduct({
    name,
    price,
    productImg,
    quantity,
  });

  try {
    const savedProduct = await newProduct.save();

    return res.json({
      data: savedProduct,
      success: true,
      message: "product added",
    });
  } catch (e) {
    return res.json({
      message: e.message,
    });
  }
});

app.post("/api/v1/certificates", async (req, res) => {
  const { name, dateOfStart, dateOfEnd, signature, signatureDetails } =
    req.body;

  const certificate = new Certificate({
    name,
    dateOfStart,
    dateOfEnd,
    signature,
    signatureDetails,
  });

  try {
    const savedCertificate = await certificate.save();

    res.json({
      success: true,
      data: savedCertificate,
      message: "Certificate Generated Successfully",
    });
  } catch (err) {
    return res.json({
      success: false,
      message: err.message,
    });
  }
});

app.get("/api/v1/certificates", async (req, res) => {
  try {
    const certificate = await Certificate.find();

    res.json({
      success: true,
      data: certificate,
      message: "Certificate find successfully",
    });
  } catch (err) {
    return res.json({
      success: false,
      message: err.message,
    });
  }
});

app.post("/api/v1/createproduct", async (req, res) => {
  const { name, productImg, price, description, quantity } = req.body;

  const product = new CreateProduct({
    name: name,
    productImg: productImg,
    price: price,
    description: description,
    quantity: quantity,
  });

  try {
    const savedProduct = await product.save();

    res.json({
      success: true,
      data: savedProduct,
      message: "Product create successfully...",
    });
  } catch (err) {
    return res.json({
      success: false,
      message: err.message,
    });
  }
});

app.get("/api/v1/createproduct", async (req, res) => {
  try {
    const allProduct = await CreateProduct.find();
    res.json({
      success: true,
      data: allProduct,
      message: "Product find successfully",
    });
  } catch (err) {
    return res.json({
      success: false,
      message: err.message,
    });
  }
});

app.get("/api/v1/createproduct/:_id", async (req, res) => {
  const { _id } = req.params;

  const findOneProduct = await CreateProduct.findOne({ _id: _id });

  res.json({
    data: findOneProduct,
    message: "fetch product successfully",
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 8080;

const connectDB = async () => {
  const conn = mongoose.connect(process.env.MONGODB_URI);
  if (conn) console.log("mongoDB connect succesfully");
};
app.listen(PORT, () => {
  console.log(`server is running on ; ${PORT}`);
  connectDB();
});
