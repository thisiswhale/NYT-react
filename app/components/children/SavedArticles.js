import React from "react";

import helpers from "../utils/helpers";
class SavedArticles extends React.Component {

  // The moment the page renders get the Main
  // componentDidMount() {
  //   // Get the saved articles from db
  //   helpers.getSaved().then(function(response) {
  //     console.log(response);
  //     if (response !== this.state.history) {
  //       console.log("Saved", response.data);
  //       //this.setState({saved: response.data});
  //     }
  //   }.bind(this));
  // }

  render(){
    return(
      // <!-- This panel will initially be made up of a panel and wells for each of the articles retrieved -->
      <div className="panel panel-primary">

        {/* <!-- Panel Heading for the retrieved articles box --> */}
        <div className="panel-heading">
          <h3 className="panel-title"><strong><i className="fa fa-table"></i>  Saved Articles</strong></h3>
        </div>

        {/* <!-- This main panel will hold each of the resulting articles --> */}
        <div className="panel-body" id="add-section">
          This is a test
          {/* {this.props.saved.map(data=>{
            return(
              <div className="well" key={data.id_}>
                <a href={data.url}><h3 className="articleHeadline">
                  <span className="label label-primary">1</span><strong> {data.title}</strong>
                  <button
                    type="button"
                    class="btn btn-success pull-right" id="saved-remove"><i class="fa fa-search"></i> Remove Article</button>
                </h3>
              </a>
              </div>
            );
          })} */}
        </div>
      </div>

    );
  }
}

export default SavedArticles;
