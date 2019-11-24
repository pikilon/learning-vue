const loadDynamicTemplate = async (templateUrl) => {
  try {
    const data = await fetch(templateUrl)
    const template = await data.text()
    return template
  } catch (error) {
    return //html
    `
      <p>template ${templateUrl} <strong>not found</strong>: ${JSON.stringify(error)}</p>
    `
  }
}

export const dynamicTemplate = (vueProps) => async () => {
  vueProps.template = await loadDynamicTemplate(vueProps.template)
  return vueProps
}
