/* eslint-disable no-case-declarations */

const jsonGen = {
  sectionsContainer: document.querySelector('[data-sections-container]'),
  selectSection: document.querySelector('[data-section-select]'),
  addSection: document.querySelector('[data-add-section]'),
  remove: document.querySelectorAll('[data-remove]'),
  generate: document.querySelector('[data-generate]'),

  init() {
    this.render();
  },

  appendSection() {
    const selectSection =
      jsonGen.selectSection.options[jsonGen.selectSection.selectedIndex].value;

    let section;
    switch (selectSection) {
      case 'heading':
        section = `
          <section data-section="${selectSection}" class="section">
            <p class="section__title  pt2  fw6  di">${selectSection}</p>
            <input data-input="text" type="text" value="">
          </section>
        `;
        break;
      case 'paragraph':
        section = `
          <section data-section="${selectSection}" class="section">
            <p class="section__title  pt2  fw6">${selectSection}</p>
            <textarea data-input="text" rows="4" cols="80"></textarea>
          </section>
        `;
        break;
      case 'question':
        section = `
          <section data-section="${selectSection}" class="section">
            <p class="section__title  pt2  fw6">${selectSection}</p>
            <input data-input="text" type="text" value="">
          </section>
        `;
        break;
      case 'answer':
        section = `
          <section data-section="${selectSection}" class="section">
            <p class="section__title  pt2  fw6">${selectSection}</p>
            <textarea data-input="text" rows="4" cols="80"></textarea>
          </section>
        `;
        break;
      case 'bulletList':
        section = `
          <section data-section="${selectSection}" class="section">
            <p class="section__title  pt2  fw6">${selectSection}<span class="pl1  fw5">(10 max)</span></p>
            <input data-input="text" type="text" value="">
            <label>List</label>
            <input data-input="list" type="text" value="">
            <input data-input="list" type="text" value="">
            <input data-input="list" type="text" value="">
            <input data-input="list" type="text" value="">
            <input data-input="list" type="text" value="">
            <input data-input="list" type="text" value="">
            <input data-input="list" type="text" value="">
            <input data-input="list" type="text" value="">
            <input data-input="list" type="text" value="">
            <input data-input="list" type="text" value="">
            <input data-input="list" type="text" value="">
          </section>
        `;
        break;
      case 'numberedList':
        section = `
          <section data-section="${selectSection}" class="section">
            <p class="section__title  pt2  fw6">${selectSection}<span class="pl1  fw5">(10 max)</span></p>
            <input data-input="text" type="text" value="">
            <label>List</label>
            <input data-input="list" type="text" value="">
            <input data-input="list" type="text" value="">
            <input data-input="list" type="text" value="">
            <input data-input="list" type="text" value="">
            <input data-input="list" type="text" value="">
            <input data-input="list" type="text" value="">
            <input data-input="list" type="text" value="">
            <input data-input="list" type="text" value="">
            <input data-input="list" type="text" value="">
            <input data-input="list" type="text" value="">
            <input data-input="list" type="text" value="">
          </section>
        `;
        break;
      case 'soundcloud':
        section = `
          <section data-section="${selectSection}" class="section">
            <p class="section__title  pt2  fw6">${selectSection}</p>
            <label>URL</label>
            <input data-input="url" type="text" value="">
          </section>
        `;
        break;
      case 'youtube':
        section = `
          <section data-section="${selectSection}" class="section">
            <p class="section__title  pt2  fw6">${selectSection}</p>
            <label>URL</label>
            <input data-input="url" type="text" value="">
          </section>
        `;
        break;
      case 'link':
        section = `
          <section data-section="${selectSection}" class="section">
            <p class="section__title  pt2  fw6">${selectSection}</p>
            <select data-input="linkType">
              <option value="Soundcloud">Soundcloud</option>
              <option value="Youtube">Youtube</option>
              <option value="Twitter">Twitter</option>
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
            </select>
            <br />
            <label>text</label>
            <input data-input="text" type="text" value="">
            <br />
            <label>URL</label>
            <input data-input="url" type="url" value="">
          </section>
        `;
        break;
      default:
    }

    jsonGen.sectionsContainer.insertAdjacentHTML('beforeend', section);
  },

  removeSection(elem) {
    const elemVal = elem.getAttribute('data-remove');
    const target = document.querySelector(`data-section="${elemVal}"`);
    // target.parentNode.removeChild(target);
  },

  generateJSON() {
    const dataSections = document.querySelectorAll('[data-section]');
    let json = '{';

    for (let i = 0; i < dataSections.length; i += 1) {
      const thisSection = dataSections[i];
      const type = thisSection.getAttribute('data-section');
      let list;

      let blockComma = ',';
      if ((i + 1) === (dataSections.length)) {
        blockComma = '';
      }

      switch (type) {
        case 'url':
          json += `"${type}": "${thisSection.querySelector('[data-input="text"]').value}"`;
          break;
        case 'title':
          json += `"${type}": "${thisSection.querySelector('[data-input="text"]').value}"`;
          break;
        case 'description':
          json += `"${type}": "${thisSection.querySelector('[data-input="text"]').value}"`;
          break;
        case 'created':
          json += `"${type}": "${thisSection.querySelector('[data-input="text"]').value}"`;
          break;
        case 'img':
          json += `"${type}": "${thisSection.querySelector('[data-input="text"]').value}"`;
          break;
        case 'author':
          const authorSection =
            thisSection.querySelector('[data-input="select"]').options[thisSection.querySelector('[data-input="select"]').selectedIndex].value;
          json += `"${type}": "${authorSection}"`;
          break;
        case 'category':
          const categorySection =
            thisSection.querySelector('[data-input="select"]').options[thisSection.querySelector('[data-input="select"]').selectedIndex].value;
          json += `"${type}": "${categorySection}"`;
          break;
        case 'heading':
          json += `
          {
            "section": {
              "type": "${type}",
              "text": "${thisSection.querySelector('[data-input="text"]').value}"
            }
          }`;
          break;
        case 'paragraph':
          json += `
          {
            "section": {
              "type": "${type}",
              "text": "${thisSection.querySelector('[data-input="text"]').value}"
            }
          }`;
          break;
        case 'question':
          json += `
          {
            "section": {
              "type": "${type}",
              "text": "${thisSection.querySelector('[data-input="text"]').value}"
            }
          }`;
          break;
        case 'bulletList':
          list = '';
          for (let ii = 0; ii < thisSection.querySelectorAll('[data-input="list"]').length; ii += 1) {
            if (thisSection.querySelectorAll('[data-input="list"]')[ii].value) {
              let comma = ',';
              if ((ii + 1) === (thisSection.querySelectorAll('[data-input="list"]').length)) {
                comma = '';
              }
              list += `"${thisSection.querySelectorAll('[data-input="list"]')[ii].value}"${comma}`;
            }
          }
          json += `
          {
            "section": {
              "type": "${type}",
              "text": "${thisSection.querySelector('[data-input="text"]').value}"
              "list": [
                ${list}
              ]
            }
          }`;
          break;
        case 'numberedList':
          list = '';
          for (let ii = 0; ii < thisSection.querySelectorAll('[data-input="list"]').length; ii += 1) {
            if (thisSection.querySelectorAll('[data-input="list"]')[ii].value) {
              let comma = ',';
              if ((ii + 1) === (thisSection.querySelectorAll('[data-input="list"]').length)) {
                comma = '';
              }
              list += `"${thisSection.querySelectorAll('[data-input="list"]')[ii].value}"${comma}`;
            }
          }

          json += `
          {
            "section": {
              "type": "${type}",
              "text": "${thisSection.querySelector('[data-input="text"]').value}"
              "list": [
                ${list}
              ]
            }
          }`;
          break;
        case 'soundcloud':
          json += `
          {
            "section": {
              "type": "${type}",
              "text": "${thisSection.querySelector('[data-input="url"]').value}"
            }
          }`;
          break;
        case 'youtube':
          json += `
          {
            "section": {
              "type": "${type}",
              "text": "${thisSection.querySelector('[data-input="url"]').value}"
            }
          }`;
          break;
        case 'link':
          const linkSection =
            thisSection.querySelector('[data-input="linkType"]').options[thisSection.querySelector('[data-input="linkType"]').selectedIndex].value;
          json += `
          {
            "section": {
              "type": "${type}",
              "linkType": "${linkSection}",
              "text": "${thisSection.querySelector('[data-input="text"]').value}",
              "url": "${thisSection.querySelector('[data-input="url"]').value}"
            }
          }`;
          break;
        default:
      }
      json += `${blockComma}`;
    }
    json += '}';
    console.log(json);
  },

  render() {
    // if (!thijsonGens.grid) {
    //   return;
    // }

    // appends section
    jsonGen.addSection.addEventListener('click', jsonGen.appendSection, false);

    // removes section
    for (let i = 0; i < jsonGen.remove.length; i += 1) {
      jsonGen.remove[i].addEventListener('click', () => jsonGen.removeSection(jsonGen.remove[i]), false);
    }

    // generates json
    jsonGen.generate.addEventListener('click', jsonGen.generateJSON, false);
  }
};

export default jsonGen;
