import { useState } from 'react';
import './App.css';
import { toAddress, Address } from 'zip-address';

function App() {
  const [address, setAddress] = useState<Address | null>(null);
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    toAddress(inputText).then((address) => {
      setAddress(address);
    });
  };

  return (
    <div className="App">
      <h1>sandbox</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="郵便番号"
          type="text"
          name="zip-code"
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
      <table>
        <tr>
          <td>都道府県:</td>
          <td>{address?.prefecture}</td>
        </tr>
        <tr>
          <td>市区町村:</td>
          <td>{address?.city}</td>
        </tr>
        <tr>
          <td>住所:</td>
          <td>{address?.street}</td>
        </tr>
        <tr>
          <td>都道府県(ｶﾅ):</td>
          <td>{address?.prefectureKana}</td>
        </tr>
        <tr>
          <td>市区町村(ｶﾅ):</td>
          <td>{address?.cityKana}</td>
        </tr>
        <tr>
          <td>住所(ｶﾅ):</td>
          <td>{address?.streetKana}</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
