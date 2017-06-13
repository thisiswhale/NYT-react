// Include React
import React from "react";

// Creating the Results component

class Results extends React.Component{
  // Here we render the function
  render() {
    return (

      // <!-- This panel will initially be made up of a panel and wells for each of the articles retrieved -->
      <div className="panel panel-primary">

        {/* <!-- Panel Heading for the retrieved articles box --> */}
        <div className="panel-heading">
          <h3 className="panel-title"><strong><i className="fa fa-table"></i>Top Articles</strong></h3>
        </div>

        {/* <!-- This main panel will hold each of the resulting articles --> */}
        <div className="panel-body" id="add-section">

          <div class="well" id="article-well-1">
            <h3 class="articleHeadline"><span class="label label-primary">1</span><strong> A Long, Long Look at Obama’s Life, Mostly Before the White House</strong><button type="button" class="btn btn-success pull-right" id="run-search"><i class="fa fa-search"></i> Save</button></h3>
            <h5>By MICHIKO KAKUTANI</h5>
          </div>
          <div class="well" id="article-well-2"><h3 class="articleHeadline"><span class="label label-primary">2</span><strong> Obama Says His Presidential Library Will Be a ‘Hub for the Community’</strong><button type="button" class="btn btn-success pull-right" id="run-search"><i class="fa fa-search"></i> Save</button></h3>
            <h5>By JULIE BOSMAN</h5>
          </div>
          
        </div>
      </div>

    );
  }
}

// Export the component back for use in other files
export default Results;
