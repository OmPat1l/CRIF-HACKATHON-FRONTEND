var data1 = [{ company: 'Tesla', risk: true, points: 20, userfeed: 2, sentimental: -0.6, risk: 25, ratio: '30%', stock: -1, }, { company: 'Tata', risk: false, points: 26, userfeed: 2, sentimental: -0.6, risk: 25, ratio: '30%', stock: -1, }, { company: 'Amazon', risk: true, points: 22, userfeed: 2, sentimental: -0.6, risk: 25, ratio: '30%', stock: -1, },]


document.querySelector('.innerwork').innerHTML = "";
for (let i = 0; i < data1.length; i++) {
    if (data1[i].points > 20) {
        document.querySelector('.innerwork').innerHTML += `
 
        <div class="plan basic">
        <div class="plan-inner">
            <div class="hot">Trustable</div>
            <div class="entry-title">
                <h3>${data1[i].company}</h3>
                <div class="price">${data1[i].points}<span>Credits</span>
                </div>
            </div>
            <div class="entry-content">
                <ul>
                    <li><strong>1x</strong> option 1</li>
                    <li><strong>2x</strong> option 2</li>
                    <li><strong>3x</strong> option 3</li>
                    <li><strong>Free</strong> option 4</li>
                    <li><strong>Unlimited</strong> option 5</li>
                </ul>
            </div>
            <div class="btn">
                <a href="#">Order Now</a>
            </div>
        </div>
    </div>
        `

    } else {
        document.querySelector('.innerwork').innerHTML += ` <div class="plan ultimite">
        <div class="plan-inner">
            <div class="entry-title">
                <h3>Unlimited Wash</h3>
                <div class="price">$100<span>/PER CAR</span>
                </div>
            </div>
            <div class="entry-content">
                <ul>
                    <li><strong>1x</strong> option 1</li>
                    <li><strong>2x</strong> option 2</li>
                    <li><strong>3x</strong> option 3</li>
                    <li><strong>Free</strong> option 4</li>
                    <li><strong>Unlimited</strong> option 5</li>
                </ul>
            </div>
            <div class="btn">
                <a href="#">Order Now</a>
            </div>
        </div>
    </div>
`

    }



}
