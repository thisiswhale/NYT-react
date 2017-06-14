// Include React
import React from "react";

// Here we include all of the sub-components
import Form from "./children/Form";
import Results from "./children/Results";
import SavedArticles from "./children/SavedArticles";
import Navbar from "./children/Navbar";

// Creating the Main component
class Main extends React.Component {

  // Here we render the function
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">
          {/*Jumbotron for Title */}
          <div className="jumbotron" style={styles.jumbotron}>
            <h1 className="text-center">
              <strong>
                <i className="fa fa-newspaper-o"></i>
                NYT Scraper React</strong>
            </h1>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <br/> {/* First panel is for handling the search parameters*/}
              {this.props.children}

            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  jumbotron: {
    backgroundColor: '#20315A',
    color: "white"
  }
}
// Export the component back for use in other files
export default Main;
