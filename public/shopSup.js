$(document).ready(() => {
    // let data = [
    //     {
    //         img_src: "/images/sup-1.png",
    //         name_id: "product-name-1",
    //         name: "On|Gold Standard Whey Protein",
    //         description_id: "product-description-1",
    //         description: "2.27kg , Double Milk Chocolate",
    //         price_id: "product-price-1",
    //         price: "Rs.12,000",
    //         card_id: "card-button-1"
    //     },
    //     {
    //         img_src: "/images/sup-1.png",
    //         name_id: "product-name-2",
    //         name: "On|Gold Standard Whey Protein",
    //         description_id: "product-description-2",
    //         description: "2.27kg , Double Milk Chocolate",
    //         price_id: "product-price-2",
    //         price: "Rs.12,000",
    //         card_id: "card-button-2"
    //     },
    //     {
    //         img_src: "/images/sup-1.png",
    //         name_id: "product-name-3",
    //         name: "On|Gold Standard Whey Protein",
    //         description_id: "product-description-3",
    //         description: "2.27kg , Double Milk Chocolate",
    //         price_id: "product-price-3",
    //         price: "Rs.12,000",
    //         card_id: "card-button-3"
    //     },
    //     {
    //         img_src: "/images/sup-1.png",
    //         name_id: "product-name-4",
    //         name: "On|Gold Standard Whey Protein",
    //         description_id: "product-description-4",
    //         description: "2.27kg , Double Milk Chocolate",
    //         price_id: "product-price-4",
    //         price: "Rs.12,000",
    //         card_id: "card-button-4"
    //     },
    //     {
    //         img_src: "/images/sup-1.png",
    //         name_id: "product-name-4",
    //         name: "On|Gold Standard Whey Protein",
    //         description_id: "product-description-4",
    //         description: "2.27kg , Double Milk Chocolate",
    //         price_id: "product-price-4",
    //         price: "Rs.12,000",
    //         card_id: "card-button-4"
    //     },
    //     {
    //         img_src: "/images/sup-1.png",
    //         name_id: "product-name-4",
    //         name: "On|Gold Standard Whey Protein",
    //         description_id: "product-description-4",
    //         description: "2.27kg , Double Milk Chocolate",
    //         price_id: "product-price-4",
    //         price: "Rs.12,000",
    //         card_id: "card-button-4"
    //     },
    //     {
    //         img_src: "/images/sup-1.png",
    //         name_id: "product-name-5",
    //         name: "On|Gold Standard Whey Protein",
    //         description_id: "product-description-5",
    //         description: "2.27kg , Double Milk Chocolate",
    //         price_id: "product-price-5",
    //         price: "Rs.12,000",
    //         card_id: "card-button-5"
    //     },
    //     {
    //         img_src: "/images/sup-1.png",
    //         name_id: "product-name-6",
    //         name: "On|Gold Standard Whey Protein",
    //         description_id: "product-description-6",
    //         description: "2.27kg , Double Milk Chocolate",
    //         price_id: "product-price-6",
    //         price: "Rs.12,000",
    //         card_id: "card-button-6"
    //     },
    //     {
    //         img_src: "/images/sup-1.png",
    //         name_id: "product-name-7",
    //         name: "On|Gold Standard Whey Protein",
    //         description_id: "product-description-7",
    //         description: "2.27kg , Double Milk Chocolate",
    //         price_id: "product-price-7",
    //         price: "Rs.12,000",
    //         card_id: "card-button-7"
    //     },
    //     {
    //         img_src: "/images/sup-1.png",
    //         name_id: "product-name-8",
    //         name: "On|Gold Standard Whey Protein",
    //         description_id: "product-description-8",
    //         description: "2.27kg , Double Milk Chocolate",
    //         price_id: "product-price-8",
    //         price: "Rs.12,000",
    //         card_id: "card-button-8"
    //     },
    //     {
    //         img_src: "/images/sup-1.png",
    //         name_id: "product-name-9",
    //         name: "On|Gold Standard Whey Protein",
    //         description_id: "product-description-9",
    //         description: "2.27kg , Double Milk Chocolate",
    //         price_id: "product-price-9",
    //         price: "Rs.12,000",
    //         card_id: "card-button-9"
    //     },
    //     {
    //         img_src: "/images/sup-1.png",
    //         name_id: "product-name-9",
    //         name: "On|Gold Standard Whey Protein",
    //         description_id: "product-description-9",
    //         description: "2.27kg , Double Milk Chocolate",
    //         price_id: "product-price-9",
    //         price: "Rs.12,000",
    //         card_id: "card-button-9"
    //     },
    //     {
    //         img_src: "/images/sup-1.png",
    //         name_id: "product-name-10",
    //         name: "On|Gold Standard Whey Protein",
    //         description_id: "product-description-10",
    //         description: "2.27kg , Double Milk Chocolate",
    //         price_id: "product-price-10",
    //         price: "Rs.12,000",
    //         card_id: "card-button-10"
    //     },
    //     {
    //         img_src: "/images/sup-1.png",
    //         name_id: "product-name-11",
    //         name: "On|Gold Standard Whey Protein",
    //         description_id: "product-description-11",
    //         description: "2.27kg , Double Milk Chocolate",
    //         price_id: "product-price-11",
    //         price: "Rs.12,000",
    //         card_id: "card-button-11"
    //     },
    //     {
    //         img_src: "/images/sup-1.png",
    //         name_id: "product-name-12",
    //         name: "On|Gold Standard Whey Protein",
    //         description_id: "product-description-12",
    //         description: "2.27kg , Double Milk Chocolate",
    //         price_id: "product-price-12",
    //         price: "Rs.12,000",
    //         card_id: "card-button-12"
    //     },
    //     {
    //         img_src: "/images/sup-1.png",
    //         name_id: "product-name-13",
    //         name: "On|Gold Standard Whey Protein",
    //         description_id: "product-description-13",
    //         description: "2.27kg , Double Milk Chocolate",
    //         price_id: "product-price-13",
    //         price: "Rs.12,000",
    //         card_id: "card-button-13"
    //     },
    //     {
    //         img_src: "/images/sup-1.png",
    //         name_id: "product-name-14",
    //         name: "On|Gold Standard Whey Protein",
    //         description_id: "product-description-14",
    //         description: "2.27kg , Double Milk Chocolate",
    //         price_id: "product-price-14",
    //         price: "Rs.12,000",
    //         card_id: "card-button-14"
    //     },
    //     {
    //         img_src: "/images/sup-1.png",
    //         name_id: "product-name-15",
    //         name: "On|Gold Standard Whey Protein",
    //         description_id: "product-description-15",
    //         description: "2.27kg , Double Milk Chocolate",
    //         price_id: "product-price-15",
    //         price: "Rs.12,000",
    //         card_id: "card-button-15"
    //     },
    //     {
    //         img_src: "/images/sup-1.png",
    //         name_id: "product-name-16",
    //         name: "On|Gold Standard Whey Protein",
    //         description_id: "product-description-16",
    //         description: "2.27kg , Double Milk Chocolate",
    //         price_id: "product-price-16",
    //         price: "Rs.12,000",
    //         card_id: "card-button-16"
    //     },
    //     {
    //         img_src: "/images/sup-1.png",
    //         name_id: "product-name-17",
    //         name: "On|Gold Standard Whey Protein",
    //         description_id: "product-description-17",
    //         description: "2.27kg , Double Milk Chocolate",
    //         price_id: "product-price-17",
    //         price: "Rs.12,000",
    //         card_id: "card-button-17"
    //     },
    //     {
    //         img_src: "/images/sup-1.png",
    //         name_id: "product-name-18",
    //         name: "On|Gold Standard Whey Protein",
    //         description_id: "product-description-18",
    //         description: "2.27kg , Double Milk Chocolate",
    //         price_id: "product-price-18",
    //         price: "Rs.12,000",
    //         card_id: "card-button-18"
    //     },
    //     {
    //         img_src: "/images/sup-1.png",
    //         name_id: "product-name-19",
    //         name: "On|Gold Standard Whey Protein",
    //         description_id: "product-description-19",
    //         description: "2.27kg , Double Milk Chocolate",
    //         price_id: "product-price-19",
    //         price: "Rs.12,000",
    //         card_id: "card-button-19"
    //     },
    //     {
    //         img_src: "/images/sup-1.png",
    //         name_id: "product-name-20",
    //         name: "On|Gold Standard Whey Protein",
    //         description_id: "product-description-20",
    //         description: "2.27kg , Double Milk Chocolate",
    //         price_id: "product-price-20",
    //         price: "Rs.12,000",
    //         card_id: "card-button-20"
    //     },
    //     {
    //         img_src: "/images/sup-1.png",
    //         name_id: "product-name-21",
    //         name: "On|Gold Standard Whey Protein",
    //         description_id: "product-description-21",
    //         description: "2.27kg , Double Milk Chocolate",
    //         price_id: "product-price-21",
    //         price: "Rs.12,000",
    //         card_id: "card-button-21"
    //     },
    //     {
    //         img_src: "/images/sup-1.png",
    //         name_id: "product-name-22",
    //         name: "On|Gold Standard Whey Protein",
    //         description_id: "product-description-22",
    //         description: "2.27kg , Double Milk Chocolate",
    //         price_id: "product-price-22",
    //         price: "Rs.12,000",
    //         card_id: "card-button-22"
    //     },
    //     {
    //         img_src: "/images/sup-1.png",
    //         name_id: "product-name-23",
    //         name: "On|Gold Standard Whey Protein",
    //         description_id: "product-description-23",
    //         description: "2.27kg , Double Milk Chocolate",
    //         price_id: "product-price-23",
    //         price: "Rs.12,000",
    //         card_id: "card-button-23"
    //     },
    //     {
    //         img_src: "/images/sup-1.png",
    //         name_id: "product-name-24",
    //         name: "On|Gold Standard Whey Protein",
    //         description_id: "product-description-24",
    //         description: "2.27kg , Double Milk Chocolate",
    //         price_id: "product-price-24",
    //         price: "Rs.12,000",
    //         card_id: "card-button-24"
    //     },
    //     {
    //         img_src: "/images/sup-1.png",
    //         name_id: "product-name-25",
    //         name: "On|Gold Standard Whey Protein",
    //         description_id: "product-description-25",
    //         description: "2.27kg , Double Milk Chocolate",
    //         price_id: "product-price-25",
    //         price: "Rs.12,000",
    //         card_id: "card-button-25"
    //     },
    //     {
    //         img_src: "/images/sup-1.png",
    //         name_id: "product-name-26",
    //         name: "On|Gold Standard Whey Protein",
    //         description_id: "product-description-26",
    //         description: "2.27kg , Double Milk Chocolate",
    //         price_id: "product-price-26",
    //         price: "Rs.12,000",
    //         card_id: "card-button-26"
    //     },
    // ]
    let data = [
        {
            img_src: "/images/sup-1.png",
            name_id: "product-name-1",
            name: "On|Gold Standard Whey Protein",
            description_id: "product-description-1",
            description: "2.27kg , Double Milk Chocolate",
            price_id: "product-price-1",
            price: "Rs.12,000",
            card_id: "card-button-1"
        },
        {
            img_src: "/images/sup-2.png",
            name_id: "product-name-2",
            name: "On|Gold Standard Whey Protein",
            description_id: "product-description-2",
            description: "2.27kg , Double Milk Chocolate",
            price_id: "product-price-2",
            price: "Rs.12,000",
            card_id: "card-button-2"
        },
        {
            img_src: "/images/sup-3.jpeg",
            name_id: "product-name-3",
            name: "On|Gold Standard Whey Protein",
            description_id: "product-description-3",
            description: "2.27kg , Double Milk Chocolate",
            price_id: "product-price-3",
            price: "Rs.12,000",
            card_id: "card-button-3"
        },
        {
            img_src: "/images/sup-4.jpg",
            name_id: "product-name-4",
            name: "Whey Protein",
            description_id: "product-description-4",
            description: "Nitro Tech Whey peptides & Isolate 2Lb",
            price_id: "product-price-4",
            price: "Rs.6,800",
            card_id: "card-button-4"
        },
        {
            img_src: "/images/sup-5.png",
            name_id: "product-name-5",
            name: "On|Gold Standard Whey Protein",
            description_id: "product-description-5",
            description: "2.27kg , Double Milk Chocolate",
            price_id: "product-price-5",
            price: "Rs.12,000",
            card_id: "card-button-5"
        },
        {
            img_src: "/images/sup-6.jpg",
            name_id: "product-name-6",
            name: "Whey Protein",
            description_id: "product-description-6",
            description: "MuscleTech Phase8 Platinum 8 Hour Protein 4.5Lb",
            price_id: "product-price-6",
            price: "Rs.13,700",
            card_id: "card-button-6"
        },
        {
            img_src: "/images/sup-7.jpg",
            name_id: "product-name-7",
            name: "Whey Protein",
            description_id: "product-description-7",
            description: "MuscleTech Whey Protein 4Lb",
            price_id: "product-price-7",
            price: "Rs.12,750",
            card_id: "card-button-7"
        },
        {
            img_src: "/images/sup-8.jpg",
            name_id: "product-name-8",
            name: "Mass Gainer",
            description_id: "product-description-8",
            description: "Kevin Levorne Signature series Gold Super Mass 7kg",
            price_id: "product-price-8",
            price: "Rs.18,500",
            card_id: "card-button-8"
        },
        {
            img_src: "/images/sup-9.jpg",
            name_id: "product-name-9",
            name: "Mass Gainer",
            description_id: "product-description-9",
            description: "Carnivor Mass 6Lb",
            price_id: "product-price-9",
            price: "Rs.10,500",
            card_id: "card-button-9"
        },
        {
            img_src: "/images/sup-10.jpg",
            name_id: "product-name-10",
            name: "Mass Gainer",
            description_id: "product-description-10",
            description: "Carnivor Mass 10Lb",
            price_id: "product-price-10",
            price: "Rs.16,500",
            card_id: "card-button-10"
        },
        {
            img_src: "/images/sup-11.png",
            name_id: "product-name-11",
            name: "Mass Gainer",
            description_id: "product-description-11",
            description: "Universal Gain Fast 13Lb",
            price_id: "product-price-11",
            price: "Rs.14,000",
            card_id: "card-button-11"
        },
        {
            img_src: "/images/sup-12.jpg",
            name_id: "product-name-12",
            name: "Fat Burner",
            description_id: "product-description-12",
            description: "JNX Ripped 30 Servings",
            price_id: "product-price-12",
            price: "Rs.12,000",
            card_id: "card-button-12"
        },
        {
            img_src: "/images/sup-13.jpg",
            name_id: "product-name-13",
            name: "Fat Burner",
            description_id: "product-description-13",
            description: "Lipo-6 Hardcore",
            price_id: "product-price-13",
            price: "Rs.12,800",
            card_id: "card-button-13"
        }
    ]
    window.products = [];  //global array
    window.cart_value = 0; //global variable
    window.previous_length = 0;
    window.visited = false;
    function changeInnerHtml(elementPath, newText) {
        $(elementPath).fadeOut(500, function () {
            $(this).html(newText).fadeIn(500);
        });
    }

    data.forEach((element) => {
        $('#main-div').append(`<div class="card  profile-card profile-card-1">
        <div class="card-img-block">
          <img
            id="img"
            class="card-img-top"
            src=${element.img_src}
            alt="Card image cap"
          />
        </div>
        <div class="card-body card-custom pt-0">
          <h4 id=${element.name_id} class="card-title">${element.name}</h4>
          <p id=${element.description_id} class="card-text">${element.description}</p>
          <div class="d-flex">
            <span
              id=${element.price_id}
              class="me-auto fw-bolder font-monospace fs-3">${element.price}</span>
            <button
              id=${element.card_id}
              type="button"
              class="btn btn-primary btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              ADD TO CART
            </button>
          </div>
        </div>  
      </div>
      `)
    })

    $('#card-button-1').click(() => {
        changeInnerHtml('#badge', ++window.cart_value); //cart value updated
        let obj = {
            name: $('#product-name-1').html(),
            description: $('#product-description-1').html(),
            price: $('#product-price-1').html()
        }
        window.products.push(obj);
        // console.log(window.products);

    });
    $('#card-button-2').click(() => {
        changeInnerHtml('#badge', ++window.cart_value);
        let obj = {
            name: $('#product-name-2').html(),
            description: $('#product-description-2').html(),
            price: $('#product-price-2').html()
        }
        window.products.push(obj);
        // console.log(window.products);
    });
    $('#card-button-3').click(() => {
        changeInnerHtml('#badge', ++window.cart_value);
        let obj = {
            name: $('#product-name-3').html(),
            description: $('#product-description-3').html(),
            price: $('#product-price-3').html()
        }
        window.products.push(obj);
        // console.log(window.products);
    });
    $('#card-button-4').click(() => {
        changeInnerHtml('#badge', ++window.cart_value);
        let obj = {
            name: $('#product-name-4').html(),
            description: $('#product-description-4').html(),
            price: $('#product-price-4').html()
        }
        window.products.push(obj);
        // console.log(window.products);
    });
    $('#card-button-5').click(() => {
        changeInnerHtml('#badge', ++window.cart_value);
        let obj = {
            name: $('#product-name-5').html(),
            description: $('#product-description-5').html(),
            price: $('#product-price-5').html()
        }
        window.products.push(obj);
        // console.log(window.products);
    });
    // $('#card-button-4').click(() => {
    //     changeInnerHtml('#badge', ++window.cart_value);
    //     let obj = {
    //         name: $('#product-name-4').html(),
    //         description: $('#product-description-4').html(),
    //         price: $('#product-price-4').html()
    //     }
    //     window.products.push(obj);
    //     console.log(window.products);
    // });
    // $('#card-button-5').click(() => {
    //     changeInnerHtml('#badge', ++window.cart_value);
    //     let obj = {
    //         name: $('#product-name-5').html(),
    //         description: $('#product-description-5').html(),
    //         price: $('#product-price-5').html()
    //     }
    //     window.products.push(obj);
    //     console.log(window.products);
    // });
    $('#card-button-6').click(() => {
        changeInnerHtml('#badge', ++window.cart_value);
        let obj = {
            name: $('#product-name-6').html(),
            description: $('#product-description-6').html(),
            price: $('#product-price-6').html()
        }
        window.products.push(obj);
        console.log(window.products);
    });
    $('#card-button-7').click(() => {
        changeInnerHtml('#badge', ++window.cart_value);
        let obj = {
            name: $('#product-name-7').html(),
            description: $('#product-description-7').html(),
            price: $('#product-price-7').html()
        }
        window.products.push(obj);
        console.log(window.products);
    });
    $('#card-button-8').click(() => {
        changeInnerHtml('#badge', ++window.cart_value);
        let obj = {
            name: $('#product-name-8').html(),
            description: $('#product-description-8').html(),
            price: $('#product-price-8').html()
        }
        window.products.push(obj);
        console.log(window.products);
    });
    $('#card-button-9').click(() => {
        changeInnerHtml('#badge', ++window.cart_value);
        let obj = {
            name: $('#product-name-9').html(),
            description: $('#product-description-9').html(),
            price: $('#product-price-9').html()
        }
        window.products.push(obj);
        console.log(window.products);
    });
    $('#card-button-10').click(() => {
        changeInnerHtml('#badge', ++window.cart_value);
        let obj = {
            name: $('#product-name-10').html(),
            description: $('#product-description-10').html(),
            price: $('#product-price-10').html()
        }
        window.products.push(obj);
        console.log(window.products);
    });
    $('#card-button-11').click(() => {
        changeInnerHtml('#badge', ++window.cart_value);
        let obj = {
            name: $('#product-name-11').html(),
            description: $('#product-description-11').html(),
            price: $('#product-price-11').html()
        }
        window.products.push(obj);
        console.log(window.products);
    });
    $('#card-button-12').click(() => {
        changeInnerHtml('#badge', ++window.cart_value);
        let obj = {
            name: $('#product-name-12').html(),
            description: $('#product-description-12').html(),
            price: $('#product-price-12').html()
        }
        window.products.push(obj);
        console.log(window.products);
    });
    $('#card-button-13').click(() => {
        changeInnerHtml('#badge', ++window.cart_value);
        let obj = {
            name: $('#product-name-13').html(),
            description: $('#product-description-13').html(),
            price: $('#product-price-13').html()
        }
        window.products.push(obj);
        console.log(window.products);
    });
    $('#card-button-14').click(() => {
        changeInnerHtml('#badge', ++window.cart_value);
        let obj = {
            name: $('#product-name-14').html(),
            description: $('#product-description-14').html(),
            price: $('#product-price-14').html()
        }
        window.products.push(obj);
        console.log(window.products);
    });
    $('#card-button-15').click(() => {
        changeInnerHtml('#badge', ++window.cart_value);
        let obj = {
            name: $('#product-name-15').html(),
            description: $('#product-description-15').html(),
            price: $('#product-price-15').html()
        }
        window.products.push(obj);
        console.log(window.products);
    });
    $('#card-button-16').click(() => {
        changeInnerHtml('#badge', ++window.cart_value);
        let obj = {
            name: $('#product-name-16').html(),
            description: $('#product-description-16').html(),
            price: $('#product-price-16').html()
        }
        window.products.push(obj);
        console.log(window.products);
    });
    $('#card-button-17').click(() => {
        changeInnerHtml('#badge', ++window.cart_value);
        let obj = {
            name: $('#product-name-17').html(),
            description: $('#product-description-17').html(),
            price: $('#product-price-17').html()
        }
        window.products.push(obj);
        console.log(window.products);
    });
    $('#card-button-18').click(() => {
        changeInnerHtml('#badge', ++window.cart_value);
        let obj = {
            name: $('#product-name-18').html(),
            description: $('#product-description-18').html(),
            price: $('#product-price-18').html()
        }
        window.products.push(obj);
        console.log(window.products);
    });
    $('#card-button-19').click(() => {
        changeInnerHtml('#badge', ++window.cart_value);
        let obj = {
            name: $('#product-name-19').html(),
            description: $('#product-description-19').html(),
            price: $('#product-price-19').html()
        }
        window.products.push(obj);
        console.log(window.products);
    });
    $('#card-button-20').click(() => {
        changeInnerHtml('#badge', ++window.cart_value);
        let obj = {
            name: $('#product-name-20').html(),
            description: $('#product-description-20').html(),
            price: $('#product-price-20').html()
        }
        window.products.push(obj);
        console.log(window.products);
    });
    $('#card-button-21').click(() => {
        changeInnerHtml('#badge', ++window.cart_value);
        let obj = {
            name: $('#product-name-21').html(),
            description: $('#product-description-21').html(),
            price: $('#product-price-21').html()
        }
        window.products.push(obj);
        console.log(window.products);
    });
    $('#card-button-22').click(() => {
        changeInnerHtml('#badge', ++window.cart_value);
        let obj = {
            name: $('#product-name-22').html(),
            description: $('#product-description-22').html(),
            price: $('#product-price-22').html()
        }
        window.products.push(obj);
        console.log(window.products);
    });
    $('#card-button-23').click(() => {
        changeInnerHtml('#badge', ++window.cart_value);
        let obj = {
            name: $('#product-name-23').html(),
            description: $('#product-description-23').html(),
            price: $('#product-price-23').html()
        }
        window.products.push(obj);
        console.log(window.products);
    });
    $('#card-button-24').click(() => {
        changeInnerHtml('#badge', ++window.cart_value);
        let obj = {
            name: $('#product-name-24').html(),
            description: $('#product-description-24').html(),
            price: $('#product-price-24').html()
        }
        window.products.push(obj);
        console.log(window.products);
    });
    $('#card-button-25').click(() => {
        changeInnerHtml('#badge', ++window.cart_value);
        let obj = {
            name: $('#product-name-25').html(),
            description: $('#product-description-25').html(),
            price: $('#product-price-25').html()
        }
        window.products.push(obj);
        console.log(window.products);
    });
    $('#card-button-26').click(() => {
        changeInnerHtml('#badge', ++window.cart_value);
        let obj = {
            name: $('#product-name-26').html(),
            description: $('#product-description-26').html(),
            price: $('#product-price-26').html()
        }
        window.products.push(obj);
        console.log(window.products);
    });

    // for (let i = 0; i < window.products.length; i++) {
    //     console.log(window.products[i]);
    //     // console.log(window.products[i].name);
    //     // console.log(window.products[i].description)
    //     // console.log(window.products[i].price)
    // }


    // Cart Jquery Code
    $('#cart').click(() => {

        $('.form-checkout').addClass('d-none');
        $('.alert-d').addClass('d-none');
        $('#main-div').addClass('d-none');
        if (window.products.length != 0) {

            $('#cart-details').removeClass('d-none');
            $('#cart-empty').addClass('d-none');

            if (window.previous_length != window.products.length) {
                for (let i = 0; i < window.previous_length; i++) {
                    $(`.item-${i}`).addClass('d-none');
                }
                window.visited = false;
            }
            if (window.visited === false) {
                window.products.forEach((element, index) => {
                    $('#list1').append(`<li  class="bg-light item-${index} ms-3 my-2">${element.name}</li>`);
                    $('#list2').append(`<li  class="bg-light item-${index} my-2">${element.description}</li>`);
                    $('#list3').append(`<li  class="bg-light item-${index} my-2">${element.price}</li>`);
                });
                window.visited = true;
                window.previous_length = window.products.length;
            }
            $('#bottom-btn').removeClass('d-none');
        }
        else {
            $('#alert-d').removeClass('d-none');
            setTimeout(() => {
                $('#alert-d').addClass('d-none');
                $('#main-div').removeClass('d-none');

            }, 3000)
            // $('#btn-2').removeClass('d-none');
        }
    });

    $('#btn-2').click((event) => {
        event.preventDefault();
        $('#cart-details').addClass('d-none');
        $('#cart-empty').addClass('d-none');
        $('#bottom-btn').addClass('d-none');
        $('#main-div').removeClass('d-none');

    });
    $('#Confirm-btn').click((event) => {
        event.preventDefault();
        $('.form-checkout').toggleClass('d-none');
        // $('#cart-empty').addClass('d-none');
        // $('#cart-details').addClass('d-none');
        // $('#bottom-btn').removeClass('d-none');
        // $('#main-div').removeClass('d-none');

    });
    $('#order-btn').click(async (event) => {
        event.preventDefault();
        $('.form-checkout').removeClass('d-none');
        const response = await fetch(`http://localhost:3000/postorder`, {
            method: 'POST',
            body: JSON.stringify({
                name: $('#name').val(),
                phone: $('#phone').val(),
                address: $('#address').val(),
                email: $('#email').val(),
                Order_details: window.products
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        // console.log(response.status);
        if (response.status === 200) {
            const response = await fetch(`http://localhost:3000/SpecificUserOrder/${$('#name').val()}`, {
                method: 'GET'
            });
            const data = await response.json();
            if (response.status === 200) {
                $('#cart-details').addClass('d-none');
                $('#bottom-btn').addClass('d-none');
                $('.form-checkout').addClass('d-none');
                $('.Order_id').html(`${data[data.length - 1]._id}`);
                $('.customer_name').html(`${data[data.length - 1].name}`);
                $('.customer_address').html(`${data[data.length - 1].address}`);
                $('.customer_phone').html(`${data[data.length - 1].phone}`);
                $('.customer_email').html(`${data[data.length - 1].email}`);
                data[data.length - 1].Order_details.forEach((element) => {
                    $('#name_list').append(`<li  class="bg-light ms-3 my-2">${element.name}</li>`);
                    $('#description_list').append(`<li  class="bg-light my-2">${element.description}</li>`);
                    $('#price_list').append(`<li  class="bg-light  my-2">${element.price}</li>`);
                });
                $('#alert-success').removeClass('d-none');
                $('.order-card').removeClass('d-none');

                // $('#alert-order-backend').removeClass('d-none');
            }
            else {

            }
            // setTimeout(() => {
            //     window.location.reload();
            // }, 3000)
        }
        // $('#cart-empty').addClass('d-none');
        // $('#cart-details').addClass('d-none');
        // $('#bottom-btn').removeClass('d-none');
        // $('#main-div').removeClass('d-none');

    });


});

