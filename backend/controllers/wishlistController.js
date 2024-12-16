import userModel from "../models/userModel.js";

// ADD PRODUCT TO USER WISHLIST
const addToWishlist = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    const userData = await userModel.findById(userId);
    let wishlist = userData.wishlist;

    if (wishlist.includes(itemId)) {
      return res.json({
        success: false,
        message: "Product already in wishlist",
      });
    }

    // ADD THE PRODUCT TO USER WISHLIST
    wishlist.push(itemId);

    // UPDATE USER WISHLIST
    await userModel.findByIdAndUpdate(userId, { wishlist });

    res.json({ success: true, message: "Product added to wishlist" });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// REMOVE PRODUCT FROM USER WISHLIST
const removeFromWishlist = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    const userData = await userModel.findById(userId);
    let wishlist = userData.wishlist;

    // REMOVE THE PRODUCT FROM USER WISHLIST
    wishlist = wishlist.filter((id) => id.toString() !== itemId);

    // UPDATE USER WISHLIST
    await userModel.findByIdAndUpdate(userId, { wishlist });

    res.json({ success: true, message: "Product removed from wishlist" });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// GET USER WISHLIST
const getUserWishlist = async (req, res) => {
  try {
    const { userId } = req.body;

    const userData = await userModel.findById(userId);
    let wishlist = await userData.wishlist;

    // const wishlistProducts = await productModel.find({
    //   _id: { $in: wishlist },
    // });

    res.json({ success: true, wishlist });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Hello world",
    });
  }
};

export { addToWishlist, removeFromWishlist, getUserWishlist };
