shorten

const shortenText = (text, maxLength) > {
  if(text && text.length > maxLength){
    return text.substr(0, maxLength) + '...'
  }
  return text
}
