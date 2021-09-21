// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(parent, targetLanguageCode, documentInputConfig) {
  // [START translation_translate_document_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Location to make a regional call.
   *  Format: `projects/{project-number-or-id}/locations/{location-id}`.
   *  For global calls, use `projects/{project-number-or-id}/locations/global`.
   *  Non-global location is required for requests using AutoML models or custom
   *  glossaries.
   *  Models and glossaries must be within the same region (have the same
   *  location-id), otherwise an INVALID_ARGUMENT (400) error is returned.
   */
  // const parent = 'abc123'
  /**
   *  Optional. The BCP-47 language code of the input document if known, for
   *  example, "en-US" or "sr-Latn". Supported language codes are listed in
   *  Language Support. If the source language isn't specified, the API attempts
   *  to identify the source language automatically and returns the source
   *  language within the response. Source language must be specified if the
   *  request contains a glossary or a custom model.
   */
  // const sourceLanguageCode = 'abc123'
  /**
   *  Required. The BCP-47 language code to use for translation of the input
   *  document, set to one of the language codes listed in Language Support.
   */
  // const targetLanguageCode = 'abc123'
  /**
   *  Required. Input configurations.
   */
  // const documentInputConfig = ''
  /**
   *  Optional. Output configurations.
   *  Defines if the output file should be stored within Cloud Storage as well
   *  as the desired output format. If not provided the translated file will
   *  only be returned through a byte-stream and its output mime type will be
   *  the same as the input file's mime type.
   */
  // const documentOutputConfig = ''
  /**
   *  Optional. The `model` type requested for this translation.
   *  The format depends on model type:
   *  - AutoML Translation models:
   *    `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`
   *  - General (built-in) models:
   *    `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`,
   *  If not provided, the default Google model (NMT) will be used for
   *  translation.
   */
  // const model = 'abc123'
  /**
   *  Optional. Glossary to be applied. The glossary must be within the same
   *  region (have the same location-id) as the model, otherwise an
   *  INVALID_ARGUMENT (400) error is returned.
   */
  // const glossaryConfig = ''
  /**
   *  Optional. The labels with user-defined metadata for the request.
   *  Label keys and values can be no longer than 63 characters (Unicode
   *  codepoints), can only contain lowercase letters, numeric characters,
   *  underscores and dashes. International characters are allowed. Label values
   *  are optional. Label keys must start with a letter.
   *  See https://cloud.google.com/translate/docs/advanced/labels for more
   *  information.
   */
  // const labels = 1234

  // Imports the Translation library
  const {TranslationServiceClient} = require('@google-cloud/translate').v3beta1;

  // Instantiates a client
  const translationClient = new TranslationServiceClient();

  async function translateDocument() {
    // Construct request
    const request = {
      parent,
      targetLanguageCode,
      documentInputConfig,
    };

    // Run request
    const response = await translationClient.translateDocument(request);
    console.log(response);
  }

  translateDocument();
  // [END translation_translate_document_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
