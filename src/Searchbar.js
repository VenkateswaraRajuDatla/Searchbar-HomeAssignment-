import React, {Component, Fragment} from 'react';

const Results = (props) => {
    return (
        <div className="resultsfragement">
            {props.matchingResults.length > 0 ?
                <div className="results">
                    {
                      props.matchingResults.map(item =>
                        <div className="selectedResult"
                            key={item.name}>
                            <p>{item.name}</p>
                            <span>Type : {item.type.toLowerCase()}</span>
                            <p><a href={item.url}>Visit the site</a></p>
                        </div>)
                      }
                </div>
              :<p>Sorry, No results found. Try with different name!!</p>
            }
        </div>
    )
}

const MatchedList = (props) => {
    return (
        <Fragment>
            {props.displayDropdown && props.recommendedList.length > 0 &&
                <div className="recommended-list">
                    {props.recommendedList.map((item, index) =>
                        <p key={index} id={index} className={props.Cursorposition === index ? 'choosen' : "non-choosen"}
                            onClick={props.choose}>
                         {item.name}</p>
                      )
                    }
                </div>
            }
        </Fragment>
    )
}

class Searchbar extends Component{
  constructor(props){
    super(props);
    this.state ={
      displayDropdown:false,
      displayBankResults:false,
      matchingResults:[],
      recommendedList:[],
      Cursorposition:0,
      userInput:""
    }
  }

  chooseInstitute = (evt) => {
        const selectedInst = evt.target.innerText;
        this.setState({
            userInput: selectedInst,
            displayDropdown: false,
            displayBankResults: true
        })
        this.displayResults(selectedInst);
    }

  userInputChange = (evt) => {
        this.setState(
              {
                displayDropdown: true,
                displayBankResults: false
              });
        this.displayResults(evt.target.value)
    }

  displayResults = (specificInst) =>{
      if(specificInst){
        const matchingResults = this.props.data.filter(bank => bank.name.toLowerCase() === specificInst.toLowerCase());
        const recommendedList = this.props.data.filter(bank => bank.name.toLowerCase().indexOf(specificInst.toLowerCase()) > -1);
        this.setState({
                matchingResults,
                recommendedList,
                userInput: specificInst
            })
      }
      else{
          this.setState({
            recommendedList:[],
            matchingResults:[],
            displayDropdown:false,
            userInput:"",
            Cursorposition:0
          })
      }
  }

  keyChange = (evt) => {
        let pos = document.getElementById(this.state.Cursorposition);
        if (evt.keyCode === 38 && this.state.Cursorposition > 0)
         {
            this.setState(prevState => ({
                Cursorposition: prevState.Cursorposition - 1
            }))
            pos.scrollIntoView({ behavior: 'smooth' });
         }
        else if (evt.keyCode === 40 && this.state.Cursorposition < this.state.recommendedList.length - 1) {
            this.setState(prevState => ({
                Cursorposition: prevState.Cursorposition + 1
            }))
            pos.scrollIntoView({ behavior: 'smooth' });
        }
        else if (evt.keyCode === 13) {
            if (pos)
             {
                let selectedBank = pos.innerText;
                this.setState({
                    displayDropdown: false,
                    displayBankResults: true
                })
                this.displayResults(selectedBank);
            }
            else {
                this.setState({ displayBankResults: true })
            }
        }
    }

  render(){
    return(
      <Fragment>
      <input type="text" placeholder="Search for a Institution"
              className="searchbar"
              onChange={this.userInputChange}
              value={this.state.userInput}
              onKeyDown={this.keyChange}
              />
        <MatchedList
            recommendedList={this.state.recommendedList}
            displayDropdown={this.state.displayDropdown}
            Cursorposition={this.state.Cursorposition}
            choose={this.chooseInstitute}
        />
      {this.state.displayBankResults && <Results matchingResults={this.state.matchingResults} />}
      </Fragment>
    );
  }
}

export default Searchbar;
