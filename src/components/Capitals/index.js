import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

const CountryItem = props => {
  const {details} = props
  const {id, capitalDisplayText} = details //  id,

  return (
    <option className="option" value={id}>
      {capitalDisplayText}
    </option>
  )
}

// Write your code here

class Capitals extends Component {
  firstObj = countryAndCapitalsList[0]

  state = {
    activeCapitalId: this.firstObj.id,
  }

  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalId} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapitalId,
    )

    return activeCountryAndCapital.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry(activeCapitalId)
    return (
      <div className="page_container">
        <div className="content_container">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="drop_down_container">
            <select
              className="drop_down"
              onChange={this.onChangeCapital}
              value={activeCapitalId}
            >
              {countryAndCapitalsList.map(eachObj => (
                <CountryItem key={eachObj.id} details={eachObj} />
              ))}
            </select>
            <p className="drop_down_para"> is capital of which country?</p>
          </div>
          <p className="displayCountryPara">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
