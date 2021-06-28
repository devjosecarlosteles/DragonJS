interface extensionLangProps {
  language?: string;
  extension?: string;
}

function extensionLang({ language, extension }: extensionLangProps) {
  let lang = ''
  
  if (language === 'javascript') lang = 'js'
  if (extension === 'js') lang = 'javascript'
  if (language === 'typescript') lang = 'ts'
  if (extension === 'ts') lang = 'typescript'

  return lang
}

export default extensionLang