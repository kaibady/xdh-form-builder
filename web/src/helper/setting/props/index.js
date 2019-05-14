import text from './text'
import radio from './radio'
import checkbox from './checkbox'
import switchItem from './switch'
import select from './select'
import date from './date'
import time from './time'
import cascader from './cascader'
import divider from './divider'
import number from './number'
import rate from './rate'
import slider from './slider'

function getConfig(props) {
  const result = []
  
  Object.keys(props).forEach(key => {
    
    
    let prop = props[key]
    // {}
    // {required:true}
    // {type: Number}
    // {type: [Number]}
    // [Number]
    // Number
    if (!prop.type) {
      const types = [Number, String, Boolean, Object, Function, Array]
      prop = {
        type: Array.isArray(prop) ? prop : (types.includes(prop) ? prop : String)
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
        type: 'number',
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
    } else if (prop.type.includes(Array)) {
      result.push({
        label: key,
        prop: key,
        type: 'select',
        props: {
          multiple: true,
          filterable: true,
          allowCreate: true,
          defaultFirstOption: true
        }
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
  time: getConfig(time),
  cascader: getConfig(cascader),
  divider: getConfig(divider),
  number: getConfig(number),
  rate: getConfig(rate),
  slider: getConfig(slider)
}
