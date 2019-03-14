

var FHIR =
{
  "resourceType": "Questionnaire",
  "status": "draft",
  "item": [
    {
      "type": "group",
      "required": false,
      "linkId": "/mamma",
      "code": [
        {
          "system": "Custom",
          "code": "cT",
          "display": "Mamma"
        }
      ],
      "text": "Mamma",
      "item": [
        {
          "type": "choice",
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-answerRepeats",
              "valueBoolean": true
            }
          ],
          "required": false,
          "linkId": "/cT/2.16.840.1.113883.2.4.3.11.31.1.77.12.2.10",
          "code": [
            {
              "system": "Custom",
              "code": "2.16.840.1.113883.2.4.3.11.31.1.77.12.2.10",
              "display": "Zijde"
            }
          ],
          "text": "Zijde",
          "repeats": true,
		  "option": [
            {
              "valueCoding": {
                "code": "21684011138832431131177211717771000",
                "display": "Links"
              }
            },
            {
              "valueCoding": {
                "code": "216840111388324311311772117124028007",
                "display": "Rechts"
              }
            }
          ]
        },
        {
          "type": "group",
          "required": false,
          "linkId": "/cT/links",
          "code": [
            {
              "system": "Custom",
              "code": "links",
              "display": "Links"
            }
          ],
          "text": "Links",
          "enableWhen": [
            {
              "question": "/cT/2.16.840.1.113883.2.4.3.11.31.1.77.12.2.10",
              "answerCoding": {
                "code": "21684011138832431131177211717771000"
              }
            }
          ],
          "item": [
            {
              "type": "choice",
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  "valueCodeableConcept": {
                    "coding": [
                      {
                        "system": "http://hl7.org/fhir/questionnaire-item-control",
                        "code": "Combo-box",
                        "display": "Combo-box"
                      }
                    ],
                    "text": "Combo-box"
                  }
                }
              ],
              "required": false,
              "linkId": "/cT/links/2.16.840.1.113883.2.4.3.11.31.1.77.12.2.396",
              "code": [
                {
                  "system": "Custom",
                  "code": "2.16.840.1.113883.2.4.3.11.31.1.77.12.2.396",
                  "display": "Lokalisatie (uren)"
                }
              ],
              "text": "Lokalisatie (uren)",
              "option": [
                {
                  "valueCoding": {
                    "code": "21684011138832431131177211701",
                    "display": "01.00"
                  }
                },
                {
                  "valueCoding": {
                    "code": "21684011138832431131177211702",
                    "display": "02.00"
                  }
                },
                {
                  "valueCoding": {
                    "code": "2168401113883243113117721170UNK",
                    "display": "Onbekend"
                  }
                }
              ]
            },
            {
              "type": "decimal",
              "required": false,
              "linkId": "/cT/links/2.16.840.1.113883.2.4.3.11.31.1.77.12.2.457",
              "code": [
                {
                  "system": "Custom",
                  "code": "2.16.840.1.113883.2.4.3.11.31.1.77.12.2.457",
                  "display": "Diameter"
                }
              ],
              "text": "Diameter"
            },
            {
              "type": "string",
              "required": false,
              "linkId": "/cT/links/Toelichting",
              "code": [
                {
                  "system": "Custom",
                  "code": "Toelichting",
                  "display": "Toelichting"
                }
              ],
              "text": "Toelichting"
            }
          ]
        },
        {
          "type": "group",
          "required": false,
          "linkId": "/cT/rechts",
          "code": [
            {
              "system": "Custom",
              "code": "rechts",
              "display": "Rechts"
            }
          ],
          "text": "Rechts",
          "enableWhen": [
            {
              "question": "/cT/2.16.840.1.113883.2.4.3.11.31.1.77.12.2.10",
              "answerCoding": {
                "code": "216840111388324311311772117124028007"
              }
            }
          ],
          "item": [
            {
              "type": "choice",
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  "valueCodeableConcept": {
                    "coding": [
                      {
                        "system": "http://hl7.org/fhir/questionnaire-item-control",
                        "code": "Combo-box",
                        "display": "Combo-box"
                      }
                    ],
                    "text": "Combo-box"
                  }
                }
              ],
              "required": false,
              "linkId": "/cT/rechts/2.16.840.1.113883.2.4.3.11.31.1.77.12.2.396",
              "code": [
                {
                  "system": "Custom",
                  "code": "2.16.840.1.113883.2.4.3.11.31.1.77.12.2.396",
                  "display": "Lokalisatie (uren)"
                }
              ],
              "text": "Lokalisatie (uren)",
              "option": [
                {
                  "valueCoding": {
                    "code": "21684011138832431131177211701",
                    "display": "01.00"
                  }
                },
                {
                  "valueCoding": {
                    "code": "21684011138832431131177211702",
                    "display": "02.00"
                  }
                },
                {
                  "valueCoding": {
                    "code": "2168401113883243113117721170UNK",
                    "display": "Onbekend"
                  }
                }
              ]
            },
            {
              "type": "decimal",
              "required": false,
              "linkId": "/cT/rechts/2.16.840.1.113883.2.4.3.11.31.1.77.12.2.457",
              "code": [
                {
                  "system": "Custom",
                  "code": "2.16.840.1.113883.2.4.3.11.31.1.77.12.2.457",
                  "display": "Diameter"
                }
              ],
              "text": "Diameter"
            },
            {
              "type": "string",
              "required": false,
              "linkId": "/cT/rechts/Toelichting",
              "code": [
                {
                  "system": "Custom",
                  "code": "Toelichting",
                  "display": "Toelichting"
                }
              ],
              "text": "Toelichting"
            }
          ]
        }
      ]
    }
  ]
};




