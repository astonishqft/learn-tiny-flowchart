import tinyFlowchartCore from '@tiny-flowchart/core'

interface Iopts {
  name: string
}
const helloTinyFlowchartCore = (opts: Iopts) => {
  tinyFlowchartCore({ name: opts.name })
}

helloTinyFlowchartCore({ name: 'tiny-flowchart-core' })

export default helloTinyFlowchartCore
