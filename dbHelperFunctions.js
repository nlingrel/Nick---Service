const dummyReferences = [{ productID: 1, name: "cannon", image: "https://cdn.shopify.com/s/files/1/0068/3370/0916/products/pirate-canon-life-size-replica-2_1024x1024.jpg?v=1571279010" },
{ productID: 2, name: "sail", image: "https://www.nicepng.com/png/full/404-4044124_module-pirate-sail-power-sail-galleon.png" },
{ productID: 3, name: "wheel", image: "https://images-na.ssl-images-amazon.com/images/I/71JeDEZd4YL._AC_SL1500_.jpg" },
{ productID: 4, name: "flintlock", image: "https://www.outfit4events.com/runtime/cache/images/redesignProductFull/hs64144-01.JPG" },
{ productID: 5, name: "jolly roger", image: "https://flagsinternational.com/wp-content/uploads/2018/02/jolly-roger1b_1_1.jpeg" },
{ productID: 6, name: "hook hand", image: "https://i5.walmartimages.com/asr/1dfc522a-c3df-405d-bdc2-cd6d9ac78768_1.11be8f15868a2b57db233a2b03c5fa18.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" },
{ productID: 7, name: "treasure chest", image: "https://www.theinteriorgallery.com/prod_images_blowup/treasurechest-03.jpg" },
{ productID: 8, name: "eye patch", image: "https://www.factorydirectparty.com/public/1/media/images/catalog/product//U/S/UST1029/1/LARGE.jpg" },
{ productID: 9, name: "spyglass", image: "https://images-na.ssl-images-amazon.com/images/I/71%2BQWi-ol1L._SL1500_.jpg" },
{ productID: 10, name: "barrels", image: "https://img-new.cgtrader.com/items/113241/2683246748/rum-wooden-barrels-pirate-style-3d-model-obj-3ds-dae-skp-mxs.jpg" },
{ productID: 11, name: "treasure map", image: "https://images-na.ssl-images-amazon.com/images/I/71Pk17Mjg4L._AC_SL1010_.jpg" },
{ productID: 12, name: "cannon balls", image: "https://dygtyjqp7pi0m.cloudfront.net/i/35395/30473232_1.jpg?v=8D5E45EB7E218E0" },
{ productID: 13, name: "parrot", image: "https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/175773_01" },
{ productID: 14, name: "dubloons", image: "https://images-na.ssl-images-amazon.com/images/I/81qN%2BqeP91L._AC_SL1500_.jpg" },
{ productID: 15, name: "hat", image: "https://www.heritagecostumes.com/images/products/2422.jpg" },
{ productID: 16, name: "sword", image: "https://i.ebayimg.com/images/g/dfAAAOSwaAtcbn0Y/s-l1600.jpg" },
{ productID: 17, name: "compass", image: "https://images-na.ssl-images-amazon.com/images/I/71pIgQwLamL._AC_UL1000_.jpg" },
{ productID: 18, name: "peg leg", image: "https://atlas-content-cdn.pixelsquid.com/stock-images/pegleg-peg-leg-8JMDkdB-600.jpg" },
{ productID: 19, name: "boots", image: "https://images-na.ssl-images-amazon.com/images/I/41jt0hx8axL._AC_.jpg" },
{ productID: 20, name: "coat", image: "https://images-na.ssl-images-amazon.com/images/I/61FYmBlG2CL._UL1500_.jpg" },
{ productID: 21, name: "hoop earrings", image: "https://partytimebr.com/pub/media/catalog/product/cache/image/800x800/e9c3970ab036de70892d86c6d221abfe/3/9/390108.jpg" },
{ productID: 22, name: "lantern", image: "https://atlas-content-cdn.pixelsquid.com/stock-images/ship-candle-lantern-QJ3MaE2-600.jpg" },
{ productID: 23, name: "bandana", image: "https://cdn.shopify.com/s/files/1/2075/7331/products/PirateBandana_StellaTree_DeepRed_jpg_1024x1024.jpeg?v=1571710207" },
{ productID: 24, name: "anchor", image: "https://i1.pngguru.com/preview/196/984/881/pirates-brown-pirate-anchor.jpg" },
{ productID: 25, name: "nautical rope", image: "https://images-na.ssl-images-amazon.com/images/I/61d9vWyEYdL._AC_SL1001_.jpg" },
{ productID: 26, name: "rum bottles", image: "https://img-new.cgtrader.com/items/746698/37710148e7/rum-pirate-bottle-3d-model-max-mat.jpg" },
{ productID: 27, name: "shirt", image: "https://s3-eu-west-1.amazonaws.com/images.linnlive.com/57d1c9f731bf15ea2637e49ae025aac1/c9bb6d36-39d8-4f15-852c-b2dc66963381.jpg" },
{ productID: 28, name: "pants", image: "https://images-na.ssl-images-amazon.com/images/I/51xa9n2PnDL._UY550_.jpg" },
{ productID: 29, name: "anchor", image: "https://cdn.shopify.com/s/files/1/0983/8740/products/Wooden_Anchor_Wall_Decor_Fashion_Themed_Art_Pirate_Nautical_Theme_Party_Smooth_Finish_large.jpg?v=1454813169" },
{ productID: 30, name: "beer mug", image: "https://contestimg.wish.com/api/webimage/5d88422414af3e2af25d39b7-large.jpg?cache_buster=63aa99be201d3edcc48f12aad19a8383" },
{ productID: 31, name: "skull eye patch", image: "https://www.partyvalue.com/media/product/082/pirate-eye-patch-1ct-c50.jpg" },
{ productID: 32, name: "hat with feather", image: "https://images-na.ssl-images-amazon.com/images/I/710ecn%2BKlwL._AC_SL1300_.jpg" }]


function badgify(review) {
    //charcode reveiwerID[3] + charcode asin[4]
    return ((review.reviewerID.charCodeAt(3) + review.reviewerName.charCodeAt(4) / 2 >= 50))
}

function findRatio(ratingObj){
    var ratioNum = 0
    var ratioDen = ratingObj.total;
    var ratio = 0;
  for(var i = 5; i > 1; i--){
    var perStarRatio = (ratingObj[i].star / 5 * ratingObj[i].count)
    // console.log(`perStarRaito for ${i}`, perStarRatio)
    ratioNum += perStarRatio
    
  }
  if(ratioDen > 0) ratio = ratioNum/ratioDen * 5
   
   console.log('ratio in helper:' ,ratio)
  return ratio.toFixed(1);
}



module.exports.badgify = badgify
module.exports.findRatio = findRatio