function getReadable(FHIR) {
    if(undefined !== FHIR.text) {
        return FHIR.text;
    } else if(undefined !== FHIR.code && undefined !== FHIR.code[0].display) {
        return FHIR.code[0].display;
    } else if(undefined !== FHIR.code && undefined !== FHIR.code[0].code) {
        return FHIR.code[0].code;
    } else if(undefined !== FHIR.resourceType) {
        return FHIR.resourceType;
    } else {
        return "";
    }
}



function getValueSet(FHIR) {
    let rv = Array();
    if(undefined !== FHIR.answerValueSet && FHIR.answerValueSet == 'http://hl7.org/fhir/ValueSet/yesnodontknow') {
        return { 'Y': 'Yes', 'N': 'No', '?': 'Don\'t know'};
    } else if(undefined !== FHIR.answerOption) {
        for(let i = 0; i < FHIR.answerOption.length; ++i) {
            rv[FHIR.answerOption[i].code] = FHIR.answerOption[i].display; 
        }
    } else if(undefined !== FHIR.option) {
        for(let i = 0; i < FHIR.option.length; ++i) {
            rv[FHIR.option[i].valueCoding.code] = FHIR.option[i].valueCoding.display; 
        }
    }
    return rv;
}

function parseItem(FHIR, nestingNumber) {
    let rv = '';
    if(FHIR.item) {
        for(let i = 0; i < FHIR.item.length; ++i)
        {
            rv += parseFHIR(FHIR.item[i], 1+nestingNumber);
        }   
    }
    return rv;
}

var uniqueIds = Array();
var counter = 0;

function uniquifyId(FHIR) {
    let FHIRid = '';
    if(undefined !== FHIR.id) {
        FHIRid = FHIR.id;
    } else if (undefined !== FHIR.linkId) {
        FHIRid = FHIR.linkId;
    }
    let id = FHIRid;
    while(undefined !== uniqueIds[id]) {
        id = FHIRid + "-" + counter;
        ++counter;
        console.log(id);
    }
    uniqueIds[id] = id;
    return id;
}

function parseFHIR(FHIR, nestingNumber) {
    let rv = `<div class="nest_${nestingNumber}">`;
    if(!FHIR.type) {
        let id = uniquifyId(FHIR);
        rv += `<div id="${id}" >\n`;
        rv += `<h1>`+ getReadable(FHIR) + `</h1>\n`;
        rv += parseItem(FHIR, nestingNumber);
        rv += '</div>\n';
    } else if(FHIR.type == 'choice') {
        rv += `<label class="${FHIR.type}-type">`+getReadable(FHIR)+`</label>\n`;
        let id = uniquifyId(FHIR);
        rv += `<select id="${id}" name="${id}">\n`;
        let valueSet = getValueSet(FHIR);
        let valueKeys = Object.keys(valueSet);
        for(let i = 0; i < valueKeys.length; ++i) {
            rv += `<option value="${valueKeys[i]}">${valueSet[valueKeys[i]]}</option>\n`;
        }
        rv += '</select>\n';
        rv += parseItem(FHIR, nestingNumber);
    } else if (FHIR.type == 'group') {
        let id = uniquifyId(FHIR);
        rv += `<label id="${id}" class="${FHIR.type}-type">`+getReadable(FHIR)+`</label>\n`;
        rv += parseItem(FHIR, nestingNumber);
    } else if (FHIR.type == 'string' || FHIR.type == "decimal") {
        rv += `<label class="${FHIR.type}-type">`+getReadable(FHIR)+`</label>\n`;
        let id = uniquifyId(FHIR);
        rv += `<input class="input-type-${FHIR.type}" type="text" id="${id}" name="${id}" placeholder="type hier een waarde voor `+getReadable(FHIR)+`"/>`;
    }
    rv += '</div>';
    return rv;
}

   
