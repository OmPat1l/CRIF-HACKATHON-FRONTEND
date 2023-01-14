// var data1 = [{ company: 'Tesla', risk: true, points: 20, userfeed: 2, sentimental: -0.6, riske: 25, ratio: '30%', stock: -1, source: "https://www.tesla.com/" }, { company: 'Tata', risk: false, points: 26, userfeed: 2, sentimental: -0.6, riske: 25, ratio: '30%', stock: -1, source: "https://www.tata.com/" }, { company: 'Amazon', risk: true, points: 22, userfeed: 2, sentimental: -0.6, riske: 25, ratio: '30%', stock: -1, source: "https://www.amazon.in/" },]

// //this fil is or the UI cards
// document.querySelector('.innerwork').innerHTML = "";
// for (let i = 0; i < data1.length; i++) {
//     if (data1[i].points > 20) {
//         document.querySelector('.innerwork').innerHTML += `

//         <div class="plan basic">
//         <div class="plan-inner">
//             <div class="hot">Trustable</div>
//             <div class="entry-title">
//                 <h3>${data1[i].company}</h3>
//                 <div class="price">${data1[i].points}<span>CREDITS</span>
//                 </div>
//             </div>
//             <div class="entry-content">
//                 <ul>
//                     <li><strong>User Feedback:</strong> ${data1[i].userfeed}</li>
//                     <li><strong>Sentimental Analysis: </strong> ${data1[i].sentimental}</li>
//                     <li><strong>Risk entity Count: </strong> ${data1[i].riske}</li>
//                     <li><strong>Risk Ratio: </strong> ${data1[i].ratio}</li>
//                     <li><strong>Stock Prices: </strong> ${data1[i].stock}</li>
//                 </ul>
//             </div>
//             <div class="btn">
//                 <a href="${data1[i].source}">${data1[i].company}</a>
//             </div>
//         </div>
//     </div>
//         `

//     } else {
//         document.querySelector('.innerwork').innerHTML += ` <div class="plan ultimite">
//         <div class="plan-inner">
//             <div class="entry-title">
//                 <h3>${data1[i].company}</h3>
//                 <div class="price">${data1[i].points}<span>CREDITS</span>
//                 </div>
//             </div>
//             <div class="entry-content">
//                 <ul>
//                 <li><strong>User Feedback:</strong> ${data1[i].userfeed}</li>
//                 <li><strong>Sentimental Analysis: </strong> ${data1[i].sentimental}</li>
//                 <li><strong>Risk entity Count: </strong> ${data1[i].riske}</li>
//                 <li><strong>Risk Ratio: </strong> ${data1[i].ratio}</li>
//                 <li><strong>Stock Prices: </strong> ${data1[i].stock}</li>
//                 </ul>
//             </div>
//             <div class="btn">
//                 <a href="${data1[i].source}">${data1[i].company}</a>
//             </div>
//         </div>
//     </div>
// `

//     }

// }
