import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    isLoading: true,
    storedDogs: [],
    lastImage: '',
    inputText: '',
  }

  componentDidMount() {
    if (!JSON.parse(localStorage.getItem('dogs'))) {
      localStorage.setItem('dogs', JSON.stringify([]));
    }
    const savedDogs = JSON.parse(localStorage.getItem('dogs'));
    if (savedDogs.length > 0) {
      const { image, name } = savedDogs[savedDogs.length - 1];
      this.setState({
        lastImage: image,
        inputText: name,
        isLoading: false,
      });
    } else {
      this.fetchImages();
    }
  }

  shouldComponentUpdate(_nextProp, nextState) {
    if (nextState.lastImage.includes('terrier')) {
      return false;
    }
    return true;
  }

  componentDidUpdate(_prevProp, prevState) {
    const { lastImage } = this.state;
    if (lastImage !== prevState.lastImage) {
      const raca = lastImage.split('/')[4];
      alert(`${raca}`);
    }
  }

  fetchImages = () => {
    this.setState({ isLoading: true }, async () => {
      const url = 'https://dog.ceo/api/breeds/image/random';
      const response = await fetch(url);
      const dataJson = await response.json();
      this.setState({ lastImage: dataJson.message }, () => {
        this.setState({ isLoading: false });
      });
    });
  }

  handleFetch = () => {
    this.fetchImages();
    // this.setState((prevState) => ({
    //   storedDogs: [...prevState.storedDogs, prevState.lastImage],
    // }));
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ inputText: value });
  }

  handleSave = () => {
    const { inputText, lastImage } = this.state;

    this.setState((prevState) => ({
      storedDogs: [...prevState.storedDogs, { image: lastImage, name: inputText }],
      inputText: '',
    }), () => {
      const { storedDogs } = this.state;
      localStorage.setItem('dogs', JSON.stringify(storedDogs));
    });
  }

  render() {
    const { isLoading, storedDogs, lastImage, inputText } = this.state;
    return (
      <div className="App">
        <h1>Dogs image</h1>
        <div>
          <button type="button" onClick={ this.handleFetch }>New dog</button>
          <div>
            <input
              type="text"
              placeholder="Dê um nome ao doguinho"
              onChange={ this.handleChange }
              value={ inputText }
            />
            <button type="button" onClick={ this.handleSave }>Save dog</button>
          </div>
        </div>
        {
          isLoading ? <p>Loading...</p> : (
            <div>
              <img src={ lastImage } alt={ lastImage } />
              <p>{ inputText }</p>
            </div>
          )
        }
        <hr />
        <h1>Doguinhos salvos</h1>
        {
          storedDogs
            .map(({ image, name }) => (
              <div key={ image }>
                <img
                  src={ image }
                  alt={ name }
                />
                <p>{ name }</p>
              </div>
            ))
        }
      </div>
    );
  }
}

export default App;
