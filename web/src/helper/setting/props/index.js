import text from './text'
import radio from './radio'
import checkbox from './checkbox'
import switchItem from './switch'
import select from './select'
import date from './date'
import cascader from './cascader'
import divider from './divider'
import inputNumber from './input-number'
import rate from './rate'
import slider from './slider'

function getConfig(props) {
  const result = []
  
  Object.keys(props).forEach(key => {
    // if (key === 'value') return
    
    let prop = props[key]
    if (!prop.type) {
      prop = {
        type: prop
      }
    }
    prop.type = Array.isArray(prop.type) ? prop.type : [prop.type]
    if (prop.type.includes(String)) {
      result.push({
        label: key,
        prop: key,
        type: 'text'
      })
    } else if (prop.type.includes(Number)) {
      result.push({
        label: key,
        prop: key,
        type: 'inputNumber',
        props: {
          controlsPosition: 'right'
        }
      })
    } else if (prop.type.includes(Boolean)) {
      result.push({
        label: key,
        prop: key,
        type: 'switch',
        value: !!prop.default
      })
    } else if (prop.type.includes('select')) {
      result.push({
        label: key,
        prop: key,
        type: 'select',
        value: !!prop.default,
        options: prop.options
      })
    }
  })
  return result
}


export default {
  text: getConfig(text),
  radio: getConfig(radio),
  checkbox: getConfig(checkbox),
  switch: getConfig(switchItem),
  select: getConfig(select),
  date: getConfig(date),
  cascader: getConfig(cascader),
  divider: getConfig(divider),
  inputNumber: getConfig(inputNumber),
  rate: getConfig(rate),
  slider: getConfig(slider)
}
