exports.format = (results, timings) => {
  const { misspellings, count, dict, words } = results

  const { load, check, size, unload } = timings

  const template =
    `MISSPELLED WORDS

    ${misspellings}

    WORDS MISSPELLED:     ${count}
    WORDS IN DICTIONARY:  ${dict}
    WORDS IN TEXT:        ${words}
    TIME IN load:         ${load}ms
    TIME IN check:        ${check}ms
    TIME IN size:         ${size}ms
    TIME IN unload:       ${unload}ms
    TIME IN TOTAL:        ${load + check + size + unload}ms
    `

  return template
}
