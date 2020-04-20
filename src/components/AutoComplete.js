import React, { Component } from 'react';
import './AutoComplete.css';
import apiRequest from '../shared/api';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestions: []
    };

    this.textInput = React.createRef();

    this.renderSuggestion = this.renderSuggestion.bind(this);
  }

  textChanged() {
    const value = this.textInput.current.value.trim();

    if (this.state.busy) { return; }

    if (value) {
      this.setState({
        busy: true
      }, () => {
        let searchText = this.textInput.current.value.trim();

        apiRequest(this.props.dataSrc, searchText).then((res) => {
          if (res.status === 'ok') {
            this.setState({
              busy: false,
              suggestions: res.data,
              termSearched: searchText
            });
          } else {
            this.setState({
              busy: false
            });
          }
        });
      });
    } else {
      this.setState({
        busy: false,
        suggestions: []
      });
    }
  }

  renderSuggestion(text, search, key) {
    // Replace all occurences while keeping case
    let remainingText = text;

    while (true) {
      let pos = remainingText.search(new RegExp(search, 'i'));

      if (pos === -1) {
        break;
      }

      pos += text.length - remainingText.length;

      // We must ensure we don't test the same part of the original string to not fall into infinite
      // cycles.
      remainingText = text.slice(pos + search.length, text.length);

      text = text.slice(0, pos) + `<span class="highlight">${text.slice(pos, pos + search.length)}</span>` + remainingText;
    }

    return (
      <p key={key} dangerouslySetInnerHTML={{ __html: text }} />
    );
  }

  render() {
    const { suggestions, termSearched } = this.state;

    return (
      <div className='AutoComplete'>
        <label>Name Search</label>
        <input type='hidden' name={this.props.name} />
        <input type='text' onKeyUp={this.textChanged.bind(this)} placeholder="Start typing a name..." ref={this.textInput} />

        <div name='suggestions'>
          {suggestions.map((sugg, i) => this.renderSuggestion(sugg, termSearched, i))}
        </div>
      </div>
    );
  }
}
