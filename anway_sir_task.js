// const kanchan = {
//     "key-1": {
//       "nested-key-1": "nested-value",
//       "nested-key-2": "nested-value-2"
//     },
//     "key-2": "d",
//     "key-3": {},
//     "key-4": 3
//   };
  
//   let ab=Object.keys(kanchan)
//   for (const key of Object.keys(kanchan)) {
//     if (key === "key-1") {
//       const value = kanchan[key];
//       console.log(key, value);
//     }
//   }


// const kanchan = {
//     "key-1": {
//       "nested-key-1": "nested-value",
//       "nested-key-2": "nested-value-2"
//     },
//     "kanchu":{
//         "arr":[10,20,30]
//     },
//     "key-5":["kanchan","sudam","gire"],
//     "key-2": "d",
//     "key-4": 3
//   };
 
//   for (const key in kanchan) {
//     const keyValue = kanchan[key];
//     console.log(key, keyValue);
//   }
  
// let keys=Object.keys(kanchan)
// console.log(keys[0],kanchan[keys[0]]);

//   console.log(keys[1],kanchan[keys[1]]);

//   console.log(keys[3],kanchan[keys[3]]);

/////////////////////////////////////////////////////////
// for(let key in kanchan["key-1"])
// {
//     console.log(key,kanchan["key-1"][key]);
// }
// for(let key in kanchan)
// {
//     if(key==="key-2")
//     {
//         console.log(key,kanchan[key]);
//     }
//     else if(key==="key-4")
//     {
//         console.log(key,kanchan[key]);
//     }
// }
// for(let key in kanchan["kanchu"])
// {
//     console.log(key,kanchan["kanchu"][key]);
// }
// for(let key in kanchan["key-5"])
// {
//     console.log(key,kanchan["key-5"][key]);
// }



 
// let k={
//     "key-1": {
//         "nested-key-1": "nested-value",
//         "nested-key-2": "nested-value-2"
//     },
 
//     "key-2": "d",
 
//     "key-3": 3,
 
//     "key-4": {
//        "key-4-1":["kavita","lande"]
//     },
 
//     "key-5":{
//         "key-5-1":"not-book",
//         "key-5-2":"book",
//         "key-5-3":{
//             "key-5-3-1":"arrayPointer",
//             "key-5-3-2":"company",
//             "key-5-3-3":"wraje"
//         }
//     },
 
//     "key-6":{
//         "key-6-1":123,
//         "key-6-2":"tintraj"
//     },
 
//     "key-7":456,
 
//     "key-8":[
//         "feb", 5, 2024
//     ]
 
 
 
// }
// for(let key in k)

// {
// console.log(key,k["key-5"]["key-5-3"]);
// }


