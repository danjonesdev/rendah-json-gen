/* eslint-disable no-case-declarations */

const jsonGen = {
  sectionsContainer: document.querySelector('[data-sections-container]'),
  selectSection: document.querySelector('[data-section-select]'),
  addSection: document.querySelector('[data-add-section]'),
  generate: document.querySelector('[data-generate]'),

  init() {
    this.render();
  },

  appendSection() {
    const selectSection =
    jsonGen.selectSection.options[jsonGen.selectSection.selectedIndex].value;
    console.log(selectSection);

    let section;
    switch (selectSection) {
      case 'heading':
        section = `
          <div data-section="${selectSection}" class="bg-light-grey  pa3  mv2">
            <p class="pt2  fw6">${selectSection}</p>
            <label>Text</label>
            <input data-input="text" type="text" value="">
          </div>
        `;
        break;
      case 'paragraph':
        section = `
          <div data-section="${selectSection}" class="bg-light-grey  pa3  mv2">
            <p class="pt2  fw6">${selectSection}</p>
            <label>Text</label>
            <textarea data-input="text" rows="4" cols="80"></textarea>
          </div>
        `;
        break;
      case 'question':
        section = `
          <div data-section="${selectSection}" class="bg-light-grey  pa3  mv2">
            <p class="pt2  fw6">${selectSection}</p>
            <label>Text</label>
            <input data-input="text" type="text" value="">
          </div>
        `;
        break;
      case 'answer':
        section = `
          <div data-section="${selectSection}" class="bg-light-grey  pa3  mv2">
            <p class="pt2  fw6">${selectSection}</p>
            <label>Text</label>
            <textarea data-input="text" rows="4" cols="80"></textarea>
          </div>
        `;
        break;
      case 'bulletList':
        section = `
          <div data-section="${selectSection}" class="bg-light-grey  pa3  mv2">
            <p class="pt2  fw6">${selectSection}<span class="pl1  fw5">(10 max)</span></p>
            <label>Text</label>
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
          </div>
        `;
        break;
      case 'numberedList':
        section = `
          <div data-section="${selectSection}" class="bg-light-grey  pa3  mv2">
            <p class="pt2  fw6">${selectSection}<span class="pl1  fw5">(10 max)</span></p>
            <label>Text</label>
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
          </div>
        `;
        break;
      case 'soundcloud':
        section = `
          <div data-section="${selectSection}" class="bg-light-grey  pa3  mv2">
            <p class="pt2  fw6">${selectSection}</p>
            <label>URL</label>
            <input data-input="url" type="text" value="">
          </div>
        `;
        break;
      case 'youtube':
        section = `
          <div data-section="${selectSection}" class="bg-light-grey  pa3  mv2">
            <p class="pt2  fw6">${selectSection}</p>
            <label>URL</label>
            <input data-input="url" type="text" value="">
          </div>
        `;
        break;
      case 'link':
        section = `
          <div data-section="${selectSection}" class="bg-light-grey  pa3  mv2">
            <p class="pt2  fw6">${selectSection}</p>
            <label>linkType</label>
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
            <input data-input="url" type="text" value="">
          </div>
        `;
        break;
      default:
    }

    jsonGen.sectionsContainer.insertAdjacentHTML('beforeend', section);
  },

  generateSection() {
    const dataSections = document.querySelectorAll('[data-section]');
    let json = '';

    for (let i = 0; i < dataSections.length; i += 1) {
      const thisSection = dataSections[i];
      const type = thisSection.getAttribute('data-section');
      let list;

      switch (type) {
        case 'url':
          json += `"${type}": "${thisSection.querySelector('[data-input="text"]').value}",`;
          break;
        case 'title':
          json += `"${type}": "${thisSection.querySelector('[data-input="text"]').value}",`;
          break;
        case 'description':
          json += `"${type}": "${thisSection.querySelector('[data-input="text"]').value}",`;
          break;
        case 'created':
          json += `"${type}": "${thisSection.querySelector('[data-input="text"]').value}",`;
          break;
        case 'heading':
          json += `
          {
            "section": {
              "type": "${type}",
              "text": "${thisSection.querySelector('[data-input="text"]').value}"
            }
          },`;
          break;
        case 'paragraph':
          json += `
          {
            "section": {
              "type": "${type}",
              "text": "${thisSection.querySelector('[data-input="text"]').value}"
            }
          },`;
          break;
        case 'question':
          json += `
          {
            "section": {
              "type": "${type}",
              "text": "${thisSection.querySelector('[data-input="text"]').value}"
            }
          },`;
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
          },`;
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
          },`;
          break;
        default:
      }
    }
    console.log(json);
  },

  render() {
    // if (!thijsonGens.grid) {
    //   return;
    // }

    // appends section
    jsonGen.addSection.addEventListener('click', jsonGen.appendSection, false);

    // generates json
    jsonGen.generate.addEventListener('click', jsonGen.generateSection, false);
  }
};

export default jsonGen;
