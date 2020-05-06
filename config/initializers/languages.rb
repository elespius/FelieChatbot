# Based on ISO_639-3 Codes. ref: https://en.wikipedia.org/wiki/List_of_ISO_639-2_codes
# This Hash is used in account model, so do not change the index for existing languages

LANGUAGES_CONFIG = {
  0 => { name: 'English', iso_639_3_code: 'eng', iso_639_1_code: 'en', enabled: true },
  1 => { name: 'Arabic', iso_639_3_code: 'ara', iso_639_1_code: 'ar', enabled: false },
  2 => { name: 'Dutch', iso_639_3_code: 'nld', iso_639_1_code: 'nl', enabled: false },
  3 => { name: 'French', iso_639_3_code: 'fra', iso_639_1_code: 'fr', enabled: true },
  4 => { name: 'German', iso_639_3_code: 'deu', iso_639_1_code: 'de', enabled: true },
  5 => { name: 'Hindi', iso_639_3_code: 'hin', iso_639_1_code: 'hi', enabled: false },
  6 => { name: 'Italian', iso_639_3_code: 'ita', iso_639_1_code: 'it', enabled: false },
  7 => { name: 'Japanese', iso_639_3_code: 'jpn', iso_639_1_code: 'ja', enabled: false },
  8 => { name: 'Korean', iso_639_3_code: 'kor', iso_639_1_code: 'ko', enabled: false },
  9 => { name: 'Portuguese', iso_639_3_code: 'por', iso_639_1_code: 'pt', enabled: false },
  10 => { name: 'Russian', iso_639_3_code: 'rus', iso_639_1_code: 'ru', enabled: false },
  11 => { name: 'Chinese', iso_639_3_code: 'zho', iso_639_1_code: 'zh', enabled: false },
  12 => { name: 'Spanish', iso_639_3_code: 'spa', iso_639_1_code: 'es', enabled: false },
  13 => { name: 'Malayalam', iso_639_3_code: 'mal', iso_639_1_code: 'ml', enabled: true },
  14 => { name: 'Catalan', iso_639_3_code: 'cat', iso_639_1_code: 'ca', enabled: true }
}.freeze

Rails.configuration.i18n.available_locales = LANGUAGES_CONFIG.filter { |_index, lang| lang[:enabled] }
                                                             .map { |_index, lang| lang[:iso_639_1_code].to_sym }
