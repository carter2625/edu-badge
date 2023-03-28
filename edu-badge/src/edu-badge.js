import { LitElement, html, css } from 'lit';



class EduBadge extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
  @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);

 * {
	 box-sizing: border-box;
}

 .cardTitle {
	 text-decoration: none;
}
 .title {
	 font-family: 'Open Sans', sans-serif;
	 font-weight: 300;
   -webkit-font-smoothing: antialiased;
	 -moz-osx-font-smoothing: grayscale;
}



 .wrapper {
   display: inline-block;
	 width: 35%;
	 position: relative;
	 overflow: hidden;
	 border-radius: 10px;
	 border: 2px solid #fff;
	 border-color: #3e98d3;
}
  .data {
	 float: right;
	 width: 60%;
	 height: 100%;
	 border-left: 20px solid  #3e98d3;
}
 .data .content {
	 padding: 10px;
	 position: relative;
	 z-index: 1;
}
 .author {
	 font-size: 15px;
	 background-color: #cfe6f4;
   margin-left: 0px;
   text-align: left;
   text-indent: 2%;
   height: 40px;
	 border-left: 20px solid  #3e98d3;
   font-family: sans-serif;
  
}
 .title {
	 margin-top: 20px;
}
 .text {
	 height: 20px;
	 margin: 0;
   font-family: sans-serif;
}

 .image {
	 float: right;
	 width: 40%;
}
 .book-image {
	 width: 60%;
	 display: block;
	 height: 80%;
	 margin-top: 60px;
   margin-left: 45px;
	 margin-bottom: auto;
}


  `;

  constructor() {
    super();
    this.name = "APA Style Citations:   Introduction";
    this.creator = "Creator: Victoria Bush";
    this.image = "https://badgesapp.psu.edu/uploads/badge/image/337/APA_Style.png"
    this.department = "Technology and Information"


  }

  render() {
    return html`
         <div class="wrapper">
    <div class="image">
      <img class="book-image"     src="${this.image}"/>
     </div>
     
     <div class="author">
      
     ${this.department}
    
     </div>
     <div class="data">
       <div class="content">
         <h1 class="title">${this.name}</h1>
         <p class="text">${this.creator}</p>
       </div>
     </div>  
   </div>
 </div>
    `;
  }
}

customElements.define('edu-badge', EduBadge);