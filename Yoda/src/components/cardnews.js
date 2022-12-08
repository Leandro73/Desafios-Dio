/*
class cardnews extends HTMLElement{
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"})
        shadow.innerHTML = "<h1>Hello World</h1>";
    }
}

customElements.define("card-news", cardnews)
// 1ª criação
*/

// 2ª Redigitação

class cardnews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"})
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");
        
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left")
        
        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");
        
        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");    
        
        const newsImage = document.createElement("img");
        newsImage.src = "assets/yoda.jpg"
        newsImage.alt = "Foto da notícia"
        cardRight.appendChild(newsImage);


        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    style(){
        const style = document.createElement("style");
        style.textContent = `
            .card{
                width: 820px;
                border: 1px solid gray;
                box-shadow: 2px -3px 16px 10px rgba (0,0,0,0,72);
                -webkit-box-shadow: 2px -3px 16px 10px rgba(0,0,0,0.72);
                -moz-box-shadow: 2px -3px 16px 10px rgba (0,0,0,0,72);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            
            .card__left{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 25px;
            }
            
            .card__left > span {
                font-weight: 500;
            }
            
            .card__left >  a {
                margin-top: 15px;
                font-size: 20px;
                color: black;
                text-decoration: none;
                font-weight: 400;
            }
            
            .card__left > p {
                color: rgb(70, 70,70);
                font-size: 18px;
            }
                
        `;

        return style;
    }

}

customElements.define("card-news", cardnews)