let ab={
    "sections": {
      "main": {
        "type": "main-product",
        "blocks": {
          "vendor": {
            "type": "text",
            "settings": {
              "text": "{{ product.vendor }}",
              "text_style": "uppercase"
            }
          },
          "title": {
            "type": "title",
            "settings": {
            }
          },
          "price": {
            "type": "price",
            "settings": {
            }
          },
          "variant_picker": {
            "type": "variant_picker",
            "settings": {
              "picker_type": "button"
            }
          },
          "quantity_selector": {
            "type": "quantity_selector",
            "settings": {
            }
          },
          "buy_buttons": {
            "type": "buy_buttons",
            "settings": {
              "show_dynamic_checkout": true,
              "show_gift_card_recipient": true
            }
          },
          "description": {
            "type": "description",
            "settings": {
            }
          },
          "share": {
            "type": "share",
            "settings": {
              "share_label": "Share"
            }
          },
          "019cf676-ea03-45e8-86bb-7a44df666a27": {
            "type": "shopify:\/\/apps\/ali-reviews-product-reviews\/blocks\/widget-star-rating\/bf2eea72-0400-4db1-8908-44b7418f9a88",
            "settings": {
            }
          }
        },
        "block_order": [
          "vendor",
          "title",
          "019cf676-ea03-45e8-86bb-7a44df666a27",
          "price",
          "variant_picker",
          "quantity_selector",
          "buy_buttons",
          "description",
          "share"
        ],
        "settings": {
          "enable_sticky_info": true,
          "color_scheme": "background-1",
          "media_size": "large",
          "constrain_to_viewport": true,
          "media_fit": "contain",
          "gallery_layout": "stacked",
          "media_position": "left",
          "image_zoom": "lightbox",
          "mobile_thumbnails": "hide",
          "hide_variants": true,
          "enable_video_looping": false,
          "padding_top": 36,
          "padding_bottom": 12
        }
      },
      "related-products": {
        "type": "related-products",
        "settings": {
          "heading": "You may also like",
          "heading_size": "h2",
          "products_to_show": 4,
          "columns_desktop": 4,
          "color_scheme": "background-1",
          "image_ratio": "square",
          "image_shape": "default",
          "show_secondary_image": true,
          "show_vendor": false,
          "show_rating": false,
          "columns_mobile": "2",
          "padding_top": 36,
          "padding_bottom": 28
        }
      },
      "17029065150c334436": {
        "type": "apps",
        "blocks": {
          "877d89fa-de57-4083-942a-f3ed3cf515a0": {
            "type": "shopify:\/\/apps\/judge-me-reviews\/blocks\/review_widget\/61ccd3b1-a9f2-4160-9fe9-4fec8413e5d8",
            "settings": {
            }
          },
          "7a5906ef-bfff-428c-b676-20787259ef77": {
            "type": "shopify:\/\/apps\/ali-reviews-product-reviews\/blocks\/review-badge\/bf2eea72-0400-4db1-8908-44b7418f9a88",
            "settings": {
              "template_id": "highlight",
              "verified_text": "Verified reviews",
              "product_ids": [
                "arsenal-away-kit"
              ],
              "scale": 120
            }
          }
        },
        "block_order": [
          "877d89fa-de57-4083-942a-f3ed3cf515a0",
          "7a5906ef-bfff-428c-b676-20787259ef77"
        ],
        "settings": {
          "include_margins": true
        }
      },
      "1702909448ceebaa91": {
        "type": "apps",
        "blocks": {
          "26738135-80e4-4ac4-8d8d-c628ea60259f": {
            "type": "shopify:\/\/apps\/ali-reviews-product-reviews\/blocks\/review-badge\/bf2eea72-0400-4db1-8908-44b7418f9a88",
            "settings": {
              "template_id": "highlight",
              "verified_text": "Verified reviews",
              "product_ids": [
                "arsenal-3rd-kit",
                "bournemouth-3rd-kit"
              ],
              "scale": 100
            }
          }
        },
        "block_order": [
          "26738135-80e4-4ac4-8d8d-c628ea60259f"
        ],
        "settings": {
          "include_margins": true
        }
      },
      "alireviews-section-fafcbc8c-b96d-49d9-be68-1f18066481c7": {
        "type": "apps",
        "blocks": {
          "1c06b589-1cac-4b77-bee5-0a5525789ab4": {
            "type": "shopify:\/\/apps\/ali-reviews-product-reviews\/blocks\/widget-box\/bf2eea72-0400-4db1-8908-44b7418f9a88",
            "settings": {
              "name": "Review Box",
              "vertical_alignment": "2",
              "rating_color": "rgba(31,31,31,1)",
              "section_color": "rgba(255,255,255,1)",
              "primary_text_color": "rgba(31,31,31,1)"
            }
          }
        },
        "block_order": [
          "1c06b589-1cac-4b77-bee5-0a5525789ab4"
        ],
        "settings": {
          "include_margins": true
        }
      }
    },
    "order": [
      "main",
      "alireviews-section-fafcbc8c-b96d-49d9-be68-1f18066481c7",
      "related-products",
      "17029065150c334436",
      "1702909448ceebaa91"
    ]
  }
  for (let i = 0; i < ab["order"].length; i++) {
    if (i === 0 && ab["order"][i] === "main") {
        console.log(i, ab["order"][i], ab["sections"][ab["order"][i]]);
    }
}
for(let i=0;i<ab["order"].length;i++){
    if(i===1 && ab["order"][i]==="alireviews-section-fafcbc8c-b96d-49d9-be68-1f18066481c7");
    {
        console.log(i, ab["order"][i],ab["sections"][ab["order"][i]])
    }
}
for(let k=0;k<ab["order"].length;k++)
{
    if(k===2 && ab["order"][k]==="related-products")
    {
        console.log(k,ab["order"][k],ab["sections"][ab["order"][k]]);
    }
}
for(let l=0 ;l<ab["order"].length;l++)
{
    if(l===3 && ab["order"][l]==="17029065150c334436")
    {
        console.log(l,ab["order"][l],ab["sections"],[ab["order"][l]]);
    }
}
for(let m=0;m<ab["order"].length;m++){
    if(m===4 && ab["order"][m]==="1702909448ceebaa91")
    {
        console.log(m,ab["order"][m],ab["sections"],[ab["order"][m]]);
    }
}




