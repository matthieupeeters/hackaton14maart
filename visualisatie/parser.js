

FHIR = {
  "resourceType": "Questionnaire",
  "id": "3141",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <pre>\n            1.Comorbidity?\n              1.1 Cardial Comorbidity\n                1.1.1 Angina?\n                1.1.2 MI?\n              1.2 Vascular Comorbidity?\n              ...\n            Histopathology\n              Abdominal\n                pT category?\n              ...\n          </pre>\n    </div>"
  },
  "url": "http://hl7.org/fhir/Questionnaire/3141",
  "title": "Cancer Quality Forum Questionnaire 2012",
  "status": "draft",
  "subjectType": [
    "Patient"
  ],
  "date": "2012-01",
  "item": [
    {
      "linkId": "1",
      "code": [
        {
          "system": "http://example.org/system/code/sections",
          "code": "COMORBIDITY"
        }
      ],
      "type": "group",
      "item": [
        {
          "linkId": "1.1",
          "code": [
            {
              "system": "http://example.org/system/code/questions",
              "code": "COMORB"
            }
          ],
          "prefix": "1",
          "type": "choice",
          "answerValueSet": "http://hl7.org/fhir/ValueSet/yesnodontknow",
          "item": [
            {
              "linkId": "1.1.1",
              "code": [
                {
                  "system": "http://example.org/system/code/sections",
                  "code": "CARDIAL"
                }
              ],
              "type": "group",
              "enableWhen": [
                {
                  "question": "1.1",
                  "operator": "=",
                  "answerCoding": {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0136",
                    "code": "Y"
                  }
                }
              ],
              "item": [
                {
                  "linkId": "1.1.1.1",
                  "code": [
                    {
                      "system": "http://example.org/system/code/questions",
                      "code": "COMORBCAR"
                    }
                  ],
                  "prefix": "1.1",
                  "type": "choice",
                  "answerValueSet": "http://hl7.org/fhir/ValueSet/yesnodontknow",
                  "item": [
                    {
                      "linkId": "1.1.1.1.1",
                      "code": [
                        {
                          "system": "http://example.org/system/code/questions",
                          "code": "COMCAR00",
                          "display": "Angina Pectoris"
                        },
                        {
                          "system": "http://snomed.info/sct",
                          "code": "194828000",
                          "display": "Angina (disorder)"
                        }
                      ],
                      "prefix": "1.1.1",
                      "type": "choice",
                      "answerValueSet": "http://hl7.org/fhir/ValueSet/yesnodontknow"
                    },
                    {
                      "linkId": "1.1.1.1.2",
                      "code": [
                        {
                          "system": "http://snomed.info/sct",
                          "code": "22298006",
                          "display": "Myocardial infarction (disorder)"
                        }
                      ],
                      "prefix": "1.1.2",
                      "type": "choice",
                      "answerValueSet": "http://hl7.org/fhir/ValueSet/yesnodontknow"
                    }
                  ]
                },
                {
                  "linkId": "1.1.1.2",
                  "code": [
                    {
                      "system": "http://example.org/system/code/questions",
                      "code": "COMORBVAS"
                    }
                  ],
                  "prefix": "1.2",
                  "type": "choice",
                  "answerValueSet": "http://hl7.org/fhir/ValueSet/yesnodontknow"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "linkId": "2",
      "code": [
        {
          "system": "http://example.org/system/code/sections",
          "code": "HISTOPATHOLOGY"
        }
      ],
      "type": "group",
      "item": [
        {
          "linkId": "2.1",
          "code": [
            {
              "system": "http://example.org/system/code/sections",
              "code": "ABDOMINAL"
            }
          ],
          "type": "group",
          "item": [
            {
              "linkId": "2.1.2",
              "code": [
                {
                  "system": "http://example.org/system/code/questions",
                  "code": "STADPT",
                  "display": "pT category"
                }
              ],
              "type": "choice"
            }
          ]
        }
      ]
    }
  ]
};




function getReadable(FHIR) {
    if(FHIR.code[0].display) {
        return FHIR.code[0].display;
    } else {
        return FHIR.code[0].code;
    }
    
}


function getValueSet(FHIR) {
    if(FHIR.answerValueSet == 'http://hl7.org/fhir/ValueSet/yesnodontknow') {
        return ['Yes', 'No', 'Don\'t know'];
    }
    return [];
}

function parseItem(FHIR, nestingNumber) {
    let rv = '';
    if(FHIR.item) {
        console.log('Item found');
           for(let i = 0; i < FHIR.item.length; ++i)
        {
            console.log('Number' + i);
               rv += parseFHIR(FHIR.item[i], 1+nestingNumber);

            

        }   
            
        }
    return rv;
}

function parseFHIR(FHIR, nestingNumber) {
    let rv = "" ;
    if(!FHIR.type) {
        rv += `<div id="${FHIR.id}" >\n`;
        rv += `<title>${FHIR.title}</title>\n`;
        rv += parseItem(FHIR, nestingNumber);
        rv += '</div>\n';
    } else if(FHIR.type == 'choice') {
        
        rv += `<label>`+getReadable(FHIR)+`</label>\n`;
        rv += `<select id="${FHIR.linkId}">\n`;
        var valueSet = getValueSet(FHIR);
        for(let i = 0; i < valueSet.length; ++i) {
            rv += `<option value="${valueSet[i]}">${valueSet[i]}</option>\n`;
        }
        rv += '</select>\n';
        rv += parseItem(FHIR, nestingNumber);
        
    } else if (FHIR.type == 'group') {
        rv += `<label id="${FHIR.linkId}">`+getReadable(FHIR)+`</label>\n`;

        rv += parseItem(FHIR, nestingNumber);
    }
    return rv;
}



console.log("Hallo");

console.log(parseFHIR(FHIR, 0));



   

