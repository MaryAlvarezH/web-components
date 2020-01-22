// class EpyButton extends HTMLElement {
//   constructor() {
//     super();
//   }
//   connectedCallback() {
//     console.log("this", this);
//     console.log("epyClass", this.getAttribute("epyclass"));
//     this.getAttribute();
//     let shadowRoot = this.attachShadow({ mode: "open" });
//     shadowRoot.innerHTML = `
//       <style>
//       @import "../../node_modules/epy-scss/dist/css/epy.css"
//       </style>

//         <button class="btn btn-default">
//          <slot name="btnContent"></slot>
//         </button>

//     `;
//   }
// }
// customElements.define("epy-button", EpyButton);
// // import "../../node_modules/epy-scss/dist/css/epy.css"

// // class EpyButton extends HTMLElement {
// //   constructor() {
// //     super();

// //     let btn = document.createElement("button");

// //     btn.innerHTML = "Click Me";
// //     document.body.appendChild(btn);

// //     let epyclass = this.getAttribute("epyClass");
// //     console.log("epyclass", epyclass);
// //     btn.classList.add(epyclass);
// //     btn.classList.add("btn");
// //     btn.classList.add("btn-primary");
// //   }

// //   connectedCallback() {
// //     let shadowRoot = this.attachShadow({ mode: "open" });
// //     shadowRoot.innerHTML = `
// //           <style>
// //            @import "../../node_modules/epy-scss/dist/css/epy.css"
// //           </style>`;
// //   }
// // }
// // customElements.define("epy-button", EpyButton);
