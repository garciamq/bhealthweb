import React from 'react';
import Navbar from '../../components/Navbar/Navbar1';
import { Cards, CountryPicker, Chart } from '..'
import { fetchData } from '../../api';
import styles from './CovidUpdate.module.css';
import Footer from '../../Footer';
import image from '../../images/image.png'

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div>

      
      <div class ="nav">
           <Navbar />
           
      <div class="cov" className={styles.container}>
           
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
      </div>
      </div>
      <Footer />
      </div>
      
    );
  }
}

export default App;

