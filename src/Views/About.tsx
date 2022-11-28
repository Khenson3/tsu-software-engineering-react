import "../App.css";


function About() {
    return (
      // <div>
      //   <div className="tile is-vertical is-danger">
      //     <div className="tile is-child notification is-primary">
      //       <p className="title">titleeeeeee</p>
      //     </div>
      //   </div>
      // </div>
      <body>
<div className="tile is-ancestor">
    <div className="tile is-parent">
        <div className="tile is-child">
          <button>Button</button>
          <h1>title</h1>
        </div>    
    </div>
</div>
<div className="tile is-ancestor">
    <div className="tile is-parent">
        <div className="tile is-child">
          <h1>
            Client info
          </h1>
        </div>    
    </div>
</div>
<div className="tile is-ancestor">
    <div className="tile is-parent">
        <div className="tile is-child">
          <button>button</button>
        <h1>title</h1>
        </div>    
    </div>
</div>
      </body>

    );
}

export default About;